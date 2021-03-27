const bodyHex = document.querySelector('body');
const hex_span = document.querySelector('.hex');
const hex_btn = document.querySelector('.hexBtn')
const author = document.getElementById('quoteAuthor')
const quote = document.getElementById('quote')
const h = document.getElementById('h')

const quotes = [
    {name: 'Dalai Lama', quote: "The purpose of our lives is to be happy." },
    {name: 'Stephen King', quote: "Get busy living or get busy dying." },
    {name: ' Saint Augustine', quote: "The world is a book and those who do not travel read only a page" },
    {name: 'Chief Seattle', quote: "Take only memories, leave only footprints" },
    {name: 'Sylvain Reynard', quote: "You, of all people deserve a happy ending." },
    {name: 'Me', quote: "Maybe it's not about the happy ending. Maybe it's about the story.." },
    {name: 'Me', quote: "Be crazy. Be stupid. Be silly. Be weird. Be whatever. Because life is too short to be anything but happy.." },
    {name: 'A sage ', quote: "A false friend and a shadow attend only while the sun shines." },
    {name: 'David McCullough Jr.', quote: "Climb mountains not so the world can see you, but so you can see the world" },
    {name: 'Sir Edmund Hillary.', quote: "It is not the mountain we conquer but ourselves." }
]

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

hex_btn.addEventListener('click', gethex);

function gethex(){

    var hexString = '#';
    var random2 = Math.floor(Math.random()*quotes.length);

    for(let i = 0; i <6; i++){
        let random1 = Math.floor(Math.random()*hexNumbers.length);
        hexString += hexNumbers[random1];
    }
    

    hex_span.innerHTML = ` {  ${hexString} }`;
    bodyHex.style.backgroundColor = hexString;
    author.style.color = hexString;
    quote.innerHTML = `" ${quotes[random2].quote} "`;
    author.innerHTML = `~  ${quotes[random2].name}`;
    h.style.color = hexString;
}
