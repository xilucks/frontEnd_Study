function scrollHandler() {
    var height = $(window).scrollTop() + $(window).height();
    
    // var playlists = $('.playlist');
    // for(var i = 0; i<playlists.length; i++){
    //     var playlist = $(playlists[i]);
    //     var playlistHalf = playlist.position().top + playlist.outerHeight() /2;

    //     if(playlistHalf < height){
    //         playlist.animate({'opacity': '1'}, 1500);
    //     }
    // }

    $('.playlist').each(function(){
        var playlist = $(this);
        var playlistHalf = playlist.position().top + playlist.outerHeight() /2;

        
        if(playlistHalf < height){
            playlist.animate({'opacity': '1'}, 1500);
        }

    });

    var but = $(document).height();
    console.log(but);
    if(height >= but){
        $('.to-top-btn').fadeIn();
    }
    else{
        $('.to-top-btn').fadeOut();
    }
}

$(window).on('scroll', scrollHandler);