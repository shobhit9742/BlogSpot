const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
  toggleLocalStorage();
  toggleRootClass();
});

function toggleRootClass() {
  const current = document.documentElement.getAttribute("data-bs-theme");
  const inverted = current == "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-bs-theme", inverted);
}

function toggleLocalStorage() {
  if (isLight()) {
    localStorage.removeItem("light");
  } else {
    localStorage.setItem("light", "set");
  }
}

function isLight() {
  return localStorage.getItem("light");
}

if (isLight()) {
  toggleRootClass();
}

//

let userId = document.getElementById("id");
let editedName = document.getElementById("name");
let editedTitle = document.getElementById("title");
let editedTag = document.getElementById("tag");
let editedImageUrl = document.getElementById("imgURL");
let editedDesc = document.getElementById("description");
let updateBtn = document.getElementById("updateBtn");

// data fetching

let container = document.getElementById("contain");
let data =
  "https://tech-tatva-2345-1.onrender.com/blog_posts?_page=1&_limit=10";

async function fetchData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    let totalCount = res.headers.get(`X-Total-Count`);
    let totalPages = Math.ceil(totalCount / 10);
    paginate(totalPages);
    appendData(data);
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
}
fetchData(data);

function createTable(item, index) {
  // Create Element
  let tr = document.createElement("tr");
  let id = document.createElement("td");
  let name = document.createElement("td");
  let tag = document.createElement("td");
  let image = document.createElement("img");
  let title = document.createElement("td");
  let description = document.createElement("td");
  let profile = document.createElement("img");
  let edit = document.createElement("button");
  let del = document.createElement("button");
  let buttonedit = document.createElement("td");
  let buttonDel = document.createElement("td");

  // assigning the data
  id.textContent = item.id;
  name.textContent = item.author_name;
  tag.textContent = item.tag;
  image.src = item.img_src;
  title.textContent = item.title;
  description.textContent = item.description;
  profile.src = item.profile_Img;
  edit.textContent = "Edit";
  del.textContent = "Delete";

  // assigning Classes

  title.setAttribute("class", "title");
  image.setAttribute("class", "image");
  description.setAttribute("class", "descri");
  id.setAttribute("class", "srNo");
  edit.setAttribute("class", "edit");
  edit.setAttribute("data-id", item.id);
  del.setAttribute("class", "delete");
  del.setAttribute("data-id", item.id);
  tag.setAttribute("class", "tagging");
  index;
  tr.setAttribute("id", "tableCard");
  // Edit Button Functionality

  edit.addEventListener("click", (e) => {
    e.preventDefault();
    inputs(item);
  });

  //

  del.addEventListener("click", (e) => {
    e.preventDefault();
    deleteData(item.id);
  });
  function inputs(item) {
    userId.value = item.id;
    editedName.value = item.author_name;
    editedTitle.value = item.title;
    editedTag.value = item.tag;
    editedImageUrl.value = item.img_src;
    editedDesc.value = item.paragraph;
  }

  updateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let id = userId.value;
    let posts = {
      author_name: editedName.value,
      title: editedTitle.value,
      tag: editedTag.value,
      img_src: editedImageUrl.value,
      paragraph: editedDesc.value,
    };
    updateBlog(posts, id);
  });

  //  appending the Elements
  buttonedit.append(edit);
  buttonDel.append(del);
  tr.append(
    id,
    profile,
    name,
    tag,
    title,
    image,
    description,
    buttonedit,
    buttonDel
  );
  return tr;
  //
}
function appendData(data) {
  container.innerHTML = "";
  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      let table = createTable(item, index);
      container.append(table);
    });
  } else {
    console.error("Data is not an array:", data);
  }
}

let queryParam = null;

// Add pagination buttons and event listeners on those buttons */

function paginate(totalPages) {
  let tableBtn = document.getElementById("btnTable");
  tableBtn.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    let pagBtn = document.createElement("button");
    pagBtn.innerText = `${i}`;
    pagBtn.classList.add("btn", "btn-secondary");
    tableBtn.append(pagBtn);

    pagBtn.addEventListener("click", () => {
      fetchData(
        `https://tech-tatva-2345-1.onrender.com/blog_posts?_page=${i}&_limit=10`
      );
    });
  }
}

/* Edit a Post */

async function updateBlog(obj, id) {
  try {
    let response = await fetch(
      `https://tech-tatva-2345-1.onrender.com/blog_posts/${id}?_page=1&_limit=10`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );

    if (response.ok) {
      // Fetch data after successful update
      await fetchData(
        `https://tech-tatva-2345-1.onrender.com/blog_posts?_page=1&_limit=10`,
        queryParam
      );
    } else {
      throw new Error(
        "Failed to edit blog. Server responded with status: " + response.status
      );
    }
  } catch (error) {
    console.error(error);
  }
}

/* Delete an item */

async function deleteData(id) {
  try {
    let response = await fetch(
      `https://tech-tatva-2345-1.onrender.com/blog_posts/${id}`,
      {
        method: "DELETE",
      }
    );

    let data = await response.json();
    // console.log(data);
    fetchData(
      `https://tech-tatva-2345-1.onrender.com/blog_posts?_page=1&_limit=10`,
      queryParam
    );
  } catch (error) {
    console.log(error);
  }
}
