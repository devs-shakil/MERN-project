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
const toggleButton = document.getElementById('toggle-btn');
const hiddenParagraph = document.querySelector('.hidden-paragraph');
let isHidden = true;

toggleButton.addEventListener('click', function() {
  if (isHidden) {
    hiddenParagraph.classList.add('show');
    hiddenParagraph.style.maxHeight = hiddenParagraph.scrollHeight + 'px';
    toggleButton.textContent = 'View Less';
  } else {
    hiddenParagraph.classList.remove('show');
    hiddenParagraph.style.maxHeight = '0';
    toggleButton.textContent = 'See More';
  }
  isHidden = !isHidden;
});
