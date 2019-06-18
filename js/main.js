var pList = new Array();
var newRec;
class Planets {
    constructor(planetName, planetColor, planetRadiusKM, fromSun, fromEarth,image) {
        this.planetName = planetName;
         this.planetColor = planetColor;
          this.planetRadiusKM = planetRadiusKM;
        this.fromSun = fromSun;
         this.fromEarth = fromEarth;
         this.image = image;
    }
}
$(document).ready(function(){
    $.ajax({
        type: "GET", url: "dataFiles/planets.json",
        dataType: "json", success: loadJSON,
        error: function (e) {
            alert(`${e.status} - ${e.statusText}`);
        }

});
});
function loadJSON(data) {
    console.log(data);
start = data.solarSystem.planets;
    for (let x = 0; x < start.length; x++) {
            newRec = new Planets(
                start[x].planetName,
                start[x].planetColor,
                start[x].planetRadiusKM,
                start[x].distInMillionsKM.fromSun,
                start[x].distInMillionsKM.fromEarth,
                start[x].image);

            pList.push(newRec);
        }
    console.log(pList);

    mainScreen(data);
} // end of loadJSON


function mainScreen(data) {
    $("#solarSystem").html(`Solar System`);

    $("#centerList").html("");
    for (x = 0; x < pList.length; x++) {
        $("#centerList").append(
    `

     <a li-id='${x}' href="abc.html"><nav >${pList[x].planetName} </nav></a>

    `
        );
    }


}