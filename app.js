var forward = 0;

function abc() {
    var character = document.getElementById('character');
    if (event.keyCode === 68 && forward < 1050) {
        forward = forward + 10;
        character.style.left = forward + 'px'
        character.src = 'Images/Player1-2.gif'
    }
    if (event.keyCode === 65 && forward > 10) {
        forward = forward - 10;
        character.style.left = forward + 'px'
        character.src = 'Images/Player1-2.gif'
    }

    if (event.keyCode === 32) {
        character.src = 'Images/Player1-3.gif'
        character.style.width = '250px'
        setTimeout(function () {
            character.src = 'Images/Player1-1.gif';
            character.style.width = '200px'

        }, 2000)
    }
}

window.onkeydown = abc;

// var forward2 = 1200;

// function foo() {
//     var character2 = document.getElementById('character2');
//     console.log (event.keyCode)
//     if (event.keyCode === 39) {
//         forward2 = forward2 + 10;
//         character2.style.left = forward2 + 'px'
//         character2.src = 'Images/Player3-2.gif'
//     }
//     if (event.keyCode === 37) {
//         forward2 = forward2 - 10;
//         character2.style.left = forward2 + 'px'
//         character2.src = 'Images/Player3-2.gif'
//     }

//     if (event.keyCode === 13) {
//         character2.src = 'Images/Player3-3.gif'
//         character2.style.width = '270px'
//         setTimeout(function () {
//             character2.src = 'Images/Player3-1.gif';
//             character2.style.width = '150px'

//         }, 2000)
//     }
// }

// window.onkeydown = foo;