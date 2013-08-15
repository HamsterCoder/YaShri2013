/**
    Tips and Tricks module;
*/
(function(){
    var
        form = $('#js-application-form'),
        formElementSelector = '.answer__field',
        tipSelector = '.js-tip',
        questionSelector = '.application-form__body__question';
    
    form.on('focus.tip', formElementSelector, function(evt){
        $(evt.target).closest(questionSelector).find(tipSelector).slideDown();
    });
    
    form.on('blur.tip', formElementSelector, function(evt){
        $(evt.target).closest(questionSelector).find(tipSelector).hide();
    });
    
    // TODO bring to order this chaos of css and js hooks.
    // ERROR with many field for one question it looks ugly; Save current element maybe?
})();