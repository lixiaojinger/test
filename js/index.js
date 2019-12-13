 //swiper部分
 // 广告轮播图
 var mySwiper = new Swiper ('.swiper-container', {
	autoplay: {
		 delay: 2000,
		 stopOnLastSlide: false,
		 disableOnInteraction: true,
	 },
	// 分页器
	pagination: {
		 el: '.swiper-pagination',
		  clickable :true,
	},
	// 前进后退按钮
	navigation: {
		 nextEl: '.swiper-button-next',
		 prevEl: '.swiper-button-prev',
	}
})

//底部2类轮播图
var footerSwiper = new Swiper ('.footer_swiper', {
	slidesPerView: 2,
	autoplay: {
		 delay: 5000,
		 stopOnLastSlide: false,
		 disableOnInteraction: true,
	 },
	// 前进后退按钮
	navigation: {
		 nextEl: '.swiper-button-next',
		 prevEl: '.swiper-button-prev',
	}
})

//底部3类轮播图
var footerSwiper = new Swiper ('.back_swiper', {
	slidesPerView: 3,
	autoplay: {
		 delay: 2000,
		 stopOnLastSlide: false,
		 disableOnInteraction: true,
	 },
	pagination: {
		el: '.back_swiper_pag',
		clickable :true,
	},

})

//jquery部分
$(function(){

	//分类导航  隐藏部分
	$('.nav>div>h5').click(function(){
		$(".nav>div>h5+ul").eq($(".nav>div>h5").index(this)).show()
		$(".nav>div>h5+ul").eq($(".nav>div>h5").index(this)).siblings().hide(); 
	})
	$('.nav01 img').click(function(){
		$('.third').toggle('slow',function(){
			if($('.third').is(":visible")){
				this.show()
			}else{
				this.hide()
			}
		})
	})
	
	//头部
	$('.per>a:has(.hide01)').mouseenter(function(){
		$('.hide01').animate({'opacity':1},100)
	}).mouseleave(function(){
		$('.hide01').animate({'opacity':0},100)
	})
	$('.per>a:has(.hide02)').mouseenter(function(){
		$('.hide02').animate({'opacity':1},100)
	}).mouseleave(function(){
		$('.hide02').animate({'opacity':0},100)
	})
	$('.per>a:has(.hide03)').mouseenter(function(){
		$('.hide03').animate({'opacity':1},100)
	}).mouseleave(function(){
		$('.hide03').animate({'opacity':0},100)
	})
	
	//选择运动
	// var img = document.getElementsByClassName('none');
	// var movetxt = document.getElementsByClassName('movetxt');
	// $('.div01').on('mouseenter',function(){
	// 	img.style.display = 'none'
	// 	movetxt.style.display = 'block';
	// })

	var speed = 300;
	$('.imgbox1>div').mouseenter(function(){
		$('.imgbox1 img').animate({'opacity':0},speed)
		$('.movetxt').animate({'opacity':1,'marginTop':'-10px'},speed)
		$('.imgbox1 span').animate({'fontSize':'24px','marginTop':'-120px'},speed)
		this.style.backgroundColor = "#fafafa"
	}).mouseleave(function(){
		$('.imgbox1 img').animate({'opacity':1},speed)
		$('.movetxt').animate({'opacity':0,'marginTop':0},speed)
		$('.imgbox1 span').animate({'fontSize':'18px','marginTop':0},speed)
		this.style.backgroundColor = "#fff"
	})
	$('.movetxt a').mouseenter(function(){
		this.style.backgroundColor = "#f1f1f1"
	}).mouseleave(function(){
		this.style.backgroundColor = "#fafafa"
	})

	//点击切换页面
	$('.hide03>p').click(function(){
		window.location.href = "shoppingcart.html"
	})
	
	
	
	
	
	
	
})


