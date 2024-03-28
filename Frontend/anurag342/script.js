// Header
const header = document.getElementById('header');
header.innerHTML = `
    <img src="logo.png" alt="Logo">
    <div class="banner-nav">
        <div>Our Story</div>
        <div>Membership</div>
        <div>Sign In</div>
        <div class="accented-button">Get Started</div>
    </div>
`;

// Banner
const banner = document.getElementById('banner');
banner.innerHTML = `
    <div class="banner-content">
        <h1>Stay Curious.</h1>
        <h3>Discover stories, thinking, and expertise from writers on any topic.</h3>
        <div class="accented-button">Start Reading</div>
    </div>
    <img src="banner.png" alt="Banner" style="width: 400px;">
`;

// Main
const main = document.getElementById('main');
for (let i = 0; i < 100; i++) {
    main.innerHTML += `
        <div class="post-card">
            <img src="thumbnail-${i + 1}.png" alt="Thumbnail">
            <div class="post-card-details">
                <h1>7 Free Tools That Will Make You More Productive In 2022</h1>
                <p>Productivity is a skill that can be learned.</p>
                <p>June 15 - 5 min read - <span class="category">productivity</span></p>
            </div>
        </div>
    `;
}

// Footer
const footer = document.getElementById('footer');
footer.innerHTML = `
    <p>&copy; 2024 My Website. All rights reserved.</p>
`;
