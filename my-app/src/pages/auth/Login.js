import Forms from "@/components/forms/login";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const onSubmit = async (email, password) => {
    const data = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(data);
  };
  return <Forms onFormSubmit={onSubmit} />;
}
