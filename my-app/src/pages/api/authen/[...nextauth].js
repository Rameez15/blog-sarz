import {
  getByEmail,
  verifyPassword,
  getByFirstName,
  getByLastName,
  verifiedName,
} from "@/services/users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize({ email, password, firstName, lastName, confPassword }) {
        const user = getByEmail(email);
        if (!user) {
          throw new Error("User not Found");
        }
        const FName = getByFirstName(firstName);
        if (!FName) {
          throw new Error("User not Found");
        }

        const LName = getByLastName(lastName);
        if (!LName) {
          throw new Error("Last name not Found");
        }

        const finalNameCheck = verifiedName(firstName, lastName);
        if (!finalNameCheck) {
          throw new Error("Names are same");
        }

        const isValidforSave = await verifyPassword(confPassword, password);
        if (!isValidforSave) {
          throw new Error("Incorrect Password");
        }

        const isValid = await verifyPassword(user.password, password);
        if (!isValid) {
          throw new Error("Incorrect Password");
        }

        return { email };
      },
    }),
  ],
};
export default NextAuth(authOptions);
