import '@testing-library/jest-dom';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useWhatsAppSecurity } from './useWhatsAppSecurity';
import { contactConfig } from '../config/contact';

const createMockEvent = () => ({
  preventDefault: jest.fn(),
  stopPropagation: jest.fn(),
  target: document.createElement('button')
}) as unknown as React.MouseEvent;

// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

// Mock window.open
const mockWindowOpen = jest.fn();
Object.defineProperty(window, 'open', { value: mockWindowOpen });

// Mock document.referrer
function mockReferrer(url: string) {
  Object.defineProperty(document, 'referrer', {
    value: url,
    writable: true
  });
}

describe('useWhatsAppSecurity', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLocalStorage.getItem.mockReturnValue(null);
    mockReferrer('https://aiobus.com');
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useWhatsAppSecurity());
    expect(result.current.isBlocked).toBe(false);
    expect(result.current.remainingTime).toBe(0);
  });

  it('should block after max requests per hour', () => {
    const { result } = renderHook(() => useWhatsAppSecurity());

    const minTime = contactConfig.whatsapp.security.minTimeBetweenClicks || 1000;
    let now = Date.now();
    const originalDateNow = Date.now;
    jest.spyOn(Date, 'now').mockImplementation(() => now);

    for (let i = 0; i < contactConfig.whatsapp.security.maxRequestsPerHour; i++) {
      act(() => {
        result.current.handleClick(createMockEvent());
      });
      now += minTime + 1;
    }

    act(() => {
      result.current.handleClick(createMockEvent());
    });

    act(() => {
      result.current.handleClick(createMockEvent());
    });

    expect(mockWindowOpen).toHaveBeenCalledTimes(contactConfig.whatsapp.security.maxRequestsPerHour);

    Date.now = originalDateNow;
  });

  it('should respect minimum time between clicks', () => {
    const { result } = renderHook(() => useWhatsAppSecurity());
    
    // First click
    act(() => {
      result.current.handleClick(createMockEvent());
    });

    // Try to click again immediately
    act(() => {
      result.current.handleClick(createMockEvent());
    });

    // Should only open WhatsApp once
    expect(mockWindowOpen).toHaveBeenCalledTimes(1);
  });

  it('should validate origin correctly', () => {
    const { result } = renderHook(() => useWhatsAppSecurity());
    
    // Test with invalid origin
    mockReferrer('https://malicious-site.com');
    act(() => {
      result.current.handleClick(createMockEvent());
    });
    expect(mockWindowOpen).not.toHaveBeenCalled();

    // Test with valid origin
    mockReferrer('https://aiobus.com');
    act(() => {
      result.current.handleClick(createMockEvent());
    });
    expect(mockWindowOpen).toHaveBeenCalled();
  });

  it('should reset daily', () => {
    // Mock saved state
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    mockLocalStorage.getItem.mockReturnValue(JSON.stringify({
      lastClickTime: Date.now(),
      requestCount: contactConfig.whatsapp.security.maxRequestsPerHour,
      isBlocked: true,
      lastResetDate: yesterday.toISOString()
    }));

    const { result } = renderHook(() => useWhatsAppSecurity());
    
    // Should be unblocked after daily reset
    expect(result.current.isBlocked).toBe(false);
  });

  it('should persist state in localStorage', async () => {
    const { result } = renderHook(() => useWhatsAppSecurity());
    
    act(() => {
      result.current.handleClick(createMockEvent());
    });

    await waitFor(() => {
      expect(mockLocalStorage.setItem).toHaveBeenCalled();
      const lastCall = mockLocalStorage.setItem.mock.calls.at(-1);
      const savedState = JSON.parse(lastCall[1]);
      expect(savedState.requestCount).toBe(1);
    });
  });

  it('should handle direct access correctly', () => {
    mockReferrer('');
    const { result } = renderHook(() => useWhatsAppSecurity());
    
    act(() => {
      result.current.handleClick(createMockEvent());
    });

    // Should work if allowDirectAccess is true
    expect(mockWindowOpen).toHaveBeenCalled();
  });
}); 