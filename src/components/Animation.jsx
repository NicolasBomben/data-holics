import { useEffect, useRef, useState } from "react";
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
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xc0c0c,
          color: 0xb35320,
          points: 13.0,
          maxDistance: 17.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className={`${styles.homeBox1}`} ref={myRef}>
      <h1 className={`${styles.homeMainTitle}`}>Innovate technology delivered</h1>
    </div>
  );
};
export default Animation;
