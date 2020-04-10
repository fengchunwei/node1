// 改变浏览器窗口获取不同图片
$(function(){
    function resize(){
      // 获取浏览器宽度
      var windowWidth = $(window).width();
  
      var isSmallScreen = windowWidth<768;
      console.log(isSmallScreen);
  
      // 根据isSmallScreen的值来切换图片
      var ida = $('.carousel-inner > .item');
      console.log(ida);
      ida.each(function (i, item) {
        // 把DOM对象转换为jq对象
        $item = $(item);
        var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
        console.log(imgSrc)
        $item.html('<img src="' + imgSrc + '"/>');
      })
  
      var $ulContainer = $('.nav-tabs');
      var width = 0;
      $ulContainer.children().each(function (index, element) {
        // 元素的宽度
        //  console.log( element.clientWidth)
        width += element.clientWidth;
      })
  
      //  解决在pc端出现滚动条
      if (width > $(window).width()) {
        $ulContainer.css('width', width).parent().css('overflow-x', 'scroll');
      }else{
        $ulContainer.css('width', 'auto').parent().css('overflow', 'hidden');
      }
    }
  
    $(window).on('resize', resize).trigger('resize');
  
  
    // 触发tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  
  
    // 选项卡滚动条实现
    // 1.拿到标签页的标签容器宽度
    // 2.获取所有子元素的和  li.widht+li.width.....
    // 3.遍历元素
    // 4.把宽度赋值给容器

//改变标题
//获取要点击的a
$('#newsTab .nav-pills a').on('click',function(){
  //获取当前要操作的元素
  $this = $(this);

  var title = $(this).data('title')

  //吧title复制给标题
  $('.newsTitle').text(title)
})


  })