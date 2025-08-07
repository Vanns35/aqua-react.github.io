/*!
=========================================================
* AquaReach Common JS
=========================================================

* Copyright: 2024 AquaReach (https://AquaReach.github.io)
* Licensed: (https://AquaReach.github.io/licenses)
* Coded by AquaReach.github.io

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

const aceButton = document.querySelector('.ace-card-btn');

aceButton.addEventListener('click', function (event) {
    event.preventDefault()
    const linkUrl = this.href; // Get the link URL from the button's href attribute
    window.open(linkUrl, '_blank'); // Open the link in a new tab with '_blank' target
});

const pcaButton = document.querySelector('.pca-card-btn');

pcaButton.addEventListener('click', function (event) {
    event.preventDefault()
    const linkUrl = this.href; // Get the link URL from the button's href attribute
    window.open(linkUrl, '_blank'); // Open the link in a new tab with '_blank' target
});

const azureButton = document.querySelector('.azure-card-btn');

azureButton.addEventListener('click', function (event) {
    event.preventDefault()
    const linkUrl = this.href; // Get the link URL from the button's href attribute
    window.open(linkUrl, '_blank'); // Open the link in a new tab with '_blank' target
});

const certificateButton = document.querySelector('.certificate-card-btn');

certificateButton.addEventListener('click', function (event) {
    event.preventDefault()
    const linkUrl = this.href; // Get the link URL from the button's href attribute
    window.open(linkUrl, '_blank'); // Open the link in a new tab with '_blank' target
});

const award1Btn = document.querySelector('.award1-card-btn');
const achievementPopup = document.querySelector('.achievement-popup');

award1Btn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior (optional)
    achievementPopup.classList.toggle('show'); // Toggle visibility class
});
