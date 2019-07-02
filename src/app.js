/**
 * This Component takes advantage of  createContext & useContext React hooks to make props accesible even for components deep in the tree
 */
import React, { useState } from "react";
import AppContext from "./AppContext";
import update from "immutability-helper"; //making updates immutable

const App = props => {
  const { uState } = props;
  let [ctx, setCtx] = useState(uState);

  const updateCtx = value => {
    setCtx(update(ctx, { $set: value }));
  };

  return (
    <AppContext.Provider value={[ctx, updateCtx]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default App;
