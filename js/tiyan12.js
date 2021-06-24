$.ajax({
    url:'http://localhost:3000/useing/master',
    type:"GET",
    dataType:"JSON",
    success: function(data){
        console.log(data);
        var str = '';
        $.each(data,function(index,ele){
            var src=data[index].img;
            var isrc=src.replace(/192.168.1.64/g,"192.168.31.148")
            console.log(src)
            if(index<=15){
                str+=`
                <div class="top7">
                    <img src="${isrc}" alt="" width="225px">
                    <p>${data[index].text}</p> 
                    <span>${data[index].totalnum}</span>
                    <span>${data[index].num}台</span><br>
                    <p><a class="red">${data[index].apply}</a>申请</p>
                    <p>${data[index].info_ty}</p>
                    <span class="top8">体验师专享</span>
                </div>
                `;
            }
        })
        $(".top3").html(str);
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