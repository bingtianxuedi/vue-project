~function(){
    var oAudioBox=document.getElementById("audiob");
    var oAudio=document.getElementById("audiop");

    oAudioBox.addEventListener('click',function(){
        if(oAudio.paused){
            oAudio.play();
            oAudioBox.className='audio move';
            return;
        }
        oAudio.pause();
        oAudioBox.className='audio';
    },false);

    function contralAudio(){
        oAudio.volume=0.5;
        oAudio.play();
        oAudio.addEventListener('canplay',function(){
            oAudioBox.style.display='block';
            oAudioBox.className='audio move';
        },false)
    };

    window.setTimeout(contralAudio,1000);

}();