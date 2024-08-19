const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
// const follow=document.querySelector(".btn");


const openmodal=()=>{
    console.log("modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};
const closemodal=()=>{
    console.log("modal is close");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
    
   
};

const button = document.getElementById("toggleButton");
function toggleText() {
    const button = document.getElementById("toggleButton");
    if (button.innerHTML === "Follow") {
        button.innerHTML = "Following";
    } else {
        button.innerHTML = "Follow";
    }
}

