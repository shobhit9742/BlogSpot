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
let isLoading = false;
let container = document.querySelector("#container");
let resultContainer = document.querySelector(".card_section");
let loadingContainer = document.querySelector(".loading-container");

let fetchData = async () => {
  try {
    if (isLoading) return;
    isLoading = true;
    loadingContainer.innerHTML = `<div class="spinner-border" role="status">
                                      <span class="visually-hidden">Loading...</span>
                                  </div>`;

    let res = await fetch(url);
    let data = await res.json();
    appendData(data);
    isLoading = false;
    loadingContainer.innerHTML = "";
  } catch (error) {
    isLoading = false;
    console.log(error);
  }
};

let appendData = (data) => {
  data.forEach((el) => {
    console.log(el);
    const { name_title, author_name, profile_Img } = el;
    card(name_title, author_name, profile_Img);
  });
};

let card = (name_title, author_name, profile_Img) => {
  let card = document.createElement("div");
  let title = document.createElement("h1");
  let author = document.createElement("p");
  let profile_img = document.createElement("img");

  title.textContent = name_title;
  author.textContent = author_name;
  profile_img.src = profile_Img;

  card.append(title, author, profile_img);
  resultContainer.append(card);
};

container.onscroll = () => {
  if (isLoading) return;

  if (
    Math.ceil(container.clientHeight + container.scrollTop) >=
    container.scrollHeight
  ) {
    pageNum++;
    fetchData();
  }
};

fetchData();
