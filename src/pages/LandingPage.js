import React from "react";

import Header from "parts/Header";
import { useLocation } from "react-router-dom";

function LandingPage() {
  const location = useLocation();
  return (
    <>
      <Header location={location} />
    </>
  );
}

export default LandingPage;
