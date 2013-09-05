/**
    Question validation status shown to the user.
*/

(function(){

    var ValidationMessage = function(hints){
        this.hints = hints;
        this.element = this.render();
    };
        
    ValidationMessage.prototype.render = function(){
        return $(
            '<p class="answer__tip js-tip">'+ this.hints.join('<br>') +'</p>';
        );
    };
    
    //Reveal in namespace;
    var
        namespace = 'YA_SHRI',
        globaleNamespace = 'HCN',
        reference = window[globaleNamespace].getNSReference(namespace);
    
    reference.ValidationMessage = ValidationMessage;

})();