var anchors = document.getElementsByTagName('a')
  , length = anchors.length;

for(var i = 0; i < length; i++){
  anchors[i].setAttribute("target", "_blank");
}
