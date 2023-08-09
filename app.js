const videoElement = document.getElementById("video");
const button = document.getElementById("btn");

async function selectMediaStream() {

    try {

const captureStream = await navigator.mediaDevices.getDisplayMedia();
videoElement.srcObject = captureStream;
if(captureStream === true){
    console.log(' we got here')
}
videoElement.onloadedmetadata = function (){
videoElement.play();

}

    }
    catch(error){
        console.error(`Error: ${error}`)
       
    }
} 

selectMediaStream()

button.addEventListener('click', async ()=>{
button.disabled =true;

await videoElement.requestPictureInPicture();
button.disabled = false;


})




