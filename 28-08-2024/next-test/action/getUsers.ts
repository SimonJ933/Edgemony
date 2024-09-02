import { IUser } from "@/model/user";

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-cache" });

    const data = await res.json();

    return data;
  } catch (e: any) {
    throw Error(e.message);
  }
};
