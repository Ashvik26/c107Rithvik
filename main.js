function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lSgocWJLZ/model.json",modelready);
}
function modelready() {}