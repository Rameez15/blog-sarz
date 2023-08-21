import Link from "next/link";
import { useRef } from "react";
import Header from "../header/Header";

export default function Forms({ signin, onFormSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (a) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email);
    console.log(password);
    a.preventDefault();
    onFormSubmit(email, password);
  };

  const mainStyle = {
    display: "flex",
    height: "31em",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "#000",
  };
  const inputStyle = {
    width: "30em",
    height: "2em",
    borderRadius: "4px",
    marginBottom: "1em",
    backgroundColor: "white",
  };
  const btnStyle = {
    width: "30em",
    height: "2em",
    backgroundColor: "#197fff",
    color: "#000",
    borderRadius: "5px 5px ",
  };
  const subStyle = {
    height: "340px",
    width: "470px",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    borderRadius: "6px",
    boxShadow: "0px 0px 5px #000",
    backgroundColor: "#fff",
  };
  return (
    <>
      <Header handler={true}>Signup</Header>
      <div id="main" style={mainStyle}>
        <div id="sudContainer" style={subStyle}>
          <div>
            <h2 style={{ paddingBottom: "10px", paddingTop: "15px" }}>
              Sign in to your account
            </h2>
          </div>

          <div>
            <form onSubmit={submitHandler}>
              <div>
                <div style={{ paddingBottom: "1em" }}>
                  <label>Email address</label>
                </div>
                <div>
                  <input
                    style={inputStyle}
                    ref={emailRef}
                    //   type="text"
                    //   name="email"
                    //   id="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
              <div>
                <div style={{ paddingBottom: "1em" }}>
                  <label>Password</label>
                </div>
                <div>
                  <input
                    style={inputStyle}
                    type="password"
                    name="password"
                    id="password"
                    ref={passwordRef}
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>
              <div style={{ paddingBottom: "1em" }}>
                <Link href={"/auth/Signup"}>
                  {"Do not have an account? SignUp"}
                </Link>
              </div>
              <div>
                <button style={btnStyle}>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
