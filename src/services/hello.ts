import { d } from "../d";
import process from "process";
import { starting } from "../utls/cmd";

async function hello(from: string) {
  console.log("Responding to hello request");
  return `Hello ${from}! I'm a service running on pid ${process.pid}!`;
}

export const helloService = d.service({
  name: "hello",
  functions: {
    hello,
  },
});

helloService.start();
