import Header from "../../components/header/Header";
import Item from "@/components/blogs/Items";

export default function Blog() {
  const blogContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <>
      <Header handler={false}>log out</Header>

      <div style={blogContainer}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
}
