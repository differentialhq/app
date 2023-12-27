import process from "process";
import { d } from "../d";

async function hello(from: string) {
  return `Hello ${from}! I'm a service running on pid ${process.pid}!`;
}

export const helloService = d.service({
  name: "hello",
  functions: {
    hello,
  },
});

helloService.start();
