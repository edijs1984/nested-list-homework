import React from "react";

import { GlobalStyle } from "./components/styleComponets/globalStyle";
import { TopButtons } from "./components/TopButtons";

import { DataProvider } from "./context/DataContext";
import List from "./pages/List";
const App = () => {
  return (
    <DataProvider>
      <div style={{ padding: "2%" }}>
        <TopButtons />
        <List />
        <GlobalStyle />
      </div>
    </DataProvider>
  );
};

export default App;
