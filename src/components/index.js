import React, { lazy } from "react";
// import Display from "./display";
// import ControlPad from "./controlpad";
// import SliderPad from "./slider";
// import DisplayAnimation from "./displayAnimation";

const Display = lazy(() => import("./display"));
const ControlPad = lazy(() => import("./controlpad"));
const SliderPad = lazy(() => import("./slider"));
const DisplayAnimation = lazy(() => import("./displayAnimation"));

const Components = {
  Display,
  ControlPad,
  SliderPad,
  DisplayAnimation
};

export default Components;
