let boxes = document.querySelectorAll("#boxe");
let change = true;

const winpatterns = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,5,10,15],
    [3,6,9,12]
];

 boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        
        
        if(change === true)
        {
            box.innerText="X";
            change = false;
        }
        else
            {
            box.innerText="O";
            change = true;
        }
        box.disabled = true;
        
        checkwinner();     
    })
})

const checkwinner = () =>{

    for(let pattern of winpatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        let pos4 = boxes[pattern[3]].innerText;

        if(pos1!="" && pos2!="" && pos3!="" &&
            pos4!="")
            {
                if(pos1===pos2 &&
                   pos2===pos3 &&
                   pos3===pos4)
                   {
                    let result = document.getElementById("win");
                    result.innerText="Congratulations "+pos1+" has won the Match";
                   }
            }
    }
}

let resett = document.getElementById("re");

 resett.addEventListener("click",function()
    {
          
        location.reload();
    })
