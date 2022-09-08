import { CSSProperties, useState } from "react";
import Lottie from "react-lottie";

export default function LottiePlayer({
  animationData,
  style,
}: {
  animationData: any;
  style?: CSSProperties;
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} style={style} />;
}
