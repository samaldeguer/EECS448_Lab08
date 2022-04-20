var images = ["IMG_0441.png", "IMG_0442.png", "IMG_0443.png", "IMG_0444.png", "IMG_0445.png"];
var currentImage = 0;
var imageTag = document.getElementById("image");
imageTag.src = images[0];

function previous()
{
	if (currentImage == 0)
	{
		currentImage = 4;
	}
	else
	{
		currentImage = currentImage - 1;
	}
	imageTag.src = images[currentImage];
}

function next()
{
	if (currentImage == 4)
	{
		currentImage = 0;
	}
	else
	{
		currentImage = currentImage + 1;
	}
	imageTag.src = images[currentImage];

}
