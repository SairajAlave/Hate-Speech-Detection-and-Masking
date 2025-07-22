var black = ['freak','in shit','special','highlight','fuck']; // harassment/bullying
var red = ['nigga','javascript'];  // racism
var purple = ['batsman']; // sexism
var yellow = ['bhangi','dhobi',]; //casteism
var pink = ['pansy','queer','gay','lesbian']; //sexual-oritentation
var blue = ['crippled']; //disability

var blackColor = "#000000";
var purpleColor = "#A020F0";
var redColor = "#FF0000";
var yellowColor = "#FFFF00";
var pinkColor = "#FFC0CB";
var blueColor = "#0000FF";

function restoreInputs(oldText,newText) {
    // Select all <input> tags
    const inputs = document.querySelectorAll('input');
  
    // Loop through all <input> tags and replace the text in their value attribute
    inputs.forEach(input => {
        const oldValue = input.getAttribute('value');
        const newValue = oldValue.replace(oldText, newText);
        input.setAttribute('value', newValue);
        alert(newValue);
    });
}


for (let i = 0; i < red.length; i++) {
    console.log(red[i]);
    let wordToChange1 = red[i];
    var re = new RegExp(wordToChange1, "gi");
    var replaceWith = "<span style='color:" + redColor + ";'>$&</span>";
    var replaceWith1 = "<span style='background-color:" + redColor + ";'>$&</span>";
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith);
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith1);
    searchInInput = "value='<span style='color:" + redColor + ";'><span style='background-color:" + redColor + ";'>" + wordToChange1 + "</span></span>'";
    searchInInput2 = "value=\"<span style='color:" + redColor + ";'><span style='background-color:" + redColor + ";'>" + wordToChange1 + "</span></span>\"";
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput,"value='" + wordToChange1 + "'");
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput2,"value='" + wordToChange1 + "'");
    // restoreInputs(searchInInput, wordToChange1);
}

for (let i = 0; i < black.length; i++) {
    console.log(black[i])
    let wordToChange1 = black[i];
    var re = new RegExp(wordToChange1, "gi");
    var replaceWith = "<span style='color:" + blackColor + ";'>$&</span>";
    var replaceWith1 = "<span style='background-color:" + blackColor + ";'>$&</span>";
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith);
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith1);
    searchInInput = "value='<span style='color:" + blackColor + ";'><span style='background-color:" + blackColor + ";'>" + wordToChange1 + "</span></span>'";
    searchInInput2 = "value=\"<span style='color:" + blackColor + ";'><span style='background-color:" + blackColor + ";'>" + wordToChange1 + "</span></span>\"";
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput,"value='" + wordToChange1 + "'");
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput2,"value='" + wordToChange1 + "'");
}

for (let i = 0; i < purple.length; i++) {
    console.log(purple[i])
    let wordToChange1 = purple[i];
    var re = new RegExp(wordToChange1, "gi");
    var replaceWith = "<span style='color:" + purpleColor + ";'>$&</span>";
    var replaceWith1 = "<span style='background-color:" + purpleColor + ";'>$&</span>";
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith);
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith1);
    searchInInput = "value='<span style='color:" + purpleColor + ";'><span style='background-color:" + purpleColor + ";'>" + wordToChange1 + "</span></span>'";
    searchInInput2 = "value=\"<span style='color:" +purpleColor + ";'><span style='background-color:" + purpleColor + ";'>" + wordToChange1 + "</span></span>\"";
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput,"value='" + wordToChange1 + "'");
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput2,"value='" + wordToChange1 + "'");
}

for (let i = 0; i < yellow.length; i++) {
    console.log(yellow[i])
    let wordToChange1 = yellow[i];
    var re = new RegExp(wordToChange1, "gi");
    var replaceWith = "<span style='color:" + yellowColor + ";'>$&</span>";
    var replaceWith1 = "<span style='background-color:" + yellowColor + ";'>$&</span>";
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith);
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith1);
    searchInInput = "value='<span style='color:" + yellowColor + ";'><span style='background-color:" + yellowColor + ";'>" + wordToChange1 + "</span></span>'";
    searchInInput2 = "value=\"<span style='color:" +yellowColor + ";'><span style='background-color:" +  + yellowColor + ";'>" + wordToChange1 + "</span></span>\"";
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput,"value='" + wordToChange1 + "'");
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput2,"value='" + wordToChange1 + "'");
}

for (let i = 0; i < pink.length; i++) {
    console.log(pink[i])
    let wordToChange1 = pink[i];
    var re = new RegExp(wordToChange1, "gi");
    var replaceWith = "<span style='color:" + pinkColor + ";'>$&</span>";
    var replaceWith1 = "<span style='background-color:" + pinkColor + ";'>$&</span>";
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith);
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith1);
    searchInInput = "value='<span style='color:" + pinkColor + ";'><span style='background-color:" + pinkColor + ";'>" + wordToChange1 + "</span></span>'";
    searchInInput2 = "value=\"<span style='color:" + pinkColor + ";'><span style='background-color:" + pinkColor + ";'>" + wordToChange1 + "</span></span>\"";
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput,"value='" + wordToChange1 + "'");
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput2,"value='" + wordToChange1 + "'");
}

for (let i = 0; i < blue.length; i++) {
    console.log(blue[i])
    let wordToChange1 = blue[i];
    var re = new RegExp(wordToChange1, "gi");
    var replaceWith = "<span style='color:" + blueColor + ";'>$&</span>";
    var replaceWith1 = "<span style='background-color:" + blueColor + ";'>$&</span>";
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith);
    document.body.innerHTML = document.body.innerHTML.replace(re, replaceWith1);
    searchInInput = "value='<span style='color:" + blueColor + ";'><span style='background-color:" + blueColor + ";'>" + wordToChange1 + "</span></span>'";
    searchInInput2 = "value=\"<span style='color:" +blueColor + ";'><span style='background-color:" + blueColor + ";'>" + wordToChange1 + "</span></span>\"";
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput,"value='" + wordToChange1 + "'");
    document.body.innerHTML = document.body.innerHTML.replace(searchInInput2,"value='" + wordToChange1 + "'");
}