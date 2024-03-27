let firstCardsContainer = document.getElementById("container2");

let flag = true;
let page = 1;

async function fetchData() {
    try {
        let res = await fetch('../../backend/dummy.json');
        let data = await res.json();
        console.log(data);
        appendData(data)
        flag = true;
    }
    catch (error) {
        console.log(error);
    }
}
fetchData()

//create card
function createCard(data) {
    let blogCard = document.createElement("div");
    blogCard.className = "card";
    let img = document.createElement("img");
    img.src = data.user_profile_image;

    let name = document.createElement("p")
    name.innerText = data.username;
    let date = document.createElement("p");
    date.innerText = data.post_creation_datetime;
    let title = document.createElement("h4");
    title.innerText = data.blog_title;

    blogCard.append(img, name, title, date);

    return blogCard;
}

function appendData(data) {
    data.blog_posts.forEach(element => {
        let card = createCard(element);
        firstCardsContainer.append(card);
    });
}



window.addEventListener("scroll", () => {
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop + clientHeight >= scrollHeight * 0.5 && flag) {
        console.log("Scrolled 50%");
        page++;
        fetchData(page);
        flag = false;
    }
});
