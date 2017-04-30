function setup(){
	createCanvas(1300,650);
	background(51);
	frameRate(500);
	

}
	var	x = [350,370];	
	var	a = [200,200];
	var	b = [400,600];
	var	c = [500,400];
function draw() {


	var dado = random(3);
	dado = floor(dado);
	
	ellipse(a[0],a[1],4,4); 	/* Ponto A */
	ellipse(b[0],b[1],4,4);	/* Ponto B */
	ellipse(c[0],c[1],4,4);	/* Ponto C */
	ellipse(x[0],x[1],5,5);	/* Ponto X móvel*/
	switch(dado){
	case 0: /* em direção a A */
		x[0] = (x[0]+a[0])/2;
		x[1] = (x[1]+a[1])/2;
		break;
	case 1: /* em direção a B */
		x[0] =(x[0]+ b[0])/2;
		x[1] =(x[1]+ b[1])/2;
		break;
	case 2: /* em direção a C */
		x[0] = (x[0]+ c[0])/2;
		x[1] = (x[1]+ c[1])/2;
		break;
	}
	console.log(dado);
	
}
