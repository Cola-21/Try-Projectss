let participants = JSON.parse(localStorage.getItem("participants")) || [];

function registerEvent() {
    let name = document.getElementById("name").value;
    let event = document.getElementById("event").value;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    let participant = { name, event };
    participants.push(participant);

    localStorage.setItem("participants", JSON.stringify(participants));

    alert("Registration Successful!");
}

function displayParticipants() {
    let list = document.getElementById("participantList");
    if (!list) return;

    let storedParticipants = JSON.parse(localStorage.getItem("participants")) || [];

    list.innerHTML = "";
    storedParticipants.forEach((p, index) => {
        let item = document.createElement("li");
        item.textContent = `${p.name} - ${p.event}`;

        
        let removeBtn = document.createElement("span");
        removeBtn.textContent = " X";
        removeBtn.style.color = "red";
        removeBtn.style.cursor = "pointer";
        removeBtn.onclick = () => removeParticipant(index);

        item.appendChild(removeBtn);
        list.appendChild(item);
    });
}

function removeParticipant(index) {
    
    participants.splice(index, 1);

    
    localStorage.setItem("participants", JSON.stringify(participants));

    
    displayParticipants();
}

document.addEventListener("DOMContentLoaded", displayParticipants);
