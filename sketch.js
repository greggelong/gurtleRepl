let x, y;
let myinput;
let mybutton;
let mycanvas;

function setup() {
  // need to create a div in html and set canvas as parent
  mycanvas = createCanvas(400, 400);
  mycanvas.parent("canvas");
  
  background(50);
  x = width / 2;
  y = height / 2;
  myinput = select('#input');
  //inp.position(0, 0);
  myinput.size(200);
  mybutton = createButton("input");
  mybutton.mousePressed(runit);
  createP("history");
}
function draw() {
  background(50);
  fill(200, 200, 0);
  ellipse(x, y, 50, 50);
}

function movedown(num) {
  y = y + num;
  print(y)
}

function moveup(num) {
  y = y - num;
  print(y)
}

function moveleft(num) {
  x = x - num;
  print(x)
}

function moveright(num) {
  x = x + num;
  print(x)
}

function runit() {
  let inp = myinput.value();
  let cmd = inp.replace(/[^A-Z]+/gi, ""); // gets alpha
  let para = int(inp.replace(/[^0-9]+/gi, "")); // gets numeral make sure its an int can only get ints as the dot comes out of floats
  print(inp, cmd, para);

  switch (cmd) {
    case "down":
      print(para)
      movedown(para);
      break;
    case "up":
      print(para)
      moveup(para);
      break;
    case "left":
      print(para)
      moveleft(para);
      break;
    case "right":
      print(para)
      moveright(para);
      break;
     
    default:
      console.log(`SYNTAX ERROR: no command ${cmd}.`);
      createP(`SYNTAX ERROR: no command ${cmd}.`)
  }
  createP(myinput.value())
  myinput.value("")
}
