/**
 * Created by Administrator on 2015/9/9.
 */


function load(){

    var oLoad = document.getElementById('load');
    var canvas = document.getElementById('myCanvas'),ctx = canvas.getContext('2d');
    var step,startAngle,endAngle,add=Math.PI*2/loadingArr.length,number = 100/loadingArr.length;
    var percent = document.getElementById('percent');
    var aSpan = oLoad.getElementsByTagName('p')[0].getElementsByTagName('span');
    percent.innerHTML = '0';
    ctx.shadowOffsetX = 0; // 设置水平位移
    ctx.shadowOffsetY = 0; // 设置垂直位移
    ctx.shadowBlur = 10; // 设置模糊度
    ctx.lineWidth = 1.0;
    var counterClockwise = true;
    var x;
    var y;
    var radius;
    var varName;
    actiondo();
    var sjBox = oLoad.getElementsByClassName('sj-box');
    var num = 0;
    var oAudio = document.getElementById('audio');
    var aAudio = document.getElementsByTagName('audio');
    var button = oAudio.getElementsByTagName('div')[0];
    var oImg = button.getElementsByTagName('img')[0];
    var bOff;
    location.href.replace(/audio=(\D+)/,function($1,$2){

        bOff = $2=='true'? true : false;

    });



    //var imgNum = 0;
    //for( var i=0;i<loadingArr.length;i++){
    //    var img = document.createElement('img');
    //    img.src = loadingArr[i];
    //    img.onload = function(){
    //        imgNum ++ ;
    //        var num = Math.floor(((imgNum/loadingArr.length).toFixed(2)*100));
    //        s('load').style.width = num + '%';
    //        s('loadNum').innerHTML = num;
    //        if(imgNum == loadingArr.length){
    //            setTimeout(function(){
    //
    //                s('loading').style.display = 'none';
    //
    //            },20);
    //        }
    //    };
    //};

    oAudio.bOff = bOff || false;
    sound();
    oAudio.onclick = sound;
    function sound(){

        oAudio.bOff = !oAudio.bOff;
        for(var i=0; i<aAudio.length; i++){

            aAudio[i].muted = oAudio.bOff;

        }
        if(oAudio.bOff){

            button.style.webkitTransform = 'translate(0)';
            button.style.transform = 'translate(0)';
            oImg.src = 'images/icons/jingyin.png';

        }else{

            button.style.webkitTransform = 'translate(32px)';
            button.style.transform = 'translate(32px)';
            oImg.src = 'images/icons/bofang.png';

        }

    }
    aSpan[0].iTimer = setInterval(function(){

        aSpan[0].innerHTML = Number(aSpan[0].innerHTML) + 1;

    },1000);
    aSpan[1].iTimer = setInterval(function(){

        if(!(num%3)){

            aSpan[1].innerHTML = '.';

        }else{

            aSpan[1].innerHTML += '.';

        }
        num++;


    },400);
    for(var i=0; i<sjBox.length-1; i++){

        sjBox[i].angle = 0;
        sjBox[i].sign = 1;
        spin(sjBox[i]);

    }
    function spin(obj){

        obj.num = Math.round(Math.random()*100)+80;
        obj.sign = -obj.sign;
        obj.speed = Math.random()*2 + 1;
        obj.times = 0;
        obj.iTimer = setInterval(function(){

            obj.angle += obj.speed*obj.sign;
            obj.times += obj.speed*obj.sign;
            obj.style.webkitTransform = 'rotate('+ obj.angle +'deg)';
            obj.style.transform = 'rotate('+ obj.angle +'deg)';
            if(Math.abs(obj.times)>=obj.num){

                clearInterval(obj.iTimer);
                spin(obj);

            }

        },12);

    }

    function actiondo(){
        step=0;
        startAngle=270*Math.PI/180;
        ctx.strokeStyle = '#fbb84e';//圆圈颜色
        ctx.shadowColor = '#fbb84e'; // 设置阴影颜色
        //圆心位置
        x = 86;
        y = 86;
        radius = 57;
        for( var i=0;i<loadingArr.length;i++){
            var img = document.createElement('img');
            img.src = loadingArr[i];
            img.onload = function(){

                step++;
                endAngle = startAngle - add ;
                drawArc(startAngle, endAngle);
                startAngle = endAngle;
                percent.innerHTML = Math.round(step*number) + '';
                if(step == loadingArr.length) {
                    clearInterval(varName);
                    oLoad.style.opacity = 0;
                    setTimeout(function(){

                        oLoad.style.display = 'none';
                        for(var i=0; i<sjBox.length-1; i++){

                            clearInterval(sjBox[i].iTimer);

                        }
                        ground();
                        change();

                    },500);
                }

            };

        }
        //varName= setInterval(function(){
        //
        //    if (step <= loadingArr.length) {
        //        endAngle = startAngle - add ;
        //        drawArc(startAngle, endAngle);
        //        startAngle = endAngle;
        //        percent.innerHTML = Math.round(step*number) + '';
        //        step++;
        //    } else {
        //        clearInterval(varName);
        //        oLoad.style.opacity = 0;
        //        setTimeout(function(){
        //
        //            oLoad.style.display = 'none';
        //            for(var i=0; i<sjBox.length-1; i++){
        //
        //                clearInterval(sjBox[i].iTimer);
        //
        //            }
        //            ground();
        //            change();
        //
        //        },500);
        //    }
        //
        //}, animation_interval);
    }
    function drawArc(s, e) {
        ctx.beginPath();
        ctx.arc(x, y, radius, s, e, counterClockwise);
        ctx.lineWidth = 1.0;
        ctx.stroke();
    }

}
