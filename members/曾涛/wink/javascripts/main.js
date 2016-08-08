
  $('.help').on('touchend', function(e){
    $('.help-tip').show()
           .next().show();
  });

  $('.help-close').on('touchend', function(e){
    $(this).hide()
           .prev('.help-tip').hide();
  });

  $('.reshot').on('touchend', function(e){
    uploader.addFile();
    // uploader.getFile();
  });

  // $('.upload').on('touchend', function(e){
  // });

  var $female = $('.pic-two .female'),
      $male = $('.pic-two .male'),
      femaleSrc = $female.attr('src'),
      maleSrc = $male.attr('src'),
      isToggle = false;

  $female.on('touchend', function(e){
      if (isToggle) return;
    if ($female.attr('src') === 'images/female.png') {
      $female.attr('src', 'images/female-2.png');
      isToggle = true;
    } else {
      $female.attr('src', femaleSrc);
      isToggle = false;
    }
  });

  $male.on('touchend', function(e){
      if (isToggle)
    if ($male.attr('src') === 'images/male.png') {
      $male.attr('src', 'images/male-2.png');
      isToggle = true;
    } else {
      $male.attr('src', maleSrc);
      isToggle = false;
    }
  });

  var uploader = Qiniu.uploader({
    runtimes: 'html5,flash,html',      // 上传模式,依次退化
    browse_button: 'pickfiles',         // 上传选择的点选按钮，**必需**
    uptoken : 'oVzGH3GXS72ah4todWOUas5zZ2ZoLSXxJa2civF0:QLdd3jNbjuKiWPGly6Wzt2srz4Q=:eyJyZXR1cm5Cb2R5Ijoie1wiYnVja2V0XCI6JChidWNrZXQpLFwia2V5XCI6JChrZXkpLFwiYXZpbmZvXCI6JChhdmluZm8pfSIsInNjb3BlIjoid2luayIsImRlYWRsaW5lIjoxNDcwNjQ4MDg2fQ==',
    get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的 uptoken
    // downtoken_url: '/downtoken',
    // Ajax请求downToken的Url，私有空间时使用,JS-SDK 将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
    // unique_names: true,              // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
    // save_key: true,                  // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
    domain: 'wink-images.eput.com',     // bucket 域名，下载资源时用到，**必需**
    container: 'container',             // 上传区域 DOM ID，默认是 browser_button 的父元素，
    max_file_size: '100mb',             // 最大文件体积限制
    flash_swf_url: 'path/of/plupload/Moxie.swf',  //引入 flash,相对路径
    max_retries: 3,                     // 上传失败最大重试次数
    dragdrop: true,                     // 开启可拖曳上传
    drop_element: 'container',          // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
    chunk_size: '4mb',                  // 分块上传时，每块的体积
    auto_start: false,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
    //x_vars : {
    //    自定义变量，参考http://developer.qiniu.com/docs/v6/api/overview/up/response/vars.html
    //    'time' : function(up,file) {
    //        var time = (new Date()).getTime();
              // do something with 'time'
    //        return time;
    //    },
    //    'size' : function(up,file) {
    //        var size = file.size;
              // do something with 'size'
    //        return size;
    //    }
    //},
    init: {
        'FilesAdded': function(up, files) {
            $('.pic-one').fadeOut(function(){
                $('.pic-two').fadeIn();
            });
            console.log(up);
            console.log(files);
        },
        'BeforeUpload': function(up, file) {
               // 每个文件上传前,处理相关的事情
        },
        'UploadProgress': function(up, file) {
        },
        'FileUploaded': function(up, file, info) {
            console.log(info);
               // 每个文件上传成功后,处理相关的事情
               // 其中 info 是文件上传成功后，服务端返回的json，形式如
               // {
               //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
               //    "key": "gogopher.jpg"
               //  }
               // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
               var domain = up.getOption('domain');
               var res = parseJSON(info);
               var sourceLink = domain + res.key;
        },
        'Error': function(up, err, errTip) {
               //上传出错时,处理相关的事情
        },
        'UploadComplete': function() {
               //队列文件处理完毕后,处理相关的事情
        },
        'Key': function(up, file) {
            // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
            // 该配置必须要在 unique_names: false , save_key: false 时才生效
            var key = "";
            // do something with key here
            return key
        }
    }
  });
