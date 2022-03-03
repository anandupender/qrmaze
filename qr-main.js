var padding = 10;
var baseURL = "https://theqrmaze.netlify.app/arrow?direction=";

var targetX;
var targetY;

function createMaze(dimension){
    var width = window.innerWidth/dimension - padding;
    var height = window.innerHeight/dimension - padding;
    var qrSize = height;
    if (width < height){
        qrSize = width
    }

    targetX = Math.floor(Math.random() * dimension);
    targetY = Math.floor(Math.random() * dimension);
    console.log("x: " + targetX + ", y: " + targetY);

    for(var i = 0; i < dimension; i++){
        var newRow = document.createElement("div");
        newRow.classList = ["row"];
        document.body.appendChild(newRow);
        for(var j = 0; j < dimension; j++){
            var newQR = document.createElement("div");
            var myText = baseURL;
            newQR.style.marginRight = padding + "px";
            newQR.style.marginBottom = padding + "px";

            if(i - targetY > 0){
                if(j - targetX > 0){
                    //up left
                    myText+="northwest";
                }else if (j - targetX < 0){
                    //up right
                    myText+="northeast";
                }else{
                    //up
                    myText+="north";
                }
            }else if(i - targetY < 0){
                if(j - targetX > 0){
                    //down left
                    myText+="southwest"
                }else if (j - targetX < 0){
                    //down right
                    myText+="southeast"
                }else{
                    //down
                    myText+="south"
                }
            }else{
                if(j - targetX > 0){
                    //left
                    myText+="west"
                }else if (j - targetX < 0){
                    //right
                    myText+="east"
                }else{
                    //WIN
                    myText+="win"
                }
            }

            newRow.appendChild(newQR);
            new QRCode(newQR, {
                text:myText,
                width: qrSize,
                height: qrSize
            });

        }
    }
}

function clearDOM(){
    document.body.innerHTML = "";
}

createMaze(6);
