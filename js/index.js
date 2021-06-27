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
        console.log(data);
        $.each(data,function(index,ele){
            var src=data[index].img;
            var isrc=src.replace(/192.168.1.13/g,"localhost")
            if(index<8){
                str+=`
                <div class="boxB">
                    <img src="${isrc}" alt="" width="220px">
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
            var isrc=src.replace(/192.168.1.64/g,"localhost")
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
        var str = '';
        $.each(data,function(index,ele){
            if(index<8){
                var src=data[0][index].img;
                var isrc=src.replace(/192.168.1.64/g,"localhost")
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
                var isrc=src.replace(/192.168.1.64/g,"localhost")
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
                var isrc=src.replace(/192.168.1.64/g,"localhost")
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
                var isrc=src.replace(/192.168.1.64/g,"localhost")
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
// 轮播
var aa = document.querySelector('.lun>ul')
var bb = document.querySelector('.left')
var cc = document.querySelector('.right')
var ee = document.querySelector('.lun')
var dd = aa.children
var lia = 0
 
var t = setInterval(function(){
    lia++;
    if(lia == 5){
        lia = 0;
    setTimeout(() => {
        aa.style.transition = 'none'
        aa.style.marginLeft = 0 + 'px'
    })
    }
    aa.style.marginLeft = -250*lia + 'px'
},2000)




bb.onclick = function(){
    if( lia > 0){
        lia--;
        aa.style.transition = 'margin-left .5s'
        aa.style.marginLeft = -250*lia + 'px'
    }else if( lia == 0){
        lia = 0
        aa.style.transition = 'margin-left .5s' 
        aa.style.marginLeft = -250*lia + 'px'
        setTimeout(() => {
            aa.style.transition = 'none'
            aa.style.marginLeft = -2000 + 'px'
            lia = 8
        },500);
    }
    return false
}

cc.onclick = function (){
    if(lia < 8){
        lia++;
        aa.style.transition = 'margin-left .5s'
        aa.style.marginLeft = -250*lia + 'px'
    }else if(lia == 8){
        lia = 0;
        aa.style.transition = 'margin-left .5s'
        aa.style.marginLeft = -250*lia + 'px'
        setTimeout(() => {
            aa.style.transition = 'none'
            aa.style.marginLeft = 0 + 'px'
            lia = 0
        },500);
    }
    return false
}

$(function(){
    $.ajax({
        url:'http://localhost:3000/play/hot',
        type:'GET',
        dataType:'JSON',
        success:function (data){
            var shu = 0;
            var sindex = "";
            data[shu].map(function(item){
                var isrc = item.img.replace(/192.168.1.64/g,'localhost')
                sindex += `<li><img src="${isrc}" alt="">
                <div class="mu">${item.text}</div>
                <div><span class="hong">2032</span><span class="hong">20台</span></div>
                <div><a>1392</a>申请</div>
                <div class="chen">剩余时间两天</div>
                <div class="you">首发</div>`
            })
            $('article ul').html(sindex)
        }
    })
})
$(".jia").click(function(){
    $.ajax({
        url:'http://localhost:3000/useing/master',
        type:"GET",
        dataType:"JSON",
        success: function(data){
            var str = '';
            console.log(data);
            $.each(data,function(index,ele){
                var src=data[index].img;
                var isrc=src.replace(/192.168.1.13/g,"localhost")
                if(index<8){
                    str+=`
                    <div class="boxB">
                        <img src="${isrc}" alt="" width="220px">
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
            $(".jiazai").html(str);
        }
    })
})