import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import lerp from "lerp";
import { useRef } from "react";
import { useBlock } from "../block";
import state from "../store";
import "./DistortMaterial";

const ImagePlane = ({
  image,
  color = "white",
  shift,
  args,
  header,
  text,
  ...props
}) => {
  const { viewportHeight, offsetFactor } = useBlock();
  const materialRef = useRef();
  let last = state.top.current;
  const hasTexture = !!image;
  useFrame(() => {
    const { pages, top } = state;
    // define changing uScale
    materialRef.current.uScale = lerp(
      materialRef.current.uScale,
      offsetFactor - top.current / ((pages - 1) * viewportHeight),
      0.1
    );
    // define changing uShift
    materialRef.current.uShift = lerp(
      materialRef.current.uShift,
      (top.current - last) / shift,
      0.1
    );
    last = top.current;
  });

  return (
    <>
      <mesh {...props}>
        <planeGeometry args={args} />
        <distortMaterial
          ref={materialRef}
          uColor={color} // define uColor
          uTexture={image} // define uTexture
          hasTexture={hasTexture} // define hasTexture
        />
        <Html center wrapperClass="htmlHeader" position={[0, 0, 0]}>
          {header}
        </Html>
        <Html center wrapperClass="htmlText">
          {text}
        </Html>
      </mesh>
    </>
  );
};

export default ImagePlane;
