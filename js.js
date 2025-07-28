const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=fr&dt=t&q=Hello%20world`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const translated = data[0][0][0];
    console.log("Translated:", translated);
  });
