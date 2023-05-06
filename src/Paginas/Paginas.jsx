import { Route, Routes } from "react-router-dom";
import Inicio from "../components/Inicio/Inicio";
import Album from "../components/Album/Album";
import Post from "../components/Post/Post";

const Paginas = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Inicio />} />
      <Route path="/album" exact element={<Album />} />
      <Route path="/post" exact element={<Post />} />
    </Routes>
  );
};

export default Paginas;
