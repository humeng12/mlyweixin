
function setInfo(key,value){
	
    var curTime = new Date().getTime();
    localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
}


function getInfo(key,exp){
	
    var data = localStorage.getItem(key);
    var dataObj = JSON.parse(data);
    
    if(exp != null)
    {
    	if (new Date().getTime() - dataObj.time > exp) {
    		return null;
	    }else{
	        var dataObjDatatoJson = JSON.parse(dataObj.data);
	        return dataObjDatatoJson;
	    }	
    }else{
    	
    	var dataObjDatatoJson = JSON.parse(dataObj.data);
	    return dataObjDatatoJson;
    }
}



function getQueryStringByName(name) {

	var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));

	if(result == null || result.length < 1) {
		return "";
	}
	return result[1];
}



function getNowFormatDate() {

	    var date = new Date();
	    var seperator1 = "-";
	    var seperator2 = ":";
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;

	    //" " + date.getHours() + seperator2 + date.getMinutes()
	            //+ seperator2 + date.getSeconds()

	    return currentdate;
}





var browser = {
	versions: function() {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		};
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

//alert("语言版本: " + browser.language);
//alert(" 是否为移动终端: " + browser.versions.mobile);
//alert(" ios终端: " + browser.versions.ios);
//alert(" android终端: " + browser.versions.android);
//alert(" 是否为iPhone: " + browser.versions.iPhone);
//alert(" 是否iPad: " + browser.versions.iPad);
//alert(navigator.userAgent);