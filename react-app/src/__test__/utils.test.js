import {
  getInfo,
  getSortedEmails,
  getUpdatedUsers,
  getUserNameAndSurname,
  getUsersSurname,
  getUsersUnderForty,
} from "../utils";
import {
  getInfoResult,
  getSortedEmailsResult,
  getUpdatedUsersResult,
  getUserNameAndSurnameUsers,
  getUsersSurnameResult,
  getUsersUnderFortyResult,
  users,
} from "./mock-data";

describe("Functions tests", () => {
  it("Test getUserNameAndSurname", () => {
    expect(getUserNameAndSurname(users)).toBe(getUserNameAndSurnameUsers);
    expect(
      getUserNameAndSurname([
        {
          first_name: "Anna",
          last_name: "Alesik",
          age: 23,
        },
      ])
    ).toBe("Anna Alesik");
  });

  it("Test getSortedEmails", () => {
    expect(getSortedEmails(users)).toEqual(getSortedEmailsResult);
    expect(
      getSortedEmails([
        { email: "anya@gmail.com" },
        { email: "masha@gmail.com" },
      ])
    ).toEqual(["anya@gmail.com", "masha@gmail.com"]);
  });

  it("Test getUpdatedUsers", () => {
    expect(getUpdatedUsers(users)).toEqual(getUpdatedUsersResult);
  });

  it("Test getUsersUnderForty", () => {
    expect(getUsersUnderForty(users)).toEqual(getUsersUnderFortyResult);
  });

  it("Test getInfo", () => {
    expect(getInfo(users)).toEqual(getInfoResult);
  });

  it("Test getUsersSurname", () => {
    expect(getUsersSurname(users)).toEqual(getUsersSurnameResult);
  });
});
