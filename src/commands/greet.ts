import { d } from "../d";
import type { helloService } from "../services/hello";

const helloClient = d.client<typeof helloService>("hello");

async function greet(name: string = "World") {
  const result = await helloClient.hello(name);
  console.log(`Received response: ${result}`);
}

greet(process.argv[3])
  .then(() => {
    console.log("Done!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
