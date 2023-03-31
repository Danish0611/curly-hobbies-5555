let data = JSON.parse(localStorage.getItem("sign-upData")) || [];
let heading = document.getElementById("heading");
let submitbtn = document.querySelector("form");
let email = document.getElementById("email")
let password = document.getElementById("password")


submitbtn.addEventListener("submit",(e) => {
  e.preventDefault();
  data.forEach(element => {
    if(email.value === ""  && password.value  === "")
    {
        heading.textContent = "Please enter details"
    }
   else if(element.email === email.value && element.password === password.value)
    {
      location.href = "index.html"
    }
    else
    {
      // alert("Please enter valid details")

      heading.innerText = "Please enter valid details"
      
    }
  });
})