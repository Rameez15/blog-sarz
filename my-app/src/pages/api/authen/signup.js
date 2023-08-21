import { save } from "@/services/users";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(404).send();
  }
  const { email, password, firstName, lastName, confPassword } = req.body;
  try {
    save(email, password, firstName, lastName, confPassword);
    res.status(201).send();
  } catch (error) {
    res.status(404).json({ message: error });
  }
}
