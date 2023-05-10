# Smart Host Coding Challenge

I built a room occupancy optimization tool as a React component.

Project is hosted on the Vercel - https://smart-host.vercel.app/

I used the [Next.js](https://nextjs.org/) framework for two reasons:

1. It allows to use React.
2. I can use [Vercel](https://vercel.com/) as a hosting platform easily.

Source code is written in TypeScript.
Design is implemented using Tailwind.

## Getting Started

### Requirements

- Node.js 16.8 or later

### Installation

```sh
npm ci
```

To verify installation, build app and run unit tests.

```sh
npm run build && npm run test:ci
```

### Running app

You can run app on your local machine using `dev` script.

```sh
npm run dev
```

### Available Scripts

Running app in the dev environment.
```sh
npm run dev
```

Building the application.

```sh
npm run build
```

Starting app.
Do not forget to build the application.

```sh
npm start
```

Running unit tests in the watch mode.

```sh
npm test
```

Running tests once.

```sh
npm run test:ci
```

Lint projects source code.

```sh
npm run lint
```

Format source code with Prettier.

```sh
npm run format
```

Start Storybook server.

```sh
npm run storybook
```

## Future Improvements

- Add CI/CD to the project
- Prepare Styled Components
- Add Sentry
