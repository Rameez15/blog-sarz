import Link from "next/link";

const Dinav = () => {
  const headStyle = {
    fontSize: "25px",
    lineHeight: "51px",
  };
  return (
    <>
      <div>
        <div>
          {" "}
          <h1 style={headStyle}>
            <Link style={{ textDecoration: "none" }} href="/">
              Home
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Dinav;
