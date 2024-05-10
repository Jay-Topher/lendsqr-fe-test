import { User } from "@/utils/types";

const API_URL = "https://run.mocky.io/v3/64ee34f0-9ad1-4795-ae7a-f66fc4b36e5c";

export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.result as User[];
  } catch (error) {
    console.error("Error fetching users", error);
  }
};
