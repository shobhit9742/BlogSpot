let firstCardsContainer = document.getElementById("container2");
let saved = document.getElementById("saved");
let container2 = document.getElementById("container2");


let flag = true;
let page = 1;
let isFetching = false
//fetch data
async function fetchData() {
    try {
        isFetching = true;
        let res = await fetch(`https://tech-tatva-2345-1.onrender.com/blog_posts?_page=${page}`);
        let data = await res.json();
        console.log(data);
        isFetching = false;
        appendData(data)
        if (data.length === 0) {
            flag = false;
            return;
        }
        page++;
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
    img.className = "profileImg";
    // img.src = data.profile_Img;
    img.src = (data.profile_Img == "" ? "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1711880702~exp=1711881302~hmac=55bf17deceea9dac34197c009d68b5d3b845efc75619582df72d67b6ba31b280" : data.profile_Img);

    img.style.width = "30px"
    img.style.height = "30px"
    img.style.marginRight = "10px"
    img.style.marginBottom = "15px"
    img.style.borderRadius = "6px"

    let name = document.createElement("p")
    name.className = "name";
    name.innerText = data.author_name;
    name.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    name.style.fontSize = "15px"
    let by = document.createElement("p")
    by.className = "byIn"
    by.innerText = data.by2;

    let name_title = document.createElement("p");
    name_title.className = "nameTitle"
    name_title.innerText = data.name_title;
    name_title.style.fontSize = "15px"

    let title = document.createElement("h4");
    title.className = "cardTitle"
    title.innerText = data.title;
    title.style.marginTop = "-10px"
    title.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    title.style.fontSize = "18px"
    title.style.fontWeight = "600"

    let description = document.createElement("p");
    description.className = "details"
    description.innerText = data.description;
    description.style.marginTop = "-3px"
    description.style.color = "Gray"
    description.style.fontSize = "15px"
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
    tag.className = "tagBtn"
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
    icon.src = "./bookmark.svg";
    icon.style.cursor = "pointer";

    document.addEventListener("DOMContentLoaded", function () {
        // Check if there is any saved data
        let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
        savedData.forEach(savedItem => {
            // Find the corresponding card for each saved item
            let card = document.querySelector(`.card[data-id="${savedItem.id}"]`);
            if (card) {
                // Find the bookmark icon within the card
                let icon = card.querySelector(".logoIcon img");
                if (icon) {
                    // Change the icon to the saved icon
                    icon.src = "./saved.svg";
                }
            }
        });
    });

    icon.addEventListener("click", function () {
        let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
        let dataIndex = savedData.findIndex(item => item.id === data.id);

        if (dataIndex === -1) {
            // If data is not saved, save it and change the icon
            savedData.push(data);
            localStorage.setItem("savedData", JSON.stringify(savedData));
            icon.src = "./saved.svg";
        } else {
            // If data is already saved, remove it and change the icon
            savedData.splice(dataIndex, 1);
            localStorage.setItem("savedData", JSON.stringify(savedData));
            icon.src = "./bookmark.svg";
        }
    });


    let img_src = document.createElement("img");
    img_src.className = "bigImage"
    // img_src.src = data.img_src;
    img_src.src = (data.img_src == "" ? "https://images.unsplash.com/photo-1529909746513-b540c1680fdb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : data.img_src);
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

        let userName = document.createElement("h6");
        userName.innerText = data.author_name;
        userName.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
        userName.style.fontWeight = "600"

        let occupation = document.createElement("p");
        occupation.innerText = data.description;
        occupation.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
        occupation.style.fontSize = "14px"

        let separator = document.createElement("hr");
        separator.style.color = "lightGray"
        separator.className = "hrSeparator"

        let followers = document.createElement("span");
        followers.innerText = "72 Followers";
        followers.style.marginRight = "120px";
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
    if (isFetching || !flag) {
        return;
    }
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchData()
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
        "profile_Img": "https://miro.medium.com/v2/resize:fill:25:25/1*iosNcL2ReR-JSS2TECYd9g.png",
        "author_name": "Robert Roy Britt",
        "by2": "in",
        "name_title": "Aha!",
        "title": "Does Anybody Really Know What Time It Is?",
        "description": "A brief history of timekeeping reveals the need for leap day, leap seconds, and the neverending challenge of synchronizing clocks around…",
        "date_pub": "Feb 26, 2024",
        "reading_time": "10 min read",
        "by8": "·",
        "tag": "Leap Year",
        "img_src": "https://miro.medium.com/v2/da:true/resize:fill:250:168/0*c21LMdW8xH1652GP"
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

    let id = document.createElement("h4");
    id.innerText = data.id;
    id.style.marginLeft = "5px";
    id.style.marginTop = "10px";
    id.style.color = "lightGray";
    id.style.marginRight = "10px";

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
    name.style.marginLeft = "8px";
    name.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    name.style.fontSize = "14px"
    let by = document.createElement("span")
    by.innerText = data.by2;
    by.style.marginLeft = "3px"
    by.style.marginRight = "4px"
    by.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    by.style.fontSize = "14px"

    let name_title = document.createElement("span");
    name_title.innerText = data.name_title;
    name_title.style.fontSize = "14px"
    name_title.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";

    let title = document.createElement("h6");
    title.className = "TrendingTitle"
    title.innerText = data.title;
    title.style.fontWeight = "600"
    title.style.fontSize = "18px"
    title.style.marginTop = "2px"
    title.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    title.style.marginBottom = "8px"
    let date_pub = document.createElement("span");
    date_pub.innerText = data.date_pub;
    date_pub.style.color = "Gray"
    date_pub.style.marginRight = "10px"
    date_pub.style.fontSize = "14px"
    // date_pub.style.marginTop = "-30px"
    date_pub.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    date_pub.style.marginBottom = "10px"
    let by_8 = document.createElement("span");
    by_8.innerText = data.by8;
    by_8.style.marginRight = "3px"
    by_8.style.fontSize = "14px"
    by_8.style.color = "Gray"
    // by_8.style.marginTop = "-30px"

    let reading_time = document.createElement("span")
    reading_time.innerText = data.reading_time;
    reading_time.style.color = "Gray"
    reading_time.style.marginRight = "10px"
    reading_time.style.fontSize = "14px"
    // reading_time.style.marginTop = "-30px"
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
        // cardImage.style.display = "inlineBlock"
        let userInfo = document.createElement("div");
        userInfo.className = "user-info";

        let userName = document.createElement("h6");
        userName.innerText = data.author_name;
        userName.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
        userName.style.fontWeight = "600"
        // userName.style.display = "inlineBlock"

        let occupation = document.createElement("p");
        occupation.innerText = data.description;
        occupation.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
        occupation.style.fontSize = "15px"

        let separator = document.createElement("hr");
        separator.className = "hrSeparator"
        separator.style.color = "lightGray"

        let followers = document.createElement("span"); // Use span instead of p for inline elements
        followers.innerText = "72 Followers";
        followers.style.marginRight = "120px"; // Add margin between followers and button
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


// menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const menuLinks = document.getElementById('menu-links');

    hamburgerIcon.addEventListener('click', function () {
        menuLinks.style.display = menuLinks.style.display === 'none' ? 'block' : 'none';
    });
});

