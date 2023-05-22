function Entry(directoryId, description, duration) {
    this.directoryId = directoryId;
    this.description = description;
    this.duration = duration;
  }

  // Global array to store entries
  var entries = [];

  // Function to add an entry
  function addEntry() {
    var entryString = document.getElementById("entry").value.trim();

    if (entryString === "") {
      alert("Invalid entry");
      return;
    }

    var entryParts = entryString.split(" ");
    if (entryParts.length !== 3) {
      alert("Invalid entry");
      return;
    }

    var directoryId = entryParts[0];
    var description = entryParts[1];
    var duration = entryParts[2];

    var entry = new Entry(directoryId, description, duration);
    entries.push(entry);

    document.getElementById("entry").value = "";
  }

  // Function to display summary
  function summary() {
    var summaryText = "Total entries: " + entries.length + "\n\n";

    // Sort entries by duration
    entries.sort(function(a, b) {
      return a.duration - b.duration;
    });

    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      summaryText += "Directory ID: " + entry.directoryId + ", Description: " + entry.description + ", Duration: " + entry.duration + "\n";
    }

    document.getElementById("summary").textContent = summaryText;
  }
