// ------------Main task------------


function changeImage() {
    var image = document.getElementById('logo');
    image.src = 'images/js.png'; // Replace 'new_image.jpg' with the path of the new image
}

var imageArray = [
    'images/js.png',
    'images/csharp.png',
    'images/cpp-icon.png',
]

var currentIndex = 0;

function changeImageWithLoop() {
    var image = document.getElementById('logo');
    currentIndex = (currentIndex + 1) % imageArray.length;
    image.src = imageArray[currentIndex];
}



// -------------------Complamentary task-------------------

function navigateForward() {
    var image = document.getElementById('logo');
    currentIndex = (currentIndex + 1) % imageArray.length;
    image.src = imageArray[currentIndex];
}


function navigateBackward() {
    var image = document.getElementById('logo');
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    image.src = imageArray[currentIndex];
}