import { d } from "../d";

async function hello({ name, processId }: { name: string; processId: string }) {
  return `Hello, ${name} from ${processId}!`;
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
