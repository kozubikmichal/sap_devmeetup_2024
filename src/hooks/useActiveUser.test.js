import { renderHook } from "@testing-library/react";
import useActiveUser from "./useActiveUser";
import { act } from "react";

const createStorage = () => {
  const storage = {};

  return {
    getItem: (key) => storage[key],
    setItem: (key, value) => (storage[key] = value),
    removeItem: (key) => delete storage[key],
  };
};

describe("hooks/useActiveUser", () => {
  let storage;

  beforeEach(() => {
    storage = createStorage();
  });

  it("should return no initial user", () => {
    const { user } = renderHook(() => useActiveUser(storage));

    expect(user).toBeFalsy();
    expect(storage.getItem("activeUser")).toBeFalsy();
  });

  it("should return the user after login", () => {
    const { result } = renderHook(() => useActiveUser(storage));

    act(() => {
      result.current.login("user");
    });

    expect(result.current.user).toBe("user");
    expect(storage.getItem("activeUser")).toBe("user");
  });

  it("should return no user after logout", () => {
    const { result } = renderHook(() => useActiveUser(storage));

    act(() => {
      result.current.login("user");
    });

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeFalsy();
    expect(storage.getItem("activeUser")).toBeFalsy();
  });
});
