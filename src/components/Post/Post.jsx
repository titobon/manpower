import * as React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { PostContainer } from "./styles";

export default function Post() {
  const [users, setUsers] = React.useState([]);

  const fetchUsers = async (user) => {
    console.log("hola", user);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user}`
    );
    const json = await res.json();
    setUsers(json);
    console.log("holados", json);
  };

  const handleDelete = (postId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== postId));
  };

  React.useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const user = urlSearchParams.get("user");
    fetchUsers(user);
  }, []);

  return (
    <PostContainer>
      <Sidebar />
      <div>
        <h1> Posts!</h1>
        {users.length > 0 && (
          <div>
            {users.map((useri) => (
              <div key={useri.id} className="post">
                <h2>{useri.title}</h2>
                <p>{useri.body}</p>
                <button onClick={() => handleDelete(useri.id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </PostContainer>
  );
}
