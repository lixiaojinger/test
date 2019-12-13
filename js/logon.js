var unameInp = document.querySelector("[type=text]");//用户名输入
	var pwInp = document.querySelector("[type=password]");//密码输入
	var loginBtn = document.querySelector('[type=button]');//登陆按钮
	var showBox = document.querySelector('.show');//显示登录结果的盒子
	loginBtn.onclick = ()=>{
		//用户名
		var uname = unameInp.value
		//密码
		var pw = pwInp.value;
		//请求后台接口,让后台页面帮我连接数据库,看看有没有这个用户,然后把查询结果返回给我:1表示成功,0表示失败
		//发ajax请求
		//初始化xhr对象
		var xhr = new XMLHttpRequest;
		//请求
		xhr.open('post','./logon.php');
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send(`username=${uname}&password=${pw}`);
		//响应
		xhr.onreadystatechange = function(){
			if(xhr.status==200&&xhr.readyState==4){
				if(xhr.responseText==1){
					//登陆成功
					showBox.innerHTML = `欢迎${uname}回来!`;
					loginBtn.parentNode.parentNode.style.display="none";
				}else{
					showBox.innerHTML = "用户名或者密码错误,请重新登陆";
					loginBtn.parentNode.parentNode.style.display="block";
				}
			}
		}
	}

	//2 如果该浏览器曾经登陆过,那么下次就可以不用输入用户名和密码直接通过cookie登陆	
	//发ajax请求
	//初始化xhr对象
	var xhr = new XMLHttpRequest;
	//请求
	xhr.open('get','./logon.php');	
	xhr.send(null);
	//响应
	xhr.onreadystatechange = function(){
		if(xhr.status==200&&xhr.readyState==4){
			if(xhr.responseText==1){
				//登陆成功
				showBox.innerHTML = `欢迎${decodeURIComponent(getCookie('name'))}回来!`;
				loginBtn.parentNode.parentNode.style.display="none";
			}
		}
	}
