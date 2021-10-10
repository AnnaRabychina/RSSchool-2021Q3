function initComparisons() {
    let x;
    let img, clicked = 0, w, h;
    x = document.getElementsByClassName("img-comp-overlay");
    for (let i = 0; i < x.length; i++) {
      compareImages(x[i]);
    }

    function compareImages(img) {
      w = img.offsetWidth;
      h = img.offsetHeight;
      img.style.width = (w / 2) + 83 + "px";
     
      const slider = document.createElement("div");
      slider.classList.add("img-comp-slider")
      img.before(slider);
      
      slider.style.left = (w / 1.7) + "px";
      slider.addEventListener("mousedown", slideReady);
      window.addEventListener("mouseup", slideFinish);
      slider.addEventListener("touchstart", slideReady);
      window.addEventListener("touchend", slideFinish);
      
      function slideReady(e) {
        e.preventDefault();
        clicked = 1;
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      
      function slideFinish() {
        clicked = 0;
      }
     
      function slideMove(e) {
        let pos;
        if (clicked == 0) return false;
        pos = getCursorPos(e)
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        slide(pos);
      }
     
      function getCursorPos(e) {
        let a, x = 0;
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        x = x - window.pageXOffset;
        return x;
      }

      function slide(x) {
        img.style.width = x + "px";
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }
  
  initComparisons();
  