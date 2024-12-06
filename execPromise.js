import { exec } from "child_process";
import * as util from "util";

export const execPromise = util.promisify(exec);
