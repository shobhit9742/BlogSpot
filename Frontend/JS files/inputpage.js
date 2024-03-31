// from html 
let page=document.getElementById("page");
page.style.display="flex"
page.style.flexDirection="column"

let uploattext=document.createElement("h1");
uploattext.innerHTML="Upload a Post";
uploattext.style.textAlign="center";
uploattext.style.marginLeft="-80px"


// id
let iddiv=document.createElement("div");
iddiv.style.display="flex";
iddiv.style.gap="20px";
iddiv.style.marginLeft="16%";

let id=document.createElement("p")
id.innerHTML="id";
id.style.fontWeight="bold";


let idinput=document.createElement("input");
idinput.style.width="71%";
idinput.style.height="10%";
idinput.style.marginTop="15px"

iddiv.append(id,idinput);


//profile_Img
let profile_Imgdiv=document.createElement("div");
profile_Imgdiv.style.display="flex";
profile_Imgdiv.style.gap="20px";
profile_Imgdiv.style.marginLeft="11.4%";

let profile_Img=document.createElement("p")
profile_Img.innerHTML="profile_Img";
profile_Img.style.fontWeight="bold";

let profile_Imginput=document.createElement("input");
profile_Imginput.style.width="67%";
profile_Imginput.style.height="10%";
profile_Imginput.style.marginTop="15px"

profile_Imgdiv.append(profile_Img,profile_Imginput);


// author name 
let autodiv=document.createElement("div");
autodiv.style.display="flex";
autodiv.style.gap="20px";
autodiv.style.marginLeft="11%";

let author=document.createElement("p")
author.innerHTML="author_name";
author.style.fontWeight="bold";


let authorinput=document.createElement("input");
authorinput.style.width="67%";
authorinput.style.height="10%";
authorinput.style.marginTop="15px"

autodiv.append(author,authorinput);

// by2 
let by2div=document.createElement("div");
by2div.style.display="flex";
by2div.style.gap="20px";
by2div.style.marginLeft="15.2%";

let by2=document.createElement("p")
by2.innerHTML="by2";
by2.style.fontWeight="bold";


let by2input=document.createElement("input");
by2input.style.width="70%";
by2input.style.height="10%";
by2input.style.marginTop="15px"

by2div.append(by2,by2input);

// name_title
let ntdiv=document.createElement("div");
ntdiv.style.display="flex";
ntdiv.style.gap="20px";
ntdiv.style.marginLeft="12%";

let nt=document.createElement("p")
nt.innerHTML="name_title";
nt.style.fontWeight="bold";


let ntinput=document.createElement("input");
ntinput.style.width="68%";
ntinput.style.height="10%";
ntinput.style.marginTop="15px"

ntdiv.append(nt,ntinput);

// title  
let titlediv=document.createElement("div");
titlediv.style.display="flex";
titlediv.style.gap="20px";
titlediv.style.marginLeft="15%";

let title=document.createElement("p")
title.innerHTML="title";
title.style.fontWeight="bold";


let tinput=document.createElement("input");
tinput.style.width="70%";
tinput.style.height="10%";
tinput.style.marginTop="15px"

titlediv.append(title,tinput);

// Brief 
let briefdiv=document.createElement("div");
briefdiv.style.display="flex";
briefdiv.style.gap="20px";
briefdiv.style.marginLeft="12%";


let brief=document.createElement("p")
brief.innerHTML="description";
brief.style.fontWeight="bold";

let binput=document.createElement("input");
binput.style.width="67%";
binput.style.height="10%";
binput.style.marginTop="15px"

briefdiv.append(brief,binput);

// reading_time 
let reading_timediv=document.createElement("div");
reading_timediv.style.display="flex";
reading_timediv.style.gap="20px";
reading_timediv.style.marginLeft="11%";


let reading_time=document.createElement("p")
reading_time.innerHTML="reading_time";
reading_time.style.fontWeight="bold";

let reading_timeinput=document.createElement("input");
reading_timeinput.style.width="67%";
reading_timeinput.style.height="10%";
reading_timeinput.style.marginTop="15px"

reading_timediv.append(reading_time,reading_timeinput);

//by8
let by8div=document.createElement("div");
by8div.style.display="flex";
by8div.style.gap="20px";
by8div.style.marginLeft="15.2%";

let by8=document.createElement("p")
by8.innerHTML="by8";
by8.style.fontWeight="bold";


let by8input=document.createElement("input");
by8input.style.width="70%";
by8input.style.height="10%";
by8input.style.marginTop="15px"

by8div.append(by8,by8input);
// Banner image URL 

let urldiv=document.createElement("div");
urldiv.style.display="flex";
urldiv.style.gap="20px";
urldiv.style.marginLeft="13%";

let url=document.createElement("p")
url.innerHTML="img_src";
url.style.fontWeight="bold";

let urlinput=document.createElement("input");
urlinput.style.width="69%";
urlinput.style.height="10%";
urlinput.style.marginTop="15px"

urldiv.append(url,urlinput);

// Category 

let categorydiv=document.createElement("div");
categorydiv.style.display="flex";
categorydiv.style.gap="20px";
categorydiv.style.marginLeft="16%";

let category=document.createElement("p")
category.innerHTML="tag";
category.style.fontWeight="bold";


let catinput=document.createElement("input");
catinput.style.width="69%";
catinput.style.height="10%";
catinput.style.marginTop="15px"

categorydiv.append(category,catinput);

// date_pub
let readdiv=document.createElement("div");
readdiv.style.display="flex";
readdiv.style.gap="20px";
readdiv.style.marginLeft="13.1%";

let time=document.createElement("p");
time.innerHTML="date_pub";
time.style.fontWeight="bold";

let timeinput=document.createElement("input");
timeinput.style.width="69.3%";
timeinput.style.height="10%";
timeinput.style.marginTop="15px"

readdiv.append(time,timeinput);


// paragraph 
let articaldiv=document.createElement("div");
articaldiv.style.display="flex";
articaldiv.style.gap="20px";
articaldiv.style.marginLeft="12%";

let artical=document.createElement("p")
artical.innerHTML="paragraph";
artical.style.fontWeight="bold";

let artinput=document.createElement("textarea");
artinput.style.width = "68.2%"; 
artinput.style.height = "35vh"; 
artinput.style.marginTop = "15px";

articaldiv.append(artical,artinput);


let sbtn=document.createElement("button");
sbtn.innerText="Submit";
sbtn.style.width="100px";
sbtn.style.height="40px";
sbtn.style.border="none";
sbtn.style.backgroundColor="black";
sbtn.style.color="white";
sbtn.style.borderRadius="25px";
sbtn.style.marginLeft="43%";
sbtn.style.marginTop="10px"
sbtn.style.cursor="pointer";

page.append(uploattext,iddiv,profile_Imgdiv,autodiv, by2div,ntdiv, titlediv ,briefdiv,readdiv,reading_timediv,by8div,categorydiv,urldiv,articaldiv,sbtn);




function sendDataToBackend() {
    // Fetch input values
    const idValue = idinput.value;
    const profileImgValue = profile_Imginput.value;
    const authorNameValue = authorinput.value;
    const by2Value = by2input.value;
    const nameTitleValue = ntinput.value;
    const titleValue = tinput.value;
    const briefValue = binput.value;
    const readingTimeValue = reading_timeinput.value;
    const by8Value = by8input.value;
    const urlValue = urlinput.value;
    const categoryValue = catinput.value;
    const timeValue = timeinput.value;
    const articleValue = artinput.value;

    // Data object to send to backend
    const postData = {
        id: idValue,
        profile_Img: profileImgValue,
        author_name: authorNameValue,
        by2: by2Value,
        name_title: nameTitleValue,
        title: titleValue,
        description: briefValue,
        date_pub: timeValue,
        reading_time: readingTimeValue,
        by8: by8Value,
        tag: categoryValue,
        bannerImageURL: urlValue,
        paragraph: articleValue
    };

    // Send data to backend
    fetch('https://tech-tatva-2345-1.onrender.com/blog_posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => {
        if (response.ok) {
            alert('Post uploaded successfully');
            console.log('Post uploaded successfully');
        } else {
            throw new Error('Error uploading post');
        }
    })
    .catch(error => {
        alert('Error uploading post:', error.message);
        console.error('Error uploading post:', error);
    });
}


sbtn.addEventListener('click', sendDataToBackend);













// Function to send data to the backend
// function sendDataToBackend() {
//     // Fetch input values
//     const titleValue = tinput.value;
//     const briefValue = binput.value;
//     const urlValue = urlinput.value;
//     const categoryValue = catinput.value;
//     const timeValue = timeinput.value;
//     const articleValue = artinput.value;

//     // Data object to send to backend
//     const postData = {
//         title: titleValue,
//         brief: briefValue,
//         bannerImageURL: urlValue,
//         category: categoryValue,
//         estimatedReadLength: timeValue,
//         articleText: articleValue
//     };

//     // Send data to backend
//     fetch('https://tech-tatva-2345-1.onrender.com/blog_posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(postData)
//     })
//     .then(response => {
//         if (response.ok) {
//             alert('Post uploaded successfully');
//             console.log('Post uploaded successfully');
//         } else {
//             console.error('Error uploading post');
//         }
//     })
//     .catch(error => {
//         alert('Error uploading post:', error);
//         console.error('Error uploading post:', error);
//     });
// }

// // Attach event listener to the submit button
