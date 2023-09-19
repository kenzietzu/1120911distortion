import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import Paragraph from "./Paragraph";
import state from "../store";
import { Html } from "@react-three/drei";
import { Block } from "../block";

function Content() {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  );
  useMemo(() => images.forEach((texture) => (texture) => texture), [images]);
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={0}>
          <Html center wrapperClass="htmlTitle" position={[0, 0, 0]}>
            GALLERY
          </Html>
        </Block>
        <Block factor={0}>
          <Html center wrapperClass="htmlSubtitle" position={[0, 0, 0]}>
            The coolest gallery of the world.
          </Html>
        </Block>
      </Block>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
    </>
  );
}

export default Content;
