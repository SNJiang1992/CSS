function Carousel($carousel) {
    this.$carousel = $carousel;
    this.n = 0;
    var timeId;
    this.autoPlay();
    this.addEvent();
}
Carousel.prototype = {
    autoPlay: function() {
        var _this = this
        timeId = setInterval(function() {
            _this.playN()
        }, 3000)
    },
    playN: function() {
        if (this.n == 4) {
            this.n = 0;
        }
        this.$carousel.find('.switch li').eq(this.n).addClass('active');
        this.$carousel.find('.switch li').eq(this.n).siblings().removeClass('active');
        this.n++;
        this.$carousel.fadeOut(500)
        this.$carousel.fadeIn(500)
    },
    addEvent: function() {
        var _this = this
        this.$carousel.find('.switch li').on('click', function(e) {
            window.clearInterval(timeId);
            let $button = $(e.currentTarget);
            _this.n = $button.index();
            _this.playN();
            _this.autoPlay();
        })
        this.$carousel.find('.prev').on('click', function() {
            window.clearInterval(timeId);
            _this.n = $('.active').index() - 1;
            _this.playN();
            _this.autoPlay();
        })
        this.$carousel.find('.next').on('click', function() {
            window.clearInterval(timeId);
            _this.n = $('.active').index() + 1;
            _this.playN();
            _this.autoPlay();
        })
    }
}
var carousel = new Carousel($('.carousel'));