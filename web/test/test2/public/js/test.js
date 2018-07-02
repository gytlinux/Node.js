
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
            url:'/test',
            type:'POST',
            dataType:'json',
            data:{
                id:1,
                title:"test",
                content:"this is a test!"

             },
             success:function(data){               
                console.log(data);
                //alert(data);
                if (data.code === 0){
                   $("#testtext").html("ok");
                }else{
                   $("#testtext").html("err");
                    
                    }
                },
             error:function(){
                console.log('error');
                alert("err");
                }
             })
        
        })
    

    })


