import React, { Suspense } from "react";
import BoilerPlate from "../src";
const { App, Components } = BoilerPlate;
const { Display, ControlPad } = Components;

const Basic = () => {
  const uState = 0;
  return (
    <App uState={uState}>
      <Suspense fallback={<div />}>
        <Display />
        <ControlPad />
      </Suspense>
    </App>
  );
};

export default Basic;
