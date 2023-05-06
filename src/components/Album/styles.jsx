import styled from "styled-components";

export const AlbumContainer = styled.div`
  display: flex;
  & ul {
    margin: 40px;
  }
  & h2 {
    margin: 10px;
  }
  .empty-library-text {
    color: white;
    height: 100vh;
  }

  & .contactosAlbum {
    padding: 4px;
    background: #0cb5bb;
    border-radius: 10px;
    cursor: pointer;
    transition: 300ms color ease-in;
  }
  & .contactosAlbum:hover {
    background-color: #0c758f;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .flex > div {
    margin: 0 1rem 2rem 1rem;
    text-align: center;
  }
`;
