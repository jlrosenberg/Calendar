function eventClicked(eventID){
  //display model dialog with event details
  alert(eventID);
  var popupID=eventID+"popup";
  var popup = document.getElementById(popupID);
  popup.innerHTML=generateEventPopupHTML();

  //Display the popup
  popup.style.display = "block";

}


function hideElementByID(elementID){
  document.getElementById(elementID).style.display="none";
}
/**
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
**/

/*Generates the html block for an event popup. Should
contain time, location, description, etc.

The outer div should be of class "popup-content", and div
needs to contain a close span.
*/
function generateEventPopupHTML(eventID){
  return "<div class=\"popup-content\">"+
"<span class=\"close\" onclick=\"hideElementByID('12345popup')\">&times;</span>"+
    "<p>Some text in the Popup..</p></div>";
}
