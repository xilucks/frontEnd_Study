$('#even-btn').on('click', turnoneven);
$('#odd-btn').on('click', turnonodd);

function turnoneven(){
  $('.card').each(function(){
      if (Number($(this).text())%2 === 0){
          $(this).addClass('selected');
      }
      else{
          $(this).removeClass('selected');
      }
  });
  
};

function turnonodd(){
    $('.card').each(function(){
        if (Number($(this).text())%2 === 1){
            $(this).addClass('selected');
        }
        else{
            $(this).removeClass('selected');
        }
    });

};