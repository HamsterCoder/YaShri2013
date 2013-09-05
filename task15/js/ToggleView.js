/**

*/

(function(){

    var ToggleView = function(){
        this.element = this.render();
    };
        
    ToggleView.prototype.render = function(){
        return $(
            '<a href="" class="pure-button js-view-show"><i class="icon-plus"></i></a>'+
            '<a href="" class="pure-button js-view-hide"><i class="icon-minus"></i></a>'
        );
    };
    
    //Reveal in namespace;
    var
        namespace = 'YA_SHRI',
        globaleNamespace = 'HCN',
        reference = window[globaleNamespace].getNSReference(namespace);
    
    reference.ToggleView = ToggleView;

})();