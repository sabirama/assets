// Camera
const startCam = () => {
  const camContainer = document.getElementById("cam-container");
  const video = document.getElementById("video");
  const captureButton = document.getElementById("capture-btn");
  const canvas = document.getElementById("img-canvas");
  const canvasContext = canvas.getContext("2d");

  // Access the camera and stream the video to the video element
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
      video.play(); // Make sure to play the video
    })
    .catch(function (error) {
      console.error("Error accessing the camera: ", error);
    });

  // Function to capture picture
  function capturePicture() {
    const dlActive = document.getElementById("img-dl-btn");
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    // Draw current frame of video onto canvas
    canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
    // Convert canvas to data URL and create image element
    const dataURL = canvas.toDataURL("image/png");

    if (dlActive) {
      dlActive.addEventListener("click", () => {
        // Create a link element
        const link = document.createElement("a");
        // Set the href attribute to the data URL
        link.href = dataURL;
        // Set the download attribute to specify the filename
        link.download = "captured-image.png";
        // Append the link to the document
        camContainer.appendChild(link);
        // Programmatically click the link to trigger download
        link.click();
      });
    } else {
      const dlBtn = document.createElement("button");
      dlBtn.id = "img-dl-btn";
      dlBtn.textContent = "download";
      camContainer.appendChild(dlBtn);

      dlBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "captured-image.png";
        camContainer.appendChild(link);
        link.click();
      });
    }
  }

  // Add click event listener to capture button
  captureButton.addEventListener("click", capturePicture);
};

export const Camera = document
  ?.getElementById("cam-start")
  ?.addEventListener("click", () => {
    const camContainer = document.getElementById("cam-container");
    camContainer.innerHTML = ` 
        <video id="video" width="640" height="480" autoplay></video>
        <button id="capture-btn">Capture</button>
        <canvas id="img-canvas"></canvas>
    `;
    startCam();
  });

// Carosuel
const rootStyles = getComputedStyle(document.documentElement);
const carousel = document.querySelectorAll(".carousel");

const padding = 32;

export const Carousel = carousel.forEach((carousel) => {
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
          parseFloat(rootStyles.getPropertyValue("--carousel-width")) * index +
          padding * index;
        document
          .querySelectorAll(".button-container button")
          .forEach((button) => {
            button.classList.remove("carousel-active");
          });
        button.classList.add("carousel-active");
      });
    });
  });
});

// Date

export const DateTime = setInterval(() => {
  const newDate = new Date();

  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();
  const newDay = newDate.getDay();

  const fullDate = document.querySelectorAll(".date");
  const years = document.querySelectorAll(".date.year");
  const months = document.querySelectorAll(".date.month");
  const monthsName = document.querySelectorAll(".date.month-name");
  const days = document.querySelectorAll(".date.day");
  const daysName = document.querySelectorAll(".date.day-name");

  const hour = newDate.getHours();
  const minute = newDate.getMinutes();
  const second = newDate.getSeconds();

  const fullTime = document.querySelectorAll(".time");
  const fullTime12 = document.querySelectorAll(".time-12");
  const hours = document.querySelectorAll(".time.hour");
  const hours12format = document.querySelectorAll(".time.hour-12");
  const minutes = document.querySelectorAll(".time.minute");
  const seconds = document.querySelectorAll(".time.second");
  const meridian = document.querySelectorAll(".time.meridian");

  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVERMBER",
    "DECEMBER",
  ];

  const dayNames = [
    "SUNDAY",
    "MONDAY",
    "TEUSDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  fullDate.forEach((element) => {
    const trueMonth = month + 1;
    element.innerHTML = `${year}-${
      trueMonth < 10 ? "0" + trueMonth : trueMonth
    }-${day < 10 ? "0" + day : day}`;
  });

  fullTime.forEach((element) => {
    element.innerHTML = `${hour < 10 ? "0" + hour : hour}-${
      minute < 10 ? "0" + minute : minute
    }-${second < 10 ? "0" + second : second}`;
  });

  fullTime12.forEach((element) => {
    const trueHour = hour > 12 ? hour - 12 : hour;
    element.innerHTML = `${trueHour < 10 ? "0" + trueHour : trueHour}-${
      minute < 10 ? "0" + minute : minute
    }-${second < 10 ? "0" + second : second} ${hour > 12 ? "PM" : "AM"}`;
  });

  years.forEach((element) => {
    element.innerHTML = year;
  });

  months.forEach((element) => {
    element.innerHTML = month + 1 < 10 ? "0" + month : month;
  });

  monthsName.forEach((element) => {
    element.innerHTML = monthNames[month];
  });

  days.forEach((element) => {
    element.innerHTML = day < 10 ? "0" + day : day;
  });

  daysName.forEach((element) => {
    element.innerHTML = dayNames[newDay];
  });

  hours.forEach((element) => {
    element.innerHTML = hour < 10 ? "0" + hour : hour;
  });

  hours12format.forEach((element) => {
    const hour12 = hour > 12 ? hour - 12 : hour;
    element.innerHTML = hour12 < 10 ? "0" + hour12 : hour12;
  });

  minutes.forEach((element) => {
    element.innerHTML = minute;
  });

  seconds.forEach((element) => {
    element.innerHTML = second;
  });

  meridian.forEach((element) => {
    element.innerHTML = hour > 12 ? "PM" : "AM";
  });
}, 1000);

//DropDown
const dropdown = document.querySelectorAll(".dropdown");

export const MultiDropDown = dropdown.forEach((component) => {
  const dropItem = component.querySelectorAll(".dropdown-item");

  dropItem.forEach((item) => {
    const header = item.querySelector(".dropdown-header");
    const body = item.querySelector(".dropdown-body");
    let open = false;

    header.style.cursor = "pointer";

    item.addEventListener("click", () => {
      if (open === true) {
        body.style.maxHeight = "0px";
        body.style.padding = "0rem 1rem";
        open = false;
      } else {
        body.style.maxHeight = `${body.scrollHeight + 100}px`;
        body.style.padding = "1rem";
        open = true;
      }
      console.log();
    });
  });
});

//Float Element

const floatItem = () => {
  const floater = document.querySelectorAll(".float");

  floater.forEach((item) => {
    var offsetX, offsetY;
    var isDragging = false;

    item.addEventListener("mousedown", function (e) {
      isDragging = true;
      offsetX = e.clientX - item.getBoundingClientRect().left;
      offsetY = e.clientY - item.getBoundingClientRect().top;

      item.style.cursor = "default";
      // Set position to fixed to be able to control the element postion around;
      item.style.position = "fixed";
      // Set user-select to none to prevent text selection during dragging
      item.style.userSelect = "none";
      // Bring the element to the front
      item.style.zIndex = 9999;
    });

    item.addEventListener(
      "touchstart",
      function (e) {
        isDragging = true;
        var touch = e.touches[0];
        offsetX = touch.clientX - item.getBoundingClientRect().left;
        offsetY = touch.clientY - item.getBoundingClientRect().top;

        item.style.cursor = "default";
        // Set position to fixed to be able to control the element position around;
        item.style.position = "fixed";
        // Set user-select to none to prevent text selection during dragging
        item.style.userSelect = "none";
        // Bring the element to the front
        item.style.zIndex = 9999;
      },
      { passive: true }
    ); // Add { passive: true } to make the listener passive

    document.addEventListener("mousemove", function (e) {
      if (isDragging) {
        // Calculate new position
        var newX = e.clientX - offsetX;
        var newY = e.clientY - offsetY;

        // Ensure the element stays within the viewport
        var maxX = window.innerWidth - item.offsetWidth;
        var maxY = window.innerHeight - item.offsetHeight;
        newX = Math.min(Math.max(0, newX), maxX);
        newY = Math.min(Math.max(0, newY), maxY);

        // Apply new position
        item.style.left = newX + "px";
        item.style.top = newY + "px";
      }
    });

    document.addEventListener(
      "touchmove",
      function (e) {
        if (isDragging) {
          // Prevent default touch behavior (scrolling, zooming)
          e.preventDefault();

          // Get the first touch (assuming single touch)
          var touch = e.touches[0];

          // Calculate new position
          var newX = touch.clientX - offsetX;
          var newY = touch.clientY - offsetY;

          // Ensure the element stays within the viewport
          var maxX = window.innerWidth - item.offsetWidth;
          var maxY = window.innerHeight - item.offsetHeight;
          newX = Math.min(Math.max(0, newX), maxX);
          newY = Math.min(Math.max(0, newY), maxY);

          // Apply new position
          item.style.left = newX + "px";
          item.style.top = newY + "px";
        }
      },
      { passive: false }
    );

    document.addEventListener("mouseup", function () {
      if (isDragging) {
        isDragging = false;
        // Restore user-select and z-index
        item.style.userSelect = "auto";
        item.style.zIndex = "";
      }
    });

    document.addEventListener("touchend", function () {
      if (isDragging) {
        isDragging = false;
        // Restore user-select and z-index
        item.style.userSelect = "auto";
        item.style.zIndex = "";
      }
    });
  });
};

export const Floater = document.addEventListener("DOMContentLoaded", () => {
  floatItem();
});


// Run the necessary scripts
export default {
  Carousel,
  MultiDropDown,
  DateTime,
  Camera,
  Floater, 
}