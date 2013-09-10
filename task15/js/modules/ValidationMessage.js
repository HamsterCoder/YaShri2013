/**
    Question validation status shown to the user.
*/

(function(){

    var ValidationMessage = function(){
        this.element = this.render();
    };
        
    ValidationMessage.prototype.render = function(){
        return $(
            '<p class="answer__accept-state">'+
                '<span class="answer__accept-state_state_success"><i class="icon-ok"></i>Заполнено верно</span>'+
                '<span class="answer__accept-state_state_empty"><i class="icon-exclamation"></i>Не заполнено</span>'+
                '<span class="answer__accept-state_state_fail"><i class="icon-remove"></i>Заполнено не верно</span>'+
            '</p>'
        );
    };
    
    //Reveal in namespace;
    var
        namespace = 'YA_SHRI',
        globaleNamespace = 'HCN',
        reference = window[globaleNamespace].getNSReference(namespace);
    
    reference.ValidationMessage = ValidationMessage;

})();