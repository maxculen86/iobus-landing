import { useCallback, useEffect, useReducer } from 'react';
import { contactConfig } from '../config/contact';

type SecurityState = {
  lastClickTime: number;
  requestCount: number;
  isBlocked: boolean;
  remainingTime: number;
  lastResetDate: string;
};

type SecurityAction = 
  | { type: 'LOAD_STATE'; payload: SecurityState }
  | { type: 'RESET_STATE' }
  | { type: 'BLOCK' }
  | { type: 'UNBLOCK' }
  | { type: 'UPDATE_STATE'; payload: Partial<SecurityState> };

function isValidOrigin(referrer: string | null): boolean {
  const { validation, allowedDomains } = contactConfig.whatsapp.security;
  
  if (!validation.requireReferrer && validation.allowDirectAccess && !referrer) {
    return true;
  }

  if (!referrer) return false;

  try {
    const url = new URL(referrer);
    return allowedDomains.some(domain => 
      url.hostname === domain || url.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}

function shouldResetDaily(state: SecurityState): boolean {
  const now = new Date();
  const lastReset = new Date(state.lastResetDate);
  
  if (now.getDate() !== lastReset.getDate()) {
    return true;
  }
  
  if (now.getHours() >= contactConfig.whatsapp.security.dailyResetHour && 
      lastReset.getHours() < contactConfig.whatsapp.security.dailyResetHour) {
    return true;
  }
  
  return false;
}

function reducer(state: SecurityState, action: SecurityAction): SecurityState {
  switch (action.type) {
    case 'LOAD_STATE':
      return action.payload;
    case 'RESET_STATE':
      return {
        ...state,
        lastClickTime: 0,
        requestCount: 0,
        isBlocked: false,
        lastResetDate: new Date().toISOString()
      };
    case 'BLOCK':
      return { ...state, isBlocked: true };
    case 'UNBLOCK':
      return {
        ...state,
        lastClickTime: Date.now(),
        requestCount: 1,
        isBlocked: false
      };
    case 'UPDATE_STATE':
      return {
        ...state,
        ...action.payload,
        isBlocked: (action.payload.requestCount || state.requestCount) >= contactConfig.whatsapp.security.maxRequestsPerHour
      };
    default:
      return state;
  }
}

export function useWhatsAppSecurity() {
  const [state, dispatch] = useReducer(reducer, {
    lastClickTime: 0,
    requestCount: 0,
    isBlocked: false,
    remainingTime: 0,
    lastResetDate: new Date().toISOString()
  });

  // Solo acceder a localStorage en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('whatsappSecurity');
      if (savedState) {
        dispatch({ type: 'LOAD_STATE', payload: JSON.parse(savedState) });
      }
    }
  }, []);

  // Solo guardar en localStorage en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('whatsappSecurity', JSON.stringify(state));
    }
  }, [state]);

  // Check for daily reset
  useEffect(() => {
    if (shouldResetDaily(state)) {
      dispatch({ type: 'RESET_STATE' });
    }
  }, [state]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    
    const now = Date.now();
    const timeSinceLastClick = now - state.lastClickTime;
    
    // Check minimum time between clicks
    if (timeSinceLastClick < contactConfig.whatsapp.security.minTimeBetweenClicks) {
      return;
    }

    // Check if blocked
    if (state.isBlocked) {
      if (now - state.lastClickTime > contactConfig.whatsapp.security.cooldownPeriod) {
        dispatch({ type: 'UNBLOCK' });
      } else {
        return;
      }
    }

    // Check request count
    if (state.requestCount >= contactConfig.whatsapp.security.maxRequestsPerHour) {
      dispatch({ type: 'BLOCK' });
      return;
    }

    // Validate origin
    if (!isValidOrigin(document.referrer)) {
      return;
    }

    // Update state and open WhatsApp
    dispatch({ type: 'UPDATE_STATE', payload: { lastClickTime: now, requestCount: state.requestCount + 1 } });

    const whatsappUrl = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(contactConfig.whatsapp.defaultMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, [state]);

  return {
    handleClick,
    isBlocked: state.isBlocked,
    remainingTime: state.isBlocked 
      ? Math.ceil((contactConfig.whatsapp.security.cooldownPeriod - (Date.now() - state.lastClickTime)) / 1000)
      : 0
  };
} 