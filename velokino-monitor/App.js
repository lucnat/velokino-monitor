
// let port = new SerialPort('/dev/tty.usbmodem142101',{baudRate: 9600});
// const parser = port.pipe(new Readline({ delimiter: '\n' }));
// parser.on('data', data =>{
//   document.getElementById('sup').innerHTML = data
// });

setInterval(() => {

  var data = [];
  for(i = 0; i<10; i++) {
    data.push(Math.random())
  }

  
  
},100)
