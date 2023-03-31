// loading_screen.js

document.addEventListener('DOMContentLoaded', () => {
    // Create a loading screen element
    const loadingScreen = document.createElement('div');
    loadingScreen.setAttribute('id', 'loading-screen');
    loadingScreen.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      opacity: 1;
    `;
  
    loadingScreen.innerHTML = '<p>Loading...</p>';
  
    // Add the loading screen to the body
    document.body.appendChild(loadingScreen);
  
    // Loading screen animation function
    function init() {
      setTimeout(() => {
        gsap.timeline()
          .to('#loading-screen', { duration: 0.5, opacity: 0, onComplete: () => {
            document.querySelector('#loading-screen').style.display = 'none';
          } })
          .from('.project', { duration: 1, y: 30, opacity: 0, stagger: 0.2 }, '-=0.25');
      }, 1000);
    }
  
    // Call the init function when the content is loaded
    window.onload = init;
  });
  