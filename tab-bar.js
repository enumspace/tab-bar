window.addEventListener("load", function () {
  const startRipple = function (type, e) {
    const prevEvent = e.target.getAttribute("data-event");
    if (prevEvent && prevEvent !== type) {
      return false;
    }
    e.target.setAttribute("data-event", type);
    const rippleWave = document.createElement("span");
    const rect = e.target.getBoundingClientRect();
    const maxSize = Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2));
    rippleWave.style.width = `${2 * maxSize}px`;
    rippleWave.style.height = `${2 * maxSize}px`;
    rippleWave.style.top = `${e.clientY - rect.top - maxSize}px`;
    rippleWave.style.left = `${e.clientX - rect.left - maxSize}px`;
    rippleWave.className = "es-ripple-wave";
    e.target.appendChild(rippleWave);
    setTimeout(() => {
      rippleWave.classList.add("es-ripple-wave-held");
    });
    const releaseEvent = (type === "mousedown" ? "mouseup" : "touchend");
    const release = function () {
      document.removeEventListener(releaseEvent, release);
      rippleWave.classList.add("es-ripple-wave-done");
      setTimeout(() => {
        e.target.removeChild(rippleWave);
        if (!e.target.children.length) {
          e.target.removeAttribute("data-event");
        }
      }, 650);
    }
    document.addEventListener(releaseEvent, release);
  }
  this.document.querySelectorAll(".es-tab").forEach((el) => {
    // 创建涟漪容器
    let rippleContainer = el.querySelector(".es-ripple-container");
    if (!rippleContainer) {
      rippleContainer = document.createElement("div");
      rippleContainer.className = "es-ripple-container";
      el.appendChild(rippleContainer);
    }
    // 电脑端
    rippleContainer.addEventListener("mousedown", function (e) {
      startRipple(e.type, e);
    }, { passive: true });
    // 移动端
    rippleContainer.addEventListener("touchstart", function (e) {
      [].slice.call(e.changedTouches).forEach(touch => {
        startRipple(e.type, touch);
      });
    }, { passive: true });
  });

  this.document.querySelectorAll(".es-tab-bar").forEach(barEl => {
    const tabActiveBarEl = barEl.querySelector(".es-tab__active");
    const tabEl = barEl.querySelectorAll(".es-tab");
    tabEl.forEach(el => {
      const setTabActiveBarStyle = function () {
        tabActiveBarEl.style.width = `${el.clientWidth}px`;
        tabActiveBarEl.style.transform = `translateX(${el.offsetLeft}px)`;
      }
      // 初始化 tab
      if (Array.from(el.classList).some(name => name === "es-active")) {
        setTabActiveBarStyle();
      }
      el.addEventListener("click", function () {
        setTabActiveBarStyle();
      });
    });
    // 添加动画
    this.setTimeout(() => {
      tabActiveBarEl.classList.add("es-tab__active_transition");
    })
  })
});
