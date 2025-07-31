import { createContext } from "react";

const UserContext = createContext({
  userName: "Dilli",
  email: "dilli@example.com",
});

export default UserContext;
