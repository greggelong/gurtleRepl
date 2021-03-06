let x, y;
let myinput;
let mybutton;
let mycanvas;
let greg;
let gregcode


function setup() {
  // need to create a div in html and set canvas as parent
  // must have angle mode = degrees
  angleMode(DEGREES);
  mycanvas = createCanvas(400, 400);
  mycanvas.parent("canvas");
  
  background(50);
  x = width / 2;
  y = height / 2;
  myinput = select('#input');
  //inp.position(0, 0);
  myinput.size(200);
  mybutton = createButton("input");
  mybutton.mousePressed(parseLines);
  createP("history");
  greg = new Gurtle(width/2,height/2,color(0,255,0));
}

function parseLines(){
  let s = myinput.value().trim();

   gregcode = s.split(";");
   // need to pop the last index of the array as the ; made a blank
   gregcode.pop();
   print(gregcode);
   for (let i = 0; i<gregcode.length;i++){
     runit(gregcode[i]);
   }

}

function runit(inp) {
  let cmd = inp.replace(/[^A-Z]+/gi, ""); // gets alpha
  let para = int(inp.replace(/[^0-9]+/gi, "")); // gets numeral make sure its an int can only get ints as the dot comes out of floats
  print(inp, cmd, para);

  switch (cmd) {
    case "forward":
      print(para)
      greg.forward(para);
      break;
    case "left":
      print(para)
      print(greg.angle)
      greg.left(para);
      print(greg.angle)
      break;
    case "right":
      print(para)
      greg.right(para);
      break;
    case "backward":
      print(para)
      greg.backward(para);
      break;
     
    default:
      console.log(`SYNTAX ERROR: no command ${cmd}.`);
      createP(`SYNTAX ERROR: no command ${cmd}.`)
  }
  createP(inp)
  //myinput.value("")
}
