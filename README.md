# vottun-qubic-bridge-react

React Frontend for Bridge between the Qubic network and Ethereum/Arbitrum allowing for wrapping $Qubic to be bridged to EVM

## Table of Contents

-  [Overview](#overview)
-  [Requirements](#requirements)
-  [Getting Started](#getting-started)
-  [Testing](#testing)
-  [DevTools](#devtools)
-  [Installed Packages](#installed-packages)

## Overview

Built with type safety, scalability, and developer experience in mind.

-  [pnpm](https://pnpm.io) - A strict and efficient alternative to npm with up to 3x faster performance
-  [TypeScript](https://www.typescriptlang.org) - A typed superset of JavaScript designed with large scale applications in mind
-  [ESLint](https://eslint.org) - Static code analysis to help find problems within a codebase
-  [Prettier](https://prettier.io) - An opinionated code formatter
-  [Vite](https://vitejs.dev) - Feature rich and highly optimized frontend tooling with TypeScript support out of the box
-  [React](https://react.dev) - A modern front-end JavaScript library for building user interfaces based on components
-  [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework packed with classes to build any web design imaginable
-  [Storybook](https://storybook.js.org) - A frontend workshop for building UI components and pages in isolation
-  [TanStack Router](https://tanstack.com/router/v1) - Fully typesafe, modern and scalable routing for React applications
-  [TanStack Query](https://tanstack.com/query/latest) - Declarative, always-up-to-date auto-managed queries and mutations
-  [Zustand](https://zustand-demo.pmnd.rs) - An unopinionated, small, fast and scalable bearbones state-management solution
-  [React Hook Form](https://react-hook-form.com) - Performant, flexible and extensible forms with easy-to-use validation
-  [Zod](https://zod.dev) - TypeScript-first schema validation with static type inference
-  [React Testing Library](https://testing-library.com) - A very light-weight, best practice first, solution for testing React components
-  [Vitest](https://vitest.dev) - A blazing fast unit test framework powered by Vite
-  [Playwright](https://playwright.dev) - Enables reliable end-to-end testing for modern web apps
-  [Faker](https://fakerjs.dev/) - Generate massive amounts of fake (but realistic) data for testing and development
-  [Dayjs](https://day.js.org/en/) - A minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers
-  [Husky](https://github.com/typicode/husky#readme) + [Commitizen](https://github.com/commitizen/cz-cli#readme) + [Commitlint](https://github.com/conventional-changelog/commitlint#readme) - Git hooks and commit linting to ensure use of descriptive and practical commit messages
-  [ts-reset](https://github.com/total-typescript/ts-reset#readme) - Improvements for TypeScripts built-in typings for use in applications

A more detailed list of the included packages can be found in the [Installed Packages](#installed-packages) section. Packages not shown above include Devtools, ui helper libraries, and eslint plugins/configs.

## Requirements

-  [NodeJS 18+](https://nodejs.org/en)
-  [pnpm](https://pnpm.io) (or equivalent)

## Getting Started

Getting started is a simple as cloning the repository

```
git@github.com:vottundev/vottun-qubic-bridge-react.git
```

Changing into the new directory

```
cd vottun-qubic-bridge-react
```

Installing dependencies

```
pnpm install
```

## Testing

Unit testing is handled by React Testing Library and Vitest while End-to-End (E2E) Testing is conducted by Playwright.

If you'd like to run all tests, Unit and E2E alike, execute the following command:

```
pnpm run test
```

### Unit Testing

When running unit test scripts, it is assumed that unit tests will be colocated with the source files. Take a look at the placeholder README file in `src/components` for [an example](src/components/README.md).

If you'd like to execute unit tests specifically, the below command will execute vitest:

```
pnpm run test:unit
```

If instead you are interested in coverage reporting, run:

```
pnpm run test:unit:coverage
```

All unit tests run in watch mode by default. If you'd like to disable watch mode, change the package.json test scripts with the following

before:

```
"scripts": {
  	"test:unit": "vitest src/",
	"test:unit:coverage": "vitest --coverage src/"
}
```

After:

```
"scripts": {
  	"test:unit": "vitest run src/",
	"test:unit:coverage": "vitest run --coverage src/"
}
```

### End-to-End (E2E) Testing

Running E2E tests use a similar syntax to running unit tests:

```
pnpm run test:e2e
```

If you wish to see the reports, run:

```
pnpm run test:e2e:report
```

## Devtools

This project includes a set of Devtools. Some are additional package dependencies whereas others come built-in to the packages themselves.

### Devtool dependencies:

-  [@tanstack/react-query-devtools](https://tanstack.com/query/v4/docs/react/devtools) - Dedicated dev tools to help visualize the inner workings of React Query
-  [@tanstack/router-devtools](https://tanstack.com/router/v1/docs/devtools) - Dedicated dev tools to help visualize the inner workings of TanStack Router
-  [@hookform/DevTools](https://react-hook-form.com/dev-tools) - React Hook Form Devtools to help debug forms with validation

A set of utility components are provided in `src/components/utils/development-tools/`. These [wrapper components](https://tanstack.com/router/v1/docs/devtools#only-importing-and-using-devtools-in-developmentgit) check whether the application is running in development or production mode and render the component or null respectively. In other words, you can confidently use them during development without having to worry about them showing up for end users in production.

**TanStack Query Devtools** are ready to go out of the box. The development vs. production rendering mechanism is built into the devtools. If you do wish to [render the devtools in production](https://tanstack.com/query/latest/docs/react/devtools) you can freely do so by following the TanStack Query Devtools documentation. The devtools component can be found in `src/App.tsx`.

When running the application in development mode you can find the TanStack Query Devtools icon in the bottom left corner of the page sporting the [React Query Logo](https://img.stackshare.io/service/25599/default_c6db7125f2c663e452ba211df91b2ced3bb7f0ff.png).

**TanStack Router Devtools**, however, utilizes its respective utility component in this project. The initial setup has been taken care of but if you wish to modify or remove the component, have a look in `src/App.tsx`.

The TanStack Router Devtools icon can be found in the bottom right corner of the page denoted by the vertically stacked "TANSTACK ROUTER" logo.

The above components, along with their imports, are commented out to start.

**React Hook Form DevTools** icon can be recognized in the top right corner of the page by the pink React Hook Form clipboard logo. A utility component has also provided. Like the TanStack Table Devtools component above, a prop must be passed from a specific hook. In this case, it is the control prop from the `useForm()` hook. Similar to TanStack Table, use of React Hook Form DevTools requires the component be added to each unique form. More information can be found in the [React Hook Form DevTools documentation](https://react-hook-form.com/dev-tools).

To reiterate, if you wish to restrict the Devtools to development builds use the provided components found at `src/components/utils/development-tools` instead of the built-in components from their respective modules.

### Built-in Devtools:

-  Zustand

**Zustand** provides a built-in [devtools middleware](https://github.com/pmndrs/zustand#redux-devtools) for use with [Redux DevTools](https://github.com/reduxjs/redux-devtools#redux-devtools).

## Installed Packages

A simplified list can be found in the [Overview](#overview) section.

### Base

-  [TypeScript](https://www.typescriptlang.org)
-  [Vite](https://vitejs.dev)
-  [React](https://react.dev)

### Routing

-  [TanStack Router](https://tanstack.com/router/v1)

### Linting & Formatting

-  [ESLint](https://eslint.org)
   -  [typescript-eslint](https://typescript-eslint.io)
   -  [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
   -  [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react#readme)
   -  [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
   -  [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
   -  [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#readme)
   -  [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook#readme)
-  [Prettier](https://prettier.io)

### State Management

-  [TanStack Query (React Query)](https://tanstack.com/query/latest)
-  [Zustand](https://zustand-demo.pmnd.rs)

### UI

-  [Tailwind CSS](https://tailwindcss.com)
-  [Shadcn/ui](https://ui.shadcn.com/)
-  [heroicons](https://heroicons.com)
-  [Storybook](https://storybook.js.org)

### Forms

-  [React Hook Form](https://react-hook-form.com)
-  [Zod](https://zod.dev)

### Testing

-  [Vitest](https://vitest.dev)
-  [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-  [Playwright](https://playwright.dev)

### Development Tools

-  [TanStack Query Devtools](https://tanstack.com/query/latest/docs/react/devtools?from=reactQueryV3&original=https%3A%2F%2Ftanstack.com%2Fquery%2Fv3%2Fdocs%2Fdevtools)
-  [TanStack Router Devtools](https://tanstack.com/router/v1/docs/devtools)
-  [React Hook Form Devtools](https://react-hook-form.com/dev-tools)

### Git

-  [Husky](https://github.com/typicode/husky#readme)
-  [Commitizen](https://github.com/commitizen/cz-cli#readme)
-  [Commitlint](https://github.com/conventional-changelog/commitlint#readme)

### Other

-  [ts-reset](https://github.com/total-typescript/ts-reset#readme)
-  [Faker](https://fakerjs.dev/)
-  [Dayjs](https://day.js.org/en/)
