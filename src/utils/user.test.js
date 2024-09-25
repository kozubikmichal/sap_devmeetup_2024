import { verify } from "./user";

describe("utils/user", () => {
  it.each`
    username   | password
    ${"user"}  | ${"user"}
    ${"admin"} | ${"admin"}
  `("should return true for valid user $username", ({ username, password }) => {
    expect(verify(username, password)).toBe(true);
  });

  it("should return false for invalid user", () => {
    expect(verify("user", "invalid")).toBe(false);
  });
});
