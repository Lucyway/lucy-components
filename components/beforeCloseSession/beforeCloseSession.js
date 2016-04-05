/*add "signal" if mouse leave on top page (if not found cookie "modal_callback_before_unload was closed")*/
/*require jquery*/

    $(beforeCloseSession);
    
    function beforeCloseSession(){
        if (sessionStorage.getItem('wasClosed')===null){
            
            var pageY = 0;
            var pageX = 0;
            var mouseUp = false;
            var widthScreen = screen.width - 150;
            var $observZone = $(document);
            var $modalBeforeClosePage = $('#modalBeforeClosePage');
            var $timeCounterMinute = $('#timeCounterMinute');
            var $timeCounterSecond = $('#timeCounterSecond');
            
            var timeCounterNum = +(sessionStorage.getItem('timeCounter')) || 0;
            // time counter with memory in sessionStorage for
            
            setInterval(function () {
                if (sessionStorage.getItem('wasClosed') === null) {
                    timeCounterNum = timeCounterNum + 1;
                    $timeCounterMinute.html(Math.floor(timeCounterNum/60));
                    $timeCounterSecond.html(timeCounterNum - (Math.floor(timeCounterNum/60)*60));
                    sessionStorage.setItem('timeCounter', timeCounterNum);
                }
            }, 1000);
            
            // modal before close with memory in sessionStorage
            $observZone.on("mousemove", function(event) {
                event.pageY < pageY ? mouseUp = true : mouseUp = false;
                pageY = event.pageY;
            });
            
            $observZone.one("mouseleave", function(event) {
                if (event.pageX < widthScreen && event.pageX > 20 && mouseUp === true) {
                    $modalBeforeClosePage.modal({fadeDelay: 0});
                }
            });
            
            $modalBeforeClosePage.on($.modal.CLOSE, function(event1, modal1) {
                sessionStorage.setItem('wasClosed', true);
                timeCounterNum = 0;
            });
        }
    }
