$(document).ready(function () {
  $(".zaycheg").fancybox();
  $(".friend").hide();

  function clown () {

    var _self = this;

      _self.speech = $(".js-speech");
      _self.clown = $(".js-jigsaw");

      _self.closeClown = function() {
        _self.clown.removeClass("is-opened");
        _self.speech.removeClass("is-speaking")
      };

      _self.speak = function (msgArr) {
        _self.clown.addClass("is-opened");
        _self.clown.on("transitionend webkitTransitionEnd", function() {
          if (!_self.clown.hasClass("is-opened")) return;

          _self.speech.addClass("is-speaking");
          setTimeout(function () {
            _self.speech.teletype({
              text: msgArr,
              typeDelay: 100,
              backDelay: 0,
              cursor: "",
              humanise: false,
              delay: 2000,
              loop: 1,
              onTypeEnd: function() {
                _self.closeClown();
                $(".friend").show();
                _self.clown.hide();
              }
            })
          }, 2000);

        })
      }

  };



  function intro () {
    var msgs = [];
    msgs.push("Здравствуй, Анна");
    msgs.push("Я хочу сыграть с тобой в игру...");
    msgs.push("Ты целый год упорно работала и заслужила достойную награду.");
    msgs.push("Я приготовил для тебя подарок. 6 подарков.");
    msgs.push("Но, к сожалению, их похитили коварные..");
    msgs.push("..зайцы..");
    msgs.push("Найди их всех и отКликай у них то, что по праву принадлежит тебе!");
    msgs.push("Будь очень внимательна, Анна, все может быть не так просто, как ты думаешь.");
    msgs.push("Все или ничего, Анна! Время пошло.Удачи..");

    jigsaw.speak(msgs);
  }


  var jigsaw = new clown();
  jigsaw.clown.css({animationPlayState:"running"});
  jigsaw.clown.on("animationend webkitAnimationEnd", intro );

jigsaw.clown.click(function() {
  $(".friend1 .fancybox").click();
})


});
