import { node } from "prop-types";
import React from "react";

import Header from "../Header";

export default function Screen({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Screen.propTypes = {
  children: node.isRequired,
};
