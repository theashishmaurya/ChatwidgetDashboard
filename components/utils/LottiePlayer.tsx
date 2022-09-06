import { CSSProperties, useState } from "react";
import Lottie from "react-lottie";

export default function LottiePlayer({
  animationData,
  style,
}: {
  animationData: any;
  style?: CSSProperties;
}) {
  const [isPaused, setIspaused] = useState(false);

  const [isStopped, setIsStopped] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      isStopped={isStopped}
      isPaused={isPaused}
      style={style}
    />
  );
}
