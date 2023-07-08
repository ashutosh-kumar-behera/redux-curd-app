export const Input = ({
  getData,
  handleChange,
  onSubmit,
  getEdit,
  onUpdate,
}) => {
  return (
    <div className="container">
      <form action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={getData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={getData.email}
          onChange={handleChange}
        />
        <label htmlFor="salary">Salary</label>
        <input
          type="text"
          id="salary"
          name="salary"
          value={getData.salary}
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          id="gender-btn-1"
          value={"male"}
          onChange={handleChange}
        />
        <label htmlFor="gender-btn-1">Male</label>
        <input
          type="radio"
          name="gender"
          id="gender-btn-2"
          value={"female"}
          onChange={handleChange}
        />
        <label htmlFor="gender-btn-2">Female</label>
        {getEdit ? (
          <input type="submit" onClick={onUpdate} value={"Update"} />
        ) : (
          <input type="submit" onClick={onSubmit} value={"Add"} />
        )}
      </form>
    </div>
  );
};
