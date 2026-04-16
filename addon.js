
/* WooblyDisc Addon System */

let userPlan = localStorage.getItem("woobly_plan") || "free";

document.addEventListener("DOMContentLoaded", () => {

  injectNavbar();
  injectWatermark();
  injectPremiumPanel();
  injectFrameLibrary();
  applyPlan();

});

function injectNavbar(){

  const nav = document.createElement("div");
  nav.className = "woobly-navbar";

  nav.innerHTML = `
    <div class="woobly-logo">WooblyDisc</div>

    <div class="woobly-links">
      <a href="#">Profile</a>
      <a href="#">Frames</a>
      <a href="#">Premium</a>
    </div>

    <button class="woobly-upgrade" onclick="buyPremium()">Upgrade</button>
  `;

  document.body.prepend(nav);

}

function injectWatermark(){

  const profile = document.querySelector(".profile");
  if(!profile) return;

  const wm = document.createElement("div");
  wm.id = "woobly-watermark";
  wm.className = "woobly-watermark";
  wm.innerText = "Created with WooblyDisc";

  profile.appendChild(wm);

}

function injectPremiumPanel(){

  const panel = document.createElement("div");
  panel.className = "woobly-premium";

  panel.innerHTML = `
    <h2>WooblyDisc Premium</h2>

    <div class="woobly-grid">

      <div class="woobly-card">
        <b>No Watermark</b>
        <p>Remove WooblyDisc watermark</p>
      </div>

      <div class="woobly-card">
        <b>Avatar Frames</b>
        <p>Unlock animated frames</p>
      </div>

      <div class="woobly-card">
        <b>Animated Banner</b>
        <p>Use GIF banners</p>
      </div>

      <div class="woobly-card">
        <b>HD Export</b>
        <p>Higher quality export</p>
      </div>

    </div>

    <br>

    <button onclick="buyPremium()" style="padding:10px;background:#5865f2;border:none;border-radius:6px;color:white;cursor:pointer;">
      Buy Premium (Saweria)
    </button>
  `;

  document.body.appendChild(panel);

}

function injectFrameLibrary(){

  const div = document.createElement("div");
  div.className = "frame-library";

  div.innerHTML = `
  <h3>Avatar Frames</h3>
  <div>
    <img src="frames/frame1.png" onclick="selectFrame(this)">
    <img src="frames/frame2.png" onclick="selectFrame(this)">
    <img src="frames/frame3.png" onclick="selectFrame(this)">
    <img src="frames/frame4.png" onclick="selectFrame(this)">
    <img src="frames/frame5.png" onclick="selectFrame(this)">
  </div>
  `;

  document.body.appendChild(div);

}

function selectFrame(el){

  if(userPlan !== "premium"){
    alert("Avatar frames require WooblyDisc Premium.");
    return;
  }

  const frame = document.getElementById("avatarFrame");
  if(frame){
    frame.src = el.src;
    frame.style.display = "block";
  }

}

function buyPremium(){

  window.open("https://saweria.co/USERNAMEKAMU","_blank");

}

function applyPlan(){

  if(userPlan === "premium"){
    const wm = document.getElementById("woobly-watermark");
    if(wm) wm.style.display = "none";
  }

}
