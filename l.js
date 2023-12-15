// Function to display a random uplifting message
function displayMessage() {
    const messages = [
        "TUmi ki amar Shathe khalil er bhaier Gorur magsho kinbe?",
        "Yk, what's the missing piece you need in life? hehe buy my 499tkr handcream ples",
        "Wait ajke ki korbe? Adit er shathe ber hobee? :/ chii",
        "Taaaaainaaaa?",
        "SamiCdir Bhai amar mathay bari dile?",
        "Shundor manush er shathe shundor kotha naa bole kivabe thaka jai ektu bolba?",
        "eyy tumi ki gach???",
        "Kokhono cng hoye jeyona : )",
        "tumi ekta Cudieeee",
        "tumi mon kharap kore thakbana, do you have any idea kotota cute lage when you're truly happy, happy?",
        "Jao Fantasy Garden shuno",
        // Add more messages here
    ];

    // Select a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Display the message
    document.getElementById("message-display").innerText = randomMessage;
}

// Function to handle photo gallery interaction
function enlargePhoto(event) {
    // Check if the clicked element is an image
    if (event.target.tagName === 'IMG') {
        // Toggle the 'enlarged' class to scale the image
        event.target.classList.toggle('enlarged');
    }
}

// Add event listener to the photo gallery
document.getElementById("photo-gallery").addEventListener("click", enlargePhoto);

// Function to initialize timeline animations
function initTimeline() {
    // Add logic here to animate timeline elements
    // For example, you can loop through each event and add an animation class
}

// Call the timeline initialization function when the window loads
window.onload = initTimeline;
