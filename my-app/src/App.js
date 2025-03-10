document.addEventListener("DOMContentLoaded", function() {
  // Loading screen timeout
  setTimeout(function() {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("main-content").style.display = "block";
  }, 1000); // Adjust time as needed

  // Chatbot toggle
  const chatbotButton = document.getElementById("chatbot-button");
  const chatbotPopup = document.getElementById("chatbot-popup");

  chatbotButton.addEventListener("click", function() {
      chatbotPopup.style.display = chatbotPopup.style.display === "none" ? "block" : "none";
  });

  // Example animal fact (could be expanded with API or database)
  const facts = [
      "Elephants are the largest land animals on Earth.",
      "Dolphins sleep with one eye open.",
      "A group of flamingos is called a 'flamboyance.'"
  ];

  document.getElementById("animal-facts").addEventListener("click", function() {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      document.getElementById("fact-text").innerText = randomFact;
  });
});

