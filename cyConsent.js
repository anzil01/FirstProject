// Function to check if cookies are supported
function areCookiesSupported() {
  try {
    document.cookie = "testcookie=testvalue;";
    var cookiesEnabled = document.cookie.indexOf("testcookie=testvalue") !== -1;
    console.log(cookiesEnabled);
    // Clean up the test cookie
    // document.cookie = 'testcookie=;';
    return cookiesEnabled;
  } catch (error) {
    return false;
  }
}

if (areCookiesSupported()) {
  let cyConsentScript = document.createElement("script");
  cyConsentScript.src =
    "https://scriptstaging.cookieyes.com/client_data/855fea2dfee421b38de6ab26/script.js";
  cyConsentScript.type = "text/javascript";
  cyConsentScript.id = "cookieyes";

  document.head.appendChild(cyConsentScript);
}
