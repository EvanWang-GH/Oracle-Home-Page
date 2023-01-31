let $drawer = $(".drawer");
let $li = $drawer.find("li.dp-flex");
let $extra = $(".extra");
$li.on("click", function () {
  let $current = $(this);
  let $currentExt = $extra.eq($current.index());
  if ($current.is(".active")) {
    $current.removeClass("active");
    $currentExt.slideUp();
  } else {
    $current.addClass("active");
    $current.siblings().removeClass("active");
    $currentExt.siblings(".extra").hide();
    $currentExt.slideDown();
  }
});
