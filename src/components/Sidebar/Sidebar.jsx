import SidebarChoice from "./SidebarChoice";
import { SidebarHeader, SidebarContainer } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "/src/features/TokenSlice";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const Sidebar = ({ user, name }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(SET_TOKEN(null));
  };

  return (
    <SidebarContainer>
      <div className="icono"></div>

      {name ? (
        <SidebarHeader>{name} &apos;s Menu</SidebarHeader>
      ) : (
        <SidebarHeader>Menu</SidebarHeader>
      )}
      <hr />
      <Link to="/" className="link">
        <SidebarChoice title="Home" Icon={HomeRoundedIcon} />
      </Link>
      <Link className="blogItem-link" to={`/post?user=${user}`}>
        <div className="postprueba">
          <SidebarChoice title="Posts" Icon={PostAddIcon} />
        </div>
      </Link>
      <Link to="/album" className="link">
        <SidebarChoice title="Album" Icon={PhotoAlbumIcon} />
      </Link>
      <div className="logout" onClick={handleLogout}>
        <SidebarChoice title="Logout" Icon={LogoutIcon} />
      </div>
      <hr />
    </SidebarContainer>
  );
};

export default Sidebar;
