
let audioPlayer;
let currentPlayingId = unll;
let currentPlayingContainer = unll;


// 유튜브 API가 준비되면 자동으로 이 함수를 실행
function onYoutubeIframeAPIReady() {
    audioPlayer = new YT.Player('audio-player', {
        height: '1', width: '1', event: {
            'onReady': setupAudioPlayer // 플레이어가 준비되면 2번함수 호출

        }
    });
}


// 플레이어가 준비된 후 실제 버튼 이벤트 설정
function setupAudioPlayer() {
    const musicContainers = document.querySelectorAll('.trailer_music');
    musicContainers.forEach(function (container) {
        const videoId = container.getAttribute('data-youtube-id');
        const imageLink = container.querySelector('a');
        const playBtn = container.querySelector('.fa-play');
        const playingBtn = container.querySelector('.fa-pause')
    })
}
