import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCB6045UU5JkqoEFDQY_dcSHEbTdAaGZ5k",
  authDomain: "bus-track-afe0a.firebaseapp.com",
  databaseURL: "https://bus-track-afe0a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bus-track-afe0a",
  storageBucket: "bus-track-afe0a.firebasestorage.app",
  messagingSenderId: "597659366932",
  appId: "1:597659366932:web:ba28c6dd63b5f6f5821901"
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
