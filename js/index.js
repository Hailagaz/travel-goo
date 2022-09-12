document.addEventListener("DOMContentLoaded", () => {
	if(window.location.hash) {
        document.querySelector(window.location.hash).scrollIntoView();
    }

	
});