import { SerialPort } from "serialport";
//import { sleep } from "https://js.sabae.cc/sleep.js";

const port = new SerialPort({
  path: "/dev/tty.usbserial-10",
  baudRate: 115200,
});

port.write("LED1\n", (err) => {
  if (err) {
    return console.error("Error on write:", err.message);
  }
  console.log("Message written");
});
port.on("data", (data) => {
  console.log("Received data:", data.toString());
});

//await sleep(3000);
