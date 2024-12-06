import { IchigoJam } from "./IchigoJam.js";
import { isUnmuteZoom } from "./isUnmuteZoom.js";
import { sleep } from "./sleep.js";

const ij = new IchigoJam();

let state = false;

ij.led(false);
for (;;) {
  const res = await isUnmuteZoom();
  console.log("isUnmute: " + res);
  if (res != state) {
    ij.led(res);
  }
  state = res;
  await sleep(100);
}
