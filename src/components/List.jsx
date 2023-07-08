import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUser } from "../redux/actions";

export const List = ({ onEdit }) => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.appStore);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(deleteUser(id));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <table className="table-container container">
      <thead>
        <tr>
          <th>Sl no.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Gender</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {users.map((el, idx) => {
          return (
            <tr key={el.id}>
              <td>{idx + 1}</td>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.salary}</td>
              <td>{el.gender}</td>
              <td>
                <button onClick={() => onEdit(el)}>Edit</button>
                <button onClick={() => onDelete(el.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
