if (true) {
    var x = 10;
    document.write("x = " + x + "<br/>");
}
document.write("x = " + x + "<br/>");


var y = 100;
document.write("y = " + y + "<br/>");

var z = 200;
document.write("z =" + z + "<br/>");

if (false);
let w = 200;
document.write("Hola", ("<br/>"));



//basic idea of let

var y = 10;
if (true) {
    let y = 20;
}

document.write("y = " + y + "<br/>");


//constants
//const does not mean "constant", it means one-time assignment

const PI = 3.14159


if (true) {
    const PI = 2.13;
    document.write("PI" + PI + "<br/>")
}

document.write("PI" + PI + "<br/>");


//typeof operator returns the data type of its operand in the form of a string,number,boolean,symbol, etc.

document.write(typeof true + "<br/>"); //boolean
document.write(typeof 3.14 + "<br/>"); //number
document.write(typeof "string" + "<br/>"); //string
document.write(typeof Symbol() + " <br />"); //symbol
document.write(typeof { a: 1 } + "<br/>"); //object
document.write(typeof [1, 2, 3] + "<br/>"); //object
document.write(typeof undefined + "<br/>"); //undefined


//String interpolation " $ {.....} "


let fName = "Jesus";
let eName = "Alonso";

document.write(`${fName} ${eName} <br />`);