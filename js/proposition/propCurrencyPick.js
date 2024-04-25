import gsap from 'gsap';

function propCurrencyPick() {

    var euro = gsap.utils.toArray([".eur-selected", ".cb-eur__cta", ".reb-s-eur__cta", ".reb-m-eur__cta", ".reb-xxl-eur__cta", ".spa-eur__cta"]);
    var euroSelect = gsap.utils.toArray(".eur-select");
    var usd = gsap.utils.toArray([".usd-selected", ".cb-usd__cta", ".reb-s-usd__cta", ".reb-m-usd__cta", ".reb-xxl-usd__cta", ".spa-usd__cta"]);
    var usdSelect = gsap.utils.toArray(".usd-select");
    var gbp = gsap.utils.toArray([".gbp-selected", ".cb-gbp__cta", ".reb-s-gbp__cta", ".reb-m-gbp__cta", ".reb-xxl-gbp__cta", ".spa-gbp__cta"]);
    var gbpSelect = gsap.utils.toArray(".gbp-select");
    var sek = gsap.utils.toArray([".sek-selected", ".cb-sek__cta", ".reb-s-sek__cta", ".reb-m-sek__cta", ".reb-xxl-sek__cta", ".spa-sek__cta"]);
    var sekSelect = gsap.utils.toArray(".sek-select");
    var sgd = gsap.utils.toArray([".sgd-selected", ".cb-sgd__cta", ".reb-s-sgd__cta", ".reb-m-sgd__cta", ".reb-xxl-sgd__cta", ".spa-sgd__cta"]);
    var sgdSelect = gsap.utils.toArray(".sgd-select");


// REMEMBER EURO
if (localStorage.getItem("eurSelectPlayed", true)) {

    gsap.set(euro, { display: "flex" });
    gsap.set(usd, { display: "none" });
    gsap.set(gbp, { display: "none" });
    gsap.set(sek, { display: "none" });
    gsap.set(sgd, { display: "none" });

  } 

// REMEMBER USD
if (localStorage.getItem("usdSelectPlayed", true)) {
    
    gsap.set(usd, { display: "flex" });
    gsap.set(euro, { display: "none" });
    gsap.set(gbp, { display: "none" });
    gsap.set(sek, { display: "none" });
    gsap.set(sgd, { display: "none" });
    
  } 

// REMEMBER GBP
if (localStorage.getItem("gbpSelectPlayed", true)) {
    
    gsap.set(gbp, { display: "flex" });
    gsap.set(euro, { display: "none" });
    gsap.set(usd, { display: "none" });
    gsap.set(sek, { display: "none" });
    gsap.set(sgd, { display: "none" });
    
  } 

// REMEMBER SEK
if (localStorage.getItem("sekSelectPlayed", true)) {
    
    gsap.set(sek, { display: "flex" });
    gsap.set(euro, { display: "none" });
    gsap.set(usd, { display: "none" });
    gsap.set(gbp, { display: "none" });
    gsap.set(sgd, { display: "none" });
    
  }
  
// REMEMBER SGD
if (localStorage.getItem("sgdSelectPlayed", true)) {
    
    gsap.set(sgd, { display: "flex" });
    gsap.set(euro, { display: "none" });
    gsap.set(usd, { display: "none" });
    gsap.set(gbp, { display: "none" });
    gsap.set(sek, { display: "none" });
    
  } 

// SELECT EURO 
euroSelect.forEach(euroSelect => {

var euroSelect_tl = gsap.timeline({ paused: true });
      
euroSelect_tl
   .set(euro, { display: "flex" })
   .set(usd,  { display: "none" })
   .set(gbp, { display: "none" })
   .set(sek, { display: "none" })
   .set(sgd, { display: "none", onComplete() { 
    localStorage.setItem("eurSelectPlayed", true), 
    localStorage.removeItem("usdSelectPlayed"),
    localStorage.removeItem("gbpSelectPlayed"),
    localStorage.removeItem("sekSelectPlayed"),
    localStorage.removeItem("sgdSelectPlayed") } });

euroSelect.addEventListener('click', () => {
    euroSelect_tl.play();
        });
       }) 

// SELECT USD
usdSelect.forEach(usdSelect => {

    var usdSelect_tl = gsap.timeline({ paused: true });
          
    usdSelect_tl
    .set(euro, { display: "none" })
    .set(usd, { display: "flex" })
    .set(gbp, { display: "none" })
    .set(sek, { display: "none" })
    .set(sgd, { display: "none", onComplete() { 
    localStorage.setItem("usdSelectPlayed", true), 
    localStorage.removeItem("eurSelectPlayed"),
    localStorage.removeItem("gbpSelectPlayed"),
    localStorage.removeItem("sekSelectPlayed"),
    localStorage.removeItem("sgdSelectPlayed") } });
    
    usdSelect.addEventListener('click', () => {
        usdSelect_tl.play();
            });
           }) 

// SELECT GBP
gbpSelect.forEach(gbpSelect => {

    var gbpSelect_tl = gsap.timeline({ paused: true });
          
    gbpSelect_tl
       .set(euro, { display: "none" })
       .set(usd, { display: "none" })
       .set(gbp, { display: "flex" })
       .set(sek, { display: "none" })
       .set(sgd, { display: "none", onComplete() { 
        localStorage.setItem("gbpSelectPlayed", true), 
        localStorage.removeItem("eurSelectPlayed"),
        localStorage.removeItem("usdSelectPlayed"),
        localStorage.removeItem("sekSelectPlayed"),
        localStorage.removeItem("sgdSelectPlayed") } });
    
    gbpSelect.addEventListener('click', () => {
        gbpSelect_tl.play();
            });
           }) 

// SELECT SEK 
sekSelect.forEach(sekSelect => {

    var sekSelect_tl = gsap.timeline({ paused: true });
          
    sekSelect_tl
       .set(euro, { display: "none" })
       .set(usd, { display: "none" })
       .set(gbp, { display: "none" })
       .set(sek, { display: "flex" })
       .set(sgd, { display: "none", onComplete() { 
        localStorage.setItem("sekSelectPlayed", true), 
        localStorage.removeItem("eurSelectPlayed"),
        localStorage.removeItem("usdSelectPlayed"),
        localStorage.removeItem("gbpSelectPlayed"),
        localStorage.removeItem("sgdSelectPlayed") } });
    
    sekSelect.addEventListener('click', () => {
        sekSelect_tl.play();
            });
           }) 

// SELECT SGD 
sgdSelect.forEach(sgdSelect => {

    var sgdSelect_tl = gsap.timeline({ paused: true });
          
    sgdSelect_tl
       .set(euro, { display: "none" })
       .set(usd, { display: "none" })
       .set(gbp, { display: "none" })
       .set(sek, { display: "none" })
       .set(sgd, { display: "flex", onComplete() { 
        localStorage.setItem("sgdSelectPlayed", true), 
        localStorage.removeItem("eurSelectPlayed"),
        localStorage.removeItem("usdSelectPlayed"),
        localStorage.removeItem("sekSelectPlayed"),
        localStorage.removeItem("gbpSelectPlayed") } });
    
    sgdSelect.addEventListener('click', () => {
        sgdSelect_tl.play();
            });
           }) 
}

export default propCurrencyPick;