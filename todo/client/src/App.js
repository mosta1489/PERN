import React, { Fragment } from "react";

// comoponents

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
};

export default App;
