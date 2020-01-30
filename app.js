$('ul').on('click', 'li', function(){
    $(this).toggleClass('done');
})

$('ul').on('click', 'span', function(event){
    $(this).parent().remove();
    event.stopPropagation();
})

$("input[type='text']").on('keypress', function(event){
    // define to-do value 
    let todoItem = $(this).val();
    
    if(event.which===13){
        // clear the input area 
        $(this).val("");
        // add the value of the text entered to the to-do items
        console.log(todoItem);
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span><i class="fas fa-check"></i>' + todoItem + '</li>')
    }
})

$(".fa-plus").click(function(){
    $("input").fadeToggle();
})