function loadHome(){
	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('dark');
	console.log(myParam);
	if (myParam == "on" || localStorage.getItem("dark")==1) {
		console.log("Dark is 1");
		localStorage.setItem("dark",1);
		changeClassForBlackTheme("header");
		changeClassForBlackTheme("items");
		changeClassForBlackTheme("contentArea");
	}
	else if(myParam == null){
		window.localStorage.removeItem("dark");
		console.log("we hit the else part");
	}
}

function changeClassForBlackTheme(className){
	var elements = document.getElementsByClassName(className);
		for (var i = elements.length - 1; i >= 0; i--) {
			elements[i].classList.add('b'+className);
			elements[i].classList.remove(className);
		}
}