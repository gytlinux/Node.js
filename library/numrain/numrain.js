window.addEventListener("resize",canvassize);
function canvassize() {

var matrix=document.getElementById("matrix");
var context=matrix.getContext("2d");
var test=document.getElementById("test");


//matrix.height=window.innerHeight;
//matrix.width=window.innerWidth;

matrix.height=window.test.clientHeight;
matrix.width=window.test.clientWidth;

var drop=[];
var font_size=18;
var columns=matrix.width/font_size*2;
for(var i=0;i<columns;i++)
    drop[i]=[];
                                                             
    function drawMatrix(){
                                                                        
      context.fillStyle="rgb(255,255,255,0.1)"; 
      context.fillRect(0,0,matrix.width,matrix.height);
                                                 
      context.fillStyle="darkgreen";
      context.font=font_size+"px";
      for(var i=0;i<columns;i++) {
        if (drop[i].length === 0) drop[i].push(0);/*init or reset*/
           var len = drop[i].length;
           /*len<=num(origin:2) and matrix.height/num(origin:4) update speed*/
           if(len <= 24 && drop[i][len - 1]*font_size>(matrix.height/24) &&Math.random()>0.85) {/*add new node*/
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

setInterval(drawMatrix,66);


}

canvassize();



