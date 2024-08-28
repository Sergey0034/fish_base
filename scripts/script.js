$('.main-slick').slick({
    dots: true,
    infinite: true,
    fade: true,
    arrows: false,
    autoplay: true,
    speed: 600,
    focusOnSelect: false,
    cssEase: 'linear',
    lazyLoad: 'ondemand',
    autoplaySpeed: 1500,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                arrows: false,
            }
        }
    ]
});

$('.reviews-carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 660,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});

const scrollToElementList = [
    {
        clickTo: 'linkToAbout',
        scrollInto: 'about'
    },
    {
        clickTo: 'linkToServices',
        scrollInto: 'services'
    },
    {
        clickTo: 'linkToHousing',
        scrollInto: 'cards'
    },
    {
        clickTo: 'linkToGallery',
        scrollInto: 'gallery'
    },
    {
        clickTo: 'linkToReviews',
        scrollInto: 'reviews'
    },
    {
        clickTo: 'linkToContacts',
        scrollInto: 'footer'
    },

];


document.querySelectorAll('.menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})

scrollToElementList.forEach(el => {
    document.getElementById(el.clickTo).onclick = function () {
        document.getElementById(el.scrollInto).scrollIntoView( {behavior: "smooth"});
    }
});

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}