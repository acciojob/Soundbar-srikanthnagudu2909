//your JS code here. If required.
// List of sounds in the sounds folder
const sounds = ["sound1", "sound2", "sound3"]; // add more if available

const buttonsContainer = document.getElementById("buttons");

// Create buttons for each sound
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    const audio = document.getElementById(sound);
    audio.play();
  });

  buttonsContainer.appendChild(btn);

  // Create audio element
  const audio = document.createElement("audio");
  audio.id = sound;
  audio.src = `sounds/${sound}.mp3`;
  document.body.appendChild(audio);
});

// Create stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("btn", "stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", stopSounds);

buttonsContainer.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
