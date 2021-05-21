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

let right_mover = function(index, category){
	let move = 0;
	if (index = "l") {move = l}
	else if (index = "m") {move = m}
	else if (index = "n") {move = n}
	else if(index = "o") {move = o}
	move = move + movePer;

	for(const i of category){
		if (move==maxMove) {move=0;}
		i.style.left = '-' + move + '%';	
	}
	
	if (index = "l") {l = move}
	else if (index = "m") {m = move}
	else if (index = "n") {n = move}
	else if(index = "o") {o = move}
}

let left_mover = function(index, category) {
	let move = 0
	if (index = "l") {move = l}
	else if (index = "m") {move = m}
	else if (index = "n") {move = n}
	else if(index = "o") {move = o}
	move = move - movePer;
	
	for (const i of category){
		if (move <= minMove) {move= 75;}
		i.style.left = "-" + move + "%";
	}

	if (index = "l") {l = move}
	else if (index = "m") {m = move}
	else if (index = "n") {n = move}
	else if(index = "o") {o = move}
}

rightBtn[0].onclick = ()=>{right_mover("l", best);};
leftBtn[0].onclick = ()=>{left_mover("l", best);};
rightBtn[1].onclick = ()=>{right_mover("m", horror);};
leftBtn[1].onclick = ()=>{left_mover("m", horror);};
rightBtn[2].onclick = ()=>{right_mover("n", animation);};
leftBtn[2].onclick = ()=>{left_mover("n", animation);};
rightBtn[3].onclick = ()=>{right_mover("o", action);};
leftBtn[3].onclick = ()=>{left_mover("o", action);};




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
var infos = document.querySelector('.infos');
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
var modalDescription = document.getElementsByClassName("modal-description");

infos.addEventListener('click', function(event){
	event.preventDefault();
	modalBackground.style.display = 'block';
	let movieId = "";
	fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=5&sort_by=-imdb_score&page=1")
	.then(response => response.json())  
	.then(data => {
		movieId = data["results"][0]["id"];
		fetch("http://localhost:8000/api/v1/titles/"+movieId)
		.then(response => response.json())
		.then(data => {
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
			modalDescription[0].innerHTML = data["description"];
			modalImg[0].innerHTML = "<img src = '"+ data["image_url"] + "'>";
		})
	})
})

infoBtns.forEach(function (trigger){
	trigger.addEventListener('click', function(event) {
		index = arr.indexOf(trigger)
		event.preventDefault();
		modalBackground.style.display = 'block';
		let movieId = "";
		let i = "";
		let urlOfList = "";

		if (index < 7) {
			if (index <4){i = index + 1;
				urlOfList = "http://localhost:8000/api/v1/titles/?imdb_score_min=5&sort_by=-imdb_score&page=1";}
			else {i = index-4;
				urlOfList = "http://localhost:8000/api/v1/titles/?imdb_score_min=5&sort_by=-imdb_score&page=2";}
		}
		else if (index >= 7 && index < 14){
			if (index < 12){i = index - 7;
				urlOfList = "http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=horror&sort_by=-imdb_score&page=1";}
			else {i = index - 12;
				urlOfList = "http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=horror&sort_by=-imdb_score&page=2";}
		}
		else if (index >= 14 && index < 21){
			if (index < 19){i = index - 14;
				urlOfList = "http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=animation&sort_by=-imdb_score&page=1";}
			else {i = index - 19;
				urlOfList = "http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=animation&sort_by=-imdb_score&page=2";}
		}
		else {
			if (index < 26){i = index - 21;
				urlOfList = "http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=action&sort_by=-imdb_score&page=1";}
			else {i = index - 26;
				urlOfList = "http://localhost:8000/api/v1/titles/?imdb_score_min=5&genre=action&sort_by=-imdb_score&page=2";}
		}
		fetch(urlOfList)
		.then(response => response.json())
		.then(data => {
			movieId = data["results"][i]["id"];
			fetch("http://localhost:8000/api/v1/titles/"+movieId)
			.then(response => response.json())
			.then(data => {
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
				modalDescription[0].innerHTML = data["description"];
				modalImg[0].innerHTML = "<img src = '"+ data["image_url"] + "'>";
			})
		})
	})
	closeBtn.addEventListener('click', function() {
		modalBackground.style.display = 'none';
	});
		
	window.addEventListener('click', function(event) {
		if (event.target === modalBackground) {
			modalBackground.style.display = 'none';
		}
	});
})
