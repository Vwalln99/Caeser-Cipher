document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("encryptButton").addEventListener("click", function () {
        let message = document.getElementById("message").value;
        let shift = parseInt(document.getElementById("shift").value);
        let encryptedMessage = "";

        for (let i = 0; i < message.length; i++) {
            let charCode = message.charCodeAt(i);

            if (isUppercase(charCode)) {
                encryptedMessage += encryptUppercase(charCode, shift);
            } else if (isLowercase(charCode)) {
                encryptedMessage += encryptLowercase(charCode, shift);
            } else {
                encryptedMessage += message.charAt(i);
            }
        }

        document.getElementById("reset").addEventListener("click", function () {
            document.getElementById("message").value = "";
            document.getElementById("shift").value = "";
            document.getElementById("encryptedMessage").textContent = "###";
        });

        document.getElementById("encryptedMessage").textContent = encryptedMessage;
    });
});

function isUppercase(charCode) {
    return charCode >= 65 && charCode <= 90;
}

function isLowercase(charCode) {
    return charCode >= 97 && charCode <= 122;
}

function encryptUppercase(charCode, shift) {
    return String.fromCharCode(((charCode - 65 + shift + 26) % 26) + 65);
}

function encryptLowercase(charCode, shift) {
    return String.fromCharCode(((charCode - 97 + shift + 26) % 26) + 97);
}

