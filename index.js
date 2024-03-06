import Carousel from "./components/carousel/carousel.js";
import DateTime from "./components/date/date.js";
import Camera from "./components/camera/camera.js";

Carousel;
DateTime;

document.getElementById('cam-start').addEventListener("click", ()=> {
    const camContainer = document.getElementById('cam-container');
    camContainer.innerHTML = ` 
        <video id="video" width="640" height="480" autoplay></video>
        <button id="capture-btn">Capture</button>
        <canvas id="img-canvas"></canvas>
    `
    Camera();
});