function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JoTkalbj9/',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);    
}
function gotResults(error,results)
{
    if (error) {
    console.error(error);
} else{
    console.log(results);
    random_number_r = Math.floor(Math.random()* 255) + 1;
    random_number_g = Math.floor(Math.random()* 255) + 1;
    random_number_b = Math.floor(Math.random()* 255) + 1;

    document.getElementById("result_label").innerHTML = 'i can hear - ' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


    img = document.getElementById("cat 1.jpg");
    img1 = document.getElementById("dog.png");
    img2 = document.getElementById("lion 2.png");

    if(results[0].label== "bark"){
       
        img.src = 'cat 1.jpg';
        img1.src = 'lion 2.png';
    }
    else if(results[0].label== "meowing"){
        img.src = 'dog.png';
       
        img1.src = 'lion 2.png';
    }
    else if(results[0].label== "roar"){
        img.src = 'dog.png';
        img1.src = 'cat 1.jpg';
        
    }
}

}