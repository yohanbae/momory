export const theGeneral = [
{question: "1. What did you learn yesterday/this week? ",answer: " Recently, I’m studying Foundation Css. Since I know how to use css and bootstrap, I thought I didn’t need foundation, however, recently I’m just curious if there’s a way to work faster. So I’m trying to use many libraries as possible and one of them was Foundation. " },{question: " 2. What excites or interests you about coding? ",answer: " I love to solving problem. And I love to doing math. And the coding and solving math questions are very related. It make me fun whenever I make a function, it always fun to make a function with less codes. " },{question: " 3. What is a recent technical challenge you experienced and how did you solve it? ",answer: " Recently I made a react-native app. Actually that was my first time to create app using the native. Before I work on native, I made app using react first. And as you know there’s some different between react and react-native. Some of functions were didn’t work as I expected. So I spent more time on the research about native and end up fixing the problem. Now it’s work well. " },{question: " 4. What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site? ",answer: " **UI**: I like minimal UI which contains only what it should. I believe it results in the better user experience, as a user knows what to do intuitively. **Security**: I always try to make both frontend and backend secure, concerning CSRF, XSS, etc. I’d like to use third-party authorization app like Auth0 or Okta security login system. **Performance**: I consider space and time complexity for the algorithms and logics I use and write. I check the performing time later on. **SEO**: Set meta tags for search engines and consider and consider server-side rendering for SPA. **Maintainability**: Try to keep the source code consistent and make objects immutable. Use statically typed languages such as TypeScript. Use CI with tests and lints. **Technology**: I like to learn new technologies, but if the project is in production, I would consider using technologies which is well-documented and widely used. " },{question: " 5. Talk about your preferred development environment. ",answer: " I’d like to use two monitors and I can test faster. Window + NodeJS + Sublime + Google Chrome " },{question: " 6. Which version control systems are you familiar with? ",answer: " So far I’d like to use GitHub. I keep posting my works on my github. " },{question: " 7. Can you describe your workflow when you create a web page? It depends by what project I made, normally ",answer: " 1. Initialize the server 2. Put Css preprocessor : I love to use SCSS 3. I start coding html , css and javacript if necessary. 4. Check the code for the responsive web. 5. Check accessibility if anything missing. 6. Check the speed and SEO. 7. Optimization of images. " },{question: " 8. If you have 5 different stylesheets, how would you best integrate them into the site? ",answer: " +Use a CSS preprocessor to nest them with `@import` statements in class names ex: @import 'other/style'; // 이런식으로 확장자없이 +for each stylesheet, and merge them into a built file. In production, minify +the built file with a CSS minifier. " },{question: " 9. Can you describe the difference between progressive enhancement and graceful degradation? ",answer: " http://www.clearboth.org/51_graceful_degradation_versus_progressive_enhancement/ Progressive enhancement: is a way to implement a web page where basic features, which are supported by most environments, are implemented first and then progressively enhance them for advanced environments. 사용가능한 기능을 바탕으로, 향상된 기능을 적용하기 전에 테스트를 통해 풍부한 사용자 경험을 하나씩 증가시키는 것이다. Graceful degradation: is an opposite. The advanced features are freely implemented at any time, and additional works are done to support the environment where the features don't work well. 원하는 기능을 갖는 또다른 버전을 제공하거나, 사용자가 제품의 결점이 사용성을 보장하기 위한 안전 조치때문이라는 것을 인지하도록 만드는 것이다. " },{question: " 10. How would you optimize a website's assets/resources? ",answer: " Minimise CSS and JavaScript using minifier(or uglifier), archive them using gzip, use separated file servers, use CDN, etc. Optimize image/video size. " },{question: " 11. How many resources will a browser download from a given domain at a time? ",answer: " It depends on browser implementations. Usually 6 to 8 in the modern browsers, and less in the old browsers. What are the exceptions? +When we use several subdomains pointing the same domain, we can increase the +concurrency level of the download. " },{question: " 12. Name 3 ways to decrease page load (perceived or actual load time). ",answer: " - Actual: Use minifier and gzip to decrease the page size *- actual* - Perceived: Show spinner or progress bar *- perceived* - Both: Preload the page before actually loading it using libraries like [InstantClick](http://instantclick.io) *- both actual and perceived* " },{question: " 13. If you jumped on a project and they used tabs and you used spaces, what would you do? ",answer: " +- I would use tabs because it is the convention used for the project. +- Introduce a linter or other scripts to ensure indentations are consistent +- Use a tool like [EditorConfig](http://editorconfig.org) to configure editors + team members are using automatically " },{question: " 14. Describe how you would create a simple slideshow page. ",answer: " I would like to make a parent wrapper element with position:relatives, overflow:hidden Then I will put children elements inside of the parent. Make absolutes and hide it using opacity or display or position to out of the box. Then I work on JS to display the elements. " },{question: " 15. If you could master one technology this year, what would it be? ",answer: " So far I love to study more time on react-native. Because I always thought it’s awesome to make the app that can use pc and mobile. " },{question: " 16. Explain the importance of standards and standards bodies. ",answer: " If there’s no Standards then people cannot receive the information equally. For example, before standards, the web developers had to work two times, one for explore, one for nescape, but since they cannot work that hard, they had to choose just one browser, so people couldn’t receive information equally since most of people just use one browser. Standards bodies, in the same manner, do a key role to form a standards and are essential in everywhere including both software and hardware. " },{question: " 17. What is Flash of Unstyled Content? How do you avoid FOUC? ",answer: " It is caused when content is loaded before styles are applied to the content. It happens when style tags are placed after other content, or applied Asynchronously, for example, by scripts. 최근에는 웹폰트같은것도 import를 해서 생기는 문제이다. Chrome에서는 css를 먼저 부르지만, IE는 그렇지 않다. To avoid FOUC, the styles should be placed in order that they can be loaded and applied in the same rendering process as HTML elements do. The easiest way is to place them in the `head`, and avoid applying styles by scripts at the first load. " },{question: " 18. Explain what ARIA and screenreaders are, and how to make a website accessible. ",answer: " Accessible Rich Internet Applications They are for accessibility. To make a website accessible, we should try to follow the usage of HTML elements, for example, `h1` for headers and `section` for sections. Also it's good to take care of using visual contents, such as not forgetting to add an `alt` attribute to `img` tags. Make sure header tags(h1,h2) in right order, make sure to put all attributes in the tags properly. * 각 페이지의 연관성 지키기 * img alt 에 설명을 꼭 넣을껏 * 또한 탭을 눌렀을때 링크들이 제대로 움직여야 한다. " },{question: " 19. Explain some of the pros and cons for CSS animations versus JavaScript animations. ",answer: " CSS: It’s way faster to perform and write codes. However old browsers doesn’t support CSS animations. CSS animation don’t have logics. JS: Need to write JS scripts, but it works every browsers. You can put logics there so you can make more complicate animation. " },{question: " 20. What does CORS stand for and what issue does it address?CORS stands for cross-origin resource sharing. ",answer: " Before it wasn’t able to bring JS from outside because of the security protocol. However, in today, many people use outside resource to increase efficiency, developer needed to use the JS from other servers. That’s why CORS came out. It’s new protocol that allow to support JS sharing. CORS을 통해 쉐어가 가능해진 기술들: XMLHttpRequest/Fetch API @font-face WebGL Textures" },
];

export const theHtml = [
{question: "1. What does a doctype do? ",answer: " HTML5 문서 규약을 나타낼때, DOCTYPE를 선언해준다. 사람들이 사용하는 일상 언어와 비슷하게 HTML에도 여러 종류의 사투리가 있습니다. 현재 가장 널리 쓰이는 사실상의 표준은 HTML5 입니다. 여러분이 작성하는 문서가 HTML5임을 명시하기 위해서는 HTML 문서의 첫 줄에 아래와 같이 DTD 선언을 적어야 합니다. DTD란 문서 형식 정의(Document Type Definition)의 약어입니다다른 종류의 DTD 선언을 적거나 DTD 선언을 적지 않으면 HTML5가 아닌 다른 버전의 HTML로 인식될 가능성이 높으므로 항상 위와 동일한 DTD 선언을 적는 것이 좋습니다 " },
{question: " 2. What's the difference between full standards mode, almost standards mode and quirks mode? ",answer: " Layout engines in browsers uses three modes:Quirks mode: 가장 후진 거: In quirks mode, layout emulates nonstandard behavior in Navigator 4 and IE 5. These were needed for websites written before introduction of web standards.Full standard mode: 가장 좋은거: In this mode, the behavior described is same as described by HTML and CSS specifications. Most of the modern browsers uses full standard mode. Almost standard Mode: 중간: In almost standard mode there is very small number of quirks implementation.Make sure you put the DOCTYPE right at the beginning of your HTML document. Anything before the DOCTYPE, like a comment or an XML declaration will trigger quirks mode in Internet Explorer 9 and older.The DOCTYPE as, <!DOCTYPE html>, is the simplest possible, and the one recommended by HTML5. Earlier versions of the HTML standard recommended other variants, but all existing browsers today will use full standards mode for this DOCTYPE, even the dated Internet Explorer 6. " },
{question: " 3. What's the difference between HTML and XHTML ",answer: " HTML 기반으로 이제까지는 만들어졌으나. 다양한 스마트폰, 타블렛, 노트북등의 다양한 브라우저들이 생기다보니까, 공통적으로 사용할 포맷이 필요해졌다. XHTML 은 markup language that extended version of HTML, that supports to all browsers/devices.HTML을 사용하면 할 수 있으나, XHTML로는 불가능한 일기존 HTML에서 사용하던 <!-- … --> 코멘트로 스타일이나 스크립트의 일부를 주석 처리할 수 없다문서를 읽고 있는 도중에는 페이지의 일부를 동적으로 생성할 수 없다(예: document.write() 사용).&nbsp; 같은 named entity를 사용할 수 없다. 미리 정의된 &lt;, &gt;, &amp;, &quot;는 사용 가능.자바 스크립트에서 .innerHTML 속성을 사용할 수 없다. " },
{question: " 4. Are there any problems with serving pages as application/xhtml+xml? ",answer: " IE < 8 will show a download dialog for the pages, instead of rendering them properly. " },
{question: " 5. How do you serve a page with content in multiple languages? ",answer: " Use lang (or xml:lang for XHTML) in tags. Also metadata and Content-Language. HTTP header can be used. <meta charset=utf-8> <p lang=zh>使劲儿</p> <p lang=ja>がんばれ</p> <p lang=ko>힘내</p> <p lang=en>Fighting!</p> :lang(zh) {font-family:LiHei Pro Medium, sans-serif} :lang(ko) {font-family:nanum gothic, sans-serif} :lang(ja) {font-family:osaka, sans-serif} :lang(en) {font-family:helvetica neue, sans-serif} " },
{question: " 6. What kind of things must you be wary of when design or developing for multilingual sites? ",answer: " :: hreflang attr in link : <a href=”#” hreflang = “EN”>link</a>:: dir attr indicating language direction, such as rtl (right to left, 일본어 아랍어 오른쪽으로부터 글자 보이기):: <meta charset='UTF-8'>:: font-size for :lang({language_code}) selectors in CSS:: difference in word langth for each language " },{question: " 7. What are data- attributes good for? ",answer: " It makes HTML elements contain extra information without using non-standard attributes, or other hacks like that.<div data-yohan=”hoho”></div>data can be stored on markups that not visible to end users, also not violating the standard HTML5. JavaScript can easily access by dataset. " },
{question: " 8.Consider HTML5 as an open web platform. What are the building blocks of HTML5? ",answer: " The main building blocks are centred on HTML 5, CSS3, Javascript and SVG.Where HTML is a language to define the mark-up of a document (titles, headers, body, footer, tables, input forms etc.),CSS is a language to define style (formatting, colours, shades and the like).Javascript is a programming/scripting language andSVG is a language for creating 2D scalable vector graphics and images. " },
{question: " 9. Describe the difference between a cookie, sessionStorage and localStorage. ",answer: " They are all storage on the client side.cookies is small piece of key-value pair with a expire time.sessionStorage is on persistent and scope only to current windows. 브라우저 닫으면 소멸함localStorage is persisitent and socop only to domain, by key-value pair or SQL database (Web SQL) 얘는 계속 저장된다. " },{question: " 10. Describe the difference between <script>, <script async> and <script defer>. ",answer: " <script> stops rendering process, and download and run a script. : 일반적인건데. 먼저 html를 처리하다가, script부분이 오면, html를 중단하고 script을 처리한다. script처리가 끝나면 다시 나머지 html을 처리<script async> don't stop rendering process while asynchronously downloading a script. When finishing download, it stops rendering and runs the script. : 특징은. html을 처리하며 동시에 script부분이 나오면, 그것도 동시에 처리할 수 있다. 그런데, script을 받아오는게 완료되면, 바로 script을 실행시켜버린다. 따라서 작업수행에 순서가 중요한 경우 피하는것이 좋겠다. 또한 외부스크립을 가져올때만 사용. 그리고 script이 되는 동안에는 html 로딩이 잠시 중단됨.<script defer> don't stop rendering process while asynchronously downloading a script. When finishing rendering, it runs the script. : 이것 역시 html, script 동시에 수행할 수가 있다. 그런데, script이 다운이 완료가 되더라도, 먼저 html이 다 될때까지 기다렸다가, html 수행이 다 되면, 다운완료된 script을 실행한다. 이게 가장 좋지않을까.그럼 언제 뭘 쓰냐.로딩할 스크립트가 많고. 이것들이 서로 의존할 때. 이럴때는 script을 먼저 다 불러야 되겠지. 그래서 defer를 쓴다.또 external script을 불러야 할때가 있잖아. gogole analystic. 이런것들은 independent하잖아. 내 코딩이랑 상관없어. 이런건 async를 쓴다. " },{question: " 11. Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? ",answer: " Do you know any exceptions?You usually put the <link> tags in between the <head> to prevent Flash of Unstyled Content which gives the user something to look at while the rest of the page is being parsed.Since Javascript blocks rendering by default, and the DOM and CSSOM construction can be also be delayed, it is usually best to keep scripts at the bottom of the page.Exceptions are if you grab the scripts asynchronously, or at least defer them to the end of the page. " },
{question: " 12. What is progressive rendering? ",answer: " When a HTTP response is flushed multiple times, a browser doesn't wait until the whole content is loaded and renders each part earlier.With HTML progressive rendering is chunking the HTML into separate bits and loading each block as it's finished. Usually, the backend code loads the HTML at once, but if you flush after finishing one part of the structure, it can be rendered immediately to the page.This can be done asynchronously with different components being loaded as they finish. There's new features which can be used with Web Components making it more standard. Another interesting article on this is from eBay with Async Fragments. " },{question: " 13. Why you would use a srcset attribute in an image tag? ",answer: " Explain the process the browser uses when evaluating the content of this attributeThe srcset attribute specifies the URL of the image to use in different situations. This attribute is required when <source> is used in <picture>Browser 크기에 따라서 다른 이미지를 보여주는건데. 이것을 통해서 용량을 절약할 수 있다. 모바일버전에서 굳이 pc버전의 큰 이미지를 불러올 필요가 없잖아. " }]

export const theCss = [
    {question: "1.What is the difference between classes and IDs in CSS? ",answer: " The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one. " },
    {question: " 2.What's the difference between resetting and normalizing CSS? Which would you choose, and why? ",answer: " There’s a major difference between the two. CSS resets aim to remove all built-in browser styling. Standard elements like h1 - h6, p, strong, em end up looking exactly alike, having no decoration at all. You're then supposed to add all decoration yourself. Normalize.css aims to make built-in browser styling consistent across browsers. Elements like h1 - h6 will appear bold, larger et cetera in a consistent way across browsers. You're then supposed to add only the difference in decoration your design needs. I would choose ‘Normarlize’ since it works for all browsers and supports recent functions. " },
    {question: " 3.Describe Floats and how they work. ",answer: " Float: left, right. " },
    {question: " 4.Describe z-index and how stacking context is formed. ",answer: " A stacking context is an element that contains a set of layers. :: Elements with a negative stack level, typically elements with z-index: -1 :: Elements with a position value of static. :: Elements with a stack level of 0, typically positioned elements with a z-index value of auto. :: Elements with positive stack levels, e.g. a positioned element with a z-index value of 1 or higher. " },
    {question: " 5.Describe BFC(Block Formatting Context) and how it works. ",answer: " 컨탠츠의 내용에 따라서 div의 사이즈가 변화되는것들. 이것을 고치기위해 overflow를 조정하는 방법. 박스안에 또 다른 div를 float을 이용해 넣었을 때, 안에있는 div가 parent div 사이즈를 뚫고 나올 때가 있다. 이것의 조건은: float을 사용, width 를 주어졌을 때, 이런 오류가 생김. This is why backgrounds and borders will appear to run behind our float.(영어로) 두가지 방법 a. clearfix back: which has the effect of inserting an element below the text and image and setting it to clear both. b. ovrflow: hidden; " },{question: " 6.What are the various clearing techniques and which is appropriate for what context? ",answer: " https://www.sitepoint.com/clearing-floats-overview-different-clearfix-methods/ div 안에 여러개의 div:float이 있을때, div안으로 안들어가고, div밑으로 elements들이 표시될때가 있다. parent div는 위에 선으로 남고. 이때 제대로 div가 parent안에 들어가게끔 하는 기술인데. 여러개가 있음. ::clear .clear{clear:both;} 이거를 맨 마지막 element에 넣어준다. 그러면 해결됨. ::overflow: overflow:hidden을 사용하면 이게 또 해결된다 :: clearfix " },{question: " 7.Explain CSS sprites, and how you would implement them on a page or site. ",answer: " Images for a website are typically stored in individual files. Some of these images may be related or may be variations of the same image, such as a plain button and a highlighted button. When a user opens the webpage their browser has to request each of these files, resulting in a slower experience. With CSS sprites, multiple images are combined into a single image called a sprite sheet. Instead of downloading several files, the user downloads a single file and displays the necessary image (or sprite) by offsetting the file. This removes the overhead of having to request multiple files at the cost of having to download one larger file. 이미지 큰 거 하나를 쪼개서 돌려먹는 기술 " },
    {question: " 8.What are your favourite image replacement techniques and which do you use when? ",answer: " 이게 모냐면. 이미지를 넣잖아. 근데, 브라우저에서 이게 이미지로 인식 안되. 우클릭을 해도, 이미지 save같은게 안 뜨게 하는 방법인데. 참고: https://www.youtube.com/watch?v=QU2FckCRRhw .logo{ display:block; background:url() no-repeat; text-indent: 100%; white-space:nowrap; overflow:hidden; } <h1 class=logo> The Title <img src=graphics/thetitle.png alt=The Title /> </h1> 왜 쓰냐면, accessibility purpose and SEO 검색엔진에서도 text를 tracking할 수 있게 하려고. " },{question: " 9.How would you approach fixing browser-specific styling issues? ",answer: " Use a separate stylesheet that only loads when that specific browser is being used. Thankfully, the days of IE specific stylesheets are almost gone. " },{question: " 10.How do you serve your pages for feature-constrained browsers? ",answer: " http://cat.hubweb.net/board_s1h4c2/5586 // 좋은 설명 Feacture-constrained browsers = 오래되서 기능이 제한된 브라우저 // 주로 최근 html5 이 나오면서 생긴 문제다 Polyfills or graceful degradation. A polyfill is a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers, e.g., to support canvas (an HTML5 feature) in older browsers. Ex: AJAX Polyfill It's sort of an HTML5 technique, since it is used in conjunction with HTML5, but it's not part of HTML5, and you can have polyfills without having HTML5 (for example, to support CSS3 techniques you want). What techniques/processes do you use? I prefer to use polyfill because it’s way easier to use " },{question: " 11.What are the different ways to visually hide content (and make it available only for screen readers)? ",answer: " display: none visibility: hidden; opacity: 0; #1: visibility: hidden #2: width: 0; height: 0; #3: text-indent: -1000px #4: absolute position off the screen " },{question: " 12.Have you ever used a grid system, and if so, what do you prefer? ",answer: " I used to use bootstrap grid system before. Flex, later onn. But now I love to use css-grid. is the best one for me so far. Because there's no limitation for the frames, it's way easy to use. I just love this more than boostrap grid system. " },{question: " 13.Have you used or implemented media queries or mobile specific layouts/CSS? ",answer: " Basic CSS/ Bootstrap / Foundation I used to use Bootstrap. But back to basic css because I didn’t want to rely on libraries too much. But I just started to using Foundation because I wanted to know more technique and wanted to build way faster. " },{question: " 14. Are you familiar with styling SVG? ",answer: " I love to use SVG, most of time I use it for the SNS icons. Good thing is there are many resources you can download from internet(google). Before I use the SVG, I had to use Photoshop to make my own icon, change colors, it’s not a hard job but still took time. But using SVG, the image can be modified with one single line of code, I loved this. " },{question: " 15. How do you optimize your webpages for print? ",answer: " @media print { /* Things only for when page is printed */ } Figuring out what should be excluded or specially styled on a printed page is specific to your site, and even each page. Here's some started things that you might consider doing: :: Hiding videos, audio, and other interactive elements. :: Make links mean something :: Making a special, 'print' button on your actual web page (using window.print()); :: Perhaps have a high resolution image for printing? :: different margins for ::left and ::right (never actually done this) (@page... support spotty) :: QR code on page, so user can quickly find content again. " },{question: " 16.What are some of the gotchas for writing efficient CSS? ",answer: " Primarily about efficient css selectors :: Avoid key selectors that match large numbers of elements (tag and universal selectors) :: Prefer class and ID selectors over tag selectors :: Avoid not too many selectors :: Preferably don't use * (universal selector) *And like any other code, try group and reuse common properties. " },{question: " 17.What are the advantages/disadvantages of using CSS preprocessors? ",answer: " Disadvantages: Have to use build tools to compile setup enviroment Advantages better oranization from nesting them ability to define variables and mixins have mathematical functions joining multiple files in some cases, cleaner syntaxes " },{question: " 18.Describe what you like and dislike about the CSS preprocessors you have used. ",answer: " I really love to use css preprocessors. I just can’t work without it now. Only thing bad is need to setup, but it can be done in one minute, so it’s not a big deal. only thing is it takes time to setup, but I don't really care because the preprocessors so power and it deserve it. " },{question: " 19. How would you implement a web design comp that uses non-standard fonts ",answer: " #1: use @font-face to render a font (uses src for hard resources #2: can just link to a webfont as a stylesheet, use @import, or javascript #1 css에서 import: font-face를 통해서, font-family를 설정해줄 수 잇따. // 이거 여러개 설정해줄 수도 있음. @font-face { font-family: Kaffeesatz; src: url(YanoneKaffeesatz-Thin.otf); font-weight: 200; } #2 html 에서 import하기 <link href=https://fonts.googleapis.com/css?family=Mali rel=stylesheet> " },
    {question: " 20. Explain how a browser determines what elements match a CSS selector. ",answer: " Browsers read selectors from right-to-left. First looks for all elements matching the key selector (the right-most). Then checks if it matches or is under the next (left-most) element. #menu ul li a { color: #00f; } 이 게념으로 보면, 가장 오른쪽에 잇는 a를 기준으로 값이 지정되잖아, 그런 의미다. Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models. box를 구성하는 것들. margin, border, padding What does * { box-sizing: border-box; } do? What are its advantages? 알겠지만 div의 border를 전체 사이즈 안으로 넣어서 취급해주지. " },
    {question: " 22.List as many values for the display property that you can remember. ",answer: " None, block, inline, inline-block, table, table-cell, flex, static, inherit " },
    {question: " 23.What's the difference between a relative, fixed, absolute and statically positioned element? ",answer: " Static - The default behavior of an element. Relative - Renders the element like it normally would, however you're able to position the item (top, bottom, left, right) from that starting position. Absolute - Takes the element out of the flow of the document allowing you to position the element within the context of it's parent. Fixed - Like absolute positioning, but the element will move with the screen. " },{question: " Q. What existing CSS frameworks have you used locally, or in production? How would you change/improve them? ",answer: " Mostly foundation with some bootstrap. With foundation, it's easy to only use components that you need by importing the SASS components that you need. Otherwise I think the frameworks are way too cookie cutter and it's easy to notice when a website was created with either. " },{question: " Q. Have you played around with the new CSS Flexbox or Grid specs? ",answer: " I fell in love with flex. I really love it. recently I'm working with Grid as well " },{question: " Q. How is responsive design different from adaptive design? ",answer: " responsive: 지가 알아서 움직이는거고 adaptive: 분명한 변환점 값을 주면, 거기에 맞춰서 움직임. " },{question: " Q. Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why? ",answer: " Yes, translate do not cause the browser to trigger repaint and layout and instead only acts on the compositor. I tend to only ever use translate/transform nowadays, and only using absolute positioning for an elements initial position. I'll then translate it from that initial position for better performance. Translate 이 animation을 할때는 더 smooth한 움직임을 보여준다. " },
];