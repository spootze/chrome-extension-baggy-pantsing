(() => {
  const actions = [
    () => {
      document.body.style.transform = "rotate(0.5deg)";
      document.body.style.transformOrigin = "top right";
    },
    () => {
      document.body.style.transform = "rotate(-0.5deg)";
      document.body.style.transformOrigin = "top left";
    },
    () => {
      // Convert NodeList to Array
      const inputArray = Array.from(
        document.querySelectorAll("input, textarea, select, button")
      );

      // Calculate how many to disable (25%)
      const numberToDisable = Math.floor(inputArray.length * 0.25);

      // Shuffle array and disable first 25%
      const shuffled = inputArray.sort(() => Math.random() - 0.5);

      for (let i = 0; i < numberToDisable; i++) {
        shuffled[i].disabled = true;
      }
    },
    () => {
      let scrollFlipped = false;
      window.addEventListener("wheel", (e) => {
        if (Math.random() > 0.95) {
          scrollFlipped = !scrollFlipped;
        }
        if (scrollFlipped) {
          e.preventDefault();
          window.scrollBy(0, -e.deltaY);
        }
      });
    },
    () => {
      document.querySelectorAll("p, span, h1, h2, h3").forEach((el) => {
        if (Math.random() > 0.8) {
          const words = el.innerText.split(" ");
          const randomIndex = Math.floor(Math.random() * words.length);
          words[randomIndex] = `"${words[randomIndex]}"`;
          el.innerText = words.join(" ");
        }
      });
    },
    () => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );

      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (Math.random() > 0.7) {
          node.textContent = node.textContent.replace(/\./g, "?");
        }
      }
    },
  ];

  const randomIndex = Math.floor(Math.random() * actions.length);
  actions[randomIndex]();
})();
