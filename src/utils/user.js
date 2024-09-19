const SECRET_USERS = [
  { username: "admin", password: "admin" },
  { username: "user", password: "user" },
];

export const verify = (username, password) =>
  Boolean(
    SECRET_USERS.find(
      (user) => user.username === username && user.password === password
    )
  );
