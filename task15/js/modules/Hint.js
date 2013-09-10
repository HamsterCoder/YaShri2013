/**
    Question validation status shown to the user.
*/

(function(){

    var Hint = function(hints){
        this.hints = hints;
        this.element = this.render();
    };
        
    Hint.prototype.render = function(){
        return $(
            '<p class="answer__tip js-tip">'+ this.hints.join('<br>') +'</p>'
        );
    };
    
    //Reveal in namespace;
    var
        namespace = 'YA_SHRI',
        globaleNamespace = 'HCN',
        reference = window[globaleNamespace].getNSReference(namespace);
    
    reference.Hint = Hint;

})();