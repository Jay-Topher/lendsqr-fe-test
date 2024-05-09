import { User } from "@/utils/types";

const API_URL = "https://run.mocky.io/v3/f28c4c9e-98f8-4770-9fa0-9a693d631583";

export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.result as User[];
  } catch (error) {
    console.error("Error fetching users", error);
  }
};
