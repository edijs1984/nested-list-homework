import React from "react";

import { Button } from "./components/Button.styles";
import ListMain from "./ListMain";
import { DataContext, DataProvider } from "./context/DataContext";
const App = () => {
  return (
    <DataProvider>
      <div>
        <div>
          <h2 style={{ padding: "10px" }}>Actions</h2>
          <Button onClick={() => console.log("click")}>Add category</Button>
          <Button>Add brand</Button>
          <Button>Add product</Button>
        </div>
        <ListMain />
      </div>
    </DataProvider>
  );
};

export default App;
