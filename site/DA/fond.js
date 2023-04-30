document.getElementById("menu").addEventListener("mouseover", function(){
  document.getElementById("menu").classList.replace("largeur1", "largeur2");
  document.getElementById("barre1").classList.replace("barre1_1", "barre1_2");
  document.getElementById("barre2").classList.replace("barre2_1", "barre2_2");
})
document.getElementById("menu").addEventListener("mouseout", function(){
  document.getElementById("menu").classList.replace("largeur2", "largeur1")
  document.getElementById("barre1").classList.replace("barre1_2", "barre1_1");
  document.getElementById("barre2").classList.replace("barre2_2", "barre2_1");
})

function alleràd(){
    setTimeout(() => {
        document.getElementById("lumière").classList.replace("posàg", "posàd");
        
      }, "1000");
      setTimeout(() => {
        document.getElementById("lumière").classList.replace("posàd", "posàg")
    
      }, "5000");
    
}
alleràd()
setInterval(alleràd,6000)

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
});
document.addEventListener('wheel', function(event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });


