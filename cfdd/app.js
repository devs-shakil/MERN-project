$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});



// show paragraph
const desktopParagraph = document.querySelector('.desktop-paragraph');
const mobileParagraph = document.querySelector('.mobile-paragraph');
const showMoreButton = document.getElementById('showMoreButton');

function toggleParagraphs() {
  desktopParagraph.style.display = 'block';
  mobileParagraph.style.display = 'none';
  showMoreButton.style.display = 'block';
}

function showFullParagraph() {
  mobileParagraph.style.display = 'block';
  showMoreButton.style.display = 'none';
  desktopParagraph.style.display = 'block';
}

showMoreButton.addEventListener('click', showFullParagraph);

// Initial check for responsive mode
function checkResponsiveMode() {
if (window.innerWidth <= 768) {
toggleParagraphs();
} else {
desktopParagraph.style.display = 'block'; // Display desktop paragraph for wider screens
mobileParagraph.style.display = 'none';
showMoreButton.style.display = 'none'; // Hide the "Show More" button
}
}


window.addEventListener('resize', checkResponsiveMode);
checkResponsiveMode(); // Check on initial page load