/**
    Validate form;
*/

(function(){
    var
        form = $('#js-application-form'),
        inputElementSelector = '.answer__field',
        fieldTypes = [
            'number', //0 < length, regex
            'shortText', //0 < length < 150
            'link', //0 < length, regex
            'longText' // 0 < length
        ],
        statusSelectorContainer = '.answer__accept-state',
        statusSelector = {
            success:'.answer__accept-state_state_success',
            empty:'.answer__accept-state_state_empty',
            fail:'.answer__accept-state_state_fail',
        },
        questionSelector = '.application-form__body__question';
    
    form.on('blur.validate', inputElementSelector, function(evt){
        var 
            input = $(evt.target),
            value = input.val(),
            validate = 'fail';
        if(input.hasClass('js-validate-number')) {
            if(value.length == 0) {
                validate = 'empty';
            } else if (/\d+/.test(value)){
                validate = 'success'
            }
        } else if (input.hasClass('js-validate-shortText')) {
            if(value.length == 0) {
                validate = 'empty';
            } else if (value.length <= 150){
                validate = 'success'
            }
        } else if (input.hasClass('js-validate-longText')) {
            if(value.length == 0) {
                validate = 'empty';
            } else {
                validate = 'success'
            }
        } else if (input.hasClass('js-validate-link')) {
            if(value.length == 0) {
                validate = 'empty';
            } else if (/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i.test(value)){
                validate = 'success'
            }
        } else {
            validate = 'success';
        }
        
        input.closest(questionSelector).find(statusSelectorContainer).children().hide();
        input.closest(questionSelector).find(statusSelector[validate]).show();
        
        input.trigger('validate');
    });
})();