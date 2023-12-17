import process from "process";

export const starting = () => {
  return process.argv.includes("--start");
};
