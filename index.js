let newbtn = document.querySelector(".new");
let rebtn = document.querySelector(".reset");
let boxes = document.querySelectorAll(".box");
let mess = document.querySelector(".head");
let msg = document.querySelector(".winmsg");
let turnO = true;

let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let c=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
            c++;
        } else {
            box.innerText = "X";
            turnO = true;
            c++;
        }
        box.disabled = true;
        draw();
        cheakwinner();

    });
});


let cheakwinner = () => {
    for (let patterns of winpatterns) {
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3)
                showwinner(pos1);

        }
    }
}
let showwinner = (winner) => {
    msg.innerText = `Congratualtions Player ${winner} You Won`;
    mess.classList.remove("hide");
    disablebtn();
}
let disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
        c=0;
    }
}
let enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = " ";
        c=0;
    }
}

let resetgame = () => {
    turnO = true;
    enablebtn();
    mess.classList.add("hide");
}
newbtn.addEventListener("click", resetgame);
rebtn.addEventListener("click", resetgame);

let draw=()=>{
if(c===9){
    msg.innerText= `The Game Is Tied!!`;
    mess.classList.remove("hide");
    disablebtn();
}
}


