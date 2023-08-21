import Dinav from "../navbar/Dinav";
import Navbar from "../navbar/Navbar";

const Header = ({ handler, children }) => {
  const headerStyle = {
    color: "#33a3ff;",
    height: "42px",
    paddingInline: "40px",
    backgroundColor: "#f1f1f1",
  };
  const dinavStyle = {
    color: "#000;",
    height: "50px",
    paddingInline: "40px",
    marginTop: "-13px",
    marginBottom: "41px",
    backgroundColor: "#dfdcdc",
  };

  return (
    <>
      <div>
        <div style={headerStyle}>
          <Navbar handle={handler}>{children}</Navbar>
        </div>
        <div style={dinavStyle}>
          <Dinav />
        </div>
      </div>
    </>
  );
};
export default Header;
