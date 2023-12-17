import assert from "assert";
import { helloService } from "./hello";
import test from "node:test";

test("hello: must greet the caller", async () => {
  const result = await helloService.functions.hello("foo");
  assert.match(result, /Hello foo! I'm a service running on pid \d+!/);
});
