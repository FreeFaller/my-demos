/* *
  * 基于固定宽度的浮动定位的瀑布流
  * 滚动加载数据
*/
var WaterFull = {
    $:function(id){return document.getElementById(id);},
    // 每次滚动需要加载的数据，可以用ajax替代读取，每次分批加载
    data:[{imgUrl:'images/01.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位01'},
          {imgUrl:'images/02.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位02'},
          {imgUrl:'images/03.jpg',link:'javascript:void(0)',title:'好JB gay！'},
          {imgUrl:'images/04.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位04'},
          {imgUrl:'images/05.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位05'},
          {imgUrl:'images/06.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位06'},
          {imgUrl:'images/07.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位07'},
          {imgUrl:'images/08.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位08'},
          {imgUrl:'images/09.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位09'},
          {imgUrl:'images/10.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位10'},
          {imgUrl:'images/11.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位11'},
          {imgUrl:'images/12.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位12'},
          {imgUrl:'images/13.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位13'},
          {imgUrl:'images/14.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位14'},
          {imgUrl:'images/15.jpg',link:'javascript:void(0)',title:'迅哥儿'},
          {imgUrl:'images/16.jpg',link:'javascript:void(0)',title:'瀑布流浮动定位16'},
          ],
    createChild:function(link,imagesUrl,title){
        var str = '<a href="' + link + '"><img src="' + imagesUrl + '"></a>' + '<p class="title">' + title + '</p>';
        var div = document.createElement('div');
        div.className = 'water';
        div.innerHTML = str; 
        return div;
    },
    //绑定事件
    on:function(element, type, func) {
        if (element.addEventListener) {
            element.addEventListener(type, func, false); //false 表示冒泡
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, func);
        } else {
            element['on' + type] = func;
        }
    },
    //获取列高度，返回数组，从小到大排序
    getRowByHeight:function(){
        var row = [this.$('row1'),this.$('row2'),this.$('row3'),this.$('row4')];
        var height = [];
        for(var i = 0;row[i];i++){
            row[i].height = row[i].offsetHeight;
            height.push(row[i]);
        }
        // 对高度进行排序，从低到高,保证最矮的优先加载
        height.sort(function(a,b){
            return a.height - b.height;
        });
        return height;
    },
    //获取页面总高度（总高度 = 卷去高度 + 可视区域高度）
    getPageHeight:function(){
        return document.documentElement.scrollHeight || document.body.scrollHeight ;
    },
    // 获取页面卷去的高度
    getScrollTop:function(){
        return document.documentElement.scrollTop || document.body.scrollTop;
    },
    // 获取页面可视区域高度
    getClientHeigth:function(){
        return document.documentElement.clientHeight || document.body.clientHeight;
    },
    append:function(){
        var i = 0,rows = this.getRowByHeight(),div,k;
        for(;this.data[i];i++){
            div = this.createChild(this.data[i].link, this.data[i].imgUrl,this.data[i].title);
            // 因为是4列，所以数据以4列一个轮回加载
            k = ((i+1)>4)?i%4:i;            
			// 在列上添加数据
			rows[k].appendChild(div);
        }
    },
	onScroll:function(){
        // 获取高度等数据
        var height = WaterFull.getPageHeight();
        var scrollTop = WaterFull.getScrollTop();
        var clientHeight = WaterFull.getClientHeigth();
        // 如果滚动到最底部，就加载
        if(scrollTop + clientHeight > height - 50){
            WaterFull.append();
        }
    },
    timer:null
};
WaterFull.on(window, 'scroll',function(){
    clearTimeout( WaterFull.timer ); //清除上一次，性能优化
    WaterFull.timer = setTimeout(WaterFull.onScroll,500);
});