const imageUpload = document.getElementById('image-upload');

const topTextInput = document.getElementById('topText');
const centerTextInput = document.getElementById('centerText');
const bottomTextInput = document.getElementById('bottomText');

const fontSizeInput = document.getElementById('fontSize');
const fontSizeValue = document.getElementById('fontSizeValue');
const fontColorInput = document.getElementById('fontColor');

const memeCanvas = document.getElementById('memeCanvas');
const ctx = memeCanvas.getContext('2d');

const downloadMemeBtn = document.getElementById('downloadMeme');

let uploadImage;  // Corrected variable name

imageUpload.addEventListener('change', (event) => {
    const reader = new FileReader();
    reader.onload = function() {
        const img = new Image();
        img.onload = function() {
            memeCanvas.width = img.width;
            memeCanvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            uploadImage = img;  // Store the uploaded image
            drawText();  // Redraw text after image is loaded
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

topTextInput.addEventListener('input', drawText);
centerTextInput.addEventListener('input', drawText);
bottomTextInput.addEventListener('input', drawText);
fontSizeInput.addEventListener('input', updateFontSize);
fontColorInput.addEventListener('input', drawText);

function drawText() {
    if (!uploadImage) return;  // Ensure the image is uploaded before drawing text

    // Clear the canvas and redraw the image
    ctx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);
    ctx.drawImage(uploadImage, 0, 0);

    // Set text properties
    const fontSize = fontSizeInput.value;
    ctx.fillStyle = fontColorInput.value;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.font = `${fontSize}px Impact`;
    ctx.textAlign = 'center';

    // Top text
    ctx.fillText(topTextInput.value.toUpperCase(), memeCanvas.width / 2, fontSize);
    ctx.strokeText(topTextInput.value.toUpperCase(), memeCanvas.width / 2, fontSize);

    // Center text
    ctx.fillText(centerTextInput.value.toUpperCase(), memeCanvas.width / 2, memeCanvas.height / 2);
    ctx.strokeText(centerTextInput.value.toUpperCase(), memeCanvas.width / 2, memeCanvas.height / 2);

    // Bottom text
    ctx.fillText(bottomTextInput.value.toUpperCase(), memeCanvas.width / 2, memeCanvas.height - 20);
    ctx.strokeText(bottomTextInput.value.toUpperCase(), memeCanvas.width / 2, memeCanvas.height - 20);
}

function updateFontSize() {
    fontSizeValue.textContent = fontSizeInput.value;
    drawText();
}

downloadMemeBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = memeCanvas.toDataURL();
    link.download = 'meme.png';
    link.click();
});
