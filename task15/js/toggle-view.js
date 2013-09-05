/**
    Toggle questions view;
*/

(function(){
    var
        form = $('#js-application-form'),
        controlsSelector = '.js-toggle-view',
        showSelector = '.js-toggle-view .js-view-show',
        hideSelector = '.js-toggle-view .js-view-hide',
        extraContentSelector = '.js-description-rest',
        questionSelector = '.application-form__body__question';
    
    //Show toogle buttons for big questions;
    $.each(form.find(extraContentSelector), function(index, item){
        $(item).closest(questionSelector).find(controlsSelector).show();
    });

    form.on('click.toggle-view', showSelector, function(evt){
        evt.preventDefault();
        $(evt.target).closest(questionSelector).find(extraContentSelector).show();
    });
    
    form.on('click.toggle-view', hideSelector, function(evt){
        evt.preventDefault();
        $(evt.target).closest(questionSelector).find(extraContentSelector).hide();
    });
    // TODO known issue when you collapse then expand question description you may end up not where you started.
})();