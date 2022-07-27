let playOnce = true;

window.addEventListener("scroll", () => {
  // Navbar effect
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);

  // Image
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  // Popup
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});

// another easier way to close the popup to avoid boolean
/*********** 
closeBtn.addEventListener("click", () => {
popup.style.opacity = "0";
popup.style.transform = "translateX(500px)";
popup.style.visibility = "hidden";
}); 
**********/

// 1. Créer un événement au scroll

// 2. Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale quand on remonte tout en haut

// 3. Faire apparaitre l'image de la partie improvise

// 4. Faire apparaitre la popup quand on est en bas du site

// 5. Bonus : quand on clique sur la pop-up elle disparait pour toujours
