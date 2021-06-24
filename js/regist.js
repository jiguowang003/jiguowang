$('.a04').click(function(){
    var s = 60
    t=setInterval(function(){
        s--
        $('.a04').val('请稍等'+s+"秒！");
        if(s==0){
            clearInterval(t)
            $('.a04').val('获取验证码');
        }
    },1000);
})
var inputI=$("input");
console.log(inputI)
inputI[0].onfocus;
inputI[0].onblur=function(){
    var tel = /^1[3|4|5|7|8]\d{9}$/ //手机号正则
    var value1=inputI[0].value;
    if(tel.test(value1)==false){
        alert("请输入合适手机号！")
    }
}
inputI[1].onblur=function(){
    var jiao=$(".a02>span").html();
    var value2=inputI[1].value;
    if( jiao!=value2){
        alert("请输入合适校验码！")
    }
}
inputI[2].onblur=function(){
    var tel2 = /^[0-9]{4}$/
    var value3=inputI[2].value;
    if(tel2.test(value3)==false){
        alert("请输入合适验证码！")
    }
}
inputI[4].onblur=function(){
    var tel3 = /^[0-9a-zA-Z]{6,12}$/
    var value4=inputI[4].value;
    if(tel3.test(value4)==false){
        alert("请输入合适用户名！")
    }
}
inputI[5].onblur=function(){
    var tel4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    // var tel4=/[0-9]{4,8}/
    var value5=inputI[5].value;
    console.log(value5)
    if(tel4.test(value5)==false){
        alert("请输入合适密码！")
    }
}
inputI[6].onblur=function(){
    // 至少8个字符，至少1个字母，1个数字和1个特殊字符
    var tel1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ 
    console.log(inputI[6].value)
    if(inputI[5].value!=inputI[6].value){
        alert("两次密码不一样")
    }
}