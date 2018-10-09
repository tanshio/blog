webpackJsonp([0x9cb39c5c6a73],{461:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Takumon Blog",author:"Takuto Inoue"}},markdownRemark:{id:"/Users/inouetakumon/git/blog/src/pages/2018/09/29/index.md absPath of file >>> MarkdownRemark",html:'<h2 id="なにこれ"><a href="#%E3%81%AA%E3%81%AB%E3%81%93%E3%82%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>なにこれ</h2>\n<p><strong>ググった時に自分のブログ(React製)でパンくずを表示させたい</strong>\nということでJSON-LD対応しました。<br>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-e5a7d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 26.506024096385538%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABIUlEQVQY00VQ2U4DQQzr9/PO9yCB4AH1AQpIHC1X2U73mM3szn2kZqgEWLKsOImUeBGcv4pzkkaGXdRJ+CkKI71wFIWWTkQbxTQ6YU1V8sK76k9BzMoLVfveJcFcmlLKFGM8W4hxfl1uBpzffeLmo8PdF+H6eY+Lhw88fllIC6QA4ABE/6sHeMOwcwFn/CGl9LDoJ/u0oYCXweT7HfGqUfzUaV4JxUIZPr2PfLLK7LTiWWs21rDzjn1wHFM41kSUU8oIId4uvLOvdp4xtC22729oRYOx76AVod/v0Ow73G5HvG0brNdrtG2HQUr0w4D65pHG2P8LtdbLfdebOiBJTTTNmuRINJI68geH5KnkTDUjqkt/zNUruVDNcOBSgnPu8huIzXkSZu0xBgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Googole検索結果パンくずリスト"\n        title=""\n        src="/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-fb8a0.png"\n        srcset="/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-1a291.png 148w,\n/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-2bc4a.png 295w,\n/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-fb8a0.png 590w,\n/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-e5a7d.png 664w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>JSON+LDについてググると色々良い記事がでてきて一通り学ぶことができました。\nここでは、それら記事の紹介を兼ねて、構造化データの説明からパンくず実現方法についてまでを記します。</p>\n<h2 id="構造化データについて"><a href="#%E6%A7%8B%E9%80%A0%E5%8C%96%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>構造化データについて</h2>\n<p>グーグルなどの検索エンジンは、Webサイトに構造化マークアップが定義されているとパンくずやイメージ画像を表示してくれます。\n構造化マークアップというのはschema.orgという大手検索エンジン(Google、Yahoo、Bing)で定めた規格にしたがったマークアップのことです。検索時だけでなく、検索エンジンがクロールするときにも、Webサイトのメタ情報としてマークアップを認識させることができ、「検索に優しいWebサイト」を作れます。</p>\n<p>この構造化マークアップを実現するにはRDFa、Microdata、JSON-LDの3種類があります。\n今回は、(1)JSON-LDはGoogleが推奨していることと、(2)JSON書きやすい、という理由からJSON+LDを使いました。</p>\n<p>なお3種の違いについては<a href="https://www.suzukikenichi.com/blog/difference-between-schemaorg-microdata-and-rdfa/">[構造化データ初級者向け] schema.orgとMicrodata、RDFaって何が違うの？</a>に詳しく書かれていました。</p>\n<h2 id="jsonldについて"><a href="#jsonld%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSON+LDについて</h2>\n<p>てっとり早く理解したい時は下記サイトがおすすめです。</p>\n<ul>\n<li>\n<p><a href="https://qiita.com/narumana/items/b66969b80cce848b2ddf">Google推奨「JSON-LD」で構造化マークアップ | Qiita</a></p>\n<ul>\n<li>Qiitaの記事です。ユースケース別に、簡単な設定例とググった時の実際のイメージが載っていてわかりやすいです。</li>\n</ul>\n</li>\n<li>\n<p><a href="https://webnooboegaki.com/others/jsonld-schemaorg">構造化データをまとめてみた(JSON-LD + schema.org)</a></p>\n<ul>\n<li>こちらもユースケース別ですが、上記Qiita記事よりも実用レベルの設定例が載っていて参考になります。</li>\n</ul>\n</li>\n</ul>\n<p>さらに理解を深めたい場合は下記サイトがおすすめです。</p>\n<ul>\n<li>\n<p><a href="https://schema.org">schema.org</a></p>\n<ul>\n<li>細かい仕様など、正しい仕様を把握する時に参考にしました。ググって調べたブログ記事などには古いバージョンだったり間違った情報が載ってたりするので、最終的にはココで確認してました。</li>\n</ul>\n</li>\n<li>\n<p><a href="https://developers.google.com/search/docs/guides/">Google Search</a></p>\n<ul>\n<li>このサイトの<code class="language-text">左メニュー &gt; Structured data &gt; Future guies</code>にグーグル検索の表示結果の仕様が載っています。ただコレに従ったとしても、<strong>必ずしも検索結果でそれ通りに表示されるわけではない</strong>点に注意が必要です。</li>\n</ul>\n</li>\n</ul>\n<h3 id="構造化テストツール"><a href="#%E6%A7%8B%E9%80%A0%E5%8C%96%E3%83%86%E3%82%B9%E3%83%88%E3%83%84%E3%83%BC%E3%83%AB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>構造化テストツール</h3>\n<p>JSON+LDの概要を把握したら、実際に作ってみるのがイイです。\nその時、便利なのが<a href="https://search.google.com/structured-data/testing-tool">構造化テストツール</a>です。これはGoogleが提供しているWebサイトの構造化データを検証するためのツールです。\n自分の作った構造化データが正しいかは、\bここを見ながら作成しました。</p>\n<h4 id="使い方"><a href="#%E4%BD%BF%E3%81%84%E6%96%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>使い方</h4>\n<p>設定を貼り付けるか、URLを指定するかして、<code class="language-text">テストを実行</code>ボタンをクリックすると\n\n  <a class="gatsby-resp-image-link" href="/static/testtool1-f5bcf368d8b318ce54249629b5c11569-fee8a.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 78.1124497991968%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACxElEQVQ4y42TXU8TQRSG+7ekRhThhl9gojHhL1BL6W4/abcJVozUG7kyxDtrIkEDkdYgCJi2+AE3NpFGCt3utt12uv2CfjCvM2tLRDboJm/O2TMzz7w7e8Zy7/6demT+aSUSiZDIfIQsLCwQt9tNxsfHyfDwTTIycpuMjo6aaIyND5OhISsZvm4t37oxdGq1XrNZdpNJZDIZKIqK41wOOVlGXlGQy8k4Ov79XiyVoGkaSgOVNGjlMn4cHCCVTGBz4xNWPuxhNbbpshTzeRweZs9kWabFYpGqqmqorGlU13VarVYpIcRUul6jjVqV7qa13ouNFrb3FcHi8Xrh9Xqpx+Ph8YJ4zaw+kMvlgtPppF63qxfwiRAFh2jhRSYqCCIcU1Ow2e2wPbDDzqPNdqUcDoexVhTFnsfr4++ixe/3s918NBQKIRp9hdjbJayvLuPtm2W8W1tDLBbDWj8Ocq54PI7FxUWwH0gZoydJEoeLFh8Dutku4XAYJUXG6+8E0XQNaqUGnPVw1ZNKpTA9PW0Ag8EgmFPu0Aenx09D4cdsCsV6AXiZBdTWGTRSRrVRR7vdRqvVQofFXq+HTqdjAHd2to0zvAAMeQTcnYvSsWdJfMsRtKtlNAsKmloJJbWIcqECdJlZpmarw8BdNJocDGxtmQC5Q4E5lB49QePk1Fj5WW0j9LWLlZ8nWNrbxfPER6TVvOGq0+0yh92+wx0zoB8et4vOhR+en02V7b6vAxr7si9yFuuZNNS6fukME4mEOZD/qdnZWShqCcdyGUfZI7RrFbQYpNs6AT1to1lvgDU5KhUCOa9BKeiIxd9DEISLQJ/PBybKoySFDAWDEoI8Z60UZO0QDEksl8Bbi2swLxAIGJeCrb0M/PNmDMTHeANPTEzAbJzX+mvNgf38XPw42BxMTk4a+d/jXNzhfwMHtZmZmfP7+y/gL/UYoypklQgWAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="&#x69CB;&#x9020;&#x5316;&#x30C6;&#x30B9;&#x30C8;&#x30C4;&#x30FC;&#x30EB;" title="" src="/static/testtool1-f5bcf368d8b318ce54249629b5c11569-fb8a0.png" srcset="/static/testtool1-f5bcf368d8b318ce54249629b5c11569-1a291.png 148w,\n/static/testtool1-f5bcf368d8b318ce54249629b5c11569-2bc4a.png 295w,\n/static/testtool1-f5bcf368d8b318ce54249629b5c11569-fb8a0.png 590w,\n/static/testtool1-f5bcf368d8b318ce54249629b5c11569-526de.png 885w,\n/static/testtool1-f5bcf368d8b318ce54249629b5c11569-fee8a.png 996w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n<br></p>\n<p>構造化データの解析結果を画面右半分に表示してくれます。\nプロパティを選択すると対応するJSON+LDの部分がハイライトされるので便利です。\n\n  <a class="gatsby-resp-image-link" href="/static/testtool2-e6948518b55521631f29e685f9755580-468ad.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 78.66531850353893%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAADPUlEQVQ4y41U227bRhTUR+XJTmQZSPoPBQrkM5qviBEg+YO+Fy2QIo5dR3FixU7gSLKjGyVKlHi/X0RKpEjt9OzKBtynlsCAuwues3NmRqo93X80+uX5z8ujo1fhy5dHAq9fvwl/ffEifPbsp7BePwgbjcPwoNH4FxqEw8PD8Em9Hu7t7Yf1x3vhwZP9sHZ6cmJ//nSOfn+A2UzBZCJDlqeY0loajzEcSRhJYwG+5pDu9vJ0iu/tNs6bH/Du3Qf8/vYjanlRGZvVCnGcbPN8zcrNhq3Xa1YUBWPbLQPwv3A9Ldmf3xmrmaZhOo4HwzCYaZpQNQ2WbSPLVkgFMqRpiuVyKd4Z7bMHZ1EUwfcDpEmMwHdQo0amrjuYj2VmjYZwpjJcy4Rl2Qh0A7auw3VdJElChT4WiwVUVRNnK5rsvnEQBHxK1GzHMSNDx7zXY8ZggGAsIZor8KhwqavIPBdVVaHYbLBar0URR5pm2NAZSSPeeZ6Ldc22bTPSVMz6fTYjEwxJQqzMECgKAstCTONsy4qKCmRxiHUaA1UhpKuqrWjGmZLuKMuSM7RN1zBgSSNmDYdQZRmRrsGjUR3SkzPNkwjRukJT8nA2sHGlrjAOSixJNyIkxubsOMsaGWDGpJk3HDB30IMvT2CRjhF9GDo2fGJZpAn+UCpca0ucfBugq8VQ4woh6RaGoWh0DzGyz90lhj4xykjgPI6Q0IcrKqADuKst3i62NOYWnm3ejQwx7sOHMbYzZddQYro0gjyZQJ1NYXC3bQdl4OLzLKGmlSgK6KKELuUPd10nuTzPA48cd1s0DMhlo3fL/GEfNhmyJBYciWNAVi2czzO6vhQJ3rm5Y8ajMp/PoWs6z7HIpxhZoRze9GWmTHjGbCiqQ3DhmQ5+6wS4UHNqWIH/cHgelw8YqqoqjInjeKfhwnTMT0MT37pDdnX9A5eta1wRzi87uPjaRftGwvGXWxy32kRyl0UeEe4qb37vMD+7a+iaZ5d9NI9P2cX7M7SO/0brtIkLQvOv9/hy9hGtzgg3ikNmbMS43AwOnjuO+z2HiM18YaPbGbHbroSb9gC3nSH9qywwkVT0fsjQ/BUqEnBDTIr/wD+xY4UzbSqasQAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="&#x69CB;&#x9020;&#x5316;&#x30C6;&#x30B9;&#x30C8;&#x30C4;&#x30FC;&#x30EB;&#x691C;&#x8A3C;&#x7D50;&#x679C;" title="" src="/static/testtool2-e6948518b55521631f29e685f9755580-fb8a0.png" srcset="/static/testtool2-e6948518b55521631f29e685f9755580-1a291.png 148w,\n/static/testtool2-e6948518b55521631f29e685f9755580-2bc4a.png 295w,\n/static/testtool2-e6948518b55521631f29e685f9755580-fb8a0.png 590w,\n/static/testtool2-e6948518b55521631f29e685f9755580-526de.png 885w,\n/static/testtool2-e6948518b55521631f29e685f9755580-468ad.png 989w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n<br></p>\n<p>また、必須プロパティが抜けていたりすると下記のようにエラーで知らせてくれます。\n\n  <a class="gatsby-resp-image-link" href="/static/testtool3-872e1f5c1902246664756522dbd4081c-fee8a.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 78.1124497991968%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAADcklEQVQ4y42TS27cRhCG51xRjMiSN/ERAgTIHbLzRJfQZKVTBIiBZCNnE1g2LCOSMg++hsP3q9lskkNyyCGn/xQpJPAyBApNssivq/6/evb9D9/tF4ufs+vFQlxfL8TNzY24uroS375+Lc7PX4rLy0txcTHGxRdxKS5fvaL8uTg7OxPnL874y2/O2hdff/Xj7OPdHVRNg+t5sCwbtu3AdenetmHurGkdY2c9h0X58TvP86EoKu7ev8e72z/x6+1nvP393U+zrq6Ri/xU17Xs2lY2dSNbWodhkAD+V2hBP7x9AtZO82aWsARhGMgojuD5Psa1bhpUVY39fo9yjLKk5woNvaeNp/d7ei6KApxzWVfl0DUFUhbPZ0Gcw9r5MnSoDXsHxwvg2wFix0HMfAKWEzDLMmy3JsnhTsARPAblJEGH47EfJZjPRJQh1beSkW6uvkOy2SDWLTBNB9sZaA81qH10XTeBxkpJEvTHI/r+OK6jVAO1DlUdgWE8QmREuyeKgoSgsaEhMk0I10FPoBFGVSDPc4L0ONEG1eGIomrAy0pWzTNwoyjzGQ8zMFWRzNTBR6hhI7VNpEGEhjGc5HN1o16jngNVZYoeNu/gFT1c3kg9OQzNCTA1AkZxSq3a0tJCuBsNoaHCWCswtC209RJJxqeWk4QhjOLJWHcP/GUkuKd/jLCQS0cMLWW2E9D2YC4N6elbGI8r+KsldisVDmnor/6G8EcIcJr06vDvlaScDPSR8ExGjH2pIUek7qQg3cLHJ6QEKSwL3LUQ0bAfyQReH7EJS3xUXKhRCZtafTACmrsUTnaQZlgMaSPHAzKfhX4JU09kuHUQGB7CrYvS98DJfRaFkFTVJumQRmSK2KNoTyiPEkWaI49Ho8gUJoagAn67pwq5S9opivSXa3iKA0d1kVG1XCeTVBUtT2GRCb3IQJMLHJqpZUnanmwL8nCQ6JqhoqZv1+F8VkYJgs/3MlqSAasVuGWAUauJFRCMwzV0/PLHPfq8oMgxnE4gQ9FTrs8E+raTENlQkLyfvGo+84OaDPDJFDp2moXUD8hNRmOToTsNdBoqfNi4QJFTdfV/pqDMn6OlCstsqHvgzi7J5aSFZ3HJdt503Cwngr1NEVgMguZwvBTW49OG4VFP8ZRKPHHgYVfgYZvjKRnkg38YlBJwknz+D753gR80zoH3AAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="&#x69CB;&#x9020;&#x5316;&#x30C6;&#x30B9;&#x30C8;&#x30C4;&#x30FC;&#x30EB;&#x691C;&#x8A3C;&#x7D50;&#x679C;&#x30A8;&#x30E9;&#x30FC;&#x60C5;&#x5831;" title="" src="/static/testtool3-872e1f5c1902246664756522dbd4081c-fb8a0.png" srcset="/static/testtool3-872e1f5c1902246664756522dbd4081c-1a291.png 148w,\n/static/testtool3-872e1f5c1902246664756522dbd4081c-2bc4a.png 295w,\n/static/testtool3-872e1f5c1902246664756522dbd4081c-fb8a0.png 590w,\n/static/testtool3-872e1f5c1902246664756522dbd4081c-526de.png 885w,\n/static/testtool3-872e1f5c1902246664756522dbd4081c-fee8a.png 996w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n<br></p>\n<h4 id="構造化テストツールのプレビュー機能は廃止されている"><a href="#%E6%A7%8B%E9%80%A0%E5%8C%96%E3%83%86%E3%82%B9%E3%83%88%E3%83%84%E3%83%BC%E3%83%AB%E3%81%AE%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E6%A9%9F%E8%83%BD%E3%81%AF%E5%BB%83%E6%AD%A2%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>構造化テストツールのプレビュー機能は廃止されている</h4>\n<p>ググると構造化テストツールのプレビュー機能の情報がでてきますが、\nプレビューと実際のグーグル検索結果が違うなどの問題があって現在のバージョンでは廃止されているみたいです実際のインターネットじゃないと確認できないのはちょっと残念ですね。<br>\n参考：<a href="https://www.suzukikenichi.com/blog/rip-rich-snippet-testing-tool/">旧構造化データテストツールの提供をGoogleが終了、リッチスニペットのプレビューができなくなった</a></p>\n<h3 id="reactでjsonld"><a href="#react%E3%81%A7jsonld" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactでJSON+LD</h3>\n<p>Reactだと<a href="https://github.com/nfl/react-helmet">React Helmet</a>で簡単に対応でます。\nこんな感じのコンポーネントを作って、どこかで呼び出してあげればいいです。<br>\n下記例は自分のブログ用で、トップページと記事ページ毎に設定を切り替えています。<br>\n<small>※blog-config.jsはブログの設定値を集約したものです</small></p>\n<div class="gatsby-highlight" data-language="javascript"><pre style="counter-reset: linenumber 0" class="language-javascript line-numbers"><code class="language-javascript"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> Helmet <span class="token keyword">from</span> <span class="token string">\'react-helmet\'</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> config <span class="token keyword">from</span> <span class="token string">\'../config/blog-config.js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">createJSONLDTag</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  isRoot<span class="token punctuation">,</span>      <span class="token comment">// ブログトップページか（記事ページの場合false）</span>\n  title<span class="token punctuation">,</span>       <span class="token comment">// 記事タイトル（記事ページの時のみ指定）</span>\n  description<span class="token punctuation">,</span> <span class="token comment">// 記事概要（記事ページの時のみ指定）</span>\n  postUrl<span class="token punctuation">,</span>     <span class="token comment">// 記事URL（記事ページの時のみ指定)</span>\n  postDate<span class="token punctuation">,</span>    <span class="token comment">// 記事更新日（記事ページの時のみ指定）</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token comment">// ブログ管理者（自分）</span>\n  <span class="token keyword">const</span> author <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'Person\'</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogAuthor<span class="token punctuation">,</span>\n      description<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogAuthorDescription<span class="token punctuation">,</span>\n      image<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'ImageObject\'</span><span class="token punctuation">,</span>\n        url<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogAuthorAvatarUrl<span class="token punctuation">,</span>\n        width<span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">,</span>\n        height<span class="token punctuation">:</span> <span class="token number">60</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token string">\'url\'</span><span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogUrl<span class="token punctuation">,</span>\n      <span class="token string">"sameAs"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        config<span class="token punctuation">.</span>blogAuthorFacebookUrl<span class="token punctuation">,</span>\n        config<span class="token punctuation">.</span>blogAuthorTwitterUrl<span class="token punctuation">,</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'thing\'</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogAuthor<span class="token punctuation">,</span>\n      sameas<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogTitle<span class="token punctuation">,</span>\n      url<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogURL<span class="token punctuation">,</span>\n      image<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'ImageObject\'</span><span class="token punctuation">,</span>\n        url<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogImageUrl<span class="token punctuation">,</span>\n        width<span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">,</span>\n        height<span class="token punctuation">:</span> <span class="token number">60</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// \bブログ発行者（自分）</span>\n  <span class="token keyword">const</span> publisher <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'Organization\'</span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogAuthor<span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogAuthorDescription<span class="token punctuation">,</span>\n    logo<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'ImageObject\'</span><span class="token punctuation">,</span>\n      url<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogAuthorAvatarUrl<span class="token punctuation">,</span>\n      width<span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">,</span>\n      height<span class="token punctuation">:</span> <span class="token number">60</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// JSON+LDの設定</span>\n  <span class="token keyword">const</span> jsonLdConfigs <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">\'@context\'</span><span class="token punctuation">:</span> <span class="token string">\'http://schema.org\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'WebSite\'</span><span class="token punctuation">,</span>\n      inLanguage<span class="token punctuation">:</span> <span class="token string">\'ja\'</span><span class="token punctuation">,</span>\n      url<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogUrl<span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> title<span class="token punctuation">,</span>\n      alternateName<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogTitle<span class="token punctuation">,</span>\n      image<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogImageUrl<span class="token punctuation">,</span>\n      description<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogAuthorDescription<span class="token punctuation">,</span>\n      author<span class="token punctuation">,</span>\n      publisher<span class="token punctuation">,</span>\n      potentialAction<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">"SearchAction"</span><span class="token punctuation">,</span>\n        target<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>config<span class="token punctuation">.</span>blogUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/search?q={q}`</span></span><span class="token punctuation">,</span>\n        <span class="token string">\'query-input\'</span><span class="token punctuation">:</span> <span class="token string">\'required name=q\'</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token comment">// パンくずリスト表示用の設定</span>\n</span><span class="gatsby-highlight-code-line">    jsonLdConfigs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token string">\'@context\'</span><span class="token punctuation">:</span> <span class="token string">\'http://schema.org\'</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'BreadcrumbList\'</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">        itemListElement<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n</span><span class="gatsby-highlight-code-line">          <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">            <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'ListItem\'</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">            position<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">            item<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">              <span class="token string">\'@id\'</span><span class="token punctuation">:</span> postUrl<span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">              name<span class="token punctuation">:</span> title<span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">              image<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogImageUrl<span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n</span>    jsonLdConfigs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token string">\'@context\'</span><span class="token punctuation">:</span> <span class="token string">\'http://schema.org\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'BlogPosting\'</span><span class="token punctuation">,</span>\n        url<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogURL<span class="token punctuation">,</span>\n        name<span class="token punctuation">:</span> title<span class="token punctuation">,</span>\n        alternateName<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogTitle<span class="token punctuation">,</span>\n        headline<span class="token punctuation">:</span> title<span class="token punctuation">,</span>\n        image<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'ImageObject\'</span><span class="token punctuation">,</span>\n          url<span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogImageUrl<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        description<span class="token punctuation">,</span>\n        datePublished<span class="token punctuation">:</span> postDate<span class="token punctuation">,</span>\n        dateModified<span class="token punctuation">:</span> postDate<span class="token punctuation">,</span>\n        mainEntityOfPage<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          <span class="token string">\'@type\'</span><span class="token punctuation">:</span> <span class="token string">\'WebPage\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'@id\'</span><span class="token punctuation">:</span> config<span class="token punctuation">.</span>blogUrl\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        author<span class="token punctuation">,</span>\n        publisher<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>Helmet<span class="token operator">></span>\n      <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"application/ld+json"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>jsonLdConfigs<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>Helmet<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code><span aria-hidden="true" class="line-numbers-rows" style="white-space: normal; width: auto; left: 0;"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></pre></div>\n<p>80-95行目の設定をすると下記のようにグーグルの検索結果にパンくずリストが表示されます。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-e5a7d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 26.506024096385538%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABIUlEQVQY00VQ2U4DQQzr9/PO9yCB4AH1AQpIHC1X2U73mM3szn2kZqgEWLKsOImUeBGcv4pzkkaGXdRJ+CkKI71wFIWWTkQbxTQ6YU1V8sK76k9BzMoLVfveJcFcmlLKFGM8W4hxfl1uBpzffeLmo8PdF+H6eY+Lhw88fllIC6QA4ABE/6sHeMOwcwFn/CGl9LDoJ/u0oYCXweT7HfGqUfzUaV4JxUIZPr2PfLLK7LTiWWs21rDzjn1wHFM41kSUU8oIId4uvLOvdp4xtC22729oRYOx76AVod/v0Ow73G5HvG0brNdrtG2HQUr0w4D65pHG2P8LtdbLfdebOiBJTTTNmuRINJI68geH5KnkTDUjqkt/zNUruVDNcOBSgnPu8huIzXkSZu0xBgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Googole検索結果パンくずリスト"\n        title=""\n        src="/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-fb8a0.png"\n        srcset="/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-1a291.png 148w,\n/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-2bc4a.png 295w,\n/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-fb8a0.png 590w,\n/static/googlesearchresult-a4575e7c72cdef073663bd0010ce1611-e5a7d.png 664w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3 id="まとめ"><a href="#%E3%81%BE%E3%81%A8%E3%82%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>まとめ</h3>\n<p>今回はschema.orgやJSON+LDについての簡単なメモと\nReactでJSON+LDを実現する具体例を紹介しました。\nなお学習時は、<a href="https://cookpad.com/">クックパッド</a>や<a href="https://www.pinterest.jp/">Pinterest</a>など検索結果がリッチなWebサイトの構造化マークアップをのぞいてみると面白いかもしれません。</p>',
excerpt:"なにこれ ググった時に自分のブログ(React製)でパンくずを表示させたい \nということでJSON-LD対応しました。 \n JSON+LD…",tableOfContents:'<ul>\n<li><a href="/2018/09/29/#%E3%81%AA%E3%81%AB%E3%81%93%E3%82%8C">なにこれ</a></li>\n<li><a href="/2018/09/29/#%E6%A7%8B%E9%80%A0%E5%8C%96%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">構造化データについて</a></li>\n<li>\n<p><a href="/2018/09/29/#jsonld%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">JSON+LDについて</a></p>\n<ul>\n<li>\n<p><a href="/2018/09/29/#%E6%A7%8B%E9%80%A0%E5%8C%96%E3%83%86%E3%82%B9%E3%83%88%E3%83%84%E3%83%BC%E3%83%AB">構造化テストツール</a></p>\n<ul>\n<li><a href="/2018/09/29/#%E4%BD%BF%E3%81%84%E6%96%B9">使い方</a></li>\n<li><a href="/2018/09/29/#%E6%A7%8B%E9%80%A0%E5%8C%96%E3%83%86%E3%82%B9%E3%83%88%E3%83%84%E3%83%BC%E3%83%AB%E3%81%AE%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E6%A9%9F%E8%83%BD%E3%81%AF%E5%BB%83%E6%AD%A2%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B">構造化テストツールのプレビュー機能は廃止されている</a></li>\n</ul>\n</li>\n<li><a href="/2018/09/29/#react%E3%81%A7jsonld">ReactでJSON+LD</a></li>\n<li><a href="/2018/09/29/#%E3%81%BE%E3%81%A8%E3%82%81">まとめ</a></li>\n</ul>\n</li>\n</ul>',frontmatter:{date:"2018/09/29",title:"Reactで構造化データマークアップ（JSON-LD対応）",tags:["React","Schema-org","JSON-LD"]}}},pathContext:{slug:"/2018/09/29/",previous:{fields:{slug:"/2018/09/16/"},frontmatter:{title:"ReactでSNS対応（Gatsby製ブログでSNSシェアボタン、OGPタグ追加）",tags:["Gatsby","React","OGP"]}},next:{fields:{slug:"/2018/10/07/"},frontmatter:{title:"GatsbyでYouTubeとTwitter埋め込み",tags:["Gatsby","SNS"]}}}}}});
//# sourceMappingURL=path---2018-09-29-5c1175bddbf5aadfd334.js.map