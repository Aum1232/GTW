function AddUser() {
    var Player1 = document.getElementById("player1username").value;
    var Player2 = document.getElementById("player2username").value;

    localStorage.setItem("Player1_Username", Player1);
    localStorage.setItem("Player2_Username", Player2);

    window.location = "game_page.html";
}