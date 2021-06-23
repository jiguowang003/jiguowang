$(function(){
    $('.ding').animate({
            top:0,
            right:0,
            opacity:1
    },500)
})
$.ajax({
    url:'http://localhost:3000/useing/master',
    type:"GET",
    dataType:"JSON",
    success: function(data){
        var str = '';
        $.each(data,function(index,ele){
            var src=data[index].img;
            if(index<8){
                str+=`
                <div class="boxB">
                    <img src="${src}" alt="" width="220px">
                    <p>${data[index].text}</p> 
                    <div class="boxB1">
                    <span class="boxB2"></span>
                    <span>${data[index].uName}</span>
                    <img src="./img/jing.png" alt="" class="imgaa">
                    </div>
                </div>
                `;
            }
        })
        $(".baogao").html(str);
    }
})
$.ajax({
    url:'http://localhost:3000/guid/new',
    type:"GET",
    dataType:"JSON",
    success: function(data){
        var str = '';
        $.each(data,function(index,ele){
            var src=data[index].img;
            var isrc=src.replace(/192.168.1.64/g,"192.168.31.148")
            if(index<4){
                str+=`
                <div class="daoGoB">
                    <img src="${isrc}" alt="" width="220px">
                    <p>${data[index].text}</p> 
                    <div class="boxB1">
                    <img src="./img/jing.png" alt="" class="imgaa">
                    </div>
                </div>
                `;
            }
        })
        $(".daoGo").html(str);
    }
})
$.ajax({
    url:'http://localhost:3000/play/new',
    type:"GET",
    dataType:"JSON",
    success: function(data){
        console.log(data);
        var str = '';
        $.each(data,function(index,ele){
            if(index<8){
                var src=data[0][index].img;
                var isrc=src.replace(/192.168.1.64/g,"192.168.31.148")
                console.log(src)
                str+=`
                <div class="kuWanB">
                    <img src="${isrc}" alt="" width="220px">
                    <p>${data[0][index].text}</p> 
                    <div class="boxB1">
                    <span class="kuwanB">${data[0][index].price}</span>
                    <img src="./img/jing.png" alt="" class="imgaa">
                    </div>
                </div>
                `;
            }    
        })
        $.each(data,function(index,ele){
            if(index<8){
                var src=data[1][index].img;
                var isrc=src.replace(/192.168.1.64/g,"192.168.31.148")
                console.log(src)
                str+=`
                <div class="kuWanB">
                    <img src="${isrc}" alt="" width="220px">
                    <p>${data[1][index].text}</p> 
                    <p class="kuWan1">${data[0][index].description}</p>
                    <div class="boxB1">
                    <span class="kuwanB">${data[1][index].price}</span>
                    <img src="./img/jing.png" alt="" class="imgaa">
                    </div>
                </div>
                `;
            }    
        })
        $(".kuwan").html(str);
        $.each(data,function(index,ele){
            if(index<8){
                var src=data[1][index].img;
                var isrc=src.replace(/192.168.1.64/g,"192.168.31.148")
                console.log(src)
                str+=`
                <div class="kuWanB">
                    <img src="${isrc}" alt="" width="220px">
                    <p>${data[1][index].text}</p> 
                    <p class="kuWan1">${data[1][index].description}</p>
                    <div class="boxB1">
                    <span class="kuwanB">${data[1][index].price}</span>
                    <img src="./img/jing.png" alt="" class="imgaa">
                    </div>
                </div>
                `;
            }    
        })
        $(".kuwan").html(str);
        $.each(data,function(index,ele){
            if(index<8){
                var src=data[2][index].img;
                var isrc=src.replace(/192.168.1.64/g,"192.168.31.148")
                console.log(src)
                str+=`
                <div class="kuWanB">
                    <img src="${isrc}" alt="" width="220px">
                    <p>${data[2][index].text}</p> 
                    <p class="kuWan1">${data[2][index].description}</p>
                    <div class="boxB1">
                    <span class="kuwanB">${data[2][index].price}</span>
                    <img src="./img/jing.png" alt="" class="imgaa">
                    </div>
                </div>
                `;
            }    
        })
        $(".kuwan").html(str);
    }
})