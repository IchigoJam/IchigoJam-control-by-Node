// シリアルポートへの接続
async function connectSerial() {
  // ユーザーにポートを選択させる
  const port = await navigator.serial.requestPort();

  // ポートを開く
  await port.open({ baudRate: 9600 });

  const encoder = new TextEncoderStream();
  const writableStreamClosed = encoder.readable.pipeTo(port.writable);
  const writer = encoder.writable.getWriter();

  const decoder = new TextDecoderStream();
  const readableStreamClosed = port.readable.pipeTo(decoder.writable);
  const reader = decoder.readable.getReader();

  // データの送信
  writer.write("Hello Serial!\n");

  // データの受信
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    console.log("Received:", value);
  }

  // クリーンアップ
  writer.close();
  await writableStreamClosed;
  reader.releaseLock();
  await readableStreamClosed;
}

// 実行
connectSerial().catch(console.error);

