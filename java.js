// const loading = document.querySelector(".loading");
const navbarNav = document.querySelector(".skil");
const cpp = document.querySelector(".cpp");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const java = document.querySelector(".java");
const keyFrames = document.createElement("style");

document.querySelector("#skillbar").onclick = () => {
  navbarNav.classList.toggle("active");

  keyFrames.innerHTML = `

  // *{
  //    background-color: black;
  //    color:white;
     
  // }

   @keyframes cpp{
      0%{
        width: 0%;
      }
      100%{
        width: 50%;
      }
    }

  @keyframes html{
    0%{
      width: 0%;
    }
    100%{
      width: 30%;
    }
  }

  @keyframes css{
    0%{
      width: 0%;
    }
    100%{
      width: 20%;
    }
  }

  @keyframes java{
    0%{
      width: 0%;
    }
    100%{
      width: 2%;
    }
  }
  `;
};

cpp.appendChild(keyFrames);
html.appendChild(keyFrames);
css.appendChild(keyFrames);
java.appendChild(keyFrames);

const skill = document.querySelector("#skillbar");
document.addEventListener("click", function (e) {
  if (!skill.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

ScrollReveal({
  // duration: 2000,
  delay: 200,
});

ScrollReveal({ distance: "0px", duration: 1000 }).reveal(
  ".name,.main-img,.main-btn"
);
ScrollReveal({ distance: "80px", duration: 1000 }).reveal(".home .h1", {
  origin: "left",
});
ScrollReveal({ distance: "80px", duration: 1000 }).reveal(".h11", {
  origin: "right",
});

ScrollReveal({ distance: "0px", duration: 2000 }).reveal(".konten1", {
  interval: 0,
});

ScrollReveal({ distance: "0px", duration: 1000 }).reveal(".konten2", {
  interval: 0,
});

ScrollReveal({ distance: "0px", duration: 1000 }).reveal(".konten3", {
  interval: 0,
});

ScrollReveal({ distance: "0px", duration: 2000 }).reveal(".konten4", {
  interval: 0,
});

ScrollReveal({ distance: "50px", duration: 1000 }).reveal(".headd", {
  origin: "top",
});
ScrollReveal({ distance: "50px", duration: 1000 }).reveal(".skil-btn", {
  origin: "bottom",
});

ScrollReveal({ distance: "50px", duration: 1000 }).reveal(".allside", {
  origin: "left",
});

// ScrollReveal({ distance: "50px", duration: 1000 }).reveal(".about", { origin:"left"});
// ScrollReveal({ distance: "0px" }).reveal( ".konten2,.konten1,.konten3,.konten4", { interval: 300 });
