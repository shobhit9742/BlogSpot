let firstCardsContainer = document.getElementById("container2");
let saved = document.getElementById("saved");

let flag = true;
let page = 1;

//fetch data
async function fetchData() {
    try {
        let res = await fetch('https://tech-tatva-2345-1.onrender.com/blog_posts?_limit=8');
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

//font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;

//create card
function createCard(data) {
    let blogCard = document.createElement("div")
    blogCard.className = "card";

    let allText = document.createElement("div")
    allText.className = "ProImgText"
    let imgAllText = document.createElement("div");
    imgAllText.className = "imageAllText"

    let img = document.createElement("img");
    img.src = data.profile_Img;
    img.style.width = "30px"
    img.style.height = "30px"
    img.style.marginRight = "10px"
    img.style.borderRadius = "6px"

    let name = document.createElement("p")
    name.innerText = data.author_name;
    name.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    name.style.fontSize = "15px"
    let by = document.createElement("p")
    by.innerText = data.by2;

    let name_title = document.createElement("p");
    name_title.innerText = data.name_title;
    name_title.style.fontSize = "15px"

    let title = document.createElement("h3");
    title.innerText = data.title;
    title.style.marginTop = "-2px"
    title.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    title.style.fontSize = "18px"

    let description = document.createElement("p");
    description.innerText = data.description;
    description.style.marginTop = "-10px"
    description.style.color = "Gray"
    description.style.fontSize = "15.5px"

    let dateLogoBox = document.createElement("div")
    dateLogoBox.className = "dateTimelogo";

    let dateBox = document.createElement("div")
    dateBox.className = "dataTimeTag"
    let date_pub = document.createElement("span");
    date_pub.innerText = data.date_pub;
    date_pub.style.color = "Gray"
    date_pub.style.marginRight = "10px"
    date_pub.style.fontSize = "14px"

    let reading_time = document.createElement("span")
    reading_time.innerText = data.reading_time;
    reading_time.style.color = "Gray"
    reading_time.style.marginRight = "10px"
    reading_time.style.fontSize = "14px"

    let by_8 = document.createElement("span");
    by_8.innerText = data.by8;

    let tag = document.createElement("button");
    tag.innerText = data.tag;
    tag.style.color = "Gray"
    tag.style.marginRight = "10px"
    tag.style.marginLeft = "5px"
    tag.style.fontSize = "14px"
    tag.style.paddingLeft = "10px"
    tag.style.paddingRight = "10px"
    tag.style.height = "27px";
    tag.style.border = "none"
    tag.style.borderRadius = "20px"
    tag.style.backgroundColor = "ligthGray"

    let logoBox = document.createElement("div")
    logoBox.className = "logoIcon"
    let icon = document.createElement("img");

    icon.src = "/Tech-Tatva-2345/Frontend/bookmark.svg";

    icon.style.cursor = "pointer";

    icon.addEventListener("click", function () {
        let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
        savedData.push(data);
        localStorage.setItem("savedData", JSON.stringify(savedData));


        icon.src = "/Tech-Tatva-2345/Frontend/saved.svg";

        icon.style.width = "28px";
        icon.style.height = "28px";
        icon.removeEventListener("click", this);
    });

    let img_src = document.createElement("img");
    img_src.src = data.img_src;
    img_src.style.width = "220px";
    img_src.style.marginLeft = "15px"


    dateBox.append(date_pub, reading_time, by_8, tag)
    logoBox.append(icon)
    dateLogoBox.append(dateBox, logoBox)
    imgAllText.append(img, name, by, name_title)
    allText.append(imgAllText, title, description, dateLogoBox)
    blogCard.append(allText, img_src);

    // Tooltip
    name.addEventListener("mouseenter", () => {
        let tooltipCard = document.createElement("div");
        tooltipCard.className = "tooltip-card";
        tooltipCard.style.backgroundColor = "white";
        tooltipCard.style.position = "absolute";
        tooltipCard.style.left = `${name.offsetLeft + name.offsetWidth + 10}px`; // Position to the right of the name
        tooltipCard.style.top = `${name.offsetTop}px`;

        let cardImage = document.createElement("img");
        cardImage.src = data.profile_Img;
        cardImage.style.width = "10%";
        cardImage.style.borderRadius = "5px"
        let userInfo = document.createElement("div");
        userInfo.className = "user-info";

        let userName = document.createElement("h3");
        userName.innerText = data.author_name;
        userName.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";


        let occupation = document.createElement("p");
        occupation.innerText = data.description;
        occupation.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
        occupation.style.fontSize = "15px"

        let separator = document.createElement("hr");
        separator.style.color = "lightGray"

        let followers = document.createElement("span");
        followers.innerText = "72 Followers";
        followers.style.marginRight = "125px";
        followers.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
        followers.style.fontSize = "15px"
        let followButton = document.createElement("button");
        followButton.innerText = "Follow";
        followButton.style.color = "white"
        followButton.style.border = "none"
        followButton.style.borderRadius = "5px"
        followButton.style.height = "30px"
        followButton.style.width = "75px"
        followButton.style.fontWeight = "600"
        followButton.style.backgroundColor = "green"

        userInfo.append(userName, occupation, separator, followers, followButton);
        tooltipCard.appendChild(cardImage); // Append image to the detailed card
        tooltipCard.appendChild(userInfo);

        blogCard.appendChild(tooltipCard);
    });

    name.addEventListener("mouseleave", () => {
        let tooltipCard = blogCard.querySelector(".tooltip-card");
        if (tooltipCard) {
            tooltipCard.remove();
        }
    });

    return blogCard;
}

function appendData(data) {
    data.forEach(element => {
        let card = createCard(element);
        firstCardsContainer.append(card);
    });
}



window.addEventListener("scroll", () => {
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop + clientHeight >= scrollHeight * 0.8 && flag) {
        console.log("Scrolled 80%");
        page++;
        fetchData(page);
        flag = false;
    }
});


/////////////  M  ///////////////
const animatedMs = document.querySelectorAll('.animated');

function animateMs() {
    setInterval(() => {
        animatedMs.forEach((m) => {
            const box = m.parentElement;
            const boxWidth = box.clientWidth;
            const boxHeight = box.clientHeight;
            const posX = Math.floor(Math.random() * (boxWidth - 30)); // 30 is the width of the 'M' element
            const posY = Math.floor(Math.random() * (boxHeight - 30)); // 30 is the height of the 'M' element

            m.style.left = `${posX}px`;
            m.style.top = `${posY}px`;

            if (Math.random() < 0.5) {
                m.style.display = 'inline-block'; // Show the 'M'
            } else {
                m.style.display = 'none';
            }
        });
    }, 600);
}

// Start animation
animateMs();


///// Trending On Medium

let blog_posts = [
    {
        "id": "1",
        "profile_Img": "https://miro.medium.com/v2/resize:fill:40:40/1*KCdWeLHgIFfw5gv7fX97Eg.jpeg",
        "author_name": "Ryan Fan",
        "by2": "in",
        "name_title": "Invisible Illness",
        "title": "The Embrace of Sports Gambling Has Gone Too Far",
        "description": "Why young men, like myself, are particularly susceptible to sports gambling addiction",
        "date_pub": "Mar 13, 2024",
        "reading_time": "7 min read",
        "by8": "·",
        "tag": "Gambling",
        "img_src": "https://miro.medium.com/v2/da:true/resize:fill:250:168/0*axOYB0WNLkM2gS0q"
    },
    {
        "id": "2",
        "profile_Img": "https://miro.medium.com/v2/resize:fill:40:40/1*KRWzAtSc4v6NifDIZiBrUw.png",
        "author_name": "Jaime Martínez Bowness",
        "by2": "in",
        "name_title": "Work City",
        "title": "When Honesty Hurts: Between Authenticity and “Sincericide” at Work",
        "description": "A personal experience of how too much honesty can backfire, and a good way to navigate the thin line between being sincere and being…",
        "date_pub": "Mar 15, 2024",
        "reading_time": "5 min read",
        "by8": "·",
        "tag": "Leadership",
        "img_src": "https://miro.medium.com/v2/da:true/resize:fill:250:168/0*hZEpd7IuvYid9pUQ"
    },
    {
        "id": "3",
        "profile_Img": "https://miro.medium.com/v2/resize:fill:40:40/1*tlSJZopCPn4cndd9KrDLPg.png",
        "author_name": "Kathleen Murphy",
        "by2": "in",
        "name_title": "Wise & Well",
        "title": "The Brain Science Behind Aging and Forgetting",
        "description": "Are younger people smarter? Are older people wiser? Living longer affects the brain, but exactly how may surprise you",
        "date_pub": "Mar 8, 2024",
        "reading_time": "5 min read",
        "by8": "·",
        "tag": "Health",
        "img_src": "https://miro.medium.com/v2/resize:fill:250:168/1*TYNsHKGvELRsgalw4UwIdg.png"
    },
    {
        "id": "4",
        "profile_Img": "https://miro.medium.com/v2/resize:fill:40:40/1*NYalSuFa9XrlE-kog6De_Q.png",
        "author_name": "Shin Jie Yong, MSc (Res)",
        "by2": "in",
        "name_title": "Microbial Instincts",
        "title": "My Friend Won the US$100,000 Debate on the Origin of COVID-19",
        "description": "An achievement that we hope will make a greater impact.",
        "date_pub": "Mar 17, 2024",
        "reading_time": "16 min read",
        "by8": "·",
        "tag": "Covid-19",
        "img_src": "https://miro.medium.com/v2/resize:fill:250:168/1*7CxK9riK2X7oJDEWKdW7CQ.png"
    },
    {
        "id": "5",
        "profile_Img": "https://miro.medium.com/v2/resize:fill:40:40/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
        "author_name": "Medium Staff",
        "by2": "in",
        "name_title": "The Medium Blog",
        "title": "It happened on Medium: February roundup",
        "description": "Last month’s most-read stories, most-highlighted sentences, and stories by writers new to Medium",
        "date_pub": "Mar 15, 2024",
        "reading_time": "7 min read",
        "by8": "·",
        "tag": "Medium",
        "img_src": "https://miro.medium.com/v2/resize:fill:250:168/1*MnDr70SEowwqW2r_08-E_w.png"
    },
    {
        "id": "6",
        "profile_Img": "https://miro.medium.com/v2/resize:fill:40:40/1*_-1HvssC9IZ3OOgPIi3yfw.png",
        "author_name": "Maria Garcia",
        "by2": "in",
        "name_title": "A-Culturated",
        "title": "The Infinite Shades of Saudade Blue",
        "description": "Saudade isn’t just a word, it’s a color, and a feeling",
        "date_pub": "Feb 12, 2024",
        "reading_time": "4 min read",
        "by8": "·",
        "tag": "Portugal",
        "img_src": "https://miro.medium.com/v2/resize:fill:250:168/1*-FBZJNyicWLAvPc_vBm8og.jpeg"
    }
]

let trendingContainer = document.getElementById("trendingContainer");
// display the details on the browser.
function displayData(data) {
    data.forEach(element => {
        let card = createTrendingCard(element);
        trendingContainer.append(card);
    });
}
displayData(blog_posts);

//create card
function createTrendingCard(data) {
    let blogCard = document.createElement("div");
    blogCard.className = "trendingCard";
    blogCard.style.cursor = "pointer";

    let idText = document.createElement("div");
    idText.className = "idImgText";

    let id = document.createElement("h1");
    id.innerText = data.id;
    id.style.marginLeft = "10px";
    id.style.color = "lightGray";

    let imgName = document.createElement("div");
    imgName.className = "imageName";

    let imgDiv = document.createElement("div");
    imgDiv.style.width = "25px";
    imgDiv.style.height = "25px";
    imgDiv.style.borderRadius = "5px";

    let img = document.createElement("img");
    img.src = data.profile_Img;
    img.style.borderRadius = "5px";
    img.style.width = "25px";

    let name = document.createElement("span");
    name.innerText = data.author_name;
    name.style.marginLeft = "10px";
    name.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    name.style.fontSize = "15px"
    let by = document.createElement("p")
    by.innerText = data.by2;
    by.style.marginLeft = "3px"
    by.style.marginRight = "4px"
    by.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    by.style.fontSize = "15px"

    let name_title = document.createElement("span");
    name_title.innerText = data.name_title;
    name_title.style.fontSize = "15px"
    name_title.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";

    let title = document.createElement("h4");
    title.innerText = data.title;
    title.style.marginTop = "2px"
    title.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";

    let date_pub = document.createElement("span");
    date_pub.innerText = data.date_pub;
    date_pub.style.color = "Gray"
    date_pub.style.marginRight = "10px"
    date_pub.style.fontSize = "15px"
    date_pub.style.marginTop = "-18px"
    date_pub.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";

    let by_8 = document.createElement("span");
    by_8.innerText = data.by8;
    by_8.style.marginRight = "3px"
    by_8.style.fontSize = "18px"
    by_8.style.color = "Gray"

    let reading_time = document.createElement("span")
    reading_time.innerText = data.reading_time;
    reading_time.style.color = "Gray"
    reading_time.style.marginRight = "10px"
    reading_time.style.fontSize = "15px"
    reading_time.style.marginTop = "-18px"
    reading_time.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";


    imgDiv.append(img);
    imgName.append(imgDiv, name, by, name_title);
    idText.append(imgName, title, date_pub, by_8, reading_time);
    blogCard.append(id, idText);

    // Tooltip
    name.addEventListener("mouseenter", () => {
        let tooltipCard = document.createElement("div");
        tooltipCard.className = "tooltip-card";
        tooltipCard.style.backgroundColor = "white"; // White background
        tooltipCard.style.position = "absolute";
        tooltipCard.style.left = `${name.offsetLeft + name.offsetWidth + 10}px`; // Position to the right of the name
        tooltipCard.style.top = `${name.offsetTop}px`;

        let cardImage = document.createElement("img"); // Image for the detailed card
        cardImage.src = data.profile_Img;
        cardImage.style.width = "10%"; // Ensure the image fills the container
        cardImage.style.borderRadius = "5px"
        let userInfo = document.createElement("div");
        userInfo.className = "user-info";

        let userName = document.createElement("h3");
        userName.innerText = data.author_name;
        userName.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";


        let occupation = document.createElement("p");
        occupation.innerText = data.description;
        occupation.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
        occupation.style.fontSize = "15px"

        let separator = document.createElement("hr"); // Separator line
        separator.style.color = "lightGray"

        let followers = document.createElement("span"); // Use span instead of p for inline elements
        followers.innerText = "72 Followers";
        followers.style.marginRight = "125px"; // Add margin between followers and button
        followers.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
        followers.style.fontSize = "15px"
        let followButton = document.createElement("button");
        followButton.innerText = "Follow";
        followButton.style.color = "white"
        followButton.style.border = "none"
        followButton.style.borderRadius = "5px"
        followButton.style.height = "30px"
        followButton.style.width = "75px"
        followButton.style.fontWeight = "600"
        followButton.style.backgroundColor = "green"

        userInfo.append(userName, occupation, separator, followers, followButton); // Append followers and button in the same line
        tooltipCard.appendChild(cardImage); // Append image to the detailed card
        tooltipCard.appendChild(userInfo);

        blogCard.appendChild(tooltipCard);
    });

    name.addEventListener("mouseleave", () => {
        let tooltipCard = blogCard.querySelector(".tooltip-card");
        if (tooltipCard) {
            tooltipCard.remove();
        }
    });

    return blogCard;
}