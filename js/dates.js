var DATES=(function(module){
	module.getDates = function(resultObject){
		
		var dt = new Date();
		var amtDates = document.getElementById('numDates').value;
		
		for(i=0;i<amtDates;i++){
			dt.setDate(dt.getDate() + 1);
			
			resultObject.prepend(dt + '<br>');
		}
	}
	
	return module;
}(DATES || {}));