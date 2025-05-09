import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detecta el tema inicial
  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    
    // Actualiza la clase en el HTML
    document.documentElement.classList.toggle('dark', newDark);
    
    // Guarda la preferencia
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      className="p-2 rounded-full hover:bg-accent/50 transition-colors"
    >
      {isDark ? (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-gray-900 dark:text-white" 
          stroke="currentColor"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ) : (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-gray-900 dark:text-white" 
          stroke="currentColor"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
        </svg>
      )}
    </button>
  );
} 