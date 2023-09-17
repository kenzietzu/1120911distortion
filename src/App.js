import { Suspense, useEffect, useRef } from "react";
import GlobalStyles from "./GlobalStyles";
import { Canvas } from "@react-three/fiber";
import { styled } from "styled-components";
import Content from "./components/Content";
import state from "./store";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ScrollArea = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: auto;
`;

function App() {
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <Main>
      <GlobalStyles />
      <Canvas
        orthographic
        linear
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
        <Suspense fallback={null}>
          <Content />
        </Suspense>
      </Canvas>
      <ScrollArea ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div
            key={index}
            id={"0" + index}
            style={{ height: `${(state.pages / state.sections) * 100}vh` }}
          />
        ))}
      </ScrollArea>
    </Main>
  );
}

export default App;
