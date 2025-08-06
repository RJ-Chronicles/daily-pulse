# ✅ 1. Folder Structure (Initial Setup)

│ ├── config/ # DB, environment configs
│ ├── controllers/ # Route handlers
│ ├── middlewares/ # Auth, error, validation etc.
│ ├── models/ # Mongoose/Sequelize models
│ ├── routes/ # All Express routes
│ ├── services/ # Business logic
│ ├── utils/ # Helper functions
│ ├── validators/ # Joi / zod validators

├── tests/ # Unit/integration tests
├── .github/
│ └── workflows/ # GitHub Actions CI/CD
├── Dockerfile # Docker container
├── docker-compose.yml # Local container orchestration
├── kubernetes/ # Kubernetes manifests
├── .env # Environment variables
├── .eslintrc.js # Linting rules
├── .prettierrc # Formatting rules
├── tsconfig.json # TypeScript config (if TS)

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
"\*.ts": ["eslint --fix", "prettier --write"]
}

-------------------------------------------------------------------------------------------------------

**step-by-step guide** to create a Node.js + Express + TypeScript starter project with proper **ESLint**, **Prettier**, **Husky pre-commit hooks**, and **security-related middlewares**.

---

## ✅ Node + Express + TypeScript Starter Project Setup

### 🔹 1. Initialize the Project

```bash
mkdir daily-pulse
cd daily-pulse
npm init -y
```

---

### 🔹 2. Install Dependencies

#### 📦 Runtime Dependencies

```bash
npm install express dotenv helmet cors xss-clean express-rate-limit express-mongo-sanitize compression joi jsonwebtoken morgan bcryptjs openai rate-limit
```

#### ⚙️ Dev Dependencies

```bash
npm install -D typescript @types/node @types/express @types/cors
```

---

### 🔹 3. ESLint + Prettier + TypeScript Config

#### Install Linting Tools

```bash
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier \
@typescript-eslint/parser @typescript-eslint/eslint-plugin \
eslint-plugin-import eslint-plugin-node eslint-plugin-security \
@eslint/js typescript-eslint jiti
```

#### Add ESLint Flat Config Support (Modern)

Rename the config file to:

```bash
eslint.config.mjs
```

#### ✅ `eslint.config.mjs`

```js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        process: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
];
```

---

### 🔹 4. Setup Prettier

Create `.prettierrc`:

```json
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all"
}
```

Optional `.prettierignore`:

```
node_modules
dist
```

---

### 🔹 5. TypeScript Config

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2021",
    "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "src",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

---

### 🔹 6. Husky + Lint-Staged Setup

```bash
npm install -D husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
```

#### Add a Pre-commit Hook:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

#### In `package.json`:

```json
"lint-staged": {
  "*.ts": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

---

### 🔹 7. Add Source Files

#### `src/app.ts`

```ts
import express from 'express';
import dotenv from 'dotenv';
import applyMiddlewares from './middlewares';

dotenv.config();

const app = express();
applyMiddlewares(app);

app.get('/', (_req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### `src/middlewares.ts`

```ts
import { Application } from 'express';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const applyMiddlewares = (app: Application) => {
  app.use(helmet());
  app.use(mongoSanitize());
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  app.use(cors());
  app.use(express.json());
};

export default applyMiddlewares;
```

---

### 🔹 8. Add Scripts to `package.json`

```json
"scripts": {
  "start": "nodemon dist/app.js",
  "build": "tsc",
  "prepare": "husky install",
  "dev": "nodemon src/app.ts",
  "test": "jest",
  "lint": "eslint . --ext .ts,.tsx",
  "lint:fix": "eslint . --ext .ts,.tsx --fix",
  "format": "prettier --write ."
}
```

---

### 🔹 9. Run and Test

* `npm run dev` — Start development server
* `npm run build` — Compile TypeScript
* `npm run lint` — Run linter
* `npm run lint:fix` — Fix lint errors
* `npm run format` — Format using Prettier

---

### ✅ You're All Set!

You now have a robust starter with:

* TypeScript
* ESLint (Flat Config)
* Prettier
* Husky + lint-staged
* Express + Middleware security (helmet, rate limit, sanitize, etc.)
* Pre-commit hooks enforcing code quality

Let me know if you'd like me to zip up the starter and send it to you as well.

