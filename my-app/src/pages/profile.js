import Header from "@/components/header/Header";
import { Divider } from "antd";
import { getSession } from "next-auth/react";

export default function SignUp(props) {
  const mainContainer = {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  };
  const subContainer = {
    height: "25em",
    width: "60%",
    borderRadius: "20px",
    boxShadow: "0px 0px 5px #000",
  };

  const imgStyles = {
    backgroundColor: "khaki",
    width: "12em",
    height: "12em",
    borderRadius: "1em",
    margin: "2em 0em 0em 2em",
  };
  const nameStyles = {
    fontSize: "2.5em",
    fontWeight: "bold",
    margin: "4.4em 0em 0em 1em",
  };

  const { session } = props;
  console.log(session);
  return (
    <>
      <Header handler={true}>Log out</Header>

      <div style={mainContainer}>
        <div style={subContainer}>
          <div style={{ display: "flex" }}>
            <div>
              <img
                alt="example"
                src={"https://picsum.photos/id/1/200"}
                style={imgStyles}
              />
            </div>
            <div style={nameStyles}>Name of user</div>
          </div>
          <div style={{ margin: "2em 1em" }}>
            <Divider />
          </div>
          <div>
            <div style={{ marginLeft: "2em" }}>
              Blogs are a type of regularly updated websites that provide
              insight into a certain topic. The word blog is a combined version
              of the words “web” and “log.” At their inception, blogs were
              simply an online diary where people could keep a log about their
              daily lives on the web.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/Login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
