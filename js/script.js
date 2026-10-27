function greetSandeep() {
    alert("Bhai Sandeep, portfolio ab ekdum professional aur mast lag raha hai! 🚀");
}

function submitForm(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    alert("Shukriya " + name + "! Aapka message mil gaya hai. 🎯");
}

// DOM Manipulation function to add a new skill dynamically
function addNewSkill() {
    let li = document.createElement("li");
    li.innerHTML = "<strong>New Skill:</strong> Node.js & Databases (Added via DOM Manipulation ⚡)";
    
    let skillsList = document.querySelector(".skills-list");
    skillsList.appendChild(li);

    alert("Ek naya skill JavaScript DOM manipulation ke zariye add kar diya gaya hai!");
}
