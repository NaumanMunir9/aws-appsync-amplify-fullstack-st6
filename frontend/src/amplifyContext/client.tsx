// libraries
import React, { ReactNode } from "react";
import { Amplify } from "aws-amplify";

// Amplify configuration file
import awsmobile from "../aws-exports";

interface props {
  children: ReactNode;
}

export default function amplifyClient({ children }: props) {
  Amplify.configure(awsmobile);
  return <div>{children}</div>;
}
