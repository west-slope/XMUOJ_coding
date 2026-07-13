# XMUOJ 题解集项目介绍

这是一个用于整理 XMUOJ 题目、题面资料与个人参考代码的静态网站项目。网站当前整合了两个题集入口：

- Contest 359：2026年校外实训一之剑道试炼（01 李胜睿班）
- Contest 362：2026年程序设计实践例题（05 李胜睿班）

项目适合用来做课程题集归档、参考代码展示、题面导出和 GitHub Pages 在线发布。

## 在线地址

GitHub Pages 地址：

https://west-slope.github.io/XMUOJ_coding/

## 项目结构

```text
XMUOJ_coding/
├─ index.html                 # 网站入口页面
├─ data.js                    # 题目、题面、样例、来源链接等数据
├─ solutions-data.js          # 由脚本生成的参考代码数据
├─ assets/                    # 页面样式、脚本、图片资源
├─ solutions/                 # 参考代码目录
│  ├─ 359/                    # 剑道试炼参考代码
│  └─ 362/                    # 程序设计实践参考代码
├─ tools/                     # 导入、同步、导出等工具脚本
├─ preview-local.cmd          # 本地预览网站
├─ sync-solutions.cmd         # 同步 solutions 中的代码到网页数据
├─ export-documents.cmd       # 导出题目文档
├─ import-lishengrui-359.cmd  # 导入/更新剑道试炼题目
└─ import-contest-362.cmd     # 导入/更新程序设计实践题目
```

## 网站功能

- 首页提供不同题集入口，可以在剑道试炼和程序设计实践之间切换。
- 左侧栏展示题目列表，并标记是否已有参考代码。
- 题目页展示题面、输入输出说明、样例、提示和题目来源链接。
- 参考代码支持多语言展示，包括 C、C++、Python 等。
- 一道题可以放置多个参考代码文件，网页会显示多个参考代码框。
- 代码区域带有语法高亮和行号，便于阅读。
- 没有参考代码的题目会显示投稿提示。
- 支持将题目整理导出为 Markdown / Word / PDF 前置材料。

## 本地预览

双击运行：

```text
preview-local.cmd
```

默认访问地址：

```text
http://127.0.0.1:8765/
```

如果浏览器没有自动刷新，可以手动打开上述地址，或使用 `Ctrl + F5` 强制刷新缓存。

## 添加或更新参考代码

参考代码统一放在 `solutions` 目录中。

剑道试炼：

```text
solutions/359/
```

程序设计实践：

```text
solutions/362/
```

文件命名建议：

```text
001.cpp
053.cpp
053-2.cpp
053-3.py
LinK01.cpp
Link63-2.cpp
```

规则说明：

- 文件名前半部分对应题目编号或题目 ID。
- `-2`、`-3` 表示同一道题的第二、第三种解法。
- 扩展名用于识别语言，例如 `.cpp`、`.c`、`.py`。
- 不要把备份文件放进 `solutions` 目录，否则可能被识别为参考代码。

更新代码后，双击运行：

```text
sync-solutions.cmd
```

它会重新生成：

```text
solutions-data.js
```

然后刷新网页即可看到最新参考代码。

## 更新题目内容

更新剑道试炼题库：

```text
import-lishengrui-359.cmd
```

更新程序设计实践题库：

```text
import-contest-362.cmd
```

题目内容主要写入：

```text
data.js
assets/problem-images/
```

如果题目中包含图片，导入脚本会尽量把图片保存到本地资源目录，避免网页只显示 `image.png` 或加载过慢。

## 导出文档

双击运行：

```text
export-documents.cmd
```

导出的文件会放在：

```text
exports/
```

这个功能适合把题面整理成 Markdown、Word 或后续转 PDF 的资料。

## 当前维护目标

这个项目的目标是把XMUOJ 小学期的学习资料整理成一个轻量、清晰、可持续更新的网站：题目来自 XMUOJ，参考代码来自本地 `solutions` 目录，页面自动整合展示，方便复习、分享和长期归档。
