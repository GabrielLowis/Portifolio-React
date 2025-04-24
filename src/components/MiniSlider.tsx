import { useEffect, useState } from "react";
import styled from "styled-components";

type MiniSliderProps = {
  images: string[];
};

const MiniSlider = ({ images }: MiniSliderProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Wrapper>
      <TopText>READ MORE</TopText>
      {/* <BottomText>READ MORE</BottomText> */}
      <LeftText>READ MORE</LeftText>
      {/* <RightText>READ MORE</RightText> */}

      <SliderContainer>
        <Image src={images[index]} alt={`Slide ${index}`} />
      </SliderContainer>
    </Wrapper>
  );
};

export default MiniSlider;

const Wrapper = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  margin: 40px auto;
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.4s ease;
`;

const TextBase = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap');


  position: absolute;
  font-family: 'Sono', sans-serif;
  letter-spacing: 8px;
  font-size: 16px;
  color: black;
  white-space: nowrap; /* Evita quebra de linha */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Adiciona sombra ao texto */
`;

const TopText = styled(TextBase)`
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
`;

const BottomText = styled(TextBase)`
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
`;

const LeftText = styled(TextBase)`
  left: -20px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
`;

const RightText = styled(TextBase)`
  right: -20px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
`;

