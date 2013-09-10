/**
    Question module.
        Creates question from JSON data. Knows about other modules.
*/

(function(){
    var
        modules = {
            label: {
                container: '.js-label',
                constructor: 'YA_SHRI.Label'
            },
            toggleView: {
                container: '.js-toggle-view',
                constructor: 'YA_SHRI.ToggleView'
            },
            hint: {
                container: '.js-question-body-answer',
                constructor: 'YA_SHRI.Hint'
            },
            fields: {
                container: '.js-question-body-answer',
                constructor: 'YA_SHRI.Label'
            },
            validationMessage: {
                container: '.js-question-body-answer',
                constructor: 'YA_SHRI.ValidationMessage'
            },
            questionInfo: {
                container: '.js-question-body-description',
                
            }
        };

    /**
    * Takes care of question text, which comes from json.
    * @param {Object} info
    * @examples of info
        var info = {
            settings: {
                name: 'q1-year-of-birth',
                rest: false
            },
            title: 'Год рождения',
            restHTML: ''
        }
    
        
        var info = {
            settings: {
                name: 'q15-challenge-layout',
                rest: true
            },
            title: 'Сверстайте форму-анкету с нашими заданиями для кандидатов.',
            restHTML: '<h4>Описание</h4>'+
                '<p>Страница должна работать в следующих браузерах: MSIE (8, 9, 10), Google Chrome (26, 27), Firefox (20, 21), Opera (12.15, 12.14), Яндекс.Браузер 1.5. По возможности используйте приёмы безопасной деградации CSS.</p>'+
                '<p>Страница должна содержать интерактив, реализованный с помощью JS и jQuery. Это может быть:</p>'
        }
    */
    
    var QuestionInfo = function(info){
        this.info = info;
        this.settings = info.settings;
    };
    
    QuestionInfo.prototype.render = function(info){
        return $(
            '<div class="description__title">'+
                '<h3>'+
                    '<label for="' + this.settings.name + '">' + this.info.title + '</label>'+
                '</h3>'+
            '</div>'+
            (this.settings.rest)?(
                '<div class="description__rest js-description-rest">' +
                    this.info.restHTML +
                '</div>'
            ):('')
        );
    };

    var Question = function(){
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
                    '<div class="question__body__description js-question-body-description">'+
                         /*added by instance of QuestionInfo*/
                    '</div>'+
                    '<div class="question__body__answer js-question-body-answer">'+
                        /*added by instance of Hint*/
                        /*fields added here by FieldsManager*/
                        /*added by instance of ValidationMessage*/
                    '</div>'+
                '</div>'+
            '</div><!--/.application-from__body__question-->'
        );
    };
    

})();

//TODO file an issue to annotate plugin

