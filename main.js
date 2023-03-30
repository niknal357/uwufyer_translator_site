function* pseudoRandom(seed) {
    let value = seed;

    while (true) {
        value = value * 16807 % 2147483647
        yield value;
    }

};

function uwuafy(text) {
    let generator = pseudoRandom(1);
    var replacedText = "";
    const uwus = ['uwu', 'owo', 'nya', '>w<'];
    for (var k = 0; k < text.length; k++) {
        generator.next()
        var currentChar = text.charAt(k);
        var previousChar = "";
        if (k > 0) {
            previousChar = text.charAt(k - 1);
        }
        if (currentChar == 'L' || currentChar == 'R' || currentChar == 'V') {
            replacedText += 'W';
        } else if (currentChar == 'l' || currentChar == 'r' || currentChar == 'v') {
            replacedText += 'w';
        } else if (currentChar == 'O') {
            if (previousChar == 'N' || previousChar == 'M') {
                replacedText += 'YO';
            } else if (previousChar == 'n' || previousChar == 'm') {
                replacedText += 'yO';
            } else {
                replacedText += currentChar;
            }
        } else if (currentChar == 'o') {
            if (previousChar == 'N' || previousChar == 'M') {
                replacedText += 'yo';
            } else if (previousChar == 'n' || previousChar == 'm') {
                replacedText += 'yo';
            } else {
                replacedText += currentChar;
            }
        } else if (currentChar == 'A') {
            if (previousChar == 'N' || previousChar == 'M') {
                replacedText += 'YA';
            } else if (previousChar == 'n' || previousChar == 'm') {
                replacedText += 'yA';
            } else {
                replacedText += currentChar;
            }
        } else if (currentChar == 'a') {
            if (previousChar == 'N' || previousChar == 'M') {
                replacedText += 'ya';
            } else if (previousChar == 'n' || previousChar == 'm') {
                replacedText += 'ya';
            } else {
                replacedText += currentChar;
            }
        } else if (currentChar == '.') {
            a = 0;
        } else if (currentChar == ' ' && previousChar == '.') {
            replacedText += ' ' + uwus[generator.next().value % uwus.length] + '. ';
        } else if (currentChar != ' ' && previousChar == '.') {
            replacedText += '.' + currentChar;
        } else {
            replacedText += currentChar;
        }
    }
    return replacedText;
}
var prev = "";
setInterval(() => {
    if (document.getElementById("inputtextbox").innerHTML + " " != prev) {
        document.getElementById("uwutextbox").innerHTML = uwuafy((document.getElementById("inputtextbox").innerHTML + " ").replace("<div>", "<__di__>").replace("</div>", "<__/di__>")).trim().replace("<__di__>", "<div>").replace("<__/di__>", "</div>");
        prev = document.getElementById("inputtextbox").innerHTML + " ";
    }
}, 10)

function copyTranslationToClipboard() {
    var copyText = document.getElementById("uwutextbox");
    navigator.clipboard.writeText(copyText.innerText);
}