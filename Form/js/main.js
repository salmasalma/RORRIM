// Initialize Firebase
var config = {
  apiKey: "AIzaSyAlBF2dxlKUVpVLuev4DRl7PUqdSBTxgVI",
  authDomain: "rorrim-13300.firebaseapp.com",
  databaseURL: "https://rorrim-13300.firebaseio.com",
  projectId: "rorrim-13300",
  storageBucket: "rorrim-13300.appspot.com",
  messagingSenderId: "861272397704"
};
firebase.initializeApp(config);



function getInputVal(id) {
  return document.getElementById(id).value;
}
document.getElementById('contactform').addEventListener('submit', submitform);
function submitform(e) {
  e.preventDefault();
  alert('Your data is submitted! Don t worry we are good people :)');
  var name = getInputVal('name');
  var email = getInputVal('email');
  var country = getInputVal('country');
  var color = getInputVal('color');

  saveMessage(name, email, country, color);
  document.getElementById('contactform').reset();
}

var message = firebase.database().ref('hey');
function saveMessage(name, email, country, color) {
  var newMessage = message.push('hey');
  newMessage.set({
    name: name,
    email: email,
    country: country,
    color: color,
  })
}