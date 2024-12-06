import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

// Define the custom backInUp animation
const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0) scale(0.7);
  }

  80% {
    opacity: 0.8;
    transform: translate3d(0, 0, 0) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

// Component using the animation
function CustomAnimation({ children }) {
  return <Reveal keyframes={customAnimation} >{children}</Reveal>;
}

export default CustomAnimation;
