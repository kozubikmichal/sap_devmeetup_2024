import { useState } from "react";

const STORAGE_KEY = "activeUser";

const useActiveUser = (storage = localStorage) => {
  const [user, setUser] = useState(storage.getItem(STORAGE_KEY));

  return {
    user,
    login: (username) => {
      storage.setItem(STORAGE_KEY, username);
      setUser(username);
    },
    logout: () => {
      setUser(null);
    },
  };
};

export default useActiveUser;
