import Form from "@/components/forms/signup";

export default function SignUp() {
  const onSubmit = async (
    email,
    password,
    firstName,
    lastName,
    confPassword
  ) => {
    try {
      const response = await fetch("/api/authen/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          confPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Sign up Succesful");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return <Form onFormSubmit={onSubmit} />;
}
