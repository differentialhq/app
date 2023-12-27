import { Differential } from "@differentialhq/core";

// This is a temporary API sercret for testing purposes, created by npm init.
// Run npm run setup to replace this with your own demo API secret.
const apiSecret =
  "sk_f5edcab63842282bf9545a2d8375deb8a5f340e5f0ede44fbc3c8dd410b45c35";

process.env.DIFFERENTIAL_API_ENDPOINT_OVERRIDE = "http://0.0.0.0:4000";

export const d = new Differential(apiSecret);
