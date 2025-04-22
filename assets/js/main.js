/*==================== MENU SHOW Y HIDDEN ====================*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// document.addEventListener('DOMContentLoaded', function () {
//     const radioLink = document.getElementById('radio-link');
//     const radioIcon = radioLink.querySelector('i.uil'); // Select the icon inside the link
//     let audioElement = null;

//     radioLink.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent default link behavior

//         if (!audioElement) {
//             // Create and play the audio stream
//             audioElement = document.createElement('audio');
//             audioElement.src = 'http://73.169.200.205:8443/';
//             audioElement.type = 'audio/mpeg';
//             audioElement.autoplay = true;
//             audioElement.id = 'radio-audio';
//             document.body.appendChild(audioElement);

//             // Change the icon to "pause"
//             radioIcon.classList.remove('uil-play');
//             radioIcon.classList.add('uil-pause');
//         } else {
//             // Stop the audio stream and remove the element
//             audioElement.pause();
//             audioElement.remove();
//             audioElement = null;

//             // Change the icon back to "play"
//             radioIcon.classList.remove('uil-pause');
//             radioIcon.classList.add('uil-play');
//         }
//     });
// });

/*==================== RADIO PLAYER ====================*/
// This code creates a radio player that plays a stream when the user clicks on a link with the ID "radio-link".
// The player is created dynamically and includes controls for play/pause. The icon of the link changes based on the state of the player.
// The player is removed when the stream is stopped.
document.addEventListener('DOMContentLoaded', function () {
    const radioLink = document.getElementById('radio-link');
    const radioIcon = radioLink.querySelector('i.uil'); // Select the icon inside the link
    let audioElement = null;

    radioLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        if (!audioElement) {
            // Create and play the audio stream
            audioElement = document.createElement('audio');
            audioElement.src = 'http://73.169.200.205:8443/';
            audioElement.type = 'audio/mpeg';
            audioElement.autoplay = true;
            audioElement.id = 'radio-audio';
            document.body.appendChild(audioElement);

            // Change the icon to "pause"
            radioIcon.classList.remove('uil-play');
            radioIcon.classList.add('uil-pause');
        } else {
            // Stop the audio stream and remove the element
            audioElement.pause();
            audioElement.remove();
            audioElement = null;

            // Change the icon back to "play"
            radioIcon.classList.remove('uil-pause');
            radioIcon.classList.add('uil-play');
        }
    });
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
// This code updates the text content of an element with the class "footer__nav__R i" to show the scroll percentage as the user scrolls down the page.
// It calculates the scroll percentage based on the current scroll position and the total scrollable height of the document.
// The percentage is displayed in the format "X%", where X is the calculated scroll percentage.
document.addEventListener('DOMContentLoaded', function () {
    const scrollIndicator = document.querySelector('.footer__nav__R i'); // Select the element with "100%"

    window.addEventListener('scroll', function () {
        // Calculate the scroll percentage
        const scrollTop = window.scrollY; // Current vertical scroll position
        const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        // Update the text content with the scroll percentage
        scrollIndicator.textContent = `${scrollPercent}%`;
    });
});

/*==================== SCROLL REVEAL ANIMATION ====================*/

// Mode switcher functionality
// This code listens for a click event on an element with the ID "mode-switch" and fetches the contents of "radio.html" when clicked.
// document.addEventListener('DOMContentLoaded', function () {
//     const modeSwitch = document.getElementById('mode-switch');
//     const mainElement = document.querySelector('main');

//     modeSwitch.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent default link behavior

//         // Fetch the contents of radio.html
//         fetch('radio.html')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to load radio.html');
//                 }
//                 return response.text();
//             })
//             .then(data => {
//                 // Replace the contents of the <main> element
//                 mainElement.innerHTML = data;
//             })
//             .catch(error => {
//                 console.error('Error loading radio.html:', error);
//             });
//     });
// });

// This code listens for the DOMContentLoaded event and checks if the current URL contains "radio".
// If it does, it loads the contents of "radio.html" into the <main> element. It also sets up a click event listener on the mode switch link to toggle between the main page and radio mode.
document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.getElementById('mode-switch');
    const mainElement = document.querySelector('main');

    // Function to load content dynamically
    function loadContent(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load content');
                }
                return response.text();
            })
            .then(data => {
                mainElement.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    // Check the URL on page load
    if (window.location.pathname.includes('radio')) {
        loadContent('radio.html');
    }

    // Event listener for mode-switch
    modeSwitch.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        if (window.location.pathname.includes('radio')) {
            // Switch back to the main page
            history.pushState({}, '', '/');
            location.reload(); // Reload to reset to the main content
        } else {
            // Switch to radio mode
            history.pushState({}, '', '/radio');
            loadContent('radio.html');
        }
    });
});