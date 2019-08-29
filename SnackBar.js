var CandyBarContainer = document.createElement("div");
CandyBarContainer.className = "CandyBar_Container";

function CandyBar (settings) {
  switch (settings.type) {
    case "i":
      // info
      
      break;
    case "w":
      // warning
      
      break;
      
    case "e":
      // error
      
      break;
    case "s":
      // success
      
      break;
    default:
      throw new Error("");
  }
}

CandyBar.__proto__.info = function () {
  
}
