var quotes = [
    'Genius is one percent inspiration and ninety-nine percent perspiration',
    'Tell me and I forget. Teach me and I remember. Involve me and I learn',
    'A pessimist is one who makes difficulties of his opportunities and an optimist is one who makes opportunities of his difficulties',
    'Always remember that you are absolutely unique. Just like everyone else',
    'An unexamined life is not worth living',
    'Happiness lies not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort',
    'I am a slow walker, but I never walk backwards',
    'Imagination is more important than knowledge',
    'Intelligence plus character that is the goal of real education'
]

function newQuote(){
    var randomNumber =Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}