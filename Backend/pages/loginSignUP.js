let loginButton = document.getElementById("login-button");
let logoutBtn = document.getElementById("profile");


// logoutBtn.addEventListener("click",handleLogout);




loginButton.addEventListener("click",()=>{
    handleLogin();
});


/* Allow user to login */


// async function handleLogin(){
//     try {
//         let email = document.getElementById("Username").value;
//         let password = document.getElementById("Password").value;


//         let obj = {"email" : `${email}` , "password" : `${password}`};

//         console.log(obj);
//         let response = await fetch(`https://tech-tatva-2345-1.onrender.com/users`,{
//             method : "POST",
//             headers : {
//                 "Content-type" : "application/json",
//             },
//             body : JSON.stringify(obj)
//         });


//         let data = await response.json();
//         localStorage.setItem(`currUser`,JSON.stringify(data.user));

//         console.log(data);
//         if(data.users){
//             window.location.href = "./admin.html";
//             console.log("Hi there");
//         }
//         else{
//             window.location.href = "./posts.html"
//         }


//     } catch (error) {
//         let modal = document.getElementById("exampleModal");
//         modal.classList.toggle("fade");
//     }
// }


/* Allow User to login */

async function handleLogin() {
    try {
      let email = document.getElementById("Username").value;
      let password = document.getElementById("Password").value;
  
      let obj = { email, password };
  
      console.log(obj);
      let response = await fetch(`https://tech-tatva-2345-1.onrender.com/admin`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      });
  
      let data = await response.json();
    //   localStorage.setItem(`currUser`, JSON.stringify(data.user));
  
      console.log(data.user);
      if (data.user) {
        window.location.href = "./admin.html";
        console.log("Hi there");
      } else {
        window.location.href = "./posts.html";
      }
    } catch (error) {
      let modal = document.getElementById("exampleModal");
      modal.classList.toggle("fade");
    }
  }


/* Allow User to logout */


function handleLogout(){
    localStorage.removeItem(`currUser`);
    window.location.href = "./home.html";
}
