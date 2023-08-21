import fs from "fs";
import { compare, hash } from "bcryptjs";

import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "db.json");

export const getAll = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

export const getProduct = (id) => {
  const data = getAll();
  return data.find((p) => p.id === Number(id));
};
export const getByEmail = (email) => {
  const data = getAll();
  return data.find((p) => p.email.toLowerCase() === email.toLowerCase());
};
export const verifiedPassword = async (hashedPassword, password) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

export const getByFirstName = (firstName) => {
  const data = getAll();
  return data.find(
    (p) => p.firstName.toLowerCase() === firstName.toLowerCase()
  );
};

export const getByLastName = (lastName) => {
  const data = getAll();
  return data.find((p) => p.lastName.toLowerCase() === lastName.toLowerCase());
};

export const verifiedName = async (getByFirstName, getByLastName) => {
  const isValidName = await compare(getByFirstName, getByLastName);
  return isValidName;
};

export async function save(email, password, firstName, lastName) {
  const found = getByEmail(email);
  if (found) {
    throw new Error("User already exist.");
  }
  const data = getAll();
  const hashedPassword = await hash(password, 12);
  data.push({
    id: data.length + 1,
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });

  fs.writeFileSync(filePath, JSON.stringify(data));
}
