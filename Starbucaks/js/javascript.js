function kucult() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function bilgilerigetir()
{
        var modal = document.getElementById("modal");
        modal.style.display = "block";
}
function btnfunction()
{
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}