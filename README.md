# 🚀 CI/CD Demo Project

Project đơn giản để học CI/CD với GitHub Actions & Codespaces.

## Cấu trúc project

```
cicd-demo/
├── .devcontainer/
│   └── devcontainer.json   # Cấu hình môi trường Codespace
├── .github/
│   └── workflows/
│       ├── ci.yml          # Pipeline: tự động chạy test
│       └── cd.yml          # Pipeline: tự động deploy
├── src/
│   ├── app.js              # Logic Express app
│   └── server.js           # Khởi động server
├── tests/
│   └── app.test.js         # Các test case
└── package.json
```

## Chạy local

```bash
npm install
npm start        # chạy server
npm test         # chạy tests
```

## Các route có sẵn

| Route | Mô tả |
|-------|--------|
| `GET /` | Hello world |
| `GET /health` | Health check |
| `GET /add/:a/:b` | Tính tổng a + b |

## CI/CD Pipeline

- **CI** chạy khi: push lên `main`/`develop` hoặc mở Pull Request
- **CD** chạy khi: merge vào `main` (sau khi CI pass)
