function copyContent() {
    var cardElement = document.getElementById("card");

    // Use html2canvas to capture the content of the card element
    // html2canvas(cardElement).then(function(canvas) {
    //     // Convert canvas to base64 image data
    //     var imageData = canvas.toDataURL("image/png");

    //     // Create a temporary link element
    //     var tempLink = document.createElement("a");
    //     tempLink.href = imageData;
    //     tempLink.download = "copied_content.png"; // Set the filename

    //     // Trigger a click on the temporary link to download the image
    //     document.body.appendChild(tempLink);
    //     tempLink.click();
    //     document.body.removeChild(tempLink);
    // });
    var content = cardElement.innerText;
    navigator.clipboard.writeText(content);

    console.log(content)

}

// function copySignature() {
//     // This variable stores the complete HTML content of your signature
//     var signatureContent = document.getElementById("card").innerHTML;
  
//     // Create a temporary element to hold the signature text
//     var tempInput = document.createElement("textarea");
//     tempInput.value = signatureContent;
//     document.body.appendChild(tempInput);
  
//     // Select the signature text
//     tempInput.select();
  
//     // Copy the selected text to clipboard
//     try {
//       var successful = navigator.clipboard.writeText(tempInput.value);
//       var message = successful ? "Signature copied successfully!" : "Couldn't copy signature. Please try again.";
//       alert(message);
//     } catch (err) {
//       console.error("Error copying signature:", err);
//       alert("An error occurred while copying the signature. Please try again.");
//     }
  
//     // Remove the temporary element
//     document.body.removeChild(tempInput);
//   }

function copySignatureText() {
    // Get the HTML content of your signature
    let contentToCopy = document.getElementById("card");
    
    // Create a range object to select the content
    const range = document.createRange();
    range.selectNode(contentToCopy);

    // Select the content
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copy the selected content to the clipboard
    document.execCommand('copy');

    // Deselect the content
    window.getSelection().removeAllRanges();

    // Inform the user that the content has been copied
    alert('Content copied to clipboard');
    
  }
  
  