import React, { Suspense } from "react";
import BoilerPlate from "../src";
const { App, Components } = BoilerPlate;
const { Display, ControlPad, SliderPad } = Components;

const BasicTogether = () => {
  const uState = 0;
  return (
    <App uState={uState}>
      <Suspense fallback={<div />}>
        <Display />
        <ControlPad />
        <SliderPad />
      </Suspense>
    </App>
  );
};

export default BasicTogether;
