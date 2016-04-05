/*add "signal" if mouse leave on top page (if not found cookie "modal_callback_before_unload was closed")*/
/*require js-cookie and jquery*/

$(beforeCloseCookies);

function beforeCloseCookies(){
  if (Cookies.get('wasClosed')===undefined){

    var pageY = 0;
    var pageX = 0;
    var mouseUp = false;
    var widthScreen = screen.width - 150;
    var $observZone = $(document);
    var $modalBeforeClosePage = $('#modalBeforeClosePage');
    var $timeCounterMinute = $('#timeCounterMinute');
    var $timeCounterSecond = $('#timeCounterSecond');
    var timeCounterNum = +(Cookies.get('timeCounter')) || 0;

    // time counter with memory in cookies for
    
    setInterval(function () {
        if (Cookies.get('wasClosed') === undefined) {
            timeCounterNum = timeCounterNum + 1;
            $timeCounterMinute.html(Math.floor(timeCounterNum/60));
            $timeCounterSecond.html(timeCounterNum - (Math.floor(timeCounterNum/60)*60));
            Cookies.set('timeCounter', timeCounterNum);
        }
    }, 1000);

    // modal before close with memory in cookies
    $observZone.on("mousemove", function(event) {
        event.pageY < pageY ? mouseUp = true : mouseUp = false;
        pageY = event.pageY;
    });

    $observZone.one("mouseleave", function(event) {
        if (event.pageX < widthScreen && event.pageX > 20 && mouseUp === true) {
            $modalBeforeClosePage.modal({fadeDelay: 0});
            //Cookies.set('was_closed', 'true'); - if no external processor
        }
    });

    $modalBeforeClosePage.on($.modal.CLOSE, function(event1, modal1) {
        Cookies.set('wasClosed', true, { expires: 7 });
        Cookies.remove('timeCounter');
        timeCounterNum = 0;
    });
  }

}
