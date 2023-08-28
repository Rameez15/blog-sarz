import Form from "@/components/forms/signup";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const onSubmit = async (
    email,
    password,
    firstName,
    lastName,
    confPassword
  ) => {
    try {
      const response = await fetch("/api/auth/signup", {
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
        router.replace("/profile");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return <Form onFormSubmit={onSubmit} />;
}
