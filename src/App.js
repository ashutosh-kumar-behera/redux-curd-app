import { useState } from "react";
import { Input } from "./component/Input";
import { List } from "./component/List";
import { useDispatch } from "react-redux";
import { createUser, userUpdate } from "./redux/actions";

function App() {
  const [getInput, setInput] = useState({
    name: "",
    email: "",
    salary: "",
    gender: "",
  });
  const [getEdit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInput({ ...getInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(getInput));
    setInput({ name: "", email: "", salary: "", gender: "" });
  };

  const onEdit = (el) => {
    setInput(el);
    setEdit(true);
  };

  const onUpdate = (e) => {
    e.preventDefault();
    dispatch(userUpdate(getInput));
    setInput({ name: "", email: "", salary: "", gender: "" });
    setEdit(false);
  };

  return (
    <div>
      <Input
        getInput={getInput}
        onChangeHandler={onChangeHandler}
        onSubmit={onSubmit}
        getEdit={getEdit}
        onUpdate={onUpdate}
      />
      <List onEdit={onEdit} />
    </div>
  );
}

export default App;
