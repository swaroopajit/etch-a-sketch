document.getElementById("load").onclick = function(){load()};

function load() {
    let sizeInp = document.getElementById("size");
    var size = sizeInp.value;
    const myNode = document.getElementById("main");
    myNode.innerHTML = '';
    for(var i=0;i<size;i++){ 
        var div = document.createElement("div");
        div.style.width = size*50 + "px"
        div.style.height = "50px"
        div.id = "sub." + i
        div.className = "flex-container"
        document.getElementById("main").appendChild(div);

        for(var j=0;j<size;j++){
            var sub = document.createElement("div");
            sub.style.width = "50px";
            sub.style.height = "50px";
            sub.id = "grid."+i+"."+j
            document.getElementById("sub."+i).appendChild(sub);
        }
    }

    for(var i=0;i<size;i++){
        for(var j=0;j<size;j++){
            let sub = document.getElementById("grid."+i+"."+j);
            sub.addEventListener("mouseenter", function( event ) {
                // highlight the mouseenter target
                sub.style.background = "black";
              }, false);
        }
    }
}

function checkSize(val){
    if(Number(val.value)>100){
        val.value=100;
    }
}