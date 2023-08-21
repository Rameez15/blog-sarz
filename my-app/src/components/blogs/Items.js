import { Card, Divider } from "antd";
const { Meta } = Card;

export default function Item() {
  const imgStyle = {
    height: "130px",
    width: "140px",
    margin: "25px 0px 0px 25px",
    borderRadius: "8px",
  };
  return (
    <>
      <Card
        hoverable
        style={{
          width: 800,
          minHeight: 380,
          marginBottom: "2em",
        }}
        cover={
          <div>
            <img
              alt="example"
              src={"https://picsum.photos/id/5/200/300"}
              style={imgStyle}
            />
            <div style={{ padding: "25px 0px 0px 25px" }}>
              <Meta
                title="Europe Street beat"
                description="today i will make"
              />
            </div>
          </div>
        }
      >
        <div style={{ marginTop: "-25px" }}>
          <Divider />
          <div>
            {" "}
            Blogs are a type of regularly updated websites that provide insight
            into a certain topic. The word blog is a combined version of the
            words “web” and “log.” At their inception, blogs were simply an
            online diary where people could keep a log about their daily lives
            on the web. Blogs are a type of regularly updated websites that
            provide insight into a certain topic. The word blog is a combined
            version of the words “web” and “log.” At their inception, blogs were
            simply an online diary where people could keep a log about their
            daily lives on the web.
          </div>
        </div>
      </Card>
    </>
  );
}
