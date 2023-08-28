import Forms from "@/components/forms/login";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();
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
