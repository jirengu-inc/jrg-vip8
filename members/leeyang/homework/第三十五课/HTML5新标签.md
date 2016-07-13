## New Elements in HTML5 (HTML5中的新元素)

Below is a list of the new HTML5 elements, and a description of what they are used for.（下面是HTML5中新元素的列表和它们的描述）
---

## New Semantic/Structural Elements(新的语义/结构元素)

HTML5 offers new elements for better document structure:（HTML5为更好的文档结构提供新的元素:）

| Tag（标签） | Dsecription（描述） |
| ------ | ------ |
| `<article>` |	Defines an article in the document（定义文档中的一篇文章）|
| `<aside>` | Defines content aside from the page content（定义内容除了页面内容）|
| `<bdi>` |	Defines a part of text that might be formatted in a different direction from other text（定义了一个文本的一部分，可能会从其他文本格式化的方向不同）|
| `<details>` | Defines additional details that the user can view or hide（定义了更多细节，用户可以查看或隐藏）|
| `<dialog>` | Defines a dialog box or window（定义一个对话框或窗口）|
| `<figcaption>` | Defines a caption for a <figure> element（定义一个标题为`<figure>`的元素）|
| `<figure>` | Defines self-contained content, like illustrations, diagrams, photos, code listings, etc.（定义了自包含的内容，如插图、图表、照片、代码清单等）|
| `<footer>` | Defines a footer for the document or a section（定义文档的页脚或章节）|
| `<header>` | Defines a header for the document or a section （定义文档的标题或章节）|
| `<main>` | Defines the main content of a document（定义文档的主要内容）|
| `<mark>` | Defines marked or highlighted text (定义了标记或突出显示的文本)|
| `<menuitem>` | Defines a command/menu item that the user can invoke from a popup menu（定义一个命令/菜单项弹出菜单，用户可以调用）|
| `<metter>` | Defines a scalar measurement within a known range (a gauge) （定义了一个已知的范围内的标量测定（量规））|
| `<nav>` | Defines navigation links in the document （定义导航栏）|
| `<progress>` | Defines the progress of a task（定义了任务的进展）|
| `<rp>` | Defines what to show in browsers that do not support ruby annotations（定义了在浏览器中显示不支持ruby注释）|
| `<rt>` | Defines an explanation/pronunciation of characters (for East Asian typography) （定义了一个字符解释/发音（东亚排版））|
| `<ruby>` | Defines a ruby annotation (for East Asian typography)（定义了一个ruby注释（东亚排版））|
| `<section>` | Defines a section in the document（定义文档中的一个章节）|
| `<summary>` | Defines a visible heading for a `<details>` element（定义可见标题为`<details>`元素）|
| `<time>` | Defines a date/time （定义日期/时间）|
| `<wbr>` | Defines a possible line-break（定义一个可能的换行符）| 
---

## New Form Elements（新的表单元素）
| Tag（标签） | Dsecription（描述） |
| ------ | ------ |
| `<datalist>` | Defines pre-defined options for input controls（定义了输入控件的预定义的选项）|
| `<keygen>` | Defines a key-pair generator field (for forms)（定义密钥对生成字段（从表格））|
| `<output>` | 	Defines the result of a calculation（定义计算的结果）|
---

## New Input Types（新的输入类型）
| New Input Types（新的输入类型）| New Input Attributes（新的输入属性） |
| ------ | ------ |
| color | autocomplete（自动完成）|
| date | autofocus（自动对焦）|
| datetime | form |
| datetime-local | formaction |
| email | formenctype |
| month | formmethod |
| number | formnovalidate |
| range | formtarget |
| search | height and width |
| tel | list |
| url | multiple |
| week | pattern (regexp) |
|	   | placeholder |
|	   | required |
|	   | step |
---

## HTML5 - New Attribute Syntax（HTML5 - 新的属性语法）

HTML5 allows four different syntaxes for attributes.（HTML5允许四种不同的语法属性）

This example demonstrates the different syntaxes used in an `<input>` tag:（这个例子演示了`<input>`标签不同的语法形式：）
| Type（标签） | Example（示例）|
| ------ | ------ |
| Empty（空） | `<input type="text" value="John" disabled>` |
| Unquoted （无引号）| `<input type="text" value=John>` |
| Double-quoted （双引号）| `<input type="text" value="John Doe">` |
| Single-quoted （单引号）| `<input type="text" value='John Doe'>` |

In HTML5, all four syntaxes may be used, depending on what is needed for the attribute.（在HTML5中，根据所需的属性所有四个语法都可能被使用）
---


## HTML5 Graphics（HTML5图形）
| Tag（标签）| Description（描述） |
| ------ | ------ |
| `<canvas>` | Defines graphic drawing using JavaScript（使用JS定义图形绘制）|
| `<svg>` | Defines graphic drawing using SVG（定义使用SVG图形绘制） | 
---

## New Media Elements（新的媒体元素）
| Tag（标签）| Description（描述） |
| ------ | ------ |
| `<audio>` | Defines sound or music content（定义声音或音乐内容） |
| `<embed>` | Defines containers for external applications (like plug-ins) （定义容器外部应用程序（如插件））|
| `<source>` | Defines sources for <video> and <audio>（定义媒体来源）|
| `<track>` | Defines tracks for <video> and <audio> （用于规定字幕文件或其他包含文本的文件） |
| `<video>` | Defines video or movie content（定义视频或电影内容） |