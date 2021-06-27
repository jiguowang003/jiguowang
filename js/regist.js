
$('.a04').click(function () {
    var s = 60
    t = setInterval(function () {
        s--
        $('.a04').val('请稍等' + s + "秒！");
        if (s == 0) {
            clearInterval(t)
            $('.a04').val('获取验证码');
        }
    }, 1000)
})
var inputI = $("input");
for(i=0 ; i<7; i++){
(function(i){
    inputI[i].onfocus=function(){
        inputI[i].style.color = "black";
        inputI[i].value ='';
    }
})(i)
}
inputI[0].onblur = function () {
    var tel =/^1[3|4|5|6|7|8|9]\d{9}$/g//手机号正则
    var value1 = inputI[0].value;
    if (tel.test(value1) == false) {
        $(this).val("请输入合适手机号！")
        $(this).css('color', 'red')
    }
}
// $('input').focus(function (index) {
//     console.log(index)
//     if (index < 7) {
//         $(this).css('color', '#000')
//         $(this).val('')
//     }
// })
inputI[1].onblur = function () {
    var value2 = inputI[1].value;
    if (value2 != "r2b7") {
        $(this).val("请输入合适校验码！")
        $(this).css('color', 'red')
    }
}
inputI[2].onblur = function () {
    var tel2 = /^[0-9]{4}$/
    var value3 = inputI[2].value;
    if (tel2.test(value3) == false) {
        $(this).val("请输入合适验证码！")
        $(this).css('color', 'red')
    }
}
inputI[4].onblur = function () {
    var tel3 =/^(\w|[\u4e00-\u9fa5]){4,8}$/g;
    var value4 = inputI[4].value;
    if (tel3.test(value4) == false) {
        $(this).val("请输入合适用户名！")
        $(this).css('color', 'red')
    }
}
inputI[5].onblur = function () {
    var tel4 = /^\w{6,12}$/g;
    var value5 = inputI[5].value;
    if (tel4.test(value5) == false) {
        $(this).val("请输入合适密码！6-12位")
        $(this).css('color', 'red')
    }
}
inputI[6].onblur = function () {
    if (inputI[5].value != inputI[6].value) {
        $(this).val("两次密码不一样")
        $(this).css('color', 'red')
    }
}
// 提交
$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        url: 'http://localhost:3000/users/register',
        type: 'POST',
        data: {
            phone: $('input').eq(0).val(),
            code: $('input').eq(1).val(),
            username: $('input').eq(4).val(),
            password: $('input').eq(5).val(),
        },
        dataType: 'JSON',
        success: function (a) {
            console.log(a.status)
            if (a.status == 200) {
                location.href = "./index.html"
            } else {
                alert(a.msg);
            }
        }
    })

})