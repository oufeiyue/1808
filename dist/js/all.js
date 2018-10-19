var newsList = document.getElementById("newsList");
var news = document.getElementById("news");
var btnAdd = document.getElementById("btnAdd");

var newsArr = ['小明由于调戏女老师再次被滚粗教室','iPhone10发布,屏幕高度亮瞎了所有小伙伴','为了弘扬乐于助人的精神，中国人大开会决定授予老王“中国好邻居”称号'];
// 1.获取newsList显示框，遍历数组，将数组中的每一项渲染到显示框
render();
function render(){
    var str = '';
    str += newsArr.map(function(item){
        return '<li><a href="#">'+item+'</a></li>';
    }).join("")
    newsList.innerHTML = str;
}


//2.点击按钮，获取文本框的内容，推入数组。又执行渲染
btnAdd.onclick = function(){
    var _news = news.value;
    if(newsArr.length>=5){
        newsArr.pop();
    }
    newsArr.unshift(_news);
    render();
    // 清空文本框
    news.value="";
    // 光标聚焦
    news.focus();
}
window.onload=function(){
    var u1 = document.getElementById("u1");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var bao = document.getElementsByClassName('xiaoa');
    var goodsArr =[{
        date:"2011-12-10 08:00:00",
        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"144",
        savemoney:"30"},{
        date:"2011-8-10 08:00:00",
        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"164",
        savemoney:"30"},{
        date:"2000-8-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"134",
        savemoney:"30"},{
        date:"2013-8-10 08:00:00",
        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"154",
        savemoney:"30"},{
        date:"2014-8-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"126",
        savemoney:"30"},{
        date:"2015-8-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"535",
        savemoney:"30"},{
        date:"2111-8-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"167",
        savemoney:"30"},{
        date:"2017-8-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"333",
        savemoney:"30"},{
        date:"2018-8-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"775",
        savemoney:"30"},{
        date:"2019-8-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"475",
        savemoney:"30"},{
        date:"2020-8-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"555",
        savemoney:"30"},{
        date:"2000-1-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"666",
        savemoney:"30"},{
        date:"2022-8-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"886",
        savemoney:"30"},{
        date:"2023-8-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"543",
        savemoney:"30"},{
        date:"2008-8-15 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"122",
        savemoney:"30"},{
        date:"1999-8-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"560",
        savemoney:"30"},{
        date:"2006-2-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"987",
        savemoney:"30"},{
        date:"2003-10-10 08:00:00",

        img:"images/goods.png",
        name:"up down open sfrda efjds dfh dfh oitye...",
        price:"888",
        savemoney:"30"}]

        for(var i=0 ;i<goodsArr.length;i++){
            goodsArr[i].class = 'xiaoa';
            goodsArr[i].id = i;
        }

            var show1 = true;

        btn1.onclick = function(){
            for(var i=0;i<goodsArr.length;i++){
            var d = new Date(goodsArr[i].date);
            var cha = d.getTime();
            goodsArr[i].miao = cha;
            }
            if(show1){
                goodsArr.sort(function(a,b){
                return a.miao - b.miao;
            })
                show1 = !show1;
            }else if(!show1){
                goodsArr.sort(function(b,a){
                return a.miao - b.miao;
            })
                show1 = !show1;
            }
            
            jiage(goodsArr);
            tiao();
        }
    
    function jiage(goodsArr){
        var str='';
    str += goodsArr.map(function(item,idx){
       return '<li><a id='+item.id+' class='+item.class+' ><img src="'+item.img+'" ></a>'+
                        '<p>'+item.name+'</p>'+
                        '<span>USD'+item.price+'</span>'+
                        '<h4>SAVE USD'+item.savemoney+'</h4>'+
                        '<h5>wholesale</h5></li>';
    }).join("");  
    u1.innerHTML =str;
    }
    jiage(goodsArr);
    var show;

    btn2.onclick = function(){

        if(show){
            goodsArr.sort(function(a,b){
            return a.price - b.price;
        })
            show = !show;
        }else if(!show){
             goodsArr.sort(function(a,b){
            return b.price - a.price;
        })
             show = !show;
        }
        

        jiage(goodsArr);
            tiao();

    }
    tiao();
    function tiao(){
        for(var i =0;i<bao.length;i++){
        bao[i].onclick = function(){
            var obj =goodsArr[this.getAttribute("id")];
            var str='';
            for(var key in obj){
                str += key +"="+ obj[key] + "&";
            }
        location.href = "html/xiangqing.html?"+encodeURI(str);
        }
    }
    }
    
    
}