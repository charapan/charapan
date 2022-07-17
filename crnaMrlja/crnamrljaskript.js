var dugme = ["button1", "button2", "button3", "button4", "button5", "button6", "button7", "button8", "button9", "button10", "button11", "button12", "button13", "button14", "button15", "button16"];
var slika = ['url("slike/s1.jpg")', 'url("slike/s2.jpg")', 'url("slike/s3.jpg")', 'url("slike/s4.jpg")', 'url("slike/s5.jpg")', 'url("slike/s6.jpg")', 'url("slike/s7.jpg")', 'url("slike/s8.jpg")', 'url("slike/s9.jpg")', 'url("slike/s10.jpg")', 'url("slike/s11.jpg")', 'url("slike/s12.jpg")', 'url("slike/s13.jpg")', 'url("slike/s14.jpg")', 'url("slike/s15.jpg")', 'url("slike/s16.jpg")'];

var rslika = Array.from(slika);
var rezultat = [];

var a, b, c, d;
	
function shuffleArray(array) {
  let curId = array.length;
  while (0 !== curId) {
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}

function postaviPozadinu(){
	rslika = shuffleArray(rslika);
	for(var i = 0; i < 16; i++){
	document.getElementById(dugme[i]).style.backgroundImage = rslika[i];
	}
}


var x, y, z;
var m = 0;

const onClick = function() {
	x = this.id;
	y = this.style.backgroundImage;
  console.log(x + " " + y);
}

function button1(){
		z = document.getElementById("button1").style.backgroundImage;
		a = document.getElementById("button2").style.backgroundImage;
		b = document.getElementById("button5").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button1").style.backgroundImage = a;
			document.getElementById("button2").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button1").style.backgroundImage = b;
			document.getElementById("button5").style.backgroundImage = z;			
		}
}

function button2(){
		z = document.getElementById("button2").style.backgroundImage;
		a = document.getElementById("button1").style.backgroundImage;
		b = document.getElementById("button3").style.backgroundImage;
		c = document.getElementById("button6").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button2").style.backgroundImage = a;
			document.getElementById("button1").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button2").style.backgroundImage = b;
			document.getElementById("button3").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button2").style.backgroundImage = c;
			document.getElementById("button6").style.backgroundImage = z;			
		}
}

function button3(){
		z = document.getElementById("button3").style.backgroundImage;
		a = document.getElementById("button2").style.backgroundImage;
		b = document.getElementById("button4").style.backgroundImage;
		c = document.getElementById("button7").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button3").style.backgroundImage = a;
			document.getElementById("button2").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button3").style.backgroundImage = b;
			document.getElementById("button4").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button3").style.backgroundImage = c;
			document.getElementById("button7").style.backgroundImage = z;			
		}
}

function button4(){
		z = document.getElementById("button4").style.backgroundImage;
		a = document.getElementById("button3").style.backgroundImage;
		b = document.getElementById("button8").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button4").style.backgroundImage = a;
			document.getElementById("button3").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button4").style.backgroundImage = b;
			document.getElementById("button8").style.backgroundImage = z;			
		}
}

function button5(){
		z = document.getElementById("button5").style.backgroundImage;
		a = document.getElementById("button1").style.backgroundImage;
		b = document.getElementById("button6").style.backgroundImage;
		c = document.getElementById("button9").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button5").style.backgroundImage = a;
			document.getElementById("button1").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button5").style.backgroundImage = b;
			document.getElementById("button6").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button5").style.backgroundImage = c;
			document.getElementById("button9").style.backgroundImage = z;			
		}
}

function button6(){
		z = document.getElementById("button6").style.backgroundImage;
		a = document.getElementById("button2").style.backgroundImage;
		b = document.getElementById("button5").style.backgroundImage;
		c = document.getElementById("button7").style.backgroundImage;
		d = document.getElementById("button10").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button6").style.backgroundImage = a;
			document.getElementById("button2").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button6").style.backgroundImage = b;
			document.getElementById("button5").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button6").style.backgroundImage = c;
			document.getElementById("button7").style.backgroundImage = z;			
		}else if(d == 'url("slike/s16.jpg")'){
			document.getElementById("button6").style.backgroundImage = d;
			document.getElementById("button10").style.backgroundImage = z;			
		}
}

function button7(){
		z = document.getElementById("button7").style.backgroundImage;
		a = document.getElementById("button3").style.backgroundImage;
		b = document.getElementById("button6").style.backgroundImage;
		c = document.getElementById("button8").style.backgroundImage;
		d = document.getElementById("button11").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button7").style.backgroundImage = a;
			document.getElementById("button3").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button7").style.backgroundImage = b;
			document.getElementById("button6").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button7").style.backgroundImage = c;
			document.getElementById("button8").style.backgroundImage = z;			
		}else if(d == 'url("slike/s16.jpg")'){
			document.getElementById("button7").style.backgroundImage = d;
			document.getElementById("button11").style.backgroundImage = z;			
		}
}

function button8(){
		z = document.getElementById("button8").style.backgroundImage;
		a = document.getElementById("button4").style.backgroundImage;
		b = document.getElementById("button7").style.backgroundImage;
		c = document.getElementById("button12").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button8").style.backgroundImage = a;
			document.getElementById("button4").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button8").style.backgroundImage = b;
			document.getElementById("button7").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button8").style.backgroundImage = c;
			document.getElementById("button12").style.backgroundImage = z;			
		}
}

function button9(){
		z = document.getElementById("button9").style.backgroundImage;
		a = document.getElementById("button5").style.backgroundImage;
		b = document.getElementById("button10").style.backgroundImage;
		c = document.getElementById("button13").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button9").style.backgroundImage = a;
			document.getElementById("button5").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button9").style.backgroundImage = b;
			document.getElementById("button10").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button9").style.backgroundImage = c;
			document.getElementById("button13").style.backgroundImage = z;			
		}
}

function button10(){
		z = document.getElementById("button10").style.backgroundImage;
		a = document.getElementById("button6").style.backgroundImage;
		b = document.getElementById("button9").style.backgroundImage;
		c = document.getElementById("button11").style.backgroundImage;
		d = document.getElementById("button14").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button10").style.backgroundImage = a;
			document.getElementById("button6").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button10").style.backgroundImage = b;
			document.getElementById("button9").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button10").style.backgroundImage = c;
			document.getElementById("button11").style.backgroundImage = z;			
		}else if(d == 'url("slike/s16.jpg")'){
			document.getElementById("button10").style.backgroundImage = d;
			document.getElementById("button14").style.backgroundImage = z;			
		}
}

function button11(){
		z = document.getElementById("button11").style.backgroundImage;
		a = document.getElementById("button7").style.backgroundImage;
		b = document.getElementById("button10").style.backgroundImage;
		c = document.getElementById("button12").style.backgroundImage;
		d = document.getElementById("button15").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button11").style.backgroundImage = a;
			document.getElementById("button7").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button11").style.backgroundImage = b;
			document.getElementById("button10").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button11").style.backgroundImage = c;
			document.getElementById("button12").style.backgroundImage = z;			
		}else if(d == 'url("slike/s16.jpg")'){
			document.getElementById("button11").style.backgroundImage = d;
			document.getElementById("button15").style.backgroundImage = z;			
		}
}

function button12(){
		z = document.getElementById("button12").style.backgroundImage;
		a = document.getElementById("button8").style.backgroundImage;
		b = document.getElementById("button11").style.backgroundImage;
		c = document.getElementById("button16").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button12").style.backgroundImage = a;
			document.getElementById("button8").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button12").style.backgroundImage = b;
			document.getElementById("button11").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button12").style.backgroundImage = c;
			document.getElementById("button16").style.backgroundImage = z;			
		}
}

function button13(){
		z = document.getElementById("button13").style.backgroundImage;
		a = document.getElementById("button9").style.backgroundImage;
		b = document.getElementById("button14").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button13").style.backgroundImage = a;
			document.getElementById("button9").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button13").style.backgroundImage = b;
			document.getElementById("button14").style.backgroundImage = z;			
		}
}

function button14(){
		z = document.getElementById("button14").style.backgroundImage;
		a = document.getElementById("button10").style.backgroundImage;
		b = document.getElementById("button13").style.backgroundImage;
		c = document.getElementById("button15").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button14").style.backgroundImage = a;
			document.getElementById("button10").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button14").style.backgroundImage = b;
			document.getElementById("button13").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button14").style.backgroundImage = c;
			document.getElementById("button15").style.backgroundImage = z;			
		}
}

function button15(){
		z = document.getElementById("button15").style.backgroundImage;
		a = document.getElementById("button11").style.backgroundImage;
		b = document.getElementById("button14").style.backgroundImage;
		c = document.getElementById("button16").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button15").style.backgroundImage = a;
			document.getElementById("button11").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button15").style.backgroundImage = b;
			document.getElementById("button14").style.backgroundImage = z;			
		}else if(c == 'url("slike/s16.jpg")'){
			document.getElementById("button15").style.backgroundImage = c;
			document.getElementById("button16").style.backgroundImage = z;			
		}
}

function button16(){
		z = document.getElementById("button16").style.backgroundImage;
		a = document.getElementById("button12").style.backgroundImage;
		b = document.getElementById("button15").style.backgroundImage;
		if(a == 'url("slike/s16.jpg")'){
			document.getElementById("button16").style.backgroundImage = a;
			document.getElementById("button12").style.backgroundImage = z;
		}else if(b == 'url("slike/s16.jpg")'){
			document.getElementById("button16").style.backgroundImage = b;
			document.getElementById("button15").style.backgroundImage = z;			
		}
}