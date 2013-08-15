/**
    Tips and Tricks module;
*/
(function(){
    var
        form = $('#js-application-form');
    
    form.on('focus.tip', '.answer__field', function(evt){
        $(evt.target).closest('.question__body__answer').find('.js-tip').slideDown();
    });
    
    form.on('blur.tip', '.answer__field', function(evt){
        $(evt.target).closest('.question__body__answer').find('.js-tip').hide();
    });
})();