import React, { Suspense } from "react";
import BoilerPlate from "../src";
const { App, Components } = BoilerPlate;
const { DisplayAnimation, SliderPad } = Components;

const AnimeDemo = () => {
  const uState = 0;
  return (
    <App uState={uState}>
      <Suspense fallback={<div></div>}>
        <div style={{ height: 100 }} />
        <DisplayAnimation />
        <SliderPad />
      </Suspense>
    </App>
  );
};

export default AnimeDemo;
