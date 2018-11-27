<<<<<<< HEAD
$(function () {

    const $window = $(window);
    var windowWidth = $window.width();
    var windowHeight = $window.height();
    var Y;
    var ePosition;
    const $menu = $('#menu');


    $window.resize(function () {
        windowWidth = $window.width();
        windowHeight = $window.height();

    });
    
    //------ scroll to --------------------------------
    
    const $navi = $('.navi');
    
    $navi.click(function(e){
        
        let _href = $(this).attr("href");
        
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $(_href).offset().top
        } ,800, "easeInOutCubic");
        
    });
    

    //------ scroll functions -------------------------
    
    $window.scroll(function () {
        Y = pageYOffset;

        $('.anime').each(function () {
            const $this = $(this);
            ePosition = $this.offset();
            let windowPosition = Y + windowHeight * 0.9;

            if (windowPosition > ePosition.top) {
                $this.removeClass('hideAnimation');
                $this.addClass('showAnimation');
            } else {
                $this.removeClass('showAnimation');
                $this.addClass('hideAnimation');
            }
        });


        if (windowWidth<=768) {
            $menu.addClass('miniNav');
        } else {
            $menu.removeClass('miniNav');
        }

        if (Y>80 && windowWidth>768) {
            $menu.addClass('active');
        } else {
            $menu.removeClass('active');
        }

    });

    //----- miniNavMenu ------------------------------------------------

    const $miniNav = $('#miniNavIcon');

    $miniNav.click(function(){
        if($menu.hasClass("open")){
            $menu.removeClass("open");
            $menu.addClass("closed");
        }
        else{
            $menu.removeClass("closed");
            $menu.addClass("open");
        }
    });

    //----- FAQ ------------------------------------------------

    const $question = $('.question');

    $($question).each(function () {
        $(this).find('.answer').hide();
    });

    $($question).click(function () {
        const $this = $(this);
        const $answer = $this.find('.answer');

        if ($answer.css("display") == "none") {
            $answer.slideDown(200, 'linear');
            $this.find('h4').addClass('open');
            $this.find('.minus').addClass('open');
            $this.find('.plus').addClass('open');
        } else {
            $answer.slideUp(200, 'linear');
            $this.find('h4').removeClass('open');
            $this.find('.minus').removeClass('open');
            $this.find('.plus').removeClass('open');
        }
    });


   //-------------------------------------------------------------        
    //------ Gallery ----------------------------------------------

    let imageAdres = []; // Array with images URLs
    let imageNumber = 0; // number of showing image

    let imageURL = ''; //  image URL

    let imageHeight; // height of preloaded image
    let imageWidth; // width of preloaded image
    let $galleryA = $('#gallery a');

    //----------- copy images addresses  --------------------------------------

    $galleryA.each(function () {

        let currentAdres = $(this).attr('href');
        imageAdres.push(currentAdres);

    }); // copy images addreses to imageAdres -----------


    //-------- gallery ON & set image  ---------------------------------
    $galleryA.click(function () {

        let $this = $(this);
        imageURL = $this.attr('href');

        let check = true;
        let checkingNumber = 0;

        while (check) {
            if (imageURL == imageAdres[checkingNumber]) {
                imageNumber = checkingNumber;
                check = false;
            } else {
                checkingNumber++;
            }
        } // image number checking

        $('#webkasGalleryPicture').attr('src', imageURL);
        $('#webkasGallerySlider').addClass('webkasGalleryActive');
        webkasGalleryNumber(imageNumber);

        return false;

    }); // gallery show click --------------------------


    //---------- next picture --------------------------------------
    $('#webkasGallerySliderRight').click(function () {

        imageNumber == imageAdres.length - 1 ?
            imageNumber = 0 : imageNumber++;

        $('#webkasGallerySlider img').attr('src', imageAdres[imageNumber]);
        webkasGalleryNumber(imageNumber);

    }); // Right click -------------------------


    //----------- previous picture --------------------------------------------
    $('#webkasGallerySliderLeft').click(function () {

        imageNumber == 0 ?
            imageNumber = imageAdres.length - 1 : imageNumber--;

        $('#webkasGallerySlider img').attr('src', imageAdres[imageNumber]);
        webkasGalleryNumber(imageNumber);

    }); // Left click ---------------------------


    //---------------- close gallery ---------------------------------------------
    $('#webkasGallerySliderClose').click(function () {

        $('#webkasGallerySlider').removeClass('webkasGalleryActive');

    }); // Close on click button ------------------------

    //---------- gallery number---------------------------------------------
    function webkasGalleryNumber(numb){
        let $of = imageAdres.length;
        let $numb = numb + 1;
        const $wGN = $('#webkasGalleryNumber');
        let numberContent = $numb + " of " + $of;
        $wGN.text(numberContent);
    }

=======
$(function () {

    const $window = $(window);
    var windowWidth = $window.width();
    var windowHeight = $window.height();
    var Y;
    var ePosition;
    const $menu = $('#menu');


    $window.resize(function () {
        windowWidth = $window.width();
        windowHeight = $window.height();

    });
    
    //------ scroll to --------------------------------
    
    const $navi = $('.navi');
    
    $navi.click(function(e){
        
        let _href = $(this).attr("href");
        
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $(_href).offset().top
        } ,800, "easeInOutCubic");
        
    });
    

    //------ scroll functions -------------------------
    
    $window.scroll(function () {
        Y = pageYOffset;

        $('.anime').each(function () {
            const $this = $(this);
            ePosition = $this.offset();
            let windowPosition = Y + windowHeight * 0.9;

            if (windowPosition > ePosition.top) {
                $this.removeClass('hideAnimation');
                $this.addClass('showAnimation');
            } else {
                $this.removeClass('showAnimation');
                $this.addClass('hideAnimation');
            }
        });


        if (windowWidth<=768) {
            $menu.addClass('miniNav');
        } else {
            $menu.removeClass('miniNav');
        }

        if (Y>80 && windowWidth>768) {
            $menu.addClass('active');
        } else {
            $menu.removeClass('active');
        }

    });

    //----- miniNavMenu ------------------------------------------------

    const $miniNav = $('#miniNavIcon');

    $miniNav.click(function(){
        if($menu.hasClass("open")){
            $menu.removeClass("open");
            $menu.addClass("closed");
        }
        else{
            $menu.removeClass("closed");
            $menu.addClass("open");
        }
    });

    //----- FAQ ------------------------------------------------

    const $question = $('.question');

    $($question).each(function () {
        $(this).find('.answer').hide();
    });

    $($question).click(function () {
        const $this = $(this);
        const $answer = $this.find('.answer');

        if ($answer.css("display") == "none") {
            $answer.slideDown(200, 'linear');
            $this.find('h4').addClass('open');
            $this.find('.minus').addClass('open');
            $this.find('.plus').addClass('open');
        } else {
            $answer.slideUp(200, 'linear');
            $this.find('h4').removeClass('open');
            $this.find('.minus').removeClass('open');
            $this.find('.plus').removeClass('open');
        }
    });


   //-------------------------------------------------------------        
    //------ Gallery ----------------------------------------------

    let imageAdres = []; // Array with images URLs
    let imageNumber = 0; // number of showing image

    let imageURL = ''; //  image URL

    let imageHeight; // height of preloaded image
    let imageWidth; // width of preloaded image
    let $galleryA = $('#gallery a');

    //----------- copy images addresses  --------------------------------------

    $galleryA.each(function () {

        let currentAdres = $(this).attr('href');
        imageAdres.push(currentAdres);

    }); // copy images addreses to imageAdres -----------


    //-------- gallery ON & set image  ---------------------------------
    $galleryA.click(function () {

        let $this = $(this);
        imageURL = $this.attr('href');

        let check = true;
        let checkingNumber = 0;

        while (check) {
            if (imageURL == imageAdres[checkingNumber]) {
                imageNumber = checkingNumber;
                check = false;
            } else {
                checkingNumber++;
            }
        } // image number checking

        $('#webkasGalleryPicture').attr('src', imageURL);
        $('#webkasGallerySlider').addClass('webkasGalleryActive');
        webkasGalleryNumber(imageNumber);

        return false;

    }); // gallery show click --------------------------


    //---------- next picture --------------------------------------
    $('#webkasGallerySliderRight').click(function () {

        imageNumber == imageAdres.length - 1 ?
            imageNumber = 0 : imageNumber++;

        $('#webkasGallerySlider img').attr('src', imageAdres[imageNumber]);
        webkasGalleryNumber(imageNumber);

    }); // Right click -------------------------


    //----------- previous picture --------------------------------------------
    $('#webkasGallerySliderLeft').click(function () {

        imageNumber == 0 ?
            imageNumber = imageAdres.length - 1 : imageNumber--;

        $('#webkasGallerySlider img').attr('src', imageAdres[imageNumber]);
        webkasGalleryNumber(imageNumber);

    }); // Left click ---------------------------


    //---------------- close gallery ---------------------------------------------
    $('#webkasGallerySliderClose').click(function () {

        $('#webkasGallerySlider').removeClass('webkasGalleryActive');

    }); // Close on click button ------------------------

    //---------- gallery number---------------------------------------------
    function webkasGalleryNumber(numb){
        let $of = imageAdres.length;
        let $numb = numb + 1;
        const $wGN = $('#webkasGalleryNumber');
        let numberContent = $numb + " of " + $of;
        $wGN.text(numberContent);
    }

>>>>>>> a8d7e3c490c96d51c036341cb1044e160228ac59
});