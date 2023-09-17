import { extend } from "@react-three/fiber";
import glsl from "babel-plugin-glsl/macro";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const DistortMaterial = shaderMaterial(
  // Uniform
  {
    uTexture: new THREE.Texture(),
    hasTexture: 0,
    uScale: 0, // materialRef.current.uScale
    uShift: 0, // materialRef.current.uShift
    uColor: new THREE.Color(0.8, 1.0, 1.0),
    uOpacity: 1,
  },
  // VertexShader
  glsl`
    uniform float uShift;
    varying vec2 vUv;

    void main() {
      vec3 pos = position;
      pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * uShift * 5.0) * 0.125);
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
    }
  `,
  // FragmentShader
  glsl`
    uniform float uScale;
    uniform float uShift;
    uniform sampler2D uTexture;
    uniform float hasTexture;
    uniform vec3 uColor;
    uniform float uOpacity;
    varying vec2 vUv;

    void main() {
      float angle = 1.55;
      vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - uScale) + vec2(0.5, 0.5);
      vec2 offset = uShift / 4.0 * vec2(cos(angle), sin(angle));
      vec4 cr = texture2D(uTexture, p + offset);
      vec4 cga = texture2D(uTexture, p);
      vec4 cb = texture2D(uTexture, p - offset);
      if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
      else gl_FragColor = vec4(uColor, uOpacity);
    }
  `
);

extend({ DistortMaterial });
