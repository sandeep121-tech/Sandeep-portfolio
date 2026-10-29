// Professional Toast Notification Helper Function
function showNotification(message, type = 'success') {
    const existingToast = document.getElementById('custom-toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.id = 'custom-toast';
    toast.innerText = message;
    
    // Modern styling for professional UI
    toast.style.position = 'fixed';
    toast.style.bottom = '25px';
    toast.style.right = '25px';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '8px';
    toast.style.color = '#ffffff';
    toast.style.fontWeight = '500';
    toast.style.fontSize = '14px';
    toast.style.zIndex = '10000';
    toast.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
    toast.style.transition = 'all 0.3s ease-in-out';
    
    if (type === 'success') {
        toast.style.backgroundColor = '#10B981'; // Professional green
    } else {
        toast.style.backgroundColor = '#EF4444'; // Professional red
    }

    document.body.appendChild(toast);

    // Automatically remove toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Greet message function for Say Hello button
function greetSandeep() {
    showNotification("Hello! Welcome to Sandeep's  portfolio. 🚀", "success");
}

// Dynamic DOM manipulation function to add a new skill
function addNewSkill() {
    const skillsList = document.getElementById("skillsList");
    
    const newLi = document.createElement("li");
    newLi.innerHTML = "<strong>Full-Stack:</strong> Node.js & Express Backend Integration 🚀";
    
    if (skillsList) {
        skillsList.appendChild(newLi);
        showNotification("New skill added dynamically via JavaScript DOM!", "success");
    }
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
        // Relative path use kiya hai taaki localhost aur Render dono par chal sake
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            showNotification(result.message || "Message sent successfully!", "success");
            event.target.reset(); // Form clear karna
        } else {
            showNotification("Kuch gadbad ho gayi bhai! Please try again.", "error");
        }

    } catch (error) {
        console.error("Error:", error);
        showNotification("Server se connection establish nahi ho pa raha hai.", "error");
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
        showNotification("Light Mode Activated ☀️", "success");
    } else {
        showNotification("Dark Mode Activated 🌙", "success");
    }
}