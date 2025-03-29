let buttons =  document.getElementById("dark");
const body = document.body;

if(localStorage.getItem("darkmode")=="enabled"){
    body.classList.add("dark-mode");
}

buttons.addEventListener("click",()=>{
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){
        localStorage.setItem("darkmode",enabled);
    } else {
        localStorage.setItem("darkmode","disabled");
    }
})

const placeholder = ["Search rice","Search shampoo","Search soap", "Search toothpaste","Search earphones"];
let index= 0;
function changeplaceholder(){
    document.getElementById("searchBox").placeholder = placeholder[index];
    index = (index + 1)% placeholder.length;
}

setInterval(changeplaceholder,2000);