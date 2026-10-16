import { useState } from "react";
import { motion, useSpring, transform } from "framer-motion";

const UseMotion = ({ children }: { children: React.ReactNode }) => {
  const [frame, setFrame] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const rotateValue = 15;
  const transformValue = rotateValue * 2;
  const springValue = { stiffness: 400, damping: 30 };

  const x = useSpring(0, springValue);
  const y = useSpring(0, springValue);
  const rotateX = useSpring(0, springValue);
  const rotateY = useSpring(0, springValue);
  const shadowX = useSpring(0, springValue);
  const shadowY = useSpring(30, springValue);

  const convertCursorPosition = (e: any) => {
    const objectX = (e.nativeEvent.clientX - frame.left) / frame.width;
    const objectY = (e.nativeEvent.clientY - frame.top) / frame.height;

    rotateX.set(transform(objectY, [0, 1], [rotateValue, -rotateValue]));
    rotateY.set(transform(objectX, [0, 1], [-rotateValue, rotateValue]));
    x.set(transform(objectX, [0, 1], [-transformValue, transformValue]));
    y.set(transform(objectY, [0, 1], [-transformValue, transformValue]));

    shadowX.set(transform(objectX, [0, 1], [20, -20]));
    shadowY.set(transform(objectY, [0, 1], [60, 20]));
  };

  const handleMouseEnter = (e: any) => {
    const currentElement = e.target.getBoundingClientRect();

    setFrame({
      width: currentElement.width,
      height: currentElement.height,
      top: currentElement.top,
      left: currentElement.left,
    });

    convertCursorPosition(e);
  };

  const handleMouseMove = (e: any) => convertCursorPosition(e);

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
    shadowX.set(0);
    shadowY.set(40);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: "pointer",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default UseMotion;
