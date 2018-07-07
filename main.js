let mainArray = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
];

function setPlace() {
    let startNumbers = [21, 4];
    let randomPlace;
    let randomPlace1;

    function generate() {

        randomPlace = Math.round(Math.random() * 3);
        randomPlace1 = Math.round(Math.random() * 3);
        return [randomPlace, randomPlace1];
    }
    generate();

    if (mainArray[randomPlace][randomPlace1] == null) {
        mainArray[randomPlace][randomPlace1] = startNumbers[Math.round(Math.random())];
    } else {
        generate();
        mainArray[randomPlace][randomPlace1] = startNumbers[Math.round(Math.random())];
    }
}

setPlace();
setPlace();


function buidHtml () {

    let tr = '';
    let td = '';

    for (let i = 0; i < mainArray.length; i++) {
        for (let n = 0; n < mainArray.length; n++) {
            if (mainArray[i][n] == null) {
                td += '<td>&nbsp;</td>';
            } else {
                td += '<td>' + mainArray[i][n] + '</td>';
            }
        }
        tr += '<tr>' + td + '</tr>';
        document.getElementById('game-table').innerHTML = tr;
        td = '';
    }
}

buidHtml();

let vert1 = [mainArray[0][0], mainArray[1][0], mainArray[2][0], mainArray[3][0],];

let vert2 = [mainArray[0][1], mainArray[1][1], mainArray[2][1], mainArray[3][1],];

let vert3 = [mainArray[0][2], mainArray[1][2], mainArray[2][2], mainArray[3][2],];

let vert4 = [mainArray[0][3], mainArray[1][3], mainArray[2][3], mainArray[3][3],];

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            alert('left');
            break;
        case 38:
            alert('up');
            break;
        case 39:
            alert('right');
            break;
        case 40:
            if (vert1[3] == null && vert1[2] !== null){
               vert1[3] = vert1[2];
               buidHtml();
            }

            if (vert2[3] == null && vert2[2] !== null){
                vert2[3] = vert2[2];
                buidHtml();
            }

            if (vert3[3] == null && vert3[2] !== null){
                vert3[3] = vert3[2];
                buidHtml();
            }

            if (vert4[3] == null && vert4[2] !== null){
                vert4[3] = vert4[2];
            }

            setPlace();
            buidHtml();
            break;
    }
};





