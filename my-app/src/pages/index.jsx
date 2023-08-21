import Header from "@/components/header/Header";
import { Button } from "antd";

import Link from "next/link";

export default function () {
  const mainStyles = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "100px",
  };
  return (
    <>
      <Header handler={true}>Login</Header>

      <div style={mainStyles}>
        <Link style={{ textDecoration: "none" }} href={"/blogs"}>
          <div style={{ fontSize: "25px", marginBottom: "10px" }}>
            GO TO BLOGS...
          </div>
        </Link>
        <div style={{ paddingTop: "35px" }}>
          <Link href="/auth/Signup">
            <Button type="primary"> Sign Up </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
