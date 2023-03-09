function startClassification () {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/B0n-P3wBr/model.json", modelReady);
}
function modelReady () {
    console.log("model loaded");
    classifier.classify(gotResults);
}
function gotResults (error, results) {
    console.log("got results");
}