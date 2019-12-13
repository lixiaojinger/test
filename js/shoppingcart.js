$(function(){
	//点击添加购物车
	$('.see p').click(function(e){
		//显示隐藏
		$('.cart>img,.cart>p').hide()
		$('.alls').show()
		
		//添加到
		var tr = $('<tr><td><img src="images/pic02.png"></td><td>$(".see01>i:eq(2)")</td><td>$(".jia")</td><td>num</td><td>$(".sum")</td><td>X</td></tr>')
		
		$('.alls').append(tr)
	})
	
	
	
	
	
	
//清空浏览记录
	$('.see>span>a').click(function(){
		$('.seebox>span').hide()
		$('.seebox>b').show()
	})



})