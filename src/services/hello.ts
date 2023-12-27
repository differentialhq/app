import { d } from "../d";

async function hello(name: string) {
  return `Hello, ${name}!`;
}

export const helloService = d.service({
  name: "hello",
  functions: {
    hello,
  },
});

helloService.start().then(() => {
  console.log("Hello service started!");
});
