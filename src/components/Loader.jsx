import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark);
  color: var(--color-light);
  z-index: 200;
  /* position: absolute; */
  h1 {
    font-size: 60px;
  }
  .percent {
    margin-left: 10px;
  }
`;

const Loader = ({ setLoaded }) => {
  const loaderRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.to(".num", { innerText: 100, snap: "innerText", duration: 5 });
    }, loaderRef);

    setInterval(() => {
      setLoaded(true);
    }, 5000);
    return () => ctx.revert();
  }, [setLoaded]);

  return (
    <Section ref={loaderRef}>
      <h1 className="num">0</h1>
      <h1 className="percent">%</h1>
    </Section>
  );
};

export default Loader;
