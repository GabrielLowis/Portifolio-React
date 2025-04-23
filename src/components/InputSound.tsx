import styled from "styled-components";

type Props = {
  visible: boolean;
};

const InputSound = ({ visible }: Props) => {
  return (
    <StyledWrapper $visible={visible}>
      <label className="slider">
        <input type="range" className="level" />
        <svg
          className="volume"
          xmlns="http://www.w3.org/2000/svg"
          width={512}
          height={512}
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d="M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z"
              fill="currentColor"
            />
            <path
              d="M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z"
              fill="currentColor"
            />
          </g>
        </svg>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(10px)"};
  transition: opacity 0.4s ease, transform 0.4s ease;
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

  .slider {
    --slider-width: 100%;
    --slider-height: 6px;
    --slider-bg: rgb(82, 82, 82);
    --slider-border-radius: 999px;
    --level-color: #fff;
    --level-transition-duration: 0.1s;
    --icon-margin: 15px;
    --icon-color: var(--slider-bg);
    --icon-size: 25px;

    cursor: pointer;
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .slider .volume {
    margin-right: var(--icon-margin);
    color: var(--icon-color);
    width: var(--icon-size);
    height: auto;
  }

  .slider .level {
    appearance: none;
    width: var(--slider-width);
    height: var(--slider-height);
    background: var(--slider-bg);
    overflow: hidden;
    border-radius: var(--slider-border-radius);
    transition: height var(--level-transition-duration);
    cursor: inherit;
  }

  .slider .level::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0;
    height: 0;
    box-shadow: -200px 0 0 200px var(--level-color);
  }

  .slider:hover .level {
    height: calc(var(--slider-height) * 2);
  }
`;

export default InputSound;
