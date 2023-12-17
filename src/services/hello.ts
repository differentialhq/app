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

if (starting()) {
  helloService.start().then(() => {
    console.log(`Hello service started on pid ${process.pid}!`);
  });

  process.on("beforeExit", () => {
    helloService.stop();
  });
}
