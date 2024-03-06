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

    item.addEventListener('touchstart', function(e) {
        isDragging = true;
        var touch = e.touches[0];
        offsetX = touch.clientX - item.getBoundingClientRect().left;
        offsetY = touch.clientY - item.getBoundingClientRect().top;
    
        item.style.cursor = "default";
        // Set position to fixed to be able to control the element position around;
        item.style.position = "fixed";
        // Set user-select to none to prevent text selection during dragging
        item.style.userSelect = 'none';
        // Bring the element to the front
        item.style.zIndex = 9999;
    }, {passive : true}); // Add { passive: true } to make the listener passive

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

    document.addEventListener("touchmove", function (e) {
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
    }, { passive: false }); 

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

const Floater = document.addEventListener("DOMContentLoaded", () => {
  floatItem();
});

export default Floater;
