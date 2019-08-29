var CandyBarContainer = document.createElement("div");
CandyBarContainer.className = "CandyBar_Container";
document.body.appendChild(CandyBarContainer);

var CandyBarMsgType = {
  info: "i",
  warning: "w",
  error: "e",
  success: "s"
}

function CandyBar (settings) {
  var msg = document.createElement("div");
  var hover = false;
  msg.innerHTML = settings.msg;
  msg.classList.add("CandyBar_Item");
  msg.addEventListener("click", function () {
    msg.remove();
  });
  msg.addEventListener("mouseenter", function () {
    hover = true;
  });
  msg.addEventListener("mouseleave", function () {
    hover = false;
    setTimeout(function () {
      if (!hover) msg.remove();
    }, 5000);
  });

  setTimeout(function () {
    if (!hover) msg.remove();
  }, 5000);

  switch (settings.type) {
    case CandyBarMsgType.info:
      // info
      msg.classList.add("CandyBar_Info");      
      break;
    case CandyBarMsgType.warning:
      // warning
      msg.classList.add("CandyBar_Warning");      
      
      break;
      
    case CandyBarMsgType.error:
      // error
      msg.classList.add("CandyBar_Error");      
      
      break;
    case CandyBarMsgType.success:
      // success
      msg.classList.add("CandyBar_Success");      
      
      break;
    default:
      throw new Error("");
  }
  CandyBarContainer.appendChild(msg);
}

CandyBar.__proto__.info = function (msg) {
  CandyBar({
    type: CandyBarMsgType.info,
    msg: msg
  });
}

CandyBar.__proto__.warn = function (msg) {
  CandyBar({
    type: CandyBarMsgType.warning,
    msg: msg
  });
}

CandyBar.__proto__.success = function (msg) {
  CandyBar({
    type: CandyBarMsgType.success,
    msg: msg
  });
}

CandyBar.__proto__.error = function (msg) {
  CandyBar({
    type: CandyBarMsgType.error,
    msg: msg
  });
}