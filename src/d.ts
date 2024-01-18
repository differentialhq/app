import { Differential } from "@differentialhq/core";

// This is a temporary API sercret for testing purposes, created by npm init.
// Run npm run setup to replace this with your own demo API secret.
const apiSecret = "REPLACE_ME";

export const d = new Differential(apiSecret);
