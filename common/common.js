
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