import { useState, useEffect } from "react";

export default function screenDimensions() {
  const [screenDimensions, setScreenDimensions] = useState<{ width: number, height: number }>({ width: undefined, height: undefined });

  useEffect(() => {
    setScreenDimensions({ width: window.innerWidth, height: window.innerHeight });
    function handleResize() { setScreenDimensions({ width: window.innerWidth, height: window.innerHeight }); }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenDimensions;
}
