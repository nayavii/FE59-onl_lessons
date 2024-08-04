import { getQueryParams } from "../api/posts";
import {
  posts,
  recievedPosts,
  testPreparedData,
  testRecievedPreparedData,
} from "./mock-data";

describe("Jest tests", () => {
  beforeAll(() => {
    localStorage.clear();
  });

  afterAll(() => {
    sessionStorage.clear();
  });

  afterEach(() => {
    // ...что-то, что будет выполняться после каждого теста
  });

  test("Test sum function", () => {
    const sum = (a, b) => {
      return a + b;
    };

    expect(sum(1, 1)).toBe(2);
    expect(sum(5, 1)).toBe(6);
    expect(sum(0, -12)).toBe(-12);
    expect(sum(1, 1)).not.toBe(3);
  });

  test("Test filter posts", () => {
    const filterPosts = (posts) => {
      return posts.filter((item) => item.image);
    };

    expect(filterPosts(posts)).toEqual(recievedPosts);
  });

  test("Test array", () => {
    const filterPosts = (posts) => {
      return posts.filter((item) => item > 4);
    };

    expect(filterPosts([1, 2, 70, -4, 15, 99, 0])).toEqual([70, 15, 99]);
    expect(filterPosts([0, 0, 0])).toEqual([]);
  });

  // order, limit, searchValue, offset
  test("Test getQueryParams", () => {
    expect(getQueryParams("title", 12, "", 0)).toBe(
      `?limit=12&offset=0&ordering=title`
    );
    expect(getQueryParams("date", 1, null, 24)).toBe(
      `?limit=1&offset=24&ordering=date`
    );
    expect(getQueryParams("date", 12, "b2", 44)).toBe(
      `?limit=12&offset=44&search=b2&ordering=date`
    );
    expect(getQueryParams(null, 0, null, 0)).toBe(
      `?limit=0&offset=0&ordering=null`
    );
  });

  test("Make new UserList", () => {
    const makeNewUserList = (userList) => {
      return userList.map((item) => ({
        ...item,
        isFullAge: item.age >= 18,
        email: `${item.user.toLowerCase()}-${item.age}@gmail.com`,
      }));
    };

    expect(makeNewUserList(testPreparedData)).toEqual(testRecievedPreparedData);
  });
});
