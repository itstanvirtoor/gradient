var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

console.log(css);
console.log(color1);
console.log(color2);

function setGradient() {
	body.style.background = 
	"linear-gradient(45deg, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
// linear-gradient(45deg, #ef0a0a, #000000f7)
// color1.addEventListener("input", function(){
// body.style.background="linear-gradient(45deg, "+color1.value+", "+color2.value+")";
// console.log(color1.value);
// })

// color2.addEventListener("input", function(){
// console.log(color2.value);
// })

// body.style.background = linear-gradient(45deg, color1, color2);