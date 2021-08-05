import React, { useEffect, useState } from "react";

import List from "./List";

import axios from "axios";
//

export default function ListMain() {
  const [data, setData] = useState();

  const getData = async () => {
    const res = await axios.get("http://localhost:8000/categories");
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <List data={data} />
    </div>
  );
}
