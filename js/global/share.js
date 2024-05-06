export function share() => {
  
if (navigator.share) {
    const title = document.title;
    const header = document.querySelector("header").innerText;
    // If Web Share API is supported, enable the Web Share API button
    const shareButton = document.getElementById("main-share");
    shareButton.style.display = "flex"; // Show the button
    shareButton.addEventListener("click", () => {
  
      navigator
        .share({
          title,
          text: header,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Sharing failed:", error));
    });
  
  } else {
    // Enable the sharing links button
    const fallbackShareBtn = document.getElementById("fallback-share");
    fallbackShareBtn.style.display = "flex";
  }

const sharingURL = window.location.href;

  function popUpShare(sharingURL) {
    
    // Open a new pop-up window with the sharing URL.
    window.open(sharingURL, 'CustomShareWindow', 'width=500, height=400, left=400, top=100');
  }
  
  const facebook = document.getElementById("fb-share");
  const linkedin = document.getElementById("in-share");
  const twitter = document.getElementById("x-share");
  
  facebook.addEventListener("click", ()=> popUpShare(
    `https://www.facebook.com/sharer/sharer.php?u=${sharingURL}`
    ));

  linkedin.addEventListener("click", ()=> popUpShare(
    `https://www.linkedin.com/sharing/share-offsite/?url=${sharingURL}`
    ));
    
  twitter.addEventListener("click", ()=> popUpShare(
    `https://twitter.com/share?url=${sharingURL}`
    ));

}
