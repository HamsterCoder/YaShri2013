/**
    Fields and FieldsManager functionality; Plus validation and events;
*/

(function(){

    var VALIDATORS = {
        number: ['not_empty', 'number'],
        link: ['not_empty', 'link'],
        shortText: ['not_empty', 'lens150'],
        longText: ['not_empty'],
        noValidation: []
    };
    
    var Field = function(type, name, meaning, options){
        this.type = type;
        this.name = name;
        this.meaning = meaning; //Meaning defines type of validation for field;
        this.options = options;
        this.element = this.render();
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
    
    var FieldsManager = function(fieldsInfo){
        this.fieldsInfo = fieldsInfo;
        this.element = this.render();
        this.fields = this.renderFields();
    };
    
    FieldsManager.prototype.render = function(){
        return $(
            '<p class="answer__field"></p>'
        );
    };
    
    FieldsManager.prototype.renderFields = function(){
        var
            manager = this,
            fieldsInfo = manager.fieldsInfo,
            fields = [],
            currentField,
            currentFieldInfo;
        
        for(var i=0, len = info.length; i < len; i ++) {
            currentInfo = fieldsInfo[i];
            currentField = new Field(currentInfo.type, currentInfo.name, currentInfo.meaning, currentInfo.options); //TODO where does currentInfo.name comes from. Think who will generated field names and how.
            manager.element.append(currentField.element);
            fields.push(currentField); //TODO do we need this list? Or not.
        }
        
        return fields;
    };

})();

//TODO check all render functions in all modules - make sure what is returned is one element, not a collection.
