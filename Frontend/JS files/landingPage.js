let firstCardsContainer = document.getElementById("container2");

let flag = true;
let page = 1;

async function fetchData() {
    try {
        let res = await fetch('https://tech-tatva-2345-1.onrender.com/blog_posts');
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
// {
//     "id": "1",
//     "profile_Img": "https://miro.medium.com/v2/resize:fill:40:40/1*KCdWeLHgIFfw5gv7fX97Eg.jpeg",
//     "author_name": "Ryan Fan",
//     "by 2": "in",
//     "name_title": "Invisible Illness",
//     "title": "The Embrace of Sports Gambling Has Gone Too Far",
//     "description": "Why young men, like myself, are particularly susceptible to sports gambling addiction",
//     "date_pub": "Mar 13, 2024",
//     "reading_time": "7 min read",
//     "by 8": "·",
//     "tag": "Gambling",
//     "img_src": "https://miro.medium.com/v2/da:true/resize:fill:250:168/0*axOYB0WNLkM2gS0q"
//   },
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
    name.style.fontSize = "15.5px"
    // let by = document.createElement("p")
    // by.innerText = data.by2;

    let name_title = document.createElement("p");
    name_title.innerText = data.name_title;
    name_title.style.fontSize = "15.5px"

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

    let date_pub = document.createElement("span");
    date_pub.innerText = data.date_pub;
    date_pub.style.color = "Gray"
    date_pub.style.marginRight = "10px"
    date_pub.style.fontSize = "15px"

    let reading_time = document.createElement("span")
    reading_time.innerText = data.reading_time;
    reading_time.style.color = "Gray"
    reading_time.style.marginRight = "10px"
    reading_time.style.fontSize = "15px"

    // let by8 = document.createElement("span");
    // by8.innerText = data.by8;

    let tag = document.createElement("span");
    tag.innerText = data.tag;
    tag.style.color = "Gray"
    tag.style.marginRight = "10px"
    tag.style.fontSize = "15px"

    let img_src = document.createElement("img");
    img_src.src = data.img_src;
    img_src.style.width = "220px";
    // img_src.style.height = "150px"

    imgAllText.append(img, name, name_title)
    allText.append(imgAllText, title, description, date_pub, reading_time, tag)
    blogCard.append(allText, img_src);

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

    if (scrollTop + clientHeight >= scrollHeight * 0.5 && flag) {
        console.log("Scrolled 50%");
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
                m.style.display = 'none'; // Hide the 'M'
            }
        });
    }, 800); // Adjust animation speed as needed (1000ms = 1 second)
}

// Start animation
animateMs();


////////////// Trending On Medium

let blog_posts = [
    {
        id: 1,
        user_profile_image: "user1_profile.jpg",
        username: "JohnDoe",
        post_creation_datetime: "2024-03-25 08:30:00",
        blog_title: "Exploring the Wonders of Nature",
        brief_content_summary: "Discover the beauty of nature through breathtaking landscapes and diverse wildlife. From majestic mountains to tranquil forests, immerse yourself in the wonders of the natural world.",
        tag: "nature",
        estimated_reading_duration: "1.5 hours",
        blog_image: "nature_wonders_image.jpg"
    },
    {
        id: 2,
        user_profile_image: "user2_profile.jpg",
        username: "JaneSmith",
        post_creation_datetime: "2024-03-24 10:45:00",
        blog_title: "Delicious Dessert Recipes",
        brief_content_summary: "Indulge your sweet tooth with a collection of delectable dessert recipes. From decadent cakes to creamy pies, satisfy your cravings with these irresistible treats.",
        ag: "desserts",
        estimated_reading_duration: "45 mins",
        blog_image: "dessert_recipes_image.jpg"
    },
    {
        id: 3,
        user_profile_image: "user3_profile.jpg",
        username: "DavidLee",
        post_creation_datetime: "2024-03-23 14:20:00",
        blog_title: "Mastering the Art of Photography",
        brief_content_summary: "Unlock the secrets of photography and capture stunning images with expert tips and techniques. From composition to lighting, elevate your photography skills to the next level.",
        tag: "photography",
        estimated_reading_duration: "2 hours",
        blog_image: "photography_art_image.jpg"
    },
    {
        id: 4,
        user_profile_image: "user4_profile.jpg",
        username: "EmilyJones",
        post_creation_datetime: "2024-03-22 16:55:00",
        blog_title: "Exploring Cultural Diversity",
        brief_content_summary: "Immerse yourself in the rich tapestry of cultures from around the world. From vibrant festivals to traditional cuisines, celebrate the beauty of diversity.",
        tag: "culture",
        estimated_reading_duration: "1 hour",
        blog_image: "cultural_diversity_image.jpg"
    },
    {
        id: 5,
        user_profile_image: "user5_profile.jpg",
        username: "AlexBrown",
        post_creation_datetime: "2024-03-21 09:10:00",
        blog_title: "Healthy Living Tips",
        brief_content_summary: "Discover practical tips for maintaining a healthy lifestyle. From nutritious recipes to effective exercise routines, prioritize your well-being with these actionable strategies.",
        tag: "health",
        estimated_reading_duration: "1.5 hours",
        blog_image: "healthy_living_image.jpg"
    },
    {
        id: 6,
        user_profile_image: "user6_profile.jpg",
        username: "GraceWilson",
        post_creation_datetime: "2024-03-20 11:25:00",
        blog_title: "Travel Adventures",
        brief_content_summary: "Embark on unforgettable adventures to exotic destinations around the globe. From exploring ancient ruins to relaxing on pristine beaches, satisfy your wanderlust with thrilling experiences.",
        tag: "travel",
        estimated_reading_duration: "2 hours",
        blog_image: "travel_adventures_image.jpg"
    }
]
// display the details on the browser.
let trendingContainer = document.getElementById("trendingContainer");

function displayData(data) {
    // trendingContainer.innerHTML = '';
    data.forEach(element => {
        let card = createTrendingCard(element);
        trendingContainer.append(card);
    });
}
displayData(blog_posts);

//create card 
// function createTrendingCard(data) {
//     let blogCard = document.createElement("div");
//     blogCard.className = "trendingCard";

//     let idText = document.createElement("div");
//     idText.className = "idImgText";

//     let id = document.createElement("h1");
//     id.innerText = data.id;
//     id.style.marginLeft = "10px";
//     id.style.color = "lightGray";

//     let imgName = document.createElement("div");
//     imgName.className = "imageName";

//     let imgDiv = document.createElement("div");
//     imgDiv.style.width = "25px";
//     imgDiv.style.height = "25px";
//     imgDiv.style.border = "1px solid";
//     imgDiv.style.borderRadius = "100px";

//     let img = document.createElement("img");
//     img.src = data.user_profile_image;
//     img.style.borderRadius = "100px";
//     img.style.width = "25px";

//     let name = document.createElement("p");
//     name.innerText = data.username;
//     name.style.cursor = "pointer"; // Set cursor style to pointer

//     let title = document.createElement("h3");
//     title.innerText = data.blog_title;
//     let date = document.createElement("p");
//     date.innerText = data.post_creation_datetime;

//     imgDiv.append(img);
//     imgName.append(imgDiv, name);
//     idText.append(imgName, title, date);
//     blogCard.append(id, idText);

//     // Tooltip
//     name.addEventListener("mouseenter", () => {
//         let tooltipCard = document.createElement("div");
//         tooltipCard.className = "tooltip-card";
//         tooltipCard.style.backgroundColor = "white"; // White background
//         tooltipCard.style.position = "absolute";
//         tooltipCard.style.left = `${name.offsetLeft + name.offsetWidth + 10}px`; // Position to the right of the name
//         tooltipCard.style.top = `${name.offsetTop}px`;

//         let userInfo = document.createElement("div");
//         userInfo.className = "user-info";

//         let userName = document.createElement("h3");
//         userName.innerText = data.username;

//         let occupation = document.createElement("p");
//         occupation.innerText = "Software Developer at The Guardian";

//         let followers = document.createElement("span"); // Use span instead of p for inline elements
//         followers.innerText = "72 Followers";
//         followers.style.marginRight = "10px"; // Add margin between followers and button

//         let followButton = document.createElement("button");
//         followButton.innerText = "Follow";

//         userInfo.append(userName, occupation, followers, followButton); // Append followers and button in the same line
//         tooltipCard.appendChild(userInfo);

//         blogCard.appendChild(tooltipCard);
//     });

//     name.addEventListener("mouseleave", () => {
//         let tooltipCard = blogCard.querySelector(".tooltip-card");
//         if (tooltipCard) {
//             tooltipCard.remove();
//         }
//     });

//     return blogCard;
// }
function createTrendingCard(data) {
    let blogCard = document.createElement("div");
    blogCard.className = "trendingCard";

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
    imgDiv.style.border = "1px solid";
    imgDiv.style.borderRadius = "100px";

    let img = document.createElement("img");
    img.src = data.user_profile_image;
    img.style.borderRadius = "100px";
    img.style.width = "25px";

    let name = document.createElement("p");
    name.innerText = data.username;
    name.style.cursor = "pointer"; // Set cursor style to pointer
    name.style.marginLeft = "10px"; // Add margin to separate image and name

    let title = document.createElement("h3");
    title.innerText = data.blog_title;
    let date = document.createElement("p");
    date.innerText = data.post_creation_datetime;

    imgDiv.append(img);
    imgName.append(imgDiv, name);
    idText.append(imgName, title, date);
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
        cardImage.src = data.blog_image;
        cardImage.style.width = "10%"; // Ensure the image fills the container

        let userInfo = document.createElement("div");
        userInfo.className = "user-info";

        let userName = document.createElement("h3");
        userName.innerText = data.username;

        let occupation = document.createElement("p");
        occupation.innerText = "Software Developer at The Guardian";

        let separator = document.createElement("hr"); // Separator line
        separator.style.color = "lightGray"

        let followers = document.createElement("span"); // Use span instead of p for inline elements
        followers.innerText = "72 Followers";
        followers.style.marginRight = "125px"; // Add margin between followers and button

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
