// JavaScript Document
var element;
var hgt = window.innerHeight;
var wdt = window.innerWidth;
var startingX = (255 / 1366 ) * wdt; 
var endingX = (1050 / 1366 ) * wdt;
var startingY = (100 / 768 ) * hgt;
var endingY = (625 / 768 ) * hgt;
			function readMouseMove(e)
			{				 
				if((e.clientX > startingX) && (e.clientX < endingX) && (e.clientY > startingY) && (e.clientY < endingY))
				{
					var newDiv = document.createElement("div");
					var img = document.createElement("img");
					img.src = "oraoraora.png";
					img.style.position = "relative"; img.style.width = "50px"; img.style.height = "50px";
					newDiv.appendChild(img);
					element = document.getElementById("mainContainer");
					newDiv.style.position = "absolute";
					var randomX = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
					newDiv.style.left = e.clientX + randomX + "px";
					var randomY = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
					newDiv.style.top = e.clientY + randomY + "px"; newDiv.style.display = "block";
					element.appendChild(newDiv);
					var i = divCount
					divCount++;
					newDiv.id = "star" + divCount;
					$("#star" + divCount).fadeIn(200);
				}
				
			}
			document.onmousemove = readMouseMove;
			var divCount = 0;
			var removeCount = 1;
			var loop = setInterval(function()
				{
					var removeTgt = "star" + removeCount;
					var child = document.getElementById(removeTgt);
					if(child == undefined)
					{
						return;
					}
					else
					{
						$("#" + removeTgt).fadeOut(500);
						setTimeout(function(){element.removeChild(child);}, 600);
						removeCount++;
						
					}
				}, 10);