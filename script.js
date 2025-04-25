const modal = document.getElementById("modal");
const close = document.querySelector(".close");
const modalText = document.getElementById("modal-text");
const countdownBox = document.getElementById("countdown-box");
const memoryBox = document.getElementById("memory-box");

const dailyQuotes = [
  "✨ You’ve made it this far — don’t stop now!",
  "💖 You’re doing better than you think.",
  "🤏 One small step at a time and you're very close. You got this!",
  "🧠 You are smart. You are capable. You are enough.",
  "🩺 You already have the heart of a doctor. Now you're building the armor.",
  "📖 Even when you're tired, your dream hasn't changed. Keep reading towards it.",
  "💪 Even on hard days, you’re showing up. That’s strength.",
  "👩‍⚕️ It’s okay to feel overwhelmed. The future doctor in you is still growing — be gentle with her.",
  "☀️ A gentle reminder: you’re not alone. We're rooting for you!",
  "🦋 You don’t have to be perfect. You just have to not give up."
];

document.getElementById("note1").onclick = () => {
  // Get the current day of the year
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // Pick quote based on the day
  const quoteIndex = dayOfYear % dailyQuotes.length;
  const quote = dailyQuotes[quoteIndex];

  // Show modal and quote
  modal.style.display = "block";
  modalText.innerHTML = `<em>${quote}</em>`;
  modalText.style.display = "block";

  // Hide others
  countdownBox.style.display = "none";
  memoryBox.style.display = "none";
};


document.getElementById("note2").onclick = () => {
  // Calculate days left
  const examDate = new Date("May 4, 2025");
  const now = new Date();
  const days = Math.ceil((examDate - now) / (1000 * 60 * 60 * 24));
  document.getElementById("day-count").textContent = days;

  // Show the modal
  modal.style.display = "block";

  // Show countdown only
  countdownBox.style.display = "block";
  modalText.style.display = "none";
};

document.getElementById("note3").onclick = () => {
  modal.style.display = "block";

  // Show memory photo + voice
  memoryBox.style.display = "block";

  // Hide others
  modalText.style.display = "none";
  countdownBox.style.display = "none";
};

close.onclick = () => {
  modal.style.display = "none";

  // Hide all modals
  modalText.style.display = "block";
  countdownBox.style.display = "none";
  memoryBox.style.display = "none";
};
