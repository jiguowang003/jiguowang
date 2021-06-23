$.ajax({
    url:'http://localhost:3000/report/new',
    type:"GET",
    dataType:"JSON",
    success: function(data){
        console.log(data);
        var str = '';
        $.each(data,function(index,ele){
            var src=data[index].img;
            console.log(src)
            if(index<12){
                str+=`
                <div class="top7">
                    <img src="${src}" alt="" width="225px">
                    <p>${data[index].text}</p> 
                    <span>${data[index].totalnum}</span>
                    <span>${data[index].num}台</span><br>
                    <p><a class="red">${data[index].apply}</a>申请</p>
                    <p>${data[index].info_ty}</p>
                    <span class="top8">首发</span>
                </div>
                `;
            }
        })
        $(".top3").html(str);
    }
})


