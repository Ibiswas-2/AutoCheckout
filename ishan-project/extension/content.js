
console.log("injection successful");

chrome.runtime.onMessage.addListener(function (message) {
  if (message.type === "ai-autofiller") {
    const elements = document.querySelectorAll("input, textarea, select, span"); // adjust selector based on your needs
    targetElements = []
    for (const element of elements) {
      node = { tag: element.tagName, class: element.className, id: element.id, type: element.type }
      if (element.className != "" && element.className != " ") {
        targetElements = [...targetElements, node]

      }
    }
    // console.log(targetElements)

    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: JSON.stringify(targetElements) }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        alert(`ChatGPT says: ${data}`);
        console.log(data)
      })
      .catch((error) => {
        alert(
          "Make sure backend is healthy."
        );
        throw new Error(error);
      });
  }
});
