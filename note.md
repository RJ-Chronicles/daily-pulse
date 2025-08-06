# ✅ 1. Folder Structure (Initial Setup)

│   ├── config/              # DB, environment configs
│   ├── controllers/         # Route handlers
│   ├── middlewares/         # Auth, error, validation etc.
│   ├── models/              # Mongoose/Sequelize models
│   ├── routes/              # All Express routes
│   ├── services/            # Business logic
│   ├── utils/               # Helper functions
│   ├── validators/          # Joi / zod validators

├── tests/                   # Unit/integration tests
├── .github/
│   └── workflows/           # GitHub Actions CI/CD
├── Dockerfile               # Docker container
├── docker-compose.yml       # Local container orchestration
├── kubernetes/              # Kubernetes manifests
├── .env                     # Environment variables
├── .eslintrc.js             # Linting rules
├── .prettierrc              # Formatting rules
├── tsconfig.json            # TypeScript config (if TS)

# ✅ 2. Dependencies List (Full Stack)
    1:  Core Dependencies
        npm install express cors dotenv helmet compression morgan
    2:  Dev Dependencies
        npm install -D nodemon eslint prettier husky lint-staged jest supertest typescript ts-node @types/*
    3:  Securety
        npm install helmet xss-clean express-mongo-sanitize rate-limit
    4:  Auth & JWT:
        npm install jsonwebtoken bcryptjs
    5:  Validation
        npm install joi
    6:  npm install -D eslint-config-prettier eslint-plugin-node eslint-plugin-security eslint prettier
    7: Git Hooks
        npx husky-init && npm install lint-staged -D

# ✅ 3. Code Best Practices to Follow
    ✅ Modularized code with service-controller separation
    ✅ Use async/await, never block event loop
    ✅ Apply Joi/Zod validation for request bodies
    ✅ Centralized error handler
    ✅ Centralized logger (winston or pino)
    ✅ Secure headers via helmet
    ✅ Use rate limiting and IP blacklisting where necessary
    ✅ Store config in dotenv and never hardcode secrets
    ✅ Use HTTPS
    ✅ Use code scanning tools like SonarCloud, CodeQL, or Snyk
    ✅ Set up linting + prettier + husky + lint-staged for clean commits
    ✅ Setup CI to block bad PRs or broken builds

# ✅ 4. Auth and Authorization
    Use JWT for access & refresh tokens
    Store tokens in HTTP-only cookies or headers
    Create middlewares:
    authenticateUser
    authorizeRole("admin")

# ✅ 5. Scripts to Add in package.json
    "scripts": {
        "dev": "nodemon src/app.ts",
        "build": "tsc",
        "start": "node dist/app.js",
        "lint": "eslint . --ext .ts",
        "test": "jest",
        "prepare": "husky install"
    }

✅ 6. Setup Husky + Lint Staged
    npx husky add .husky/pre-commit "npx lint-staged"
    // package.json
    "lint-staged": {
        "*.ts": ["eslint --fix", "prettier --write"]
    }

    
