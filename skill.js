let skillx = document.getElementById("check");
let skillbox = document.getElementById("skill").style.display = "none";
skillx.onclick = function(){

    
    console.log(skillbox);
    if(skillbox=="block"){
        // let skillx = document.getElementById("check");
        // skillx.onclick = function(){
        skillbox = document.getElementById("skill").style.display = "none";
        
    }
    else{
        // let skillx = document.getElementById("check");
        // skillx.onclick = function(){
        skillbox = document.getElementById("skill").style.display = "block";
        
    }
    
}

// html to pdf

window.onload = function(){
    document.getElementById("download").addEventListener("click",() =>{
        const CV = this.document.getElementById("CV");
        html2pdf().from(CV).save();
    })
}

//edit button
const my_cv_edit = document.getElementsByClassName("edit_cv_btn");
// console.log(my_cv_edit.contenteditable);
console.log(document.getElementsB)
function my_edit_Function() {
    // console.log(document.getElementsByClassName("workhead").isContentEditable);
  }