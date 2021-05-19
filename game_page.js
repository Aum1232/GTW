var Player1name = localStorage.getItem("Player1_Username");
var Player2name = localStorage.getItem("Player2_Username");
Player1score = 0;
Player2score = 0;
document.getElementById("Player1name").innerHTML = Player1name + " : ";
document.getElementById("Player2name").innerHTML = Player2name + " : ";
document.getElementById("Player1score").innerHTML = Player1score;
document.getElementById("Player2score").innerHTML = Player2score;
document.getElementById("PlayerQuestion").innerHTML = "Question Turn - " + Player1name;
document.getElementById("PlayerAnswer").innerHTML = "Answer Turn - " + Player2name;
function Send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    charat1 = word.charAt(1);
    length = Math.floor(word.length/2);
    charat2 = word.charAt(length);
    length1 = length - 1;
    charat3 = word.charAt(length1);
    remove = word.replace(charat1, "_");
    remove1 = remove.replace(charat2, "_");
    remove2 = remove1.replace(charat3, "_");
    question_word = "<h4 id='word_display'> Q. "+remove2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row; 
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";
function check() {
    var getanswer = document.getElementById("input_check_box").value;
    lowercaseanswer = getanswer.toLowerCase();
    if(lowercaseanswer == word) {
        if(answer_turn == "player1") {
            Player1score = Player1score + 1;
            document.getElementById("Player1score").innerHTML = Player1score;
        }
        else {
            Player2score = Player2score + 1;
            document.getElementById("Player2score").innerHTML = Player2score;
        }
    }
    if(question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("PlayerQuestion").innerHTML = "Question Turn - " + Player2name;
    }
    else {
        question_turn = "player1";
        document.getElementById("PlayerQuestion").innerHTML = "Question Turn - " + Player1name;
    }
    if(answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("PlayerAnswer").innerHTML = "Answer Turn - " + Player2name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("PlayerAnswer").innerHTML = "Answer Turn - " + Player1name;
    }
    document.getElementById("output").innerHTML = "";
}
