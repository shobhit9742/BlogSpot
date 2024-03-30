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

// data fetching

let container = document.getElementById("contain");
let data = "https://tech-tatva-2345-1.onrender.com/blog_posts";

async function fetchData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    appendData(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
fetchData(data);

// "id": "1",
//     "profile_Img": "https://miro.medium.com/v2/resize:fill:40:40/1*KCdWeLHgIFfw5gv7fX97Eg.jpeg",
//     "author_name": "Ryan Fan",
//     "by2": "in",
//     "name_title": "Invisible Illness",
//     "title": "The Embrace of Sports Gambling Has Gone Too Far",
//     "description": "Why young men, like myself, are particularly susceptible to sports gambling addiction",
//     "date_pub": "Mar 13, 2024",
//     "reading_time": "7 min read",
//     "by8": "·",
//     "tag": "Gambling",
//     "img_src": "https://miro.medium.com/v2/da:true/resize:fill:250:168/0*axOYB0WNLkM2gS0q",
//     "paragraph": "I have been a profitable sports bettor. Across Fanduel, DraftKings, and ESPN Bets, among other sportsbooks I use, my overall profit is hundreds of dollars across all sportsbooks. At first, I just bet for fun and followed my hunches and instincts. But recently, I have followed a tactic called EV betting, a betting tactic where you only go for bets with positive expected value and a return on investment, backed by mathematical models of probability gaps with sportsbooks.\\n\\n Ever since I got into EV betting, I’m making enough on sports betting for it to be a third income stream. I do not win every day. Within my budget, there have been days I lost $50. There are a lot of good days, but there are also a lot of bad days. But there was also a day I won over $300, and on the average day, I win more than I lose. My overall winnings have been greater than my overall losses, so I had to get over the short-term thinking. I have a plan and budget, and I stick to it., The problem with sports betting isn’t that I’m hemorrhaging money I can’t afford to lose. It’s that I become a worse person.\\n\\n If I were just putting down the bets, closing my sportsbook apps, and then checking when I go to bed or wake up the next morning, that would be one thing. But that’s not how I bet. The first day I started sports betting, I was checking my phone and the ESPN app on my phone non-stop.\\n\\n I did not become a monster or a gambling addict, but I won’t deny that I stopped doing as much housework, paid less attention to my wife and my friends, and just got too consumed in the thrill of seeing whether bets would or would not hit all too often. I would be checking stats and watching sports games of games I had bets on, only to see that 10 to 15 minutes of time had passed. It wouldn’t be the time I spent checking on sports games that was the problem as much as the constant interruption and task switching. \\n\\n I understand that this is just normal human behavior, and your average American might spend much more time watching football on a Sunday. But it was what this checking would do to my mood and mental state that made me realize sports gambling was making me a worse person. When my bets were doing well and I was making $70 to $150 per day, I was somewhat happy, but then I was thinking of the next day and how I should tinker my strategy for the next day. When my bets were losing, however, the despair I felt was always significantly worse than the happiness I gained from winning.\\n\\n The problem wasn’t that there weren’t highs, but the lows were much lower than the highs. I am not advocating for the sudden re-criminalization of sports gambling, because I would be a hypocrite. As much as it makes me a worse person, I love it. I profit off of it. I’m a human being as much as anyone else is. And I am not even venturing into whether the integrity of sports itself is at risk now that sports gambling has become so accepted and embraced by sports leagues like the NBA or NFL themselves. I think this societal acceptance and embrace have been long desired, as people have wanted to bet on sports games. But it is happening so quickly that we have to consider whether this embrace has gone too far."
//   },

function createTable(item) {
  // Create Element
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("img");
  let profile = document.createElement("img");
  let name = document.createElement("p");
  let tag = document.createElement("p");
  let title = document.createElement("p");

  td1.innerText = item.id;
  name.innerText = item.author_name;
  tag.innerText = item.tag + " -- ";
  title.innerText = item.title;
  td4.src = item.img_src;
  profile.src = item.profile_Img;
  td2.append(profile, name);

  td3.append(tag, title);

  tr.append(td1, td2, td3, td4);
  return tr;
  //
}

function appendData(data) {
  container.innerHTML = "";
  data.forEach((item) => {
    let table = createTable(item);
    container.append(table);
  });
}
