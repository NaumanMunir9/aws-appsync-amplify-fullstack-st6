// libraries
import React from "react";
import AmplifyClient from "../amplifyContext/client";

export default function wrapRootElement({ element }) {
  return <AmplifyClient>{element}</AmplifyClient>;
}
