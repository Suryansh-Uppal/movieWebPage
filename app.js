
let right_btn = document.getElementsByClassName("fa-chevron-right")[0];
let left_btn = document.getElementsByClassName('fa-chevron-left')[0];
let cards = document.getElementsByClassName('cards')[0];

left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
    console.log('left')
});

right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;
    console.log('right')
});


// let json_url = "movie.json";

// fetch(json_url).then(Response => Response.json())
//     .then((data) => console.log("data"))