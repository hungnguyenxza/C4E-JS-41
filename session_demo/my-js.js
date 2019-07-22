$('#click-me').on('click', function(){
    const total_li = $('#content').children('li').length;
    $('#content').append("<li>Hello world " + (total_li + 3) +"</li>")
});

