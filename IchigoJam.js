import { SerialPort } from "serialport";
import { PATH_SERIAL } from "./PATH_SERIAL.js";

export class IchigoJam {
  constructor(path = PATH_SERIAL) {
    this.port = new SerialPort({
      path,
      baudRate: 115200,
    });
  }
  led(n) {
    n = n ? 1 : 0;
    this.port.write("LED" + n + "\n", (err) => {
      if (err) {
        return console.error("Error on write:", err.message);
      }
      console.log("LED" + n);
    });
  }
}

/*
port.on("data", (data) => {
  //console.log("Received data:", data.toString());
});
*/
//await sleep(3000);
