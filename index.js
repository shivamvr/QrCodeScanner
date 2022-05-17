
function toast(status) {
    var x = document.getElementById("snackbar");
    if (status) {
        x.innerText = 'Auto Refersh Start'
    } else {
        x.innerText = 'Auto Refersh Stop'
    }
    x.className = "show";
    setTimeout(function () { x.classList.remove('show'); }, 3000);
}

function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);
