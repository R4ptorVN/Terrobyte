let StatusChange1 = 0;

function ChangeStatus()
{
    StatusChange1++;
    if(StatusChange1 == 51)
    {
        document.getElementById("Po").textContent =  `Oh no! Po is out of breathe!`;
        document.getElementById("change1").textContent = `Feed him some water!`;
    }
    else if(StatusChange1 > 51)
    {
        StatusChange1 = 0;
        document.getElementById("Po").textContent = `Woof Woof! x ${StatusChange1}`;
        document.getElementById("change1").textContent = `Bark!`;
    }
    else
    {
        document.getElementById("Po").textContent = `Woof Woof! x ${StatusChange1}`;
    }
}

function GetOption()
{
    const GameOutput = document.getElementById("gameoutput");
    const GameResult = document.getElementById("trbgame").value;    
    if(GameResult == "handsome")
        GameOutput.innerHTML = (`<img src = "images/ThumbsUp.png">`);
    if(GameResult == "unattractive")
        GameOutput.innerHTML = (`<img src = "images/Despair.png">`);
}

let Hobbies = [];
Hobbies.push(`<img src = "images/Billards.jpg">`);

let StatusChange2 = 0;

function SlideRight()
{
    StatusChange2++;
    if(StatusChange2 % 2 != 0)
        document.getElementById("Hobby").textContent = `Video Games`;
    else
        document.getElementById("Hobby").textContent = `Billards`;
}


