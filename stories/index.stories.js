import React from "react";

import { storiesOf } from "@storybook/react";
import Basic from "../demo/basic";
import BasicTwo from "../demo/basic2";
import BasicTogether from "../demo/basic3";
import LayoutEffectDemo from '../demo/uselayouteffect';

storiesOf("Basic Examples", module)
    .add("Basic Example", () => <Basic />)
    .add("Another Basic Example", () => <BasicTwo />)
    .add("All the Basics together", () => <BasicTogether />);

storiesOf('Basics+', module)
    .add("Using useLayoutEffect to make animejs work", ()=> <LayoutEffectDemo/>)