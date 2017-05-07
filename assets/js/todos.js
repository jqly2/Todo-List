//li event
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//span event
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//input event
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //save input event
        var todoText = $(this).val();
        $(this).val("");
        //append to li
        $('ul').append("<li><span><i class='fa fa-minus-circle' aria-hidden='true'></i></span>"+ todoText +"</li>");
    }
});

//toggle input
$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
});