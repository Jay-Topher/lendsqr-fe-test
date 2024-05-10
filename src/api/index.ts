import { User } from "@/utils/types";

const API_URL = import.meta.env.VITE_API_URL as string;

export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.result as User[];
  } catch (error) {
    console.error("Error fetching users", error);
  }
};
