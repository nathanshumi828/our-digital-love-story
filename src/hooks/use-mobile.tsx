import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Safe initialization
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    // 1. Establish a single, matching source of truth
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // 2. Use the event state (.matches) directly instead of window.innerWidth
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    // 3. Set the accurate initial check on mount
    setIsMobile(mql.matches);

    // 4. Attach event listener
    mql.addEventListener("change", onChange);
    
    // Cleanup safely
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}