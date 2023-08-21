import { Button } from "antd";
import Link from "next/link";

const Navbar = ({ handle, children }) => {
  const text = children;

  const ibContStyle = {
    display: "flex",
    width: "100px",
    justifyContent: "space-between",
    marginTop: "2px",
  };
  const btnContainer = {
    display: "flex",
    fontSize: "16px",
    width: "5em",
    marginTop: "2px",
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
        <div style={handle ? btnContainer : btnHide}>
          <Link href={`/auth/${text}`}>
            <Button type="primary">{children}</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
