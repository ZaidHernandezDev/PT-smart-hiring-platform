import { useState, useEffect } from 'react';

export default function useResponsiveValues(breakpoints = [], defaultValue) {
  const getValue = () => {
    for (const bp of breakpoints) {
      if (window.innerWidth <= bp.width) return bp.value;
    }
    return defaultValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handleResize = () => setValue(getValue());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return value;
}
