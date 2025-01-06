function changeStyle() {

    let paragraphs = document.getElementsByTagName('p');
    for (let p of paragraphs) {
        p.style.textAlign = 'center'; 
        p.style.fontSize = '20px';    
        p.style.fontFamily = 'Times New Roman'; 
    }

}