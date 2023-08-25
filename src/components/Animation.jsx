import { useEffect, useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import NET from "vanta/dist/vanta.net.min";
import styles from "../styles/Home.module.css";

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
    <div className={`${styles.homeBox1}`} ref={myRef}>
      <Slide  direction={"down"} delay={1e1} cascade damping={1e-1}>
      <h1 className={`${styles.homeMainTitle}`}>
        Innovate technology
        <br/>
        <span className={`${styles.textQuaternary}`}>delivered</span>
      </h1>
      </Slide>
    </div>
  );
};
export default Animation;
