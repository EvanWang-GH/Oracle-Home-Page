function fadeOut(index, isForward) {
  let $obj = $slide.eq(index);
  let $pic = $obj.children(".pic");
  let $fade = $obj.find(".fade");
  $obj.removeClass("banner-active");
  $pic.animate(
    { left: isForward ? "-50px" : "50px" },
    { duration: 2000, queue: false }
  );
  $fade.animate({ opacity: 0 }, { duration: 2000, queue: false });
  $pill.eq(index).removeClass("pill-active");
}
function fadeIn(index, isForward) {
  let $obj = $slide.eq(index);
  let $pic = $obj.children(".pic");
  let $fade = $obj.find(".fade");
  $obj.addClass("banner-active");
  $pic.css("left", isForward ? "50px" : "-50px");
  $pic.animate({ left: 0 }, { duration: 2000, queue: false });
  $fade.animate({ opacity: 1 }, { duration: 2000, queue: false });
  $pill.eq(index).addClass("pill-active");
}
function move(isForward, index = null) {
  let $bannerActive = $(".banner-active");
  fadeOut($bannerActive.index(), isForward);

  if (index == null) {
    index = $bannerActive.index();
    isForward ? index++ : index--;
    index = index == $slide.length ? 0 : index;
    index = index == -1 ? $slide.length - 1 : index;
  }
  fadeIn(index, isForward);
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(move, 3000, true);
}
let $slide = $(".slide");
let $pill = $(".pill");
let $arrowRight = $("#arrowRight");
let $arrowLeft = $("#arrowLeft");
let timer = setInterval(move, 3000, true);

fadeIn(0);

$arrowRight.on("click", function () {
  resetTimer();
  move(true);
});
$arrowLeft.on("click", function () {
  resetTimer();
  move(false);
});
$pill.on("click", function () {
  resetTimer();
  let $bannerActive = $(".banner-active");
  let prevIndex = $bannerActive.index();
  let index = $(this).index();
  let isForward = index > prevIndex;
  if (index == prevIndex) {
    return;
  }
  fadeOut(prevIndex, isForward);
  fadeIn(index, isForward);
});
