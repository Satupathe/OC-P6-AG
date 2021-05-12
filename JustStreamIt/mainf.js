let leftBtn = document.getElementsByClassName('left-img');
let rightBtn = document.getElementsByClassName('right-img');
let best = document.getElementsByClassName('best-movies-product');
let horror = document.getElementsByClassName('horror-movies-product');
let animation = document.getElementsByClassName('animation-movies-product');
let action = document.getElementsByClassName('action-movies-product');
let l = 0;
let m = 0;
let n = 0;
let o = 0;
let movePer = 25;
let maxMove = 100;
let minMove = -25;

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
		if (l <= minMove) {l=75}
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
		if (m <= minMove) {m=75}
		if (m > maxMove){m = m - movePer;}
		i.style.left = '-' + m + '%';
	}
}

let right_mover_animation = ()=>{
	n = n + movePer;
	if (animation == 1){n = 0;}
	for(const i of animation)
	{
		if (n==maxMove) {n=0;}
		if (n > maxMove){n = n + movePer;}
		i.style.left = '-' + n + '%';
	}
}
let left_mover_animation = ()=>{
	n = n - movePer;
	if(animation == 1){n = 0;}
	for(const i of animation)
	{
		if (n <= minMove) {n=75}
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
		if (o <= minMove) {o=75}
		if (o > maxMove){o = o - movePer;}
		i.style.left = '-' + o + '%';
	}
}
rightBtn[0].onclick = ()=>{right_mover_best();}
leftBtn[0].onclick = ()=>{left_mover_best();}
rightBtn[1].onclick = ()=>{right_mover_horror();}
leftBtn[1].onclick = ()=>{left_mover_horror();}
rightBtn[2].onclick = ()=>{right_mover_animation();}
leftBtn[2].onclick = ()=>{left_mover_animation();}
rightBtn[3].onclick = ()=>{right_mover_action();}
leftBtn[3].onclick = ()=>{left_mover_action();}

function fetchBest(){
	let bestTitle = document.getElementsByClassName("best-title");
	let bestDescription = document.getElementsByClassName("best-text");
	let bestImg = document.getElementsByClassName("bestFront");

	fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&sort_by=-imdb_score&page=1")
	.then(response => response.json())
	.then(data => {
		bestTitle[0].innerHTML = data["results"][0]["title"];
		bestDescription[0].innerHTML = "Score IMDB du film: " + data["results"][0]["imdb_score"] + "<br>" + "Genres: " + data["results"][0]["genres"];
		bestImg[0].src = data["results"][0]["image_url"];
	})
}


fetchBest()

/*function carrouselInfos (){
	let best = document.getElementsByClassName("best-movies");
	console.log(best);
	let title = best[0].getElementsByClassName("under-title");
	console.log(title);
	let date = best [0].getElementsByClassName("product-date");
	let img = best[0].getElementsByClassName("bestFront");

	let i = 0;
	if (i< 4){
		fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&sort_by=-imdb_score&page=1")
		.then(response => response.json())
		.then(data => {
			for (i=0; i<4; i++){ //Bonne manière de faire ?//
			
				title[i].innerHTML = data["results"][i+1]["title"];
				date[i].innerHTML = data["results"][i+1]["year"];
			//img[i].src = data["results"][i]["image_url"];//
			}
			title[i].innerHTML = data["results"][i+1]["title"];
			date[i].innerHTML = data["results"][i+1]["year"];
			//img[i].src = data["results"][i]["image_url"];//
	i += 4
}

carrouselInfos()*/

/*function coucou(){
	let best = document.getElementsByClassName("best-movies");
	let title = best[0].getElementsByClassName("under-title");
	let date = best [0].getElementsByClassName("product-date");
	let img = best[0].getElementsByClassName("best-img");
	console.log(date[0]);

	for (i=0; i<2; i++){
		if (i = 0){
			fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&sort_by=-imdb_score&page=1")
			.then(response => response.json())
			.then(data => {
				for (i=0; i<5; i++){
					console.log(i)
								
					console.log(title[i].innerHTML = data["results"][i+1]["title"])
					date[i].innerHTML = data["results"][i+1]["year"];
					//img[i].src = data["results"][i]["image_url"];//
				}
			})
		}
		else {
			fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&sort_by=-imdb_score&page=2")
			.then(response => response.json())
			.then(data => {
				for (i=0; i<3; i++){			
				title[i+4].innerHTML = data["results"][i]["title"];
				date[i+4].innerHTML = data["results"][i]["year"];
				//img[i].src = data["results"][i]["image_url"];//
				}
			})
		}
	}
}
coucou();*/