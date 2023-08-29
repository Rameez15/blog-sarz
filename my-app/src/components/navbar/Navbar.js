import { Button } from "antd";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Navbar = ({ handle, children }) => {
  const handleBtn = () => {
    if (children === "Log out") {
      return true;
    } else {
      return false;
    }
  };

  const ibContStyle = {
    display: "flex",
    width: "15em",
    justifyContent: "space-between",
  };

  const secConStyle = {
    display: "flex",
    marginLeft: "6em",
  };
  const secContHandle = {
    display: "flex",
  };

  const btnContainer = {
    fontSize: "16px",
    width: "5em",
    marginTop: "2px",
    marginLeft: "0.5em",
  };
  const btnHide = {
    visibility: "hidden",
  };

  const headStyle = { fontSize: "20px", lineHeight: "6px" };
  return (
    <>
      <div id="nav-main">
        <div>
          <h1 style={headStyle}>SARZ</h1>
        </div>

        <div style={ibContStyle}>
          <div style={handle ? secConStyle : secContHandle}>
            <div style={handle ? btnContainer : btnHide}>
              <Button onClick={signOut} type="primary">
                Sign Out
              </Button>
            </div>
            <div style={btnContainer}>
              <Link href={`/profile`}>
                <Button type="primary">Profile</Button>
              </Link>
            </div>
            <div style={handle ? btnHide : btnContainer}>
              <Link href={`/auth/${children}`}>
                <Button type="primary">{children}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div>
            <Button onClick={signOut} type="primary">
              Sign Out
            </Button>
          </div> */
}
