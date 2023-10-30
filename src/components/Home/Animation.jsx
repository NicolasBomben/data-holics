import { useEffect, useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import NET from "vanta/dist/vanta.net.min";
import "./home.css";

const Animation = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 400.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          backgroundColor: 0xf7f7f7,
          points: 20.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="homeBox1" ref={myRef}>
      <Slide direction={"down"} delay={1e1} cascade damping={1e-1}>
        <h1 className="homeMainTitle">
          Data revolution,
          <br />
          <span className="textQuaternary">simplified.</span>
        </h1>
      </Slide>
    </div>
  );
};
export default Animation;
