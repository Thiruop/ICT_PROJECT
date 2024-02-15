function activeButton(checkbox) {
    var submitButton = document.getElementById("submit");
    submitButton.disabled = !checkbox.checked;
}

document.getElementById("mode").addEventListener("change", function() {
    calculateBagTotal();
});

document.getElementById("quantity").addEventListener("change", function() {
    calculateBagTotal();
});

function calculateBagTotal() {
    var product = document.getElementById("product").querySelector("select").value;
    var price;
    if (product === "TV") {
        price = 30000;
    } else if (product === "Refrigerator") {
        price = 50000;
    } else {
        price = 20000;
    }

    var quantity = parseInt(document.getElementById("quantity").querySelector("input").value);
    var mode = document.getElementById("mode").querySelector("select").value;
    var total;

    if (mode === "Debit Card") {
        total = price * quantity - (5 / 100 * price * quantity);
    } else {
        total = price * quantity;
    }

    var couponInput = document.getElementById("coupon").querySelector("input");
    var bagTotalInput = document.getElementById("bill");

    if (total >= 100000) {
        var firstFourDigits = String(total).slice(0, 4);
        couponInput.value = "ADI" + firstFourDigits;
        bagTotalInput.value = total - 1500;
    } else {
        couponInput.value = "";
        bagTotalInput.value = total;
    }
}

calculateBagTotal();

document.getElementById("submit").addEventListener("click", function() {
    calculateBagTotal();

    
    console.log("Customer Name:", document.getElementById("custname").value);

    var name = document.getElementById("custname").value;
    var email = document.getElementById("email").value;
    var total = document.getElementById("bill").value;

    var text = ["Dear", "Your Final bill is Rs:", "Product will be delivered in next 24hrs", "Invoice Copy is mailed on:"];
    var content = [name, total, email];

    var myDiv = document.getElementById("result");
    myDiv.innerHTML = ""; 

    content.forEach(function(content, i) {
        var newParagraph = document.createElement("p");
        newParagraph.textContent = text[i] + " " + content;
        myDiv.appendChild(newParagraph);
    });
});


