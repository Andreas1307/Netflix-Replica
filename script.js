const header = document.querySelector("header")
const searchIcon = document.querySelector("#search-glass");
const searchDiv = document.querySelector(".search")
const volumeButton = document.querySelector("#volume");
const video = document.querySelector("video");
let isTrue = false;


volumeButton.addEventListener("click", () => {
    isTrue = !isTrue;
    volumeButton.innerHTML = isTrue ? `<i class="fa-solid fa-volume-high"></i>` : `<i class="fa-solid fa-volume-xmark"></i>`;
    if (!video.hasAttribute('muted')) {
        video.setAttribute('muted', 'muted');
        video.muted = true; 
    } else {
        video.removeAttribute('muted');  
        video.muted = false; 
    }
})

searchIcon.addEventListener("click", () => {
    searchIcon.style.display = "none"
    searchDiv.classList.add("active");
})

window.addEventListener("scroll", () => {
    if(scrollY > 0) {
        header.classList.add("scroll")
    } else {
        header.classList.remove("scroll")
    }
})



const allMovies = [
    {
        name: "Straight OUTTA COMPTON",
        img: "img/appreciated-1.png",
        age: 18,
        duration: "2 h 10 min."
    },{
        name: "HOT FUZZ",
        img: "img/appreciated-2.png",
        age: 16,
        duration: "1 h 49 min."
    },{
        name: "Nothing Hill",
        img: "img/appreciated-3.png",
        age: 14,
        duration: "2 h 15 min."
    },{
        name: "SHAUN OF THE DEAD",
        img: "img/appreciated-4.png",
        age: 12,
        duration: "2 h 5 min."
    },{
        name: "Crazy Stupid Love",
        img: "img/appreciated-5.png",
        age: 15,
        duration: "1 h 55 min."
    },{
        name: "Superbad",
        img: "img/appreciated-6.png",
        age: 16,
        duration: "2 h 11 min."
    },{
        name: "AboutTime",
        img: "img/appreciated-7.png",
        age: 13,
        duration: "1 h 59 min."
    },{
        name: "The Karate Kid",
        img: "img/appreciated-8.png",
        age: 16,
        duration: "2 h 20 min."
    },{
        name: "Spider-Man",
        img: "img/appreciated-9.png",
        age: 7,
        duration: "2 h 10 min."
    },{
        name: "FORD v FERRARI",
        img: "img/appreciated-10.png",
        age: 16,
        duration: "2 h 13 min."
    },{
        name: "Shameless",
        img: "img/serial-1.png",
        age: 16,
        duration: "1 season"
    },{
        name: "Shadow Hunters",
        img: "img/serial-2.png",
        age: 14,
        duration: "2 seasons"
    },{
        name: "Orange Black",
        img: "img/serial-3.png",
        age: 15,
        duration: "10 episodes"
    },{
        name: "BodyGuard",
        img: "img/serial-4.png",
        age: 16,
        duration: "4 seasons"
    },{
        name: "Designated Survivor",
        img: "img/serial-5.png",
        age: 18,
        duration: "5 episodes"
    },{
        name: "Breaking Bad",
        img: "img/serial-6.png",
        age: 15,
        duration: "5 seasons"
    },{
        name: "The RAIN",
        img: "img/serial-7.png",
        age: 16,
        duration: "1 season"
    },{
        name: "INFAMIE",
        img: "img/serial-8.png",
        age: 14,
        duration: "2 seasons"
    },{
        name: "RAGNAROK",
        img: "img/serial-9.png",
        age: 17,
        duration: "5 seasons"
    },{
        name: "Alma",
        img: "img/serial-10.png",
        age: 12,
        duration: "11 episodes"
    },{
        name: "Vampire Diaries",
        img: "img/movie-1.png",
        age: 18,
        duration: "2 h 24 min."
    },{
        name: "Blue Lagoon",
        img: "img/movie-2.png",
        age: 16,
        duration: "2 h 6 min."
    },{
        name: "Safe Heaven",
        img: "img/movie-3.png",
        age: 18,
        duration: "2 h 10 min."
    },{
        name: "Gossip Girl",
        img: "img/movie-4.png",
        age: 14,
        duration: "1 h 56 min."
    },{
        name: "Failure to Launch",
        img: "img/movie-5.png",
        age: 12,
        duration: "2 h 11 min."
    },{
        name: "Dexter",
        img: "img/movie-6.png",
        age: 14,
        duration: "2 h 21 min."
    },{
        name: "The WOW",
        img: "img/movie-7.png",
        age: 16,
        duration: "2 h 3 min."
    },{
        name: "Outer Banks",
        img: "img/movie-8.png",
        age: 15,
        duration: "2 h 14 min."
    },{
        name: "Think Like A Man",
        img: "img/movie-9.png",
        age: 14,
        duration: "2 h 19 min."
    },{
        name: "Peaky Blinders",
        img: "img/movie-10.png",
        age: 16,
        duration: "2 h 17 min."
    },{
        name: "Blended",
        img: "img/comedie-1.png",
        age: 13,
        duration: "1 h 58 min."
    },{
        name: "Take Me Home",
        img: "img/comedie-2.png",
        age: 14,
        duration: "2 h 2 min."
    },{
        name: "What To Expect",
        img: "img/comedie-3.png",
        age: 15,
        duration: "2 h 6 min."
    },{
        name: "Grown Ups",
        img: "img/comedie-4.png",
        age: 12,
        duration: "2 h 16 min."
    },{
        name: "Pitch Perfect",
        img: "img/comedie-5.png",
        age: 15,
        duration: "2 h 23 min."
    },{
        name: "Grown Ups2",
        img: "img/comedie-6.png",
        age: 12,
        duration: "2 h 1 min."
    },{
        name: "Secound Act",
        img: "img/comedie-7.png",
        age: 15,
        duration: "2 h 15 min."
    },{
        name: "MasterMinds",
        img: "img/comedie-8.png",
        age: 14,
        duration: "2 h 5 min."
    },{
        name: "The Animal",
        img: "img/comedie-9.png",
        age: 12,
        duration: "2 h 3 min."
    },{
        name: "The Other Guys",
        img: "img/comedie-10.png",
        age: 13,
        duration: "2 h 12 min."
    }
]



// Movie search feature
const searchInput = document.getElementById("search")

const searchFunction = () => {
    const searchValue = searchInput.value.trim().toLowerCase();

    searchResult.innerHTML = "";

    if (searchValue) {

        const matchedMovies = allMovies.filter(movie => movie.name.toLowerCase().includes(searchValue));
        if (matchedMovies.length > 0) {
            matchedMovies.forEach((movie) => {
                const { name, img, age, duration } = movie;
                searchResult.innerHTML += `
                    <div class="movie-item">
                        <img src="${img}" alt="${name}">
                        <span>
                        <p class="movie-item-name">${name}</p>
                        <div>
                        <h2>${age}</h2>
                        <h3>${duration}</h3>
                        </div>
                        </span>
                    </div>
                `;
            });
            
        } else {
            searchResult.innerHTML = "<h5>No results found</h5>"; 
        }
    }
};

searchInput.addEventListener("input", searchFunction);



const searchResult = document.querySelector(".search-results");

// Down below is a function for the arrows used to scroll the movies in the homepage divs and check where the movies are.
const movieBox = document.querySelector(".movie-box");
const arrowLeft1 = document.getElementById("arrow-left-1");
const arrowLeft2 = document.getElementById("arrow-left-2");
const arrowLeft3 = document.getElementById("arrow-left-3");
const arrowLeft4 = document.getElementById("arrow-left-4");
const arrowRight1 = document.getElementById("arrow-right-1");
const arrowRight2 = document.getElementById("arrow-right-2");
const arrowRight3 = document.getElementById("arrow-right-3");
const arrowRight4 = document.getElementById("arrow-right-4");

let translateX = 0; // Initial translateX value
const scrollAmount = 150; // Adjust this based on the image width



const moveRight = (arrowLeft, arrowRight, div) => {
     if (Math.abs(translateX) < bestFilms.scrollWidth - bestFilms.clientWidth) {
        translateX -= scrollAmount;
        div.style.transform = `translateX(${translateX}px)`;
    }
    checkRightArrow(arrowRight)
    checkLeftArrow(arrowLeft)
}
const moveLeft = (arrowLeft, arrowRight, div) => {
    if (translateX < 0) {
        translateX += scrollAmount;
        div.style.transform = `translateX(${translateX}px)`;
    }
    checkLeftArrow(arrowLeft);
    checkRightArrow(arrowRight)
}


arrowLeft1.addEventListener("click",() => moveLeft(arrowLeft1, arrowRight1, bestFilms))
arrowLeft2.addEventListener("click",() =>  moveLeft(arrowLeft2, arrowRight2, serialsDiv))
arrowLeft3.addEventListener("click",() =>  moveLeft(arrowLeft3, arrowRight3, nextObsession))
arrowLeft4.addEventListener("click",() =>  moveLeft(arrowLeft4, arrowRight4, comedy))
arrowRight1.addEventListener("click",() =>  moveRight(arrowLeft1, arrowRight1, bestFilms));
arrowRight2.addEventListener("click",() =>  moveRight(arrowLeft2, arrowRight2, serialsDiv));
arrowRight3.addEventListener("click",() =>  moveRight(arrowLeft3, arrowRight3, nextObsession));
arrowRight4.addEventListener("click",() =>  moveRight(arrowLeft4, arrowRight4, comedy));

const arrowLeftArr = [arrowLeft1, arrowLeft2, arrowLeft3, arrowLeft4];
const arrowRightArr = [arrowRight1, arrowRight2, arrowRight3, arrowRight4]

const checkLeftArrow = (arrow) => {
    if (translateX < 0) {
        arrow.style.display = "flex";
    } else {
        arrow.style.display = "none"; 
    }
    
};

const checkRightArrow = (arrow) => {
    const maxTranslateX = movieBox.scrollWidth - movieBox.clientWidth;

    if (Math.abs(translateX) >= maxTranslateX) {
        arrow.style.display = "none";
    } else {
        arrow.style.display = "flex"
    }
};

arrowLeftArr.forEach((arrow) => {
    checkLeftArrow(arrow)
})


// Select appropriate movies for their divs
const appreciatedMovies = allMovies.slice(0, 10);
const serials = allMovies.slice(10, 20);
const yourNextObsession = allMovies.slice(20, 30);
const comedyMovies = allMovies.slice(30, 40);



//Displaying the movie images in the homepage divs
const displayMovies = (arrOfMovies, div) => {
    arrOfMovies.forEach((info) => {
        const { name, img, age, duration } = info;
        div.innerHTML += `
            <div class="slide">
                <img class="slide-img" id="slide-img" src="${img}"/>
                <h4 class="age">${age}</h4>
                <h4 class="name">${name}</h4>
                <h4 class="duration">${duration}</h4>
            </div>
        `;
    });
};

// Selecting the correct elements
const serialsDiv = document.querySelector(".award-winning");
const bestFilms = document.querySelector(".best-films");
const nextObsession = document.querySelector(".next-obsession");
const comedy = document.querySelector(".comedy");

//Movies displayed in their div from the moviesArr
displayMovies(appreciatedMovies, bestFilms);
displayMovies(serials, serialsDiv);
displayMovies(yourNextObsession, nextObsession);
displayMovies(comedyMovies, comedy);


// Display the movie information on hover
const slides = document.querySelectorAll(".slide");
slides.forEach((slide) => {
    const ageText = slide.querySelector(".age").textContent;
    const nameText = slide.querySelector(".name").textContent;
    const durationText = slide.querySelector(".duration").textContent;
    const imgSrc = slide.querySelector(".slide-img").src;

    let div = document.createElement("div");
    div.classList.add("slide-info");
    slide.appendChild(div)
    div.innerHTML += `
    <img src="${imgSrc}"/>
                    <h2 class="nameTextInfo">${nameText}</h2>
                    <div class="slide-opt">
                        <span><i class="fa-solid fa-play"></i></span>
                        <span><i class="fa-solid fa-plus"></i></span>
                        <span><i class="fa-solid fa-thumbs-up"></i></span>
                        <span><i class="fa-solid fa-angle-down"></i></span>
                    </div>
                    <div>
                        <span>${ageText}</span>
                        <p>${durationText}</p>
                    </div>
                    <h3>Mistery <i class="fa-solid fa-circle"></i> Bad <i class="fa-solid fa-circle"></i> Smart</h3>
    `
    div.style.display = "none"



    slide.addEventListener("mouseover", () => {
        div.style.display = "flex"
    })
    slide.addEventListener("mouseout", () => {
        div.style.display = "none"
    })
})

// Remove too much text from the movie name
const nameTextInfo = document.querySelectorAll(".nameTextInfo");
const checkNameLenght = (names) => {
    names.forEach((name) => {
        const text = name.textContent;
        if (text.length > 13) {
            const changedText = text.slice(0 , 13) + "...";
            name.textContent = changedText
        } 
    })
}
checkNameLenght(nameTextInfo)