const mcards = [
    { title: "", description: "", link: "carousel.html", backgroundImage: 'url(assets/workshop.jpeg)' },
    { title: "", description: "", link: "carousel.html", backgroundImage: 'url(assets/pre-events.jpeg)' },
    { title: "", description: "", link: "carousel.html", backgroundImage: 'url(assets/techtalk.jpeg)' },
    { title: "", description: "", link: "carousel.html", backgroundImage: 'url(assets/events-engg.jpeg)' },
    { title: "", description: "", link: "carousel.html", backgroundImage: 'url(assets/events-poly.jpeg)' }
];

let mcurrentIndex = 0;

document.getElementById("mcard").style.backgroundImage = mcards[mcurrentIndex].backgroundImage;
document.getElementById("mcard-link").href = mcards[mcurrentIndex].link;


function mupdateCard() {
    const mcard = document.getElementById("mcard");
    const mcardContent = document.querySelector(".mcard-content");

    mcardContent.style.opacity = 0;

    setTimeout(() => {
        mcard.style.backgroundImage = mcards[mcurrentIndex].backgroundImage;
    }, 300);

    setTimeout(() => {
        document.getElementById("mcard-title").textContent = mcards[mcurrentIndex].title;
        document.getElementById("mcard-description").textContent = mcards[mcurrentIndex].description;
        document.getElementById("mcard-link").href = mcards[mcurrentIndex].link;
        mcardContent.style.opacity = 1;
        mcard.classList.remove("mflip");
    }, 600);

    mcard.classList.add("mflip");
}

function mnextCard() {
    mcurrentIndex = (mcurrentIndex + 1) % mcards.length;
    mupdateCard();
}

function mprevCard() {
    mcurrentIndex = (mcurrentIndex - 1 + mcards.length) % mcards.length;
    mupdateCard();
}
