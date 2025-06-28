firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const uid = user.uid;

    // Save Document
    window.saveDoc = () => {
      const title = document.getElementById('docTitle').value;
      const url = document.getElementById('docURL').value;

      if (!title || !url) {
        alert("Please enter both title and document URL.");
        return;
      }

      firebase.firestore().collection('documents').add({
        uid: uid,
        title: title,
        url: url,
        timestamp: Date.now()
      })
      .then(() => {
        alert("✅ Document saved successfully!");
        document.getElementById('docTitle').value = "";
        document.getElementById('docURL').value = "";
        fetchDocuments(); // Refresh list without reload
      })
      .catch((error) => {
        console.error("Error saving document:", error);
        alert("❌ Failed to save document: " + error.message);
      });
    };

    // Fetch Documents and show in list
    function fetchDocuments() {
      const docList = document.getElementById('docList');
      docList.innerHTML = ""; // Clear list before loading

      firebase.firestore().collection('documents')
        .where('uid', '==', uid)
        .orderBy('timestamp', 'desc')
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const data = doc.data();
            const li = document.createElement('li');
            li.innerHTML = `
              <a href="${data.url}" target="_blank">${data.title}</a>
              <button onclick="deleteDoc('${doc.id}')">Delete</button>
            `;
            docList.appendChild(li);
          });
        });
    }

    // Delete Document
    window.deleteDoc = (id) => {
      firebase.firestore().collection('documents').doc(id).delete()
        .then(() => {
          alert("🗑️ Document deleted");
          fetchDocuments();
        });
    };

    // Initial load
    fetchDocuments();
  } else {
    // If not logged in, redirect to login
    window.location.href = "login.html";
  }
});
