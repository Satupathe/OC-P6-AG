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


function bestCarrousel(){
	let best = document.getElementsByClassName("best-movies");
	let title = best[0].getElementsByClassName("under-title");
	let date = best [0].getElementsByClassName("product-date");
	let img = best[0].getElementsByClassName("best-img");

	for (i=0; i<2; i++){
		if (i == 0){
            fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&sort_by=-imdb_score&page=1")
            .then(response => response.json())  
            .then(data => {
                let h = 1
                for (j=0; j<4; j++){
                    title[j].innerHTML = data["results"][h]["title"];
					date[j].innerHTML = data["results"][h]["year"];
					img[j].src = data["results"][h]["image_url"];
                    h += 1;
                }
            })
        }
		else {
            fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&sort_by=-imdb_score&page=2")
            .then(response => response.json())  
            .then(data => {
                let m = 4
                for (k=0; k<3; k++){
                    title[m].innerHTML = data["results"][k]["title"];
				    date[m].innerHTML = data["results"][k]["year"];
				    img[m].src = data["results"][k]["image_url"];
                    m += 1;
                }
            })
	    }
    }
}
bestCarrousel();

function horrorCarrousel(){
	let horror = document.getElementsByClassName("horror-movies");
	let title = horror[0].getElementsByClassName("under-title");
	let date = horror[0].getElementsByClassName("product-date");
	let img = horror[0].getElementsByClassName("horror-img");

	for (i=0; i<2; i++){
		if (i == 0){
            fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=horror&sort_by=-imdb_score&page=1")
            .then(response => response.json())  
            .then(data => {
                for (j=0; j<5; j++){
                    title[j].innerHTML = data["results"][j]["title"];
					date[j].innerHTML = data["results"][j]["year"];
					img[j].src = data["results"][j]["image_url"];
                }
            })
        }
		else {
            fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=horror&sort_by=-imdb_score&page=2")
            .then(response => response.json())  
            .then(data => {
				let m = 5
                for (k=0; k<2; k++){
                    title[m].innerHTML = data["results"][k]["title"];
				    date[m].innerHTML = data["results"][k]["year"];
				    img[m].src = data["results"][k]["image_url"];
                    m += 1;
                }
            })
	    }
    }
}
horrorCarrousel();

function animationCarrousel(){
	let animation = document.getElementsByClassName("animation-movies");
	let title = animation[0].getElementsByClassName("under-title");
	let date = animation [0].getElementsByClassName("product-date");
	let img = animation[0].getElementsByClassName("animation-img");

	for (i=0; i<2; i++){
		if (i == 0){
            fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=animation&sort_by=-imdb_score&page=1")
            .then(response => response.json())  
            .then(data => {
                for (j=0; j<5; j++){
                    title[j].innerHTML = data["results"][j]["title"];
					date[j].innerHTML = data["results"][j]["year"];
					img[j].src = data["results"][j]["image_url"];
                }
            })
        }
		else {
            fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=animation&sort_by=-imdb_score&page=2")
            .then(response => response.json())  
            .then(data => {
                let m = 5
                for (k=0; k<2; k++){
                    title[m].innerHTML = data["results"][k]["title"];
				    date[m].innerHTML = data["results"][k]["year"];
				    img[m].src = data["results"][k]["image_url"];
                    m += 1;
                }
            })
	    }
    }
}
animationCarrousel();

function actionCarrousel(){
	let action = document.getElementsByClassName("action-movies");
	let title = action[0].getElementsByClassName("under-title");
	let date = action [0].getElementsByClassName("product-date");
	let img = action[0].getElementsByClassName("action-img");

	for (i=0; i<2; i++){
		if (i == 0){
            fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=action&sort_by=-imdb_score&page=1")
            .then(response => response.json())  
            .then(data => {
                for (j=0; j<5; j++){
                    title[j].innerHTML = data["results"][j]["title"];
					date[j].innerHTML = data["results"][j]["year"];
					img[j].src = data["results"][j]["image_url"];
                }
            })
        }
		else {
            fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=action&sort_by=-imdb_score&page=2")
            .then(response => response.json())  
            .then(data => {
                let m = 5
                for (k=0; k<2; k++){
                    title[m].innerHTML = data["results"][k]["title"];
				    date[m].innerHTML = data["results"][k]["year"];
				    img[m].src = data["results"][k]["image_url"];
                    m += 1;
                }
            })
	    }
    }
}
actionCarrousel();

var infoBtns = document.querySelectorAll('.infos-btn');
var arr = Array.prototype.slice.call(infoBtns);
var modalBackground = document.getElementById('modal-background');
var closeBtn = document.getElementById('close-btn');

var modalTitle = document.getElementsByClassName("modal-title");
var modalgenre = document.getElementsByClassName("modal-genres");
var modalDate = document.getElementsByClassName("modal-date");
var modalRate = document.getElementsByClassName("modal-rate");
var modalImdb = document.getElementsByClassName("modal-imdb");
var modalDuration = document.getElementsByClassName("modal-duration");
var modalDirector = document.getElementsByClassName("modal-director");
var modalActor = document.getElementsByClassName("modal-actor");
var modalCountry = document.getElementsByClassName("modal-country");
var modalBoxOffice = document.getElementsByClassName("modal-boxOffice");
var modalImg = document.getElementsByClassName("modal-img");
var modalDescription = document.getElementsByClassName("modal-Description");

infoBtns.forEach(function (trigger){
	trigger.addEventListener('click', function(event) {
		index = arr.indexOf(trigger)
		console.log(index);
		event.preventDefault();
		modalBackground.style.display = 'block';
		let movieId = "";
		let i = "";
		if (index < 7) {
			if (index <4){//penser à rajouter le +1 du décalage//
				i = index + 1;
				fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&sort_by=-imdb_score&page=1")
				.then(response => response.json())  
				.then(data => {
					movieId = data["results"][i]["id"];
					fetch("http://localhost:8000/api/v1/titles/"+movieId)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						modalTitle[0].innerHTML = data["title"];
						modalgenre[0].innerHTML = data["genres"];
						modalDate[0].innerHTML = data["year"];
						modalRate[0].innerHTML = data["rated"];
						modalImdb[0].innerHTML = data["imdb_score"];
						modalDuration[0].innerHTML = data["duration"];
						modalDirector[0].innerHTML = data["directors"];
						modalActor[0].innerHTML = data["actors"];
						modalCountry[0].innerHTML = data["countries"];
						modalBoxOffice[0].innerHTML = data["worldwide_gross_income"];
						modalImg[0].innerHTML = "<img src = '"+ data["image_url"] + "'>";
					})
				})
			}
			else {
				i = index-4;
				console.log("C1p2");
				fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&sort_by=-imdb_score&page=2")
				.then(response => response.json())  
				.then(data => {
					console.log(i);
					console.log(data);
					movieId = data["results"][i]["id"];
					console.log(movieId);
					fetch("http://localhost:8000/api/v1/titles/"+movieId)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						modalTitle[0].innerHTML = data["title"];
						modalgenre[0].innerHTML = data["genres"];
						modalDate[0].innerHTML = data["year"];
						modalRate[0].innerHTML = data["rated"];
						modalImdb[0].innerHTML = data["imdb_score"];
						modalDuration[0].innerHTML = data["duration"];
						modalDirector[0].innerHTML = data["directors"];
						modalActor[0].innerHTML = data["actors"];
						modalCountry[0].innerHTML = data["countries"];
						modalBoxOffice[0].innerHTML = data["worldwide_gross_income"];
						modalImg[0].innerHTML = "<img src = '"+ data["image_url"] + "'>";
					})
				})
			}
		}
		else if (index >= 7 && index < 14){
			
			if (index < 12){
				i = index - 7;
				fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=horror&sort_by=-imdb_score&page=1")
				.then(response => response.json())  
				.then(data => {
					movieId = data["results"][i]["id"];
					fetch("http://localhost:8000/api/v1/titles/"+movieId)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						modalTitle[0].innerHTML = data["title"];
						modalgenre[0].innerHTML = data["genres"];
						modalDate[0].innerHTML = data["year"];
						modalRate[0].innerHTML = data["rated"];
						modalImdb[0].innerHTML = data["imdb_score"];
						modalDuration[0].innerHTML = data["duration"];
						modalDirector[0].innerHTML = data["directors"];
						modalActor[0].innerHTML = data["actors"];
						modalCountry[0].innerHTML = data["countries"];
						modalBoxOffice[0].innerHTML = data["worldwide_gross_income"];
						modalImg[0].innerHTML = "<img src = '"+ data["image_url"] + "'>";
					})
				})
			}
			else {
				i = index - 12;
				fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=horror&sort_by=-imdb_score&page=2")
				.then(response => response.json())  
				.then(data => {
					console.log(data);
					console.log(i);
					movieId = data["results"][i]["id"];
					fetch("http://localhost:8000/api/v1/titles/"+movieId)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						modalTitle[0].innerHTML = data["title"];
						modalgenre[0].innerHTML = data["genres"];
						modalDate[0].innerHTML = data["year"];
						modalRate[0].innerHTML = data["rated"];
						modalImdb[0].innerHTML = data["imdb_score"];
						modalDuration[0].innerHTML = data["duration"];
						modalDirector[0].innerHTML = data["directors"];
						modalActor[0].innerHTML = data["actors"];
						modalCountry[0].innerHTML = data["countries"];
						modalBoxOffice[0].innerHTML = data["worldwide_gross_income"];
						modalImg[0].innerHTML = "<img src = '"+ data["image_url"] + "'>";
					})
				})
			}
		}
		else if (index >= 14 && index < 21){
			
			if (index < 19){
				i = index - 14;
				fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=animation&sort_by=-imdb_score&page=1")
				.then(response => response.json())  
				.then(data => {
					movieId = data["results"][i]["id"];
					fetch("http://localhost:8000/api/v1/titles/"+movieId)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						modalTitle[0].innerHTML = data["title"];
						modalgenre[0].innerHTML = data["genres"];
						modalDate[0].innerHTML = data["year"];
						modalRate[0].innerHTML = data["rated"];
						modalImdb[0].innerHTML = data["imdb_score"];
						modalDuration[0].innerHTML = data["duration"];
						modalDirector[0].innerHTML = data["directors"];
						modalActor[0].innerHTML = data["actors"];
						modalCountry[0].innerHTML = data["countries"];
						modalBoxOffice[0].innerHTML = data["worldwide_gross_income"];
						modalImg[0].innerHTML = "<img src = '"+ data["image_url"] + "'>";
					})
					
				})
			}
			else {
				i = index - 19;
				fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=animation&sort_by=-imdb_score&page=2")
				.then(response => response.json())  
				.then(data => {
					movieId = data["results"][i]["id"];
					fetch("http://localhost:8000/api/v1/titles/"+movieId)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						modalTitle[0].innerHTML = data["title"];
						modalgenre[0].innerHTML = data["genres"];
						modalDate[0].innerHTML = data["year"];
						modalRate[0].innerHTML = data["rated"];
						modalImdb[0].innerHTML = data["imdb_score"];
						modalDuration[0].innerHTML = data["duration"];
						modalDirector[0].innerHTML = data["directors"];
						modalActor[0].innerHTML = data["actors"];
						modalCountry[0].innerHTML = data["countries"];
						modalBoxOffice[0].innerHTML = data["worldwide_gross_income"];
						modalImg[0].innerHTML = "<img src = '"+ data["image_url"] + "'>";
					})
				})
			}


		}
		else {
			
			if (index < 26){
				i = index - 21;
				fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=action&sort_by=-imdb_score&page=1")
				.then(response => response.json())  
				.then(data => {
					movieId = data["results"][i]["id"];
					fetch("http://localhost:8000/api/v1/titles/"+movieId)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						modalTitle[0].innerHTML = data["title"];
						modalgenre[0].innerHTML = data["genres"];
						modalDate[0].innerHTML = data["year"];
						modalRate[0].innerHTML = data["rated"];
						modalImdb[0].innerHTML = data["imdb_score"];
						modalDuration[0].innerHTML = data["duration"];
						modalDirector[0].innerHTML = data["directors"];
						modalActor[0].innerHTML = data["actors"];
						modalCountry[0].innerHTML = data["countries"];
						modalBoxOffice[0].innerHTML = data["worldwide_gross_income"];
						modalImg[0].innerHTML = "<img src = '"+ data["image_url"] + "'>";
					})
				})
			}
			else {
				i = index - 26;
				fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=action&sort_by=-imdb_score&page=2")
				.then(response => response.json())  
				.then(data => {
					movieId = data["results"][i]["id"];
					fetch("http://localhost:8000/api/v1/titles/"+movieId)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						modalTitle[0].innerHTML = data["title"];
						modalgenre[0].innerHTML = data["genres"];
						modalDate[0].innerHTML = data["year"];
						modalRate[0].innerHTML = data["rated"];
						modalImdb[0].innerHTML = data["imdb_score"];
						modalDuration[0].innerHTML = data["duration"];
						modalDirector[0].innerHTML = data["directors"];
						modalActor[0].innerHTML = data["actors"];
						modalCountry[0].innerHTML = data["countries"];
						modalBoxOffice[0].innerHTML = data["worldwide_gross_income"];
						modalImg[0].innerHTML = "<img src = '"+ data["image_url"] + "'>";
					})
				})
			}
		}
	});

	closeBtn.addEventListener('click', function() {
	modalBackground.style.display = 'none';
	});
	
	window.addEventListener('click', function(event) {
		if (event.target === modalBackground) {
			modalBackground.style.display = 'none';
		}
	});
});


