<!DOCTYPE html>
<html>
<head>
<title>Auto-Run External JavaScript in New Tab</title>
</head>
<body>

<script>
async function openAndRunScript() {
  // Open a new window with about:blank
  const newWindow = window.open('about:blank', '_blank');

  if (newWindow) {
    try {
      // Fetch the script content from the URL
      const response = await fetch("https://raw.githubusercontent.com/d3add3v/Murcuryorsmth/refs/heads/main/index.js");
      const scriptContent = await response.text();

      // Write the basic HTML structure and the script to the new window
      newWindow.document.write(`
        <html>
        <head>
          <style>body { margin: 0; }</style>
        </head>
        <body>
          <script>${scriptContent}<\/script>
        </body>
        </html>
      `);
      newWindow.document.close();

    } catch (error) {
      console.error("Error fetching or running the script:", error);
      newWindow.document.body.textContent = "Error loading script.";
    }
  } else {
    alert("Please allow pop-ups for this site to open the content in a new tab.");
  }
}

// Run the function automatically when the page loads
window.onload = openAndRunScript;
</script>

</body>
</html>
