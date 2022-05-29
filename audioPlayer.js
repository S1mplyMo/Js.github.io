function playAudio(Audioname) {
  var bleep = new Audio();
  bleep.src = Audioname;
 
  bleep.play();
}
let Sound = [
  '1.wav',
  '2.wav',
  '3.wav',
  '4.wav'
];

for (let i = 0; i < Sound.length; i++) {
  let button = document.createElement('button');
  let label = Sound[i].slice(0, -4);
  button.onclick = function() {playAudio(Sound[i])};
  
  let buttonText = document.createTextNode(label);
  button.appendChild(buttonText);
  document.body.append(button);
  
  button.classList.add("mybutton-class");
}
