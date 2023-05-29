<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Barcode Scanner Demo</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/quagga/0.12.1/quagga.min.js"></script>
  <script>
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#video')
      },
      decoder : {
        readers : ["ean_reader"]
      }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });
    
    Quagga.onDetected(function(result) {
      console.log(result.codeResult.code);
      // compare the result with the stored data to check if it exists
      if (result.codeResult.code === "stored_data") {
        console.log("Match found!");
      } else {
        console.log("No match found.");
      }
    });
  </script>
</head>
<body>
  <div id="video"></div>
</body>
</html>
