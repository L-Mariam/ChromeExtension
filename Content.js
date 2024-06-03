let bobRossImages = [
    "https://bit.ly/3Ck6DTU",
    "https://bit.ly/3ozQCVk",
    "https://bit.ly/3omYDN6",
    "https://bit.ly/3osrfoi",
    "https://bit.ly/3qCPjax",
    "https://bit.ly/3CkRXE6",
    "https://bit.ly/3CkRXE6",
    "https://bit.ly/3CkRXE6",
    "https://bit.ly/3CkRXE6",
    "https://bit.ly/3CkRXE6",
  ];
  
  
function changeImages() {
    const imgs = document.getElementsByTagName("img");
    for (let image of imgs) {
        const index = Math.floor(Math.random() * bobRossImages.length);
        image.src = bobRossImages[index];
    }
}

// Initial change of images when the DOM is fully loaded
window.addEventListener('load', changeImages);

// Observe changes in the DOM to catch lazy-loaded or dynamically added images
const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            changeImages();
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });