import { useState, useEffect } from "react";

interface CountUpProps {
  end: number;
  start: number;
  children: (data: { count: number }) => void;
}

const CountUp = ({ children, ...props }: CountUpProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= props.end) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return <>{children({ count })}</>;
};

export default CountUp;
