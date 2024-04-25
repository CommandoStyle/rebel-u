export const muzak = () => {

    var tlAudio_in = new gsap.timeline({paused: true});
          tlAudio_in.to(".audio-pause__img", {display: 'none', duration: 0.01 })
                    .to(".audio-play__img", {display: 'block', duration: 0.01 }, 0)
                    .to(".muzak-marquee__wrap", {display: 'none', duration: 0.01}, 0);
                    
    var tlAudio_out = new gsap.timeline({paused: true});
          tlAudio_out.to(".audio-play__img", {display: 'none', duration: 0.01 })
                     .to(".audio-pause__img", {display: 'block', duration: 0.01 }, 0)
                     .to(".muzak-marquee__wrap", {display: 'flex', duration: 0.01}, 0);
    
    var audio = document.getElementById("lounge-music");
    audio.volume = 0.15;
    
    const playpause = document.getElementById("audioControl");
    playpause.addEventListener("click", playAudio);
    
    function playAudio() {
      if (audio.paused) {
        audio.play();
        tlAudio_out.play(0);
      } else {
        audio.pause();
        tlAudio_in.play(0);
      }
    }
    
    var playdelay = document.querySelectorAll('#delayAudio');
    for (var i = 0; i < playdelay.length; i++) {
        var self = playdelay[i];
        self.addEventListener('click', function (event) {  
            event.preventDefault();
            timeout_audio(this); // 'this' refers to the current button on for loop
        }, false);
    }
    
    function delayAudio() {
      audio.play();
    }
    
    function timeout_audio() {
      setTimeout(delayAudio, 5000);
    }
    
    const stopaudio = document.getElementById("stopAudio");
    stopaudio.addEventListener("click", stopAudio);
    
    function stopAudio() {
      audio.pause();
      audio.currentTime = 0;
      }  
    
}
