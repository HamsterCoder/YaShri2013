/**
    Fields and FieldsManager functionality; Plus validation and events;
*/

(function(){

    var VALIDATORS = {
        number: ['not_empty', 'number'],
        link: ['not_empty', 'link'],
        shortText: ['not_empty', 'lens150'],
        longText: ['not_empty']
    };
    
    var Field = function(type, name, meaning, options){
        this.type = type;
        this.name = name;
        this.meaning = meaning; //Meaning defines type of validation for field;
        this.options = options;
    };
    
    Field.prototype.render = function(){
        var
            options = this.options,
            type = this.type,
            name = this.name,
            validators = 'js-validate-' + VALIDATORS[this.meaning].join('-'),
            html;
        
        switch(type){
            case 'text':
                html = '<input type="text" name="'+name+'" id="'+name+'" class="' + validators + '">';
                break;
            case 'textarea':
                html = '<textarea name="'+name+'" id="'+name+'" class="' + validators + '"></textarea>';
                break;
            case 'radio':
                html = '<label for="'+name+'">'+
                            '<input type="radio" name="'+name+'" id="'+name+'" value="' + options.value + '" class="' + validators + '">'+
                            options.label +
                       '</label><br>';
                break;
        }
        
        return $(html);
    };
    
    var FieldsManager = function(){
        
    };
    
    FieldsManager.prototype.render = function(){
        return $(
            '<p class="answer__field"></p>';
        );
    };

})();