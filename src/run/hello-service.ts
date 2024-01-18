// We have separated the service from the run file so that we can test the service
// without running it. This is useful for unit testing.
// It's up to you whether you want to separate the service from the run file or not.

import { helloService } from "../services/hello";

helloService.start().then(() => {
  console.log(`Hello service started on pid ${process.pid}!`);
});

process.on("beforeExit", () => {
  helloService.stop();
});
