window.addEventListener("resize",canvassize);
function canvassize() {

var matrix=document.getElementById("matrix");
var context=matrix.getContext("2d");

matrix.height=window.innerHeight;
matrix.width=window.innerWidth;

var drop=[];
var font_size=16;
var columns=matrix.width/font_size*2;
for(var i=0;i<columns;i++)
    drop[i]=[];
                                                             
    function drawMatrix(){
                                                                        
      context.fillStyle="rgba(0, 0, 0, 0.1)"; 
      context.fillRect(0,0,matrix.width,matrix.height);
                                                 
      context.fillStyle="green";
      context.font=font_size+"px";
      for(var i=0;i<columns;i++) {
        if (drop[i].length === 0) drop[i].push(0);/*init or reset*/
           var len = drop[i].length;
           if(len <= 2 && drop[i][len - 1]*font_size>(matrix.height/4) &&Math.random()>0.6) {/*add new node*/
              drop[i].push(0);
           } else if(drop[i][0]*font_size>(matrix.height)) {/*remove useless node*/
              drop[i].shift();
           }
           len = drop[i].length;
           for(var j=0;j<len;j++){
              context.fillText(Math.floor(Math.random()*2),i*font_size,drop[i][j]*font_size);/*get 0 and 1*/
              drop[i][j]++;
          }
       }
}

setInterval(drawMatrix,40);


}

canvassize();



