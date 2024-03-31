// Function to create card for saved data
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
    icon.src = "/Tech-Tatva-2345/Frontend/saved.svg";
    icon.style.cursor = "pointer";


    icon.addEventListener("click", function () {
        let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
        let index = savedData.findIndex(item => item.title === data.title);
        if (index !== -1) {
            savedData.splice(index, 1);
            localStorage.setItem("savedData", JSON.stringify(savedData));
            blogCard.remove();
        }
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
        tooltipCard.appendChild(cardImage);
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

// Function to display saved data on the cart page
function displaySavedData() {
    let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    let containerCart = document.getElementById("containerCart");

    savedData.forEach(data => {
        let card = createCard(data);
        containerCart.appendChild(card);
    });
}

window.addEventListener("load", displaySavedData);