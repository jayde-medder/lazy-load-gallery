# React + TypeScript + Vite + SQLite + Knex + Tailwind + ShadCN UI

This template provides a fullstack setup with an SQLite/Knex backend and React/Tailwind/ShadCN UI frontend for easy component creation.

## Setup

#### Make sure to use Node version 20:

```
nvm use 20
```
or
```
nvm install 20
```
#### Install Packages:
```
npm i 
```

## (FROM THE INITIAL VITE README)

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
