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
let pageNum = 1;
flag = true;
let isLoading = false;
let container = document.querySelector("#container");
let resultContainer = document.querySelector(".card_section");
let loadingContainer = document.querySelector(".loading-container");

let fetchData = async () => {
  try {
    if (isLoading) return;
    isLoading = true;
    loadingContainer.innerHTML = `<div class="d-flex justify-content-center">
                                    <div class="spinner-grow text-secondary" role="status">
                                      <span class="visually-hidden">Loading...</span>
                                    </div>
                                  </div>`;

    let res = await fetch(url);
    let data = await res.json();
    appendData(data);
    flag = true;
    isLoading = false;
    loadingContainer.innerHTML = "";
  } catch (error) {
    isLoading = false;
    console.log(error);
  }
};

let appendData = (data) => {
  data.forEach((el) => {
    // console.log(el);
    let card = createCard(el);
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
  name.style.fontSize = "15.5px";

  let name_title = document.createElement("p");
  name_title.innerText = data.name_title;
  name_title.style.fontSize = "15.5px";

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

  let date_pub = document.createElement("span");
  date_pub.innerText = data.date_pub;
  date_pub.style.color = "Gray";
  date_pub.style.marginRight = "10px";
  date_pub.style.fontSize = "15px";

  let reading_time = document.createElement("span");
  reading_time.innerText = data.reading_time;
  reading_time.style.color = "Gray";
  reading_time.style.marginRight = "10px";
  reading_time.style.fontSize = "15px";

  let tag = document.createElement("span");
  tag.innerText = data.tag;
  tag.style.color = "Gray";
  tag.style.marginRight = "10px";
  tag.style.fontSize = "15px";

  let img_src = document.createElement("img");
  img_src.src = data.img_src;
  img_src.style.width = "220px";
  // img_src.style.height = "150px"

  imgAllText.append(img, name, name_title);
  allText.append(imgAllText, title, description, date_pub, reading_time, tag);
  blogCard.append(allText, img_src);

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
const searchInput = document.getElementById("searchInput");

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
  debounce(fetchdata, 1000);
});

async function fetchdata() {
  console.log(searchInput.value);
}

window.addEventListener("scroll", () => {
  let clientHeight = document.documentElement.clientHeight;
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop + clientHeight >= scrollHeight * 0.5 && flag) {
    console.log("Scrolled 50%");
    pageNum++;
    fetchData(pageNum);
    flag = false;
  }
});
