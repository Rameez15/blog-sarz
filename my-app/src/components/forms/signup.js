import Link from "next/link";
import { useRef } from "react";
import Header from "../header/Header";

export default function Form({ onFormSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const submitHandler = (a) => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confPassword = confPasswordRef.current.value;
    a.preventDefault();
    onFormSubmit(email, password, firstName, lastName, confPassword);
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
    border: "solid 1px",
    backgroundColor: "white",
  };
  const btnStyle = {
    width: "30em",
    height: "2em",
    backgroundColor: "#197fff",
    color: "#000",
    borderRadius: "5px 5px ",
    border: "solid 1px",
  };
  const subStyle = {
    height: "450px",
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
      <Header handler={false}>Login</Header>
      <div id="main" style={mainStyle}>
        <div style={subStyle}>
          <div>
            <h2 style={{ paddingBottom: "10px", paddingTop: "15px" }}>
              SignUp for new accout
            </h2>
          </div>

          <div>
            <form onSubmit={submitHandler}>
              <div>
                <input
                  style={inputStyle}
                  ref={firstNameRef}
                  type="text"
                  name="First Name"
                  autoComplete="Name"
                  required
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  style={inputStyle}
                  ref={lastNameRef}
                  id="I2"
                  type="text"
                  name="Last Name"
                  placeholder="Last Name"
                  autoComplete="Name"
                  required
                />
              </div>
              <div>
                <input
                  style={inputStyle}
                  ref={passwordRef}
                  type="password"
                  name="password"
                  id="I3"
                  placeholder="Password"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <input
                  style={inputStyle}
                  type="password"
                  name="password"
                  id="I4"
                  ref={confPasswordRef}
                  placeholder="Confirm password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <div style={{ marginBottom: "0.5em" }}>
                <div style={{ paddingBottom: "0.5em" }}>
                  <label>Email address</label>
                </div>
                <input
                  style={{
                    height: "2em",
                    borderRadius: "5px 5px",
                    width: "30em",
                    border: "solid 1px",
                  }}
                  id="I5"
                  ref={emailRef}
                  type="text"
                  required
                />
              </div>
              <div
                style={{
                  paddingBottom: "1em",
                  fontWeight: "bold",
                  paddingInline: "5em",
                }}
              >
                Already have an account?
                <Link style={{ paddingLeft: "6px" }} href={"/auth/Login"}>
                  {"Sign in"}
                </Link>
              </div>
              <div>
                <button style={btnStyle}>Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
