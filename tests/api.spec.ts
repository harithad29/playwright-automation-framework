import { test, expect } from "@playwright/test";

test.describe("API Tests", () => {
  test("GET users returns 200", async ({ request }) => {
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.length).toBeGreaterThan(0);
  });

  test("POST request creates new user", async ({ request }) => {
    const response = await request.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        data: {
          title: "Playwright",
          body: "API Testing",
          userId: 1,
        },
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.title).toBe("Playwright");
  });

  test("Invalid endpoint returns 404", async ({ request }) => {
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/invalid-endpoint"
    );

    expect(response.status()).toBe(404);
  });
});