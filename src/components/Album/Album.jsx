import * as React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { AlbumContainer } from "./styles";

export default function Album() {
  const [users, setUsers] = React.useState([]);
  const [userAlbums, setUserAlbums] = React.useState([]);
  const [showAlbums, setShowAlbums] = React.useState(false);

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    const json = await res.json();
    setUsers(json);
    console.log("data");
  };

  const fetchAlbums = async (userId) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums/`
    );
    const json = await res.json();
    setUserAlbums(json);
    console.log(userAlbums);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AlbumContainer>
      <Sidebar />
      <div>
        <h1>Click to check their Albums!</h1>
        <div className="flex">
          {users.map((user) => {
            return (
              <div
                className="contactosAlbum"
                key={user.id}
                onClick={() => {
                  setShowAlbums(true);
                  fetchAlbums(user.id);
                }}
              >
                <p>
                  <strong>{user.name}</strong>
                </p>
              </div>
            );
          })}
        </div>
        {showAlbums && (
          <div>
            <h2>User Albums</h2>
            <ul>
              {userAlbums.map((album) => (
                <li key={album.id}>{album.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </AlbumContainer>
  );
}
