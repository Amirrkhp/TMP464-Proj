
(function() {
    const chatWidget = document.createElement("div");
    chatWidget.style.position = "fixed";
    chatWidget.style.bottom = "20px";
    chatWidget.style.right = "20px";
    chatWidget.style.width = "300px";
    chatWidget.style.height = "400px";
    chatWidget.style.backgroundColor = "#f1f1f1";
    chatWidget.style.border = "1px solid #ccc";
    chatWidget.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.1)";
    chatWidget.style.zIndex = "1000";
    document.body.appendChild(chatWidget);

    chatWidget.innerHTML = "<h3 style='text-align: center; margin: 10px;'>Chatbot</h3>";
})();
