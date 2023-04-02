let checkLogin=localStorage.getItem("login")
if(checkLogin!=null)
{
    let data=JSON.parse(localStorage.getItem("users"))
    let login=document.querySelector(".loginregister a")
    for(let i=0;i<data.length;i++){
        if(data[i].number==checkLogin)
        {
            login.innerText=data[i].username
            login.removeAttribute("class","load")
            let ul=document.createElement("ul")
            let logout=document.createElement("li")
            logout.innerText="Sign Out";
            ul.append(logout)
            login.append(ul)
            let j=0;
            login.addEventListener("click",()=>{
                if(j%2==0)
                logout.style.display="inline-block"
                else
                logout.style.display="none"
                logout.addEventListener("click",()=>{
                    localStorage.removeItem("login");
                    location.reload()
                })
                j++;
            })

            break;
        }
    }
}
// else{
//     document.querySelector(".load").addEventListener("click",()=>{
//         location="./LogInAndUp.html"
//     })
//     document.querySelector("#cart").addEventListener("click",()=>{
//         alert("Login First")
//         location="./LogInAndUp.html"
//     })
//     document.querySelector("#favorite").addEventListener("click",()=>{
//         alert("Login First")
//         location="./LogInAndUp.html"
//     })

// }
