import styled from "styled-components";

export const SidebarContainer = styled.div`
  flex: 0.2;
  height: 100vh;
  background-color: #000000;
  min-width: 240px;
  color: #fff;
  position: sticky;

  & hr {
    border: 3px solid smokegray;
    width: 90%;
    margin: 10px auto;
  }
  & .link {
    text-decoration: none;
  }

  & .icono {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

export const SidebarHeader = styled.h2`
  margin: 5px 10px;
`;

export const Choices = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  color: gray;
  height: 40px;
  cursor: pointer;
  transition: 300ms color ease-in; //color transition nice!
  &:hover {
    color: white;
  }
`;
