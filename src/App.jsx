import React, { ReactFragment } from "react";

import { Button, SmButton } from "./components/Button.styles";
import List from "./List";

const App = () => {
  return (
    <div>
      <div>
        <h2 style={{ padding: "10px" }}>Actions</h2>
        <Button>Add category</Button>
        <Button>Add brand</Button>
        <Button>Add product</Button>
      </div>
      <List />
    </div>
  );
};

export default App;
