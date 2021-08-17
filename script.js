const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

 


const image = new Image()
image.src = 'Certificate.jpg'
image.onload = function(){
      drawImage()

}

function drawImage(){
    ctx.drawImage(image, 0, 2,canvas.width,canvas.height)
    ctx.strokeStyle = "transparent";
    ctx.moveTo(550, 410);
    ctx.lineTo(550, 210);
    ctx.stroke();
    
    ctx.font = "115px Great Vibes"
    ctx.fillStyle='#00ff95'
    ctx.textAlign = "center"; 
    ctx.fillText(nameInput.value, 580, 440)
    
    
}
nameInput.addEventListener('input',function(){
    drawImage()
})



downloadBtn.addEventListener('click', function(){
   downloadBtn.href = canvas.toDataURL()
   downloadBtn.download = true
})
