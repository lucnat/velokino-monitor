

const SerialPort = require('serialport')
require('./App')

async function listSerialPorts() {
  await SerialPort.list().then((ports, err) => {
    console.log('ports', ports);
  })
}

setTimeout(function listPorts() {
  listSerialPorts();
  setTimeout(listPorts, 2000);
}, 2000);

