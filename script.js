let StatusChange1 = 0;

function ChangeStatus()
{
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

let HobbiesImages = [];
HobbiesImages.push("images/Billards.jpg");
HobbiesImages.push("images/Gaming.png");
HobbiesImages.push("images/FigureCollecting.jpg");
HobbiesImages.push("images/ReadingMangaAndNovels.jpg");

let Hobbies = [];
Hobbies.push(`Billiards`);
Hobbies.push(`Gaming`);
Hobbies.push(`Figure Collecting`);
Hobbies.push(`Reading Light Novels`);

let StatusChange2 = 0;

function SlideRight()
{
    StatusChange2++;
    if(StatusChange2 >= Hobbies.length)
       StatusChange2 = 0;
    document.getElementById("Hobby").textContent = Hobbies[StatusChange2];
    document.getElementById("HobbiesImages").src = HobbiesImages[StatusChange2];
}

function SlideLeft()
{
    StatusChange2--;
    if(StatusChange2 < 0)
       StatusChange2 = Hobbies.length - 1;
    document.getElementById("Hobby").textContent = Hobbies[StatusChange2];
    document.getElementById("HobbiesImages").src = HobbiesImages[StatusChange2];
}


