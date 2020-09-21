
let gues = 0;
document.getElementById("BTN").addEventListener("click", sumNumbers)

function sumNumbers() {
    const num_1 = document.getElementById("inp_1").value;
    const num_0 = 66;
    
    if (num_1 < num_0) {
        gues++;
        const result = `Need higher number. your guest number ${gues}`;
        document.getElementById("res").innerHTML = result;
        
    } else if (num_1 > num_0){
        gues++;
        const result = `Need lesser number. your guest number ${gues}`;
        document.getElementById("res").innerHTML = result;
        
    } else {
        gues++;
        const result = `congrats. your guest number ${gues}`;
        document.getElementById("res").innerHTML = result;
        
    }
   
}