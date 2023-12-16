const form = document.getElementById("payment-info");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const paymentInfo = new FormData(form);

    const dataObject = Object.fromEntries(paymentInfo);

    chrome.storage.local.set({ paymentInfo: dataObject }, function () {
        if (chrome.runtime.lastError) {
            alert("Something wrong with data or chrome or node");
        } else {
            alert("Good to go!");
            form.reset();
        }
    });
});