const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const paramLang = params.get("lang");
const availableLang = ["ar", "en", "fr", "tr"];

if (availableLang.includes(paramLang)) {
  const allLangTags = document.querySelectorAll(`.${paramLang}`);
  allLangTags.forEach(ele => ele.classList.remove(`${paramLang}`));
  loadSubmitTextAreaContent(paramLang);
  document.getElementById("languageSelect").value = paramLang;
} else {
  const allLangTags = document.querySelectorAll(".en");
  allLangTags.forEach(ele => ele.classList.remove("en"));
}

function enableSubmission() {
  const isChecked = Array.from(document.querySelectorAll('input[type="checkbox"]'));
  const enableSubmitBtn = isChecked.some(checkbox => checkbox.checked);
  const submitBtn = document.querySelector(".submission-btn");
  if (enableSubmitBtn) {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "rgb(67,130,247)";
    submitBtn.style.border = "solid 2px rgb(67,130,247)";
  } else {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "rgb(128,128,128)";
    submitBtn.style.border = "solid 2px rgb(128,128,128)";
  }
}
function loadSubmitTextAreaContent(lang) {
  switch (lang) {
    case "ar":
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      document.querySelector(".tell-us-more").placeholder = "نود أن نسمع المزيد منك. هل يمكنك أن تقول لنا المزيد...";
      document.querySelector(".submission-btn").innerHTML = "إرسال";
      break;
    case "fr":
      document.documentElement.lang = "fr";
      document.documentElement.dir = "ltr";
      document.querySelector(".tell-us-more").placeholder =
          "Nous aimerions en savoir plus de votre part. Pourriez-vous nous en dire plus...";
      document.querySelector(".submission-btn").innerHTML = "Soumettre";
      break;
    case "tr":
      document.documentElement.lang = "tr";
      document.documentElement.dir = "ltr";
      document.querySelector(".tell-us-more").placeholder =
          "sizden daha fazlasını duymak isteriz. lütfen bize daha fazlasını anlatır mısınız...";
      document.querySelector(".submission-btn").innerHTML = "Gönder";
      break;
    default:
      break;
  }
}

function redirectToLang(lang) {
  const currentURL = new URL(window.location.href);
  currentURL.searchParams.set("lang", lang);
  window.location.href = currentURL.toString();
}

function browserDetect() {
  let userAgent = navigator.userAgent;
  if (userAgent.match(/edg/i)) {
    window.location.href =
        "https://microsoftedge.microsoft.com/addons/detail/quran-tab/hnfepfakgcalolgicjdfmaaellnondji?hl=es-ES";
  } else {
    window.location.href = "https://chromewebstore.google.com/detail/quran-tab/afaihcdgkjebgabomemccdneglknjkdd";
  }
}
