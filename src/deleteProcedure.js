function deleteProcedure(e) {
	//console.log(e)
	var trClass = e.parentElement.classList.value;
	var cropName = trClass.split(';')[0];
	//console.log(cropName)
	var procedureIndex = Number(trClass.split(';')[1]);
	var srcTable = e.parentElement.parentElement;
	var trList = document.getElementsByClassName(trClass);
	var trArray = [];
	for (var i = 0; i < trList.length; i++) {
		trArray.push(trList[i]);
	}

	profile.get('crops').then(function (crops) {
		// delete procedure in profile information
		crops[cropName].procedures.splice(procedureIndex, 1);
		// delete previous entry
		for (var i = 0; i < trArray.length; i++) {
			srcTable.removeChild(trArray[i])
		}
		return profile.put(crops);
	});
}