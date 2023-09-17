import React from "react";
import { Block, useBlock } from "../block";
import ImagePlane from "../shaders/ImagePlane";

const Paragraph = ({ image, aspect, offset, factor, index, header, text }) => {
  const { contentMaxWidth: w, mobile } = useBlock();
  const size = aspect < 1 && !mobile ? 0.65 : 1;

  return (
    <Block factor={factor} offset={offset}>
      <group position={[0, 0, 0]}>
        <ImagePlane
          image={image}
          args={[1, 1, 32, 32]}
          shift={75}
          size={size}
          aspect={aspect}
          scale={[w * size, (w * size) / aspect, 1]}
          frustumCulled={false}
          header={header}
          text={text}
        />
      </group>
    </Block>
  );
};

export default Paragraph;
