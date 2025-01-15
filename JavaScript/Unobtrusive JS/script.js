document.addEventListener("DOMContentLoaded", () => {
    
    const btnClick =document.getElementById("btnClick");
    btnClick.addEventListener("click", () => {
        alert("Аз се появявам след натискане.");
    });


    const btnDblClick =document.getElementById("btnDblClick");
    btnDblClick.addEventListener("dblclick", () => {
        alert("Аз се появявам след двойно натискане.");
    });

    const btnMouseDown =document.getElementById("btnMouseDown");
    btnMouseDown.addEventListener("mousedown", () => {
        alert("Аз се появявам при натискане на бутона.");
    });
    const btnMouseMove =document.getElementById("btnMouseMove");
    btnMouseMove.addEventListener("mousemove", () => {
        alert("Аз се появявам при минаване на мишката през мен.");
    });
    const btnMouseOut =document.getElementById("btnMouseOut");
    btnMouseOut.addEventListener("mouseout", () => {
        alert("Аз се появявам след минаване на мишката през мен.");
    });
    const btnMouseOver =document.getElementById("btnMouseOver");
    btnMouseOver.addEventListener("mouseover", () => {
        alert("Аз се появявам при първото преминаване на мишката през мен.");
    });
    const btnMouseUp =document.getElementById("btnMouseUp");
    btnMouseUp.addEventListener("mouseup", () => {
        alert("Аз се появявам след натискане.");
    });
    const btnWheel =document.getElementById("btnWheel");
    btnWheel.addEventListener("wheel", () => {
        alert("Аз се появявам при използване на колелото на мишката.");
    });

    const btnMultiple=document.getElementById("btnMultiple");
    btnMultiple.addEventListener("click", () => {
       console.log("onclick");
    });
    btnMultiple.addEventListener("mousedown", () => {
        console.log("mousedown");
     });
     btnMultiple.addEventListener("mouseup", () => {
        console.log("mouseup");
     });

     const btnTwoAlerts =document.getElementById("btnTwoAlerts");
        btnTwoAlerts.addEventListener("click", () => {
        alert("Аз се появявам първи.");
        alert("Аз се появявам втори.");
    });

    let counter = 0;
    const btnCounter =document.getElementById("btnCounter");
    btnCounter.addEventListener("click", () => {
        counter++;
        alert("Counter:" + counter);
       
    });
});

    
