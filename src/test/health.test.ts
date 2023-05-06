import request from "./_/request";

describe("health.ts", () => {
    it("healthy endpoint", async () => {
      const res = await request.get("/healthy");
      expect(res.statusCode).toBe(200);
    });
  });