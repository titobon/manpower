import { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "/src/features/TokenSlice";
import TextField from "@mui/material/TextField";
import { LoginButton, ErrorText } from "./styles";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();

  function handleLogin() {
    // Validar el formato de correo electrónico
    if (!isValidEmail(email)) {
      setEmailError("e-mail format not valid");
      return;
    }

    // Validar si se ingresó una contraseña
    if (!password) {
      setPasswordError("Enter your password");
      return;
    }

    // Realizar la llamada a la API
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          dispatch(SET_TOKEN(data.token));
        } else {
          setEmailError("E-mail or password not valid.");
        }
      })
      .catch((error) => console.error(error));
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <form>
      <TextField
        required
        id="outlined-required"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError("");
        }}
        variant="outlined"
        className="MuiOutlinedInput-root"
        InputLabelProps={{
          style: { color: "#0011ff" },
        }}
        InputProps={{
          style: { color: "#3a1db9" },
        }}
      />
      <TextField
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setPasswordError("");
        }}
        autoComplete="current-password"
        variant="outlined"
        className="MuiOutlinedInput-root"
        InputLabelProps={{
          style: { color: "#0011ff" },
        }}
        InputProps={{
          style: { color: "#3a1db9" },
        }}
      />
      {emailError && <ErrorText>{emailError}</ErrorText>}{" "}
      {passwordError && <ErrorText>{passwordError}</ErrorText>}{" "}
      <LoginButton type="button" onClick={handleLogin}>
        Sign-in
      </LoginButton>
    </form>
  );
}
