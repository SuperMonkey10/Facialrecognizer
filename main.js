

Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("webcam");
Webcam.attach(camera);

function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='picture' src="+data_uri+">"
    })
}
console.log("ml5 version", ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LQ8qa7qW4/",modelloaded)

function modelloaded(){
    console.log("model loaded")
}






















