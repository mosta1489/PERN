import React, { Fragment, useState } from "react";
const InputTodo = () => {
  const [description, setDescription] = useState("");
  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onSubmitForm = async (e) => {
    // e.preventDefault();
    const body = { description };
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      // setDescription("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={changeDescription}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
