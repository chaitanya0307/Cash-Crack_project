// Friends List
let friends = [];

// Logged-in user
let currentUser = "";

// Modal Toggle
function toggleLogin() {
  const modal = document.getElementById("loginModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Login
function loginUser() {
  const username = document.getElementById("username").value.trim();
  if (username) {
    currentUser = username;
    document.getElementById("welcomeMsg").innerText = `Welcome, ${currentUser}!`;
    document.getElementById("userInfo").style.display = "block";
    toggleLogin();
  }
}

// Add Friend
function addFriend() {
  const newFriend = document.getElementById("newFriend").value.trim();
  if (newFriend && !friends.includes(newFriend)) {
    friends.push(newFriend);
    renderFriends();
    document.getElementById("newFriend").value = "";
  }
}

// Display Friends
function renderFriends() {
  const list = document.getElementById("friendList");
  list.innerHTML = "";
  friends.forEach(friend => {
    const li = document.createElement("li");
    li.innerText = friend;
    list.appendChild(li);
  });
}

// Split Expense
function splitExpense() {
  const payer = document.getElementById("payer").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const participantsInput = document.getElementById("participants").value.trim();

  if (!payer || isNaN(amount) || !participantsInput) {
    alert("Please enter valid details.");
    return;
  }

  const participants = participantsInput.split(",").map(p => p.trim()).filter(p => p !== "");
  if (!participants.includes(payer)) participants.push(payer);

  const perPersonShare = amount / participants.length;
  const summary = [];

  summary.push(`<strong>${payer}</strong> paid ₹${amount.toFixed(2)} for ${participants.length} people.<br><br><u><strong>Pending Payments:</strong></u><br>`);

  participants.forEach(person => {
    if (person !== payer) {
      summary.push(`${person} owes ₹${perPersonShare.toFixed(2)} to ${payer}`);
    }
  });

  document.getElementById("result").innerHTML = summary.join("<br>");
  addToHistory(`${payer} paid ₹${amount.toFixed(2)}. Each person owes ₹${perPersonShare.toFixed(2)}.`);
}

// Expense History
function addToHistory(text) {
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = text;
  historyList.appendChild(li);
}


// Open About Page in New Tab
function openAbout() {
  const aboutWindow = window.open("", "_blank");
  aboutWindow.document.write(`
    <html>
    <head>
      <title>About - Cash Crack</title>
      <style>
        body { font-family: 'Segoe UI', sans-serif; padding: 20px; line-height: 1.6; background: #f9f9f9; }
        h1 { color: #6a0dad; }
      </style>
    </head>
    <body>
      <h1>About the Cash Crack App 💸</h1>
      <p>The Expense Splitter App is a user-friendly and intuitive platform built to help friends, families, and teams manage shared expenses effortlessly. Whether you're on a trip, sharing household bills, or planning an event, this app simplifies the process of tracking who owes whom and ensures transparency in all transactions.</p>

      <h4>This tool is ideal for:</h4>
      <ul>
        <li>Roommates sharing rent, groceries, or utilities.</li>
        <li>Groups of friends splitting restaurant bills, vacations, or gifts.</li>
        <li>Project teams managing joint expenses or reimbursements.</li>
        <li>Event organizers tracking shared costs and dues.</li>
      </ul>

      <h4><strong>Key Features:</strong></h4>
      <ul>
        <li>Split expenses fairly among any number of participants.</li>
        <li>Track history of past transactions with full breakdown.</li>
        <li>Add and manage a list of friends or recurring members.</li>
        <li>Simple login and personalized user greeting.</li>
        <li>Mobile-responsive and lightweight for smooth usage on any device.</li>
      </ul>

      <p>Our mission is to eliminate confusion in financial coordination and foster trust among peers by keeping expense management simple, accurate, and transparent.</p>

      
      <h4> Technology Stack</h4>
      <ul>
        <li><strong>HTML & CSS:</strong> Structuring and styling the user interface.</li>
        <li><strong>JavaScript:</strong> Core functionality including logic and interactivity.</li>
        <li><strong>No Backend:</strong> Lightweight and client-side only for simplicity.</li>
      </ul>


      <p>With a focus on usability and clarity, this app is tailored for both casual users and professional groups. It showcases how simple tools can solve real-world problems effectively and efficiently.</p>

      <p>By building this project, we also emphasize the core principles of teamwork, fairness, and communication — essential in both life and business.</p>

      <p>We hope you enjoy using Cash Crack. Happy splitting!</p>
    </body>
    </html>
  `);
  aboutWindow.document.close();
}

// Open Instructions Page in New Tab
function openInstructions() {
  const instructionsWindow = window.open("", "_blank");
  instructionsWindow.document.write(`
    <html>
    <head>
      <title>Instructions - Cash Crack</title>
      <style>
        body { font-family: 'Segoe UI', sans-serif; padding: 20px; line-height: 1.6; background: #f4faff; }
        h1 { color: #6a0dad; }
      </style>
    </head>
    <body>
      <h1>Instructions for Using the Cash Crack App 📝</h1>
      <p>Follow this comprehensive guide to make the most of our expense splitting platform. Whether you are a new user or revisiting, this guide will walk you through every essential step and best practice.</p>

      <p><strong>Getting Started:</strong></p>
      <ul>
        <li>Visit the homepage and log in using your name.</li>
        <li>Your username will be displayed as a greeting on the top right.</li>
      </ul>

      <p><strong>How to Split an Expense:</strong></p>
      <ul>
        <li>Enter the name of the person who paid the expense.</li>
        <li>Enter the total amount that was paid.</li>
        <li>List all participants (comma-separated) who are sharing the expense.</li>
        <li>Click "Split" and the app will calculate how much each person owes.</li>
      </ul>

      <p><strong>Viewing Expense History:</strong></p>
      <ul>
        <li>Scroll to the "Expense History" section to view previous splits.</li>
        <li>Each record includes the payer, total amount, and individual shares.</li>
      </ul>

      <p><strong>Managing Friends List:</strong></p>
      <ul>
        <li>Add your frequent expense partners in the "Friends" section.</li>
        <li>These names can be easily reused in future splits.</li>
      </ul>

      <p><strong>Best Practices:</strong></p>
      <ul>
        <li>Use clear, unique names for each person to avoid confusion.</li>
        <li>Double-check the entered amount before splitting.</li>
        <li>Encourage transparency and fairness when logging shared expenses.</li>
      </ul>
<p> How to Split an Expense</p>
      <ol>
        <li>Enter the name of the person who paid the bill.</li>
        <li>Enter the total amount spent.</li>
        <li>Enter the names of all participants (comma-separated).</li>
        <li>Click <strong>Split</strong> to see who owes how much.</li>
      </ol>

      <p> Features Explained</p>
      <ul>
        <li><strong>Payer Highlight:</strong> The app highlights who paid the amount.</li>
        <li><strong>Pending List:</strong> It shows how much each person owes.</li>
        <li><strong>History:</strong> Keeps track of all previous splits.</li>
        <li><strong>Modal Login:</strong> Allows personalized greetings and tracking.</li>
      </ul>

      <p> Tips</p>
      <ul>
        <li>Keep names consistent to avoid duplication.</li>
        <li>Use the History tab to keep track of old expenses.</li>
        <li>This is a great tool for trips, roommates, and team projects!</li>
      </ul>
      <p><strong>Pro Tips:</strong></p>
      <ul>
        <li>Use Chrome or Firefox for the best experience.</li>
        <li>Bookmark the app for quick access when you’re out with friends.</li>
        <li>Clear the history section regularly for privacy or reset.</li>
      </ul>

      <p><strong>Troubleshooting:</strong></p>
      <ul>
        <li>If input fields are not working, ensure you haven’t left any blank.</li>
        <li>If results don’t show, refresh the page or check console errors.</li>
      </ul>

      <p>This tool is built to simplify everyday shared expenses and encourage financial cooperation. Whether you're living with roommates, organizing a trip, or just having dinner with friends, Expense Splitter ensures fairness, accuracy, and clarity.</p>

      <p>For any support or suggestions, please contact the development team or contribute through GitHub (if applicable).</p>

      <p>Thank you for using our app. Stay fair. Stay friendly!</p>
    </body>
    </html>
  `);
  instructionsWindow.document.close();
}
