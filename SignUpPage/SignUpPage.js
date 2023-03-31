
    let formInp = document.querySelector("form");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let signup = JSON.parse(localStorage.getItem("sign-upData")) || [];
  
    formInp.addEventListener("submit",(e)=> {
      e.preventDefault();
      let userData = {
        name : name.value,
        email : email.value,
        password : password.value
      }
      signup.push(userData);
      localStorage.setItem("sign-upData",JSON.stringify(signup));
      location.href = "SignInPage.html"
    })
 