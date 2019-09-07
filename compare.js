
var nums = [];

const compareMe = function (evt, func) {
    for (var i = 0; i < 3; i++) {
        nums.push(+prompt("Please enter a number"));

    }

    displayNums();

};

var button = document.getElementById("btn").addEventListener('click', compareMe);

function displayNums() {

        var span = document.getElementById("display");
      
        span.textContent = "Your sorted numbers are " + nums.sort(function(a, b) {return a - b});
    }
