const checkbox = document.getElementById("cambioColor");
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    document.body.style.backgroundColor = "#34495E";
    const elementos = document.getElementsByClassName("title-section");
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.color = "white";
    }
    const sElements = document.getElementsByClassName("subtitle");
    for (let i = 0; i < sElements.length; i++) {
      sElements[i].style.color = "white";
    }
    const pElements = document.getElementsByTagName("p");
    for (let i = 0; i < pElements.length; i++) {
      pElements[i].style.color = "white";
    }
  } else {
    document.body.style.backgroundColor = "";
    const elementos = document.getElementsByClassName("title-section");
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.color = "#2b3d56";
    }
    const sElements = document.getElementsByClassName("subtitle");
    for (let i = 0; i < sElements.length; i++) {
      sElements[i].style.color = "#2b3d56";
    }
    const pElements = document.getElementsByTagName("p");
    for (let i = 0; i < pElements.length; i++) {
      pElements[i].style.color = "";
    }
    
  }
});
