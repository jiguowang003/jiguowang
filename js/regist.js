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
$.ajax({
    url:'http://localhost:3000/user/regist',
    type:"GET",
    dataType:"JSON",
    success: function(data){
       
    }
})
// var a=$(".a05");
// a.onclick=function(){
//     var  a1=$(".username").value;
//     var  a2=$(".userkey").value;
//     var a3=new XMLHttpRequest();
//     var isrc=a3.replace(/192.168.1.64/g,"192.168.31.148");
//     a3.open("POST",isrc);
//     var aa="act=reg&user"+a1+"&pass="+a2;
//     a3.send(aa);
//     a3.onload=function(){
//         if (a3.readyState==4 && a3.status==200) {
//             var a4=JSON.parse(a3.response);
//             alert(a4.msg);
//         }
//     }
// }