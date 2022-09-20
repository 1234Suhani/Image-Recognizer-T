Webcam.set({
    width:340 , 
    height:350,
    image_format:'png',
    png_quality:90
})

var camera= document.getElementById("camera");
Webcam.attach('camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    })
}

console.log('ml5 version', ml5.version);
var classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded...");
}

function check(){
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
if(error) {
    console.log(error);}
    else{
        console.log(results);
        document.getElementById("result_obj_name").innerHTML=results[0].label;
        document.getElementById("result_obj_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
