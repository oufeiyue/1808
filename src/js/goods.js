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