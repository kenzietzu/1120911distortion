import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import Paragraph from "./Paragraph";
import state from "../store";

function Content() {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  );
  useMemo(() => images.forEach((texture) => (texture) => texture), [images]);

  return (
    <>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
    </>
  );
}

export default Content;
