var matrix=document.getElementById("matrix");
var title=document.getElementById("title");
var context=matrix.getContext("2d");
matrix.height=window.title.clientHeight;
matrix.width=window.title.clientWidth;
var drop=[];
var font_size=30;
var columns=matrix.width/font_size;
for(var i=0;i<columns;i++)
    drop[i]=1;
                                                                      
    function drawMatrix(){
             
      context.fillStyle="rgba(255, 255, 255, 0.3)"; 
      context.fillRect(0,0,matrix.width,matrix.height);
                                                        
      context.fillStyle="green";
      context.font=font_size+"px";
      for(var i=0;i<columns;i++){
        context.fillText(Math.floor(Math.random()*2),i*font_size,drop[i]*font_size);/*get 0 and 1*/
                                                    
      if(drop[i]*font_size>(matrix.height*2/3)&&Math.random()>0.85)/*reset*/
         drop[i]=0;
         drop[i]++;
      }
    }
    setInterval(drawMatrix,50); //循环时间间隔
























