player1_name = localStorage.getItem("player_1_name_key");

player2_name = localStorage.getItem("player_2_name_key");

player1_score = 0;

player2_score = 0;

question_turn = "p1";

answer_turn = "p2"

document.getElementById("player1_name").innerHTML = player1_name;

document.getElementById("player2_name").innerHTML = player2_name;

document.getElementById("player1_score").innerHTML = player1_score;

document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_q").innerHTML = "Question turn :" + player1_name;

document.getElementById("player_ans").innerHTML = "Answer turn :" + player2_name;

num1 = document.getElementById("number1").value; 

num2 = document.getElementById("number2").value;

function send() {
    
        number1 = document.getElementById("number1").value;

        number2 = document.getElementById("number2").value;

        actual_answer = parseInt(number1) * parseInt(number2);

        question_number = '<h4>' + number1 + " X " + number2 + '</h4>';

        input_box = '<br> Answer: <input type="text" id = "input_check_box">';

        check_button = '<br> <br> <button class = "btn btn-info" onclick = "check()"> Check </button>'

        row =  question_number + input_box + check_button ;

        document.getElementById("output").innerHTML = row;

        document.getElementById("number1").value = "";

        document.getElementById("number2").value = "";

    }



    function check() {

    user_answer = document.getElementById("input_check_box").value;

    

    if (user_answer == actual_answer) {

        window.alert("Your answer is correct");

        if (answer_turn == "p1") {


            player1_score = player1_score + 1;

            document.getElementById("player1_score").innerHTML = player1_score;

           

        } 
        else {

            player2_score = player2_score + 1;

            document.getElementById("player2_score").innerHTML = player2_score;

        }

    }

    if (question_turn == "p1") {

        question_turn = "p2";

        answer_turn = "p1";

        document.getElementById("player_q").innerHTML = "Question turn :" + player2_name;

        document.getElementById("player_ans").innerHTML = "Answer turn :" + player1_name;


    }
     else {


        question_turn = "p1";

        answer_turn = "p2";

        document.getElementById("player_q").innerHTML = "Question turn :" + player1_name;

        document.getElementById("player_ans").innerHTML = "Answer turn :" + player2_name;

    }

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";

    document.getElementById("number2").value = "";

    document.getElementById("output").innerHTML = "";

    }
