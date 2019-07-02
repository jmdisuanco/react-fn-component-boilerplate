import React, { Suspense } from "react";
import BoilerPlate from "../src";
const { App, Components } = BoilerPlate;
const { Display, SliderPad } = Components;

const BasicTwo = () => {
  const uState = 0;
  return (
    <App uState={uState}>
      <Suspense fallback={<div />}>
        <Display />
        <SliderPad />
      </Suspense>
    </App>
  );
};

export default BasicTwo;
