module.exports = [
  // <!--百度统计代码-->
  [
    "script",
    {},
    `
      var _hmt = _hmt || [];
  (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?1a6036ed362b2ca3cc01da62da664b79";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
  })();
    `,
  ],
  // <!--百度站长自动推送-->
  [
    "script",
    {},
    `
      (function(){
      var bp = document.createElement('script');
      var curProtocol = window.location.protocol.split(':')[0];
      if (curProtocol === 'https') {
          bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
      }
      else {
          bp.src = 'http://push.zhanzhang.baidu.com/push.js';
      }
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);
  })();
    `,
  ],
  // 谷歌联盟广告
  [
    "script",
    {
      'data-ad-client': 'ca-pub-7979174285252748',
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    }
  ],
]