/**

*/

(function(){

    var Question = function(){
        var
            containerSelector = {
                label: 'js-label',
                toggleView: 'js-toggle-view',
                hint: 'js-question-body-answer',
                fields: 'js-question-body-answer',
                validationMessage: 'js-question-body-answer'
            };

            
        
        this.validationStatus = 'not-answered'; // 'answered'
        this.interactionStatus = 'idle'; // 'interacting'
        this.questionNumber = 0;
    };
    
    Question.prototype.render = function(){
        return $(
            '<div class="application-form__body__question">'+
                '<div class="question__label js-label">'+
                     /*added by instance of Label*/
                '</div>'+
                '<div class="question__toggle-view js-toggle-view">'+
                    /*conditionally added by instance of ToggleView*/
                '</div>'+
                '<div class="question__body">'+
                    '<div class="question__body__description">'+
                        '<div class="description__title">'+
                            '<h3>'+
                                '<label for="q1-year-of-birth">Год рождения</label>'+
                            '</h3>'+
                        '</div>'+
                    '</div>'+
                    '<div class="question__body__answer js-question-body-answer">'+
                        /*added by instance of Hint*/
                        '<p class="answer__field">'+
                            '<input type="text" name="q1-year-of-birth" id="q1-year-of-birth" class="js-validate-number">'+
                        '</p>+
                        /*added by instance of ValidationMessage*/
                    '</div>'+
                '</div>'+
            '</div><!--/.application-from__body__question-->'
        );
    };

})();
