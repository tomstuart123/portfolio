// TO DO
// 3. Make hover portfolio and progress bars in mobile
// 4. Animate portfolio / skills section
// 5. Add Resume page
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
    $('.portfolio__list').on('click', '.portfolio__item--inactive', function (event) {
        // toggle the titles first
        $('.portfolio__item').toggleClass('portfolio__item--inactive');
        $('.portfolio__item').toggleClass('portfolio__item--active');
        // toggle the height to accommodate the changing portfolio
        $('.portfolio').toggleClass('portfolio--active');
        // then toggle the portfolio itself 
        $('.portfolio__galleryItem').toggleClass('visuallyHidden');
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