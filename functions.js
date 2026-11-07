/* Make menu content visible when clicking */
function viewMenuContent() {
    document.getElementById("menu-content").classList.toggle("show");
}





let n = 0;


function expandMenu() {


  if(n==0){

  document.getElementById("menu-content").style.fontSize = "18px";
  document.getElementById("menu-content").style.width = "300px";

  n = 1
  
}else{

  document.getElementById("menu-content").style.fontSize = "0px";
  document.getElementById("menu-content").style.width = "0px";

  n = 0

}


}








document.getElementById("menu-content").addEventListener("touch", function (e) {
  e.stopPropagation();
});



/* Ensure the video plays only once it has fully loaded */

const video = document.getElementById("teachers-video");

video.addEventListener("canplaythrough", function () {
  video.play();
}, { once: true });





/* Play all videos after one another */

document.addEventListener("DOMContentLoaded", () => {
  const first = document.getElementById("teachers-video");
  const second = document.getElementById("teachers-video-next");
  if (!first || !second) return;

  const parts = [
    "DecaVitas_video_12fps_part1.mp4",
    "DecaVitas_video_12fps_part2.mp4",
    "DecaVitas_video_12fps_part3.mp4",
    "DecaVitas_video_12fps_part4.mp4",
    "DecaVitas_video_12fps_part5.mp4",
    "DecaVitas_video_12fps_part6.mp4"
  ];
  let current = 0;
  let front = first;   // videon som syns just nu
  let back = second;   // videon som förladdas

  const nextIndex = (i) => (i + 1) % parts.length;

  function preload() {
    back.src = parts[nextIndex(current)];
    back.load();
  }

  function onEnded() {
    // starta den förladdade videon och tona över till den
    current = nextIndex(current);
    back.currentTime = 0;
    back.play();
    back.classList.add("active");
    front.classList.remove("active");

    // byt roller
    [front, back] = [back, front];

    // förladda nästa del när övertoningen är klar
    setTimeout(preload, 600);
  }

  first.addEventListener("ended", onEnded);
  second.addEventListener("ended", onEnded);

  preload();
});
