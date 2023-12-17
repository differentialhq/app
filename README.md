<p align="center">
  <img src="https://cdn.differential.dev/logo.png" width="200" style="border-radius: 10px" />
</p>

# Differential App

This is a scaffold for a Differential app. It includes a few things:

- [Client initialization](./src/d.ts)
- [A toy hello service](./src/services/hello.ts)
- [A consumer of the hello service](./src/commands/greet.ts)

## Running the app

1. Install dependencies

```bash
npm install
```

2. Run the service

```bash
npm run service --name=hello # executes ./src/services/hello.ts
```

3. Call the service

```bash
npm run command --name=greet # executes ./src/commands/greet.ts
```