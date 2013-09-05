/**
    Question number label.
*/

(function(){

    var Label = function(questionNumber){
        this.questionNumber = questionNumber;
        this.element = this.render();
    };
    
    Label.prototype.render = function(){
        return $(
            '<div class="question-label-wrapper start-arrow">'+
                '<div class="question-label"><p>'+ this.questionNumber +'</p></div><div class="border-arrow"></div>'+
            '</div>'
        );
    };
    
    //Reveal in namespace;
    var
        namespace = 'YA_SHRI',
        globaleNamespace = 'HCN',
        reference = window[globaleNamespace].getNSReference(namespace);
    
    reference.Label = Label;
    
})();