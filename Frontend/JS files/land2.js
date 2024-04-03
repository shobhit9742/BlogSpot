// Fetch and populate articles
let url = "https://tech-tatva-2345-1.onrender.com/blog_posts";
let page = 1;
let flag = true;
let isLoading = false;
let isFetching = false;
let container = document.querySelector("#container");
let loadingContainer = document.querySelector(".loading-container");
const searchInput = document.getElementById("searchInput");
const modal = document.querySelector(".modalSelf");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const model_content = document.getElementById("model_content");

let fetchData = async () => {
  try {
    console.log("fetchData");
    if (isLoading) return;
    isLoading = true;
    isFetching = true;
    loadingContainer.innerHTML = `<div class="d-flex justify-content-center align-items-center">
                                    <div class="spinner-grow text-secondary" role="status">
                                      <span class="visually-hidden">Loading...</span>
                                    </div>
                                  </div>`;

    let res = await fetch(`${url}?_page=${page}`);
    let data = await res.json();
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

let fetchDataOnInput = async () => {
  try {
    console.log("fetchDataOnInput");

    if (isLoading) return;
    isLoading = true;
    isFetching = true;
    loadingContainer.innerHTML = `<div class="d-flex justify-content-center align-items-center">
                                    <div class="spinner-grow text-secondary" role="status">
                                      <span class="visually-hidden">Loading...</span>
                                    </div>
                                  </div>`;

    let res = await fetch(
      `${url}?q=${searchInput.value ? searchInput.value : ""}`
    );
    let data = await res.json();
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
  let resultContainer = document.querySelector(".card_section");
  resultContainer.innerHTML = "";
  console.log(data);
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
  img.src =
    data.profile_Img == ""
      ? "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1711880702~exp=1711881302~hmac=55bf17deceea9dac34197c009d68b5d3b845efc75619582df72d67b6ba31b280"
      : data.profile_Img;
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
  icon.src = "../../image/bookmark.svg";
  icon.style.cursor = "pointer";

  icon.addEventListener("click", function () {
    let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    savedData.push(data);
    localStorage.setItem("savedData", JSON.stringify(savedData));

    icon.src = "../../image/saved.svg";
    icon.style.width = "28px";
    icon.style.height = "28px";
    icon.removeEventListener("click", this);
  });

  let img_src = document.createElement("img");
  img_src.src =
    data.img_src == ""
      ? "https://images.unsplash.com/photo-1529909746513-b540c1680fdb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      : data.img_src;
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

// fetchData();
window.onload = () => {
  fetchData();
};

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

searchInput.addEventListener("input", () => {
  debounce(searchInput.value ? fetchDataOnInput : fetchData, 1000);
});

/////////////// Infinite Scroll ////////////////

window.addEventListener("scroll", () => {
  if (isFetching || !flag) {
    return;
  }
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    fetchData();
  }
});

//////////// Modal JS //////////////

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
  try {
    const res = await fetch(
      `https://tech-tatva-2345-1.onrender.com/blog_posts/${id}`
    );
    let data = await res.json();
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
    profileImg.src =
      profile_Img == ""
        ? "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=50&t=st=1711880702~exp=1711881302~hmac=55bf17deceea9dac34197c009d68b5d3b845efc75619582df72d67b6ba31b280"
        : profile_Img;

    let authorName = document.getElementById("author");
    authorName.innerText = author_name;

    let readTime = document.getElementById("read_time");
    readTime.innerText = reading_time;

    //article - date
    let pubDate = document.getElementById("date");
    pubDate.innerHTML = `<strong>Published on : </strong> ${date_pub}`;

    // paragraph
    model_content.innerText = paragraph
      ? paragraph
      : "Do you know one of those annoying people? They decline the dessert not because they’re on a diet, but because sweet stuff doesn’t do anything for them. Oh really! you say, Good for you! when what you really think is Fuck off. Well, I’m that person, but with alcohol. I’m here to tell you, it’s as good for me, as it is hard for me. So, in case your dry January is going well and you think of extending it, read on.  Over a year ago, someone shared with me this informative, factual, yet thoroughly bleak podcast by Andrew Huberman about the effects of any amount of alcohol on your brain and body. \n\n Since I had just reached the wise age of thirty, otherwise known as the age when you have less fucks to give, I asked myself why I drank at all and what would happen if I stopped. And then I stopped. You know how it goes from there. I felt great, I saved money, ‘I often regretted drinking but I never regretted not drinking’ and so on. It’s all true. However, before that, since the first glass of wine that my parents gave me at 12, for the good 18 years of my life, I did regularly drink. Why? Because that’s what people do. So, let’s start by saying that when you stop drinking, people don’t know what to do with you. \n\n The first day I started sports betting, I was checking my phone and the ESPN app on my phone non-stop. I did not become a monster or a gambling addict, but I won’t deny that I stopped doing as much housework, paid less attention to my wife and my friends, and just got too consumed in the thrill of seeing whether bets would or would not hit all too often. I would be checking stats and watching sports games of games I had bets on, only to see that 10 to 15 minutes of time had passed. \n\n It wouldn’t be the time I spent checking on sports games that was the problem as much as the constant interruption and task switching. I understand that this is just normal human behavior, and your average American might spend much more time watching football on a Sunday. But it was what this checking would do to my mood and mental state that made me realize sports gambling was making me a worse person. When my bets were doing well and I was making $70 to $150 per day, I was somewhat happy, but then I was thinking of the next day and how I should tinker my strategy for the next day. When my bets were losing, however, the despair I felt was always significantly worse than the happiness I gained from winning. The problem wasn’t that there weren’t highs, but the lows were much lower than the highs. I am not advocating for the sudden re-criminalization of sports gambling, because I would be a hypocrite. As much as it makes me a worse person, I love it. I profit off of it. \n\n I’m a human being as much as anyone else is. And I am not even venturing into whether the integrity of sports itself is at risk now that sports gambling has become so accepted and embraced by sports leagues like the NBA or NFL themselves. I think this societal acceptance and embrace have been long desired, as people have wanted to bet on sports games. But it is happening so quickly that we have to consider whether this embrace has gone too far.";
  } catch (error) {
    console.log(error);
  }
};
