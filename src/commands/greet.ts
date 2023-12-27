import { d } from "../d";
import type { helloService } from "../services/hello";

const helloClient = d.client<typeof helloService>("hello");

async function greet(name: string = "World") {
  const result = await helloClient.hello({
    name,
    processId: process.pid.toString(),
  });

  console.log(`Received response: ${result}`);
}

greet();
