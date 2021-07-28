$('#send').on('click', function(){
    var text = $('#new-message').val();

    if(text != ''){
        $('.chatbox').append('<div class="my-bubble bubble">' + text +'</div>');
    }

    $('#new-message').val('');
});


