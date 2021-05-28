document.getElementById("container").style.display = "none";
document.getElementById("msg").style.display = "none";
function GFG_Fun() {
  var idval;
  var url = document.getElementById("GFG_UP").value;

  VID_REGEX =
    /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  idval = url.match(VID_REGEX)[1];

  document.getElementById("imageBox").src =
    "http://img.youtube.com/vi/" + idval + "/sddefault.jpg";
  document.getElementById("imageBox1").src =
    "http://img.youtube.com/vi/" + idval + "/mqdefault.jpg";

  document.getElementById("imageBox2").src =
    "http://img.youtube.com/vi/" + idval + "/hqdefault.jpg";
  document.getElementById("imageBox3").src =
    "http://img.youtube.com/vi/" + idval + "/maxresdefault.jpg";
  document.getElementById("msg").style.display = "block";
  document.getElementById("container").style.display = "block";
}
