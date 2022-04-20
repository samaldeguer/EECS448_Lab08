var currentImage = 1;

function previous()
{
	document.getElementById(currentImage).style.display = 'none';
	if (currentImage == 1)
	{
		currentImage = 5;
	}
	else
	{
		currentImage = currentImage - 1;
	}
	document.getElementById(currentImage).style.display = 'block';
}

function next()
{
	document.getElementById(currentImage).style.display = 'none';
	if (currentImage == 5)
	{
		currentImage = 1;
	}
	else
	{
		currentImage = currentImage + 1;
	}
	document.getElementById(currentImage).style.display = 'block';

}
