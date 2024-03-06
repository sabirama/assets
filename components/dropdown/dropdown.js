const dropdown = document.querySelectorAll(".dropdown");

const MultiDropDown = dropdown.forEach((component) => {
  const dropItem = component.querySelectorAll(".dropdown-item");

  dropItem.forEach((item) => {
    const header = item.querySelector(".dropdown-header");
    const body = item.querySelector(".dropdown-body");
    let open = false;

    header.style.cursor = "pointer";

    item.addEventListener("click", () => {
      if (open === true) {
        body.style.maxHeight = "0px";
        body.style.padding = "0rem 1rem"
        open = false;
      } else {
        body.style.maxHeight = `${body.scrollHeight + 100}px`;
        body.style.padding ="1rem";
        open = true;
      }
      console.log()
    });
  });
});

export default MultiDropDown;
