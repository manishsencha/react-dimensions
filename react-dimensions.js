import React from "react";

export default function getDimensions() {
  const [dimensions, setDimensions] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    function updateDimensions() {
      setDimensions([window.innerHeight, window.innerWidth]);
    }
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return dimensions;
}
