let statuschange1 = 0;
function ChangeStatus()
{
    statuschange1++;
    if(statuschange1 == 51)
    {
        document.getElementById("Po").textContent =  `Oh no! Po is out of breathe!`;
        document.getElementById("change1").textContent = `Feed him some water!`;
    }
    else if(statuschange1 > 51)
    {
        statuschange1 = 0;
        document.getElementById("Po").textContent = `Woof Woof! x ${statuschange1}`;
        document.getElementById("change1").textContent = `Bark!`;
    }
    else
    {
        document.getElementById("Po").textContent = `Woof Woof! x ${statuschange1}`;
    }
}

function GetOption()
{
    const gameoutput = document.getElementById("gameoutput");
    const gameresult = document.getElementById("trbgame").value;    
    if(gameresult == "handsome")
       gameoutput.innerHTML = (`<img src = "images/ThumbsUp.png">`);
    if(gameresult == "unattractive")
       gameoutput.innerHTML = (`<img src = "images/Despair.png">`);
}


