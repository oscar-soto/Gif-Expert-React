import { useState } from "react";
import { UserContext } from "./UserContex";

// const user = {
//   id: 123,
//   name: 'oscar espinoza',
//   email: 'oscar@oscar.com'
// }

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user:user}}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
};
