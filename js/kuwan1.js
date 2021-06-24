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
                    <img src="../img/jing.png" alt="" class="imgaa">
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
                    <img src="../img/jing.png" alt="" class="imgaa">
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
                    <img src="../img/jing.png" alt="" class="imgaa">
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
                    <img src="../img/jing.png" alt="" class="imgaa">
                    </div>
                </div>
                `;
            }    
        })
        $(".kuwan").html(str);
                var top7A=$(".top7");
        console.log(top7A)
        for (var i = 0; i < top7A.length; i++) {
            if (i % 1 == 1) {
                $(top7A[i]).find('span').css({
                    color: '#6FC14B',
                    border:'1px solid #6FC14B'
                })
                $(top7A[i]).find('.lis1_p3').css({
                    color: '#6FC14B',
                })
            }else if (i % 2 == 1) {
                $(top7A[i]).find('span').css({
                    color: 'pink',
                    border:'1px solid pink'
                })
                $(top7A[i]).find('.lis1_p3').css({
                    color: 'pink',
                })
            }else if (i % 3 == 1) {
                $(top7A[i]).find('span').css({
                    color: 'skyblue',
                    border:'1px solid skyblue'
                })
                $(top7A[i]).find('.lis1_p3').css({
                    color: 'skyblue',
                })
            }else{
                $(top7A[i]).find('span').css({
                    color: 'green',
                    border:'1px solid green'
                })
                $(top7A[i]).find('.lis1_p3').css({
                    color: 'green',
                })
            }
        }
    }
})