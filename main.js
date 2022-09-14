Webcam.set({
    width: 600,
    height: 400,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takePicture() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='capturedImg' src='" + data_uri + "'/>";
    });
}

console.log("ML5 Version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-dyzZdmkh/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model loaded.");
}