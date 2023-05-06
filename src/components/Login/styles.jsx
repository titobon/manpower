import styled from "styled-components";

export const ErrorText = styled.div`
  display: flex;
  justify-content: center;
`;
const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #000000;
  color: white;
  form {
    display: flex;
    flex-direction: column;
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    margin: 10px;
    border-color: #0011ff;
  }
`;

const LoginButton = styled.a`
  margin: auto;
  margin-top: 20px;
  padding: 20px;
  background-color: #3a1db9;
  border-radius: 90px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
`;

export { LoginContainer, LoginButton };
