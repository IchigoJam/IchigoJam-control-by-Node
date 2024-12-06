import { execPromise } from "./execPromise.js";
import { PATH_UNMUTEZOOM } from "./PATH_UNMUTEZOOM.js";

const cmd = "osascript " + PATH_UNMUTEZOOM;

export const isUnmuteZoom = async () => {
  try {
    const res = await execPromise(cmd);
    //console.log(res);
    if (res.stderr) {
      //console.error(`Stderr: ${res.stderr}`);
    } else {
      //console.log(`Stdout:\n${res.stdout}`);
    }
    return true;
  } catch (error) {
    //console.error(`Error: ${error.message}`);
  }
  return false;
};
