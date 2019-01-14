// TODO: functionality
// - [x] copy to clipboard
// - [x] success msg (update button icon)
// - [x] validate words count input (type number)
// - [...] init and update textarea on change words count

// main
////////////////////////////////////////////////////////////////////////////////
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus integer feugiat scelerisque varius morbi. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Amet consectetur adipiscing elit duis tristique. Nisl tincidunt eget nullam non nisi est sit. Morbi blandit cursus risus at. Proin libero nunc consequat interdum varius sit amet. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Orci dapibus ultrices in iaculis nunc sed augue. Ultrices gravida dictum fusce ut placerat orci nulla. Vitae sapien pellentesque habitant morbi. Mauris a diam maecenas sed enim. Netus et malesuada fames ac. Amet consectetur adipiscing elit duis. Diam quam nulla porttitor massa id neque. Dapibus ultrices in iaculis nunc sed. Pellentesque massa placerat duis ultricies lacus sed turpis. Id volutpat lacus laoreet non curabitur gravida arcu. Augue eget arcu dictum varius duis at consectetur lorem. Posuere lorem ipsum dolor sit amet consectetur. Justo laoreet sit amet cursus sit amet. Libero id faucibus nisl tincidunt eget nullam non nisi. Massa placerat duis ultricies lacus sed turpis. Velit dignissim sodales ut eu sem integer vitae justo. Mauris ultrices eros in cursus. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. A iaculis at erat pellentesque adipiscing commodo elit at.";
const $text = document.querySelector("#text");
const $button = document.querySelector("#button");
const $words = document.querySelector("#words");

$words.addEventListener("input", updateText);

function copyToClipboard() {
  $text.select();
  document.execCommand("copy");
  $button.classList.add("-success");
  setTimeout(() => {
    $button.classList.remove("-success");
  }, 1500);
}

function updateText() {
  console.log("update...");
  console.log(lorem);
  $text.value = $words.value;
}

// init
////////////////////////////////////////////////////////////////////////////////
updateText();
