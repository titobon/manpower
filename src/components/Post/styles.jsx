import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;

  & button {
    background: transparent;
    cursor: pointer;
  }
  & .post {
    background: linear-gradient(#340034, #141275, #340034);
  }

  & .post:hover {
    background: linear-gradient(#a002a0, #2320c0, #940194);
  }
`;
