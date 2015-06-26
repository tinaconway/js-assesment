exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var newArray = [];
    if(dirName) {
      _.each(data.files, function(el) {
        if ((typeof(el) === 'object') && el.dir === dirName) {
          _.each(el.files, function(elm) {
            if(typeof(elm) === 'object') {
            _.each(elm.files, function(element) {
              newArray.push(element);
            })
          }
          else {
            newArray.push(elm);
          }
          })
        }
      })
      return newArray;
    }
    else {
      _.each(data.files, function(el) {
        if(typeof(el) === 'object') {
          _.each(el.files, function(elm) {
            if(typeof(elm) === 'object'){
              _.each(elm.files, function(element) {
                newArray.push(element);
              })
            }
            else {
            newArray.push(elm);
            }

          })
        }
        else {
          newArray.push(el);
        }
      })

      return newArray;
    }
  },

  permute: function(arr) {
    var permArr = [],
         usedChars = [];
     return (function main() {
         for (var i = 0; i < arr.length; i++) {
             var ch = arr.splice(i, 1)[0];
             usedChars.push(ch);
             if (arr.length == 0) {
                 permArr.push(usedChars.slice());
             }
             main();
             arr.splice(i, 0, ch);
             usedChars.pop();
         }
         return permArr;
     })();

  },

  fibonacci: function(n) {
    var i;
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for(i=2; i<=20; i++) {
        fib[i] = fib[i-2] + fib[i-1];

    }
    return fib[n];
  },

  validParentheses: function(n) {
    var validParentheses = [];

    brackets('', 0, 0, n);

    function brackets(bracket, open, close, pairs)
    {
        if( (open===pairs) && (close===pairs) )
        {
            validParentheses.push(bracket);
        }
        else
        {
            if (open<pairs) {
                brackets(bracket + '(', open+1, close, pairs);
            }
            if (close<open) {
                brackets(bracket + ')', open, close+1, pairs);
            }
        }
    }

    return validParentheses;
    }
  }
