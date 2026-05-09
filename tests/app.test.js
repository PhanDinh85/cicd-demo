const request = require("supertest");
const app = require("../src/app");

// ─── Test nhóm 1: Route gốc ───────────────────────────────────────────────
describe("GET /", () => {
  test("phải trả về status 200 và message đúng", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello from CI/CD Demo!");
    expect(res.body.status).toBe("ok");
  });
});

// ─── Test nhóm 2: Health check ────────────────────────────────────────────
describe("GET /health", () => {
  test("phải trả về status healthy", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("healthy");
  });
});

// ─── Test nhóm 3: Route tính tổng ────────────────────────────────────────
describe("GET /add/:a/:b", () => {
  test("2 + 3 phải bằng 5", async () => {
    const res = await request(app).get("/add/2/3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test("số âm: -1 + 1 phải bằng 0", async () => {
    const res = await request(app).get("/add/-1/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(0);
  });

  test("tham số không phải số phải trả về lỗi 400", async () => {
    const res = await request(app).get("/add/abc/3");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });
});
