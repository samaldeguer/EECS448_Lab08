function makeChanges()
{
	var redBorder = document.getElementById("redBorder").value;
	var greenBorder = document.getElementById("greenBorder").value;
	var blueBorder = document.getElementById("blueBorder").value;
	var redBackground = document.getElementById("redBackground").value;
	var greenBackground = document.getElementById("greenBackground").value;
	var blueBackground = document.getElementById("blueBackground").value;
	var widthBorder = document.getElementById("widthBorder").value;
	document.getElementById("text").style.borderColor = "rgb(" + redBorder + "," + greenBorder + "," + blueBorder + ")";
	document.getElementById("text").style.borderWidth = widthBorder + "px";
	document.getElementById("text").style.backgroundColor = "rgb(" + redBackground + "," + greenBackground + "," + blueBackground + ")";
}
