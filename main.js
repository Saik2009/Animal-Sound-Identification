//https://teachablemachine.withgoogle.com/models/DIErViiyT/
function findsound(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DIErViiyT/model.json',modelready);

}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;

        document.getElementById("detecteda").innerHTML="I can hear - "+results[0].label;
        document.getElementById("dectectedv").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("dectecteda").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("dectectedv").style.color="rgb("+r+","+g+","+b+")";
        img1=document.getElementById("ear");
        

        if(results[0].label=="Lion Roaring")
        {
            img1.src="lion.png"
            
        }
        else if(results[0].label=="Dog Barking")
        {
            img1.src="dog.png"
          
        }
        else if(results[0].label=="Cow Mooing")
        {
            img1.src="cow.png"
           
        }
        else
        {
            img1.src="Ear.png"
            
        }
    }
}