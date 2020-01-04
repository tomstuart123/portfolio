// SHORT TO DO
    // fix progress bars in moz
    // make click here

// LONG TO DO
// 1. Add interests section - VR, Blockchain, EdTech etc & Link to blog
// 2. In portfolio - add title / links to page permanently
// 4. Animate portfolio / skills section
// 5. Add Resume button & page
// 6. Add about me page


const portfolioApp = {};

portfolioApp.pageLoad = function () {
    console.log('pageLoaded')
}

portfolioApp.events = function () {
    // in skills section, toggle the developer skillset for the product skill set on click
    $('.skills__sliderHeaders').on('click', '.skills__subHeader', function (event) {
        // toggle the titles first
        $('.skills__subHeaderOne').toggleClass('skills__subHeader--active');
        $('.skills__subHeaderOne').toggleClass('skills__subHeader');
        // then toggle the skills themselves and progress bars
        $('.skills__sliderContainer').toggleClass('visuallyHidden');
        $('.skills__imageContainer').toggleClass('visuallyHidden');
    })

    // in portfolio section, toggle the developer portfolio for the product one on click
    $('.portfolio__list').on('click', '.portfolio__item', function (event) {
        // toggle the titles first
        console.log(this)
        $('.portfolio__item').removeClass('portfolio__item--active');
        $(this).addClass('portfolio__item--active');
    })

    
    $('.portfolio__list').on('click', '.portfolio__item--frontend', function (event) {
        // toggle the height to accommodate the changing portfolio
        $('.portfolio').removeClass('portfolio--active');
        $('.portfolio').removeClass('portfolio--active2');
        // then toggle the portfolio itself 
        $('.portfolio__gallery--frontend').removeClass('visuallyHidden');
        $('.portfolio__gallery--product').addClass('visuallyHidden');
        $('.portfolio__gallery--backend').addClass('visuallyHidden');

    })

    $('.portfolio__list').on('click', '.portfolio__item--product', function (event) {
        // toggle the height to accommodate the changing portfolio
        $('.portfolio').addClass('portfolio--active');
        $('.portfolio').removeClass('portfolio--active2');
        // then toggle the portfolio itself 
        $('.portfolio__gallery--product').removeClass('visuallyHidden');
        $('.portfolio__gallery--frontend').addClass('visuallyHidden');
        $('.portfolio__gallery--backend').addClass('visuallyHidden');

    })

    $('.portfolio__list').on('click', '.portfolio__item--backend', function (event) {
        // toggle the height to accommodate the changing portfolio
        $('.portfolio').removeClass('portfolio--active');
        $('.portfolio').addClass('portfolio--active2');
        // then toggle the portfolio section itself 
        $('.portfolio__gallery--product').addClass('visuallyHidden');
        $('.portfolio__gallery--frontend').addClass('visuallyHidden');
        $('.portfolio__gallery--backend').removeClass('visuallyHidden');

    })


    // scroll to contact page
    $('.landing__button').on('click', function (event) {
        window.scrollBy(0, 5000);
    })

}


portfolioApp.init = function () {
    portfolioApp.events();
    portfolioApp.pageLoad();
}

// run init in jquery
$(function () {
    portfolioApp.init();
});