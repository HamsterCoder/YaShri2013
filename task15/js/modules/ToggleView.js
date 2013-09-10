/**
    ToggleView module collapses and expands long questions.
    A question is long if it has div.description__rest.js-description-rest
*/

(function(){

    var
        SHOW_CLASS = 'js-view-show',
        HIDE_CLASS = 'js-view-hide',
        QUESTION_SELECTOR = '.js-form-body-question',
        TOGGLE_ELEMENT_SELECTOR = '.js-description-rest'; //Created by question module;
    
    var ToggleView = function(){
        this.collapsed = false;
        this.element = this.render(); //Contains a collection of 2 links.
        this.onHandlers();
    };
        
    ToggleView.prototype.render = function(){
        return $(
            '<a href="" class="pure-button ' + SHOW_CLASS + '"><i class="icon-plus"></i></a>'+
            '<a href="" class="pure-button ' + HIDE_CLASS + '"><i class="icon-minus"></i></a>'
        );
    };
    
    ToggleView.prototype.onHandlers = function(){
        var
            toggler = this;
        
        toggler.element.on('click.toggleView', function(evt){
            var
                currentTarget = $(evt.currentTarget),
                toggleElement = currentTarget.closest(QUESTION_SELECTOR).find(TOGGLE_ELEMENT_SELECTOR);
            
            evt.preventDefault();
            
            if(currentTarget.hasClass(SHOW_CLASS) && toggler.collapsed) {
                toggleElement.show();
                toggler.collapsed = false;
            } else if(currentTarget.hasClass(HIDE_CLASS) && !toggler.collapsed) {
                toggleElement.hide();
                toggler.collapsed = true;
            }
        });
    };
    
    ToggleView.prototype.offHandlers = function(){
        this.element.off('click.toggleView');
    };
    
    //Reveal in namespace;
    var
        namespace = 'YA_SHRI',
        globaleNamespace = 'HCN',
        reference = window[globaleNamespace].getNSReference(namespace);
    
    reference.ToggleView = ToggleView;

})();