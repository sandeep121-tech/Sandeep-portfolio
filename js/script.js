// Greet message function for Say Hello button
function greetSandeep() {
    alert("Bhai Sandeep, portfolio ab ekdam professional aur mast lag raha hai! 🚀");
}

// Dynamic DOM manipulation function to add a new skill
function addNewSkill() {
    const skillsList = document.getElementById("skillsList");
    
    const newLi = document.createElement("li");
    newLi.innerHTML = "<strong>Full-Stack:</strong> Node.js & Express Backend Integration 🚀";
    
    skillsList.appendChild(newLi);
    
    alert("Ek naya Full-Stack skill JavaScript DOM manipulation ke zariye add kar diya gaya hai!");
}

// Contact form submission handler with Loading State and Validation
async function submitForm(event) {
    event.preventDefault(); // Page refresh hone se rokna
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Button ko select karna aur loading state dena
    const submitBtn = event.target.querySelector('button[type="submit"]') || event.target.querySelector('button');
    const originalBtnText = submitBtn ? submitBtn.innerText : "Send Message 🚀";
    
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending... ⏳";
    }

    const formData = { name, email, message };

    try {
        // Backend server par data POST request se bhejna
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert(result.message);
            event.target.reset(); // Form clear karna
        } else {
            alert("Kuch gadbad ho gayi bhai!");
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Server se connection nahi ho pa raha hai! Check karo ki backend server chal raha hai ya nahi.");
    } finally {
        // Button ko wapas normal state mein lana
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
        }
    }
}

// Function to toggle between Dark and Light Mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        console.log("Light Mode Activated ☀️");
    } else {
        console.log("Dark Mode Activated 🌙");
    }
}