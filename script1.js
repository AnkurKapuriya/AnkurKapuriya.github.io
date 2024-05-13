function PlaceBid() {
    var interval = setInterval(function() {
        var timeLeft = parseInt(document.getElementById("time-left").innerText);
        if (timeLeft === 0) {
            clearInterval(interval);
            // Wait for 0.8 seconds before executing the actions
            setTimeout(function() {
                // Execute your actions here after waiting for 0.8 seconds
                document.getElementById("ending-soonest-bid").value = parseFloat(document.getElementById("auction-price").innerText) + 25.0;
                document.getElementById("auctionQuickBid").click();
                document.getElementById("bidPlaced-btn").click();
            }, 800);
        }
    }, 100); // Check every 0.1 second
}
function SuccessMessage{
var success=document.getElementById("success-title").innerText;

var time=document.getElementById("processing-time").innerText

var price=document.getElementById("accuracy").innerText
    return ${success}+${time}+" of "+${price}
}
