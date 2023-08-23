import Forms from "@/components/forms/login";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const onSignin = async (email, password) => {
    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (data.ok) {
        router.replace("/profile");
      }
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return <Forms onFormSubmit={onSignin} />;
}
