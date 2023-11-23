////////////////////////////////////////////////////////////
////////////////////    NOTIFICATIONS   ////////////////////
////////////////////////////////////////////////////////////
  
const notificationBox = document.getElementById("notification-box"); // Add notification box

// Function to show a notification
function showNotification(message) {
  notificationText.textContent = message;
  notificationBox.style.display = "block";
}

// Function to close the notification
function closeNotification() {
  notificationBox.style.display = "none";
}


///////////////////////////////////////////////////////////
/////////////////////  ACHIEVEMENTS  //////////////////////
///////////////////////////////////////////////////////////


// Define achievement conditions as an array of objects
const achievements = [
  // manual click achievements
  { 
    clicks: 100, 
    message1: "You manually applied to 10 jobs!",
    message2: "test1" 
  },
  { clicks: 101,
    message1: "You manually applied to 100 jobs!",
    message2: "test2" 
  },
  { clicks: 102, 
    message1: "You manually applied to 1000 jobs!", 
    message2: "test3" 
  },

  // job application achievements
  { 
    apps: 69, 
    message1: "You applied to 69 jobs!",
    message2: "Nice" 
  },
  { apps: 6969,
    message1: "You applied to 6969 jobs!",
    message2: "Very nice" 
  },
  { apps: 10000,
    message1: "You applied to 10000 jobs!",
    message2: "You feel kinda empty inside" 
  },
  { apps: 42069, 
    message1: "You applied to 42069 jobs!", 
    message2: "You blow a small puff of air out of your nostrils" 
  },

  // rejection achievements
  { 
    // color: "yellow",
    rejections: 1, 
    message1: "1 rejection",
    message2: "your 1st rejection!" 
  },
  { 
    // color: "yellow",
    rejections: 10,
    message1: "10 rejections",
    message2: "frick" 
  },

  // // upgrade achievements
  // { 
  //   upgrade1: 1, 
  //   message1: "Your first time actually trying!",
  //   message2: "Owning 1 Trying Harder"
  // },
  // { upgrade1: 5,
  //   message1: "Are you even trying?",
  //   message2: "Owning 5 Trying Harders" 
  // },



  // Add more achievements as needed
];

// Initialize an array to store achieved conditions
const achievedConditions = [];
//////////////////////////////////////////////////

// Function to check for achievements
function checkAchievements() {
  for (const achievement of achievements) {
      if ((manualClick >= achievement.clicks || jobApplications >= achievement.apps || totalRejections === achievement.rejections) &&
        !achievedConditions.includes(achievement.message1)) {
        showAchievement(achievement.message1, achievement.message2);
        achievedConditions.push(achievement.message1);
      }
    }
  }

// Function to display achievements in the notification box
function showAchievement(message1, message2, color) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.style.backgroundColor = color; // Set background color based on the 'color' parameter

  const message1Element = document.createElement("div");
  message1Element.textContent = message1;
  message1Element.className = "achievement-message1";

  const message2Element = document.createElement("div");
  message2Element.textContent = message2;
  message2Element.className = "achievement-message2";

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.className = "close-button";

  closeButton.addEventListener("click", () => {
      notificationBox.removeChild(notification);
  });

  notification.appendChild(message1Element);
  notification.appendChild(message2Element);
  notification.appendChild(closeButton);

  notificationBox.appendChild(notification);
}


///////////////////////////////////////////////////////////
/////////////////////  RANDOM EVENT  //////////////////////
///////////////////////////////////////////////////////////

const triggerRandomEventButton = document.getElementById("trigger-random-event-button");
triggerRandomEventButton.addEventListener("click", randomEvent);




// Define random events as an array of objects
const randomEventPool = [
  { 
      color: "red",
      effect_motivation: -10,
      message1: "You spilled coffee on yourself",
      message2: "-10 motivation"
  },
  { 
      color: "green",
      effect_motivation: 10,
      message1: "You find $2 on the floor",
      message2: "+10 motivation"
  }
];

let timer = null; // Initialize timer

// Function to trigger random events
function randomEvent() {
  const randomIndex = Math.floor(Math.random() * randomEvents.length);
  const event = randomEventPool[randomIndex];
  showRandomEvent(event);
  applyRandomEventEffects(event);
}

// Function to display random events in the notification box
function showRandomEvent(event) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.style.backgroundColor = event.color; // Set background color based on the color in the event object

  const message1Element = document.createElement("div");
  message1Element.textContent = event.message1;
  message1Element.className = "event-message1";

  const message2Element = document.createElement("div");
  message2Element.textContent = event.message2;
  message2Element.className = "event-message2";

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.className = "close-button";

  closeButton.addEventListener("click", () => {
    notificationBox.removeChild(notification);
  });

  notification.appendChild(message1Element);
  notification.appendChild(message2Element);
  notification.appendChild(closeButton);

  notificationBox.appendChild(notification);

  setTimeout(() => {
    notificationBox.removeChild(notification);
  }, 5000);
}

// Function to apply the effects of the random event
function applyRandomEventEffects(event) {
  motivation += event.effect_motivation;
  updateMotivation();
}

// Set an interval to trigger random events every 60 seconds
setInterval(randomEvent, 60000);


////////////////////////////////////////////////////////////
//////////////////////   REJECTIONS   //////////////////////
////////////////////////////////////////////////////////////

// Define rejections with color, totalApps, and messages
const randomRejections = [
  {
    color: "grey",
    effect_motivation: -3,
    message1: "REJECTION",
    message2: "Thank you for your interest, unfortunately..",
  },
  {
    color: "grey",
    effect_motivation: -2,
    message1: "REJECTION",
    message2: "Your app was impressive, but..",
  }
  // Add more rejection events as needed
];

// Function to trigger random REJECTION events
function randomRejection() {
  const randomIndex = Math.floor(Math.random() * randomRejections.length);
  const rejectionEvent = randomRejections[randomIndex];
  showRandomRejection(rejectionEvent);
  applyRandomRejectionEffects(rejectionEvent);
}


// Function to display achievements in the notification box
function showRandomRejection(rejectionEvent) {
  totalRejections += 1;
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.style.backgroundColor = rejectionEvent.color;

  
  const message1Element = document.createElement("div");
  message1Element.textContent = rejectionEvent.message1;
  message1Element.className = "rejection-message1";
  
  const message2Element = document.createElement("div");
  message2Element.textContent = rejectionEvent.message2;
  message2Element.className = "rejection-message2";
  
  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.className = "close-button";
  
  closeButton.addEventListener("click", () => {
      notificationBox.removeChild(notification);
  });
  
  notification.appendChild(message1Element);
  notification.appendChild(message2Element);
  notification.appendChild(closeButton);
  
  notificationBox.appendChild(notification);
}

// Function to apply the effects of the rejection event
function applyRandomRejectionEffects(rejectionEvent) {
  motivation += rejectionEvent.effect_motivation;
  updateMotivation();
}

// Set an interval to trigger random events every 120 seconds
setInterval(randomRejection, 120000);





//////

////////////////////////////////////////////////////////
////////////////////    MUSIC   ////////////////////////
////////////////////////////////////////////////////////
  
// START MUSIC
const bgMusic = document.getElementById("background-music");
const muteButton = document.getElementById("mute-button");
const volumeSlider = document.getElementById("volume-slider");

// Function to start playing the background music
function playBackgroundMusic() {
  bgMusic.play();
}

// Function to toggle the background music (mute/unmute)
function toggleMute() {
if (bgMusic.muted) {
    bgMusic.muted = false;
    muteButton.textContent = "Mute";
} else {
    bgMusic.muted = true;
    muteButton.textContent = "Unmute";
}
}

// Function to handle volume change
function changeVolume() {

bgMusic.volume = volumeSlider.value;
}

volumeSlider.addEventListener("input", changeVolume);
muteButton.addEventListener("click", toggleMute);

// Add an event listener to start playing the music when the page loads
window.addEventListener("load", playBackgroundMusic);