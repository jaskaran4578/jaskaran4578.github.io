// Poll Handling Script
document.getElementById('poll-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    const userName = document.getElementById('userName').value.trim();
    const favCat = document.getElementById('favCat').value;
  
    // Validate input
    if (!userName || !favCat) {
      alert('Please fill out all fields.');
      return;
    }
  
    // Get current counts
    const maxwellCount = parseInt(document.getElementById('maxwell-count').innerText);
    const tenleyCount = parseInt(document.getElementById('tenley-count').innerText);
    const monaCount = parseInt(document.getElementById('mona-count').innerText);
    const rockyCount = parseInt(document.getElementById('rocky-count').innerText);
  
    // Update the count based on selection
    switch (favCat) {
      case 'Maxwell':
        document.getElementById('maxwell-count').innerText = maxwellCount + 1;
        break;
      case 'Tenley':
        document.getElementById('tenley-count').innerText = tenleyCount + 1;
        break;
      case 'Mona':
        document.getElementById('mona-count').innerText = monaCount + 1;
        break;
      case 'Rocky':
        document.getElementById('rocky-count').innerText = rockyCount + 1;
        break;
    }
  
    // Thank the user
    alert(`Thank you, ${userName}! Your vote for ${favCat} has been recorded.`);
    document.getElementById('poll-form').reset(); // Reset the form
  });
  