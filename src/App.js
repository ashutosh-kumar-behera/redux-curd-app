import React, { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { useDispatch } from "react-redux";
import { createUser, updateUser } from "./redux/actions";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  const navigate = useNavigate();

  const [getData, setData] = useState({
    name: "",
    email: "",
    salary: "",
    gender: "",
  });
  const [getEdit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...getData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(getData));
    setData({ name: "", email: "", salary: "", gender: "" });
    navigate("/");
  };

  const onEdit = (el) => {
    setData(el);
    setEdit(true);
    navigate("/update");
  };

  const onUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(getData));
    setData({ name: "", email: "", salary: "", gender: "" });
    setEdit(false);
    navigate("/");
  };

  return (
    <div className="App">
      <Header getEdit={getEdit} />
      <Routes>
        <Route path="/" element={<List onEdit={onEdit} />} />
        {getEdit ? (
          <Route
            path="/update"
            element={
              <Input
                getData={getData}
                handleChange={handleChange}
                onSubmit={onSubmit}
                getEdit={getEdit}
                onUpdate={onUpdate}
              />
            }
          />
        ) : (
          <Route
            path="/create"
            element={
              <Input
                getData={getData}
                handleChange={handleChange}
                onSubmit={onSubmit}
                getEdit={getEdit}
                onUpdate={onUpdate}
              />
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
