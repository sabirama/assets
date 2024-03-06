const floatItem = () => {
    const floater = document.querySelectorAll('.float');

floater.forEach(item => {
    var offsetX, offsetY;
    var isDragging = false;
    
    item.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - item.getBoundingClientRect().left;
        offsetY = e.clientY - item.getBoundingClientRect().top;

        item.style.cursor = "default";
        // Set position to fixed to be able to control the element postion around;
        item.style.position = "fixed";
        // Set user-select to none to prevent text selection during dragging
        item.style.userSelect = 'none';
        // Bring the element to the front
        item.style.zIndex = 9999;
    });
    
    document.addEventListener('mousemove', function(e) {
        if(isDragging) {
            // Calculate new position
            var newX = e.clientX - offsetX;
            var newY = e.clientY - offsetY;
    
            // Ensure the element stays within the viewport
            var maxX = window.innerWidth - item.offsetWidth;
            var maxY = window.innerHeight - item.offsetHeight;
            newX = Math.min(Math.max(0, newX), maxX);
            newY = Math.min(Math.max(0, newY), maxY);
    
            // Apply new position
            item.style.left = newX + 'px';
            item.style.top = newY + 'px';
        }
    });
    
    document.addEventListener('mouseup', function() {
        if(isDragging) {
            isDragging = false;
            // Restore user-select and z-index
            item.style.userSelect = 'auto';
            item.style.zIndex = '';
        }
    });
})
}

const Floater = document.addEventListener('DOMContentLoaded', () => {
    floatItem();
});

export default Floater;