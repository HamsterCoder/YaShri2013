/**
    Namespacing module. Creates a global HCN namespace. HCN - Hamster Coder Namespace.
*/

(function(){
    window.HCN = (window.HCN) || {};
    window.HCN.getNSReference = (window.HCN.getNSReference) || function(referenceString, value)
    {
        var referenceArray = referenceString.split('.'), 
            currentElement = window.ADFOX; 
            if (referenceArray[0] === "ADFOX") { 
                referenceArray = referenceArray.slice(1); 
            } 
            for (var i = 0, len = referenceArray.length; i < len ; i += 1) { 
                if (typeof currentElement[referenceArray[i]] === "undefined") { 
                    currentElement[referenceArray[i]] = {}; 
                }
                currentElement = currentElement[referenceArray[i]]; 
            }
        return currentElement;
    };
})();