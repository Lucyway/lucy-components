//lazy-background-scroll

// Изображение фона движется медленней скролла
//<No css> background scrolling
$(document).ready(function () {
    
    // Cache the Window object
  $window = $(window);
    
  $('[data-type="slowly-bg-down"]').each(function () {
        var $bgobj = $(this); // assigning the object 
        $window.scroll(function () {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50%' + yPos + 'px';
            // Move the background
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    });
});

// Изображение фона движется в обратную сторону от скролла
//<No css> background scrolling
$(document).ready(function () {
    
    // Cache the Window object
    $window = $(window);
    
    $('[data-type="slowly-bg-up"]').each(function () {
        var $bgobj = $(this); // assigning the object 
        $window.scroll(function () {
            var yPos = +($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50% ' + yPos + 'px';
            // Move the background
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    });
});

//lazy-element-scroll
$(function () {
    // Cache the Window object
  $window = $(window);
    
  $('[data-type="slowly-up"]').each(function () {
        var $posObj = $(this); // assigning the object 
        var position = $posObj.position();
        var positionTop = position.top;
        $window.scroll(function () {
            var iPos = -($window.scrollTop() / $posObj.data('speed-position'));
            // Put together our final position
            var posTop = positionTop + iPos + 'px';
            // Move the position
            
            $posObj.css({"top": posTop});
        });
    });
});
