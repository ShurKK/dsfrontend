import React, { useContext } from "react";
import ContextContainer  from "../components/context_container";

const Header = ({ heroTitle }) => {
  const { appState, updateAppState } = useContext(ContextContainer);
  return (
    <header className="header">
        <h1 className="text-1 valign-text-middle header">{ heroTitle }</h1>
    </header>
  );
};

export default Header;