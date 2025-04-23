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
    }, 3000); // troca a imagem a cada 3 segundos

    return () => clearInterval(interval); // limpa o intervalo ao desmontar
  }, [images.length]);

  return (
    <SliderContainer>
      <Image src={images[index]} alt={`Slide ${index}`} />
    </SliderContainer>
  );
};

export default MiniSlider;

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.4s ease;
`;
