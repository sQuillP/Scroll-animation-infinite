const cards = document.querySelectorAll(".card");

const cardContainer = document.querySelector(".card-container");

const lastCardObserver = new IntersectionObserver(
    (entries)=> {
        const lastCard = entries[0];
        if(!lastCard.isIntersecting) return ;
        loadNewCards();
        lastCardObserver.unobserve(lastCard.target);
        lastCardObserver.observe(document.querySelector(".card:last-child"))
    }
)


lastCardObserver.observe(document.querySelector('.card:last-child'));

const observer = new IntersectionObserver(
    (entries)=> {
        entries.forEach(entry => {
            entry.target.classList.toggle('show',entry.isIntersecting);
        });
    },
    {
        threshold: 1,
    }
);


cards.forEach(card=> {
    observer.observe(card)
});



function loadNewCards() {
    console.log('load new cards called')
    for(let i = 0; i<10; i++) {
        const card = document.createElement('div');
        card.textContent = "New Card";
        card.classList.add("card");
        observer.observe(card);
        cardContainer.append(card);
    }
}


