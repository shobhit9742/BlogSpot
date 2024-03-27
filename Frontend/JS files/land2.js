let posts = document.getElementById("card_container");

let fetchData = async () => {
  try {
    let res = await fetch("../dummy/dummy.json");
    let data = await res.json();
    appendData(data.blog_posts);
  } catch (error) {
    console.log(error);
  }
};

let appendData = (data) => {
  data.forEach((el) => {
    cards(el);
  });
};

let cards = (data) => {
  const {
    id,
    user_profile_image,
    username,
    post_creation_datetime,
    blog_title,
    brief_content_summary,
    tag,
    estimated_reading_duration,
    blog_image,
  } = data;

  // Create card element
  let card = document.createElement("div");
};

window.onload = () => {
  fetchData();
};
