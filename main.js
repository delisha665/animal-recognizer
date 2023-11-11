ears=document.getElementById("ears");

function start() {
ears.style.display="block";
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_WFtJwTI4/model.json",model_ready)
console.log("done")
}
function model_ready() {
    console.log("success");
    classifier.classify(gotResult)
}
function gotResult(error,result) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(result);
        r=Math.floor(Math.random()* 255)+1;
        g=Math.floor(Math.random() *255)+1;
        b=Math.floor(Math.random() * 255)+1;
        
        sound=result[0].label;
        accuracy=(result[0].confidence*100).toFixed(2) + "%";
        document.getElementById("sound").innerHTML="This is the sound of "+ sound;
        document.getElementById("accuracy").innerHTML=accuracy;
        if (accuracy>50) {
            document.getElementById("object").innerHTML="Error";
            document.getElementById("accuract").innerHTML="There is some problem coming in detecting your voice.Please try to speak more clearly and loudly";
        }    

        dog=document.getElementById("dog");
        cat=document.getElementById("cat");
        pig=document.getElementById("pig");
        sheep=document.getElementById("sheep");
        lion=document.getElementById("lion");

        if (sound=="Dog") {
            dog.style.display="block";
            cat.style.display="none";
            pig.style.display="none";
            lion.style.display="none";
            sheep.style.display="none";
            ears.style.display="none";
   if (accuracy>50) {
            document.getElementById("object").innerHTML="Error";
            document.getElementById("accuract").innerHTML="There is some problem coming in detecting your voice.Please try to speak more clearly and loudly";
        }    
        }
       else if(sound=="Cat") {
            cat.style.display="block";
            pig.style.display="none";
            lion.style.display="none";
            sheep.style.display="none";
dog.style.display="none";
ears.style.display="none";
if (accuracy>50) {
    document.getElementById("object").innerHTML="Error";
    document.getElementById("accuract").innerHTML="There is some problem coming in detecting your voice.Please try to speak more clearly and loudly";
}    
        }
       else if(sound=="Sheep") {
            sheep.style.display="block";
            cat.style.display="none";
            pig.style.display="none";
            lion.style.display="none";
            dog.style.display="none";
            ears.style.display="none";
            if (accuracy>50) {
                document.getElementById("object").innerHTML="Error";
                document.getElementById("accuract").innerHTML="There is some problem coming in detecting your voice.Please try to speak more clearly and loudly";
            }    


        }
       else if (sound=="Lion") {
            lion.style.display="block";
            cat.style.display="none";
            pig.style.display="none";
            sheep.style.display="none";
            dog.style.display="none";
            ears.style.display="none";

            if (accuracy>50) {
                document.getElementById("object").innerHTML="Error";
                document.getElementById("accuract").innerHTML="There is some problem coming in detecting your voice.Please try to speak more clearly and loudly";
            }    
        }
       else if(sound=="pig") {
            pig.style.display="block";
            cat.style.display="none";
            lion.style.display="none";
            sheep.style.display="none";
            dog.style.display="none";

            ears.style.display="none";

            if (accuracy>50) {
                document.getElementById("object").innerHTML="Error";
                document.getElementById("accuract").innerHTML="There is some problem coming in detecting your voice.Please try to speak more clearly and loudly";
            }    
        }
        else {
            document.getElementById("bg").style.display="block;"
            ears.style.display="none";
            cat.style.display="none";
            lion.style.display="none";
            sheep.style.display="none";
            dog.style.display="none";
            pig.style.display="none";
            ears.style.display="none";
            if (accuracy>50) {
                document.getElementById("object").innerHTML="Error";
                document.getElementById("accuract").innerHTML="There is some problem coming in detecting your voice.Please try to speak more clearly and loudly";
            }    
        }
    }
}