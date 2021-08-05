import React from "react";

import { Button } from "./components/Button.styles";
import ListMain from "./ListMain";

const App = () => {
  return (
    <div>
      <div>
        <h2 style={{ padding: "10px" }}>Actions</h2>
        <Button>Add category</Button>
        <Button>Add brand</Button>
        <Button>Add product</Button>
      </div>
      <ListMain />
    </div>
  );
};

export default App;
