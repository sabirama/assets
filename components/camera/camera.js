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


const Camera = document?.getElementById('cam-start')?.addEventListener("click", ()=> {
  const camContainer = document.getElementById('cam-container');
  camContainer.innerHTML = ` 
      <video id="video" width="640" height="480" autoplay></video>
      <button id="capture-btn">Capture</button>
      <canvas id="img-canvas"></canvas>
  `
  startCam();
});

export default Camera;
