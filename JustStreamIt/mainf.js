let leftBtn = document.getElementsByClassName('left-img');
let rightBtn = document.getElementsByClassName('right-img');
let best = document.getElementsByClassName('best-movies-product');
let horror = document.getElementsByClassName('horror-movies-product');
let psycho = document.getElementsByClassName('psycho-movies-product');
let action = document.getElementsByClassName('action-movies-product');
let l = 0;
let m = 0;
let n = 0;
let o = 0;
let movePer = 40;
let maxMove = 280;
let minMove = -40;

let right_mover_best = ()=>{
	l = l + movePer;
	if (best == 1){l = 0;}
	for(const i of best)
	{
		if (l==maxMove) {l=0;}
		if (l > maxMove){l = l + movePer;}
		i.style.left = '-' + l + '%';
	}
}
let left_mover_best = ()=>{
	l = l - movePer;
	if(best == 1){l = 0;}
	for(const i of best)
	{
		if (l <= minMove) {l=240}
		if (l > maxMove){l = l - movePer;}
		i.style.left = '-' + l + '%';
	}
}

let right_mover_horror = ()=>{
	m = m + movePer;
	if (horror == 1){m = 0;}
	for(const i of horror)
	{
		if (m==maxMove) {m=0;}
		if (m > maxMove){m = m + movePer;}
		i.style.left = '-' + m + '%';
	}
}
let left_mover_horror = ()=>{
	m = m - movePer;
	if(horror == 1){m = 0;}
	for(const i of horror)
	{
		if (m <= minMove) {m=240}
		if (m > maxMove){m = m - movePer;}
		i.style.left = '-' + m + '%';
	}
}

let right_mover_psycho = ()=>{
	n = n + movePer;
	if (psycho == 1){n = 0;}
	for(const i of psycho)
	{
		if (n==maxMove) {n=0;}
		if (n > maxMove){n = n + movePer;}
		i.style.left = '-' + n + '%';
	}
}
let left_mover_psycho = ()=>{
	n = n - movePer;
	if(psycho == 1){n = 0;}
	for(const i of psycho)
	{
		if (n <= minMove) {n=240}
		if (n > maxMove){n = n - movePer;}
		i.style.left = '-' + n + '%';
	}
}

let right_mover_action = ()=>{
	o = o + movePer;
	if (action == 1){o = 0;}
	for(const i of action)
	{
		if (o==maxMove) {o=0;}
		if (o > maxMove){o = o + movePer;}
		i.style.left = '-' + o + '%';
	}
}
let left_mover_action = ()=>{
	o = o - movePer;
	if(action == 1){o = 0;}
	for(const i of action)
	{
		if (o <= minMove) {o=240}
		if (o > maxMove){o = o - movePer;}
		i.style.left = '-' + o + '%';
	}
}
rightBtn[0].onclick = ()=>{right_mover_best();}
leftBtn[0].onclick = ()=>{left_mover_best();}
rightBtn[1].onclick = ()=>{right_mover_horror();}
leftBtn[1].onclick = ()=>{left_mover_horror();}
rightBtn[2].onclick = ()=>{right_mover_psycho();}
leftBtn[2].onclick = ()=>{left_mover_psycho();}
rightBtn[3].onclick = ()=>{right_mover_action();}
leftBtn[3].onclick = ()=>{left_mover_action();}