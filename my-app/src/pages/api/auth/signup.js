import { save } from "@/services/users";
import { message } from "antd";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).send({});
  }
  const { email, password, firstName, lastName, confPassword } = req.body;
  try {
    const Save = await save(email, password, firstName, lastName, confPassword);
    res.status(201).json(Save);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
