(function() {
  'use strict';
  const stopButton = document.getElementById("stopButton");
  const slowButton = document.getElementById("slowButton");
  const goButton = document.getElementById("goButton");

  const stopLight = document.getElementById("stopLight");
  const slowLight = document.getElementById("slowLight");
  const goLight = document.getElementById("goLight");

  //Part 1

  stopButton.addEventListener("click", function () {
  stopLight.classList.toggle("stop");
  });

  slowButton.addEventListener("click", function () {
  slowLight.classList.toggle("slow");
  });

  goButton.addEventListener("click", function () {
  goLight.classList.toggle("go");
  });

  // Part 2

  const mouseEnter = function (event) {
  console.log(`Entered ${event.target.textContent} button`);
  };

  const mouseExit = function (event) {
  console.log(`Left ${event.target.textContent} button`);
  };

  stopButton.addEventListener("mouseenter", mouseEnter);
  stopButton.addEventListener("mouseleave", mouseExit);

  slowButton.addEventListener("mouseenter", mouseEnter);
  slowButton.addEventListener("mouseleave", mouseExit);

  goButton.addEventListener("mouseenter", mouseEnter);
  goButton.addEventListener("mouseleave", mouseExit);

  // Bonus

  const controls = document.getElementById("controls");
  controls.addEventListener("click", buttonState);


  function buttonState(event) {
    const currentLight = event.target.textContent;
    if (currentLight === "Go") {
      if (goLight.classList.contains("go")) {
        console.log(currentLight + " bulb on");
      } else {
        console.log(currentLight + " bulb off");
      }
    } else if (currentLight === "Slow") {
      if (slowLight.classList.contains("slow")) {
        console.log(currentLight + " bulb on");
      } else {
        console.log(currentLight + " bulb off");
      }
    } else {
      if (stopLight.classList.contains("stop")) {
        console.log(currentLight + " bulb on");
      } else {
        console.log(currentLight + " bulb off");
      }
    }
  }
})();