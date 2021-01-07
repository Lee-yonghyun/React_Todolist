import React from "react";
import Todotemp from "./components/Todotemp";
import Form from "./components/Form";

const App = () => {
  return <Todotemp form={<Form />}>템플릿 완성</Todotemp>;
};

export default App;
