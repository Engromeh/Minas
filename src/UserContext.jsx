import { createContext, useState } from "react";
import romeh from "./assets/Romeh.jpg"
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Hedra Naguib",
    image: romeh ,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
