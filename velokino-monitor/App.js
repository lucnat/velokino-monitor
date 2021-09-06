
// let port = new SerialPort('/dev/tty.usbmodem142101',{baudRate: 9600});
// const parser = port.pipe(new Readline({ delimiter: '\n' }));
// parser.on('data', data =>{
//   document.getElementById('sup').innerHTML = data
// });

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getCorrectColor(value) {
  if(value < 1.0) return '#b43535'
  else if (value < 3) return '#b2bd18'
  else return '#2d9c23'
}


function updateUI(data) {
  // updates the UI with latest data
  const divs = document.getElementsByClassName('value');
  const divArray = [].slice.call(divs);
  divArray.forEach((div, i) => {
    div.innerHTML =  data[i].toFixed(1) + ' A'
    $(div).css('background-color',getCorrectColor(data[i]))
  })

}

setInterval(() => {

  var data = [];
  for(i = 0; i<10; i++) {
    const val = Math.round(Math.random()*50)/10
    data.push(val)
  }
  updateUI(data)

},300)
