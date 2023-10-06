const planetsData = [
  { 
      name: "Mercury", 
      info: "Mercury is the smallest planet in our solar system.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Venus", 
      info: "Venus is the hottest planet in our solar system due to its thick atmosphere.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Earth", 
      info: "Earth is the only planet known to support life.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Mars", 
      info: "Mars is often called the 'Red Planet'.",
      image: "mars-removebg-preview.png"
  },
  { 
      name: "Jupiter", 
      info: "Jupiter is the largest planet in our solar system.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Saturn", 
      info: "Saturn is known for its beautiful ring system.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Uranus", 
      info: "Uranus is tilted on its side, rotating almost perpendicular to the plane of its orbit.",
      image: "https://via.placeholder.com/150"
  },
  { 
      name: "Neptune", 
      info: "Neptune is the farthest planet from the Sun in our solar system.",
      image: "https://via.placeholder.com/150"
  }
];

function initializeDropdown(optionMenu) {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const options = optionMenu.querySelectorAll(".option");
  const sBtn_text = optionMenu.querySelector(".sBtn-text");
  const planetCards = document.querySelectorAll(".planet-card");

  selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");

    planetCards.forEach(card => {
      card.style.marginTop = optionMenu.classList.contains("active") ? "360px" : "20px";
    });
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      console.log(`Chosen planet: ${selectedOption}`); 
      let scrollHeight = 0; 
      planetCards.forEach(card => {
        console.log(card.getAttribute("data-value"))
        if (card.getAttribute("data-value") !== selectedOption) {
          scrollHeight+=450;
        }
        else
        {
          window.scrollTo({ top: scrollHeight, behavior: "smooth" });

        }
      });
      optionMenu.classList.remove("active");
      planetCards.forEach(card => {
        card.style.marginTop = "20px";
      });
    });
  });
}
const allOptionMenus = document.querySelectorAll(".select-menu");
allOptionMenus.forEach(optionMenu => {
  initializeDropdown(optionMenu);
});


