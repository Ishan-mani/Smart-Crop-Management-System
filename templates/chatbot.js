function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim().toLowerCase();

    var commands = {
        'home': '{{ url_for("home") }}',
        'crop': '{{ url_for("crop_recommend") }}',
        'fertilizer': '{{ url_for("fertilizer_recommendation") }}',
        'disease': '{{ url_for("disease_prediction") }}',
        'contact': '{{ url_for("contact") }}',
        'faq': '{{ url_for("faq") }}'
    };

    if (userInput in commands) {
        // Redirect user to the corresponding page
        window.location.href = commands[userInput];
    } else {
        // Display error message for unknown command
        displayMessage("Sorry, I didn't understand that command. Please try again with one of these: home, crop, fertilizer, disease, contact, faq", 'bot');
    }

    // Display user message in chat interface
    displayMessage(userInput, 'user');

    // Clear input field after processing
    document.getElementById("user-input").value = '';
}

