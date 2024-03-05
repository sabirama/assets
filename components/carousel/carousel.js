const rootStyles = getComputedStyle(document.documentElement);
const carousel = document.querySelectorAll(".carousel");

const padding = 32;

const Carousel = carousel.forEach(carousel => {
    const carouselContent = carousel.querySelectorAll(".carousel-content");
    
    carouselContent.forEach((carouselContent) => {
        const carouselItem = carouselContent.querySelectorAll(".carousel-item");
        const buttonContainer = document.createElement("div");
        carousel.append(buttonContainer);
        buttonContainer.classList.add("button-container");
      
        carouselItem.forEach((item, index) => {
          const button = document.createElement("button");
          buttonContainer.append(button);
            
          if (index === 0) {
            button.classList.add("carousel-active");
          }
          
          button.addEventListener("click", () => {
              carouselContent.scrollLeft =
              parseFloat(rootStyles.getPropertyValue("--carousel-width")) * index + (padding * index);
              document.querySelectorAll(".button-container button").forEach(button => {
                button.classList.remove("carousel-active");
              })
              button.classList.add("carousel-active");
          });
        });
      });
})

export default Carousel;