使用方法：
	1.	需要安装node / mongoDB
	2.	使用npm install -S 安装依赖项
	3.	npm start  启动数据库
	4.	npm run dev  运行服务
	5.	在http://127.0.0.1:2777访问

功能： 登陆/注册/文件上传/简易微博(添加、删除、分页、点赞、踩)


用户登录/注册： /user/login   /user/register
	post  
		username: xxx
		password: xxx
	return
		code   0为成功
		msg	   提示信息
		userInfo (登录信息)


weibo
添加数据：  /weibo
	get
		act		add
		content	xxx
	return
		code   0为成功
		msg	   提示信息
		id		返回id
		time	返回时间戳

获取页码：  /weibo
	get
		act		get_page_count
		
	return
		code   0为成功
		msg	   提示信息
		count	页码

获取数据：  /api/weibo
	get
		act		get
		page	页码
	return
		数据数组
		若失败：
			code   错误码
			msg	   提示信息
		

点赞：  /api/weibo
	get
		act		like
		id		id
	return
		code   0为成功
		msg	   提示信息

踩：  /weibo
	get
		act		dislike
		id		id
	return
		code   0为成功
		msg	   提示信息

删除：   /weibo
	get
		act		del
		id		id
	return
		code   0为成功
		msg	   提示信息
