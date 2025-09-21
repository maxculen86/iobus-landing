// Configuración de seguridad para el contacto
const MAX_REQUESTS_PER_HOUR = 5;
const COOLDOWN_PERIOD = 3600000; // 1 hora en milisegundos
const DAILY_RESET_HOUR = 0; // Reset a medianoche

export const contactConfig = {
  whatsapp: {
    number: '5491123973341', // Número de WhatsApp con código de país y sin espacios ni guiones
    formattedNumber: '+54 9 11 2397-3341', // Número formateado para mostrar
    defaultMessage: 'Hola, me gustaría solicitar una demo de iobus',
    security: {
      maxRequestsPerHour: MAX_REQUESTS_PER_HOUR,
      cooldownPeriod: COOLDOWN_PERIOD,
      dailyResetHour: DAILY_RESET_HOUR,
      allowedDomains: ['aiobus.com', 'www.aiobus.com', 'aiobus.pages.dev', 'localhost', 'localhost:5173'],
      minTimeBetweenClicks: 2000,
      validation: {
        requireReferrer: false,
        allowDirectAccess: true,
        validateOrigin: true
      }
    }
  },
  email: {
    contact: 'contacto@aiobus.com',
  },
  company: {
    name: 'Iobus',
    location: 'Buenos Aires, Argentina',
  },
} as const; 