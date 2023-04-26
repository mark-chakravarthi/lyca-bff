// const { build } = require("./app.js");
import { build } from "./app";

const app = build({ logger: true });

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
