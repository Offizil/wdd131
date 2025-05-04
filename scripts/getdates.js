// -----------SCRIPT FOR LAST MODIFIES TIME---------------
  // Get the current date and time
  const lastModifiedString = new Date(document.lastModified);

  // Format the date as a string
  const formattedDate = lastModifiedString.toDateString();

  // Format the time as a string
  const formattedTime = lastModifiedString.toLocaleTimeString();

  // Get the element with the id "lastModified"
  const lastModifiedElement = document.getElementById("lastModified");

  // Update the content of the element
  lastModifiedElement.textContent = `Last modified: ${formattedDate} at ${formattedTime}`;




  