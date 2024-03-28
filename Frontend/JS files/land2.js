let posts = document.getElementById("card_container");

let appendData = (data) => {
  data.forEach((el) => {
    cards(el);
  });
};

let cards = (data) => {
  const {
    author,
    dates,
    blog_title,
    blog_links,
    description,
    tags,
    referal,
    readability_time,
    blog_img,
  } = data;

  // Create card element
  let card = document.createElement("div");
  card.className = "card";

  let img = document.createElement("img");
  img.src = blog_img;

  let p = document.createElement("p");
  p.textContent = author;

  let h3 = document.createElement("h3");
  h3.textContent = blog_title;

  let desc = document.createElement("p");
  desc.textContent = description;

  let ref = document.createElement("p");
  ref.textContent = tags;

  card.append(img, p, h3, desc, ref);
  posts.append(card);
};

window.onload = () => {
  fetchData();
};

async function loadData(numImages = 10) {
  let i = 0;
  while (i < numImages) {
    try {
      let res = await fetch("../dummy/dummy.json");
      let data = await res.json();
      console.log(data);
      appendData(data.data);
    } catch (error) {
      console.log(error);
    }
    i++;
  }
}

loadData();

window.addEventListener("scroll", () => {
  console.log("scrolled", window.scrollY);
  console.log(window.innerHeight);
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadData();
  }
});
