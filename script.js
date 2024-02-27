const change1btn = document.getElementById("change1");

let statuschange1 = 0;
change1btn.onclick = function()
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




