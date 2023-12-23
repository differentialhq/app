import { d } from "../d";
import type { helloService } from "../services/hello";
import { starting } from "../utls/cmd";

const helloClient = d.buildClient<typeof helloService>();

async function greet(name: string = "World") {
  const result = await helloClient.hello(name);
  console.log(`Received response: ${result}`);
}

if (starting()) {
  greet(process.argv[3]).then(() => {
    console.log("Done!");
  });
}
