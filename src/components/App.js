import React, { useState, useEffect } from 'react';
import Chart from './Chart';

function App() {
  const winsize = useWindowSize();

  return (
    <div 
      style={{
        backgroundColor: '#000000',
        width: winsize.width,
        height: winsize.height,
        }}>
      <div
        style={{
          fontSize: 36,
          fontWeight: "800",
          color: "#9bb1ff", 
          textAlign: "center", 
          paddingTop: "60px",
          paddingBottom: "40px"}}
      >2022 Capstone Design simulation page</div>
      <div
        style={{
          fontSize: 18,
          fontWeight: "800",
          color: "#788bff", 
          textAlign: "right", 
          paddingRight: "7.5%",
          paddingBottom: "60px"}}
      >TEAM 오합지졸</div>

      <Chart/>

      <div style={{ display: "flex" }}>
        <button
          style={{
            backgroundColor: "#bfd7ff",
            color: "#000000",
            display: "inline-block",
            padding: "5px 12px",
            fontSize: "14px",
            cursor: "pointer",
            borderRadius: "6px",
            marginLeft: "auto",
            marginRight: "7.5%"
          }}>Run Simulation</button>
      </div>
    </div>
  );
}

// to make window reactive to user page
function useWindowSize(){
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize(){
      setWindowSize({
        width: window.innerWidth - 30,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener*("resize", handleResize)
  }, []);

  return windowSize;
}

export default App;