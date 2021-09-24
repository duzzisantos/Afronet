var acc = document.getElementsByClassName("accordion");
var faqs = document.getElementById("faqs");
var i;

for (i=0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block"){
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
            panel.style.height = '90px';
            panel.style.width = '47.35%';
            panel.style.marginLeft = '25%';
            faqs.style.height = '530px';
        }
    });
}