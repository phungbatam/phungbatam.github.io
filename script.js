$(document).ready(function() {

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("#header").addClass("active-header");
            $(".menu-link").addClass("active-menu-links");
            $("#header-img").attr("src", "https://assets.website-files.com/6023c1ab453b66ef8af02699/6023f1fd35e4792c41d0c84a_logo.svg");
        } else {
            $("#header").removeClass("active-header");
            $(".menu-link").removeClass("active-menu-links");
            $("#header-img").attr("src", "https://assets.website-files.com/6023c1ab453b66ef8af02699/6023f1fd35e4792c41d0c84a_logo.svg");
        }
    });

    // Responsive menu
    $("#responsive-nav-bar").hide();

    $("#image-button-black").click(function() {
        $("#responsive-nav-bar").slideToggle();
    });

    $("#responsive-home-item , #responsive-features-item , #responsive-products-item , #responsive-media-item , #responsive-pricing-item").click(function() {
        $("#responsive-nav-bar").slideToggle(200);
    })

    $('.product-content').hide();
    $('#product-container-one').show();

    var firstButton = $('#first-product-button');
    var secondButton = $('#second-product-button');
    var thirdButton = $('#third-product-button');
    var fourthButton = $('#fourth-product-button');
    var buttons = $('.product-button');



    // Product variables
    var firstProduct = $('#product-container-one');
    var secondProduct = $('#product-container-two');
    var thirdProduct = $('#product-container-three');
    var fourthProduct = $('#product-container-four');


    // Visibility variables
    var firstVisible = firstProduct.is(':visible');
    var secondVisible = secondProduct.is(':visible');
    var thirdVisible = thirdProduct.is(':visible');
    var fourthVisible = fourthProduct.is(':visible');


    // Visible and Hidden Sections .click function
    $(firstButton).click(function() {
        $('.product-content').hide();
        $(firstProduct).fadeIn(600);
        buttons.removeClass('product-button-active');
        firstButton.addClass('product-button-active');
    });

    $(secondButton).click(function() {
        $('.product-content').hide();
        $(secondProduct).fadeIn(600);
        $(secondProduct).css('visibility', 'visible');
        buttons.removeClass('product-button-active');
        secondButton.addClass('product-button-active');
    });

    $(thirdButton).click(function() {
        $('.product-content').hide();
        $(thirdProduct).fadeIn(600);
        buttons.removeClass('product-button-active');
        thirdButton.addClass('product-button-active');
    });

    $(fourthButton).click(function() {
        $('.product-content').hide();
        $(fourthProduct).fadeIn(600);
        buttons.removeClass('product-button-active');
        fourthButton.addClass('product-button-active');
    });



    // First Button Styling hidden/visible
    if (firstVisible === true) {
        firstButton.addClass('product-button-active');
    }

});

var button = document.getElementById("submit");
button.onclick = function() {
    var a = document.getElementById("email").value;

    if (a === "") {
        alert("Chào mừng bạn đến với khóa học");
    } else {
        alert("Vui lòng nhập gmail");
    }
}

const searchContainer = document.querySelector('.search-container'),
    searchInput = searchContainer.querySelector('input'), // đường dẫn
    closeBtn = searchContainer.querySelector('.closeBtn'), //Giúp hiển thị search
    resultBlock = searchContainer.querySelector('.search-results');

/**
 * Close / Open the morphing search
 */
searchInput.addEventListener('focus', function() {
    searchContainer.classList.add('morphing');
    closeBtn.setAttribute('aria-hidden', 'false');
});

closeBtn.addEventListener('click', function(e) {
    e.preventDefault();

    searchContainer.classList.remove('morphing');
    searchContainer.classList.remove('showresults');
    closeBtn.setAttribute('aria-hidden', 'true');
    resultBlock.setAttribute('aria-hidden', 'true');
    searchInput.value = "";

    return false;
});

searchInput.addEventListener('keyup', function() {
    searchContainer.classList.add('showresults');
    resultBlock.setAttribute('aria-hidden', 'false');
});
/*
*
*
*
Phần ngăn cách code (go liveserver)
*/
window.fbAsyncInit = function() {
    FB.init({
        appId: '198300206973255',
        status: true,
        cookie: true,
        xfbml: true
    });
    FB.Event.subscribe('auth.authResponseChange', function(response) {
        if (response.status === 'connected') {
            testAPI();
        } else if (response.status === 'not_authorized') {

            FB.login();
        } else {
            FB.login();
        }
    });
};

// Load the SDK asynchronously
(function(d) {
    var js, id = 'facebook-jssdk',
        ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Good to see you, ' + response.name + '.');
    });
}

function hack() {
    alert("Đây là một khóa học tại website F8!");
    alert("Chúc các bạn học vui vẻ!");
}

function ouvrirPage() {

    var a = document.getElementById("search").value;
    if (a === "Báo mới") {
        window.open("https://baomoi.com");
    }

    if (a === "home") {
        self.location = "index.html";
    }

    if (a === "youtube") {
        window.open("https://www.youtube.com/");
    } else if (a === "Youtube") {
        window.open("https://youtube.com/");
    }
    if (a === "Khóa học IT") {
        window.open("https://fullstack.edu.vn");
    } else if (a === "khóa học it") {
        window.open("https://fullstack.edu.vn");
    }
    if (a === "Wikipedia") {
        self.location = "https://phungbatam.github.io/wikipedia-tim-kiem-khoa-hoc-thu-vien-lap-trinh/";
    } else if (a === "wikipedia") {
        self.location = "https://phungbatam.github.io/wikipedia-tim-kiem-khoa-hoc-thu-vien-lap-trinh/";
    }
    return true;
}

function Super() {
    var a = document.getElementById("search").value;
    if (a === "") {
        alert("Vui lòng nhập từ khóa");
    } else {
        alert("từ khóa này không có hoặc đã được sử dụng! ");
    }
    return true;
}