import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

// ✅ Function to display a scan in the webpage
function addScanToUI(scan) {
  const scanList = document.getElementById("scanList");
  if (!scanList) return;

  const div = document.createElement("div");
  div.classList.add("scan-item");
  div.innerHTML = `
    <p><strong>User:</strong> ${scan.user || "Unknown"}</p>
    <p><strong>UID:</strong> ${scan.uid}</p>
    <p><strong>Bus:</strong> ${scan.bus || "Bus_1"}</p>
    <p><small>${new Date(scan.timestamp).toLocaleString()}</small></p>
  `;
  scanList.prepend(div); // newest first
}

// ✅ Listen for new RFID logs from Firebase
const logRef = ref(db, "access_logs/");
onChildAdded(logRef, (snapshot) => {
  const scan = snapshot.val();
  addScanToUI(scan);
});

