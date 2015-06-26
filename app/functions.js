exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(arg) {
      return str + ', ' + arg;
    }
  },

  makeClosures : function(arr, fn) {
    var newArray = [];

    var newFn = function(val) {
      return function() { return fn(val); };
    };

    _.each(arr, function(el) {
      newArray.push(newFn(el))
    });
    return newArray;
  },

  partial : function(fn, str1, str2) {
    return function(val) {
      return fn.call(null, str1, str2, val);
    }

  },

  useArguments : function() {
    var total = 0;
    var args = Array.prototype.slice.call(arguments);
      _.each(args, function(el) {
        total += el;
      })
      return total;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  curryIt : function(fn) {
    function applyArguments(fn, arguments) {
          return fn.apply(null, arguments);
        }

        function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
          return function (currentArgument) {
            accumulatedArguments.push(currentArgument);

            var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

            if (allArgumentsProvided) {
              return applyArguments(fn, accumulatedArguments);
            } else {
              return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
            }
          };
        }

        return getArgumentAccumulator([], fn.length);
  }
};
