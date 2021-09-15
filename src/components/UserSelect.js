import { useState } from "react";
import UserButtons from "./UserButtons.js";

function UserSelect({
  userList,
  onChangeUser,
  onChangeHideUserList,
  onDeleteUser,
  onAddUser,
}) {
  // console.log(userList)
  const [errors, setErrors] = useState([])

  const usersItem = userList.map((user) => (
    <UserButtons
      onChangeUser={onChangeUser}
      onDeleteUser={onDeleteUser}
      onChangeHideUserList={onChangeHideUserList}
      key={user.id}
      name={user.username}
      id={user.id}
      user={user}
    />
  ));

  const [formData, setFormData] = useState({
    username: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: formData.username,
    };
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    const data = await response.json()
    if (response.ok) {
      onAddUser(data)
    } else {
      setErrors(data.errors)
      console.log(data.errors)
    }
  }

  return (
    <div className={"user-select"}>
      <p>
        Please select your username. Go ahead and click it twice until I figure out why it doesn't work the first time.
      </p>
      <p>{errors}</p>
      <div className={"p-1"}>
        <form onSubmit={handleSubmit}>
          <input
            className={""}
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          ></input>
          <input
            className={""}
            type="submit"
            value="Add User"
          ></input>
        </form>
      </div>
      {usersItem}
    </div>
  );
}

export default UserSelect;