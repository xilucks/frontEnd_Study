$('#btn1').on('click', function(){
    $('.blue').addClass('down');
    setTimeout(reset, 1000);
});

$('#btn2').on('click', function(){
    $('.white').addClass('down');
    setTimeout(reset, 1000);
});

$('#btn3').on('click', function(){
    $('.blue.dot').addClass('down');
    setTimeout(reset, 1000);
});

function reset() {
    $('.flag').removeClass('down');
}