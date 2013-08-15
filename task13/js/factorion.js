/**
    Yandex Task 13
        Find all numbers: 4! + 0! + 5! + 8! + 5! = 40585 like these.

    Brainstorming:
        Brute force sounds like a bad idea, especially if there is an infinite number of those numbers. By the way they are called Factorions and we will stick to that name.
        So my second idea after exploring the issue is to try and determine that there is really a finite number of them, the math is pretty straight forward, even I could do it =)
            First if a number has N digits than the sum of factorials is smaller than N*9!
            Then if a number has N digits it is bigger than 10^(N-1)
            This concludes than when N>7 there can be no factorions.
        Then I actually googled to find out what these numbers are called. This article has a closer estimate. http://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%BE%D0%BD
        So factorians are bound by 2 500 000 at least.
    
    Independently exploring the problem I came with a little optimization for finding factorials rather than checking all 2 500 000.
        Algorithm:
        We have to split all numbers into groups [0 - 9], [10 - 19], [20 - 29] ...
        If factorion(n) > n and n%10 > 0 we need to quit checking this group and move on to the next.
        n%10>0 is very important here, because 0! = 1! and factorion(10) = factorion(11), factorion(20) = factorion(21) and so on.
        If we leave this out, we won't get 1 an 2 in the anwser and possible other solutions.
        
    All in all it takes about 13second in google chrome console and is a bit laggy in firebug but under 2 minutes I think to calculate all factorions on my computer.
    
    Instructions:
        Call crazzyNumbezz function passing in lowerLimit and upperLimit as arguments. If an upperLimit%10 == 0 then it is not included for convienience.
        Or uncomment the tests in the bottom.
*/

var crazzyNumbezz = (function(){
    
    /**
     * Calculates factorial of a number;
     * @param {Number:int} n
     */
    
    function factorial(n){
        if(n == 0) {
            return 1;
        }
        else {
            return n*factorial(n-1);
        }
    };
    
    
    /**
     * Saves all crazzyNumbezz to array in a given lover-upper limit; Then prints resulting array to console.
     * @param {Number:int} loverLimit - starting at;
     * @param {Number:int} upperLimit - ending at; If an upperLimit%10 == 0 then it is not included for convienience.
     */
    
    function printCrazzyNumbezz(loverLimit, upperLimit){
        var 
            CRAZZY_NUMBEZZ_TOP = 2500000,
            n = loverLimit,
            currentFactorialSum = 0,
            crazyNumbers = [],
            upperLimit = (CRAZZY_NUMBEZZ_TOP > upperLimit)?upperLimit:CRAZZY_NUMBEZZ_TOP;
        while(n < upperLimit) {
            for(var i=0; i<10; i++) {
                var k = n + i;
                currentFactorialSum = factorialSum(k);
                if(currentFactorialSum > k && i > 0) {
                    break;
                }
                else if(currentFactorialSum === k) {
                   crazyNumbers.push(k);
                }
            }

            n = (Math.floor(n/10) + 1)*10;//Move to next group;
        }
        
        console.log(crazyNumbers);
    }
    
    
    /**
     * Calculates the sum of factorials of digits
     * @param {Number:int} n
     */
    
    function factorialSum(n) {
        var 
            sum = 0,
            digits = toDigits(n);
        
        for(var i = 0, len = digits.length; i < len; i++) {
            sum += factorial(digits[i]);
        }
        
        return sum;
    }
    
    
    /**
     * Returns an array of digits of a number starting with 0 power.
     * @param {Number:int} n 
     */
    
    function toDigits(n){
        if(n > 0) {
            var digits = [],
                remainder = 0,
                delimeter = 0;
            
            do {
                delimeter = Math.floor(n/10);
                remainder = n%10;
                digits.push(remainder);
                n = delimeter;
            } while (delimeter > 0)
            
            return digits;
        }
        else {
            return [0];
        }
    }


//Test crazzyNumbezz function
//    var startTime = (new Date).getSeconds();
//    for(var i = 0, len = 2500000/10000; i < len; i++) {
//        //console.log(10000*i, 10000*(i+1));
//        printCrazzyNumbezz(10000*i, 10000*(i+1))
//    }
//    var endTime = (new Date).getSeconds();
//    console.log(endTime - startTime, 'seconds');

//Test utils
//    console.log(
//        factorialSum(0),
//        factorialSum(1),
//        factorialSum(2),
//        factorialSum(3),
//        factorialSum(4),
//        factorialSum(5),
//        factorialSum(6),
//        factorialSum(7),
//        factorialSum(8),
//        factorialSum(9)
//    );
    
//    console.log(
//        toDigits(12345),
//        toDigits(200),
//        toDigits(0),
//        toDigits(1),
//        toDigits(11111)
//    );
//
//    console.log(
//        factorial(0),
//        factorial(1),
//        factorial(2),
//        factorial(3),
//        factorial(4),
//        factorial(5),
//        factorial(6),
//        factorial(7),
//        factorial(8),
//        factorial(9)
//    );
    
    return printCrazzyNumbezz;
})();