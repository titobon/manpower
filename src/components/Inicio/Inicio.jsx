import * as React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { HomeContainer } from "./styles";

export default function Inicio() {
  const [users, setUsers] = React.useState([]);
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [selectedName, setSelectedName] = React.useState(null);

  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };

  React.useEffect(() => {
    f();
  }, []);

  const handleSidebar = (user) => {
    setShowSidebar(!showSidebar);
    setSelectedUser(user.id);
    setSelectedName(user.first_name);
    console.log(user);
  };

  return (
    <>
      <HomeContainer>
        {showSidebar && <Sidebar user={selectedUser} name={selectedName} />}
        <div className="body">
          <h1>Welcome </h1>
          <h2>This are our Users!</h2>
          <h2>Click them to see their Posts</h2>
          <div className="users_container">
            {users.map((user) => {
              return (
                <div
                  className="image_container"
                  key={user.id}
                  onClick={() => {
                    handleSidebar(user);
                  }}
                >
                  <p>
                    <strong>{user.first_name}</strong>
                  </p>
                  <img key={user.avatar} src={user.avatar} alt="avatar" />
                </div>
              );
            })}
          </div>
        </div>
      </HomeContainer>
    </>
  );
}
