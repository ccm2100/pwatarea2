var image = document.getElementById('myImage');
var originalImage = '../images/imagen1.png';
var hoverImage = '../images/imagen2.png';

image.addEventListener('mouseover', function() {
    image.src = hoverImage;
});

image.addEventListener('mouseout', function() {
    image.src = originalImage;
});
