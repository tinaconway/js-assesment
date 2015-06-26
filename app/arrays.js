exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    total = 0;
    _.each(arr, function(el) {
      total += el;
    })
    return total;
  },

  remove : function(arr, item) {
    // args = Array.prototype.slice.call(arguments);
    _.each(arr, function(el, idx) {
      if (el === item) {
        arr.splice(idx, 1);
      }
    })
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);

  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    countArray = [];
    _.each(arr, function(el, idx) {
      if (el === item) {
        countArray.push(el);
      }
    })
    return countArray.length;
  },

  duplicates : function(arr) {
    var duplicates = [];
    var seen = {};
    arr.forEach(function (el) {
      seen[el] = seen[el] ? seen[el] + 1 : 1;
    })
    for(var item in seen) {
      if(seen.hasOwnProperty(item) && seen[item] > 1) {
        duplicates.push(+item);
      }
    }
    return duplicates;
  },

  square : function(arr) {
    var newArray = [];
    arr.forEach(function(el) {
      newArray.push(el*el);

    });
    return newArray;
  },

  findAllOccurrences : function(arr, target) {


    var newArray = [];
    _.each(arr, function(el, idx) {
      if (el === target) {
        newArray.push(idx);
      }

    })
    return newArray;
  }

};
