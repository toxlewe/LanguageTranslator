const fromText = document.querySelector(".form-text"),
  toText = document.querySelector(".to-text"), // Fixed the selector for "toText"
  selectTag = document.querySelectorAll("select"),
  translateBtn = document.querySelector("button");

selectTag.forEach((tag, id) => {
  for (const country_code in countries) {
    let selected;
    if (id == 0 && country_code == "en-GB") {
      selected = "selected";
    } else if (id == 1 && country_code == "hi-IN") {
      selected = "selected";
    }

    let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`; // Added quotes around attribute values
    tag.insertAdjacentHTML("beforeend", option);
  }
});

translateBtn.addEventListener("click", () => {
  let text = fromText.value, // Changed "fromText.values" to "fromText.value"
    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value;
  let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`; // Used backticks for template literals
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      toText.value = data.responseData.translatedText;
    });
});
