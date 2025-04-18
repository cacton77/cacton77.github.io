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

document.addEventListener('DOMContentLoaded', function () {
    const radioLink = document.getElementById('radio-link');
    const radioIcon = radioLink.querySelector('i.uil'); // Select the icon inside the link
    let audioElement = null;
    let audioControlsContainer = null;

    radioLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        if (!audioElement) {
            // Create and play the audio stream
            audioElement = document.createElement('audio');
            audioElement.src = 'http://73.169.200.205:8443/';
            audioElement.type = 'audio/mpeg';
            audioElement.autoplay = true;
            audioElement.controls = true; // Add controls to the audio element
            audioElement.style.width = '100%';

            // Create a container for the audio controls
            audioControlsContainer = document.createElement('div');
            audioControlsContainer.id = 'audio-controls-container';
            audioControlsContainer.style.position = 'fixed';
            audioControlsContainer.style.bottom = '20px';
            audioControlsContainer.style.left = '50%';
            audioControlsContainer.style.transform = 'translateX(-50%)';
            audioControlsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            audioControlsContainer.style.padding = '10px';
            audioControlsContainer.style.borderRadius = '10px';
            audioControlsContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            audioControlsContainer.style.zIndex = '1000';

            // Append the audio element to the container
            audioControlsContainer.appendChild(audioElement);

            // Append the container to the body
            document.body.appendChild(audioControlsContainer);

            // Change the icon to "pause"
            radioIcon.classList.remove('uil-play');
            radioIcon.classList.add('uil-pause');
        } else {
            // Stop the audio stream and remove the element
            audioElement.pause();
            audioElement.remove();
            audioElement = null;

            // Remove the audio controls container
            if (audioControlsContainer) {
                audioControlsContainer.remove();
                audioControlsContainer = null;
            }

            // Change the icon back to "play"
            radioIcon.classList.remove('uil-pause');
            radioIcon.classList.add('uil-play');
        }
    });
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
