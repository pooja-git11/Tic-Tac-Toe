var matrix = new Array(3);

function increasePoint(player) {
    if (player == "x") {
        var p1 = document.getElementById("player1");
        if (p1.innerHTML == "")
            p1.innerHTML = 1;
    
        else {
            var x = p1.innerHTML;
            p1.innerHTML = " ";
            p1.innerHTML = parseInt(x) + 1;
        }

    }
    else {
        var p2 = document.getElementById("player2");
        if (p2.innerHTML == "")
            p2.innerHTML = 1;
        else {
            var x = p2.innerHTML;
            p2.innerHTML = " ";
            p2.innerHTML = parseInt(x) + 1;
        }
    }
}


function check_row(ip) {
    for (var i = 0; i < 3; i++) {
        var count = 0;
        for (var j = 0; j < 3; j++) {
            if (matrix[i][j] == ip)
                count++;
        }
        if (count == 3) {
            alert("Player " + ip.toUpperCase() + " Won");
            increasePoint(ip);
            return true;
        }
    }
    return false;
}



function check_col(ip) {
    for (var i = 0; i < 3; i++) {
        var count = 0;
        for (var j = 0; j < 3; j++) {
            if (matrix[j][i] == ip)
                count++;
        }
        if (count == 3) {
            alert("Player " + ip.toUpperCase() + " Won");
            increasePoint(ip);
            return true;
        }
    }
    return false;
}


function check(ip) {
    var count = 0;
    for (var i = 0; i < 3; i++) {
        if (matrix[i][i] == ip)
            count++;
    }
    if (count == 3) {
        alert("Player " + ip.toUpperCase() + " Won");
        increasePoint(ip);
        return true;
    }
    count = 0;
    var col = 2;
    for (var i = 0; i < 3; i++) {
        if (matrix[i][col] == ip)
            count++;
        col--;
    }
    if (count == 3) {
        alert("Player " + ip.toUpperCase() + " Won");
        increasePoint(ip);
        return true;
    }

    return false;
}

function won(ip) {
    return (check_row(ip, matrix) || check_col(ip, matrix) || check(ip, matrix));
}



function play(prow) {
    var ip = prow.value;


    for (var i = 0; i < 3; i++) {
        matrix[i] = [];
    }
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var s = i.toString();
            s += j.toString();

            cid = document.getElementById(s);
            matrix[i][j] = cid.value;
        }

    }
    if (won(ip)) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {

                var s = i.toString();
                s += j.toString();
                document.getElementById(s).value = "";
                document.getElementById(s).disabled = false;
            }

        }

    }
    else {
        var count = 0;

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var s = i.toString();
                s += j.toString();

                if (document.getElementById(s).value != "")
                    count++;
            }

        }
        if (count == 9) {
            alert("Draw , Try Again !!");
            var p1 = document.getElementById("draw");
            if (p1.innerHTML == "")
                p1.innerHTML = 1;
            else {
                var x = p1.innerHTML;
                p1.innerHTML = "";
                p1.innerHTML = parseInt(x) + 1;
            }
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    var s = i.toString();
                    s += j.toString();
                    document.getElementById(s).value = "";
                    document.getElementById(s).disabled = false;
                }

            }
        }
        if (ip == "x")
            document.getElementById("playerturn").innerHTML = "o";
        else
            document.getElementById("playerturn").innerHTML = "x";
    }
}


function fill(symbol) {
    v = document.getElementById("playerturn").innerHTML;
    if (v == "x") {
        symbol.value = "x";
        document.getElementById(symbol.id).disabled = true;
    }
    else {
        symbol.value = "o";
        document.getElementById(symbol.id).disabled = true;

    }
    play(symbol);
}