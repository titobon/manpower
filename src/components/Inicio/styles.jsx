import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;

  & h1,
  h2 {
    text-align: center;
  }

  .empty-library-text {
    color: white;
    height: 100vh;
  }
  .body {
    border-radius: 30px;
    width: 100%;
  }
  .users_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: auto;
    background: #340034;
    height: auto;
    border-radius: 30px;
  }

  .users_container > div {
    margin: 0 1rem 2rem 1rem;
    text-align: center;
  }

  img {
    display: inline-block;
    max-width: 100%;
    border-radius: 20%;
  }
  .image_container {
    padding: 10px;
    background: linear-gradient(#340034, #141275, #340034);
    border-radius: 10px;

    &:hover {
      background: linear-gradient(#570357, #19179a, #6d016d);
    }
  }
`;
