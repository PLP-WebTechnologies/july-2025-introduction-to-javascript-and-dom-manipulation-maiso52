// ==========================
// Part 1: Variables & Conditionals
// ==========================
let userName = "Maiso";
let userAge = 20;

// Simple conditional
if (userAge >= 18) {
    document.getElementById("greeting").textContent = `Welcome, ${userName}! You are an adult.`;
} else {
    document.getElementById("greeting").textContent = `Hey ${userName}, you're still a minor!`;
}

// ==========================
// Part 2: Functions
// ==========================

// Function 1: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function 2: Calculate and show total
function showTotal() {
    let subtotal = 100;
    let tax = 20;
    let total = addNumbers(subtotal, tax);
    document.getElementById("total").textContent = "Total: $" + total;
}

// ==========================
// Part 3: Loops
// ==========================

// Example 1: Countdown using a for loop
for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    document.getElementById("countdown").appendChild(li);
}

// Example 2: While loop to simulate incrementing
let counter = 0;
while (counter < 3) {
    console.log("Counter is: " + counter);
    counter++;
}

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Example 1: Toggle class on button click
document.getElementById("toggleBtn").addEventListener("click", function () {
    document.getElementById("toggleText").classList.toggle("highlight");
});

// Example 2: Change text dynamically
document.getElementById("toggleBtn").addEventListener("mouseover", function () {
    document.getElementById("toggleText").textContent = "Hovered over the button!";
});

// Example 3: Restore text on mouseout
document.getElementById("toggleBtn").addEventListener("mouseout", function () {
    document.getElementById("toggleText").textContent = "Click the button to toggle my style!";
});
