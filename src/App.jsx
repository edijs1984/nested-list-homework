import React, { useState } from "react";

import { Button } from "./components/styleComponets/Button.styles";
import { GlobalStyle } from "./components/styleComponets/globalStyle";

import { DataProvider } from "./context/DataContext";
import List from "./pages/List";
const App = () => {
  const [modal, setModal] = useState({ visible: false, type: "" });

  return (
    <DataProvider>
      <div style={{ padding: "2%" }}>
        <Button onClick={() => setModal({ visible: true, type: "category" })}>
          Add category
        </Button>
        <Button onClick={() => setModal({ visible: true, type: "brand" })}>
          Add brand
        </Button>
        <Button onClick={() => setModal({ visible: true, type: "product" })}>
          Add product
        </Button>
        <List modal={modal} />

        <GlobalStyle />
      </div>
    </DataProvider>
  );
};

export default App;
