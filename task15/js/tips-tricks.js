/**
    Tips and Tricks module;
*/
(function(){
    var
        
        form = $('#js-application-form'),
        formElementSelector = '.answer__field',
        tipSelector = '.js-tip',
        currentQuestion = null,
        questionSelector = '.application-form__body__question';
    
    form.on('click.tip', questionSelector, function(evt){
        $(evt.currentTarget).closest(questionSelector).find(tipSelector).slideDown();
    });
    
    // TODO bring to order this chaos of css and js hooks;
    // ERROR radio buttons do not blur or focus;
    // ERROR with multiple inputs it get jumpy;
    // Decided to do a show tip on click functionality;
})();