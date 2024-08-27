document.getElementById("generate-btn").addEventListener("click", function() {
    const length = 12
    const charset = "qwertyuiop[]asdfghjklzxcvbnm?!1234567890QWERTYUIOOPPAGCGJJKHDJDKNCVBGXM@#"
    let password = "";

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random()*charset.length);
        password += charset.charAt(randomIndex);
    }
    document.getElementById("password").value=password;
})

