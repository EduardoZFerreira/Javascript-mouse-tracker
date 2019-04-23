// JavaScript Document
	function readMouseMove(e)
	{
		var img = document.createElement("img");
		img.src = "Star.png";
		img.style.position = "absolute"; img.style.width = "50px"; img.style.height = "50px";
		img.style.left = e.clientX + "px";
		img.style.top = e.clientY + "px";
		document.appendChild(img);
	}
	document.onmousemove = readMouseMove;