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





$('#cat').mousedown(function(){
	$('.catbody').addClass('purr');
  $('.head').addClass('purr2');
  $('.eye').addClass('purreye');
  $('.petme').hide();
});

$('#cat').mouseup(function(){
	$('.catbody').removeClass('purr');
  $('.head').removeClass('purr2');
  $('.eye').removeClass('purreye');
});

$('#cat').touchstart(function(){
	$('.catbody').addClass('purr');
  $('.head').addClass('purr2');
  $('.eye').addClass('purreye');
});

$('#cat').touchend(function(){
	$('.catbody').removeClass('purr');
  $('.head').removeClass('purr2');
  $('.eye').removeClass('purreye');
});
                                      

node = document.body;
node.insertAdjacentHTML('afterend', '<p style="position:fixed; right:10px; bottom:80px; font-size:10px; color:#fff; text-transform:uppercase; max-width:100px; text-align:center; letter-spacing:3px;">From your friends at</p><a href="http://bigseadesign.com" style="position:fixed; bottom:0; right:10px; width:100px; height:80px; background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/383755/bigsealogo_bluegrey.png); background-size:contain; background-repeat:no-repeat;"></a>');
