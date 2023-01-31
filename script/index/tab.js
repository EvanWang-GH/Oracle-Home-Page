let $title = $(".tab-title>li");
let $content = $(".tab-content>li");
$title.on("click", function () {
  let $self = $(this);
  $self.addClass("active").siblings().removeClass("active");
  let $target = $content.eq($self.index());
  $target.addClass("active");
  $target.siblings().removeClass("active");
});
