import { useState, useRef } from "react";
import styled from "styled-components";

const Music = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const toggleAnimation = () => {
    setIsAnimating((prev) => {
      const newState = !prev;
      if (svgRef.current) {
        if (newState) {
          svgRef.current.unpauseAnimations();
        } else {
          svgRef.current.pauseAnimations();
        }
      }
      return newState;
    });
    console.log("Teste");
  };

  return (
    <StyledWrapper isAnimating={isAnimating} onClick={toggleAnimation}>
      <svg
        ref={svgRef}
        className="svg_preloader"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 248 248"
        enableBackground="new 0 0 248 248"
        xmlSpace="preserve"
      >
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -20"
          />
        </filter>
        <circle
          stroke="#fff"
          fill="none"
          strokeWidth={3}
          cx={124}
          cy={124}
          r={120}
        />
        <g id="shape" filter="url(#goo)">
          <circle
            stroke="#fff"
            fill="none"
            strokeWidth={10}
            cx={124}
            cy={124}
            r={105}
          />
          <circle
            fill="#fff"
            cx={0}
            cy={0}
            r={36}
            transform="translate(124 124)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              additive="sum"
              values="1.3;0.55;0.55;1.3"
              keyTimes="0;0.4;0.6;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle fill="#fff" cx={0} cy={0} r={22}>
            <animateMotion
              path="M124.1,124l-14.9-14.9c-22.3-22.3-2.5-60.3,28.4-54.4c13.3,2.6,26.1,9,36.4,19.4
          c10.1,10.1,16.5,22.4,19.2,35.4c6.5,31.3-31.7,51.9-54.3,29.3L124.1,124z"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle fill="#fff" cx={0} cy={0} r={22}>
            <animateMotion
              path="M124.1,124l15.2,15.2c22.2,22.2,2.5,60-28.3,54.2c-13.5-2.5-26.4-9-36.8-19.4c-8.9-8.9-14.9-19.5-18-30.7
          c-9.1-32.5,31.4-55.7,55.2-31.8L124.1,124z"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ isAnimating: boolean }>`
  .svg_preloader {
    width: 120px;
    height: 120px;
    cursor: pointer;
  }
`;

export default Music;
