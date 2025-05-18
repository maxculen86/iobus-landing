interface IOBusLogoProps {
  className?: string;
  textSize?: string;
  hideIsologo?: boolean;
}

export function IOBusLogo({ className = "h-16", textSize = "text-3xl", hideIsologo = false }: IOBusLogoProps) {
  return (
    <span className={`flex items-center ${className}`}>
      {!hideIsologo && (
        <>
          <img 
            src="/logos/ISOLOGO-18.svg" 
            alt="IOBus Logo" 
            className="dark:hidden h-full"
          />
          <img 
            src="/logos/ISOLOGO-20.svg" 
            alt="IOBus Logo" 
            className="hidden dark:block h-full"
          />
        </>
      )}
      <span className={`${textSize} font-qurova lowercase ${!hideIsologo ? 'mt-1' : 'mb-0.5'}`}>
        <span className="bg-gradient-to-t from-[#000000] to-[#0260FB] dark:from-white dark:to-[#0260FB] bg-clip-text text-transparent">i</span>
        <span className="bg-gradient-to-tr from-[#000000] to-[#0260FB] dark:from-white dark:to-[#0260FB] bg-clip-text text-transparent">o</span>
        <span className="text-gray-900 dark:text-white">bus</span>
      </span>
    </span>
  );
} 