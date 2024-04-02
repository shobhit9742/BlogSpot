// SignIn Form Details
let signInEmail = document.getElementById("user_email");
let signInPass = document.getElementById("user_pwd");
let signInSubmit = document.getElementById("submit_btn");

signInSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(signInEmail.value);
  console.log(signInPass.value);
});

// SignUp Form Details
let signUpFName = document.getElementById("fName");
let signUpLName = document.getElementById("lName");
let signUpEmail = document.getElementById("signUp_email");
let signUpPass = document.getElementById("signUp_pwd");
let signUpSubmit = document.getElementById("signUp_submit_btn");

signUpSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(signUpFName.value);
  console.log(signUpLName.value);
  console.log(signUpEmail.value);
  console.log(signUpPass.value);
});

// Fetch and populate articles
let url = "https://tech-tatva-2345-1.onrender.com/blog_posts";
let page = 1;
let flag = true;
let isLoading = false;
let isFetching = false;
let container = document.querySelector("#container");
let resultContainer = document.querySelector(".card_section");
let loadingContainer = document.querySelector(".loading-container");
const searchInput = document.getElementById("searchInput");

let fetchData = async () => {
  console.log(searchInput.value);
  try {
    if (isLoading) return;
    isLoading = true;
    isFetching = true;
    loadingContainer.innerHTML = `<div class="d-flex justify-content-center align-items-center">
                                    <div class="spinner-grow text-secondary" role="status">
                                      <span class="visually-hidden">Loading...</span>
                                    </div>
                                  </div>`;

    let res = await fetch(
      `https://tech-tatva-2345-1.onrender.com/blog_posts?_page=${page}&&q=${searchInput.value}`
    );
    let data = await res.json();
    console.log(data);
    isFetching = false;
    isLoading = false;
    loadingContainer.innerHTML = "";
    appendData(data);
    if (data.length === 0) {
      flag = false;
      return;
    }
    page++;
    flag = true;
  } catch (error) {
    isLoading = false;
    console.log(error);
  }
};

let appendData = (data) => {
  data.forEach((el) => {
    let card = createCard(el);
    const { id } = el;
    card.addEventListener("click", () => openModal(id));
    resultContainer.append(card);
  });
};

function createCard(data) {
  let blogCard = document.createElement("div");
  blogCard.className = "card";

  let allText = document.createElement("div");
  allText.className = "ProImgText";
  let imgAllText = document.createElement("div");
  imgAllText.className = "imageAllText";

  let img = document.createElement("img");
  img.src = data.profile_Img;
  img.style.width = "30px";
  img.style.height = "30px";
  img.style.marginRight = "10px";
  img.style.borderRadius = "6px";

  let name = document.createElement("p");
  name.innerText = data.author_name;
  name.style.fontFamily = "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
  name.style.fontSize = "15px";
  let by = document.createElement("p");
  by.innerText = data.by2;

  let name_title = document.createElement("p");
  name_title.innerText = data.name_title;
  name_title.style.fontSize = "15px";

  let title = document.createElement("h3");
  title.innerText = data.title;
  title.style.marginTop = "-2px";
  title.style.fontFamily =
    "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
  title.style.fontSize = "18px";

  let description = document.createElement("p");
  description.innerText = data.description;
  description.style.marginTop = "-10px";
  description.style.color = "Gray";
  description.style.fontSize = "15.5px";

  let dateLogoBox = document.createElement("div");
  dateLogoBox.className = "dateTimelogo";

  let dateBox = document.createElement("div");
  dateBox.className = "dataTimeTag";
  let date_pub = document.createElement("span");
  date_pub.innerText = data.date_pub;
  date_pub.style.color = "Gray";
  date_pub.style.marginRight = "10px";
  date_pub.style.fontSize = "14px";

  let reading_time = document.createElement("span");
  reading_time.innerText = data.reading_time;
  reading_time.style.color = "Gray";
  reading_time.style.marginRight = "10px";
  reading_time.style.fontSize = "14px";

  let by_8 = document.createElement("span");
  by_8.innerText = data.by8;

  let tag = document.createElement("button");
  tag.innerText = data.tag;
  tag.style.color = "Gray";
  tag.style.marginRight = "10px";
  tag.style.marginLeft = "5px";
  tag.style.fontSize = "14px";
  tag.style.paddingLeft = "10px";
  tag.style.paddingRight = "10px";
  tag.style.height = "27px";
  tag.style.border = "none";
  tag.style.borderRadius = "20px";
  tag.style.backgroundColor = "ligthGray";

  let logoBox = document.createElement("div");
  logoBox.className = "logoIcon";
  let icon = document.createElement("img");
  icon.src = "/Tech-Tatva-2345/image/bookmark.svg";
  icon.style.cursor = "pointer";

  icon.addEventListener("click", function () {
    let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    savedData.push(data);
    localStorage.setItem("savedData", JSON.stringify(savedData));

    icon.src = "/Tech-Tatva-2345/image/saved.svg";
    icon.style.width = "28px";
    icon.style.height = "28px";
    icon.removeEventListener("click", this);
  });

  let img_src = document.createElement("img");
  img_src.src = data.img_src;
  img_src.style.width = "220px";
  img_src.style.marginLeft = "15px";
  let imgDiv = document.createElement("div");
  imgDiv.append(img_src);

  dateBox.append(date_pub, reading_time, by_8, tag);
  logoBox.append(icon);
  dateLogoBox.append(dateBox, logoBox);
  imgAllText.append(img, name, by, name_title);
  allText.append(imgAllText, title, description, dateLogoBox);
  blogCard.append(allText, imgDiv);

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
    cardImage.style.borderRadius = "5px";
    let userInfo = document.createElement("div");
    userInfo.className = "user-info";

    let userName = document.createElement("h3");
    userName.innerText = data.author_name;
    userName.style.fontFamily =
      "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";

    let occupation = document.createElement("p");
    occupation.innerText = data.description;
    occupation.style.fontFamily =
      "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    occupation.style.fontSize = "15px";

    let separator = document.createElement("hr");
    separator.style.color = "lightGray";

    let followers = document.createElement("span");
    followers.innerText = "72 Followers";
    followers.style.marginRight = "125px";
    followers.style.fontFamily =
      "sohne, Helvetica Neue, Helvetica, Arial, sans-serif";
    followers.style.fontSize = "15px";
    let followButton = document.createElement("button");
    followButton.innerText = "Follow";
    followButton.style.color = "white";
    followButton.style.border = "none";
    followButton.style.borderRadius = "5px";
    followButton.style.height = "30px";
    followButton.style.width = "75px";
    followButton.style.fontWeight = "600";
    followButton.style.backgroundColor = "green";

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

fetchData();

// Parsing the JWT
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function handleLogin(response) {
  signIn(parseJwt(response));
  console.log(response.credential);
}

//Debouncing for search input

let id;
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(() => {
    func();
  }, delay);
}

searchInput.addEventListener("input", (e) => {
  debounce(fetchData, 1000);
});

window.addEventListener("scroll", () => {
  if (isFetching || !flag) {
    return;
  }
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    fetchData();
  }
});

//////////// Modal JS //////////////

const modal = document.querySelector(".modalSelf");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const model_content = document.getElementById("model_content");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  model_content.innerText = "";
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    model_content.innerText = "";
  }
});

// open modal function
const openModal = function (id) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  fetchSingleData(id);
};

const fetchSingleData = async (id) => {
  const res = await fetch(
    `https://tech-tatva-2345-1.onrender.com/blog_posts/${id}`
  );
  let data = await res.json();
  console.log(data);
  const {
    paragraph,
    author_name,
    date_pub,
    img_src,
    profile_Img,
    reading_time,
    title,
    tag,
    description,
  } = data;
  // article - tag
  let articleTag = document.getElementById("tag");
  articleTag.innerText = tag.toUpperCase();

  //article - image
  let articleImg = document.getElementById("articleImg");
  articleImg.src = img_src;

  // article - title
  let articleTitle = document.getElementById("title");
  articleTitle.innerText = title;

  // article-description
  let articleDesc = document.getElementById("description");
  articleDesc.innerText = description;

  // article - desc
  let profileImg = document.getElementById("profile_Img");
  profileImg.src = profile_Img;

  let authorName = document.getElementById("author");
  authorName.innerText = author_name;

  let readTime = document.getElementById("read_time");
  readTime.innerText = reading_time;

  //article - date
  let pubDate = document.getElementById("date");
  pubDate.innerHTML = `<strong>Published on : </strong> ${date_pub}`;

  // paragraph
  model_content.innerText = paragraph;
};
