function loadHome(){
	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('dark');
	if (myParam == "on" || localStorage.getItem("dark")==1) {
		localStorage.setItem("dark",1);
		changeClassForBlackTheme("logoDiv");
		changeClassForBlackTheme("logo");
		changeClassForBlackTheme("mainDiv");
	}
	else{
		localStorage.removeItem("dark");
	}
}

function changeClassForBlackTheme(className){
	var elements = document.getElementsByClassName(className);
		for (var i = elements.length - 1; i >= 0; i--) {
			elements[i].classList.add('b'+className);
			elements[i].classList.remove(className);
		}
}