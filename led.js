import { IchigoJam } from "./IchigoJam.js";
import { sleep } from "./sleep.js";

const ij = new IchigoJam();

for (;;) {
  ij.led(1);
  await sleep(500);
  ij.led(0);
  await sleep(500);
}
