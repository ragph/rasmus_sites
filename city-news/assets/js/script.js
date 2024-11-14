
document.addEventListener("DOMContentLoaded", function() {
    // Code to run after the document is loaded
    const specificDate = new Date(); // Month is 0-indexed, so 10 represents November
    
    const formattedDate = specificDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    document.getElementById('publishDate').innerText = formattedDate;
    document.getElementById('modifiedDate').innerText = formattedDate;
  });
  