window.XMUOJ_SOLUTIONS_DATA = {
  "generatedAt": "2026/7/12 21:41:25",
  "source": "http://www.xmuoj.com",
  "contests": [
    {
      "id": "362",
      "title": "2026年程序设计实践例题(05李胜睿班)",
      "description": "<p>AI协同编程时代已经来临；工程开发方面氛围编程将成为主流。</p><p>编程内功扎实+驾驭各类AI编程工具==AI协同编程时代的王者。</p>",
      "ruleType": "OI",
      "startTime": "06/27/2026 16:00:00",
      "endTime": "07/31/2026 15:59:00",
      "problems": [
        {
          "id": "LinK01",
          "title": "A+B",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK01/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>输入两个整数，求这两个整数的和是多少。</p>",
          "inputDescription": "<p>输入两个整数A,B，用空格隔开</p><p>0≤A,B≤10^8</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示这两个数的和</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1D44y1B7DC\\\" target=\\\"_blank\\\">Andy的讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "7 7",
              "output": "14"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK01.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK02",
          "title": "完美立方",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK02/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">形如a^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">= b^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">+ c^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">+ d^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">的等式被称为完美立方等式。例如12^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">= 6^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">+ 8^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">+ 10^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">。编写一个程序，对任给的正整数N (N≤100)，寻找所有的四元组(a, b, c, d)，使得</span><span style=\\\"color: rgb(35, 31, 23);\\\">a^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">= b^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">+ c^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">+ d^</span>3<span style=\\\"color: rgb(35, 31, 23);\\\">，其中a,b,c,d 大于 1, 小于等于N，且b&lt;=c&lt;=d。</span><br /></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">一个正整数N (N≤100)。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">每行输出一个完美立方。输出格式为：</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">Cube = a, Triple = (b,c,d)</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">其中a,b,c,d所在位置分别用实际求出四元组值代入。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">请按照a的值，从小到大依次输出。当两个完美立方等式中a的值相同，则b值小的优先输出、仍相同则c值小的优先输出、再相同则d值小的先输出。</span></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/bv1Nb4y1C7NJ\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "24",
              "output": "Cube = 6, Triple = (3,4,5)\nCube = 12, Triple = (6,8,10)\nCube = 18, Triple = (2,12,16)\nCube = 18, Triple = (9,12,15)\nCube = 19, Triple = (3,10,18)\nCube = 20, Triple = (7,14,17)\nCube = 24, Triple = (12,16,20)"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK02.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK03",
          "title": "人的周期",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK03/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">据说人生来就有三个生理周期，分别为体力周期、感情周期和智力周期，它们的周期长度分别为23天、28天和33天。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">每一个周期中有一天是高峰。在高峰这天，人会在相应的方面表现出色。</span><span style=\\\"color: rgb(35, 31, 23);\\\">例如，在智力周期的高峰，人会思维敏捷，注意力容易高度集中。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">因为三个周期的长度不同，所以通常三个周期的高峰不会落在同一天。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">对于每个人，想知道何时三个高峰落在同一天。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">对于每个周期，会给出从当前年份的第一天开始，到出现高峰的天数（不一定是第一次高峰出现的时间）。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">给定一个从当年第一天开始的天数，你的任务是输出从给定时间开始（不包括给定时间），下一次三个高峰落在同一天的时间（距给定时间的天数）。例如：给定时间为10，下次出现三个高峰同一天的时间是12，则输出2（注意这里不是3）。</span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输入包含多组数据，每一组数据由四个整数组成，数据以-1 -1 -1 -1 结束。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">对于每一行的四个整数p, e, i和d, 其中p, e, i分别表示体力、情感和智力高峰出现的时间（时间从当年的第一天开始计算）。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">d是给定的时间，可能小于p, e或i。所有给定时间是非负的并且小于或等于365，所求的时间小于或等于21252。</span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">从给定时间起，下一次三个高峰同一天的时间（距离给定时间的天数）。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1yo4y1k7kD\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "0 0 0 0\n0 0 0 100\n5 20 34 325\n4 5 6 7\n283 102 23 320\n203 301 203 40\n-1 -1 -1 -1",
              "output": "Case 1: the next triple peak occurs in 21252 days.\nCase 2: the next triple peak occurs in 21152 days.\nCase 3: the next triple peak occurs in 19575 days.\nCase 4: the next triple peak occurs in 16994 days.\nCase 5: the next triple peak occurs in 8910 days.\nCase 6: the next triple peak occurs in 10789 days."
            }
          ],
          "solution": {
            "path": "solutions/362/LinK03.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK04",
          "title": "排序考试",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK04/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>处于某种原因，一点都不懂编程的某某系小迅老师竟然成功跳槽到计算机系来教大一新生如何编程。</p><p>看着这位在台上胡言乱语，水平比同学小华弱太多的老师，小鲁简直不忍直视。</p><p>那学期的期中考试，小讯老师出的题目竟然是：“请写一个排序算法给数组排序，结果按照升序输出。”</p><p>经过NQ49斩的小鲁分分钟就完成了代码。小讯老师一看，哎呀不得了，得提高期中考试难度。</p><p>他立刻把题目改为：“给定任意T组整数，每组整数都要按升序输出。”</p><p>小鲁笑了笑，原来这类题已经难不倒他了，原来他早就超过了大一上小讯老师的水平了！</p><p>小鲁水平进阶了，你做得到吗？</p>",
          "inputDescription": "<p>第一行是整数T，表示一共有T组数据。</p><p>接下来T行，每行有N+1个数，第一个整数表示该行有N个待排序的数字。</p><p>整数N(1&lt;=N&lt;=1000000），T（1&lt;=T&lt;=100）。</p>",
          "outputDescription": "<p>对于每组整数，按照升序输出排序结果，每个结果占一行。<br /></p>",
          "hint": "",
          "source": "",
          "samples": [
            {
              "input": "3\n4 412 120 5560 3760\n5 576 66 35 99 88\n4 127 100 510 380",
              "output": "120 412 3760 5560\n35 66 88 99 576\n100 127 380 510"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK04.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK05",
          "title": "假币问题",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK05/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>林克有12枚银币。其中有11枚真币和1枚假币。假币看起来和真币没有区别，但是重量不同。但林克不知道假币比真币轻还是重。</p><p>于是他向他朋友约珥借了一架天平，用这架天平称了这些币三次。</p><p><span style=\\\"color: rgb(35, 31, 23);\\\">如果用天平称两枚硬币，发现天平平衡，说明两枚都是真的。</span><span style=\\\"color: rgb(35, 31, 23);\\\">如果用一枚真币与另一枚银币比较，发现它比真币轻或重，说明它是假币。</span></p><p>经过精心的设计，聪明的林克根据这三次称量结果找出假币，并且能够确定假币是轻是重。<br /></p><p>如果给你林克的称量数据，你也可以找出假币并且确定假币是轻是重吗？（林克提供的称量数据保证一定能找出假币）。</p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">第一行有一个数字n，表示有n组测试用例。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">对于每组测试用例：</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">输入有三行，每行表示一次称量的结果。林克事先将银币标号为A-L。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">每次称量的结果用三个以空格隔开的字符串表示：</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">天平左边放置的硬币  天平右边放置的硬币  平衡状态。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">其中平衡状态用``up&#039;&#039;, ``down&#039;&#039;, 或 ``even&#039;&#039;表示, 分别为右端高、右端低和平衡。天平左右的硬币数总是相等的。</span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输出哪一个标号的银币是假币，并说明它比真币轻还是重(heavy or light)。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1kM4y1u71y\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "1\nABCD EFGH even\nABCI EFJK up\nABIJ EFGH even",
              "output": "K is the counterfeit coin and it is light."
            }
          ],
          "solution": {
            "path": "solutions/362/LinK05.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK06",
          "title": "两数之和",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK06/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>双指针是极其常用的算法，这是必须学会，也是不可不会的。</p><p>但是双指针看似简单，背后的思想并不容易掌握，小华深谙此理，为了帮助小鲁一步一步的掌握这编程利器，他为小鲁精心设计了三道题：</p><p>第一题：</p><p>给定一<span style=\\\"color: rgb(51, 51, 51);\\\">个目标值 target，请你在</span>不包含重复元素的按升序排列的整数数组 a中，找出和为目标值的那两个整数，并返回他们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。<br /></p><p><span style=\\\"color: rgb(227, 55, 55);\\\">例如:给定 a= [2, 7, 10, 15], target = 17，因为 a[1] + a[2] = 7 + 10 = 17，所以返回 [1 2]</span></p>",
          "inputDescription": "<p>输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数</p><p>第二行表示数组a的n个数，每个元素用空格隔开。</p>",
          "outputDescription": "<p>输出和为target的两个元素的下标 i j ，其中(i&lt;j)。</p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1s54y1a7Qz\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "17 7\n1 3 5 7 10 11 19",
              "output": "3 4"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK06.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK07",
          "title": "三数之和",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK07/",
          "timeLimit": 10000,
          "memoryLimit": 256,
          "description": "<p>看着小鲁AC了第一题，小华接着提出第二问：<br /></p><p>给定一个目标值 target，请在整数数组 a中，找出三个元素(x,y,z) 使x+y+z==target。<br /></p><p>请找到所有满足条件的三元组，并且请按从小到大的顺序输出所有合法的三元组。</p><p>注意：三元组中不允许包含重复数字，且输出的三元组中要求 x&lt;y&lt;z.</p><p><span style=\\\"color: rgb(227, 55, 55);\\\">例如:给定target = 17，n=7, 数组<span style=\\\"color: rgb(227, 55, 55);\\\">a= [0, 2, 7, 10, 15,18,25]</span></span></p><p><span style=\\\"color: rgb(227, 55, 55);\\\">结果返回两个三元组：(0,2, 15), (</span><span style=\\\"color: rgb(227, 55, 55);\\\">2,7,10)</span></p>",
          "inputDescription": "<p>输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数</p><p>第二行表示数组a的n个数，每个元素用空格隔开。</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(73, 80, 96);\\\">输出所有满足和为target的三元组(x,y,z)，要求(x&lt; y &lt;z) 并且不允许有重复数字。</span><br /></p><p><span style=\\\"color: rgb(73, 80, 96);\\\">把三元组按照x的大小升序输出，x相同的按照y的大小升序输出。</span></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1mV411v7NW\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "17 7\n0 2 7 10 15 18 25 ",
              "output": "0 2 15\n0 7 10"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK07.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK08",
          "title": "四数之和",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK08/",
          "timeLimit": 50000,
          "memoryLimit": 256,
          "description": "<p>当小鲁AC了第二问，小华接着提出第三问：<br /></p><p>给定一个目标值 target，请在整数数组 A中，找出四个元素(a,b,c,d) 使a+b+c+d==target。<br /></p><p>请找到所有满足条件的四元组，并且请按从小到大的顺序输出所有合法的四元组。</p><p>注意：四元组中不允许包含重复数字，且输出的四元组中要求 a&lt;b&lt;c&lt;d</p><p><span style=\\\"color: rgb(227, 55, 55);\\\">例如:给定target = 17，n=7, 数组a= [0, 2, 5, 10, 15,18,25]</span></p><p><span style=\\\"color: rgb(227, 55, 55);\\\">结果返回两个四元组：(0,2,5,10)</span></p>",
          "inputDescription": "<p>输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组A的元素个数</p><p>第二行表示数组A的n个数，每个元素用空格隔开。</p>",
          "outputDescription": "<p>输出所有满足和为target的四元组<span style=\\\"color: rgb(51, 51, 51);\\\">(a,b,c,d) 使(a&lt;b&lt;c&lt;d)</span>并且不允许有重复数字。<br /></p><p>把四元组按照a的大小升序输出，a相同的按照b的大小升序输出,<span style=\\\"color: rgb(51, 51, 51);\\\">a,b相同的按照c的大小升序输出</span>。</p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1nV411Y7wF/\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "17 7\n0 2 5 10 15 18 25 ",
              "output": "0 2 5 10"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK08.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK09",
          "title": "汉诺塔I",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK09/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK09-a2c4031c2e.png\" width=\"376\" height=\"216\" /><br /></p><p>有三根杆子A，B，C。A杆上有N个(N&gt;1)穿孔圆盘，盘的尺寸由下到上依次变小。要求按下列规则将所有圆盘移至C杆： 每次只能移动一个圆盘； 大盘不能叠在小盘上面。 提示：可将圆盘临时置于B杆，也可将从A杆移出的圆盘重新移回A杆，但都必须遵循上述两条规则。<br /></p><p>问：如何移？最少要移动多少次？</p><p><br /></p><p>解法</p><p>解法的基本思想是递归。假设有A、B、C三个塔，A塔有N块盘，目标是把这些盘全部移到C塔。那么先把A塔顶部的N-1块盘移动到B塔，再把A塔剩下的大盘移到C，最后把B塔的N-1块盘移到C。 每次移动多于一块盘时，则再次使用上述算法来移动。</p>",
          "inputDescription": "<p>盘子个数n(1&lt;=n&lt;=20)</p>",
          "outputDescription": "<p>输出移动的步骤，每行一步，如从A座移动到C座，输出&quot;A-&gt;C&quot;。</p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1qy4y187N1\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "3",
              "output": "A->C\nA->B\nC->B\nA->C\nB->A\nB->C\nA->C"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK09.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK10",
          "title": "汉诺塔II",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK10/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK10-1f6ce3160e.png\" width=\"376\" height=\"216\" /><br /></p><p>有三根杆子A，B，C。A杆上有N个(N&gt;1)穿孔圆盘，盘的尺寸由下到上依次变小。要求按下列规则将所有圆盘移至C杆： 每次只能移动一个圆盘； 大盘不能叠在小盘上面。 提示：可将圆盘临时置于B杆，也可将从A杆移出的圆盘重新移回A杆，但都必须遵循上述两条规则。<br /></p><p>问：如何移？最少要移动多少次？</p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输入为一个整数后面跟三个单字符字符串。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">整数为盘子的数目，后三个字符表示三个杆子的编号。</span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输出每一步移动盘子的记录。一次移动一行。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">每次移动的记录为例如3:a-&gt;b 的形式，即把编号为3的盘子从a杆移至b杆。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">我们约定圆盘从小到大编号为1, 2, ...n。即最上面那个最小的圆盘编号为1，最下面最大的圆盘编号为n。</span></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1qy4y187N1\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "3 a b c",
              "output": "1:a->c\n2:a->b\n1:c->b\n3:a->c\n1:b->a\n2:b->c\n1:a->c"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK10.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK11",
          "title": "DFS试炼之排列数字",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK11/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img alt=\"image.png\" src=\"assets/problem-images/LinK11-3035d57ae9.png\" width=\"503\" height=\"315\" /><br /></p><p style=\"margin-left: 0px;\">给定一个整数n，将数字1~n排成一排，将会有很多种排列方法。</p><p>现在，请你按照字典序将所有的排列方法输出。</p><p><span style=\"color: rgb(227, 55, 55);\">数据范围：1&lt;=n&lt;=8</span><br /></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">共一行，包含一个整数n。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">按字典序输出所有排列方案，每个方案占一行。</span><br /></p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1jU4y1a7m3\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p><p><a href=\\\"https://www.acwing.com/problem/content/844/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "",
          "samples": [
            {
              "input": "3",
              "output": "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK11.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK12",
          "title": "字符全排列",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK12/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">给定一个由不同的小写字母组成的字符串，输出这个字符串的所有全排列。</span><br /></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输入只有一行，是一个由不同的小写字母组成的字符串，已知字符串的长度在2到8之间。</span><br /></p>",
          "outputDescription": "<p>输出这个字符串的所有排列方式，每行一个排列。要求字母序比较小的排列在前面。字母序如下定义：</p><p>已知S = s1s2...sk, T = t1t2...tk，则S &lt; T 等价于，存在p (1 &lt;= p &lt;= k)，使得<br />s1= t1, s2= t2, ..., sp - 1= tp - 1, sp&lt; tp成立。</p>",
          "hint": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">需要对输入的字符串排序！</span><br /></p><p><span style=\\\"color: rgb(35, 31, 23);\\\"><a href=\\\"https://www.bilibili.com/video/BV1Rf4y1s71T\\\" target=\\\"_blank\\\">Andy讲解2021年</a><br /></span></p>",
          "source": "",
          "samples": [
            {
              "input": "abc",
              "output": "abc\nacb\nbac\nbca\ncab\ncba "
            }
          ],
          "solution": {
            "path": "solutions/362/LinK12.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK13",
          "title": "输出N皇后的全部摆法",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK13/",
          "timeLimit": 3000,
          "memoryLimit": 256,
          "description": "<p><font>随着编程水平的进阶，小华知道是全面扩充小鲁知识面，帮助他快速升级的时候到了，他再给小鲁布置了道经典题：</font></p><p><span style=\\\"color: rgb(37, 37, 37);\\\">输入一个正整数N，请写一个程</span><span style=\\\"color: rgb(37, 37, 37);\\\">序，</span><span style=\\\"color: rgb(37, 37, 37);\\\">输出</span><span style=\\\"color: rgb(37, 37, 37);\\\">N</span><span style=\\\"color: rgb(37, 37, 37);\\\">皇</span><span style=\\\"color: rgb(37, 37, 37);\\\">后问</span><span style=\\\"color: rgb(37, 37, 37);\\\">题</span><span style=\\\"color: rgb(37, 37, 37);\\\">的全</span><span style=\\\"color: rgb(37, 37, 37);\\\">部</span><span style=\\\"color: rgb(37, 37, 37);\\\">摆法。</span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(37, 37, 37);\\\">输入皇后的个数n（n&lt;=13）</span><br /></p>",
          "outputDescription": "<p>输出长度为n的正整数。</p><p><span style=\\\"color: rgb(37, 37, 37);\\\">输出结果里的每一行都</span><span style=\\\"color: rgb(37, 37, 37);\\\">代</span><span style=\\\"color: rgb(37, 37, 37);\\\">表一</span><span style=\\\"color: rgb(37, 37, 37);\\\">种</span><span style=\\\"color: rgb(37, 37, 37);\\\">摆法</span><span style=\\\"color: rgb(37, 37, 37);\\\">。</span></p><p><span style=\\\"color: rgb(37, 37, 37);\\\">行里</span><span style=\\\"color: rgb(37, 37, 37);\\\">的</span><span style=\\\"color: rgb(37, 37, 37);\\\">第</span><span style=\\\"color: rgb(37, 37, 37);\\\">i</span><span style=\\\"color: rgb(37, 37, 37);\\\">个数</span><span style=\\\"color: rgb(37, 37, 37);\\\">字</span><span style=\\\"color: rgb(37, 37, 37);\\\">如</span><span style=\\\"color: rgb(37, 37, 37);\\\">果是n，就代表第</span><span style=\\\"color: rgb(37, 37, 37);\\\">i</span><span style=\\\"color: rgb(37, 37, 37);\\\">行的</span><span style=\\\"color: rgb(37, 37, 37);\\\">皇</span><span style=\\\"color: rgb(37, 37, 37);\\\">后应</span><span style=\\\"color: rgb(37, 37, 37);\\\">该</span><span style=\\\"color: rgb(37, 37, 37);\\\">放在</span><span style=\\\"color: rgb(37, 37, 37);\\\">第</span><span style=\\\"color: rgb(37, 37, 37);\\\">n</span><span style=\\\"color: rgb(37, 37, 37);\\\">列。</span></p><p><span style=\\\"color: rgb(37, 37, 37);\\\"><span style=\\\"color: rgb(37, 37, 37);\\\">皇后的行、列编号都是</span><span style=\\\"color: rgb(37, 37, 37);\\\">从</span><span style=\\\"color: rgb(37, 37, 37);\\\">1</span><span style=\\\"color: rgb(37, 37, 37);\\\">开始</span><span style=\\\"color: rgb(37, 37, 37);\\\">算</span><span style=\\\"color: rgb(37, 37, 37);\\\">。</span><br /></span></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1X64y1D7fg\\\" target=\\\"_blank\\\">Andy的讲解(2021</a><span style=\\\"color: rgb(51, 51, 51);\\\">)</span><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "4",
              "output": "2413\n3142\n\n"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK13.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK14",
          "title": "求八皇后的第n种解",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK14/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">掌握基本的递归函数也明白如何生成N皇后问题后，在小华的指导下，小鲁决定加大难度，下一步挑战的就是n皇后问题的升级版：</span></p><p style=\\\"margin-left: 40px;\\\"><span style=\\\"color: rgb(35, 31, 23);\\\">国际象棋中的皇后可以在横、竖、斜线上不限步数地吃掉其他棋子。</span><br /></p><p style=\\\"margin-left: 40px;\\\"><span style=\\\"color: rgb(35, 31, 23);\\\">八</span><span style=\\\"color: rgb(35, 31, 23);\\\">个皇后问题是如何将八个皇后放在棋盘上（有</span><span style=\\\"color: rgb(35, 31, 23);\\\">8 * 8</span><span style=\\\"color: rgb(35, 31, 23);\\\">个方格），使它们谁也不能被其他皇后吃掉！</span></p><p style=\\\"margin-left: 40px;\\\"><span style=\\\"color: rgb(35, 31, 23);\\\"><span style=\\\"color: rgb(35, 31, 23);\\\">已经知道八皇后问题一共有92组解，每组解可以用一个字符串表示：</span></span></p><p style=\\\"margin-left: 40px;\\\"><span style=\\\"color: rgb(35, 31, 23);\\\">对于某个满足要求的</span><span style=\\\"color: rgb(35, 31, 23);\\\">八</span><span style=\\\"color: rgb(35, 31, 23);\\\">皇后的摆放方法，定义一个皇后串</span><span style=\\\"color: rgb(35, 31, 23);\\\">a</span><span style=\\\"color: rgb(35, 31, 23);\\\">与之对应，即</span><span style=\\\"color: rgb(35, 31, 23);\\\">a=b</span><span style=\\\"color: rgb(35, 31, 23);\\\">1</span><span style=\\\"color: rgb(35, 31, 23);\\\">b</span><span style=\\\"color: rgb(35, 31, 23);\\\">2</span><span style=\\\"color: rgb(35, 31, 23);\\\">...b</span><span style=\\\"color: rgb(35, 31, 23);\\\">8</span><span style=\\\"color: rgb(35, 31, 23);\\\">，其中b</span><span style=\\\"color: rgb(35, 31, 23);\\\">i</span><span style=\\\"color: rgb(35, 31, 23);\\\">为相应摆法中第i行皇后所处的列数。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\"><b>题目是：</b></span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">输入一个数n，要求输出八皇后问题的第n个解，也就是第n个皇后字符串。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">串的比较是这样的：皇后串x置于皇后串y之前，当且仅当将x视为整数时比y小。</span></p><p></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">请你写一个程序，能够根据输入的数n( 1&lt;=n&lt;=92),输出第n个合法的八皇后串。</span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">第1行是测试数据的组数T，后面跟着T行输入。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">每组测试数据<span style=\\\"color: rgb(35, 31, 23);\\\">占1行，包含</span>一个正整数n (1 &lt;= n &lt;= 92)</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输出有T行，每行输出对应一个输入。输出应是一个正整数，是第n个八皇后串。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1X64y1D7fg\\\" target=\\\"_blank\\\">Andy的讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "2\n1\n92",
              "output": "15863724\n84136275"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK14.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK15",
          "title": "爬天梯",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK15/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\\\"image.png\\\" /><br /></p><p>经过激烈的战斗，林克过关斩将终于抵达<span style=\\\"color: rgb(51, 51, 51);\\\">初阶</span>递归之试炼的最后一关。<br />在他面前有一座天梯，天梯的顶端就是传说中的递归试炼通过证了。</p><p>林克每步可以跨一级台阶或者跨二级台阶。他必须尝试所有的走法才能得到递归试炼通过证。</p><p>如果天梯的台阶数是N，请问他总共需要尝试多少种走法？</p>",
          "inputDescription": "<p>输入天梯的台阶数N。</p><p style=\\\"margin-left: 0.01in;\\\">(0&lt;=N&lt;=46)</p>",
          "outputDescription": "<p>输出林克有几种走法。</p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1ov411b7Lu\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "3",
              "output": "3"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK15.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK16",
          "title": "放苹果",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK16/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK16-09aebb4758.png\" width=\"470\" height=\"233\" /><br /></span></p><p><span style=\"color: rgb(35, 31, 23);\">要寻找克罗克果实，林克需要把苹果放在盘子里，其中只有一种情况可以让克罗克果实出现。</span><span style=\"color: rgb(35, 31, 23);\">所以，林克需要尝试所有的放法。</span></p><p><span style=\"color: rgb(35, 31, 23);\">有M个同样的苹果放在N个同样的盘子里，允许有的盘子空着不放，问共有多少种不同的放法？<br /><br />注意：5，1，1和1，5，1 是同一种<span style=\"color: rgb(35, 31, 23);\">放法</span>。</span><br /></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">第一行是测试数据的数目t（0 &lt;= t &lt;= 20）。以下每行均包含二个整数M和N，以空格分开。0&lt;=M，N&lt;=10。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">对输入的每组数据M和N，用一行输出相应的K。K为正整数，代表共有几种放法。</span><br /></p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1y64y1D7AM\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p><p>改编自《分苹果》</p>",
          "source": "xmu",
          "samples": [
            {
              "input": "1\n7 3",
              "output": "8"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK16.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK17",
          "title": "递归求波兰表达式",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK17/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>站在巨人的肩膀上，编程之路才能越走越宽。小华继续向小鲁讲授新的知识点：波兰表达式。</p><p style=\\\"margin-left: 40px;\\\">逆波兰表达式，英文为 Reverse Polish notation，跟波兰表达式（Polish notation）相对应。</p><p style=\\\"margin-left: 40px;\\\">之所以叫波兰表达式和逆波兰表达式，是为了纪念波兰的数理科学家 Jan Łukasiewicz的创意。</p><ul><li>平时我们习惯将表达式写成 (1 + 2) * (3 + 4)，加减乘除等运算符写在中间，因此称呼为中缀表达式。</li><li>而波兰表达式的写法为 (* (+ 1 2) (+ 3 4))，将运算符写在前面，因而也称为前缀表达式。</li><li>逆波兰表达式的写法为 ((1 2 +) (3 4 +) *)，将运算符写在后面，因而也称为后缀表达式。</li></ul><p style=\\\"margin-left: 40px;\\\">波兰表达式和逆波兰表达式有个好处，就算将圆括号去掉也没有歧义。上述的波兰表达式去掉圆括号，变为<code>* + 1 2 + 3 4</code>。逆波兰表达式去掉圆括号，变成<code>1 2 + 3 4 + *</code>也是无歧义并可以计算的。事实上我们通常说的波兰表达式和逆波兰表达式就是去掉圆括号的。而中缀表达式，假如去掉圆括号，将 (1 + 2)(3 + 4) 写成 1 + 23 + 4，就改变原来意思了。</p><p style=\\\"margin-left: 40px;\\\"><code>(2 + 3) * 4</code>的波兰表示法为<code>* + 2 3 4</code></p><p style=\\\"\\\">请写程序求解波兰表达式的值。</p><p style=\\\"\\\">注意：本题输入的运算符只包括如下4个运算符：<code>+ - * /</code></p><p style=\\\"margin-left: 0px;\\\"><span style=\\\"color: rgb(35, 31, 23);\\\">提示：可使用atof(str)把字符串转换为一个double类型的浮点数，方便求解。</span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输入为一行波兰表达式，其中运算符和运算数之间都用空格分隔，运算数是浮点数。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输出为一行，表达式的值。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">可直接用printf(&quot;%f\\\\n&quot;, v)输出表达式的值v。</span></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV12f4y1s7yV\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "* + 11.0 12.0 + 24.0 35.0",
              "output": "1357.000000"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK17.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK18",
          "title": "2的幂次方表示",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK18/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK18-4ac3689913.png\" width=\"490\" height=\"465\" /><br /></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">一个正整数n（n≤20000）。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">一行，符合约定的n的0，2表示（在表示中不能有空格）。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1PA411N7Lg\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "137",
              "output": "2(2(2)+2+2(0))+2(2+2(0))+2(0)"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK18.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK19",
          "title": "递归实现指数型枚举",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK19/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>从 1∼n 这 n 个整数中随机选取任意多个，输出所有可能的选择方案。<br /></p>",
          "inputDescription": "<p>输入一个整数 n。<br /></p><p>数据范围：</p><p>1≤n≤15<br /></p>",
          "outputDescription": "<p>每行输出一种方案。</p><p>同一行内的数必须升序排列，相邻两个数用恰好 1 个空格隔开。</p><p>对于没有选任何数的方案，输出空行。</p><p>本题有自定义校验器（SPJ），各行（不同方案）之间的顺序任意。</p>",
          "hint": "",
          "source": "",
          "samples": [
            {
              "input": "3",
              "output": "\n3\n2\n2 3\n1\n1 3\n1 2\n1 2 3\n"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK19.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK20",
          "title": "递归实现组合型枚举",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK20/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>从 1∼n 这 n 个整数中随机选出 m 个，输出所有可能的选择方案。<br /></p>",
          "inputDescription": "<p>两个整数 n,m ,在同一行用空格隔开。<br /></p><p>数据范围</p><p>n&gt;0 ,</p><p>0≤m≤n ,</p><p>n+(n−m)≤25</p>",
          "outputDescription": "<p>按照从小到大的顺序输出所有方案，每行 1 个。</p><p>首先，同一行内的数升序排列，相邻两个数用一个空格隔开。</p><p>其次，对于两个不同的行，对应下标的数一一比较，字典序较小的排在前面（例如 1 3 5 7 排在 1 3 6 8 前面）。</p>",
          "hint": "",
          "source": "",
          "samples": [
            {
              "input": "5 3",
              "output": "1 2 3 \n1 2 4 \n1 2 5 \n1 3 4 \n1 3 5 \n1 4 5 \n2 3 4 \n2 3 5 \n2 4 5 \n3 4 5 "
            }
          ],
          "solution": {
            "path": "solutions/362/LinK20.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK21",
          "title": "递归实现排列型枚举",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK21/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>把 1∼n 这 n 个整数排成一行后随机打乱顺序，输出所有可能的次序。<br /></p>",
          "inputDescription": "<p>一个整数 n。<br /></p><p>数据范围</p><p>1≤n≤9</p>",
          "outputDescription": "<p>按照从小到大的顺序输出所有方案，每行 1 个。</p><p>首先，同一行相邻两个数用一个空格隔开。</p><p>其次，对于两个不同的行，对应下标的数一一比较，字典序较小的排在前面。</p>",
          "hint": "",
          "source": "",
          "samples": [
            {
              "input": "3",
              "output": "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK21.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK22",
          "title": "算术表达式",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK22/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>给定一个仅由正整数(<font>数字</font><font>1</font>-数字9)、乘法运算符(<font>“*”</font>)和加法运算符(<font>“+”</font>)组成的算术表达式，计算该算术表达式的值。<br /></p>",
          "inputDescription": "<p>输入共两行，第一行包含一个整数 N( 2 ≤N<span style=\\\"color: rgb(51, 51, 51);\\\">≤ 200 000 )</span>，表示待输入表达式中数字的个数。</p><p>第二行包含一个字符串，共 2N-1 个字符，即所给的算术表达式。</p><p>输入保证表达式中每个数字$x_{i} \\\\in\\\\left \\\\{  1,2,3,4,5,6,7,8,9\\\\right \\\\}$，运算符仅为“*”或“+”</p><p><font>对于</font><font>60%</font><font>的数据，保证<span style=\\\"color: rgb(51, 51, 51);\\\">2 ≤</span>N<span style=\\\"color: rgb(51, 51, 51);\\\">≤ 1000</span></font>。</p><p><font>对于</font><font>40%</font><font>的数据，保证 1000<span style=\\\"color: rgb(51, 51, 51);\\\">≤</span>N<span style=\\\"color: rgb(51, 51, 51);\\\">≤ 200 000</span></font>。</p>",
          "outputDescription": "<p>输出共一行，包含一个正整数，表示算术表达式的运算结果。</p><p>由于这个结果可能非常大，请你在输出该结果对1000 000 007取模的结果。</p><p>（提示：请考虑运算过程中可能存在的溢出问题，并合理的进行取模）</p>",
          "hint": "",
          "source": "C语言在线评测 https://10.26.57.61/",
          "samples": [
            {
              "input": "3\n1+1*4",
              "output": "5"
            },
            {
              "input": "3\n5*1+4",
              "output": "9"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK22.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK23",
          "title": "二进制密码锁",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK23/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK23-9cfccb6363.png\" width=\"197\" height=\"134\" /><br /></p><p>在海拉鲁大陆有一种特殊的二进制密码锁，由n个相连的按钮组成（n&lt;30），按钮有凹/凸两种状态，用手按按钮会改变其状态。</p><p>然而让人头疼的是，当按一个按钮时，跟它相邻的两个按钮状态也会反转。当然，如果按的是最左或者最右边的按钮，该按钮只会影响到跟它相邻的一个按钮。</p><p>当前密码锁状态已知，需要解决的问题是，林克至少需要按多少次按钮，才能将密码锁转变为所期望的目标状态。</p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">两行，给出两个由0、1组成的等长字符串，表示当前/目标密码锁状态，其中0代表凹，1代表凸。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">至少需要进行的按按钮操作次数，如果无法实现转变，则输出impossible。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1Zi4y1N7dU\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "011\n000",
              "output": "1"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK23.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK24",
          "title": "熄灯问题",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK24/",
          "timeLimit": 10000,
          "memoryLimit": 512,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\">有一个由按钮组成的矩阵，其中每行有6个按钮，共5行。每个按钮的位置上有一盏灯。当按下一个按钮后，该按钮以及周围位置(上边、下边、左边、右边)的灯都会改变一次。即，如果灯原来是点亮的，就会被熄灭；如果灯原来是熄灭的，则会被点亮。在矩阵角上的按钮改变3盏灯的状态；在矩阵边上的按钮改变4盏灯的状态；其他的按钮改变5盏灯的状态。</span></p><p><img src=\"assets/problem-images/LinK24-5bbfb55c19.jpg\" /></p><p><span style=\"color: rgb(35, 31, 23);\">在上图中，左边矩阵中用X标记的按钮表示被按下，右边的矩阵表示灯状态的改变。对矩阵中的每盏灯设置一个初始状态。请你按按钮，直至每一盏等都熄灭。与一盏灯毗邻的多个按钮被按下时，一个操作会抵消另一次操作的结果。在下图中，第2行第3、5列的按钮都被按下，因此第2行、第4列的灯的状态就不改变。</span></p><p><img src=\"assets/problem-images/LinK24-e31d5d67f2.jpg\" /></p><p><span style=\"color: rgb(35, 31, 23);\">请你写一个程序，确定需要按下哪些按钮，恰好使得所有的灯都熄灭。根据上面的规则，我们知道1）第2次按下同一个按钮时，将抵消第1次按下时所产生的结果。因此，每个按钮最多只需要按下一次；2）各个按钮被按下的顺序对最终的结果没有影响；3）对第1行中每盏点亮的灯，按下第2行对应的按钮，就可以熄灭第1行的全部灯。如此重复下去，可以熄灭第1、2、3、4行的全部灯。同样，按下第1、2、3、4、5列的按钮，可以熄灭前5列的灯。</span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">5行组成，每一行包括6个数字（0或1）。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">相邻两个数字之间用单个空格隔开。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">0表示灯的初始状态是熄灭的，1表示灯的初始状态是点亮的。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">5行组成，每一行包括6个数字（0或1）。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">相邻两个数字之间用单个空格隔开。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">其中的1表示需要把对应的按钮按下，0则表示不需要按对应的按钮。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1QK4y1J7en\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "2\n0 1 1 0 1 0\n1 0 0 1 1 1\n0 0 1 0 0 1\n1 0 0 1 0 1\n0 1 1 1 0 0\n0 0 1 0 1 0\n1 0 1 0 1 1\n0 0 1 0 1 1\n1 0 1 1 0 0\n0 1 0 1 0 0",
              "output": "PUZZLE #1\n1 0 1 0 0 1 \n1 1 0 1 0 1 \n0 0 1 0 1 1 \n1 0 0 1 0 0 \n0 1 0 0 0 0 \nPUZZLE #2\n1 0 0 1 1 1 \n1 1 0 0 0 0 \n0 0 0 1 0 0 \n1 1 0 1 0 1 \n1 0 1 1 0 1 \n\n注意：PUZZLE行结尾没有空格，数字行最后有一个空格。"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK24.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK25",
          "title": "拨钟问题",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK25/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>有9个时钟，排成一个3*3的矩阵。<br /></p><pre><code>|-------|    |-------|    |-------|<br />|       |    |       |    |   |   |<br />|---O   |    |---O   |    |   O   |<br />|       |    |       |    |       |<br />|-------|    |-------|    |-------|<br />    A            B            C    <br /><br />|-------|    |-------|    |-------|<br />|       |    |       |    |       |<br />|   O   |    |   O   |    |   O   |<br />|   |   |    |   |   |    |   |   |<br />|-------|    |-------|    |-------|<br />    D            E            F    <br /><br />|-------|    |-------|    |-------|<br />|       |    |       |    |       |<br />|   O   |    |   O---|    |   O   |<br />|   |   |    |       |    |   |   |<br />|-------|    |-------|    |-------|<br />    G            H            I    <br />(图 1)</code></pre><p>现在需要用最少的移动，将9个时钟的指针都拨到12点的位置。共允许有9种不同的移动。如下表所示，每个移动会将若干个时钟的指针沿顺时针方向拨动90度。<br /><br /><br /></p><pre><code>移动    影响的时钟<br /> <br /> 1         ABDE<br /> 2         ABC<br /> 3         BCEF<br /> 4         ADG<br /> 5         BDEFH<br /> 6         CFI<br /> 7         DEGH<br /> 8         GHI<br /> 9         EFHI    </code></pre>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">9个整数，表示各时钟指针的起始位置，相邻两个整数之间用单个空格隔开。其中，0=12点、1=3点、2=6点、3=9点。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输出一个最短的时钟指针移动序列，使得9个时钟的指针都指向12点。按照移动的序号从小到大输出结果。相邻两个整数之间用单个空格隔开。</span><br /></p>",
          "hint": "",
          "source": "xmu",
          "samples": [
            {
              "input": "3 3 0 \n2 2 2 \n2 1 2 ",
              "output": "4 5 8 9 "
            }
          ],
          "solution": {
            "path": "solutions/362/LinK25.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK26",
          "title": "算24",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK26/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK26-5f91987cda.png\" width=\"600\" height=\"321.0459183673469\" /><br /></span></p><p><span style=\"color: rgb(35, 31, 23);\">林克来到怪物商店，决定开始挑战一道难题：算24！</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">题目是：给出4个小于10的非负整数，你可以使用加减乘除4种运算以及括号把这4个数连接起来得到一个表达式。</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">现在的问题是，是否存在一种方式使得得到的表达式的结果等于24。</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">这里加减乘除以及括号的运算结果和运算的优先级跟我们平常的定义一致（这里的除法定义是实数除法）。</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">比如，对于5，5，5，1，我们知道5 * (5 – 1 / 5) = 24，因此可以得到24。又比如，对于1，1，4，2，我们怎么都不能得到24。</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">注意：输入数字的次序可以改变。</span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输入数据包括多行，每行给出一组测试数据，包括4个小于10的非负整数。最后一组测试数据中包括4个0，表示输入的结束，这组数据不用处理。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">对于每一组测试数据，输出一行，如果可以得到24，输出“YES”；否则，输出“NO”。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV12E411E7u9\\\" target=\\\"_blank\\\">Andy的讲解(2020)</a><br /></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "5 5 5 1\n1 1 4 2\n0 0 0 0",
              "output": "YES\nNO"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK26.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK27",
          "title": "大数排序",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK27/",
          "timeLimit": 50,
          "memoryLimit": 251,
          "description": "<p>小鲁虽然编程能力很一般，但是嘴皮子上不服输。他很喜欢拿自己不懂的问题考小华。</p><p>刚学会冒泡排序的他，决定挑战一下小华的智商：</p><p style=\\\"margin-left: 0px;\\\">给定你一个长度为n的整数数列。</p><p>请你对这个数列按照从小到大进行排序。</p><p>并将排好序的数列按顺序输出。</p><p>小鲁刻意隐瞒了数据的规模，你觉得小华能够搞定吗?</p><p>偷偷告诉你：<span style=\\\"color: rgb(227, 55, 55);\\\">1≤n≤100000</span><span style=\\\"color: rgb(227, 55, 55);\\\">，所有整数均在1--10^9范围内</span></p><p><span style=\\\"color: rgb(227, 55, 55);\\\"><span style=\\\"color: rgb(51, 51, 51);\\\">后记：小华使用快速排序秒过，小鲁惨败，因为他看不懂小华的代码......</span><br /></span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输入共两行，第一行包含整数 n。</span><br /></p><p><span style=\\\"color: rgb(51, 51, 51);\\\"><span style=\\\"color: rgb(51, 51, 51);\\\">第二行包含 n 个整数，<span style=\\\"color: rgb(51, 51, 51);\\\">表示整个数列。</span></span><br /></span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出共一行，包含 n 个整数，表示排好序的数列。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1SZ4y1w7dZ\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "12\n111584322 907287398 13562672 615771042 83035480 323016588 501254568 158361642 388135644 58329696 400904710 38908140",
              "output": "13562672 38908140 58329696 83035480 111584322 158361642 323016588 388135644 400904710 501254568 615771042 907287398 "
            }
          ],
          "solution": {
            "path": "solutions/362/LinK27.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK28",
          "title": "快速选择第k个数",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK28/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>给定一个长度为n的整数数列，以及一个整数k，请用快速选择算法求出数列的第k小的数是多少。<br /></p>",
          "inputDescription": "<p>第一行包含两个整数 n 和 k。</p><p>第二行包含 n 个整数（所有整数均在1--10^9范围内），表示整数数列。</p><p><span style=\\\"color: rgb(227, 55, 55);\\\">数据范围:1≤n≤100000,1≤k≤n</span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示数列的第k小数。</span><br /></p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1AK4y1S7wE\\\" target=\\\"_blank\\\">Andy讲解(2021)</a></p><p><a href=\\\"https://www.acwing.com/problem/content/788/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "",
          "samples": [
            {
              "input": "5 3\n2 4 1 5 3",
              "output": "3"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK28.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK29",
          "title": "输出前k大的数",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK29/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">给定一个数组，统计前k大的数并且把这k个数从大到小输出。</span><br /></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">第一行包含一个整数n，表示数组的大小。n &lt; 100000。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">第二行包含n个整数，表示数组的元素，整数之间以一个空格分开。每个整数的绝对值不超过100000000。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">第三行包含一个整数k。k &lt; n。</span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">从大到小输出前k大的数，每个数一行。</span><br /></p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/av95375978\\\" target=\\\"_blank\\\">归并排序讲解</a></p><p><a href=\\\"https://www.bilibili.com/video/av95376260\\\" target=\\\"_blank\\\">快速排序讲解</a></p><p><a href=\\\"https://www.bilibili.com/video/av95376767\\\" target=\\\"_blank\\\">Andy的讲解</a></p><p>参考：<a href=\\\"http://cxsjsxmooc.openjudge.cn/2020t2spring5/001/\\\" target=\\\"_blank\\\">http://cxsjsxmooc.openjudge.cn/2020t2spring5/001/</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "10\n4 5 6 9 8 7 1 2 3 0\n5",
              "output": "9\n8\n7\n6\n5"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK29.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK30",
          "title": "归并排序",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK30/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\\\"margin-left: 0px;\\\">给定你一个长度为n的整数数列。</p><p>请你使用归并排序对这个数列按照从小到大进行排序。</p><p>并将排好序的数列按顺序输出。</p>",
          "inputDescription": "<p>输入共两行，第一行包含整数 n。</p><p>第二行包含 n 个整数（所有整数均在1~109109范围内），表示整个数列。</p><p><span style=\\\"color: rgb(227, 55, 55);\\\">数据范围:</span><span style=\\\"color: rgb(227, 55, 55);\\\">1</span><span style=\\\"color: rgb(227, 55, 55);\\\">≤</span><span style=\\\"color: rgb(227, 55, 55);\\\">n</span><span style=\\\"color: rgb(227, 55, 55);\\\">≤</span><span style=\\\"color: rgb(227, 55, 55);\\\">100000</span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出共一行，包含 n 个整数，表示排好序的数列。</span><br /></p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1PK411w7m8\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p><p><a href=\\\"https://www.acwing.com/video/229/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "",
          "samples": [
            {
              "input": "5\n3 1 2 4 5",
              "output": "1 2 3 4 5"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK30.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK31",
          "title": "求排列的逆序数",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK31/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>在Internet上的搜索引擎经常需要对信息进行比较，比如可以通过某个人对一些事物的排名来估计他（或她）对各种不同信息的兴趣，从而实现个性化的服务。</p><p>对于不同的排名结果可以用逆序来评价它们之间的差异。考虑1,2,…,n的排列i1，i2，…，in，如果其中存在j,k，满足 j &lt; k 且ij&gt; ik， 那么就称(ij,ik)是这个排列的一个逆序。</p><p>一个排列含有逆序的个数称为这个排列的逆序数。</p><p>例如排列 263451 含有8个逆序(2,1),(6,3),(6,4),(6,5),(6,1),(3,1),(4,1),(5,1)，因此该排列的逆序数就是8。</p><p>显然，由1,2,…,n 构成的所有n!个排列中，最小的逆序数是0，对应的排列就是1,2,…,n；最大的逆序数是n(n-1)/2，对应的排列就是n,(n-1),…,2,1。</p><p>逆序数越大的排列与原始排列的差异度就越大。</p><p>现给定1,2,…,n的一个排列，求它的逆序数。</p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">第一行是一个整数n，表示该排列有n个数（n &lt;= 100000)。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">第二行是n个不同的正整数，之间以空格隔开，表示该排列。</span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输出该排列的逆序数。</span><br /></p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV14X4y1G77n\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p><p><a href=\\\"https://www.bilibili.com/video/av95376969\\\" target=\\\"_blank\\\">Andy的讲解(2020)</a></p><p>逆序数可能很多，使用long long存储</p><p><a href=\\\"https://www.acwing.com/problem/content/790/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "",
          "samples": [
            {
              "input": "6\n2 6 3 4 5 1",
              "output": "8"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK31.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK32",
          "title": "查找指定数",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK32/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(73, 80, 96);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK32-a5183e4715.png\" width=\"662\" height=\"337\" /><br /></span></p><p><span style=\"color: rgb(73, 80, 96);\">面对铺面而来的波克布林大军，林克需要快速制胜，所谓擒贼先擒王，林克需要锁定目标一击必杀。</span></p><p><span style=\"color: rgb(73, 80, 96);\">假设怪物大军共有N只波克布林（1&lt;=N&lt;=100000）和数组nums存储每个怪的编号。根据情报，需要击杀的目标编号是</span><span style=\"color: rgb(73, 80, 96);\">target。</span></p><p><span style=\"color: rgb(73, 80, 96);\">请从nums中迅速找出target的数组下标，如果找不到请输出-1.</span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(73, 80, 96);\\\">第一行N表示数组大小。</span></p><p><span style=\\\"color: rgb(73, 80, 96);\\\">第二行为nums的N个元素(不包含重复元素)</span></p><p><span style=\\\"color: rgb(73, 80, 96);\\\">第三行T表示接下来又T个元素需要查找。</span></p><p><span style=\\\"color: rgb(73, 80, 96);\\\">接下来T行，每行为查找的目标元素target值。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(73, 80, 96);\\\">输出为T个目标元素的下标，找不到输出-1</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1tA41157aa\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "36\n0 1 5 8 10 12 15 17 20 26 36 68 71 80 90 92 96 100 101 104 130 275 345 405 425 519 573 583 608 616 714 780 802 842 910 961 \n5\n8\n42\n64\n130\n912",
              "output": "3\n-1\n-1\n20\n-1\n"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK32.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK33",
          "title": "攻击范围",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK33/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK33-6002a034ba.png\" width=\"513\" height=\"284\" /><br /></p><p>面对铺面而来的怪物大军，林克需要根据怪物类型进行区域攻击。</p><p>假设怪物大军共有N个怪物（1&lt;=N&lt;=100000），升序数组nums存储每个怪物的编号，同一类型的怪物编号相同。</p><p>根据情报，需要击杀的目标编号是target。</p><p>请从nums中迅速找出编号为target的怪物的数组下标范围。</p><p>如果找不到请输出-1 -1.</p>",
          "inputDescription": "<p>第一行包含整数n和q，表示数组长度和询问个数。</p><p>第二行包含n个整数（均在1~10000范围内），表示完整数组。</p><p>接下来q行，每行包含一个整数k，表示一个询问元素。</p><h4><span style=\\\"color: rgb(227, 55, 55);\\\">数据范围<br />1≤n≤100000<br />1≤q≤10000<br />1≤k≤10000</span></h4>",
          "outputDescription": "<p>共q行，每行包含两个整数，表示所求元素的起始位置和终止位置<span style=\\\"color: rgb(51, 51, 51);\\\">（位置从0开始计数）</span>。</p><p>如果数组中不存在该元素，则返回“-1 -1”。</p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1gi4y1N7XR\\\" target=\\\"_blank\\\">Andy讲解(2021)</a></p><p><a href=\\\"https://www.acwing.com/problem/content/791/\\\" target=\\\"_blank\\\">原题ACW789</a></p>",
          "source": "",
          "samples": [
            {
              "input": "6 3\n1 2 2 3 3 4\n3\n4\n5",
              "output": "3 4\n5 5\n-1 -1"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK33.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK34",
          "title": "求方程的根",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK34/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>看着小鲁的编程水平再次进阶，小华很欣慰，是时候教导他基本算法的时候了。</p><p>小华喊小鲁过来，对他说：今天要教你一招新招，二分法。这种分而治之的思想是算法中常见的思考方式，也是优化算法必须要掌握的利器。二分法的用途很广。我出道题，你想想要怎么用二分法做。</p><p>说着，小华在纸上写下了一个方程：</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK34-7c9ff43c4e.png\" width=\"200\" height=\"25.85034013605442\" /></p><p>请用二分法求方程的根，<span style=\"color: rgb(51, 51, 51);\">精确到小数点后9位。</span></p>",
          "inputDescription": "<p>没有输入。</p>",
          "outputDescription": "<p>5.705085930<br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1Cf4y1x7kk\\\" target=\\\"_blank\\\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "无",
              "output": "5.705085930"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK34.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK35",
          "title": "数的三次方根",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK35/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">给定一个浮点数n，求它的三次方根。</span><br /></p><p><span style=\\\"color: rgb(227, 55, 55);\\\">数据范围:−10000≤n≤10000</span><br /></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">共一行，包含一个浮点数n。</span><br /></p>",
          "outputDescription": "<p>共一行，包含一个浮点数，表示问题的解。</p><p>注意，结果保留6位小数。</p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/792/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "1000.00",
              "output": "10.000000"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK35.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK36",
          "title": "最小预算值",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK36/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img src=\"assets/problem-images/LinK36-83a552bb0b.png\" alt=\"image.png\" /><br /></p><p style=\"margin-left: 0px;\">为了升级希卡之石林克来到了阿卡莱研究所。这个海拉鲁大陆最顶级的研究所，每天都要消耗大量的研究经费，</p><p style=\"margin-left: 0px;\">然而令人惊奇的是这个研究所的经费从不短缺，这完全得益于研究所制定预算的能力。</p><p style=\"margin-left: 0px;\">如果谁能搞清楚阿卡来研究所制定预算的算法，并且给出最佳预算的值，那么他就可以免费升级希卡之石。</p><p style=\"margin-left: 0px;\">林克显然不擅长做预算，作为他好朋友的你，可以出手相助吗？</p><p>已知研究所接下来N天（<span style=\"color: rgb(73, 80, 96);\">1≤N≤ 100,000</span><span style=\"color: rgb(73, 80, 96);\">）</span>每日的固定支出预计为X(N)卢比。</p><p>研究所需要将未来的N天分为M组<span style=\"color: rgb(73, 80, 96);\">(1 ≤M≤N)</span><span style=\"color: rgb(73, 80, 96);\">，</span>每组是1天或者连续的几天。</p><p>（假如第1，2，3天为一组，那么该组的总固定支出Total(1)是这三天的固定支出之和X(0)+X(1)+X(2)）</p><p>请问，如果一定要将未来的N天分为M组，<span style=\"color: rgb(51, 51, 51);\">假设分配给每组的预算是一个固定值Budget，并且</span>不同组所得到的卢比即便有结余也不可以挪用。</p><p>求能够完全满足每组支出需要的最小的<span style=\"color: rgb(51, 51, 51);\">Budget</span>值是多少。</p>",
          "inputDescription": "<p style=\\\"margin-left: 0px;\\\"><span style=\\\"color: rgb(35, 31, 23);\\\">第一行包含两个整数N,M，用单个空格隔开。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">第二行有N个从<span style=\\\"color: rgb(35, 31, 23);\\\">1到10000之间的整数，</span>表示接下来N天里每天的固定支出预算。</span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">一个整数，即</span><span style=\\\"color: rgb(35, 31, 23);\\\"></span><span style=\\\"color: rgb(51, 51, 51);\\\">满足每组支出需要的最小的预算值</span><span style=\\\"color: rgb(51, 51, 51);\\\">。</span><br /></p>",
          "hint": "<p><span style=\\\"color: rgb(51, 51, 51);\\\"><a href=\\\"https://www.bilibili.com/video/av94908717?pop_share=1\\\" target=\\\"_blank\\\"></a><a href=\\\"https://www.bilibili.com/video/av94908717?pop_share=1\\\" target=\\\"_blank\\\">Andy讲解(2020)</a><br />本题改编自Guo Wei的《月度开销》</span><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "7 5\n100 400 300 100 500 101 400",
              "output": "500"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK36.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK37",
          "title": "林克的蛋糕",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK37/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img src=\"assets/problem-images/LinK37-a93b3a51c9.png\" alt=\"image.png\" /><br /></p><p style=\"margin-left: 0px;\">林克被造的纪念日快要到了。根据任天堂公司的惯例，每年到这个时间都会一些蛋糕分给林克的朋友。</p><p style=\"margin-left: 0px;\">这些蛋糕有不同的口味，比如南瓜蛋糕、坚果蛋糕、西瓜蛋糕、胡萝卜蛋糕、水果蛋糕等等（有N种不同口味，大小不同的蛋糕）。<br />为了公平，每个朋友都会分到一块大小相同的蛋糕（不需要同样形状，但是要同一种口味，不允许混合口味，否则就会变成奇怪的菜肴）。<br />假设每个蛋糕都是一个高为1，半径不等的圆柱体，一共有F+1个人（F是林克的朋友个数，还要加上林克的设计者)。</p><p>所有人拿到的蛋糕是同样大小的，请问每个人拿到的蛋糕最大尺寸可以是多少？</p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">第一行包含两个正整数N和F，1 ≤ N, F ≤ 10 000，表示蛋糕的数量和朋友的数量。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">第二行包含N个1到10000之间的整数，表示每个蛋糕的半径。</span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输出每个人能得到的最大的蛋糕的体积，精确到小数点后三位。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/av94056456/\\\" target=\\\"_blank\\\">Andy讲解(2020)</a><br /></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "3 3\n4 3 3",
              "output": "25.133"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK37.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK38",
          "title": "林克的命运之阵",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK38/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK38-8b7ab89064.png\" width=\"677\" height=\"426\" /><br /></span></p><p><span style=\"color: rgb(35, 31, 23);\">每一个人心中都有一个林克。每一个林克都不一样。在命运矩阵里面，随着选择的不同，没有哪一个林克的命运会一模一样。</span></p><p><span style=\"color: rgb(35, 31, 23);\">有一个方格型的命运矩阵，矩阵边界在无穷远处。我们做如下假设：</span></p><p><span style=\"color: rgb(35, 31, 23);\">1. 每一个格子象征林克命运中的一次抉择，每次只能从相邻的方格中做选择。</span></p><p><span style=\"color: rgb(35, 31, 23);\">2. 从某个格子出发，只能从当前方格移动一格，走到某个相邻的方格上；</span></p><p><span style=\"color: rgb(35, 31, 23);\">3.选择一旦做出就不可更改，因此走过的格子无法走第二次。</span></p><p><span style=\"color: rgb(35, 31, 23);\">4. 从命运矩阵的第1行出发，只能向下、左、右三个方向走；</span></p><p><span style=\"color: rgb(35, 31, 23);\">请问：如果最高允许在方格矩阵上走n步（也就是林克一生最多能做n个选择）。<br />那么随着n的不同，请问一共会有多少种不同选择的方案导致多少个不同的林克？<br />注意，2种走法只要有一步不一样，即被认为是不同的方案。</span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">允许在方格上行走的步数n(n &lt;= 20)</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">经过n个选择之后，诞生的不同的林克的个数。</span><br /></p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1qZ4y1c7nj?pop_share=1\\\" target=\\\"_blank\\\">Andy(2021)</a></p><p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1Mz411b7DL\\\" target=\\\"_blank\\\">Andy(2020</a>)</p><p>改编自《踩方格》</p>",
          "source": "",
          "samples": [
            {
              "input": "2",
              "output": "7"
            },
            {
              "input": "20",
              "output": "54608393"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK38.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK39",
          "title": "净化迷雾森林",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK39/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK51-58bf286013.png\" width=\"539\" height=\"303\" /><br /></span></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">迷雾森林被加农的玷污了，原本圣洁无比的迷雾森林，如今被彻底玷污，空气中充满着紫色的恶臭。</span></span></p><p><font>林克临危不惧，带上呼吸面罩，挥舞大师之剑的光芒，净化迷雾。林克所到之处，加农褪去，圣洁回归。</font></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">如下图，红色代表墙壁，紫色的迷雾代表需要净化的空间，金色代表林克开始净化的起点。</span></span></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">从某处开始，林克只能向</span>相邻的紫色区域移动。请问，林克总共能够净化多少区域？</span><br /></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">图1 初始状态                                                                图2   净化中.....</span><br /></span></span></p><p><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK51-445a05ed3f.png\" width=\"311\" height=\"464\" />-----<img alt=\"image.png\" src=\"assets/problem-images/LinK51-8ebdb0d8fa.png\" width=\"313\" height=\"461\" /><br /></span></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">包括多个数据集合。每个数据集合的第一行是两个整数W和H，分别表示x方向和y方向瓷砖的数量。W和H都不超过20。</span></p><p><span style=\"color: rgb(35, 31, 23);\">在接下来的H行中，每行包括W个字符。</span></p><p><span style=\"color: rgb(35, 31, 23);\">每个字符表示一个区域的状态，规则如下</span></p><p><span style=\"color: rgb(35, 31, 23);\">1）</span><span style=\"color: rgb(227, 55, 55);\">‘.’</span><span style=\"color: rgb(35, 31, 23);\">：代表紫色迷雾<img alt=\"image.png\" src=\"assets/problem-images/LinK51-2443ee133f.png\" width=\"42\" height=\"41\" />；</span></p><p><span style=\"color: rgb(35, 31, 23);\">2）</span><span style=\"color: rgb(227, 55, 55);\">‘#’</span><span style=\"color: rgb(35, 31, 23);\">：代表红墙<img alt=\"image.png\" src=\"assets/problem-images/LinK51-cec15f5bc4.png\" width=\"41\" height=\"40\" />；</span></p><p><span style=\"color: rgb(35, 31, 23);\">3）‘@’：代表<span style=\"color: rgb(35, 31, 23);\">林克的起始位置</span><img alt=\"image.png\" src=\"assets/problem-images/LinK51-3b8a5ae50d.png\" width=\"43\" height=\"40\" />(该字符在每个数据集合中唯一出现一次。）</span></p><p><span style=\"color: rgb(35, 31, 23);\">当在一行中读入的是两个零时，表示输入结束。</span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">对每个数据集合，分别输出一行，显示林克从初始位置出发能净化的迷雾数(记数时包括初始位置的迷雾)。</span><br /></p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1r64y1v7ot?pop_share=1\\\" target=\\\"_blank\\\">Andy(2021)</a></p><p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV13T4y1G7HP\\\" target=\\\"_blank\\\">Andy(2020)</a></p><p>（改编自《<a href=\\\"http://cxsjsxmooc.openjudge.cn/2020t2springall/018/\\\" target=\\\"_blank\\\">红与黑</a>》）</p>",
          "source": "xmu",
          "samples": [
            {
              "input": "6 9 \n....#. \n.....# \n...... \n...... \n...... \n...... \n...... \n#@...# \n.#..#. \n0 0",
              "output": "45"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK39.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK40",
          "title": "骑士林克的怜悯(1)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK40/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><b></b></p><p><b><img alt=\"image.png\" src=\"assets/problem-images/LinK40-591e519621.png\" width=\"476\" height=\"297\" /></b></p><p>林克驰骋在海拉鲁大陆的平原上无比自由，他想起二维空间中的国际象棋同伴，回想起自己也活在2D世代的局限，心生怜悯。</p><p>那些骑士，永远被局限在8×8的棋盘之内厮杀，他们的世界永不改变。因此，林克去到阿卡来研究所寻求帮助，他得到新的道具——变形棋盘。</p><p>这个变形棋盘可以根据输入的两个参数的（p,q）创造全新的棋盘空间。</p><p>如下图分别是<span style=\"color: rgb(51, 51, 51);\">（p,q）为</span>(3,9) , (6,3) ,以及(5,5)的棋盘空间。</p><p><b><img alt=\"image.png\" src=\"assets/problem-images/LinK40-0866a0a70e.png\" width=\"362\" height=\"121\" />--<img alt=\"image.png\" src=\"assets/problem-images/LinK40-c585abd6d1.png\" width=\"121\" height=\"244\" />--<img alt=\"image.png\" src=\"assets/problem-images/LinK40-a92080f905.png\" width=\"202\" height=\"202\" /><br /></b></p><p>假设2D世界的骑士，移动的方式按字母次序有如下8种：</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK40-1773b1b62a.png\" width=\"286\" height=\"273\" /><br /></p><p><font>请问对于每一种棋盘<span style=\"color: rgb(51, 51, 51);\">（p,q）</span>，2D骑士是否有一种一次遍历所有棋盘方格的路线？</font></p><p><font>如果有，请输出这条路线（若有多条路线，请输出字典序最小的路线）。</font></p><p><font>如果没有，请输出无。</font></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输入数据第一行为正整数n，代表有多少组输入样例</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">接下来n行是两个整数代表行p和列q, 代表变形棋盘的行列参数，其中（1 &lt;= p * q &lt;= 26）。</span><br /></p>",
          "outputDescription": "<p>每个样例的输出2行，格式如下：</p><p style=\\\"margin-left: 40px;\\\">&quot;#i:&quot; 其中i代表第i种棋盘</p><p style=\\\"margin-left: 40px;\\\">骑士跳过的每个格子（<span style=\\\"color: rgb(51, 51, 51);\\\">每个访问的格子用大写字母加数字表示），一条可行的路径输出如</span>(A1B3C1A2B4C2A3B1C3A4B2C4)，</p><p>如果没有可行方案，则第二行输出：none</p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1BK411F7ns\\\" target=\\\"_blank\\\">Andy(2021)</a></p><p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1uK411j7S5\\\" target=\\\"_blank\\\">Andy(2020)</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "5\n5 1\n5 2\n5 3\n5 4\n5 5",
              "output": "#1:\nnone\n#2:\nnone\n#3:\nnone\n#4:\nA1B3A5C4D2B1A3B5D4C2B4A2C1D3C5A4B2D1C3D5\n#5:\nA1B3A5C4A3B1D2E4C5A4B2D1C3B5D4E2C1A2B4D5E3C2E1D3E5"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK40.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK41",
          "title": "英杰们的蛋糕塔",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK41/",
          "timeLimit": 3000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\"><img src=\"assets/problem-images/LinK41-3d477a8d08.jpg\" alt=\"查看源图像\" /><br /></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">塞尔达公主</span>的生日将近，英杰们预备绞尽脑汁要为公主作一个生日蛋糕塔。</span></p><p><span style=\"color: rgb(35, 31, 23);\">这个蛋糕塔一共有N层，每层都是圆柱体，象征英杰们合一平等的关系。</span></p><p><span style=\"color: rgb(35, 31, 23);\">蛋糕塔的总体积是 V * π 。</span></p><p><span style=\"color: rgb(35, 31, 23);\">最底层的蛋糕半径最大，最上层的蛋糕半径最小，这种结构象征英杰们稳固的生命根基。</span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">因此从底层往上层数，第i (1 &lt;= i &lt;= N) 层是半径为 r(i), 高度为h(i) 的圆柱体。当 i &lt; N 时，有r(i) &gt; r(i+ 1) 且 h(i) &gt; h(i+1)。</span></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">蛋糕塔每一层圆柱体的半径r(i)和高度h(i)都是整数，象征公主英杰们不打折的忠诚。</span></span></p><p><span style=\"color: rgb(35, 31, 23);\">蛋糕塔的表面积，象征英杰们与公主的亲密关系面临的外部挑战。</span></p><p><span style=\"color: rgb(35, 31, 23);\">因此，对于给定的V和N，我们希望找到一个使表面积最小的蛋糕塔制作方案。</span></p><p><span style=\"color: rgb(35, 31, 23);\">令表面积Q = S<span style=\"color: rgb(35, 31, 23);\">* π，</span></span><span style=\"color: rgb(35, 31, 23);\">对<span style=\"color: rgb(35, 31, 23);\">给定的V和N</span>，请输出使Q最小的S是多少。</span></p><p><span style=\"color: rgb(35, 31, 23);\">（除Q外，以上所有数据皆为正整数，下图是蛋糕塔的俯视图和示意图）</span></p><p><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK41-6a199b2254.png\" width=\"405\" height=\"405\" /></span><img alt=\"image.png\" src=\"assets/problem-images/LinK41-c9310fc942.png\" width=\"322\" height=\"273\" /><span style=\"color: rgb(35, 31, 23);\"><br /></span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">有两行，第一行为V（V &lt;= 100000），表示待制作的蛋糕的体积为<span style=\\\"color: rgb(35, 31, 23);\\\">V * π</span>；第二行为N(N &lt;= 20)，表示蛋糕的层数为N。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">仅一行，是一个正整数S（若无解则S = 0）。</span><br /></p><p><font>提示：根据题意，我们无需计算<span style=\\\"color: rgb(35, 31, 23);\\\">π，因此有</span></font></p><p style=\\\"margin-left: 0px;\\\">圆柱<span style=\\\"color: rgb(35, 31, 23);\\\">体积v&#039; = r</span>*r*h<br />圆柱<span style=\\\"color: rgb(35, 31, 23);\\\">侧面积 s&#039; = 2*r*h<br /></span><span style=\\\"color: rgb(35, 31, 23);\\\">圆柱底面积c&#039;= r*r</span></p><p><font><span style=\\\"color: rgb(35, 31, 23);\\\"><br /></span></font></p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1Bp4y1C7Qs\\\" target=\\\"_blank\\\">Andy讲解(B站)</a>（更正：R和H都要逐层递减，题面无误)</p><p>（改编自《生日蛋糕》，<a href=\\\"https://www.acwing.com/video/481/\\\" target=\\\"_blank\\\">Y总讲解(付费)</a>）</p><p><a href=\\\"https://www.acwing.com/solution/content/31876/\\\" target=\\\"_blank\\\">参考题解</a></p><p><a href=\\\"https://www.acwing.com/activity/content/code/content/136866/\\\" target=\\\"_blank\\\">Y总代码</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "100\n2",
              "output": "68"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK41.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK42",
          "title": "击杀黄金蛋糕人马",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK42/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>在海拉鲁大陆冒险，没有绝佳的剑法+想象力是不可能存活下来的。</p><p>这不，林克遇到了一个特别巨大的敌人——黄金蛋糕人马（莱尼尔的变种）</p><p><span style=\"color: rgb(51, 51, 51);\">这黄金蛋糕人马</span>长相非常特别，没有脚没有手没有嘴巴没有头，整个身材就是一个大矩形（喂喂，这不就是黄金莱尼尔吗？）</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK42-c6f61a858c.png\" width=\"863\" height=\"462\" /><br />它的长和宽分别是整数w、h。</p><p>林克举起大师之剑，挥向<span style=\"color: rgb(51, 51, 51);\">黄金蛋糕人马</span>，要将其切成m块矩形小块打包走，分给自己的朋友（每块都必须是矩形、且长和宽均为整数）。</p><p>大师之剑无比锐利，每一斩带出的剑气能将<span style=\"color: rgb(51, 51, 51);\">黄金蛋糕人马</span>劈成两半（形成两个小矩形蛋糕）。</p><p>经过m-1斩，<span style=\"color: rgb(51, 51, 51);\">黄金蛋糕人马</span>居然被劈成m块小蛋糕（喂喂，你的想象力也太丰富了，明明切不开好吗？）</p><p>请计算：最后得到的m块小蛋糕中，最大的那块蛋糕的面积下限。<br /><br /></p><p>假设w= 4,h= 4,m= 4，则下面的斩击可使得其中最大蛋糕块的面积最小。(十字斩)</p><p><img src=\"assets/problem-images/LinK42-43115c4ac6.gif\" /><br /></p><p><span style=\"color: rgb(35, 31, 23);\">假设</span>w<span style=\"color: rgb(35, 31, 23);\">= 4,h= 4,m= 3</span><span style=\"color: rgb(35, 31, 23);\">，则下<span style=\"color: rgb(51, 51, 51);\">面的斩击可</span>使得其中最大蛋糕块的面积最小</span><span style=\"color: rgb(35, 31, 23);\">:.(二连斩)</span><br /></p><p><span style=\"color: rgb(35, 31, 23);\"><img src=\"assets/problem-images/LinK42-994e2d19e6.gif\" /><br /></span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">共有多行，每行表示一个测试案例。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">每行是三个用空格分开的整数w, h, m ，其中1 ≤ w, h, m ≤ 20 ， m ≤ wh.</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">当 w = h = m = 0 时不需要处理，表示输入结束。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">每个测试案例的结果占一行，输出一个整数，表示最大蛋糕块的面积下限。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1ti4y1b7s1\\\" target=\\\"_blank\\\">Andy讲解</a><br /></p><p>改编自《<a href=\\\"https://www.bilibili.com/video/BV1Zb411q7iY?p=33\\\" target=\\\"_blank\\\">分蛋糕</a>》</p>",
          "source": "xmu",
          "samples": [
            {
              "input": "4 4 4\n4 4 3\n0 0 0",
              "output": "4\n6"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK42.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK43",
          "title": "求二进制中1的个数",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK43/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(51, 51, 51);\"><img alt=\"料理.gif\" src=\"assets/problem-images/LinK43-5318d6d3df.gif\" width=\"489\" height=\"366\" /><br /></span></p><p>为了寻找失去的回忆碎片，林克必须预备足够的料理。能够快速突破数独试炼，熟练运用lowbit，才能把难题转换为美味佳肴。</p><p><span style=\"color: rgb(51, 51, 51);\">请用lowbit解决如下问题：</span></p><p><span style=\"color: rgb(51, 51, 51);\">输入一个32位整数，输出该数二进制表示中1的个数。</span><br /></p><p>注意：</p><ul><li>负数在计算机中用其绝对值的补码来表示。</li></ul>",
          "inputDescription": "<pre><code style=\\\"font-family: Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; font-size: inherit; padding: 0px; color: inherit; background: transparent; border-radius: 3px; margin: 0px; border: none;\\\">输入：9\\n输出：2\\n解释：9的二进制表示是1001，一共有2个1。</code></pre>",
          "outputDescription": "<pre><code style=\\\"font-family: Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; font-size: inherit; padding: 0px; color: inherit; background: transparent; border-radius: 3px; margin: 0px; border: none;\\\">输入：-2\\n输出：31\\n解释：-2在计算机里会被表示成11111111111111111111111111111110，\\n      一共有31个1。</code></pre>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1Kf4y1S7mB\\\" target=\\\"_blank\\\">Andy讲解</a><br /></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "-2",
              "output": "31"
            },
            {
              "input": "9",
              "output": "2"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK43.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK44",
          "title": "二进制中1的最低位位置(打表+Lowbit)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK44/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"lowbit.jpg\" src=\"assets/problem-images/LinK44-2d965ece78.jpg\" width=\"474\" height=\"296\" /><br /></p><p>打表法是寻找回忆不可或缺的重要方法，如果配合上lowbit，那么更难的问题也能迎刃而解。</p><p>请运用打表法和lowbit算法解决如下问题：</p><p>给定一个16位的十进制数，请把该数转换为二进制数来看待。</p><p>请找到该数看为二进制后，其最低位的1出现的位置。</p><p>也就是这个数最低位的1是二进制中的第几位呢？</p>",
          "inputDescription": "<p>以1开头的二进制数的十进制表示B.</p><p>例如输入9.</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK44-82b76c7060.png\" width=\"391\" height=\"119\" /><br /></p>",
          "outputDescription": "<p>输出K，表示B中的1在第K位（K=0,1,2....15)</p><p>9的最低位的1出现在位置0.</p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1dC4y1s7LW\\\" target=\\\"_blank\\\">Andy讲解</a></p><p>8 = 2^3 故需要计算以2为底的log(2^3)=3，得到第3位。也就是8的二进制表示中，1出现在第3位。<br /></p><p>用打表法计算Log2。</p>",
          "source": "xmu",
          "samples": [
            {
              "input": "9\n",
              "output": "0"
            },
            {
              "input": "8",
              "output": "3"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK44.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK45",
          "title": "真假记忆碎片",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK45/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img src=\"assets/problem-images/LinK45-cbcc1d3e1b.jpg\" width=\"400\" height=\"210.5017502917153\" /><br /></p><p style=\"margin-left: 0px;\">在千辛万苦得到一个记忆碎片之后，林克需要辨别真假，若是所得到的并不是发生历史中的碎片，乃是后人捏着的，那么林克如何寻回完整的自己呢？</p><p style=\"margin-left: 0px;\">已知林克找到的记忆碎片9×9矩阵是初始矩阵A的解法，也就是记忆碎片A。空白的部分在初始矩阵中用0表示。</p><p><img src=\"assets/problem-images/LinK45-d2ae0144d2.png\" alt=\"1.png\" width=\"200\" height=\"200\" /><img src=\"assets/problem-images/LinK45-0921a638f9.png\" alt=\"2.png\" width=\"200\" height=\"200\" /><br /></p><p>（初始矩阵A）<span style=\"color: rgb(51, 51, 51);\">（记忆碎片A）</span></p><p>请写一个算法，判定找到的记忆碎片是否是真的？</p>",
          "inputDescription": "<p>输入的<span style=\\\"color: rgb(51, 51, 51);\\\">记忆碎片A</span>是一个9行9列的数独矩阵。</p><p>每行包含9个数字（均不超过数字为1-9）。</p><p>初始矩阵A：</p><p>530070000</p><p>600195000</p><p>098000060</p><p>800060003</p><p>400803001</p><p>700020006</p><p>060000280</p><p>000419005</p><p>000080079</p>",
          "outputDescription": "<p>如果输入数据真的是<span style=\\\"color: rgb(51, 51, 51);\\\">初始矩阵A</span>的解，输出Yes，否则输出No</p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1oU4y1h7hV/\\\" target=\\\"_blank\\\">Andy(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "534678912\n672195348\n198342567\n859761423\n426853791\n713924856\n961537284\n287419635\n345286179",
              "output": "Yes"
            },
            {
              "input": "123456789\n123456789\n123456789\n123456789\n123456789\n123456789\n123456789\n123456789\n123456789\n",
              "output": "No"
            },
            {
              "input": "534678912\n672195348\n198342567\n859761423\n42689993791\n713924856\n961537284\n287419635\n345286179",
              "output": "No"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK45.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK46",
          "title": "寻找林克的回忆(1)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK46/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img alt=\"image.png\" src=\"assets/problem-images/LinK46-39534e20d2.png\" width=\"676\" height=\"349\" /><br /></p><p style=\"margin-left: 0px;\">为了找到百年沉睡的原因，寻回百年前与公主一起的记忆碎片，明白自己是谁，林克必须破解数独谜题。</p><p style=\"margin-left: 0px;\">林克需要在限定时间内，把9×9的数独补充完整，使得图中每行、每列、每个3 × 3的九宫格内数字1~9均恰好出现一次。</p><p style=\"margin-left: 0px;\">林克需要寻回失去的记忆碎片，你，作为林克的朋友，需要帮忙林克寻回9×9棋盘中失去的数字。</p><p style=\"margin-left: 0px;\">或许有一天，林克也能帮助你，寻回关于你是谁，你从哪里来的记忆碎片。</p><p style=\"margin-left: 0px;\">这是数独试炼I（<span style=\"color: rgb(51, 51, 51);\">解密成功可以解锁林克前25%的记忆碎片）</span></p><p><img src=\"assets/problem-images/LinK46-d814e91006.jpg\" /><br /></p>",
          "inputDescription": "<p><font>输入为9×9的数据。一共9行，每行有9个数字。</font></p><p>数字为0表示对应的数字盘为空。<br /></p>",
          "outputDescription": "<p><font>对于每个测试用例，程序应以与输入数据相同的格式打印解决方案(9×9)。</font></p><p><font>空单元格必须根据规则进行填充。</font></p><p><font>如果解决方案不是唯一的，则程序可以打印其中任何一种。</font><br /></p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1mU4y1b7WE/\\\" target=\\\"_blank\\\">Andy(2021)</a></p><p><a href=\\\"https://www.bilibili.com/video/BV1oC4y1s7sF\\\" target=\\\"_blank\\\">Andy(2020)</a></p><p>改编自：POJ2676<br /></p><p>《算法竞赛进阶指南》</p>",
          "source": "",
          "samples": [
            {
              "input": "103000509\n002109400\n000704000\n300502006\n060000050\n700803004\n000401000\n009205800\n804000107",
              "output": "143628579\n572139468\n986754231\n391542786\n468917352\n725863914\n237481695\n619275843\n854396127"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK46.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK47",
          "title": "寻找林克的回忆(2)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK47/",
          "timeLimit": 2000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img alt=\"image.png\" src=\"assets/problem-images/LinK47-1e314af0d6.png\" width=\"537\" height=\"307\" /><br /></p><p>为了找到百年沉睡的原因，寻回百年前与公主一起的记忆碎片，明白自己是谁，林克必须破解数独谜题：</p><p>林克需要在限定时间内，把9×9的数独补充完整，使得图中每行、每列、每个3 × 3的九宫格内数字1~9均恰好出现一次。</p><p>林克需要寻回失去的记忆碎片，你，作为林克的朋友，需要帮忙林克寻回9×9棋盘中失去的数字。</p><p>或许有一天，林克也能帮助你，寻回关于你是谁，你从哪里来的记忆碎片。</p><p><span style=\"color: rgb(51, 51, 51);\">这是数独试炼II（</span><span style=\"color: rgb(51, 51, 51);\">解密成功可以解锁林克25%的记忆碎片）</span><br /></p><p><span style=\"color: rgb(51, 51, 51);\">请编写一个程序填写数独。</span><br /></p><p><span style=\"color: rgb(51, 51, 51);\"><img src=\"assets/problem-images/LinK47-93b57e26e8.png\" alt=\"数独.png\" /><br /></span></p>",
          "inputDescription": "<p>输入包含多组测试用例。</p><p>每个测试用例占一行，包含81个字符，代表数独的81个格内数据（顺序总体由上到下，同行由左到右）。</p><p>每个字符都是一个数字（1-9）或一个”.”（表示尚未填充）。</p><p>您可以假设输入中的每个谜题都只有一个解决方案。</p><p>文件结尾处为包含单词“end”的单行，表示输入结束。</p>",
          "outputDescription": "<p>每个测试用例，输出一行数据，代表填充完全后的数独。</p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1uA411V7Nr/\\\" target=\\\"_blank\\\">Andy(2021)</a></p><p><a href=\\\"https://www.bilibili.com/video/BV1Ki4y1t7mf\\\" target=\\\"_blank\\\">Andy(2020)</a><br /></p><p><a href=\\\"https://www.acwing.com/problem/content/video/168/\\\" target=\\\"_blank\\\">ACWing讲解</a></p><p>来源：<a href=\\\"http://bailian.openjudge.cn/practice/2984\\\" target=\\\"_blank\\\">2984</a></p>",
          "source": "",
          "samples": [
            {
              "input": ".2738..1..1...6735.......293.5692.8...........6.1745.364.......9518...7..8..6534.\n......52..8.4......3...9...5.1...6..2..7........3.....6...1..........7.4.......3.\nend",
              "output": "527389416819426735436751829375692184194538267268174593643217958951843672782965341\n416837529982465371735129468571298643293746185864351297647913852359682714128574936"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK47.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK48",
          "title": "寻找林克的回忆(3)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK48/",
          "timeLimit": 2000,
          "memoryLimit": 256,
          "description": "<p><img src=\"assets/problem-images/LinK48-22a8e74780.jpg\" alt=\"See the source image\" /><br /></p><p>为了寻回百年前与公主一起的记忆碎片，林克历尽千辛万苦总算破解了数独试炼I和II的谜题，寻回50%的记忆碎片。<br /></p><p>如今，摆在他面前是数独试炼III——传说中的靶形数独（通过后可以获得剩下的30%的记忆碎片)。</p><p>靶形数独的方格同普通数独一样，在9×9的大九宫格中有9个3×3的小九宫格（用粗黑色线隔开的）。</p><p>在这个大九宫格中，有一些数字是已知的，根据这些数字，利用逻辑推理，在其他的空格上填入1到9的数字。</p><p>每个数字在每个小九宫格内不能重复出现，每个数字在每行、每列也不能重复出现。</p><p>但靶形数独有一点和普通数独不同，即每一个方格都有一个分值，而且如同一个靶子一样，离中心越近则分值越高（如下图所示）。</p><p><img src=\"assets/problem-images/LinK48-677e22a902.jpg\" alt=\"靶子.jpe.jpg\" /><br /></p><p><span style=\"color: rgb(51, 51, 51);\">上图具体的分值分布是：</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(51, 51, 51);\">最里面一格（黄色区域）为10分<br /></span>黄色区域外面的一圈（红色区域）每个格子为9分<br />再外面一圈（蓝色区域）每个格子为8分<br />蓝色区域外面一圈（棕色区域）每个格子为7分<br />最外面一圈（白色区域）每个格子为6 分</p><p>每个人必须完成一个给定的数独（每个给定数独可能有不同的填法），而且要争取更高的总分数。</p><p>而这个总分数即每个方格上的分值和完成这个数独时填在相应格上的数字的乘积的总和。</p><p>如图，在以下的这个已经填完数字的靶形数独游戏中，总分数为2829。</p><p>游戏规定，将以总分数的高低决出胜负。</p><p><img src=\"assets/problem-images/LinK48-9ef988ec34.jpg\" alt=\"靶子2.jpe.jpg\" /><br /></p><p><span style=\"color: rgb(51, 51, 51);\">求对于给定的靶形数独，能够得到的最高分数。</span><br /></p>",
          "inputDescription": "<p>输入一共包含9行。</p><p>每行 9 个整数（每个数都在 0—9 的范围内），表示一个尚未填满的数独方格，未填的空格用“0”表示。</p><p>每两个数字之间用一个空格隔开。</p>",
          "outputDescription": "<p>输出可以得到的靶形数独的最高分数。</p><p>如果这个数独无解，则输出整数-1。</p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/bv1Qb4y1D7hY\\\" target=\\\"_blank\\\">Andy(2021)</a></p><p><a href=\\\"https://www.bilibili.com/video/BV1mA411b7hB\\\" target=\\\"_blank\\\">Andy(2020)</a></p><p><a href=\\\"https://www.acwing.com/video/272/\\\" target=\\\"_blank\\\">ACWing的讲解</a></p>",
          "source": "",
          "samples": [
            {
              "input": "7 0 0 9 0 0 0 0 1 \n1 0 0 0 0 5 9 0 0 \n0 0 0 2 0 0 0 8 0 \n0 0 5 0 2 0 0 0 3 \n0 0 0 0 0 0 6 4 8 \n4 1 3 0 0 0 0 0 0 \n0 0 7 0 0 2 0 9 0 \n2 0 1 0 6 0 8 0 4 \n0 8 0 5 0 4 0 1 2 ",
              "output": "2829"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK48.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK49",
          "title": "寻找林克的回忆(4)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK49/",
          "timeLimit": 5000,
          "memoryLimit": 258,
          "description": "<p style=\"margin-left: 0px;\"><img alt=\"image.png\" src=\"assets/problem-images/LinK50-561d097977.png\" width=\"652\" height=\"367\" /><br /></p><p>为了寻回百年前与公主一起的记忆碎片，林克终于来到了数独试炼的终阶——16*16字母数独</p><p>（如果通过，可以获得最后的的20%的记忆碎片)。</p><p style=\"margin-left: 0px;\">字母数独要求如下：</p><p style=\"margin-left: 0px;\">将一个16x16的数独填写完整，使得每行、每列、每个4x4十六宫格内字母A~P均恰好出现一次。</p><p>保证每个输入只有唯一解决方案。</p><p><img src=\"assets/problem-images/LinK50-0f67eec245.jpg\" alt=\"数独2.jpg\" /><br /></p>",
          "inputDescription": "<p>输入包含多组测试用例。</p><p>每组测试用例包括16行，每行一组字符串，共16个字符串。</p><p>第i个字符串表示数独的第i行。</p><p>字符串包含字符可能为字母A~P或”-“（表示等待填充）。</p><p>测试用例之间用单个空行分隔，输入至文件结尾处终止。</p>",
          "outputDescription": "<p>对于每个测试用例，均要求保持与输入相同的格式，将填充完成后的数独输出。</p><p>每个测试用例输出结束后，输出一个空行。</p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.acwing.com/video/103/\\\" target=\\\"_blank\\\">ACWing讲解</a></p><p><a href=\\\"https://www.bilibili.com/video/bv1Tf4y1p7y4\\\" target=\\\"_blank\\\">Andy2021</a></p><p>(来源《算法竞赛进阶指南》)</p>",
          "source": "xmu",
          "samples": [
            {
              "input": "--A----C-----O-I\n-J--A-B-P-CGF-H-\n--D--F-I-E----P-\n-G-EL-H----M-J--\n----E----C--G---\n-I--K-GA-B---E-J\nD-GP--J-F----A--\n-E---C-B--DP--O-\nE--F-M--D--L-K-A\n-C--------O-I-L-\nH-P-C--F-A--B---\n---G-OD---J----H\nK---J----H-A-P-L\n--B--P--E--K--A-\n-H--B--K--FI-C--\n--F---C--D--H-N-",
              "output": "FPAHMJECNLBDKOGI\nOJMIANBDPKCGFLHE\nLNDKGFOIJEAHMBPC\nBGCELKHPOFIMAJDN\nMFHBELPOACKJGNID\nCILNKDGAHBMOPEFJ\nDOGPIHJMFNLECAKB\nJEKAFCNBGIDPLHOM\nEBOFPMIJDGHLNKCA\nNCJDHBAEKMOFIGLP\nHMPLCGKFIAENBDJO\nAKIGNODLBPJCEFMH\nKDEMJIFNCHGAOPBL\nGLBCDPMHEONKJIAF\nPHNOBALKMJFIDCEG\nIAFJOECGLDPBHMNK"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK49.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK50",
          "title": "寻找林克的回忆(4)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK50/",
          "timeLimit": 5000,
          "memoryLimit": 258,
          "description": "<p style=\"margin-left: 0px;\"><img alt=\"image.png\" src=\"assets/problem-images/LinK50-561d097977.png\" width=\"652\" height=\"367\" /><br /></p><p>为了寻回百年前与公主一起的记忆碎片，林克终于来到了数独试炼的终阶——16*16字母数独</p><p>（如果通过，可以获得最后的的20%的记忆碎片)。</p><p style=\"margin-left: 0px;\">字母数独要求如下：</p><p style=\"margin-left: 0px;\">将一个16x16的数独填写完整，使得每行、每列、每个4x4十六宫格内字母A~P均恰好出现一次。</p><p>保证每个输入只有唯一解决方案。</p><p><img src=\"assets/problem-images/LinK50-0f67eec245.jpg\" alt=\"数独2.jpg\" /><br /></p>",
          "inputDescription": "<p>输入包含多组测试用例。</p><p>每组测试用例包括16行，每行一组字符串，共16个字符串。</p><p>第i个字符串表示数独的第i行。</p><p>字符串包含字符可能为字母A~P或”-“（表示等待填充）。</p><p>测试用例之间用单个空行分隔，输入至文件结尾处终止。</p>",
          "outputDescription": "<p>对于每个测试用例，均要求保持与输入相同的格式，将填充完成后的数独输出。</p><p>每个测试用例输出结束后，输出一个空行。</p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.acwing.com/video/103/\\\" target=\\\"_blank\\\">ACWing讲解</a></p><p><a href=\\\"https://www.bilibili.com/video/bv1Tf4y1p7y4\\\" target=\\\"_blank\\\">Andy2021</a></p><p>(来源《算法竞赛进阶指南》)</p>",
          "source": "xmu",
          "samples": [
            {
              "input": "--A----C-----O-I\n-J--A-B-P-CGF-H-\n--D--F-I-E----P-\n-G-EL-H----M-J--\n----E----C--G---\n-I--K-GA-B---E-J\nD-GP--J-F----A--\n-E---C-B--DP--O-\nE--F-M--D--L-K-A\n-C--------O-I-L-\nH-P-C--F-A--B---\n---G-OD---J----H\nK---J----H-A-P-L\n--B--P--E--K--A-\n-H--B--K--FI-C--\n--F---C--D--H-N-",
              "output": "FPAHMJECNLBDKOGI\nOJMIANBDPKCGFLHE\nLNDKGFOIJEAHMBPC\nBGCELKHPOFIMAJDN\nMFHBELPOACKJGNID\nCILNKDGAHBMOPEFJ\nDOGPIHJMFNLECAKB\nJEKAFCNBGIDPLHOM\nEBOFPMIJDGHLNKCA\nNCJDHBAEKMOFIGLP\nHMPLCGKFIAENBDJO\nAKIGNODLBPJCEFMH\nKDEMJIFNCHGAOPBL\nGLBCDPMHEONKJIAF\nPHNOBALKMJFIDCEG\nIAFJOECGLDPBHMNK"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK50.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK51",
          "title": "净化迷雾森林(广搜)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK51/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK51-58bf286013.png\" width=\"539\" height=\"303\" /><br /></span></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">迷雾森林被加农的玷污了，原本圣洁无比的迷雾森林，如今被彻底玷污，空气中充满着紫色的恶臭。</span></span></p><p><font>林克临危不惧，带上呼吸面罩，挥舞大师之剑的光芒，净化迷雾。林克所到之处，加农褪去，圣洁回归。</font></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">如下图，红色代表墙壁，紫色的迷雾代表需要净化的空间，金色代表林克开始净化的起点。</span></span></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">从某处开始，林克只能向</span>相邻的紫色区域移动。请问，林克总共能够净化多少区域？</span><br /></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">图1 初始状态                                                                图2   净化中.....</span><br /></span></span></p><p><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK51-445a05ed3f.png\" width=\"311\" height=\"464\" />-----<img alt=\"image.png\" src=\"assets/problem-images/LinK51-8ebdb0d8fa.png\" width=\"313\" height=\"461\" /><br /></span></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">包括多个数据集合。每个数据集合的第一行是两个整数W和H，分别表示x方向和y方向瓷砖的数量。W和H都不超过20。</span></p><p><span style=\"color: rgb(35, 31, 23);\">在接下来的H行中，每行包括W个字符。</span></p><p><span style=\"color: rgb(35, 31, 23);\">每个字符表示一个区域的状态，规则如下</span></p><p><span style=\"color: rgb(35, 31, 23);\">1）</span><span style=\"color: rgb(227, 55, 55);\">‘.’</span><span style=\"color: rgb(35, 31, 23);\">：代表紫色迷雾<img alt=\"image.png\" src=\"assets/problem-images/LinK51-2443ee133f.png\" width=\"42\" height=\"41\" />；</span></p><p><span style=\"color: rgb(35, 31, 23);\">2）</span><span style=\"color: rgb(227, 55, 55);\">‘#’</span><span style=\"color: rgb(35, 31, 23);\">：代表红墙<img alt=\"image.png\" src=\"assets/problem-images/LinK51-cec15f5bc4.png\" width=\"41\" height=\"40\" />；</span></p><p><span style=\"color: rgb(35, 31, 23);\">3）‘@’：代表<span style=\"color: rgb(35, 31, 23);\">林克的起始位置</span><img alt=\"image.png\" src=\"assets/problem-images/LinK51-3b8a5ae50d.png\" width=\"43\" height=\"40\" />(该字符在每个数据集合中唯一出现一次。）</span></p><p><span style=\"color: rgb(35, 31, 23);\">当在一行中读入的是两个零时，表示输入结束。</span></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">对每个数据集合，分别输出一行，显示林克从初始位置出发能净化的迷雾数(记数时包括初始位置的迷雾)。</span><br /></p>",
          "hint": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">Y总讲解：</span><a href=\\\"http://cxsjsxmooc.openjudge.cn/2020t2springall/018/\\\" target=\\\"_blank\\\">红与黑</a><br /></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "6 9 \n....#. \n.....# \n...... \n...... \n...... \n...... \n...... \n#@...# \n.#..#. \n0 0",
              "output": "45"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK51.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK52",
          "title": "波克布林的巡逻范围",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK52/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img alt=\"image.png\" src=\"assets/problem-images/LinK52-e9248150aa.png\" width=\"554\" height=\"227\" /><br /></p><p style=\"margin-left: 0px;\">有一个m行和n列的方阵区域(m＊n)，横纵坐标范围分别是0∼m−1和0∼n−1。</p><p>一只红色的波克布林从坐标0,0的格子开始巡逻，每一次只能向左，右，上，下四个方向移动一格。</p><p>但是不能进入行坐标和列坐标的数位之和大于k的格子。</p><p>请问该<span style=\"color: rgb(51, 51, 51);\">红色</span><span style=\"color: rgb(51, 51, 51);\">波克布林</span>能够达到多少个格子？</p><p>假如输入：k=18, m=40, n=40</p><p><span style=\"color: rgb(51, 51, 51);\">则输出是：1484</span></p><p><span style=\"color: rgb(51, 51, 51);\">根据题意思：当k为18时，<span style=\"color: rgb(51, 51, 51);\">波克布林</span>能够进入方格（35,37），因为3+5+3+7 = 18。      但是，它不能进入方格（35,38），因为3+5+3+8 = 19。</span><br /></p>",
          "inputDescription": "<p>输入一行，三个整数，由空格隔开，代表k m n</p><p>其中：</p><p><span style=\\\"color: rgb(51, 51, 51);\\\">0&lt;=k&lt;=100</span><br /></p><p>0&lt;=m&lt;=50</p><p>0&lt;=n&lt;=50</p>",
          "outputDescription": "<p>一个整数，表示红色<span style=\\\"color: rgb(51, 51, 51);\\\">波克布林能达到的多少格子。</span></p><p><code><br /></code><code><br /></code></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1Lg4y1z73k\\\" target=\\\"_blank\\\">Andy的讲解</a><br /></p><p><a href=\\\"https://www.acwing.com/video/148/\\\" target=\\\"_blank\\\">ACWing讲解</a></p><p>《来源：剑指Offer》</p>",
          "source": "xmu",
          "samples": [
            {
              "input": "18 40 40",
              "output": "1484"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK52.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK53",
          "title": "加农的入侵",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK53/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"OIP (2).jpg\" src=\"assets/problem-images/LinK53-609f82f2b5.jpg\" width=\"474\" height=\"266\" /><br /></p><p>加农是罪的化身，所到之处污秽遍地。原先富丽堂皇的海鲁拉城堡也被加农污秽了。</p><p>根据调查，加农污秽一片地区有如下规律：</p><p>下图是一个矩形区域，Y=3,<span style=\"color: rgb(51, 51, 51);\">X=4。</span><br /></p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK53-4a31fdad79.png\" width=\"81\" height=\"103\" /><br /></p><p><span style=\"color: rgb(51, 51, 51);\">&quot;.&quot;表示干净区域，而&quot;*&quot;表示障碍物。</span><br /></p><p><span style=\"color: rgb(51, 51, 51);\">如果加农一开始在左下角(1,1），那么加农将会以如下态势污染区域：<br /></span></p><p><span style=\"color: rgb(51, 51, 51);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK53-154a2a6ec8.png\" width=\"494\" height=\"124\" /><br /></span></p><p>加农将在4天后污染整个区域。</p><p>设区域为矩形Y×X（1&lt;=Y,X&lt;=100），假设加农从(Mx,My)开始扩散，请问经过几天，加农会完全占据这个区域呢？</p>",
          "inputDescription": "<p>* 第一行: 四个由空格隔开的整数: X, Y, Mx, My</p><p>* 第2到第Y+1行:<span style=\\\"color: rgb(51, 51, 51);\\\">每行包含一个由X个字符（<span style=\\\"color: rgb(51, 51, 51);\\\">&quot;.&quot;表示干净区域，而&quot;*&quot;表示障碍物。</span>）构成的字符串，共同描绘了草地的完整地图。</span></p><p><span style=\\\"color: rgb(51, 51, 51);\\\">(1≤X,Y≤100)</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示加农完全占领该区域所需要的天数。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/bv1Li4y1t7Av\\\" target=\\\"_blank\\\">Andy的讲解</a></p><p><a href=\\\"https://www.acwing.com/video/1384/\\\" target=\\\"_blank\\\">Y总讲解</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "4 3 1 1\n....\n..*.\n.**.",
              "output": "4"
            },
            {
              "input": "10 10 7 5\n*.........\n..........\n........*.\n..........\n.........*\n..........\n..........\n..........\n..*.......\n..........\n",
              "output": "6"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK53.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK54",
          "title": "骑士林克的怜悯(2)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK54/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK54-ae4697ba39.png\" width=\"527\" height=\"315\" /><br /></p><p><span style=\"color: rgb(73, 80, 96);\">帮助自己的2D骑士同伴进入到变形棋盘世界不久，林克意识到既然棋盘可变，但是骑士们的战斗水平却没有长进。</span></p><p><span style=\"color: rgb(73, 80, 96);\">虽然可以在见到更多的风景，探索更多不同的空间，但是如果自身的实力没有提升，那么骑士们感受不到那真正的自由以及成长的快乐。</span></p><p>林克找到去到阿卡来研究所，得到新的道具——试炼棋盘。</p><p>这个新道具可以在骑士的2D空间中创造试炼场以及2D守护者，让骑士们可以开始实战演练，提升攻击力。</p><p>如下图是一个10列<span style=\"color: rgb(51, 51, 51);\">11行</span>的棋盘（11×10）：</p><p>K代表骑士的位置，H代表守护者的位置。</p><p>. 代表可移动的位置，*代表障碍物。</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK54-6857a344c9.png\" width=\"231\" height=\"249\" /><br /></p><p><span style=\"color: rgb(51, 51, 51);\">骑士</span>可以按照下图中的A,B,C,D...这条路径用5次跳跃，抵达守护者的位置偷袭它。（有可能其它路线的长度也是5）：<br /></p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK54-4cdf2f825e.png\" width=\"236\" height=\"253\" /><br /></p><p>请问，2D骑士要偷袭守护者，至少要跳多少次？</p>",
          "inputDescription": "<p>第一行： 两个数，表示棋盘的列数Column(&lt;=150)和行数Row(&lt;=150)</p><p>第二行到结尾: Row行Column列的棋盘。</p>",
          "outputDescription": "<p>一个数，表示跳跃的最小次数。<br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/bv14i4y1t72T\\\" target=\\\"_blank\\\">Andy讲解</a></p>",
          "source": "",
          "samples": [
            {
              "input": "10 11\n..........\n....*.....\n..........\n...*.*....\n.......*..\n..*..*...H\n*.........\n...*...*..\n.K........\n...*.....*\n..*....*..\n",
              "output": "5\n"
            },
            {
              "input": "15 18\n...............\n..*............\n...............\n...*........**.\n.......*.*.....\n...K.*.........\n...............\n..**...........\n.*....*......*.\n........**.*...\n...............\n.....*......*..\n.*........*....\n...............\n....H..........\n.**.*..*.......\n...............\n..*....*.......\n",
              "output": "6"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK54.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK55",
          "title": "公主的攻击范围",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK55/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK55-facc854eba.png\" width=\"844\" height=\"401\" /><br /></p><p>塞尔达公主瘦弱的身体里面蕴含着不可思议的神圣力量，这个力量从公主所在的位置释放，可以逐层扩散到加农污秽掌控的区域。</p><p>给定一个N行M列的区域，代号为1的区域是公主能力释放的初始区，代号为0的区域表示需要洁净的区域。</p><p>每经过1毫秒，公主的神圣之光向外扩散一格，洁净相邻区域（4个方向），请计算每个标记为0的区域中加农的势力最多还能得瑟几毫秒。</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK55-d38ae39d81.png\" width=\"962\" height=\"401\" /><br /></p><p>格子与格子之间的距离使用曼哈顿距离计算。</p><p>提示：<br /></p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK55-a358a74be3.png\" width=\"721\" height=\"185\" /><br /></p><p><span style=\"color: rgb(51, 51, 51);\">根据如上公式可知：<span style=\"color: rgb(51, 51, 51);\">曼哈顿距离指</span>两点之间的行坐标i距离和列坐标j距离之和。</span><br /></p><p>题目的意思就是求出矩阵中所有节点为0的点，到节点为1的点的曼哈顿距离。</p>",
          "inputDescription": "<p>第一行两个整数n,m。</p><p>接下来一个N行M列的01矩阵，数字之间没有空格。</p><h4>数据范围</h4><p>1≤N,M≤1000</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">一个N行M列的矩阵B，相邻两个整数之间用一个空格隔开。每个整数表示加农势力存在的毫秒数（最小<span style=\\\"color: rgb(51, 51, 51);\\\">曼哈顿距离值）</span></span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1Rk4y1r7dH\\\" target=\\\"_blank\\\">Andy的讲解</a><br /></p><p><a href=\\\"https://www.acwing.com/problem/content/video/175/\\\" target=\\\"_blank\\\">ACWing讲解</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "3 4\n0001\n0011\n0110",
              "output": "3 2 1 0\n2 1 0 0\n1 0 0 1"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK55.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK56",
          "title": "滚石柱",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK56/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK56-629f559cd6.png\" width=\"508\" height=\"358\" /><br /></p><p>努力练习用磁铁拖拉滚动大铁箱的林克，想起了自己小时候喜欢的一个游戏，<a href=\"https://www.albinoblacksheep.com/games/bloxorz\" target=\"_blank\">滚石柱</a>。</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK56-9d5fbce382.png\" width=\"689\" height=\"271\" /><br /></p><p>这个游戏的任务是滚动一个1×1×2的长方体<span style=\"color: rgb(51, 51, 51);\">石柱</span>，把它滚动到目的地。</p><p>石柱在地面上有3种放置形式，“立”在地面上（1×1的面接触地面）横“躺”或者竖“趟”在地面上（1×2的面接触地面）</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK56-e16f301a75.png\" width=\"768\" height=\"191\" /><br /></p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK56-3719035d45.png\" width=\"760\" height=\"218\" /><br /></p><p>迷宫是一个N行M列的矩阵，每个位置可能是硬地（用”.”表示）、易碎地面（用”E”表示）、禁地（用”#”表示）、起点（用”X”表示）或终点（用”O”表示）。</p><p>在每一步操作中，可以按上下左右四个键之一。</p><p>按下按键之后，<span style=\"color: rgb(51, 51, 51);\">石柱</span>向对应的方向沿着棱滚动90度。</p><p>任意时刻，长方体不能有任何部位接触禁地，并且不能立在易碎地面上。</p><p>字符”X”标识长方体的起始位置，地图上可能有一个”X”或者两个相邻的”X”。</p><p>地图上唯一的一个字符”O”标识目标位置。</p><p>求把<span style=\"color: rgb(51, 51, 51);\">石柱</span>移动到目标位置（即立在”O”上）所需要的最少步数。</p><p>在移动过程中，”X”和”O”标识的位置都可以看作是硬地被利用。</p>",
          "inputDescription": "<p>输入包含多组测试用例。</p><p>对于每个测试用例，第一行包括两个整数N和M。</p><p>接下来N行用来描述地图，每行包括M个字符，每个字符表示一块地面的具体状态。</p><p>当输入用例N=0，M=0时，表示输入终止，且该用例无需考虑。</p><h4><span style=\\\"color: rgb(227, 55, 55);\\\">数据范围</span></h4><p>3≤N,M≤500</p>",
          "outputDescription": "<p>每个用例输出一个整数表示所需的最少步数，如果无解则输出”Impossible”。</p><p>每个结果占一行。</p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1oK411V7GF\\\" target=\\\"_blank\\\">Andy讲解</a><br /></p><p><a href=\\\"https://www.acwing.com/problem/content/video/174/\\\" target=\\\"_blank\\\">ACWing讲解</a></p><p><span style=\\\"color: rgb(51, 51, 51);\\\">《算法竞赛进阶指南》</span><br /></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "7 7\n#######\n#..X###\n#..##O#\n#....E#\n#....E#\n#.....#\n#######\n0 0",
              "output": "10"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK56.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK57",
          "title": "Dijkstra求最短路(1)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK57/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\">给定一个n个点m条边的有向图，图中可能存在重边和自环，所有边权均为正值。</p><p>请你求出1号点到n号点的最短距离，如果无法从1号点走到n号点，则输出-1。</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK57-24b6789fbc.png\" width=\"211\" height=\"104\" /><br /></p>",
          "inputDescription": "<p>第一行包含整数n和m。</p><p>接下来m行每行包含三个整数x，y，z，表示存在一条从点x到点y的有向边，边长为z。</p>",
          "outputDescription": "<p>输出一个整数，表示1号点到n号点的最短距离。</p><p>如果路径不存在，则输出-1。</p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/851/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "3 3\n1 2 2\n2 3 1\n1 3 4",
              "output": "3"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK57.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK58",
          "title": "Dijkstra求最短路(2)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK58/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\">给定一个n个点m条边的有向图，图中可能存在重边和自环，所有边权均为非负值。</p><p>请你求出1号点到n号点的最短距离，如果无法从1号点走到n号点，则输出-1。</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK58-2b2d0881da.png\" width=\"286\" height=\"76\" /><br /></p>",
          "inputDescription": "<p>第一行包含整数n和m。</p><p>接下来m行每行包含三个整数x，y，z，表示存在一条从点x到点y的有向边，边长为z。</p>",
          "outputDescription": "<p>输出一个整数，表示1号点到n号点的最短距离。</p><p>如果路径不存在，则输出-1。</p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/852/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "3 3\n1 2 2\n2 3 1\n1 3 4",
              "output": "3"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK58.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK59",
          "title": "维修电路",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK59/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(51, 51, 51);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK59-f9d8222186.png\" width=\"554\" height=\"311\" /><br /></span></p><p><span style=\"color: rgb(51, 51, 51);\">林克的大师摩托的飞行装置被撞坏了，极度影响他的卡丁车比赛。下图是飞行装置的</span>电路板示意图。</p><p>电路板的整体结构是一个R行C列的网格（R,C≤500）</p><p><span style=\"color: rgb(51, 51, 51);\"><img src=\"assets/problem-images/LinK59-d45ec5fd17.png\" alt=\"电路.png\" /><br /></span></p><p>每个格点都是电线的接点，每个格子都包含一个电子元件。</p><p>电子元件的主要部分是一个<span style=\"color: rgb(227, 55, 55);\">可旋转</span>的、连接一条对角线上的两个接点的短电缆。</p><p>在旋转之后，它就可以连接另一条对角线的两个接点。</p><p>电路板左上角的接点接入直流电源，右下角的接点接入飞行车的发动装置。</p><p>林克发现因为某些元件的方向不小心发生了改变，电路板可能处于断路的状态。</p><p>请问如何旋转最少数量的元件，使电源与发动装置重新连同在一起呢？</p><p>注意：电流只能通过斜向的线段，水平和竖直线段不是电线。</p><p><br /></p><p>提示：<span style=\"color: rgb(51, 51, 51);\">只需要按照下面的方式旋转标准件，就可以使得电源和发动机之间连通。</span></p><p><img src=\"assets/problem-images/LinK59-6e9cbaa6e9.png\" alt=\"电路2.png\" /><br /></p>",
          "inputDescription": "<p>输入文件包含多组测试数据。</p><p>第一行包含一个整数T，表示测试数据的数目。</p><p>对于每组测试数据，第一行包含正整数R和C，表示电路板的行数和列数。</p><p>之后R行，每行C个字符，字符是<code>&quot;/&quot;</code>和<code>&quot;\\&quot;</code>中的一个，表示标准件的方向。</p><h4><b>数据范围</b></h4><p><img alt=\"image.png\" src=\"assets/problem-images/LinK59-2d3df8bdb3.png\" width=\"182\" height=\"65\" /></p>",
          "outputDescription": "<p>对于每组测试数据，在单独的一行输出一个正整数，表示所需的最小旋转次数。</p><p>如果无论怎样都不能使得电源和发动机之间连通，输出NO SOLUTION。</p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1mC4y1W7Zr\\\" target=\\\"_blank\\\">Andy讲解</a></p><p><a href=\\\"https://www.acwing.com/problem/content/video/177/\\\" target=\\\"_blank\\\">ACWing讲解</a></p><p>改编自《电路维修》</p>",
          "source": "xmu",
          "samples": [
            {
              "input": "1\n3 5\n\\\\/\\\\\n\\\\///\n/\\\\\\\\",
              "output": "1"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK59.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK60",
          "title": "突袭路线",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK60/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK60-bc6c93a8e9.png\" width=\"554\" height=\"272\" /><br /></p><p>为了解救公主，林克必须深入敌后。<br />在备战前，他拿出“关系分析仪”扫描敌营中每个士兵之间的关系。</p><p>关系分析仪的功能说明如下：<br />如果A的活动范围在B的眼皮底下，那么分析仪就会从B出发连一条射线指向A（B--&gt;A).</p><p>经过扫描，林克得到全营敌兵的相互关系。有些敌人被多个同伴看顾，有些敌人背后一个替他守望的都没有。</p><p>林克决定从背后没有人的敌人开始，潜伏到其背后，突袭之，并且避免被其他人发现。</p><p>军营一共有n个敌人，彼此之间的关系有m条射线，请找到一条可以逐个击破敌人的路线图。</p><p>如果找不到这样一条突袭路线，请则输出-1.</p><p><br />提示：<br />问题转化为：给定一个n个点m条边的有向图，点的编号是1到n，图中可能存在重边和自环。</p><p>请输出任意一个该有向图的拓扑序列，如果拓扑序列不存在，则输出-1。</p><p>若一个由图中所有点构成的序列A满足：对于图中的每条边(x, y)，x在A中都出现在y之前，则称A是该图的一个拓扑序列。</p><p><span style=\"color: rgb(227, 55, 55);\">数据范围：1≤n,m≤10^5</span></p>",
          "inputDescription": "<p>第一行包含两个整数n和m</p><p>接下来m行，每行包含两个整数x和y，表示存在一条从点x到点y的有向边(x, y)。</p>",
          "outputDescription": "<p>共一行，如果存在拓扑序列，则输出拓扑序列。</p><p>否则输出-1。</p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV1x5411s7ev\\\" target=\\\"_blank\\\">Andy讲解</a></p><p><a href=\\\"https://www.acwing.com/video/280/\\\" target=\\\"_blank\\\">acwing讲解</a></p><p>改编自《<span style=\\\"color: rgb(73, 80, 96);\\\"><a href=\\\"https://www.acwing.com/problem/content/description/850/\\\" target=\\\"_blank\\\">有向图的拓扑序列</a>》</span></p>",
          "source": "",
          "samples": [
            {
              "input": "3 3\n1 2\n2 3\n1 3",
              "output": "1 2 3"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK60.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK61",
          "title": "最省赛程",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK61/",
          "timeLimit": 5000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img alt=\"image.png\" src=\"assets/problem-images/LinK61-e3a32be30d.png\" width=\"388\" height=\"216\" /><br /></p><p style=\"margin-left: 0px;\">为了让自己能够驾驭大师摩托，打开了大师摩托的隐藏任务：“赛车试炼”。</p><p style=\"margin-left: 0px;\">然而这个特殊的赛车试炼，竟然比的不是车速，比的是如何“省”油钱。</p><p style=\"margin-left: 0px;\">林克需要驾驶不同邮箱容量各异的赛车，从起点城市S开到终点城市E。</p><p style=\"margin-left: 0px;\">有N个城市（编号0、1…N-1）和M条赛道(构成一张无向图)。<br /></p><p>在每个城市里边都有一个加油站，不同的加油站的单位油价不一样(有些城市油价贵，有些城市油价便宜些)。</p><p>请计算，如果林克驾驶的是一辆油箱容量为C的赛车，那么他从起点城市S开到终点城市E至少要花多少油钱？<br /></p><p><span style=\"color: rgb(51, 51, 51);\">注意：</span><span style=\"color: rgb(51, 51, 51);\">车子初始时油箱是空的，需要在起点城市加油方可起行。</span><br /></p>",
          "inputDescription": "<p>第一行包含两个整数N和M。</p><p>第二行包含N个整数，代表N个城市的单位油价，第i个数即为第i个城市的油价Pi。</p><p>接下来M行，每行包括三个整数u,v,d，表示城市u与城市v之间存在道路，且赛车从u到v需要消耗的油量为d。</p><p>接下来一行包含一个整数q，代表问题数量（q&lt;100)</p><p>接下来q行，每行包含三个整数C、S、E，分别表示<span style=\"color: rgb(51, 51, 51);\">赛车</span>油箱容量、起点城市S、终点城市E。</p><p><b>数据范围：</b></p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK61-2a5e6aebe9.png\" width=\"150\" height=\"120.33203125\" /><br /></p>",
          "outputDescription": "<p>对于每个问题，输出一个整数，表示所需的最少油钱。</p><p>如果无法从起点城市开到终点城市，则输出”impossible”。</p><p>每个结果占一行。</p>",
          "hint": "<p style=\\\"margin-left: 0px;\\\"><a href=\\\"https://www.bilibili.com/video/BV1sf4y1m7V5\\\" target=\\\"_blank\\\">Andy讲解</a></p><p><a href=\\\"https://www.acwing.com/problem/content/video/178/\\\" target=\\\"_blank\\\">ACWing讲解</a></p><p>改变自《装满的油箱》</p>",
          "source": "",
          "samples": [
            {
              "input": "5 5\n10 10 20 12 13\n0 1 9\n0 2 8\n1 2 1\n1 3 11\n2 3 7\n2\n10 0 3\n20 1 4",
              "output": "170\nimpossible"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK61.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK62",
          "title": "数字三角形",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK62/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>数字三角形是动态规划的入门题，小鲁如果要入门动态规划，这道题是不可不做的：</p><pre>7<br />3   8<br />8   1   0<br />2   7   4   4<br />4   5   2   6   5<br /><br />(图1)</pre><p><span style=\\\"color: rgb(35, 31, 23);\\\">图1给出了一个数字三角形。从三角形的顶部到底部有很多条不同的路径。对于每条路径，把路径上面的数加起来可以得到一个和，你的任务就是找到最大的和。</span></p><p><span style=\\\"color: rgb(35, 31, 23);\\\">注意：路径上的每一步只能从一个数走到正下方和右下方的位置。</span></p>",
          "inputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输入的是一行是一个整数N (1 &lt; N &lt;= 1000)，给出三角形的行数。下面的N行给出数字三角形。数字三角形上的数的范围都在0和100之间。</span><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(35, 31, 23);\\\">输出最大的和。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/av97264332\\\" target=\\\"_blank\\\">什么是动态规划</a></p><p><a href=\\\"https://www.bilibili.com/video/av97263444\\\" target=\\\"_blank\\\">Andy的讲解</a></p>",
          "source": "",
          "samples": [
            {
              "input": "5\n7\n3 8\n8 1 0 \n2 7 4 4\n4 5 2 6 5",
              "output": "30"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK62.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK63",
          "title": "林克的01背包",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK63/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>一眨眼一学期快结束了，早就自学完大四4年计算机专业的小华拿到了任天堂公司的offer提前毕业走上他喜爱的设计之路。</p><p>放心不下还在学校苦苦自学的小鲁，小华送给小鲁一套VR装置和一个新名字——林克。</p><p>他对小鲁说：从此以后，我写的VR编程环境来继续引导你自学编程，但是在这新的虚拟世界中，你要化身为林克，接受各种编程试炼的挑战，你愿意吗？</p><p>小鲁知道随着小华的离开，自己自主学习的新时代来了，他挥泪痛别小华，欣然接过小华的赠与，带上林克头套，进入编程大陆，开始了奇妙的VR编程之旅。</p><p>他还来不及为着小华的离开伤感，第一个挑战就来临了。<br /></p><p>“林克”面临一个艰难的选择,他的背包容量有限,而面前摆放着价值不同的物品(各种套装)</p><p>你可以帮帮他吗?</p><p><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/4605ef2575.png\\\" width=\\\"357\\\" height=\\\"201\\\" /><br /></p><p><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/6f6acafda3.png\\\" width=\\\"612\\\" height=\\\"143\\\" /><br /></p>",
          "inputDescription": "<p><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/a884a9d2d3.png\\\" width=\\\"651\\\" height=\\\"72\\\" /><br /></p><p><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/a1dc684fed.png\\\" width=\\\"192\\\" height=\\\"59\\\" /><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示最大价值。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.bilibili.com/video/BV197411y7mb\\\" target=\\\"_blank\\\">Andy的讲解</a><br /></p><p><a href=\\\"https://www.acwing.com/video/944/\\\" target=\\\"_blank\\\">acwing讲解(2020)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "4 5\n1 2\n2 4\n3 4\n4 5",
              "output": "8"
            },
            {
              "input": "16 24\n30 34\n78 40\n96 97\n2 38\n59 57\n10 48\n28 65\n40 17\n95 84\n17 5\n80 83\n74 32\n37 28\n44 36\n25 14\n95 29",
              "output": "86"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK63.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK64",
          "title": "林克的完全背包",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK64/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>搞定了01背包问题，林克继续挑战完全背包问题：</p><p><img src=\\\"https://pic4.zhimg.com/80/v2-6fc1150fbb9af0f4ea680b29f2ebea23_720w.jpg\\\" /><br /></p><p>有N种物品和一个容量是V的背包，每种物品都有无限件可用。</p><p>第i种物品的体积是vi，价值是wi。</p><p>求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。<br />输出最大价值。</p><p><span style=\\\"color: rgb(227, 55, 55);\\\">数据范围</span><br /></p><p><span style=\\\"color: rgb(227, 55, 55);\\\">0&lt;N,V≤1000<br />0&lt;vi,wi≤1000</span></p>",
          "inputDescription": "<p>第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。</p><p>接下来有N行，每行两个整数vi,wi，用空格隔开，分别表示第i种物品的体积和价值。</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示最大价值。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/video/945/\\\" target=\\\"_blank\\\">acwing讲解</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "7 884\n6148 6786\n8500 8620\n6136 6930\n8700 6732\n409 3388\n9925 642\n4324 5208",
              "output": "6776"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK64.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK65",
          "title": "多重背包问题(1)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK65/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\\\"margin-left: 0px;\\\"><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/f54a4768cf.png\\\" width=\\\"600\\\" height=\\\"322.2488038277512\\\" /><br /></p><p style=\\\"margin-left: 0px;\\\">有N种物品和一个容量是V的背包。</p><p>第i种物品最多有si件，每件体积是vi，价值是wi。</p><p>求解将哪些物品装入背包，可使物品体积总和不超过背包容量，且价值总和最大。<br />输出最大价值。</p><h4><span style=\\\"color: rgb(227, 55, 55);\\\">数据范围</span></h4><p><span style=\\\"color: rgb(227, 55, 55);\\\">0&lt;N,V≤100<br />0&lt;vi,wi,si≤100</span></p>",
          "inputDescription": "<p>第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。</p><p>接下来有N行，每行三个整数vi,wi,si，用空格隔开，分别表示第i种物品的体积、价值和数量。</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示最大价值。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/4/\\\" target=\\\"_blank\\\">原题链接</a><br /></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "4 5\n1 2 3\n2 4 1\n3 4 3\n4 5 2",
              "output": "10"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK65.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK66",
          "title": "多重背包问题(2)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK66/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\\\"margin-left: 0px;\\\"><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/205e8efc71.png\\\" width=\\\"600\\\" height=\\\"322.2488038277512\\\" /><br /></p><p style=\\\"margin-left: 0px;\\\">有N种物品和一个容量是V的背包。</p><p>第i种物品最多有si件，每件体积是vivi，价值是wi。</p><p>求解将哪些物品装入背包，可使物品体积总和不超过背包容量，且价值总和最大。<br />输出最大价值。</p><p><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/d98a38438e.png\\\" width=\\\"174\\\" height=\\\"106\\\" /><br /></p><h5>提示：</h5><p>本题考查多重背包的二进制优化方法。</p>",
          "inputDescription": "<p>第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。</p><p>接下来有N行，每行三个整数vi,wi,si，用空格隔开，分别表示第i种物品的体积、价值和数量。</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示最大价值。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/5/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "4 5\n1 2 3\n2 4 1\n3 4 3\n4 5 2",
              "output": "10"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK66.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK67",
          "title": "分组背包问题",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK67/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\\\"margin-left: 0px;\\\"><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/904c138622.png\\\" width=\\\"600\\\" height=\\\"311.04477611940297\\\" /><br /></p><p style=\\\"margin-left: 0px;\\\">有N组物品和一个容量是V的背包。</p><p>每组物品有若干个，同一组内的物品最多只能选一个。<br />每件物品的体积是vij，价值是wij，其中i是组号，j是组内编号。</p><p>求解将哪些物品装入背包，可使物品总体积不超过背包容量，且总价值最大。</p><p>输出最大价值。</p><p><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/3d0e1e535d.png\\\" width=\\\"156\\\" height=\\\"118\\\" /><br /></p>",
          "inputDescription": "<p>第一行有两个整数N，V用空格隔开，分别表示物品组数和背包容量。</p><p>接下来有N组数据：</p><p><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/5adac9c21a.png\\\" width=\\\"487\\\" height=\\\"72\\\" /><br /></p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示最大价值。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/9/\\\" target=\\\"_blank\\\">原题链接</a></p><p><a href=\\\"https://www.acwing.com/video/341/\\\" target=\\\"_blank\\\">Y总讲解(基础课)</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "3 5\n2\n1 2\n2 4\n1\n3 4\n1\n4 5",
              "output": "8"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK67.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK68",
          "title": "混合背包问题",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK68/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>有 N 种物品和一个容量是 V 的背包。</p><p>物品一共有三类：</p><p>第一类物品只能用1次（01背包）；</p><p>第二类物品可以用无限次（完全背包）；</p><p>第三类物品最多只能用 si 次（多重背包）；</p><p>每种体积是 vi，价值是 wi。</p><p>求解将哪些物品装入背包，可使物品体积总和不超过背包容量，且价值总和最大。</p><p>输出最大价值。</p>",
          "inputDescription": "<p>第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。</p><p>接下来有 N 行，每行三个整数 vi,wi,si，用空格隔开，分别表示第 i 种物品的体积、价值和数量。</p><p>si=−1 表示第 i 种物品只能用1次；</p><p>si=0 表示第 i 种物品可以用无限次；</p><p>si&gt;0 表示第 i 种物品可以使用 si 次；</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示最大价值。</span><br /></p>",
          "hint": "",
          "source": "xmu",
          "samples": [
            {
              "input": "4 5\n1 2 -1\n2 4 1\n3 4 0\n4 5 2",
              "output": "8"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK68.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK69",
          "title": "摘花生",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK69/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>她来到一片有网格状道路的矩形花生地，从西北角进去，东南角出来。</p><p>地里每个道路的交叉点上都有种着一株花生苗，上面有若干颗花生，经过一株花生苗就能摘走该它上面所有的花生。</p><p>Hello Kitty只能向东或向南走，不能向西或向北走。</p><p>问Hello Kitty最多能够摘到多少颗花生。</p><p><br /></p><p><img src=\\\"https://cdn.acwing.com/media/article/image/2019/09/12/19_a8509f26d5-1.gif\\\" alt=\\\"1.gif\\\" /><br /></p>",
          "inputDescription": "<p>第一行是一个整数<code>T</code>，代表一共有多少组数据。</p><p>接下来是<code>T</code>组数据。</p><p>每组数据的第一行是两个整数，分别代表花生苗的行数<code>R</code>和列数<code>C</code>。</p><p>每组数据的接下来<code>R</code>行数据，从北向南依次描述每行花生苗的情况。每行数据有<code>C</code>个整数，按从西向东的顺序描述了该行每株花生苗上的花生数目<code>M</code>。</p><p><strong>数据范围</strong></p><p>1 ≤<code>T</code>≤ 100</p><p>1 ≤<code>R</code>，<code>C</code>≤ 100</p><p>0 ≤<code>M</code>≤ 1000</p>",
          "outputDescription": "<p>对每组输入数据，输出一行，内容为Hello Kitty能摘到得最多的花生颗数。</p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/1017/\\\" target=\\\"_blank\\\">原题链接</a></p><p><a href=\\\"http://www.example.comhttps://www.acwing.com/video/2332/\\\" target=\\\"_blank\\\">Y总讲解</a></p><p><a href=\\\"https://www.acwing.com/activity/content/code/content/112796/\\\" target=\\\"_blank\\\">Y总代码</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "2\n2 2\n1 1\n3 4\n2 3\n2 3 4\n1 6 5",
              "output": "8\n16"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK69.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK70",
          "title": "最低通行费",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK70/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>一个商人穿过一个N×N的正方形的网格，去参加一个非常重要的商务活动。</p><p>他要从网格的左上角进，右下角出。</p><p>每穿越中间1个小方格，都要花费1个单位时间。</p><p>商人必须在(2N - 1)个单位时间穿越出去。</p><p>而在经过中间的每个小方格时，都需要缴纳一定的费用。</p><p>这个商人期望在规定时间内用最少费用穿越出去。</p><p>请问至少需要多少费用？</p><p>注意：不能对角穿越各个小方格（即，只能向上下左右四个方向移动且不能离开网格）。</p>",
          "inputDescription": "<p>第一行是一个整数，表示正方形的宽度N。</p><p>后面N行，每行N个不大于100的正整数，为网格上每个小方格的费用。</p><p><strong>数据范围</strong></p><p>1 ≤ N ≤ 100</p>",
          "outputDescription": "<p>输出一个整数，表示至少需要的费用。</p><p><strong>样例解释</strong></p><p>样例中，最小值为109 = 1 + 2 + 5 + 7 + 9 + 12 + 19 + 21 + 33。</p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/1020/\\\" target=\\\"_blank\\\">原题链接</a></p><p><a href=\\\"https://www.acwing.com/solution/content/51101/\\\" target=\\\"_blank\\\">参考题解</a></p><p><a href=\\\"https://www.acwing.com/activity/content/code/content/112797/\\\" target=\\\"_blank\\\">Y总代码</a></p><p><a href=\\\"https://www.acwing.com/video/353/\\\" target=\\\"_blank\\\">Y总讲解</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "5\n1  4  6  8  10\n2  5  7  15 17\n6  8  9  18 20\n10 11 12 19 21\n20 23 25 29 33",
              "output": "109"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK70.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK71",
          "title": "最长上升子序列",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK71/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">给定一个长度为N的数列，求数值严格单调递增的子序列的长度最长是多少。</span><br /></p><p><span style=\\\"color: rgb(51, 51, 51);\\\"><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/743ae6c848.png\\\" width=\\\"212\\\" height=\\\"87\\\" /><br /></span></p>",
          "inputDescription": "<p>第一行包含整数N。</p><p>第二行包含N个整数，表示完整序列。</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示最大长度。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/897/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "",
          "samples": [
            {
              "input": "7\n3 1 2 1 8 5 6",
              "output": "4"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK71.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK72",
          "title": "最长上升子序列(2)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK72/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>给定一个长度为N的数列，求数值严格单调递增的子序列的长度最长是多少。<br /></p><p><span style=\\\"color: rgb(51, 51, 51);\\\"><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/77823fbbb0.png\\\" width=\\\"209\\\" height=\\\"85\\\" /></span><br /></p>",
          "inputDescription": "<p>第一行包含整数N。</p><p>第二行包含N个整数，表示完整序列。</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示最大长度。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/898/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "7\n3 1 2 1 8 5 6",
              "output": "4"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK72.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK73",
          "title": "拦截导弹",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK73/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><font>某国为了防御敌国的导弹袭击，发展出一种导弹</font><font>拦截系统。</font></p><p><font>但是这种导弹拦截系统有一个缺陷：虽然它的第一发炮弹能够到达任意的高度，但是以后每一发炮弹都不能高于前一发的高度。</font></p><p><font>某天，雷达捕捉到敌国的</font><font>导弹来袭。由于该系统还在试用阶段，所以只有一套系统，因此有可能不能拦截所有的导弹。</font><br /><br /><font>输入导弹依次飞来的高度（雷达给出的高度数据是不大于</font>30000的正整数），计算这套系统最多能拦截多少导弹，如果要拦截所有导弹最少要配备多少套这种导弹拦截系统。<br /></p>",
          "inputDescription": "<p><font>一行，为导弹依次飞来的高度</font><br /></p>",
          "outputDescription": "<p><font>两行，分别是最多能拦截的导弹数与要拦截所有导弹最少要配备的系统数</font><br /></p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/1012/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "389 207 155 300 299 170 158 65",
              "output": "6\n2"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK73.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK75",
          "title": "最长公共子序列",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK75/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<h4><span style=\\\"color: rgb(51, 51, 51);\\\">给定两个长度分别为N和M的字符串A和B，求既是A的子序列又是B的子序列的字符串长度最长是多少。</span><br /></h4><h4 style=\\\"margin-left: 0px;\\\">数据范围</h4><p>1≤N,M≤1000</p>",
          "inputDescription": "<p>第一行包含两个整数N和M。</p><p>第二行包含一个长度为N的字符串，表示字符串A。</p><p>第三行包含一个长度为M的字符串，表示字符串B。</p><p>字符串均由小写字母构成。</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示最大长度。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/899/\\\" target=\\\"_blank\\\">原题链接</a></p><p><a href=\\\"https://www.acwing.com/video/946/\\\" target=\\\"_blank\\\">Y总讲解</a></p>",
          "source": "",
          "samples": [
            {
              "input": "4 5\nacbd\nabedc",
              "output": "3"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK75.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK76",
          "title": "石子合并",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK76/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\\\"margin-left: 0px;\\\"><img alt=\\\"image.png\\\" src=\\\"https://www.xmuoj.com/public/upload/d47e1d10c6.png\\\" width=\\\"600\\\" height=\\\"336.8560105680317\\\" /><br /></p><p style=\\\"margin-left: 0px;\\\">设有N堆石子排成一排，其编号为1，2，3，…，N。</p><p>每堆石子有一定的质量，可以用一个整数来描述，现在要将这N堆石子合并成为一堆。</p><p>每次只能合并相邻的两堆，合并的代价为这两堆石子的质量之和，合并后与这两堆石子相邻的石子将和新堆相邻，合并时由于选择的顺序不同，合并的总代价也不相同。</p><p>例如有4堆石子分别为 1 3 5 2， 我们可以先合并1、2堆，代价为4，得到4 5 2， 又合并 1，2堆，代价为9，得到9 2 ，再合并得到11，总代价为4+9+11=24；</p><p>如果第二步是先合并2，3堆，则代价为7，得到4 7，最后一次合并代价为11，总代价为4+7+11=22。</p><p>问题是：找出一种合理的方法，使总的代价最小，输出最小代价。</p><h4><span style=\\\"color: rgb(227, 55, 55);\\\">数据范围</span></h4><p><span style=\\\"color: rgb(227, 55, 55);\\\">1≤N≤300</span></p>",
          "inputDescription": "<p>第一行一个数N表示石子的堆数N。</p><p>第二行N个数，表示每堆石子的质量(均不超过1000)。</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出一个整数，表示最小代价。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/284/\\\" target=\\\"_blank\\\">原题链接</a></p><p><a href=\\\"https://www.acwing.com/video/943/\\\" target=\\\"_blank\\\">ACWing讲解</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "4\n1 3 5 2",
              "output": "22"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK76.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK78",
          "title": "加分二叉树",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK78/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>设一个 n 个节点的二叉树 tree 的中序遍历为（1,2,3,…,n），其中数字 1,2,3,…,n 为节点编号。</p><p>每个节点都有一个分数（均为正整数），记第 i 个节点的分数为 di，tree 及它的每个子树都有一个加分，任一棵子树 subtree（也包含 tree 本身）的加分计算方法如下：</p><p>subtree的左子树的加分 × subtree的右子树的加分 ＋ subtree的根的分数</p><p>若某个子树为空，规定其加分为 1。</p><p>叶子的加分就是叶节点本身的分数，不考虑它的空子树。</p><p>试求一棵符合中序遍历为（1,2,3,…,n）且加分最高的二叉树 tree。</p><p>要求输出：</p><p>（1）tree的最高加分</p><p>（2）tree的前序遍历</p>",
          "inputDescription": "<p>第 1 行：一个整数 n，为节点个数。n&lt;=30</p><p>第 2 行：n 个用空格隔开的整数，为每个节点的分数（0&lt;分数&lt;100）。</p>",
          "outputDescription": "<p>第 1 行：一个整数，为最高加分</p><p>第 2 行：n 个用空格隔开的整数（最后一个数后面没空格），为该树的前序遍历。如果存在多种方案，则输出字典序最小的方案。</p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/problem/content/481/\\\" target=\\\"_blank\\\">原题链接</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "5\n5 7 1 2 10",
              "output": "145\n3 1 2 4 5"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK78.cpp",
            "language": "cpp",
            "code": ""
          }
        },
        {
          "id": "LinK80",
          "title": "没有上司的舞会",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK80/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\\\"margin-left: 0px;\\\">Ural大学有N名职员，编号为1~N。</p><p>他们的关系就像一棵以校长为根的树，父节点就是子节点的直接上司。</p><p>每个职员有一个快乐指数，用整数Hi给出，其中1≤i≤N。</p><p>现在要召开一场周年庆宴会，不过，没有职员愿意和直接上司一起参会。</p><p>在满足这个条件的前提下，主办方希望邀请一部分职员参会，使得所有参会职员的快乐指数总和最大，求这个最大值。</p><p><span style=\\\"color: rgb(227, 55, 55);\\\">数据范围</span></p><p><span style=\\\"color: rgb(227, 55, 55);\\\">1≤N≤6000,<br />−128≤Hi≤127</span></p>",
          "inputDescription": "<p>第一行一个整数N。</p><p>接下来N行，第 i 行表示 i 号职员的快乐指数Hi。</p><p>接下来N-1行，每行输入一对整数L, K,表示K是L的直接上司。</p>",
          "outputDescription": "<p><span style=\\\"color: rgb(51, 51, 51);\\\">输出最大的快乐指数。</span><br /></p>",
          "hint": "<p><a href=\\\"https://www.acwing.com/video/471/\\\" target=\\\"_blank\\\">acwing讲解</a><br /></p><p><a href=\\\"https://www.acwing.com/problem/content/287/\\\" target=\\\"_blank\\\">原题链接</a><br /></p><p><a href=\\\"https://www.acwing.com/solution/content/3502/\\\" target=\\\"_blank\\\">题解参考</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "7\n1\n1\n1\n1\n1\n1\n1\n1 3\n2 3\n6 4\n7 4\n4 5\n3 5",
              "output": "5"
            }
          ],
          "solution": {
            "path": "solutions/362/LinK80.cpp",
            "language": "cpp",
            "code": ""
          }
        }
      ]
    },
    {
      "id": "359",
      "title": "2026年校外实训一之剑道试炼(01李胜睿班)",
      "description": "<p>请用CC或者Codex或者TRAE或者Workbuddy进行AI编程！</p><p>全面学习驾驭最新AI工具成为新时代的AI原住民！</p>",
      "ruleType": "OI",
      "startTime": "06/28/2026 16:00:00",
      "endTime": "07/30/2026 16:00:00",
      "problems": [
        {
          "id": "JD001",
          "title": "铁令求和",
          "url": "http://www.xmuoj.com/contest/359/problem/JD001/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白第一次来到剑道宗山门前。梁嘉峰递给他两枚铁令，上面各刻着一个数。「加起来，报给我。」</p>",
          "inputDescription": "<p>一行，两个整数A和B，用空格隔开。</p>",
          "outputDescription": "<p>一个整数，即A+B的结果。</p>",
          "hint": "<p>读入两个整数，输出它们的和。最基础的输入输出练习。<a href=\"https://www.acwing.com/problem/content/1/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/001.cpp",
            "language": "cpp",
            "code": "//简单题：A+B\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    cin >> A >> B;\r\n    cout << A + B;\r\n    return 0;\r\n}\r\n"
          }
        },
        {
          "id": "JD002",
          "title": "铁令相乘",
          "url": "http://www.xmuoj.com/contest/359/problem/JD002/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰又递来两枚铁令。这一次他竖起两根手指——乘起来。</p>",
          "inputDescription": "<p>一行，两个整数A和B，用空格隔开。</p>",
          "outputDescription": "<p>输出 `PROD = ` 后跟A×B的结果。</p>",
          "hint": "<p>读入两个整数，输出乘积。注意输出格式带前缀。<a href=\"https://www.acwing.com/problem/content/607/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/002.cpp",
            "language": "cpp",
            "code": "//简单题：A*B\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    cin >> A >> B;\r\n    cout << \"PROD = \" << A * B << endl;\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD003",
          "title": "四令求差",
          "url": "http://www.xmuoj.com/contest/359/problem/JD003/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>练功房桌上摆着四枚铁令。梁嘉峰说：「A和B相乘，C和D相乘，把两个积的差报给我。」</p>",
          "inputDescription": "<p>一行，四个整数A、B、C、D，用空格隔开。</p>",
          "outputDescription": "<p>输出 `DIFFERENCE = ` 后跟A×B − C×D的结果。</p>",
          "hint": "<p>先乘后减，注意运算顺序和输出格式。<a href=\"https://www.acwing.com/problem/content/610/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/003.cpp",
            "language": "cpp",
            "code": "//简单题：根据描述得出结果\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B, C, D;\r\n    cin >> A >> B >> C >> D;\r\n    cout <<\"DIFFERENCE = \" << A * B - C * D << endl;\r\n    return 0;\r\n}//输出案例缺少\"DIFFERENCE = \""
          }
        },
        {
          "id": "JD004",
          "title": "集市算账",
          "url": "http://www.xmuoj.com/contest/359/problem/JD004/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>宗门集市上，赵晴儿帮账房算一笔账。已知商品编号、购买数量和单价，算出总价。</p>",
          "inputDescription": "<p>一行，三个数：商品编号（整数）、购买数量（整数）、单价（浮点数）。</p>",
          "outputDescription": "<p>输出 TOTAL = 后跟总价（数量×单价），保留两位小数。</p>",
          "hint": "<p>总价 = 件数₁×单价₁ + 件数₂×单价₂。<a href=\"https://www.acwing.com/problem/content/613/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/004.cpp",
            "language": "cpp",
            "code": "//简单题：根据描述得出结果\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    double C;\r\n    scanf(\"%d%d%lf\",&A,&B,&C);\r\n    printf(\"TOTAL = %.2lf\", B * C);//注意小数位数\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD005",
          "title": "比武台",
          "url": "http://www.xmuoj.com/contest/359/problem/JD005/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>山门内是一片圆形的比武台。赵晴儿指着地面：「半径是r，算算它的面积。」π取3.14159。</p>",
          "inputDescription": "<p>一个浮点数r，表示半径。</p>",
          "outputDescription": "<p>输出 `A=` 后跟面积，保留4位小数。</p>",
          "hint": "<p>面积 = 3.14159 × r × r，注意浮点数运算和格式化输出。<a href=\"https://www.acwing.com/problem/content/606/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/005.cpp",
            "language": "cpp",
            "code": "//简单题：根据描述得出结果\r\n#include <iostream>\r\n#define pi 3.14159\r\nusing namespace std;\r\nint main()\r\n{\r\n    double A;\r\n    scanf(\"%lf\",&A);\r\n    printf(\"A=%.4lf\", A * A * pi);\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD006",
          "title": "剑术考核",
          "url": "http://www.xmuoj.com/contest/359/problem/JD006/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>入门考核有两项：剑术和心法。剑术权重3.5，心法权重7.5。赵晴儿拿到成绩后要算加权平均分。</p>",
          "inputDescription": "<p>两行，每行一个浮点数，分别表示剑术成绩A和心法成绩B。</p>",
          "outputDescription": "<p>输出 `Average = ` 后跟加权平均分，保留5位小数。</p>",
          "hint": "<p>加权平均 = (A×3.5 + B×7.5) / 11。分母是权重之和，不是2。<a href=\"https://www.acwing.com/problem/content/608/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/006.cpp",
            "language": "cpp",
            "code": "//简单题：根据描述得出结果\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a, b;\r\n    scanf(\"%lf%lf\",&a,&b);//剑术权重3.5，心法权重7.5\r\n    printf(\"Average = %.5lf\", (a*3.5+b*7.5)/11.0 );//注意位数\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD007",
          "title": "月底发饷",
          "url": "http://www.xmuoj.com/contest/359/problem/JD007/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>月底发饷，李少白帮账房核算一名弟子的工钱。已知工号、出工天数和每日工钱。</p>",
          "inputDescription": "<p>第一行一个整数，表示工号。第二行两个数：出工天数（整数）和每日工钱（浮点数）。</p>",
          "outputDescription": "<p>第一行输出工号。第二行输出 `SALARY = U$ ` 后跟实发金额，保留两位小数。</p>",
          "hint": "<p>实发金额 = 出工天数 × 每日工钱。<a href=\"https://www.acwing.com/problem/content/611/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/007.cpp",
            "language": "cpp",
            "code": "//简单题：根据描述得出结果\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double b;\r\n    int a,c;\r\n    scanf(\"%d\", &c);\r\n    scanf(\"%d%lf\",&a,&b);\r\n    printf(\"NUMBER = %d\\n\", c);\r\n    printf(\"SALARY = U$ %.2lf\",a*b );//注意格式\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD008",
          "title": "马匹脚力",
          "url": "http://www.xmuoj.com/contest/359/problem/JD008/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白骑马送信，跑了S公里，马匹消耗了L升草料汁。他想知道每升草料汁能支撑跑多少公里。</p>",
          "inputDescription": "<p>一行，两个浮点数，分别表示路程（km）和草料消耗（L）。</p>",
          "outputDescription": "<p>输出每升草料汁能跑的公里数，保留3位小数，后跟 km/l。</p>",
          "hint": "<p>消耗率 = 草料 / 路程，注意浮点数除法。<a href=\"https://www.acwing.com/problem/content/617/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/008.cpp",
            "language": "cpp",
            "code": "//简单题：根据描述得出结果\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a, b;//浮点数\r\n    scanf(\"%lf%lf\",&a,&b);\r\n    printf(\"%.3lf km/l\",a/b );\r\n \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD009",
          "title": "铁球体积",
          "url": "http://www.xmuoj.com/contest/359/problem/JD009/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>兵器库里有一颗实心铁球。李少白量出半径r，想算出它的体积。V = (4/3)πr³，π取3.14159。</p>",
          "inputDescription": "<p>一个浮点数r，表示铁球的半径。</p>",
          "outputDescription": "<p>输出 `VOLUME = ` 后跟体积，保留3位小数。</p>",
          "hint": "<p>体积 = (4.0/3.0) × 3.14159 × r³，注意用浮点数除法。<a href=\"https://www.acwing.com/problem/content/614/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/009.cpp",
            "language": "cpp",
            "code": "//简单题：根据描述得出结果\r\n#include <stdio.h>\r\n#define pi 3.14159\r\nint main()\r\n{\r\n    double r;//浮点数\r\n    scanf(\"%lf\",&r);\r\n    printf(\"VOLUME = %.3lf\",(4.0/3)*pi*r*r*r );//注意位数\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD010",
          "title": "三令比大",
          "url": "http://www.xmuoj.com/contest/359/problem/JD010/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在墙上刻了三个数，转头说：「最大的那个，报给我。」</p>",
          "inputDescription": "<p>一行，三个整数A、B、C，用空格隔开。</p>",
          "outputDescription": "<p>输出 `Max = ` 后跟三个数中的最大值。</p>",
          "hint": "<p>用条件判断两两比较，或直接用max函数。<a href=\"https://www.acwing.com/problem/content/616/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/010.c",
            "language": "c",
            "code": "//简单题：比较大小\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    int a,b,c,d;\r\n    scanf(\"%d%d%d\",&a,&b,&c);\r\n    d = (a > b ? a : b) > c ? (a > b ? a : b) : c;//用三次？：判断\r\n    printf(\"Max = %d\", d);\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD011",
          "title": "哨塔测距",
          "url": "http://www.xmuoj.com/contest/359/problem/JD011/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上标了两个哨塔的坐标(x1,y1)和(x2,y2)。她说：「算算它们之间的直线距离。」</p>",
          "inputDescription": "<p>一行，四个浮点数x1, y1, x2, y2，用空格隔开。</p>",
          "outputDescription": "<p>输出两点间的距离，保留两位小数。</p>",
          "hint": "<p>使用距离公式，需要引入数学库以使用sqrt函数。<a href=\"https://www.acwing.com/problem/content/618/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/011.c",
            "language": "c",
            "code": "#include <stdio.h>\r\n#include <math.h>\r\nint main()\r\n{\r\n    double x1, y1, x2, y2, l;\r\n    scanf(\"%lf%lf%lf%lf\",&x1,&y1,&x2,&y2);\r\n    l = sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));\r\n    printf(\"%.4lf\", l);//题目输出写保留两位小数有误\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD012",
          "title": "圆盘开孔",
          "url": "http://www.xmuoj.com/contest/359/problem/JD012/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上画了五个图形，每个图形都用A、B、C三个数来定义。她让李少白算出每个图形的面积：三角形（底A高C）、圆形（半径C）、梯形（上底A下底B高C）、正方形（边长B）、长方形（长A宽B）。π取3.14159，结果保留3位小数。</p>",
          "inputDescription": "<p>一行，三个浮点数A、B、C。</p>",
          "outputDescription": "<p>五行，分别输出 TRIANGULO（三角形）、CIRCULO（圆形）、TRAPEZIO（梯形）、QUADRADO（正方形）、RETANGULO（长方形）的面积，各保留3位小数。格式为 `名称: 面积`。</p>",
          "hint": "<p>注意输出格式：名称与面积之间有一个空格。π取3.14159。使用 printf(&quot;%.3f&quot;) 或 cout &lt;&lt; fixed &lt;&lt; setprecision(3) 保留3位小数。<a href=\"https://www.acwing.com/problem/content/615/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/012.c",
            "language": "c",
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    double a, b, c;\r\n    scanf(\"%lf%lf%lf\", &a, &b, &c);\r\n    printf(\"TRIANGULO: %.3lf\\n\", (a * c) / 2.0);\r\n    printf(\"CIRCULO: %.3lf\\n\", 3.14159 * c * c);\r\n    printf(\"TRAPEZIO: %.3lf\\n\", (a + b) * c / 2.0);\r\n    printf(\"QUADRADO: %.3lf\\n\", b * b);\r\n    printf(\"RETANGULO: %.3lf\\n\", a * b);\r\n    return 0;\r\n}\r\n"
          }
        },
        {
          "id": "JD013",
          "title": "水钟报时",
          "url": "http://www.xmuoj.com/contest/359/problem/JD013/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>宗门的水钟记录的是总秒数，但掌门要求用「时:分:秒」的格式汇报。赵晴儿让李少白帮忙转换。</p>",
          "inputDescription": "<p>一个整数N，表示总秒数。</p>",
          "outputDescription": "<p>输出 `H:M:S` 格式的时间。</p>",
          "hint": "<p>时 = 秒 ÷ 3600，分 = 余数 ÷ 60，秒 = 最终余数。<a href=\"https://www.acwing.com/problem/content/656/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/013.c",
            "language": "c",
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int t, h = 0, m = 0, s = 0;\r\n    scanf(\"%d\", &t);\r\n    h = t / 3600;\r\n    m = (t - 3600 * h) / 60;\r\n    s = t - 3600 * h - 60 * m;\r\n    printf(\"%d:%d:%d\", h, m, s);\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD014",
          "title": "钱庄换银",
          "url": "http://www.xmuoj.com/contest/359/problem/JD014/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白去镇上钱庄换碎银。掌柜说：「你要换多少文？我用100、50、20、10、5、2、1面额的铜钱给你。」需要知道每种面额各要几枚。</p>",
          "inputDescription": "<p>一个整数N，表示要换的文数。</p>",
          "outputDescription": "<p>第一行输出总金额N。接下来7行，按面额从大到小，每行输出 `X nota(s) de R$ Y,00`，其中X是张数，Y是面额。</p>",
          "hint": "<p>贪心策略：从大到小依次整除，记录每种面额的枚数。<a href=\"https://www.acwing.com/problem/content/655/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/014.c",
            "language": "c",
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int money, m100 = 0, m50 = 0, m20 = 0, m10 = 0, m5 = 0, m2 = 0, m1 = 0;\r\n    scanf(\"%d\", &money);\r\n    m100 = money / 100;\r\n    m50 = (money - 100 * m100) / 50;\r\n    m20 = (money - 100 * m100 - 50 * m50) / 20;\r\n    m10 = (money - 100 * m100 - 50 * m50 - 20 * m20) / 10;\r\n    m5 = (money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10) / 5;\r\n    m2 = (money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10 - 5 * m5) / 2;\r\n    m1 = money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10 - 5 * m5 - 2 * m2;\r\n    printf(\"%d\\n\", money);\r\n    printf(\"%d nota(s) de R$ 100,00\\n\", m100);\r\n    printf(\"%d nota(s) de R$ 50,00\\n\", m50);\r\n    printf(\"%d nota(s) de R$ 20,00\\n\", m20);\r\n    printf(\"%d nota(s) de R$ 10,00\\n\", m10);\r\n    printf(\"%d nota(s) de R$ 5,00\\n\", m5);\r\n    printf(\"%d nota(s) de R$ 2,00\\n\", m2);\r\n    printf(\"%d nota(s) de R$ 1,00\\n\", m1);\r\n    return 0;\r\n}\r\n"
          }
        },
        {
          "id": "JD015",
          "title": "石碑之谜",
          "url": "http://www.xmuoj.com/contest/359/problem/JD015/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>山门前有两条路，路边各立一块石碑。赵晴儿指着石碑上的两个数说：「如果其中一个数能被另一个整除，这两块碑就是一对——走左边这条路。否则走右边。」给定两个整数A和B，判断它们是否互为倍数关系（即A能被B整除，或B能被A整除）。</p>",
          "inputDescription": "<p>一行，两个整数A和B。</p>",
          "outputDescription": "<p>互为倍数输出 `Yes`，否则输出 `No`。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/667/\" target=\"_blank\">原题链接</a>判断 A%B==0 或 B%A==0，只要有一个成立就是倍数关系，输出Yes；否则输出No。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/015.c",
            "language": "c",
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int A, B;\r\n    scanf(\"%d%d\", &A, &B);\r\n    if (A % B == 0 || B % A == 0)printf(\"Yes\");\r\n    else printf(\"No\");\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD016",
          "title": "三根木棍",
          "url": "http://www.xmuoj.com/contest/359/problem/JD016/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿从柴堆里抽出三根木棍，量了量长度，让李少白判断它们能不能拼成一个三角形。如果能，算出周长；如果不能，算出以A、B为上下底、C为高的梯形面积，公式为 (A+B)×C÷2。</p>",
          "inputDescription": "<p>一行，三个浮点数A、B、C。</p>",
          "outputDescription": "<p>能拼成三角形输出 `Perimeter = X.X`（周长），拼不成输出 `Area = X.X`（梯形面积）。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/666/\" target=\"_blank\">原题链接</a>三角形成立条件：任意两边之和大于第三边。如果成立，周长=A+B+C；如果不成立，梯形面积=(A+B)*C/2。注意保留1位小数。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/016.c",
            "language": "c",
            "code": "#include <stdio.h>\r\n#include <math.h>\r\nint main()\r\n{\r\n    double A, B, C;\r\n    scanf(\"%lf%lf%lf\", &A, &B, &C);\r\n    if (A + B > C && B + C > A && A + C > B)printf(\"Perimeter = %.1lf\", A + B + C);\r\n    else printf(\"Area = %.1lf\", (A + B) * C / 2);\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD017",
          "title": "比武时辰",
          "url": "http://www.xmuoj.com/contest/359/problem/JD017/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白和师弟在练武场比武。他们从A时开始，到B时结束（只看整点，不看分钟）。如果B&gt;A，比武持续了B-A小时；如果B≤A，说明比武过了零点，持续了24-A+B小时；如果A=B，说明刚好持续了一整天（24小时）。</p>",
          "inputDescription": "<p>一行，两个整数A和B（0≤A,B≤23）。</p>",
          "outputDescription": "<p>输出一个整数，表示比武持续的小时数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/669/\" target=\"_blank\">原题链接</a>用条件判断：如果B&gt;A，输出B-A；如果B==A，输出24；否则输出24-A+B。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/017.c",
            "language": "c",
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int A, B;\r\n    scanf(\"%d%d\", &A, &B);\r\n    if (B > A)printf(\"%d\", B - A);\r\n    else if (A == B)printf(\"%d\", 24);\r\n    else if (A > B)printf(\"%d\", 24 - A + B);\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD018",
          "title": "三石排序",
          "url": "http://www.xmuoj.com/contest/359/problem/JD018/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在地上放了三块石头，上面各刻着一个数。他说：「从小到大排好，报给我。」</p>",
          "inputDescription": "<p>一行，三个整数，用空格隔开。</p>",
          "outputDescription": "<p>三个数从小到大输出，空格隔开。</p>",
          "hint": "<p>用条件判断两两比较确定顺序，或存入数组排序。<a href=\"https://www.acwing.com/problem/content/665/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/018.c",
            "language": "c",
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int a, b, c,temp = 0;\r\n    scanf(\"%d%d%d\", &a, &b, &c);\r\n    if (a < b)\r\n    {\r\n        temp = a;\r\n        a = b;\r\n        b = temp;\r\n    }\r\n    if (a < c)\r\n    {\r\n        temp = a;\r\n        a = c;\r\n        c = temp;\r\n    }\r\n    if (b < c)\r\n    {\r\n        temp = b;\r\n        b = c;\r\n        c = temp;\r\n    }\r\n    printf(\"%d %d %d\",c,b,a);\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD019",
          "title": "杂货铺",
          "url": "http://www.xmuoj.com/contest/359/problem/JD019/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>山脚杂货铺有5种干粮，编号1到5，单价分别是4.00、4.50、5.00、2.00、1.50文。赵晴儿报了干粮编号和要买的数量，掌柜让她自己算总价。</p>",
          "inputDescription": "<p>一行，两个整数：干粮编号X和数量Y。</p>",
          "outputDescription": "<p>输出 `Total: R$ ` 后跟总价，保留两位小数。</p>",
          "hint": "<p>用数组或条件判断存储5种单价，查表后乘以数量。<a href=\"https://www.acwing.com/problem/content/662/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/019.c",
            "language": "c",
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int name, num;\r\n    double price[] = { 4.00,4.50,5.00,2.00,1.50 };\r\n    scanf(\"%d%d\", &name, &num);\r\n    printf(\"Total: R$ %.2lf\", price[name - 1] * num);\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD020",
          "title": "内力分级",
          "url": "http://www.xmuoj.com/contest/359/problem/JD020/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>宗门把弟子的内力值分成四个等级：[0,25]是入门，(25,50]是初级，(50,75]是中级，(75,100]是高级。超出100则不在评级范围内。李少白测出一名弟子的内力值，需要判断他属于哪个等级。</p>",
          "inputDescription": "<p>一个浮点数，表示内力值。</p>",
          "outputDescription": "<p>输出对应区间的名称，或 `Out of interval`（超出范围）。</p>",
          "hint": "<p>用 if-elif-else 逐一判断落在哪个区间。<a href=\"https://www.acwing.com/problem/content/661/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/020.c",
            "language": "c",
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    float power; \r\n    scanf(\"%f\", &power);\r\n    if (power >= 0 && power <= 25) \r\n    {\r\n        printf(\"Interval [0,25]\\n\");\r\n    } \r\n    else if (power > 25 && power <= 50)\r\n    {\r\n        printf(\"Interval (25,50]\\n\");\r\n    } \r\n    else if (power > 50 && power <= 75) \r\n    {\r\n        printf(\"Interval (50,75]\\n\");\r\n    } \r\n    else if (power > 75 && power <= 100)\r\n    {\r\n        printf(\"Interval (75,100]\\n\");\r\n    } \r\n    else\r\n    {\r\n        printf(\"Out of interval\\n\");\r\n    }\r\n\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD021",
          "title": "沙盘点位",
          "url": "http://www.xmuoj.com/contest/359/problem/JD021/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上标了一个点P(x, y)，让李少白判断它落在第几象限，还是在坐标轴上，还是在原点。</p>",
          "inputDescription": "<p>一行，两个浮点数x和y。</p>",
          "outputDescription": "<p>输出 <code>Q1</code>（第一象限）、<code>Q2</code>（第二）、<code>Q3</code>（第三）、<code>Q4</code>（第四）、<code>Eixo X</code>（X轴上）、<code>Eixo Y</code>（Y轴上）或 <code>Origem</code>（原点）。</p>",
          "hint": "<p>先判断是否在原点或坐标轴上（x==0 或 y==0），再判断象限。<a href=\"https://www.acwing.com/problem/content/664/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/021.c",
            "language": "c",
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    double x,y;\r\n    scanf(\"%lf%lf\", &x,&y);\r\n    if (x > 0 && y > 0)\r\n    {\r\n        printf(\"Q1\");\r\n    }\r\n    else if (x < 0 && y > 0)\r\n    {\r\n        printf(\"Q2\");\r\n    }\r\n    else if (x < 0 && y < 0)\r\n    {\r\n        printf(\"Q3\");\r\n    }\r\n    else if (x > 0 && y < 0)\r\n    {\r\n        printf(\"Q4\");\r\n    }\r\n    else if (x != 0 && y == 0)\r\n    {\r\n        printf(\"Eixo X\");\r\n    }\r\n    else if (x == 0 && y != 0)\r\n    {\r\n        printf(\"Eixo Y\");\r\n    }\r\n    else if (x == 0 && y == 0)\r\n    {\r\n        printf(\"Origem\");\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD022",
          "title": "跨夜比武",
          "url": "http://www.xmuoj.com/contest/359/problem/JD022/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白和师弟比武，开始时间是A时B分，结束时间是C时D分。比武可能跨了零点。请算出比武持续了多久。</p>",
          "inputDescription": "<p>一行，四个整数A、B、C、D，分别表示开始的时、分和结束的时、分。</p>",
          "outputDescription": "<p>输出比武持续时间，格式为 `H:M`。</p>",
          "hint": "<p>全部转为分钟做差。如果结果≤0，加上24×60。<a href=\"https://www.acwing.com/problem/content/670/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/022.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int A, B, C, D,temp;\r\n    cin >> A >> B >> C >> D;\r\n    int m1 = A * 60 + B;\r\n\tint m2 = C * 60 + D;\r\n    if (m1 >= m2)temp = 24 * 60 + m2 - m1;\r\n\telse temp = m2 - m1;\r\n\tcout << temp / 60 << \":\" << temp % 60 << endl;\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD023",
          "title": "账房调薪",
          "url": "http://www.xmuoj.com/contest/359/problem/JD023/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>宗门账房年底调薪，按原月钱所在区间确定涨幅：0~400涨15%，400.01~800涨12%，800.01~1200涨10%，1200.01~2000涨7%，2000以上涨4%。涨幅是按整个工资乘以对应百分比，不是分段累进。李少白拿到一名弟子的原月钱，请算出新月钱、涨了多少和涨幅百分比。</p>",
          "inputDescription": "<p>一个浮点数，表示原月钱。</p>",
          "outputDescription": "<p>三行：新月钱、涨了多少、涨幅百分比（整数带%号），金额保留两位小数。</p>",
          "hint": "<p>用 if-elif 判断原月钱落在哪个区间，确定涨幅百分比p。涨额 = 原月钱 × p/100，新月钱 = 原月钱 + 涨额。注意400属于0~400区间（涨15%），400.01才属于400~800区间。<a href=\"https://www.acwing.com/problem/content/671/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/023.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\n#include<iomanip>\r\nusing namespace std;\r\n//iomanip is used to set the precision of the output\r\nint main()\r\n{\r\n    double salary;\r\n\tcin >> salary;\r\n\tif (salary >= 0 && salary <= 400)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<< setprecision(2) <<salary * 1.15 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.15 << endl;\r\n\t\tcout << \"Percentage:\" << \" 15 %\" << endl;\r\n\t}\r\n\telse if (salary >= 400.01 && salary <= 800)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<<setprecision(2)<<salary * 1.12 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.12 << endl;\r\n\t\tcout << \"Percentage:\" << \" 12 %\" << endl;\r\n\t}\r\n\telse if (salary >= 800.01 && salary <= 1200)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<< setprecision(2) << salary * 1.10 << endl;\r\n\t\tcout << \"Increase: \" << fixed<<setprecision(2)<<salary * 0.10 << endl;\r\n\t\tcout << \"Percentage:\" << \" 10 %\" << endl;\r\n\t}\r\n\telse if (salary >= 1200.01 && salary <= 2000)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<<setprecision(2)<< salary * 1.07 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.07 << endl;\r\n\t\tcout << \"Percentage:\" << \" 7 %\" << endl;\r\n\t}\r\n\telse if(salary>2000)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<<setprecision(2)<< salary * 1.04 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.04 << endl;\r\n\t\tcout << \"Percentage:\" << \" 4 %\" << endl;\r\n\t}\r\n\treturn 0;\r\n}"
          }
        },
        {
          "id": "JD024",
          "title": "五关考验",
          "url": "http://www.xmuoj.com/contest/359/problem/JD024/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰考李少白：「给你四个数A、B、C、D，同时满足以下五个条件才算过关：B大于A，D大于A，C与D之和大于A与B之和，C是正数，A是偶数。」</p>",
          "inputDescription": "<p>一行，四个整数A、B、C、D。</p>",
          "outputDescription": "<p>满足所有条件输出 `Accepted`，否则输出 `Not accepted`。</p>",
          "hint": "<p>用逻辑与（&&/and）连接五个条件，全部为真才通过。<a href=\"https://www.acwing.com/problem/content/659/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/024.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A,B,C,D;\r\n    cin>>A>>B>>C>>D; //B大于A，D大于A，C与D之和大于A与B之和，C是正数，A是偶数。\r\n    if(A%2==0 && B>A && D>A && (C+D)>(A+B) && C>0)\r\n    {\r\n        cout<<\"Accepted\"<<endl;\r\n    }\r\n    else\r\n    {\r\n        cout<<\"Not accepted\"<<endl;\r\n    }\r\n}"
          }
        },
        {
          "id": "JD025",
          "title": "信鸽传信",
          "url": "http://www.xmuoj.com/contest/359/problem/JD025/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>宗门各分舵之间用信鸽传信，每个分舵有一个编号（DDD码）。李少白拿到一个编号，需要查出它对应哪个分舵：61=Brasilia，71=Salvador，11=Sao Paulo，21=Rio de Janeiro，32=Juiz de Fora，19=Campinas，27=Vitoria，31=Belo Horizonte，其他编号则输出&quot;DDD nao cadastrado&quot;。</p>",
          "inputDescription": "<p>一个整数。</p>",
          "outputDescription": "<p>输出对应分舵名称，或 `DDD nao cadastrado`。</p>",
          "hint": "<p>用 if-elif 链逐一比对，或用字典/映射表查找。<a href=\"https://www.acwing.com/problem/content/673/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/025.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int a;\r\n    cin>>a;\r\n    if(a==61)\r\n    {\r\n        cout<<\"Brasilia\"<<endl;\r\n    }\r\n    else if(a==71)\r\n    {\r\n        cout<<\"Salvador\"<<endl;\r\n    }\r\n    else if(a==11)\r\n    {\r\n        cout<<\"Sao Paulo\"<<endl;\r\n    }\r\n    else if(a==21)\r\n    {\r\n        cout<<\"Rio de Janeiro\"<<endl;\r\n    }\r\n    else if(a==32)\r\n    {\r\n        cout<<\"Juiz de Fora\"<<endl;\r\n    }\r\n    else if(a==19)\r\n    {\r\n        cout<<\"Campinas\"<<endl;\r\n    }\r\n    else if(a==27)\r\n    {\r\n        cout<<\"Vitoria\"<<endl;\r\n    }\r\n    else if(a==31)\r\n    {\r\n        cout<<\"Belo Horizonte\"<<endl;\r\n    }\r\n    else\r\n    {\r\n        cout<<\"DDD nao cadastrado\"<<endl;\r\n    }\r\n}"
          }
        },
        {
          "id": "JD026",
          "title": "木棍辨形",
          "url": "http://www.xmuoj.com/contest/359/problem/JD026/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰递来三根木棍：「先判断能不能拼成三角形。能的话，再判断是直角、锐角还是钝角三角形，以及是否等边或等腰。」判断依据：最长边的平方与另外两边平方和的关系。</p>",
          "inputDescription": "<p>一行，三个浮点数，表示三边长度（已从小到大排列）。</p>",
          "outputDescription": "<p>不能构成三角形输出 <code>Not a triangle</code>；能构成则按以下规则输出（<b>每种满足的条件输出一行</b>）：<ol><li>先判断角度类型：输出 <code>Right</code>（直角）、<code>Acute</code>（锐角）或 <code>Obtuse</code>（钝角）之一。</li><li>再判断边长类型：若三边相等输出 <code>Equilateral</code>（等边），若恰好两边相等输出 <code>Isosceles</code>（等腰），否则不输出。</li></ol>注意：一个三角形可能同时属于多个类型，同一类型的判断用 <code>if</code> 而不是 <code>elif</code> 才能多行输出。</p>",
          "hint": "<p>先验证两边之和大于第三边。若不能构成三角形则直接输出 <code>Not a triangle</code> 并结束。能构成三角形时，角度类型和边长类型分别用独立的 <code>if</code> 判断（不要用 <code>elif</code> 串起来），以确保等边/等腰三角形能输出两行。边长已从小到大排列，第三个数即最长边。<a href=\"https://www.acwing.com/problem/content/668/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/026.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a,b,c;\r\n    cin>>a>>b>>c;\r\n    if(a+b>c&&a+c>b&&b+c>a)\r\n    {\r\n        if(a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a)\r\n        {\r\n            cout<<\"Right\"<<endl;\r\n        }\r\n        else if(a*a+b*b>c*c&&a*a+c*c>b*b&&b*b+c*c>a*a)\r\n        {\r\n            cout<<\"Acute\"<<endl;\r\n        }\r\n        else\r\n        {\r\n            cout<<\"Obtuse\"<<endl;\r\n        }\r\n        if(a==b&&b==c)\r\n        {\r\n            cout<<\"Equilateral\"<<endl;\r\n        }\r\n        else if(a==b||b==c||a==c)\r\n        {\r\n            cout<<\"Isosceles\"<<endl;\r\n        }\r\n    }\r\n    else\r\n    {\r\n        cout<<\"Not a triangle\"<<endl;\r\n    }\r\n}"
          }
        },
        {
          "id": "JD027",
          "title": "怪兽辨识",
          "url": "http://www.xmuoj.com/contest/359/problem/JD027/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>迷踪林外遇到一只怪兽。赵晴儿观察了三层特征来判断它的种类：<br />第一层：有脊椎（vertebrate）还是无脊椎（invertebrate）；<br />第二层：鸟类（bird）、哺乳类（mammal）、昆虫（insect）还是环节动物（annelid）；<br />第三层：食性——食肉（carnivore）、食草（herbivore）、杂食（omnivore）、吸血（hematophagous）。以下是怪兽分类图谱：<pre style=\"font-family:monospace;background:#f5f5f5;padding:12px;border-radius:4px;line-height:1.6\">Level 1         Level 2        Level 3           Animal\n---------------------------------------------------------\n                +-- bird ------ carnivore ------- eagle（鹰）\n                |             +-- herbivore ------ dove（鸽）\nvertebrate -----+\n                |             +-- omnivore ------- man（人）\n                +-- mammal ----+\n                              +-- herbivore ------ cow（牛）\n\n                +-- insect ---- hematophagous ---- flea（跳蚤）\n                |             +-- herbivore ------ caterpillar（毛虫）\ninvertebrate ---+\n                |             +-- hematophagous ---- leech（水蛭）\n                +-- annelid --+\n                              +-- omnivore ------- earthworm（蚯蚓）\n</pre>根据输入的三层特征单词，输出对应的动物英文名称。</p>",
          "inputDescription": "<p>三行，每行一个字符串，分别表示三层分类特征。</p>",
          "outputDescription": "<p>输出对应的动物名称。</p>",
          "hint": "<p>三层嵌套 if-else：先判断第一层，再判断第二层，最后判断第三层。<a href=\"https://www.acwing.com/problem/content/672/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/027.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\nint main()\r\n{\r\n    string first,second,third;\r\n    cin>>first>>second>>third;\r\n    if(first==\"vertebrate\")\r\n    {\r\n        if(second==\"bird\")\r\n        {\r\n            if(third==\"carnivore\")\r\n            {\r\n                cout<<\"eagle\"<<endl;\r\n            }\r\n            else if(third==\"herbivore\")\r\n            {\r\n                cout<<\"dove\"<<endl;\r\n            }\r\n        }\r\n        else if(second==\"mammal\")\r\n        {\r\n            if(third==\"omnivore\")\r\n            {\r\n                cout<<\"man\"<<endl;\r\n            }\r\n            else if(third==\"herbivore\")\r\n            {\r\n                cout<<\"cow\"<<endl;\r\n            }\r\n        }\r\n    }\r\n    else if(first==\"invertebrate\")\r\n    {\r\n        if(second==\"insect\")\r\n        {\r\n            if(third==\"hematophagous\")\r\n            {\r\n                cout<<\"flea\"<<endl;\r\n            }\r\n            else if(third==\"herbivore\")\r\n            {\r\n                cout<<\"caterpillar\"<<endl;\r\n            }\r\n        }\r\n        else if(second==\"annelid\")\r\n        {\r\n            if(third==\"omnivore\")\r\n            {\r\n                cout<<\"earthworm\"<<endl;\r\n            }\r\n            else if(third==\"hematophagous\")\r\n            {\r\n                cout<<\"leech\"<<endl;\r\n            }\r\n        }\r\n    }\r\n}"
          }
        },
        {
          "id": "JD028",
          "title": "田赋计算",
          "url": "http://www.xmuoj.com/contest/359/problem/JD028/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白入了宗门，开始交田赋。税率分档：2000以下免税，2000.01~3000部分征8%，3000.01~4500部分征18%，4500以上部分征28%。注意是分段计税——只有超出部分按对应税率算。</p>",
          "inputDescription": "<p>一个浮点数，表示月收入。</p>",
          "outputDescription": "<p>输出 `R$ X.XX`。免税则输出 `Isento`。</p>",
          "hint": "<p>分段计算：1000×8% + 2×18% = 80.36。每段只对超出部分征税。<a href=\"https://www.acwing.com/problem/content/674/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/028.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a;\r\n    cin>>a;\r\n    if(a>=0&&a<=2000)\r\n    {\r\n        cout<<\"Isento\"<<endl;\r\n    }\r\n    else if(a>2000&&a<=3000)\r\n    {\r\n        cout<<\"R$ \"<<fixed<<setprecision(2)<<(a-2000)*0.08<<endl;\r\n    }\r\n    else if(a>3000&&a<=4500)\r\n    {\r\n        cout<<\"R$ \"<<fixed<<setprecision(2)<<(1000*0.08+(a-3000)*0.18)<<endl;\r\n    }\r\n    else if(a>4500)\r\n    {\r\n        cout<<\"R$ \"<<fixed<<setprecision(2)<<(1000*0.08+1500*0.18+(a-4500)*0.28)<<endl;\r\n    }\r\n}"
          }
        },
        {
          "id": "JD029",
          "title": "石砖偶数",
          "url": "http://www.xmuoj.com/contest/359/problem/JD029/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>千层塔第一层。墙上刻着一排编号从1到100的石砖。赵晴儿说：「把所有偶数编号的石砖挑出来，每行报一个。」</p>",
          "inputDescription": "<p>无输入。</p>",
          "outputDescription": "<p>输出全部偶数，每个偶数占一行。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/710/\" target=\"_blank\">原题链接</a>for循环从2开始，步长为2，到100结束。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/029.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    for(int i=2;i<=100;i+=2)\r\n    {\r\n        cout<<i<<endl;\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD030",
          "title": "奇数石砖",
          "url": "http://www.xmuoj.com/contest/359/problem/JD030/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>千层塔第二层。墙上有一排编号从1到X的石砖。梁嘉峰指着石砖说：「把所有奇数编号的报出来。」</p>",
          "inputDescription": "<p>一个正整数X。</p>",
          "outputDescription": "<p>每行一个奇数，从1到X（含）。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/711/\" target=\"_blank\">原题链接</a>for循环从1开始，步长为2，到X结束。如果X是偶数，最后一个奇数是X-1。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/030.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int X;\r\n    cin>>X;\r\n    for(int i=1;i<=X;i+=2)\r\n    {\r\n        cout<<i<<endl;\r\n    }\r\n}"
          }
        },
        {
          "id": "JD031",
          "title": "反复之门",
          "url": "http://www.xmuoj.com/contest/359/problem/JD031/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>千层塔的某一层有一扇不断重复的门。每次门前出现一个数X：如果X不为0，就从1数到X；如果X为0，修炼结束。</p>",
          "inputDescription": "<p>若干行，每行一个整数X。以0结束。</p>",
          "outputDescription": "<p>对每个非零的X，输出1到X，每行一个数。每组之间空一行。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/714/\" target=\"_blank\">原题链接</a>外层while循环读入X，遇到0停止。内层for循环从1到X输出。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/031.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int n;\r\n    cin>>n;\r\n    while(n!=0)\r\n    {\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            if(i>1)cout<<\" \";\r\n            cout<<i;\r\n        }\r\n        cout<<endl;\r\n        cin>>n;\r\n    }\r\n}"
          }
        },
        {
          "id": "JD032",
          "title": "六奇连珠",
          "url": "http://www.xmuoj.com/contest/359/problem/JD032/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰递给李少白一个数X：「从X之后开始，找出6个连续的奇数，一个一个报给我。」</p>",
          "inputDescription": "<p>一个整数X。</p>",
          "outputDescription": "<p>从X之后开始的6个连续奇数，每行一个。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/716/\" target=\"_blank\">原题链接</a>如果X是奇数，从X+2开始；如果X是偶数，从X+1开始。循环6次，每次加2。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/032.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int X;\r\n    cin>>X;\r\n    if(X%2==0)X+=1;\r\n    for(int i=0;i<6;i++)\r\n    {\r\n        cout<<X<<endl;\r\n        X+=2;\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD033",
          "title": "正数清点",
          "url": "http://www.xmuoj.com/contest/359/problem/JD033/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿递给李少白6个测量数据，有的是正数有的是负数。她问：「这里面有几个正数？」</p>",
          "inputDescription": "<p>6行，每行一个浮点数。</p>",
          "outputDescription": "<p>输出正数的个数，格式为 `X valores positivos`。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/718/\" target=\"_blank\">原题链接</a>循环读入6个数，用if判断是否&gt;0，计数器累加。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/033.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a;\r\n    int n=6,count=0;\r\n    while(n--)\r\n    {\r\n        cin>>a;\r\n        if(a>0)count++;\r\n    }\r\n    cout<<count<<\" positive numbers\"<<endl;\r\n}"
          }
        },
        {
          "id": "JD034",
          "title": "余数寻踪",
          "url": "http://www.xmuoj.com/contest/359/problem/JD034/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰写下了一个数N：「从1到10000，把所有除以N余数为2的数报给我。」</p>",
          "inputDescription": "<p>一个整数N（N&gt;2）。</p>",
          "outputDescription": "<p>每行一个数，从1到10000中除以N余2的数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/723/\" target=\"_blank\">原题链接</a>for循环从1到10000，if i%N==2则输出。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/034.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    if(N>9998)return 0;\r\n    for(int i=1;i<=10000;i++)\r\n    {\r\n        if(i%N==2) cout<<i<<endl;\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD035",
          "title": "区间计数",
          "url": "http://www.xmuoj.com/contest/359/problem/JD035/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿递给李少白N个测量数据，让他数一数有多少个落在[10,20]这个区间内。</p>",
          "inputDescription": "<p>第一行一个整数N。第二行N个整数。</p>",
          "outputDescription": "<p>第一行输出 X in，X为区间内个数。第二行输出 Y out，Y为区间外个数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/722/\" target=\"_blank\">原题链接</a>循环读入，判断是否 10≤X≤20，计数器累加。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/035.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N, x;\r\n    cin>>N;\r\n    int count=0;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cin>>x;\r\n        if(x>=10&&x<=20)\r\n        {\r\n            count++;\r\n        }\r\n    }\r\n    cout<<count<<\" in\"<<endl;\r\n    cout<<N-count<<\" out\"<<endl;\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD036",
          "title": "奇数求和",
          "url": "http://www.xmuoj.com/contest/359/problem/JD036/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在墙上刻了两个数X和Y，让李少白算出X和Y之间（不含X和Y）所有奇数的和。</p>",
          "inputDescription": "<p>一行，两个整数X和Y（X</p>",
          "outputDescription": "<p>输出X和Y之间所有奇数的和。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/726/\" target=\"_blank\">原题链接</a>从X+1到Y-1循环，判断每个数是否为奇数，是则累加。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/036.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int X,Y,temp,sum=0;\r\n    cin>>X>>Y;\r\n    if(X>Y)\r\n    {\r\n        temp=X;\r\n        X=Y;\r\n        Y=temp;\r\n    }\r\n    if(X%2!=0)\r\n    {\r\n        X++;\r\n    }\r\n    for(int i=X+1;i<Y;i+=2)\r\n    {\r\n        sum+=i;\r\n    }\r\n    cout<<sum<<endl;\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD037",
          "title": "数链连珠",
          "url": "http://www.xmuoj.com/contest/359/problem/JD037/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰写下了一个起始整数A，又在第二行写了一串数。第二行里第一个正数就是N。请算出从A开始的N个连续整数的和。</p>",
          "inputDescription": "<p>第一行：整数A。第二行：若干整数，第一个大于0的数才是N。</p>",
          "outputDescription": "<p>从A开始N个连续整数之和。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/725/\" target=\"_blank\">原题链接</a>A固定，第二行跳过负数和零找N。从A开始循环N次累加。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/037.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A,sum=0;\r\n    cin>>A;\r\n    int n;\r\n    cin>>n;\r\n    while(!(n>0))\r\n    {\r\n        cin>>n;\r\n    }\r\n    for(int i=A,j=0;j<n;i++,j++)\r\n    {\r\n        sum+=i;\r\n    }\r\n    cout<<sum<<endl;\r\n    return 0;\r\n}\r\n"
          }
        },
        {
          "id": "JD038",
          "title": "石中之王",
          "url": "http://www.xmuoj.com/contest/359/problem/JD038/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>练功场上摆了一排石块，每块上面刻着一个数。赵晴儿让李少白找到最大的数，并说出它是第几块（从1开始计数）。</p>",
          "inputDescription": "<p>第一行一个整数N，表示石块数量。第二行N个整数。</p>",
          "outputDescription": "<p>输出最大值和它的位置，格式见样例。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/712/\" target=\"_blank\">原题链接</a>遍历时同时记录最大值和位置。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/038.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    vector<int>a;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        int x;\r\n        cin>>x;\r\n        a.push_back(x);\r\n    }\r\n    int num=0,max=-1000;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        if(a[i]>max)\r\n        {\r\n            max=a[i];\r\n            num=i;\r\n        }\r\n    }\r\n    cout<<max<<endl<<num+1<<endl;\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD039",
          "title": "约数寻踪",
          "url": "http://www.xmuoj.com/contest/359/problem/JD039/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上写下一个数N：「找出它的所有约数，从小到大列出来。」</p>",
          "inputDescription": "<p>一个正整数N。</p>",
          "outputDescription": "<p>每行一个约数，从小到大。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/713/\" target=\"_blank\">原题链接</a>从1到N循环，如果N%i==0则i是约数。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/039.cpp",
            "language": "cpp",
            "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin>>N;\n    for(int i=1;i<=N;i++)\n    {\n        if(N%i==0)\n        {\n            cout<<i<<endl;\n        }\n    }\n    return 0;\n}\n"
          }
        },
        {
          "id": "JD040",
          "title": "九九归真",
          "url": "http://www.xmuoj.com/contest/359/problem/JD040/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿教李少白背乘法口诀。她写下一个数N，让李少白从1乘到10，按格式列出N的乘法表：「i x N = i*N」。</p>",
          "inputDescription": "<p>一个整数N。</p>",
          "outputDescription": "<p>10行，格式为 `i x N = i*N`。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/720/\" target=\"_blank\">原题链接</a>for循环从1到10，每次输出i x N = i*N。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/040.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    for(int i=1;i<=10;i++)\r\n    {\r\n        cout<<i<<\" x \"<<N<<\" = \"<<i*N<<endl;\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD041",
          "title": "千层阵列",
          "url": "http://www.xmuoj.com/contest/359/problem/JD041/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>千层塔的一面墙上刻着N行M列的数字阵列，每行从1开始递增，但每逢第M个位置不写数字，写SWORD。赵晴儿让李少白按这个规律把整个阵列报出来。</p>",
          "inputDescription": "<p>一行，两个整数N和M。</p>",
          "outputDescription": "<p>N行，每行M个值，最后一个用SWORD代替，值之间用空格隔开。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/717/\" target=\"_blank\">原题链接</a>嵌套循环，外层控制行，内层控制列。每行第M个位置输出SWORD。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/041.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int N,M;\r\n    cin>>N>>M;\r\n    int j=1,num=0;\r\n    for(int i=1;i<=N;i++){\r\n        num=0;\r\n        while(num<M-1)\r\n        {\r\n            cout<<j<<\" \";\r\n            num++;\r\n            j++;\r\n        }\r\n        cout<<\"SWORD\"<<endl;\r\n        j++;\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD042",
          "title": "兵刃统计",
          "url": "http://www.xmuoj.com/contest/359/problem/JD042/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>演武场上，弟子们正在操练。李少白走过一排兵器架，记录了N次观察：每次看到一件兵器，C代表剑，R代表刀，F代表枪。赵晴儿让他统计每种兵器出现了多少把，以及各自的占比。</p>",
          "inputDescription": "<p>第一行一个整数N。接下来N行，每行一个整数（数量）和一个字符（C/R/F），分别表示某次看到的兵器数量和类型。</p>",
          "outputDescription": "<p>第一行输出 Total: X weapons（总数量）。接下来三行输出每种兵器的总数：Total swords: X、Total blades: X、Total spears: X。最后三行输出各自占比：Percentage of swords: XX.XX % 等，保留两位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/715/\" target=\"_blank\">原题链接</a>三个计数器分别累加C、R、F的数量。注意每行先读数量再读类型。总数 = 所有数量之和。占比 = 各类数量 / 总数 × 100%，保留两位小数。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/042.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin >> N; \r\n    int total = 0;\r\n    int swords = 0;\r\n    int blades = 0; \r\n    int spears = 0;    \r\n    for(int i = 0; i < N; i++)\r\n    {\r\n        int count;\r\n        char type;\r\n        cin >> count >> type;  \r\n        total += count;\r\n        if(type == 'C')\r\n        {\r\n            swords += count;\r\n        }\r\n        else if(type == 'R')\r\n        {\r\n            blades += count;\r\n        }\r\n        else if(type == 'F')\r\n        {\r\n            spears += count;\r\n        }\r\n    }\r\n    double percentC =(double)swords / total * 100;\r\n    double percentR =(double)blades / total * 100;\r\n    double percentF =(double)spears / total * 100;\r\n    cout << \"Total: \" << total << \" weapons\" << endl;\r\n    cout << \"Total swords: \" << swords << endl;\r\n    cout << \"Total blades: \" << blades << endl;\r\n    cout << \"Total spears: \" << spears << endl;\r\n    cout << fixed << setprecision(2);\r\n    cout << \"Percentage of swords: \" << percentC << \" %\" << endl;\r\n    cout << \"Percentage of blades: \" << percentR << \" %\" << endl;\r\n    cout << \"Percentage of spears: \" << percentF << \" %\" << endl;\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD043",
          "title": "正剑除邪",
          "url": "http://www.xmuoj.com/contest/359/problem/JD043/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>练功房的石板上有10道剑气留下的痕迹，每道痕迹上刻着一个数。其中有些数带着邪气（负数或零），梁嘉峰让李少白运起纯阳内力，把这些不纯正的数全部净化，替换成1——象征正气归于一元。</p>",
          "inputDescription": "<p>一行，10个整数，用空格隔开。</p>",
          "outputDescription": "<p>替换后的10个数，每行格式为 `X[i] = 值`。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/739/\" target=\"_blank\">原题链接</a>遍历数组，将≤0的元素替换为1。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/043.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int x[10];\r\n    for(int i=0;i<10;i++){\r\n        cin>>x[i];\r\n    }\r\n    for(int i=0;i<10;i++)\r\n    {\r\n        // if(i<9)\r\n        // {\r\n            if(x[i]<=0)\r\n            {cout<<\"X[\"<<i<<\"] = \"<<1<<endl;}\r\n            else\r\n            {cout<<\"X[\"<<i<<\"] = \"<<x[i]<<endl;}\r\n        // }\r\n        // else\r\n        // {\r\n        //     if(x[i]<0)\r\n        //     {cout<<\"x[\"<<i<<\"] = \"<<1;}\r\n        //     else\r\n        //     {cout<<\"x[\"<<i<<\"] = \"<<x[i];}\r\n        // }\r\n    }\r\n\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD044",
          "title": "翻倍剑阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD044/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上布下一个翻倍剑阵。她说：「以第一个数为起点，后面每个数都是前一个的两倍。内力如此，出剑亦是如此——一重更比一重强。」</p>",
          "inputDescription": "<p>一个整数V。</p>",
          "outputDescription": "<p>10行，格式为 `N[i] = X`。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/740/\" target=\"_blank\">原题链接</a>N[0]=V，循环N[i]=N[i-1]*2。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/044.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int V;\r\n    cin >> V; \r\n    for(int i = 0; i < 10; i++)\r\n    {\r\n        cout << \"N[\" << i << \"] = \" << V << endl;\r\n        V = V * 2;\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD045",
          "title": "剑中取精",
          "url": "http://www.xmuoj.com/contest/359/problem/JD045/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>沙盘上散落着100把长剑，每把剑上刻着一个数，代表剑的品级。赵晴儿让李少白从中挑出品级不超过10的精良之剑，逐一记录。</p>",
          "inputDescription": "<p>100个浮点数。</p>",
          "outputDescription": "<p>按顺序输出所有≤10的元素，每行格式为 `A[i] = X`（保留一位小数）。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/741/\" target=\"_blank\">原题链接</a>遍历数组，if元素≤10则输出。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/045.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double A[100];   \r\n    for(int i = 0; i < 100; i++)\r\n    {\r\n        cin >> A[i];\r\n    }  \r\n    cout << fixed << setprecision(1);\r\n    for(int i = 0; i < 100; i++)\r\n    {\r\n        if(A[i] <= 10)\r\n        {\r\n            cout << \"A[\" << i << \"] = \" << A[i] << endl;\r\n        }\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD046",
          "title": "剑阵倒转",
          "url": "http://www.xmuoj.com/contest/359/problem/JD046/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>沙盘上的剑阵需要倒转方向——第一把剑和最后一把交换，第二把和倒数第二把交换。梁嘉峰说：「攻守易位，前后颠倒。」</p>",
          "inputDescription": "<p>20个整数。</p>",
          "outputDescription": "<p>翻转后的20个数，每行格式为 `N[i] = X`。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/745/\" target=\"_blank\">原题链接</a>双指针从两端向中间交换。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/046.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int a[20];\r\n    for(int i = 0; i < 20; i++)\r\n    {\r\n        cin >> a[i];\r\n    }\r\n    int temp;\r\n    for(int i=0;i<=9;i++)\r\n    {\r\n        temp=a[i];\r\n        a[i]=a[19-i];\r\n        a[19-i]=temp;\r\n    }\r\n    for(int i = 0; i < 20; i++)\r\n    {\r\n        cout << \"N[\" << i << \"] = \" << a[i] << endl;\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD047",
          "title": "剑锋所指",
          "url": "http://www.xmuoj.com/contest/359/problem/JD047/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>练功场上一排木桩，每根木桩上刻着一个数。赵晴儿让他找到最矮的那根木桩——剑锋所向，以弱制动。找到最小值并说出它的位置（从0开始计数）。</p>",
          "inputDescription": "<p>第一行一个整数N。第二行N个整数。</p>",
          "outputDescription": "<p>第一行输出 <code>Menor valor: X</code>，第二行输出 <code>Posicao: P</code>，其中P为最小值的下标（从0开始计数）。若最小值出现多次，输出第一次出现的位置。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/742/\" target=\"_blank\">原题链接</a>遍历时记录当前最小值和位置。注意位置从0开始计数。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/047.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin >> N;   \r\n    int minVal;\r\n    int minPos = 0;   \r\n    for(int i = 0; i < N; i++)\r\n    {\r\n        int num;\r\n        cin >> num;\r\n        if(i == 0 || num < minVal)\r\n        {\r\n            minVal = num;\r\n            minPos = i;\r\n        }\r\n    }\r\n    cout << \"Menor valor: \" << minVal << endl;\r\n    cout << \"Posicao: \" << minPos << endl;\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD048",
          "title": "二气相生",
          "url": "http://www.xmuoj.com/contest/359/problem/JD048/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上画出两道气旋：「阴阳二气，交替相生。第一气为0，第二气为1，此后每气皆为前二气之和。只用两个变量，算出第N气。」其中F(0)=0，F(1)=1，F(N)=F(N-1)+F(N-2)。</p>",
          "inputDescription": "<p>一个整数N。</p>",
          "outputDescription": "<p>一个整数，即第N个斐波那契数F(N)。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/743/\" target=\"_blank\">原题链接</a>两个变量滚动：a,b = b,a+b。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/048.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    long long a=0,b=1,N,num=0;\r\n    cin >>N;\r\n    if(N==0)\r\n    {\r\n        cout << 0 << endl;\r\n        return 0;\r\n    }\r\n    if(N==1)\r\n    {\r\n        cout << 1 << endl;\r\n        return 0;\r\n    }\r\n    for(long long i=2;i<=N;i++)\r\n    {\r\n        num=a+b;\r\n        a=b;\r\n        b=num;\r\n        \r\n    }\r\n    cout << num << endl;\r\n    return 0;\r\n}\r\n//F1=0\r\n//F2=0+1\r\n//F3=1+1\r\n//F4=1+2\r\n//F5=2+3"
          }
        },
        {
          "id": "JD049",
          "title": "斐波剑诀",
          "url": "http://www.xmuoj.com/contest/359/problem/JD049/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿展开一卷古剑谱，上面记载着斐波那契剑诀：0, 1, 1, 2, 3, 5, 8, 13……「每一式都是前两式的融合。T次问询，每次报出第N式。」</p>",
          "inputDescription": "<p>一个整数N。</p>",
          "outputDescription": "<p>一行，前N个斐波那契数，空格隔开。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/744/\" target=\"_blank\">原题链接</a>预处理斐波那契数组到60，查询时直接取值。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/049.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    long long N;\r\n    cin >>N;\r\n    vector<long long>a;\r\n    a.push_back(0);\r\n    a.push_back(1);\r\n    for(int i=2;i<=N;i++)\r\n    {\r\n        long long temp;\r\n        temp=a[i-1]+a[i-2];\r\n        a.push_back(temp);\r\n    }\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cout << a[i] << \" \";\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD050",
          "title": "列阵求和",
          "url": "http://www.xmuoj.com/contest/359/problem/JD050/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在沙盘上画了一个数字阵列：「从M到N，全部列出来，再算和。如果M比N大，先交换。」李少白从M一路数到N，把每个数刻在石板上。</p>",
          "inputDescription": "<p>若干行，每行两个整数M和N。当M和N均为非正数（≤0）时结束输入。</p>",
          "outputDescription": "<p>对每组M和N，从小到大输出M到N之间的所有整数（空格隔开），最后输出 <code>Sum=X</code>（X为这些数的和）。每组输出占一行。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/746/\" target=\"_blank\">原题链接</a>若M&gt;N则先交换。注意：结束条件为两个数均≤0（测试用例可能用0 0或-1 -1）。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/050.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int M, N; \r\n    while(cin >> M >> N)\r\n    {\r\n        if(M <= 0 && N <= 0)\r\n        {\r\n            break;\r\n        }\r\n        if(M > N)\r\n        {\r\n            int temp = M;\r\n            M = N;\r\n            N = temp;\r\n        }\r\n        int sum = 0;\r\n        for(int i = M; i <= N; i++)\r\n        {\r\n            cout << i;\r\n            if(i < N) cout << \" \";  // 最后一个数字后面不加空格\r\n            sum += i;\r\n        }\r\n        cout << \" Sum=\" << sum << endl;\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD051",
          "title": "剑行取道",
          "url": "http://www.xmuoj.com/contest/359/problem/JD051/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>沙盘上一个12×12的剑阵，赵晴儿指着其中一行：「这一行的所有剑，力量之和是多少？或平均力量？」李少白逐格检视。</p>",
          "inputDescription": "<p>第一行一个整数L（0~11，表示行号）。第二行一个字符（S或M）。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出该行的和或平均值，保留一位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/719/\" target=\"_blank\">原题链接</a>遍历指定行，根据操作类型求和或求平均。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/051.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()//测试案例存在问题\r\n{\r\n    int L;\r\n    char op;\r\n    cin >> L >> op;\r\n    double a[12][12];\r\n    for(int i = 0; i < 12; i++)\r\n    {\r\n        for(int j = 0; j < 12; j++)\r\n        {\r\n            cin >> a[i][j];\r\n        }\r\n    }\r\n    double sum = 0;\r\n    for(int j = 0; j < 12; j++)\r\n    {\r\n        sum += a[L][j];\r\n    }\r\n    cout << fixed << setprecision(1);\r\n    if(op == 'S')\r\n    {\r\n        cout << sum << endl;\r\n    }\r\n    else if(op == 'M')\r\n    {\r\n        cout << sum / 12 << endl;\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD052",
          "title": "剑列纵横",
          "url": "http://www.xmuoj.com/contest/359/problem/JD052/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿又指向剑阵的其中一列：「纵览此列，算其力量。」李少白沿着列的方向逐行检视。</p>",
          "inputDescription": "<p>第一行一个整数C（0~11，表示列号）。第二行一个字符（S或M）。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出该列的和或平均值，保留一位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/724/\" target=\"_blank\">原题链接</a>遍历所有行取指定列元素。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/052.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <iomanip>\r\nusing namespace std;\r\nint main() {\r\n    int C;\r\n    char mode;\r\n    cin >> C >> mode;\r\n    double sum = 0.0;\r\n    double val;\r\n    for (int i = 0; i < 12; i++) {\r\n        for (int j = 0; j < 12; j++) {\r\n            cin >> val;\r\n            if (j == C) {\r\n                sum += val;\r\n            }\r\n        }\r\n    }    \r\n    if (mode == 'S') {\r\n        cout << fixed << setprecision(1) << sum << endl;\r\n    } else if(mode == 'M') {\r\n        cout << fixed << setprecision(1) << sum / 12.0 << endl;\r\n    }\r\n       return 0;\r\n}"
          }
        },
        {
          "id": "JD053",
          "title": "完璧归宗",
          "url": "http://www.xmuoj.com/contest/359/problem/JD053/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上写下「完璧」二字：「完璧之数，等于它的所有真因子之和。譬如6=1+2+3。找到不超过N的所有完璧之数，以印证归宗之意。」</p>",
          "inputDescription": "<p>一个整数N。</p>",
          "outputDescription": "<p>每行输出一个不超过N的完全数（从小到大）。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/727/\" target=\"_blank\">原题链接</a>对每个数找所有真因子求和，等于自身则是完全数。注意优化：枚举因子只需到 sqrt(X)，利用约数成对出现的性质。1 不是完全数。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/053.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cmath>\r\nusing namespace std;\r\ntypedef long long LL;\r\n// bool isPrime(LL n)\r\n// {\r\n//     if(n<2)return false;\r\n//     else if(n==2)return true;\r\n//     else if(n%2==0)return false;\r\n//     double m=sqrt(n);\r\n//     for(int i=3;i<=m;i+=2)\r\n//     {\r\n//         if(n%i==0)return false;\r\n//     }\r\n//     return true;\r\n\r\n// }\r\n#include <iostream>\r\nusing namespace std;\r\ntypedef long long LL;\r\n\r\nint main() {\r\n    LL N;\r\n    cin >> N;\r\n    if (N >= 6) cout << 6 << endl;\r\n    if (N >= 28) cout << 28 << endl;\r\n    if (N >= 496) cout << 496 << endl;\r\n    if (N >= 8128) cout << 8128 << endl;\r\n    if (N >= 33550336) cout << 33550336 << endl;\r\n    if (N >= 8589869056LL) cout << 8589869056LL << endl;\r\n    if (N >= 137438691328LL) cout << 137438691328LL << endl;\r\n    if (N >= 2305843008139952128LL) cout << 2305843008139952128LL << endl;\r\n    \r\n    return 0;\r\n}\r\n//主包过不了，以后再看……\r\n\r\n\r\n//超出时长，无法通过……\r\n// int main() \r\n// {\r\n//     LL N;\r\n//     cin >> N;\r\n//     for (LL i = 2; i <= N; i+=2) {\r\n//         if(isPrime(i))continue;\r\n//         LL sum = 1;\r\n//         LL m=sqrt(i);\r\n//         for (int j = 2; j <= m; j++) {\r\n//             if (i % j == 0) {\r\n//                 sum += j;   \r\n//                 if(j!=i/j)\r\n//                 sum+=i/j;\r\n//             }\r\n//         }\r\n//         if (sum == i) {\r\n//             cout << i << endl;\r\n//         }\r\n    \r\n//     }\r\n//     return 0;\r\n// }"
          }
        },
        {
          "id": "JD054",
          "title": "剑意之质",
          "url": "http://www.xmuoj.com/contest/359/problem/JD054/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在沙盘上点出几枚剑棋：「天下剑法，有些可以拆分化简，有些不可再分，乃剑意之基石。这些不可拆分的棋位——只能被1和自己整除的数——就是剑意之质。排出2到N之间所有的剑意质数。」</p>",
          "inputDescription": "<p>一个整数N。</p>",
          "outputDescription": "<p>输出2到N之间所有的质数，每行一个。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/728/\" target=\"_blank\">原题链接</a>对每个数从2到√n试除。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/054.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<cmath>\r\nusing namespace std;\r\ntypedef long long LL;\r\nbool isPrime(LL n)\r\n{\r\n    if(n==1)return false;\r\n    else if(n==2)return true;\r\n    else if(n%2==0&&n!=2)return false;\r\n    //double m=sqrt(n);\r\n    for(LL i=3;i*i<=n;i++)\r\n    {\r\n        if(n%i==0)return false;\r\n    }\r\n    return true;\r\n}\r\n int main()\r\n {\r\n    LL N;\r\n    cin>>N;\r\n    for(LL i=2;i<=N;i++)\r\n    {\r\n        if(isPrime(i))\r\n            cout<<i<<endl;\r\n    }\r\n }\r\n"
          }
        },
        {
          "id": "JD055",
          "title": "上方剑域",
          "url": "http://www.xmuoj.com/contest/359/problem/JD055/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白来到十二宫剑阵的第一宫——乾宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护乾宫的剑灵凌空画出一道剑气光幕，说道：<blockquote>「此乃乾宫剑阵之<strong>上方剑域</strong>。两条对角线将方阵切为上下左右四块。上方区域位于两条对角线的<strong>上方交汇处</strong>——即行号小于列号（i &lt; j），且行号加列号之和小于 11（i + j &lt; 11）的格子。此处灵力承天位之力，主攻正前方。尔需计算此域所有灵力之和——或取其均值——方可破阵。」</blockquote>第一行输入一个大写字母：<strong>S</strong> 求和，<strong>M</strong> 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留<strong>一位小数</strong>。</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/747/\" target=\"_blank\">原题链接</a>先读操作类型（S求和/M求平均），再判断行号。上方区域即i</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/055.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j<11&&i<j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}"
          }
        },
        {
          "id": "JD056",
          "title": "下方剑域",
          "url": "http://www.xmuoj.com/contest/359/problem/JD056/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白来到十二宫剑阵的第二宫——坤宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护坤宫的剑灵指向光幕下方，说道：<blockquote>「此乃坤宫剑阵之<strong>下方剑域</strong>。两条对角线将方阵切为上下左右四块。下方区域位于两条对角线的<strong>下方交汇处</strong>——即行号大于列号（i &gt; j），且行号加列号之和大于 11（i + j &gt; 11）的格子。此处灵力承地脉之气，势沉力猛。尔需计算此域所有灵力之和——或取其均值——方可破阵。」</blockquote>第一行输入一个大写字母：<strong>S</strong> 求和，<strong>M</strong> 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留<strong>一位小数</strong>。</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/749/\" target=\"_blank\">原题链接</a>下方区域即i&gt;j的元素。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/056.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j>11&&i>j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}"
          }
        },
        {
          "id": "JD057",
          "title": "左方剑域",
          "url": "http://www.xmuoj.com/contest/359/problem/JD057/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白来到十二宫剑阵的第三宫——震宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护震宫的剑灵指向光幕左侧，说道：<blockquote>「此乃震宫剑阵之<strong>左方剑域</strong>。两条对角线将方阵切为上下左右四块。左方区域位于两条对角线的<strong>左侧交汇处</strong>——即行号大于列号（i &gt; j），且行号加列号之和小于 11（i + j &lt; 11）的格子。此处灵力守青龙之位，主防御。尔需计算此域所有灵力之和——或取其均值——方可破阵。」</blockquote>第一行输入一个大写字母：<strong>S</strong> 求和，<strong>M</strong> 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留<strong>一位小数</strong>。</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/751/\" target=\"_blank\">原题链接</a>左方区域即满足j &lt; i && i + j &lt; 11的元素（主对角线下且反对角线上）。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/057.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j<11&&i>j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}"
          }
        },
        {
          "id": "JD058",
          "title": "右方剑域",
          "url": "http://www.xmuoj.com/contest/359/problem/JD058/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白来到十二宫剑阵的第四宫——巽宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护巽宫的剑灵指向光幕右侧，说道：<blockquote>「此乃巽宫剑阵之<strong>右方剑域</strong>。两条对角线将方阵切为上下左右四块。右方区域位于两条对角线的<strong>右侧交汇处</strong>——即行号小于列号（i &lt; j），且行号加列号之和大于 11（i + j &gt; 11）的格子。此处灵力据白虎之位，主进攻。尔需计算此域所有灵力之和——或取其均值——方可破阵。」</blockquote>第一行输入一个大写字母：<strong>S</strong> 求和，<strong>M</strong> 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留<strong>一位小数</strong>。</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/753/\" target=\"_blank\">原题链接</a>右方区域即满足j &gt; i && i + j &gt; 11的元素（主对角线上且反对角线下）。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/058.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j>11&&i<j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}"
          }
        },
        {
          "id": "JD059",
          "title": "右上剑角",
          "url": "http://www.xmuoj.com/contest/359/problem/JD059/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白来到十二宫剑阵的第五宫——离宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护离宫的剑灵指向沙盘右上，说道：<blockquote>「此乃离宫剑阵之<strong>右上剑角</strong>。仅以主对角线为界——右上区域即所有行号小于列号（i &lt; j）的格子，主对角线右上方的那一半。此处为天乾之位，日升之处，剑势腾空而起。尔需计算此角所有灵力之和——或取其均值——方可破阵。」</blockquote>第一行输入一个大写字母：<strong>S</strong> 求和，<strong>M</strong> 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留<strong>一位小数</strong>。</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出右上半部分的和或平均值，保留一位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/755/\" target=\"_blank\">原题链接</a>右上部分即j&gt;i的元素。S求和，M求平均。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/059.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i<j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}"
          }
        },
        {
          "id": "JD060",
          "title": "左上剑角",
          "url": "http://www.xmuoj.com/contest/359/problem/JD060/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白来到十二宫剑阵的第六宫——坎宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护坎宫的剑灵指向沙盘左上，说道：<blockquote>「此乃坎宫剑阵之<strong>左上剑角</strong>。仅以副对角线为界——左上区域即所有行号加列号之和小于 11（i + j &lt; 11）的格子，副对角线左上方的那一半。此处为天坤之位，月落之处，剑气如新月之弧。尔需计算此角所有灵力之和——或取其均值——方可破阵。」</blockquote>第一行输入一个大写字母：<strong>S</strong> 求和，<strong>M</strong> 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留<strong>一位小数</strong>。</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/750/\" target=\"_blank\">原题链接</a>左上部分即i+j&lt;11的元素。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/060.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j<11)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}"
          }
        },
        {
          "id": "JD061",
          "title": "右下剑角",
          "url": "http://www.xmuoj.com/contest/359/problem/JD061/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白来到十二宫剑阵的第七宫——艮宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护艮宫的剑灵指向沙盘右下，说道：<blockquote>「此乃艮宫剑阵之<strong>右下剑角</strong>。仅以副对角线为界——右下区域即所有行号加列号之和大于 11（i + j &gt; 11）的格子，副对角线右下方的那一半。此处为地乾之位，日落之处，剑势如残阳下沉。尔需计算此角所有灵力之和——或取其均值——方可破阵。」</blockquote>第一行输入一个大写字母：<strong>S</strong> 求和，<strong>M</strong> 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留<strong>一位小数</strong>。</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/748/\" target=\"_blank\">原题链接</a>右下部分即满足i + j &gt; 11的元素（反对角线以下）。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/061.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j>11)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}"
          }
        },
        {
          "id": "JD062",
          "title": "左下剑角",
          "url": "http://www.xmuoj.com/contest/359/problem/JD062/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白来到十二宫剑阵的第六宫——坤宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护坤宫的剑灵指向地面，说道：<blockquote>「此乃坤宫剑阵。从西北到东南，一条主对角线将方阵一分为二。对角线之<strong>左下方</strong>（即行号大于列号的格子），是为地坤之位。此处灵力如初月升空，自下而上，自左而右，渐次铺展。尔需计算此区域所有灵力之和——或取其均值——方可破阵。」</blockquote>具体来说：一个 12×12 的方阵，行号 i 和列号 j 均从 0 到 11（或从 1 到 12）。左下区域定义为所有满足 <strong>i &gt; j</strong>（行号严格大于列号）的格子，即主对角线以下的部分。如下图所示（绿色区域即为左下区域）：<pre style=\"font-family:monospace;background:#f5f5f5;padding:8px;line-height:1.3\">     列0 列1 列2 ...      列11\n行0   \\  .   .   .   .   .\n行1   绿  \\  .   .   .   .\n行2   绿  绿  \\  .   .   .\n ...  绿  绿  绿  \\  .   .\n行11  绿  绿  绿  绿  绿  \\\n</pre>第一行输入一个大写字母：<strong>S</strong> 表示求左下区域所有灵力之和，<strong>M</strong> 表示求平均值。接下来 12 行，每行 12 个浮点数，表示 12×12 剑阵中每个格子的灵力值。输出所求的和或平均值，<strong>保留一位小数</strong>。</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/752/\" target=\"_blank\">原题链接</a>左下部分即满足j &lt; i的元素（主对角线以下）。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/062.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i>j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}"
          }
        },
        {
          "id": "JD063",
          "title": "方圆初阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD063/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>「此乃方圆剑阵——最外圈剑气最淡，标记为1；往里一圈剑气渐浓，标记为2。」赵晴儿在沙盘上画出一圈圈剑芒，「到剑阵中心，剑气愈凝愈实。每一圈剑芒的强度，就是你离外界最远的那道剑气的距离。」</p>",
          "inputDescription": "<p>多行，每行一个整数N。N=0时结束。</p>",
          "outputDescription": "<p>每个N输出一个N阶矩阵，每个数字占3个字符宽度。每个矩阵后跟一个空行。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/754/\" target=\"_blank\">原题链接</a>每个位置的值 = min(i+1, j+1, N-i, N-j)，即到四条边的最小距离。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/063.cpp",
            "language": "cpp",
            "code": "#include <iostream>\n#include<iomanip>\nusing namespace std;\nint a[1001][1001];\nint N;\n\nint min(int a,int b,int c,int d)\n{\n    int m1=a>b?b:a;\n    int m2=c>d?d:c;\n    return m1>m2?m2:m1;\n}\n\nvoid handle(int N)\n{\n    for(int i=0;i<N;i++)\n    {\n        for(int j=0;j<N;j++)\n        {\n            a[i][j]=min(i+1,j+1,N-i,N-j);\n        }\n    }\n}\n\nint main() {\n    cin>>N;\n    while(N!=0)\n    {\n        handle(N);\n        for(int i=0;i<N;i++)\n        {\n            {\n                for(int j=0;j<N;j++)\n                cout<<setw(3)<<a[i][j];\n            }\n            cout<<endl;\n        }\n        cout<<endl;\n        cin>>N;\n    }\n    return 0;\n}\n"
          }
        },
        {
          "id": "JD064",
          "title": "镜像方阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD064/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>「此阵以主对角线为镜——镜中剑影，左右互映。」赵晴儿落下第一柄长剑，「主对角线上的剑势最强，为1；往右上和左下方逐次递减，如剑光在水面的倒影越远越淡。」</p>",
          "inputDescription": "<p>多行，每行一个整数N。N=0时结束。</p>",
          "outputDescription": "<p>每个N输出一个N阶矩阵，每个数字占3个字符宽度。每个矩阵后跟一个空行。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/756/\" target=\"_blank\">原题链接</a>M[i][j] = |i-j|+1。对角线为1，离对角线越远数越大。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/064.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include<cmath>\r\n#include<iomanip>\r\nusing namespace std;\r\nint a[1001][1001];\r\nint N;\r\nint main() {\r\n    cin>>N;\r\n    while(N!=0)\r\n    {\r\n        for(int i=0;i<N;i++)\r\n        {\r\n            {\r\n                for(int j=0;j<N;j++)\r\n                {\r\n                    a[i][j]=int(abs(i-j)+1);\r\n                    cout<<setw(3)<<a[i][j];\r\n                }\r\n            }\r\n            cout<<endl;\r\n        }\r\n        if(N!=0)cout<<endl;\r\n        cin>>N;\r\n        \r\n    }\r\n    return 0;\r\n}\r\n"
          }
        },
        {
          "id": "JD065",
          "title": "倍增方阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD065/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>「此阵每一格，剑气强度皆由剑气原点(0,0)倍增而来。」赵晴儿剑尖轻点沙盘，「位在(i,j)的剑势，强度为2的(i+j)次方。一生二，二生四，剑气倍增如潮水蔓延。」</p>",
          "inputDescription": "<p>多行，每行一个整数N（0≤N≤15）。N=0时结束。</p>",
          "outputDescription": "<p>每个N输出一个N阶矩阵，每行N个整数用空格隔开。每个矩阵后跟一个空行。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/757/\" target=\"_blank\">原题链接</a>M[i][j] = 2^(i+j)。用位运算 1&lt;&lt;(i+j) 或 pow函数。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/065.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cmath>  // 用于 pow\r\nusing namespace std;\r\n\r\nint main() {\r\n    int N;\r\n    while(cin >> N && N != 0) {\r\n        for(int i = 0; i < N; i++) {\r\n            for(int j = 0; j < N; j++) {\r\n                cout << (int)pow(2, i + j)<< \" \"; \r\n            }\r\n            cout << endl;\r\n        }\r\n        cout << endl;\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD066",
          "title": "蛇形剑阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD066/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>「剑阵蜿蜒如蛇，以身引气，气走周身。」赵晴儿在沙盘上画了一个n行m列的剑阵，「从左上角开始，依次填入从1到n×m的剑气。行到尽头便拐弯，似灵蛇折返。」</p>",
          "inputDescription": "<p>一行，两个整数n和m。</p>",
          "outputDescription": "<p>n行，每行m个整数用空格隔开。输出后跟一个空行。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/758/\" target=\"_blank\">原题链接</a>模拟蛇形遍历：右→下→左→上循环。维护四个边界。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/066.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\n//参考AcWing代码\r\nconst int N=200;\r\nint arr[N][N];\r\n\r\nint main()\r\n{\r\n    int n,m;\r\n    cin>>n>>m;\r\n    int dx[]={0,1,0,-1};\r\n    int dy[]={1,0,-1,0};\r\n    int x=0,y=0,d=0;\r\n    for(int i=1;i<=n*m;i++)\r\n    {\r\n        arr[x][y]=i;\r\n        int a=x+dx[d],b=y+dy[d];\r\n        if(a>=n||a<0||b<0||b>=m||arr[a][b])\r\n        {\r\n            d=(d+1)%4;//向右为1，向下为2，向左为3，向上为4\r\n            a=x+dx[d],b=y+dy[d];\r\n        }\r\n        x=a,y=b;\r\n    }\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        for(int j=0;j<m;j++)\r\n        {\r\n            cout<<arr[i][j]<<\" \";\r\n        }\r\n        cout<<endl;\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD067",
          "title": "古卷测长",
          "url": "http://www.xmuoj.com/contest/359/problem/JD067/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰递给李少白一卷竹简：「上面刻着一行字，告诉我它有多长。」</p>",
          "inputDescription": "<p>一行字符串（长度不超过100），可能包含空格。</p>",
          "outputDescription": "<p>输出字符串的实际长度。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/762/\" target=\"_blank\">原题链接</a>读入一行字符串（含空格），输出其长度。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/067.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    string a;\r\n    int i;\r\n    getline(cin,a);\r\n    for(i=0;a[i]!='\\0';i++)\r\n    {\r\n    \r\n    }\r\n    cout<<i<<endl;\r\n}"
          }
        },
        {
          "id": "JD068",
          "title": "密文留白",
          "url": "http://www.xmuoj.com/contest/359/problem/JD068/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>古卷上的字太密了，赵晴儿让李少白在每个字符后面加一个空格，方便辨认。</p>",
          "inputDescription": "<p>一行字符串（长度不超过100）。</p>",
          "outputDescription": "<p>每个字符后加一个空格输出（最后一个字符后也有空格）。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/767/\" target=\"_blank\">原题链接</a>遍历字符串，每个字符后输出一个空格。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/068.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n}"
          }
        },
        {
          "id": "JD069",
          "title": "墨迹遮字",
          "url": "http://www.xmuoj.com/contest/359/problem/JD069/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>古卷上有些字被墨迹遮住了，需要替换成&#039;#&#039;，露出可辨认的文字。</p>",
          "inputDescription": "<p>一行字符串（长度不超过100，全大写）。第二行一个字符，表示要替换的字符。</p>",
          "outputDescription": "<p>替换后的字符串。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/771/\" target=\"_blank\">原题链接</a>遍历字符串，遇到目标字符输出&#039;#&#039;，否则输出原字符。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/069.cpp",
            "language": "cpp",
            "code": "#include<iostream>//输入样例有误\r\n#include<string>\r\nusing namespace std;\r\nint main()\r\n{\r\n    string a;\r\n    char b;\r\n    cin>>a;\r\n    cin>>b;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]==b)a[i]='#';\r\n    }\r\n    cout<<a<<endl;\r\n}"
          }
        },
        {
          "id": "JD070",
          "title": "经文重构",
          "url": "http://www.xmuoj.com/contest/359/problem/JD070/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿递给李少白一段经文a，让他按规则重新构造一段经文b：每个位置b[i]的ASCII值等于a[i]和a[i+1]的ASCII值之和。</p>",
          "inputDescription": "<p>一行字符串a（长度3~100）。</p>",
          "outputDescription": "<p>构造后的字符串b。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/766/\" target=\"_blank\">原题链接</a>遍历a，b[i] = chr(ord(a[i]) + ord(a[i+1]))。最后一个用a[-1]和a[0]。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/070.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n\r\n\r\nint main()\r\n{\r\n    string a;\r\n    char b[200];\r\n    getline(cin,a);  \r\n    int i;\r\n    for(i=0;a[i+1]!='\\0';i++)\r\n    {\r\n        b[i]=a[i]+a[i+1];\r\n    }\r\n    b[i]=a[0]+a[i];\r\n    b[i+1]='\\0';\r\n    cout<<b;\r\n}"
          }
        },
        {
          "id": "JD071",
          "title": "密文数符",
          "url": "http://www.xmuoj.com/contest/359/problem/JD071/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿递给李少白一行密文，里面混着文字和数字。她说：「数一数有几个数字字符。」</p>",
          "inputDescription": "<p>一行字符（长度不超过100）。</p>",
          "outputDescription": "<p>输出其中数字字符（&#039;0&#039;~&#039;9&#039;）的个数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/763/\" target=\"_blank\">原题链接</a>遍历字符串，判断每个字符是否在&#039;0&#039;到&#039;9&#039;之间。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/071.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n\r\n\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);  \r\n    int count=0;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]>='0'&&a[i]<='9')\r\n            count++;\r\n    }\r\n    cout<<count<<endl;\r\n}"
          }
        },
        {
          "id": "JD072",
          "title": "拳掌对决",
          "url": "http://www.xmuoj.com/contest/359/problem/JD072/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白和师弟在练功间隙玩猜拳游戏。每人出 Scissors（剪刀）、Rock（石头）或 Paper（布），按照相克规则判断胜负：Rock 胜 Scissors，Scissors 胜 Paper，Paper 胜 Rock。</p>",
          "inputDescription": "<p>一行，两个字符串，分别表示 Player1 和 Player2 出的拳（Scissors、Rock 或 Paper）。</p>",
          "outputDescription": "<p>输出结果：Player1 赢输出 <code>Player1</code>，Player2 赢输出 <code>Player2</code>，平局输出 <code>Tie</code>。</p>",
          "hint": "<p>先判断双方是否相等（平局）。否则按相克规则判断：Rock 胜 Scissors，Scissors 胜 Paper，Paper 胜 Rock，构成一个循环克制链。<a href=\"https://www.acwing.com/problem/content/765/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/072.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    string a, b;\r\n    cin >> a >> b;\r\n    \r\n    if(a == b)\r\n        cout << \"Tie\" << endl;\r\n    else if((a == \"Rock\" && b == \"Scissors\") ||\r\n            (a == \"Scissors\" && b == \"Paper\") ||\r\n            (a == \"Paper\" && b == \"Rock\"))\r\n        cout << \"Player1\" << endl;\r\n    else\r\n        cout << \"Player2\" << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD073",
          "title": "经文加密",
          "url": "http://www.xmuoj.com/contest/359/problem/JD073/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>古卷需要加密保存。加密规则：每个字母后移一位（z→a），每个数字后移一位（9→0），其他字符不变。</p>",
          "inputDescription": "<p>一行字符串（长度不超过100）。</p>",
          "outputDescription": "<p>加密后的字符串。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/774/\" target=\"_blank\">原题链接</a>遍历字符串，对字母、数字分别做+1循环偏移，其他字符原样输出。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/073.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;//数字不加密！\r\n#include<string>\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]>='a'&&a[i]<='y'||a[i]>='A'&&a[i]<='Y'||a[i]>='0'&&a[i]<='8')\r\n            a[i]+=1;\r\n        else if(a[i]=='Z')a[i]='A';\r\n        else if(a[i]=='z')a[i]='a';\r\n        else if(a[i]=='9')a[i]='0';\r\n    }\r\n    cout<<a<<endl;\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD074",
          "title": "古卷替换",
          "url": "http://www.xmuoj.com/contest/359/problem/JD074/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>古卷上的某个词需要全部替换成另一个词。赵晴儿让李少白逐词核对。</p>",
          "inputDescription": "<p>三行：第一行原文字符串，第二行要替换的词A，第三行替换成的词B。</p>",
          "outputDescription": "<p>替换后的字符串。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/764/\" target=\"_blank\">原题链接</a>字符串替换函数，或按空格分割单词逐个比较替换。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/074.cpp",
            "language": "cpp",
            "code": "#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;//\n\nint main()\n{\n    string line, A, B;\n    getline(cin, line);\n    cin >> A >> B;\n\n    stringstream ss(line);\n    string word, result;\n    bool first = true;\n    while (ss >> word) {\n        if (!first) result += \" \";\n        if (word == A)\n            result += B;\n        else\n            result += word;\n        first = false;\n    }\n\n    cout << result << endl;\n    return 0;\n}\n"
          }
        },
        {
          "id": "JD075",
          "title": "寻最长词",
          "url": "http://www.xmuoj.com/contest/359/problem/JD075/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿指着古卷上的一句话：「找出最长的那个词。」</p>",
          "inputDescription": "<p>一行，以&#039;.&#039;结尾的英文句子（长度不超过500）。</p>",
          "outputDescription": "<p>最长的单词。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/769/\" target=\"_blank\">原题链接</a>按空格分割单词（去掉末尾的&#039;.&#039;），遍历比较长度。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/075.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\nint main()\r\n{\r\n    char a[501][20];\r\n    string str;\r\n    int count=0,b[501]={0};\r\n    getline(cin,str);\r\n    for(int i=0;str[i]!='\\0';i++)\r\n    {\r\n        for(int j=0;;j++,i++)\r\n        {\r\n            if(str[i]==' '||str[i]=='.'){\r\n                b[count++]=j;\r\n                str[i]='\\0';\r\n                break;\r\n            }\r\n            a[count][j]=str[i];\r\n        }\r\n    }\r\n    int max=-1,m=0;\r\n    for(int i=0;b[i]!=0;i++)\r\n    {\r\n        if(b[i]>max){\r\n            max=b[i];\r\n            m=i;\r\n        }\r\n    }\r\n    cout<<a[m]<<endl;\r\n}\r\n"
          }
        },
        {
          "id": "JD076",
          "title": "古卷插字",
          "url": "http://www.xmuoj.com/contest/359/problem/JD076/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰递给李少白两段古卷残篇，要把后一段插到前一段ASCII码最大的字符后面。</p>",
          "inputDescription": "<p>两行，第一行一个字符串str，第二行一个字符串substr。</p>",
          "outputDescription": "<p>每行输出插入后的字符串。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/775/\" target=\"_blank\">原题链接</a>找到str中ASCII码最大的字符（若有多个取最后一个），在其后面插入substr。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/076.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n#include<cstring>\r\nint main()\r\n{\r\n    string str,substr;\r\n    getline(cin,str);\r\n    getline(cin,substr);\r\n    char max='A' ;\r\n    int m=0,n=substr.length();\r\n    int len=str.length();\r\n    for(int i=0;str[i]!='\\0';i++)\r\n    {\r\n        if(str[i]>max)\r\n        {\r\n            max=str[i];\r\n            m=i;\r\n        }\r\n    } \\\r\n    str.resize(len+n); \r\n    //insert(max+1,substr);\r\n    for(int i=len;i>m;i--)\r\n    {\r\n        str[i+n]=str[i];\r\n    }\r\n    for(int i=m+1,j=0;substr[j]!='\\0';i++,j++)\r\n    {\r\n        str[i]=substr[j];\r\n    }\r\n    cout<<str;\r\n}"
          }
        },
        {
          "id": "JD077",
          "title": "独字寻踪",
          "url": "http://www.xmuoj.com/contest/359/problem/JD077/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>古卷上有些字重复出现，有些只出现一次。赵晴儿让李少白找到第一个只出现一次的字符。</p>",
          "inputDescription": "<p>一行只包含小写字母的字符串。</p>",
          "outputDescription": "<p>第一个只出现一次的字符，或&quot;no&quot;。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/772/\" target=\"_blank\">原题链接</a>先统计每个字符出现次数，再从头遍历找第一个次数为1的。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/077.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n#include<cstring>\r\nint main()\r\n{\r\n    string a;\r\n    int c[26]={0};\r\n    getline(cin,a);\r\n    char m;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        c[a[i]-'a']++;\r\n        \r\n    }\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(c[a[i]-'a']==1)\r\n        {\r\n            cout<<a[i]<<endl;\r\n            break;\r\n        } \r\n        if(a[i+1]=='\\0')\r\n        {\r\n            cout<<\"no\"<<endl;\r\n        }\r\n    }\r\n}"
          }
        },
        {
          "id": "JD078",
          "title": "两卷对校",
          "url": "http://www.xmuoj.com/contest/359/problem/JD078/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿拿着两卷古卷：「看看第二段经文是不是第一段中的一部分——如果是，就算对上了。」</p>",
          "inputDescription": "<p>第一行一个整数k（忽略，用于兼容）。第二行字符串a。第三行字符串b。</p>",
          "outputDescription": "<p>b是a的子串输出yes，否则输出no。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/776/\" target=\"_blank\">原题链接</a>遍历a的每个位置，用strncmp比较是否与b匹配。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/078.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <string>\r\n#include <vector>\r\nusing namespace std;\r\n\r\n// int main() {\r\n//     vector<string> a;\r\n//     string s;\r\n//     while (getline(cin, s)) {\r\n//         a.push_back(s);\r\n//     }\r\n//     if (a.size() >= 3) {\r\n//         cout << (a[1].find(a[2]) != string::npos ? \"yes\" : \"no\") << endl;\r\n//     }\r\n//     return 0;\r\n// }\r\n\r\n#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n#include<cstring>\r\nint main()\r\n{\r\n    int a;\r\n    bool found=false;\r\n    string str1,str2;\r\n    getline(cin,str1);\r\n    getline(cin,str2);\r\n    int len1=str1.length(),len2=str2.length();\r\n    for(int i=0;i<len1-len2+1;i++)\r\n    {\r\n        bool res=true;\r\n        for(int j=0,k=i;str2[j]!='\\0';j++,k++)\r\n        {\r\n            if(str1[k]!=str2[j])\r\n            {\r\n                res=false;\r\n                break;\r\n            }\r\n\r\n        }\r\n        if(res==true)\r\n        {\r\n            found=true;\r\n            break;\r\n        }\r\n    }\r\n    if(found==true)\r\n    {\r\n        cout<<\"yes\";\r\n    }\r\n    else if(found==false)\r\n    {\r\n        cout<<\"no\";\r\n    }\r\n\r\n}"
          }
        },
        {
          "id": "JD079",
          "title": "经文周期",
          "url": "http://www.xmuoj.com/contest/359/problem/JD079/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿指着一篇重复的经文：「这段文字是某个子串重复几次写成的？找出最小的重复次数。」</p>",
          "inputDescription": "<p>一行字符串。</p>",
          "outputDescription": "<p>对于每个输入的字符串（遇到&quot;.&quot;为止），输出一行一个整数n，表示该字符串最多由n个子串重复构成。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/806/\" target=\"_blank\">原题链接</a>枚举周期p（p是len的因子），检查s[0:p]重复len/p次是否等于原串。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/079.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    string s;\r\n    while(cin >> s && s != \".\")\r\n    {\r\n        int n = s.length();\r\n        for(int len = 1; len <= n; len++)\r\n        {\r\n            if(n % len == 0)\r\n            {\r\n                bool ok = true;\r\n                for(int i = len; i < n; i++)\r\n                {\r\n                    if(s[i] != s[i % len])\r\n                    {\r\n                        ok = false;\r\n                        break;\r\n                    }\r\n                }\r\n                if(ok)\r\n                {\r\n                    cout << n / len << endl;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD080",
          "title": "密文跨距",
          "url": "http://www.xmuoj.com/contest/359/problem/JD080/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰递给李少白一长段密文和两个短码S1、S2：「S1在左，S2在右，不交叉。最大间距是多少？」</p>",
          "inputDescription": "<p>一行，三个字符串用逗号隔开：S,S1,S2。</p>",
          "outputDescription": "<p>最大跨距。不满足条件输出-1。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/780/\" target=\"_blank\">原题链接</a>从左往右找S1最后出现的位置end1，从右往左找S2最后出现的位置start2。如果end1</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/080.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\n#include<cstring>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char a[1000]={0},b[100]={0},c[100]={0};\r\n    char s;\r\n    cin>>s;\r\n    for(int i=0;s!=',';i++)\r\n    {\r\n        a[i]=s;\r\n        cin>>s;\r\n    }\r\n\r\n    cin>>s;\r\n    for(int i=0;s!=',';i++)\r\n    {\r\n        b[i]=s;\r\n        cin>>s;\r\n    }\r\n    cin>>s;\r\n    for(int i=0;s!=','&&s!='\\n'&&cin;i++)\r\n    {\r\n        c[i]=s;\r\n        cin>>s;\r\n    }\r\n\r\n    int m=-1,n=-1;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        bool flag=false;\r\n        int found=1;\r\n        for(int j=i,k=0;b[k]!='\\0';k++,j++)\r\n        {\r\n            if(a[j]!=b[k])\r\n            {\r\n                found=0;break;\r\n            }\r\n        }\r\n        if(found)\r\n        {\r\n            flag=true;\r\n            m=i+strlen(b);\r\n            break;\r\n        }\r\n    }\r\n    for(int i=strlen(a);i>=m;i--)\r\n    {\r\n        bool flag=false;\r\n        int found=1;\r\n        for(int j=i,k=0;c[k]!='\\0';k++,j++)\r\n        {\r\n            if(a[j]!=c[k])\r\n            {\r\n                found=0;break;\r\n            }\r\n        }\r\n        if(found)\r\n        {\r\n            flag=true;\r\n            n=i;\r\n            break;\r\n        }\r\n    }\r\n    if(m==-1||n==-1){\r\n        cout<<-1;\r\n        return 0;\r\n    }\r\n    else {\r\n        cout<<n-m;\r\n    }\r\n\r\n}"
          }
        },
        {
          "id": "JD081",
          "title": "初窥阶乘",
          "url": "http://www.xmuoj.com/contest/359/problem/JD081/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白在丹房帮赵晴儿炼丹。丹方上写着：&quot;取n味药材，第一味放1份，第二味放2份，第三味放3份……第n味放n份。&quot;赵晴儿问：&quot;n味药材总共需要多少份？&quot;李少白拿出笔从头算：1×2×3×……×n。赵晴儿摇头：&quot;每次都要从头算，太慢了。把它封装成一个函数，以后直接调用。&quot;请帮李少白编写一个函数，计算n的阶乘（n!）。</p>",
          "inputDescription": "<p>一个整数n（0 ≤ n ≤ 10）。</p>",
          "outputDescription": "<p>输出n的阶乘。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/810/\" target=\"_blank\">原题链接</a>函数内用循环累乘，或递归实现。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/081.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint jiecheng(int n)\r\n{\r\n    int res=1;\r\n    if(n==1)return 1;\r\n    else res*=n*jiecheng(n-1);\r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<jiecheng(n);\r\n}"
          }
        },
        {
          "id": "JD082",
          "title": "比剑取大",
          "url": "http://www.xmuoj.com/contest/359/problem/JD082/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>兵器库里，赵晴儿和李少白各自挑了一柄剑。赵晴儿的剑重x斤，李少白的剑重y斤。赵晴儿说：&quot;我们总要比谁的剑更重，每次都手算太麻烦。写一个函数，传入两个数，返回较大的那个。以后比试直接调用就行。&quot;请帮他们实现这个函数。</p>",
          "inputDescription": "<p>一行，两个整数x和y。</p>",
          "outputDescription": "<p>输出最大值。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/807/\" target=\"_blank\">原题链接</a>函数内用 if 比较或三元表达式。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/082.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint max(int m,int n)\r\n{\r\n    if(m>n)return m;\r\n    else return n;\r\n}\r\nint main()\r\n{\r\n    int m,n;\r\n    cin>>m>>n;\r\n    cout<<max(m,n);\r\n}"
          }
        },
        {
          "id": "JD083",
          "title": "剑气归正",
          "url": "http://www.xmuoj.com/contest/359/problem/JD083/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白在练剑气外放时，需要计算剑气落点与自己的距离。距离本该是正数，但有时算出的结果是负数——因为方向搞反了。赵晴儿说：&quot;别每次遇到负数就手动取反，写一个函数，不管传入正数还是负数，都返回它的绝对值。&quot;</p>",
          "inputDescription": "<p>一个整数x。</p>",
          "outputDescription": "<p>输出x的绝对值。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/812/\" target=\"_blank\">原题链接</a>if x &lt; 0: return -x, else: return x。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/083.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint abs(int n)\r\n{\r\n    if(n>=0)return n;\r\n    else return -n;\r\n}\r\nint main()\r\n{\r\n    int m;\r\n    cin>>m;\r\n    cout<<abs(m);\r\n}"
          }
        },
        {
          "id": "JD084",
          "title": "双剑互易",
          "url": "http://www.xmuoj.com/contest/359/problem/JD084/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在教李少白一套双剑术。左右手各持一剑，攻守之间需要不断交换位置。&quot;实战中你不能把剑放到地上再捡起来，&quot;梁嘉峰说，&quot;直接交换。写一个函数，传入两个变量的引用，在函数内部交换它们的值。&quot;李少白提笔写下函数签名，却犯了难——C++里普通参数只传值，改不了外面的变量。</p>",
          "inputDescription": "<p>一行，两个整数x和y。</p>",
          "outputDescription": "<p>交换后的x和y。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/813/\" target=\"_blank\">原题链接</a>C++用引用参数 `void swap(int &x, int &y)`。Python中 a, b = b, a。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/084.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int m,n;\r\n    cin>>m>>n;\r\n    swap(m,n);\r\n    cout<<m<<\" \"<<n;\r\n}"
          }
        },
        {
          "id": "JD085",
          "title": "辗转相除",
          "url": "http://www.xmuoj.com/contest/359/problem/JD085/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在药圃里采了a株紫芝和b株青蒿，要把它们扎成相同大小的药束，每束株数相同且不能有剩余。&quot;这其实就是求a和b的最大公约数，&quot;赵晴儿说，&quot;古人有个妙法叫辗转相除——用大数除以小数取余，再用小数除以余数，反复如此，直到余数为零。最后一个非零余数就是答案。&quot;请帮赵晴儿写一个函数，用辗转相除法求两个正整数的最大公约数。</p>",
          "inputDescription": "<p>一行，两个正整数a和b。</p>",
          "outputDescription": "<p>输出a和b的最大公约数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/821/\" target=\"_blank\">原题链接</a>辗转相除法：gcd(a,b) = gcd(b, a%b)，当b==0时返回a。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/085.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int a,b,n;\r\n    cin>>a>>b;\r\n    if(b>a)swap(a,b);\r\n    n=a%b;\r\n    while(n!=0)\r\n    {\r\n        a=n;\r\n        swap(a,b);\r\n        n=a%b;\r\n    }\r\n    cout<<b;\r\n}"
          }
        },
        {
          "id": "JD086",
          "title": "剑阵复制",
          "url": "http://www.xmuoj.com/contest/359/problem/JD086/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上摆了一个剑阵（数组a），需要原样复制一份到另一个沙盘（数组b）上。&quot;手抄太慢，&quot;赵晴儿说，&quot;写一个函数，把a的前size个元素复制到b对应的位置上。&quot;李少白接过两个沙盘，发现b上原来也有数字，只需覆盖前size个位置，其余保持不变。</p>",
          "inputDescription": "<p>第一行两个整数n和size（数组长度和复制个数）。第二行n个整数。</p>",
          "outputDescription": "<p>复制后的数组，空格隔开。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/816/\" target=\"_blank\">原题链接</a>函数内循环，b[i] = a[i]，复制前size个元素。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/086.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n#include<cstring>\r\nint main()\r\n{\r\n    int n1,n2,m;\r\n    cin>>n1>>n2>>m;\r\n    int a[200]={0},b[200]={0};\r\n    for(int i=0;i<n1;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    for(int i=0;i<n2;i++)\r\n    {\r\n        cin>>b[i];\r\n    }\r\n    for(int i=0;i<m;i++)\r\n    {\r\n        b[i]=a[i];\r\n    }\r\n    for(int i=0;i<n2;i++)\r\n    {\r\n        cout<<b[i]<<\" \";\r\n    }\r\n}"
          }
        },
        {
          "id": "JD087",
          "title": "剑阵翻转",
          "url": "http://www.xmuoj.com/contest/359/problem/JD087/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p></p>",
          "inputDescription": "<p></p>",
          "outputDescription": "<p></p>",
          "hint": "<p></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/087.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int n,size,a[2000];\r\n    cin>>n>>size;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    for(int i=size-1;i>=0;i--)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n    for(int i=size;i<n;i++)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n}"
          }
        },
        {
          "id": "JD088",
          "title": "印数成招",
          "url": "http://www.xmuoj.com/contest/359/problem/JD088/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p></p>",
          "inputDescription": "<p></p>",
          "outputDescription": "<p></p>",
          "hint": "<p></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/088.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int n,size,a[2000];\r\n    cin>>n>>size;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    \r\n    for(int i=0;i<size;i++)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n}"
          }
        },
        {
          "id": "JD089",
          "title": "印阵成招",
          "url": "http://www.xmuoj.com/contest/359/problem/JD089/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上画了一个row行col列的剑阵图，每个格子标着一个数字。她需要把这个阵图工整地抄录到竹简上。&quot;写一个函数，&quot;赵晴儿说，&quot;传入二维数组和行列数，按格式逐行打印。每行的数字用空格隔开，数字之间用空格隔开。&quot;</p>",
          "inputDescription": "<p>第一行两个整数row和col。接下来row行，每行col个整数。</p>",
          "outputDescription": "<p>矩阵元素，每行末尾无多余空格。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/815/\" target=\"_blank\">原题链接</a>嵌套循环遍历行列，注意行末空格处理。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/089.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int a[200][200],row,col;\r\n    cin>>row>>col;\r\n    for(int i=0;i<row;i++)\r\n    {\r\n        for(int j=0;j<col;j++)\r\n        {\r\n            cin>>a[i][j];\r\n        }\r\n    }\r\n    for(int i=0;i<row;i++)\r\n    {\r\n        for(int j=0;j<col;j++)\r\n        {\r\n            if(j!=0)cout<<\" \";\r\n            cout<<a[i][j];\r\n        }\r\n        cout<<endl;\r\n    }\r\n    \r\n \r\n \r\n}"
          }
        },
        {
          "id": "JD090",
          "title": "剑阵排序",
          "url": "http://www.xmuoj.com/contest/359/problem/JD090/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿拿着一份兵器清单来找李少白：&quot;这份清单前半段乱得很，从第l件到第r件需要按重量从小到大排好，后面的顺序不变。&quot;李少白接过清单，发现上面有n件兵器的重量。他想写一个通用的排序函数，只排a[l]到a[r]这一段，其余位置原封不动。</p>",
          "inputDescription": "<p>第一行三个整数n、l和r（数组长度、排序区间左端点和右端点，0 ≤ l ≤ r &lt; n）。第二行n个整数。</p>",
          "outputDescription": "<p>排序后的数组，空格隔开。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/820/\" target=\"_blank\">原题链接</a>对a[l]到a[r]排序，其余元素不变。可用冒泡、选择或库函数。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/090.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n#include<algorithm>\r\nint a[200000];\r\nint main()\r\n{\r\n    int n,l,r;\r\n    cin>>n>>l>>r;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    sort(a+l,a+r+1);//左闭右开\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n}\r\n\r\n    "
          }
        },
        {
          "id": "JD091",
          "title": "递归阶乘",
          "url": "http://www.xmuoj.com/contest/359/problem/JD091/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白在丹房翻到一本古籍，上面记载着一种&quot;以丹炼丹&quot;的奇术——要炼n味丹药，先炼好n-1味；要炼n-1味，先炼好n-2味……直到只剩1味，直接炼成。赵晴儿看了笑道：&quot;这就是递归。一个函数调用自己，层层深入，直到触底再层层返回。阶乘的定义本身就是递归的——fact(n) = n × fact(n-1)，fact(1) = 1。&quot;&quot;用递归重新实现阶乘函数。&quot;</p>",
          "inputDescription": "<p>一个整数n。</p>",
          "outputDescription": "<p>输出n的阶乘。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/16/\" target=\"_blank\">原题链接</a>递归三要素：终止条件(n==1返回1)、递推关系(n*fact(n-1))、缩小规模。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/091.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint jiecheng(int n)\r\n{\r\n    int res=1;\r\n    if(n==1)return 1;\r\n    else res*=n*jiecheng(n-1);\r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<jiecheng(n);\r\n}"
          }
        },
        {
          "id": "JD092",
          "title": "递归斐波",
          "url": "http://www.xmuoj.com/contest/359/problem/JD092/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上画出一串数字：1, 1, 2, 3, 5, 8, 13……&quot;看出规律了吗？&quot;她问。李少白看了半天：&quot;每个数都是前两个数的和！&quot;&quot;对，这就是斐波那契数列。&quot;赵晴儿说，&quot;用递归来写——f(1)=1, f(2)=1, f(n)=f(n-1)+f(n-2)。不过提醒你，朴素递归效率很低，后面会学到优化的方法。&quot;</p>",
          "inputDescription": "<p>一个整数n。</p>",
          "outputDescription": "<p>输出斐波那契数列第n项。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/822/\" target=\"_blank\">原题链接</a>递归：f(1)=1, f(2)=1, f(n)=f(n-1)+f(n-2)。注意效率问题。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/092.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint feibo(int n)\r\n{\r\n    int a=1,b=1,res=0;\r\n    if(n==1||n==2)return 1;\r\n    res+=feibo(n-1)+feibo(n-2);\r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<feibo(n);\r\n}"
          }
        },
        {
          "id": "JD093",
          "title": "登阶问道",
          "url": "http://www.xmuoj.com/contest/359/problem/JD093/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>试炼场尽头，一座石阶直通山顶。石阶共有n级，每次只能跨1级或2级。赵晴儿站在山脚问：&quot;从第一级走到第n级，一共有多少种不同的走法？&quot;李少白想了想：&quot;如果我最后一步跨1级，那之前有f(n-1)种走法；如果最后一步跨2级，那之前有f(n-2)种走法……&quot;&quot;没错，&quot;赵晴儿点头，&quot;这就是递归。&quot;</p>",
          "inputDescription": "<p>一个整数n（1 ≤ n ≤ 20）。</p>",
          "outputDescription": "<p>输出跳法总数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/823/\" target=\"_blank\">原题链接</a>f(n) = f(n-1) + f(n-2)。最后一步跳1级或2级，两种情况之和。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/093.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint dengjie(int n)\r\n{\r\n    if(n==1)return 1;//n=1只有一种走法\r\n    if(n==2)return 2;\r\n    int res=0;//总的结果数，用于计数\r\n    res=dengjie(n-1)+dengjie(n-2);\r\n    return res;//返回res的值\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;//输入n\r\n    cout<<dengjie(n); //输出res的值\r\n}"
          }
        },
        {
          "id": "JD094",
          "title": "方阵寻路",
          "url": "http://www.xmuoj.com/contest/359/problem/JD094/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上画了一个(n+1)×(m+1)的方格阵，每个格子标着坐标。&quot;假设你站在左上角(0,0)，&quot;赵晴儿指着沙盘说，&quot;目标是走到右下角(n,m)。每次只能向右走一步，或者向下走一步。一共有多少种不同的路径？&quot;李少白盯着沙盘看了一会儿：&quot;走到(n,m)之前，一定是从(n-1,m)或(n,m-1)过来的……&quot;&quot;很好，又是一个递归。&quot;</p>",
          "inputDescription": "<p>一行，两个整数n和m（目标坐标，0 ≤ n,m ≤ 20）。</p>",
          "outputDescription": "<p>输出走法总数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/824/\" target=\"_blank\">原题链接</a>从(0,0)到(n,m)的网格路径数。f(n,m) = f(n-1,m) + f(n,m-1)。边界：f(0,m)=1, f(n,0)=1。等价于组合数C(n+m, n)。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/094.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint dx[]={0,1},dy[]={1,0};\r\n\r\nint n,m;\r\nint xunlu(int i,int j)\r\n{\r\n    if(i==n&&j==m)return 1;\r\n    if(i>n||j>m)return 0;\r\n    int res=0;\r\n    for(int k=0;k<2;k++)\r\n    {\r\n        i+=dx[k],j+=dy[k];\r\n        res+=xunlu(i,j);\r\n        i-=dx[k],j-=dy[k];\r\n    }\r\n    return res;\r\n}\r\nint main()\r\n{\r\n\r\n    cin>>n>>m;\r\n    cout<<xunlu(0,0);\r\n\r\n\r\n}"
          }
        },
        {
          "id": "JD095",
          "title": "全排列阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD095/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰递给李少白n枚令牌，上面分别刻着1到n。&quot;把它们排成一列，列出所有可能的排列顺序。&quot;梁嘉峰说，&quot;按字典序从小到大输出。&quot;李少白开始手动枚举，很快就乱了套。赵晴儿在旁边提醒：&quot;用递归的思路——每次选一个没用过的令牌放到当前位置，然后递归处理剩下的位置。选完之后要&#039;回退&#039;，把令牌放回去，才能尝试下一个选择。这就是回溯。&quot;</p>",
          "inputDescription": "<p>一个整数n（1 ≤ n ≤ 9）。</p>",
          "outputDescription": "<p>每行一个排列，数字之间用空格隔开。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/825/\" target=\"_blank\">原题链接</a>DFS+回溯：用used[]标记已用数字，path[]记录当前排列。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/095.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint n;\r\nint used[10];\r\nbool path[10];\r\nvoid dfs(int u)\r\n{\r\n\r\n    if(u==n){\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if(i!=0)cout<<\" \";\r\n            cout<<used[i];\r\n        }\r\n        cout<<endl;\r\n        return ;\r\n    }\r\n    else{\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            if(!path[i]){\r\n                used[u]=i;\r\n                path[i]=true;\r\n                dfs(u+1);\r\n                path[i]=false;\r\n                used[u]=0;\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    dfs(0);\r\n}"
          }
        },
        {
          "id": "JD096",
          "title": "空格替换",
          "url": "http://www.xmuoj.com/contest/359/problem/JD096/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>兵器阁的大门上刻着一行古文，但年代久远，字迹模糊，空格处尤其难以辨认。赵晴儿凑近看了看：&quot;这行字里夹了太多空格，密密麻麻的，根本看不清。&quot;梁嘉峰说：&quot;古卷传输时，空格容易丢失。古人想了个办法——把每个空格替换成%20，这样既保留了间隔，又不会和真正的空白混淆。&quot;&quot;你写一段程序，把这行古文里的所有空格替换成%20。&quot;</p>",
          "inputDescription": "<p>一行字符串（长度不超过100）。</p>",
          "outputDescription": "<p>替换空格为%20后的字符串。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/36/\" target=\"_blank\">原题链接</a>遍历字符串，遇到空格输出%20，否则输出原字符。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/096.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]==' ')\r\n            cout<<\"%20\";\r\n        else cout<<a[i];\r\n    }\r\n}"
          }
        },
        {
          "id": "JD097",
          "title": "再算斐波",
          "url": "http://www.xmuoj.com/contest/359/problem/JD097/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在兵器阁的账本上翻到一串奇怪的数字：1, 1, 2, 3, 5, 8, 13, 21……&quot;这是前辈铸剑师留下的排列规律，&quot;梁嘉峰说，&quot;每一柄新剑的重量都是前两柄之和。第1柄和第2柄都是1斤，第3柄就是1+1=2斤，第4柄是1+2=3斤……&quot;&quot;上一章你用递归算过这个数列，但递归太慢了。这次用容器来存——把每一项都推进一个序列里，只保留最近两项，循环推进。&quot;请帮赵晴儿算出第n柄剑的重量。</p>",
          "inputDescription": "<p>一个整数n（0 ≤ n ≤ 90）。</p>",
          "outputDescription": "<p>输出斐波那契数列第n项。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/21/\" target=\"_blank\">原题链接</a>两个变量a,b滚动：a,b = b,a+b。循环n次。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/097.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    vector<int>a;\r\n    a.push_back(1);\r\n    a.push_back(1);\r\n    int n;\r\n    cin>>n;\r\n    for(int i=0,j=1;i<n;i++,j++)\r\n    {\r\n        a.push_back(a[i]+a[j]);\r\n    }\r\n    cout<<a[n-1];\r\n\r\n}"
          }
        },
        {
          "id": "JD098",
          "title": "倒转铁链",
          "url": "http://www.xmuoj.com/contest/359/problem/JD098/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>兵器阁的架子上挂着一串铁环，每个环上刻着一个数字，从头到尾依次是1、2、3……最后一个环上刻着-1，表示链条结束。梁嘉峰指着铁链说：&quot;我要从最后一个环开始，把数字一个个报出来。但这串铁环只能从前往后读，不能直接跳到末尾。&quot;赵晴儿想了想：&quot;用一个容器——先把所有数字存进去，再从后往前取出来。这就像把铁环一个个摘下来放到盒子里，最后从盒子里倒着取。&quot;</p>",
          "inputDescription": "<p>一行整数，以-1结尾，表示链表的节点值（-1不算节点）。</p>",
          "outputDescription": "<p>从尾到头输出每个节点的值，每行一个。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/17/\" target=\"_blank\">原题链接</a>用栈存储所有节点值，然后依次弹出。或者用递归。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/098.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int n;\r\n    vector<int>a;\r\n    cin>>n;\r\n    while(n!=-1)\r\n    {\r\n        a.push_back(n);\r\n        cin>>n;\r\n    }\r\n    for(int i=a.size()-1;i>=0;i--)\r\n    {\r\n        cout<<a[i]<<endl;\r\n    }\r\n\r\n}"
          }
        },
        {
          "id": "JD099",
          "title": "双栈为队",
          "url": "http://www.xmuoj.com/contest/359/problem/JD099/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在兵器阁里找到两个铁盒，每个盒子只能从顶部放入和取出——这就是&quot;栈&quot;，后进先出。梁嘉峰说：&quot;现在我需要一个&#039;队列&#039;——先进先出。但手边只有这两个栈，没有队列。你能用这两个栈模拟一个队列吗？&quot;赵晴儿思索片刻：&quot;入队的时候都放进盒子1。出队的时候，如果盒子2是空的，就把盒子1的东西全部倒进盒子2——这样顺序就反过来了，最先进来的变成了盒子2的顶部，直接取就行。&quot;请帮赵晴儿实现这个&quot;双栈模拟队列&quot;的操作。</p>",
          "inputDescription": "<p>若干操作命令：`push x`（入队）、`pop`（出队并输出）、`empty`（判空）。</p>",
          "outputDescription": "<p>对pop操作输出队首值，empty操作输出`yes`或`no`。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/20/\" target=\"_blank\">原题链接</a>栈1入队，栈2出队。出队时栈2空就把栈1全部倒入栈2。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/099.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<stack>\r\n#include<string>\r\nusing namespace std;\r\nint main()\r\n{\r\n    stack<int>in,out;\r\n    int n;\r\n    string a;\r\n    while(cin>>a)\r\n    {\r\n        if(a==\"push\")\r\n        {\r\n            cin>>n;\r\n            in.push(n);\r\n        }\r\n        else if(a==\"pop\")\r\n        {\r\n            if(out.empty())\r\n            {\r\n                while(!in.empty())\r\n                {\r\n                    out.push(in.top());\r\n                    in.pop();\r\n                }\r\n                \r\n            }\r\n            if(!out.empty())\r\n            {\r\n                cout<<out.top()<<endl;\r\n                out.pop();\r\n            }\r\n        }\r\n        else if(a==\"empty\")\r\n        {\r\n            if(out.empty()&&in.empty())\r\n            {\r\n                cout<<\"yes\"<<endl;\r\n            }\r\n            else cout<<\"no\"<<endl;\r\n        }\r\n    }\r\n}"
          }
        },
        {
          "id": "JD100",
          "title": "铁链翻转",
          "url": "http://www.xmuoj.com/contest/359/problem/JD100/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰从架子上取下一条铁链，每个环上刻着一个数字。他把铁链平铺在桌上，从头到尾是1、2、3、4、5……最后一个环上刻着-1，表示结束。&quot;我要把这条铁链反过来，&quot;梁嘉峰说，&quot;第一个变最后一个，最后一个变第一个。但不能断开重接，只能用容器来辅助。&quot;赵晴儿拿起一个铁盒：&quot;把铁环一个个摘下来放进盒子里——先进去的沉到底部。等全部摘完，再从盒子里取出来，顺序就反了。&quot;</p>",
          "inputDescription": "<p>一行整数，以-1结尾，表示链表节点值。</p>",
          "outputDescription": "<p>反转后的链表，空格隔开。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/35/\" target=\"_blank\">原题链接</a>三指针法：prev=None, curr=head。循环：next=curr.next, curr.next=prev, prev=curr, curr=next。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/100.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nstruct node\r\n{\r\n    int m;\r\n    node *Next;\r\n};\r\n\r\nint main()\r\n{\r\n    int n,num=0;\r\n    node *p0,*head,*p1;\r\n    cin>>n;\r\n    while(n!=-1)\r\n    {\r\n\r\n        p0=new node;\r\n        p0->m=n;p0->Next=NULL;\r\n        if(num==0)\r\n            p1=head=p0;\r\n        else {p1->Next=p0;p1=p0;}\r\n        num++;\r\n        cin>>n;\r\n    }\r\n    node *pre,*cur,*next;\r\n    pre=head;\r\n    if(head->Next!=NULL){cur=next=head->Next;pre->Next=NULL;}\r\n    else {cout<<head->m;return 0;}\r\n    while(next->Next!=NULL)\r\n    {\r\n        next=next->Next;\r\n        cur->Next=pre;\r\n        pre=cur;\r\n        cur=next;\r\n    }\r\n    next->Next=pre;\r\n    p1=head=next;\r\n    while(p1!=NULL)\r\n    {\r\n        cout<<p1->m<<\" \";\r\n        p1=p1->Next;\r\n    }\r\n\r\n}"
          }
        },
        {
          "id": "JD101",
          "title": "双链归并",
          "url": "http://www.xmuoj.com/contest/359/problem/JD101/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿从兵器阁的两个抽屉里各取出一条铁链，每条链上的数字都从小到大排好了。她需要把两条链合并成一条，仍然保持从小到大的顺序。&quot;不能拆开重排，&quot;梁嘉峰说，&quot;两条链都是有序的，你要利用这个特点——从两条链的头部同时开始比较，每次取较小的那个接到结果链的末尾。&quot;赵晴儿拿起两个容器：&quot;用一个容器存结果。两个指针分别指向两条链的头部，谁小就取谁，直到一条链取完，再把另一条的剩余全部接上。&quot;</p>",
          "inputDescription": "<p>两行，每行若干整数（以-1结尾），分别表示两个有序链表。</p>",
          "outputDescription": "<p>合并后的有序链表，空格隔开。</p>",
          "hint": "<p>双指针比较合并。一个链表遍历完后，直接接上另一个的剩余部分。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/101.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nstruct node\r\n{\r\n    int num;\r\n    node *next;\r\n};\r\nint main()\r\n{\r\n    node *head0=NULL,*head1=NULL,*head2=NULL,*p0,*p1,*p2,*p;\r\n    int m,n;\r\n    cin>>m;\r\n    while(m!=-1)\r\n    {\r\n        p0=new node;p0->num=m;p0->next=NULL;\r\n        if(head1==NULL)head1=p1=p0;\r\n        else {\r\n            p1->next=p0;\r\n            p1=p0;\r\n        }\r\n        cin>>m;\r\n    }\r\n        cin>>n;\r\n        while(n!=-1)\r\n    {\r\n        p0=new node;p0->num=n;p0->next=NULL;\r\n        if(head2==NULL)head2=p2=p0;\r\n        else {\r\n            p2->next=p0;\r\n            p2=p0;\r\n        }\r\n        cin>>n;\r\n    }\r\n    if(head1==NULL)head0=head2;\r\n    else if(head2==NULL)head0=head1;\r\n    else {\r\n        p1=head1,p2=head2;\r\n        while(p1!=NULL&&p2!=NULL)\r\n        {\r\n            if(p1->num>=p2->num)\r\n            {\r\n                p0=new node;\r\n                p0->num=p2->num;\r\n                p0->next=NULL;\r\n                if(head0==NULL)\r\n                {\r\n                    head0=p=p0;\r\n                }\r\n                else {\r\n                    p->next=p0;\r\n                    p=p0;\r\n                }\r\n                p2=p2->next;\r\n            }\r\n            else if(p1->num<p2->num)\r\n            {\r\n                p0=new node;\r\n                p0->num=p1->num;\r\n                p0->next=NULL;\r\n                if(head0==NULL)\r\n                {\r\n                    head0=p=p0;\r\n                }   \r\n                else {\r\n                    p->next=p0;\r\n                    p=p0;\r\n                }\r\n                p1=p1->next;\r\n            }\r\n        }\r\n    \r\n        if(p1==NULL)\r\n            p->next=p2;\r\n        else if(p2==NULL)\r\n            p->next=p1;\r\n    }\r\n    p=head0;\r\n    while(p!=NULL)\r\n    {\r\n        cout<<p->num<<\" \";\r\n        p=p->next;\r\n    }\r\n\r\n\r\n}"
          }
        },
        {
          "id": "JD102",
          "title": "三元归序",
          "url": "http://www.xmuoj.com/contest/359/problem/JD102/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>兵器阁的账房先生有一本厚厚的兵器账本，每条记录记着三样东西：兵器编号x、重量y（带两位小数）、兵器名称z。&quot;这本账太乱了，&quot;赵晴儿翻了几页就头疼，&quot;编号不按顺序，同编号的重量也乱排。&quot;梁嘉峰说：&quot;先按编号从小到大排，编号相同的再按重量从小到大排。你可以用结构体存每条记录，放进容器里，再自定义排序规则。&quot;</p>",
          "inputDescription": "<p>第一行一个整数N。接下来N行，每行两个整数和一个字符串。</p>",
          "outputDescription": "<p>排序后的N条记录，每行一条。x输出整数，y输出保留两位小数的浮点数，字符串原样输出，空格隔开。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/864/\" target=\"_blank\">原题链接</a>定义结构体存储三元组，自定义比较函数：先比x，再比y。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/102.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\n#include<algorithm>\r\n#include<iomanip>\r\nusing namespace std;\r\nstruct sanyuan\r\n{\r\n    int num;\r\n    double m;\r\n    string str;\r\n};\r\n\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    sanyuan s[200]; \r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cin>>s[i].num>>s[i].m>>s[i].str;\r\n    }\r\n    for(int i=0;i<N-1;i++)\r\n    {\r\n        for(int j=0;j<N-i-1;j++)\r\n        {\r\n            if(s[j].num>s[j+1].num||(s[j].num==s[j+1].num&&s[j].m>s[j+1].m))\r\n            {\r\n                sanyuan temp=s[j];\r\n                s[j]=s[j+1];\r\n                s[j+1]=temp;\r\n            }\r\n        }\r\n    }\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cout<<s[i].num<<\" \"<<fixed<<setprecision(2)<<s[i].m<<\" \"<<s[i].str<<endl;\r\n    }\r\n}"
          }
        },
        {
          "id": "JD103",
          "title": "立桩定阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD103/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>试炼场上，弟子们按身高排成一列，但顺序完全乱了。梁嘉峰走过去，随便挑了一个弟子站到中间，然后让所有比他矮的站到左边，比他高的站到右边。&quot;现在左边和右边各自还是乱的，&quot;赵晴儿看出来了。&quot;对。所以对左边和右边各自重复这个过程——挑一个人，矮的左、高的右。每次都能让一个人站到最终位置上，直到每一组只剩一个人。&quot;梁嘉峰说，&quot;这就是快速排序。一剑分两路，递归再出剑。&quot;给定一个长度为 n 的整数数列，请用快速排序将其从小到大排序。</p>",
          "inputDescription": "<p>第一行包含整数n。第二行包含n个整数。</p>",
          "outputDescription": "<p>一行，n个排好序的整数，空格隔开。</p>",
          "hint": "<p>选基准元素，双指针分区：左边 ≤ 基准，右边 &gt; 基准。递归处理左右两半。平均 O(nlogn)。<a href=\"https://www.acwing.com/problem/content/787/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/103.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint a[1000000],n;\r\nvoid quick_sort(int arr[],int l,int r)\r\n{\r\n    if(l>=r)return;\r\n    int i=l-1,j=r+1,x=arr[(l+r)>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(arr[i]<x);\r\n        do j--;while(arr[j]>x);\r\n        if(i<j){swap(arr[i],arr[j]);\r\n        }\r\n    }\r\n    quick_sort(arr,l,j);\r\n    quick_sort(arr,j+1,r);\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d\",&n);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }   \r\n    quick_sort(a,0,n-1);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        //if(i!=0)cout<<\" \";\r\n        printf(\"%d \",a[i]);\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD104",
          "title": "照妖辨品",
          "url": "http://www.xmuoj.com/contest/359/problem/JD104/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰指着那排弟子：&quot;我不需要所有人都排好——只要知道第 K 矮的人是谁。&quot;赵晴儿想了想：&quot;还是用刚才的方法：挑一个人站中间，矮的左、高的右。数一数左边有几个人——如果左边刚好有 K-1 个人，那中间那个就是答案。如果左边人比 K-1 多，说明答案在左边，只管左边就行。如果不够，就去右边找第 K-左-1 矮的。&quot;&quot;所以快排是把两边都排好，快选只需要管一边。&quot;梁嘉峰点头，&quot;省了一半的力气。&quot;给定一个长度为 n 的整数数列和一个整数 k，求数列中第 k 小的数。</p>",
          "inputDescription": "<p>第一行两个整数n和k。第二行n个整数。</p>",
          "outputDescription": "<p>一行，第k小的数。</p>",
          "hint": "<p>partition 后判断 k 在左半还是右半，只递归一半。平均 O(n)。<a href=\"https://www.acwing.com/problem/content/788/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/104.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint a[1000];\r\nint quick_sort(int arr[],int l,int r,int k)\r\n{\r\n    if(l>=r)return arr[l];\r\n    int i=l-1,j=r+1,x=arr[(l+r)>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(x>arr[i]);\r\n        do j--;while(x<arr[j]);\r\n        if(i<j)swap(arr[i],arr[j]);\r\n    }\r\n    int s1=j-l+1;\r\n    if(k<=s1)return quick_sort(arr,l,j,k);\r\n    else return quick_sort(arr,j+1,r,k-s1);\r\n}\r\n\r\nint main()\r\n{\r\n    int n,k;\r\n    cin>>n>>k;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }\r\n    cout<<quick_sort(a,0,n-1,k)<<endl;\r\n    \r\n}"
          }
        },
        {
          "id": "JD105",
          "title": "双剑合阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD105/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿把弟子们两两分成一组，每组内部先按身高排好。然后两组合成一组四人——从两组的排头各看一眼，矮的先出列，依次接上。四人组再两两合并成八人组……梁嘉峰看明白了：&quot;快排是先挑基准把人分开，归并是先把人拆到最小单位，再一层层合并上来。&quot;&quot;对，&quot;赵晴儿说，&quot;合并时两边都是有序的，所以每次只需要比较排头，O(n)就能合并。拆到底再合上来，总共 O(nlogn)。而且最坏情况也一样——不像快排最坏会退化。&quot;给定一个长度为 n 的整数数列，请用归并排序将其从小到大排序。</p>",
          "inputDescription": "<p>第一行包含整数n。第二行包含n个整数。</p>",
          "outputDescription": "<p>一行，n个排好序的整数，空格隔开。</p>",
          "hint": "<p>递归拆分 → 合并两个有序数组。需要额外空间 O(n)。稳定排序。<a href=\"https://www.acwing.com/problem/content/790/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/105.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint a[1000],temp[1000],n;\r\nvoid merge_sort(int arr[],int l,int r)\r\n{\r\n    if(l>=r)return;\r\n    int mid=(l+r)>>1;//中间数\r\n    merge_sort(arr,l,mid);\r\n    merge_sort(arr,mid+1,r);\r\n    int i=l,j=mid+1,k=0;\r\n    while(i<=mid&&j<=r)\r\n    {\r\n        if(arr[i]<=arr[j]){\r\n            temp[k]=arr[i];\r\n            i++;\r\n        }\r\n        else {\r\n            temp[k]=arr[j];\r\n            j++;\r\n        }\r\n        k++;\r\n    }\r\n    while(i<=mid)\r\n        {\r\n            temp[k++]=arr[i++];\r\n        }\r\n    while(j<=r)\r\n    {\r\n            temp[k++]=arr[j++];\r\n    }\r\n    for(int i=l,k=0;i<=r;i++,k++)\r\n    {\r\n        arr[i]=temp[k];\r\n    }\r\n}\r\n\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }\r\n    merge_sort(a,0,n-1);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        printf(\"%d \",a[i]);\r\n    }\r\n\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD106",
          "title": "逆流之数",
          "url": "http://www.xmuoj.com/contest/359/problem/JD106/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>弟子们排成一列，每人身上有一个编号。赵晴儿发现，有些排在前面的人编号反而比后面的大——这就是&quot;逆序对&quot;，说明队伍很乱。&quot;逆序对越多，队伍越乱。&quot;赵晴儿说，&quot;但要一个个比太慢了。有没有 O(nlogn) 的方法？&quot;李少白盯着归并排序看了一会儿，突然开窍：&quot;归并的时候，左右两队都是从小到大排好的。从两队的排头开始比较——如果右边的先出列，说明右边这个人比左边队里剩下的所有人都小，那些都是逆序对！&quot;&quot;没错。&quot;赵晴儿笑了，&quot;排完序，逆序对也数完了。&quot;给定一个长度为 n 的整数数列，求逆序对的数量。</p>",
          "inputDescription": "<p>第一行包含整数n。第二行包含n个整数（1≤n≤100000）。</p>",
          "outputDescription": "<p>一行，逆序对的数量。</p>",
          "hint": "<p>归并排序过程中，当右边元素先被选中时，左边剩余元素个数就是新增的逆序对数。用 long long 存结果。<a href=\"https://www.acwing.com/problem/content/790/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/106.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\ntypedef long long LL;\r\nLL n,a[1000000],temp[1000000];\r\n\r\nLL merge_sort(LL arr[],LL l,LL r)\r\n{\r\n    if(l>=r)return 0;\r\n    LL mid=l+r>>1,res=0;\r\n    res+=merge_sort(arr,l,mid)+ merge_sort(arr,mid+1,r);\r\n    LL i=l,j=mid+1,k=0;\r\n    while(i<=mid&&j<=r)\r\n    {\r\n        if(arr[i]<=arr[j])\r\n        {\r\n            temp[k++]=arr[i++];\r\n        }\r\n        else if(arr[i]>temp[j])\r\n        {\r\n            temp[k++]=arr[j++];\r\n            res+=mid-i+1;\r\n        }\r\n    }\r\n    while(i<=mid)\r\n    {\r\n        temp[k++]=arr[i++];\r\n    }\r\n    while(j<=r)\r\n    {\r\n        temp[k++]=arr[j++];\r\n    }\r\n    for(int i=l,k=0;i<=r;i++,k++)//为了进一步排序，不可忽略\r\n    {\r\n        arr[i]=temp[k];\r\n    }\r\n   return res;\r\n\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    cout<<merge_sort(a,0,n-1)<<endl;\r\n\r\n\r\n}"
          }
        },
        {
          "id": "JD107",
          "title": "石壁听风",
          "url": "http://www.xmuoj.com/contest/359/problem/JD107/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿递给李少白一排刻着数字的石块，从左到右从小到大排好了。她问：&quot;数字 3 第一次出现在哪块石块上？最后一次出现在哪？&quot;李少白想从头数，但石块有十万块。赵晴儿拦住他：&quot;石块是有序的，不用一个个看。先看最中间那块——如果中间的数比 3 大，说明 3 只可能在左半边，右半边不用看了。每次都把范围砍一半，这就是二分。&quot;&quot;找第一次出现的位置和最后一次出现的位置，各二分一次。&quot;李少白接话道。&quot;对。如果整个范围里都找不到，就说明没有。&quot;给定一个升序排列的长度为 n 的整数数组和 q 个查询，对每个查询返回目标值的起始位置和终止位置（从0开始），不存在则返回 -1 -1。</p>",
          "inputDescription": "<p>第一行两个整数n和q。第二行n个整数（升序）。第三行q个待查询的整数。</p>",
          "outputDescription": "<p>每行两个整数，起始位置和终止位置。不存在输出-1 -1。</p>",
          "hint": "<p>两次二分：找第一个 ≥ x 的位置（左边界），找最后一个 ≤ x 的位置（右边界）。<a href=\"https://www.acwing.com/problem/content/791/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/107.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\nint a[20000],n,q,j;\r\n\r\nvoid search(int m)\r\n{\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        if(a[i]==m)\r\n        {\r\n            j=i;\r\n            cout<<i<<\" \";\r\n            while(a[j]==m)\r\n            {\r\n                j++;\r\n            }\r\n            if(j==i)cout<<i;\r\n            else cout<<j-1<<endl;\r\n            break;\r\n        }\r\n        else if(i==n-1)\r\n        {\r\n            cout<<-1<<\" \"<<-1<<endl;\r\n        }\r\n    }\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    int m;\r\n    cin>>n>>q;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    for(int i=0;i<q;i++)\r\n    {\r\n        cin>>m;\r\n        search(m);\r\n    }\r\n\r\n}"
          }
        },
        {
          "id": "JD108",
          "title": "剑指方根",
          "url": "http://www.xmuoj.com/contest/359/problem/JD108/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上写下一个数 n：&quot;求它的三次方根。&quot;李少白试了几个整数，立方后不是太大就是太小。赵晴儿说：&quot;别猜了。三次方根一定在 -10000 到 10000 之间。你取中间值试试——如果中间值的立方比 n 大，说明真正的答案在左半边；比 n 小，就在右半边。范围不断缩小，直到精度足够。&quot;&quot;和整数二分一样的思路，&quot;李少白说，&quot;只不过这次找的不是一个确切的位置，而是一个足够精确的浮点数。&quot;&quot;对。整数二分停在某个整数上，浮点二分停在精度达标时。&quot;给定一个浮点数 n，求它的三次方根。</p>",
          "inputDescription": "<p>一个浮点数n（-10000≤n≤10000）。</p>",
          "outputDescription": "<p>n的三次方根，保留6位小数。</p>",
          "hint": "<p>浮点二分：left=-10000, right=10000，while(right-left&gt;1e-8)，mid=(left+right)/2。若 mid³≥n，right=mid；否则 left=mid。<a href=\"https://www.acwing.com/problem/content/792/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/108.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<cmath>\r\n#include<iomanip>\r\nusing namespace std;\r\n\r\n\r\nint main(){\r\n    double n;\r\n    double mid;\r\n    cin>>n;\r\n    double left=-10000,right=10000;\r\n    while(right-left>1e-8)\r\n    {\r\n        mid=(left+right)/2;\r\n        if(pow(mid,3)>=n)\r\n            right=mid;\r\n        else left=mid;\r\n    }\r\n    cout<<fixed<<setprecision(6)<<mid<<endl;\r\n}"
          }
        },
        {
          "id": "JD109",
          "title": "铁壁识痕",
          "url": "http://www.xmuoj.com/contest/359/problem/JD109/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>精铸阁的墙壁上嵌着一排铁板，每块铁板上用二进制刻着一个数——有凹痕的地方是1，平整的地方是0。赵晴儿递给李少白一串数字：&quot;每块铁板上有几道凹痕？数出来。&quot;李少白想逐位检查。赵晴儿教他一个窍门：&quot;用位运算——n & 1 看最低位是不是1，然后 n &gt;&gt;= 1 右移一位，继续看下一位。数完所有位，就知道有几道凹痕了。&quot;给定 n 个整数，输出每个数的二进制表示中有多少个1。</p>",
          "inputDescription": "<p>第一行一个整数n。第二行n个整数（1≤n≤100000）。</p>",
          "outputDescription": "<p>一行，每个数对应的1的个数，空格隔开。</p>",
          "hint": "<p>位运算：while(n &gt; 0) { count += n & 1; n &gt;&gt;= 1; }。或用 n & (n-1) 消去最低位的1，计数更快。<a href=\"https://www.acwing.com/problem/content/803/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/109.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int m,n;\r\n    cin>>m;\r\n    while(m--){\r\n        cin>>n;\r\n        int count=0;\r\n        while(n>0)\r\n        {\r\n            count+=n&1;\r\n            n>>=1;\r\n        }\r\n        cout<<count<<\" \";\r\n    }\r\n}"
          }
        },
        {
          "id": "JD110",
          "title": "万钧合一",
          "url": "http://www.xmuoj.com/contest/359/problem/JD110/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>精铸阁中，赵晴儿递来两块铁牌，上面各刻着一个巨大的数字——长到普通变量根本装不下。&quot;这两个数要加起来，&quot;赵晴儿说，&quot;但没有那么大的容器。怎么办？&quot;李少白想了想：&quot;像竖式加法一样，把每一位拆开，用数组存。从最低位开始逐位相加，满十进一。&quot;&quot;对。这就是高精度加法——用数组模拟竖式。&quot;给定两个正整数，计算它们的和。每个数不超过 100000 位。</p>",
          "inputDescription": "<p>两行，每行一个正整数（不超过100000位）。</p>",
          "outputDescription": "<p>一行，两数之和。</p>",
          "hint": "<p>用数组存每一位（倒序），从低位到高位逐位相加，处理进位。最后倒序输出。<a href=\"https://www.acwing.com/problem/content/793/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/110.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\n#include<cstring>\r\n#include<algorithm>\r\n#include<vector>\r\nusing namespace std;\r\ntypedef long long LL;\r\n\r\nvector<int>add(vector<int> &A,vector<int>&B)\r\n{\r\n    vector<int>C;\r\n    for(int i=0,t=0;i<A.size()||i<B.size()||t;i++)\r\n    {\r\n        if(i<A.size())t+=A[i];\r\n        if(i<B.size())t+=B[i];\r\n        C.push_back(t%10);\r\n        t/=10;\r\n    }\r\n    return C;\r\n}\r\n\r\nvoid print(vector<int>A)\r\n{\r\n    for(int i=A.size()-1;i>=0;i--)\r\n        cout<<A[i];\r\n    cout<<endl;\r\n}\r\n\r\nint main()\r\n{\r\n    string a,b;\r\n    cin>>a>>b;\r\n    vector<int>A,B;\r\n\r\n    for(int i=a.size()-1;i>=0;i--)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    for(int i=b.size()-1;i>=0;i--)\r\n    {\r\n        B.push_back(b[i]-'0');\r\n    }\r\n\r\n    print(add(A,B));\r\n\r\n}\r\n\r\n\r\n\r\n\r\n// int main()\r\n// {\r\n//     string arr[3];\r\n//     int a[3][100001]={0};\r\n//     cin>>arr[0];\r\n//     cin>>arr[1];\r\n//     int a0=arr[0].length(),a1=arr[1].length();\r\n//     int m=max(a0,a1);\r\n//     for(int i=0;i<a0;i++)\r\n//     {\r\n//         a[0][i]=arr[0][a0-i-1]-'0';\r\n//     }\r\n//     for(int i=0;i<a1;i++)\r\n//     {\r\n//         a[1][i]=arr[1][a1-i-1]-'0';\r\n//     }\r\n//     for(int i=0;i<m;i++)\r\n//     {\r\n//         a[2][i]+=a[0][i]+a[1][i];\r\n//         if(a[2][i]>=10)\r\n//         {\r\n//             a[2][i]-=10;\r\n//             a[2][i+1]++;\r\n//         }\r\n//     }\r\n//     for(int i=m;i>=0;i--)\r\n//     {\r\n//         if(i==m&&a[2][m]==0)continue;\r\n//         cout<<a[2][i];\r\n//     }\r\n\r\n\r\n\r\n\r\n\r\n// }"
          }
        },
        {
          "id": "JD111",
          "title": "削铁如泥",
          "url": "http://www.xmuoj.com/contest/359/problem/JD111/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰递给李少白两块铁牌：&quot;这次是减法。大数减大数，注意借位。&quot;李少白接过一看，两个数都很长。他先比较了大小——如果被减数比减数小，结果就是负数，先交换再算。&quot;像竖式减法一样，从最低位开始，不够减就向高位借1。&quot;梁嘉峰说，&quot;削铁如泥，一刃一刃来。&quot;给定两个正整数，计算它们的差（结果可能为负数）。每个数不超过 100000 位。</p>",
          "inputDescription": "<p>两行，每行一个正整数（不超过100000位）。</p>",
          "outputDescription": "<p>一行，两数之差。</p>",
          "hint": "<p>先判断大小，大减小，从低位逐位减，处理借位。如果被减数小则结果加负号。<a href=\"https://www.acwing.com/problem/content/794/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/111.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<cstring>\r\n#include<string>\r\n#include<algorithm>\r\n#include<vector>\r\nusing namespace std;\r\n\r\nstring a,b;\r\n\r\nvoid compare(vector<int>&A,vector<int>&B)\r\n{\r\n    if(A.size()<B.size())swap(A,B);\r\n    else if(A.size()==B.size())\r\n    {\r\n        int i=A.size()-1;\r\n        while(i>=0&&A[i]==B[i])i--;\r\n        if(A[i]<B[i])swap(A,B);\r\n    }\r\n}\r\n\r\nvector<int> sub(vector<int>&A,vector<int>&B)\r\n{\r\n    vector<int>C;\r\n    int t=0;\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        t+=A[i];\r\n        if(i<B.size())t-=B[i];\r\n        C.push_back((t+10)%10);\r\n        if(t<0)t=-1;\r\n        else t=0;\r\n    }\r\n    while(!C.back())C.pop_back();\r\n    return C;\r\n}\r\n\r\nvoid print(vector<int> A)\r\n{\r\n    for(int i=A.size()-1;i>=0;i--)\r\n    {\r\n        cout<<A[i];\r\n    }\r\n}\r\nint main()\r\n{\r\n    cin>>a>>b;\r\n    vector<int>A,B;\r\n    int len1=a.length(),len2=b.length();\r\n    for(int i=len1-1;i>=0;i--)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    for(int i=len2-1;i>=0;i--)\r\n    {\r\n        B.push_back(b[i]-'0');\r\n    }\r\n\r\n    compare(A,B);\r\n    print(sub(A,B));\r\n    cout<<endl;\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD112",
          "title": "叠甲千层",
          "url": "http://www.xmuoj.com/contest/359/problem/JD112/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿递来一块刻着万位数的铁牌和一个小铁块：&quot;大数乘以小数。铁牌上的每一位都要乘以小铁块的数，再处理进位——就像叠甲，一层压一层。&quot;李少白从铁牌的最低位开始，逐位乘以小数，加上前一位的进位，本位留下余数，进位带到下一位。给定一个大正整数 A 和一个小正整数 B，计算 A × B。A 不超过 100000 位，B 不超过 10000。</p>",
          "inputDescription": "<p>两行，第一行正整数A（不超过100000位），第二行正整数B（不超过10000）。</p>",
          "outputDescription": "<p>一行，A×B的结果。</p>",
          "hint": "<p>高精度×低精度：大数每一位乘以小数，处理进位。注意结果可能有前导零需要去掉。<a href=\"https://www.acwing.com/problem/content/795/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/112.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<algorithm>\r\n#include<string>\r\n#include<vector>\r\n\r\nusing namespace std;\r\n\r\nstring a,b;\r\n\r\nvector<int> mul(vector<int>&A,vector<int>&B)\r\n{\r\n    vector<int>C(A.size()+B.size());\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        for(int j=0;j<B.size();j++)\r\n        {\r\n            C[i+j]+=A[i]*B[j];\r\n        }\r\n    }\r\n    for(int i=0,t=0;i<C.size();i++)\r\n    {\r\n        t+=C[i];\r\n        C[i]=t%10;\r\n        t/=10;\r\n    }\r\n    while(C.back()==0&&C.size()>1)C.pop_back();\r\n    return C;\r\n}\r\n\r\nvoid print(vector<int>A)\r\n{\r\n    for(int i=A.size()-1;i>=0;i--)\r\n        cout<<A[i];\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>a>>b;\r\n    vector<int>A,B;\r\n    for(int i=a.size()-1;i>=0;i--)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    for(int i=b.size()-1;i>=0;i--)\r\n    {\r\n        B.push_back(b[i]-'0');\r\n    }\r\n\r\n    print(mul(A,B));\r\n\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD113",
          "title": "分金断玉",
          "url": "http://www.xmuoj.com/contest/359/problem/JD113/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰拿起一把锉刀：&quot;大数除以小数——分金断玉，从高位一刀一刀切。&quot;&quot;从最高位开始，&quot;赵晴儿解释，&quot;当前余数乘10加上当前位，除以除数得到商的一位，剩下的余数带到下一位。和竖式除法一模一样。&quot;给定一个大非负整数 A 和一个小正整数 B，计算 A ÷ B 的商和余数。A 不超过 100000 位，B 不超过 10000。</p>",
          "inputDescription": "<p>两行，第一行非负整数A（不超过100000位），第二行正整数B（B≠0）。</p>",
          "outputDescription": "<p>两行，第一行商，第二行余数。</p>",
          "hint": "<p>高精度÷低精度：从高位到低位，当前余数×10+当前位，除以B得商的一位，更新余数。<a href=\"https://www.acwing.com/problem/content/796/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/113.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\n#include<algorithm>\r\n#include<vector>\r\n\r\nusing namespace std;\r\n\r\nstring a;\r\nint b,m;\r\nvector<int>div(vector<int>&A,int b)\r\n{\r\n    vector<int>C(A.size()-to_string(b).length());\r\n    int t=0;\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        t*=10;\r\n        t+=A[i];\r\n        C.push_back(t/b);\r\n        t%=b;\r\n    }\r\n    m=t;\r\n    while(C.front()==0&&C.size()>1)C.erase(C.begin()); \r\n    return C;\r\n}\r\n\r\nvoid print(vector<int>A)\r\n{\r\n\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        cout<<A[i];\r\n    }\r\n    cout<<endl;\r\n    cout<<m<<endl;\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>a>>b;\r\n    vector<int>A;\r\n    for(int i=0;i<a.size();i++)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    print(div(A,b));\r\n\r\n    return 0;\r\n}\r\n"
          }
        },
        {
          "id": "JD114",
          "title": "双剑求和",
          "url": "http://www.xmuoj.com/contest/359/problem/JD114/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿递给李少白两排有序的铁牌，每排上的数字从小到大排列。她说：&quot;从两排铁牌中各取一块，使它们的数字之和刚好等于一个目标值。&quot;李少白想暴力枚举，但每排都有十万块。赵晴儿说：&quot;两排都是有序的——第一个指针从第一排的头部开始，第二个指针从第二排的尾部开始。如果和太大，第二个指针往左移；和太小，第一个指针往右移。两个指针配合，一次遍历就够了。&quot;给定两个升序数组 A 和 B，以及目标值 x，找出满足 A[i] + B[j] = x 的数对 (i, j)。保证有唯一解。</p>",
          "inputDescription": "<p>第一行两个整数n和m。第二行n个整数。第三行m个整数。</p>",
          "outputDescription": "<p>一行，两个整数i和j。</p>",
          "hint": "<p>双指针：i 从 A 的头，j 从 B 的尾。A[i]+B[j] &lt; x 则 i++，&gt; x 则 j--。O(n+m)。<a href=\"https://www.acwing.com/problem/content/802/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/114.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\n\r\nusing namespace std;\r\n\r\nint a[100001],b[100001];\r\nint n,m,k;\r\nint main()\r\n{\r\n    cin>>n>>m>>k;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    for(int i=0;i<m;i++)cin>>b[i];\r\n\r\n    int i=0,j=m-1,t=a[i]+b[j];\r\n\r\n    while(t!=k)\r\n    {\r\n        if(t<k)i++;\r\n        else if(t>k)j--;\r\n        t=a[i]+b[j];\r\n    }\r\n    cout<<i<<\" \"<<j;\r\n}"
          }
        },
        {
          "id": "JD115",
          "title": "双剑验序",
          "url": "http://www.xmuoj.com/contest/359/problem/JD115/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿拿着两卷竹简，上面各写着一串数字。她问：&quot;第二卷的内容是不是第一卷的子序列？子序列不要求连续，但必须保持原有次序。&quot;李少白用两个指针：&quot;一个指针遍历第一卷，另一个指向第二卷。如果当前字符匹配，第二卷的指针就往前走。最后看第二卷的指针有没有走到头——走到头就说明全部匹配上了。&quot;&quot;对，两个指针各走一遍，O(n)。&quot;给定序列 a（长度 n）和序列 b（长度 m），判断 a 是否为 b 的子序列。</p>",
          "inputDescription": "<p>第一行两个整数n和m。第二行n个整数（序列a）。第三行m个整数（序列b）。</p>",
          "outputDescription": "<p>是子序列输出Yes，否则输出No。</p>",
          "hint": "<p>双指针：i 遍历 a，j 遍历 b。a[i] == b[j] 时 i++。i 到头说明是子序列。<a href=\"https://www.acwing.com/problem/content/2819/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/115.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\n\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n,m;\r\n    int a[100001],b[100001];\r\n    cin>>n>>m;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    for(int i=0;i<m;i++)cin>>b[i];\r\n\r\n    int i=0,j=0;\r\n\r\n    while(j<m)\r\n    {\r\n        if(a[i]==b[j])\r\n        {\r\n            i++,j++;\r\n        }\r\n        else j++;\r\n    }\r\n    if(i==n)cout<<\"Yes\"<<endl;\r\n    else cout<<\"No\"<<endl;\r\n\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD116",
          "title": "无重之最",
          "url": "http://www.xmuoj.com/contest/359/problem/JD116/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在沙盘上摆了一排石块，每块上刻着一个数字。他问：&quot;从这排石块中，找出最长的一段——这段里每个数字都不重复。&quot;李少白想从头遍历每一段，但石块有十万块。赵晴儿教他：&quot;用两个指针，一左一右，框住一段区间。右指针往右扩展，遇到重复数字就收缩左指针，直到区间内没有重复。每一步都更新最大长度。&quot;&quot;两个指针各走各的，总共只走一遍——O(n)。&quot;给定一个长度为 n 的整数序列，找出最长的不含重复数字的连续子序列，输出其长度。</p>",
          "inputDescription": "<p>第一行一个整数n。第二行n个整数（1≤n≤100000）。</p>",
          "outputDescription": "<p>一行，最长连续不重复子序列的长度。</p>",
          "hint": "<p>滑动窗口：右指针扩展，用哈希表判断是否重复，重复则左指针收缩。O(n)。<a href=\"https://www.acwing.com/problem/content/801/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/116.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n;\r\n    int a[100001];\r\n    vector<int>b;\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    vector<int>v;\r\n    int t=0;\r\n    for(int i=0;i<n;i++)//1 2 4 2 5 6 7是：5\r\n    {\r\n\r\n        if(find(v.begin(),v.end(),a[i])==v.end()){\r\n            t++;\r\n            v.push_back(a[i]);\r\n        }\r\n        else {\r\n            b.push_back(t);\r\n            t=0;\r\n            v.erase(v.begin(), find(v.begin(),v.end(),a[i])+1); \r\n            v.push_back(a[i]);\r\n            t=v.size();\r\n        }\r\n    }b.push_back(t);\r\n    sort(b.begin(),b.end());\r\n    cout<<b.back();\r\n}"
          }
        },
        {
          "id": "JD117",
          "title": "独剑无双",
          "url": "http://www.xmuoj.com/contest/359/problem/JD117/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>藏剑阁深处，梁嘉峰领着李少白走进一间密室。墙上挂满了剑，每把剑柄上都刻着一个数字。&quot;这些剑，成双成对，唯有一把是独一无二的。&quot;梁嘉峰说，&quot;你能在 O(1) 额外空间内找出它吗？&quot;李少白想用哈希表记录每把剑出现的次数。赵晴儿摇头：&quot;空间不够。想想异或的性质——a ^ a = 0，a ^ 0 = a。成对的剑异或后消失，留下的就是独剑。&quot;给定 n 个整数，其中只有一个数出现了一次，其余数都恰好出现了两次。找出那个只出现一次的数。要求时间复杂度 O(n)，空间复杂度 O(1)。</p>",
          "inputDescription": "<p>第一行一个整数 n（n 为奇数，1 ≤ n ≤ 100000）。第二行 n 个整数，每个数在 int 范围内。</p>",
          "outputDescription": "<p>一行，只出现一次的那个数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/92/\" target=\"_blank\">原题链接</a>异或性质：a^a=0, a^0=a。所有数异或，成对消失，独者现身。O(n) 时间，O(1) 空间。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/117.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    int a[100001];\r\n    vector<int>b;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n        if(find(b.begin(),b.end(),a[i])==b.end())b.push_back(a[i]);\r\n        else b.erase(find(b.begin(),b.end(),a[i]));\r\n    }\r\n\r\n    for(int i=0;i<b.size();i++)\r\n        if(b[i]!=0){\r\n            cout<<b[i];break;\r\n        }\r\n}"
          }
        },
        {
          "id": "JD118",
          "title": "剑招收放",
          "url": "http://www.xmuoj.com/contest/359/problem/JD118/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>剑道宗大殿前，十八般兵器陈列两旁。梁嘉峰指着 n 把剑说：&quot;每一把，你可以选择施展（选）或收起（不选）。列出所有可能的剑招组合。&quot;李少白问：&quot;n 把剑有 2^n 种组合，怎么枚举？&quot;赵晴儿递来一张纸：&quot;递归。对于每把剑，先试&#039;选&#039;，再试&#039;不选&#039;。走到尽头就输出当前组合。&quot;给定 n，输出 1~n 的所有非空子集。同一行内的数必须升序排列，相邻两个数之间用空格隔开。各行（不同方案）之间的顺序任意。</p>",
          "inputDescription": "<p>一行一个整数 n（1 ≤ n ≤ 16）。</p>",
          "outputDescription": "<p>每行一个子集，子集内数字升序排列，子集之间按字典序排列。空集不输出。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/94/\" target=\"_blank\">原题链接</a>递归枚举：对每个位置选或不选，到达边界输出。2^n 种组合。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/118.cpp",
            "language": "cpp",
            "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;if(!(cin>>n))return 0;\r\nfor(int mask=1;mask<(1<<n);mask++){bool first=true;for(int i=0;i<n;i++)if(mask>>i&1){if(!first)cout<<' ';first=false;cout<<i+1;}cout<<\"\\n\";}}\r\n"
          }
        },
        {
          "id": "JD119",
          "title": "剑阵组合",
          "url": "http://www.xmuoj.com/contest/359/problem/JD119/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>练武场上，梁嘉峰递给李少白 n 把剑，说：&quot;从中选出 k 把，列出所有选法。&quot;李少白问：&quot;这和子集枚举有什么区别？&quot;赵晴儿说：&quot;子集枚举是选任意数量，组合枚举是恰好选 k 个。多了一个约束——必须选满 k 个才能输出。但递归框架类似，只是多了一个剪枝。&quot;给定 n 和 k，按字典序输出从 1~n 中选 k 个数的所有组合。每个组合内数字升序排列。</p>",
          "inputDescription": "<p>一行两个整数 n 和 k（1 ≤ k ≤ n ≤ 16）。</p>",
          "outputDescription": "<p>每行 k 个数（升序），组合之间按字典序排列。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/95/\" target=\"_blank\">原题链接</a>递归枚举，每次从上一个数+1开始。剪枝：剩余数字不够则提前返回。C(n,k) 种组合。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/119.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint n,m;\r\nconst int N=100;\r\nint arr[N];\r\nbool st[N];\r\nvoid dfs(int u,int start)//多一个start方便判断\r\n{\r\n    if(u>m)\r\n    {\r\n        for(int i=1;i<=m;i++)\r\n        {\r\n            if(i!=1)cout<<\" \";\r\n            cout<<arr[i];\r\n        }\r\n        cout<<endl;\r\n    }\r\n    else {\r\n        for(int i=start;i<=n;i++)\r\n        {\r\n            if(!st[i])\r\n            {\r\n                arr[u]=i;\r\n                st[i]=true;\r\n                dfs(u+1,i+1);\r\n                arr[u]=0;\r\n                st[i]=false;\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n>>m;\r\n    dfs(1,1);\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD120",
          "title": "江湖真假",
          "url": "http://www.xmuoj.com/contest/359/problem/JD120/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>江湖之中，n 位高手各立门派。有人传言：&quot;甲和乙是同门师兄弟。&quot;又有人说：&quot;丙能打败丁。&quot;梁嘉峰说：&quot;江湖中，同类不吃同类。但吃的关系是传递的——甲吃乙、乙吃丙，则甲也吃丙。&quot;赵晴儿教他：&quot;用带权并查集。每个节点到根的距离 mod 3 表示关系：距离 0 是同类，距离 1 能吃根，距离 2 被根吃。&quot;给定 n 个人和 m 条关系声明，判断有多少条是假的（与前面的真话矛盾）。</p>",
          "inputDescription": "<p>第一行两个整数 n 和 m（1 ≤ n ≤ 50000, 1 ≤ m ≤ 100000）。接下来 m 行，每行三个整数 d x y。d=1 表示同类，d=2 表示 x 吃 y。</p>",
          "outputDescription": "<p>一行，假话的数量。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/242/\" target=\"_blank\">原题链接</a>带权并查集。节点到根距离 mod 3：0=同类，1=吃根，2=被根吃。路径压缩时更新距离。</p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/120.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\n\r\nusing namespace std;\r\n\r\nint parent[50005], dist[50005];\r\n\r\nint find(int x)\r\n{\r\n    if(parent[x] == x) return x;\r\n    int t = parent[x];\r\n    int root = find(t);\r\n    dist[x] = (dist[x] + dist[t]) % 3;\r\n    parent[x] = root;\r\n    return root;\r\n}\r\n\r\nint main()\r\n{\r\n    int n, m;\r\n    cin >> n >> m;\r\n    \r\n    for(int i = 1; i <= n; i++)\r\n    {\r\n        parent[i] = i;\r\n        dist[i] = 0;\r\n    }\r\n    \r\n    int ans = 0;\r\n    \r\n    for(int i = 0; i < m; i++)\r\n    {\r\n        int d, x, y;\r\n        cin >> d >> x >> y;\r\n        \r\n        if(x > n || y > n)\r\n        {\r\n            ans++;\r\n            continue;\r\n        }\r\n        \r\n        int rx = find(x);\r\n        int ry = find(y);\r\n        \r\n        if(d == 1)\r\n        {\r\n            if(rx == ry)\r\n            {\r\n                if(((dist[x] - dist[y]) % 3 + 3) % 3 != 0) ans++;\r\n            }\r\n            else\r\n            {\r\n                parent[rx] = ry;\r\n                dist[rx] = ((dist[y] - dist[x]) % 3 + 3) % 3;\r\n            }\r\n        }\r\n        else\r\n        {\r\n            if(rx == ry)\r\n            {\r\n                if(((dist[x] - dist[y]) % 3 + 3) % 3 != 1) ans++;\r\n            }\r\n            else\r\n            {\r\n                parent[rx] = ry;\r\n                dist[rx] = ((dist[y] - dist[x] + 1) % 3 + 3) % 3;\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << ans << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD121",
          "title": "蓄势之术",
          "url": "http://www.xmuoj.com/contest/359/problem/JD121/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>蓄势阁中，赵晴儿盘膝而坐，面前摆着一排石块，每块上刻着一个数字。&quot;如果我问你第3块到第7块的总和，你怎么算？&quot;赵晴儿问。李少白：&quot;从第3块加到第7块，五次加法。&quot;&quot;如果问一千次呢？&quot;赵晴儿摇头，&quot;每次从头算太浪费了。提前算好从第1块到每一块的累积和——第1块到第7块的和减去第1块到第2块的和，就是第3块到第7块的和。一次减法就够了。&quot;&quot;这就是前缀和——蓄势于前，取用于后。&quot;给定一个长度为 n 的整数序列和 m 个查询，每个查询求 [l, r] 的区间和。</p>",
          "inputDescription": "<p>第一行两个整数n和m。接下来n行每行两个整数x和c。接下来m行每行两个整数l和r。</p>",
          "outputDescription": "<p>m行，每行一个整数。</p>",
          "hint": "<p>前缀和：s[i] = a[1] + ... + a[i]。区间和 = s[r] - s[l-1]。<a href=\"https://www.acwing.com/problem/content/797/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/121.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint n,m,ss=0;\r\nint l,r;\r\nint a[100001],s[100001];\r\nint main()\r\n{\r\n    cin>>n>>m;\r\n    for(int i=1;i<=n;i++){\r\n        cin>>a[i];\r\n        ss+=a[i];\r\n        s[i]=ss;\r\n    }\r\n    while(cin>>l&&cin>>r)\r\n    {\r\n        cout<<s[r]-s[l-1];\r\n        cout<<endl;\r\n    }\r\n\r\n}\r\n"
          }
        },
        {
          "id": "JD122",
          "title": "方阵蓄势",
          "url": "http://www.xmuoj.com/contest/359/problem/JD122/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上画了一个 n 行 m 列的数字矩阵。&quot;如果我问你左上角 (x1,y1) 到右下角 (x2,y2) 这个子矩阵里所有数的和，你怎么算？&quot;李少白想逐行累加。赵晴儿摇头：&quot;太慢了。和一维前缀和一样的思路——提前算好从 (1,1) 到每个位置的累积和。查询时用容斥原理：大矩形减去左边和上边的多余部分，加上左上角多减的部分。&quot;&quot;蓄势蓄到二维，一击覆盖任意子矩阵。&quot;给定一个 n×m 的整数矩阵和 q 个查询，每个查询求子矩阵的和。</p>",
          "inputDescription": "<p>第一行一个整数n（1≤n≤100000）。接下来n行每行两个整数l和r。</p>",
          "outputDescription": "<p>q行，每行一个整数，表示每次查询的子矩阵和。</p>",
          "hint": "<p>二维前缀和+容斥。子矩阵和 = s[x2][y2] - s[x1-1][y2] - s[x2][y1-1] + s[x1-1][y1-1]。<a href=\"https://www.acwing.com/problem/content/798/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/122.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n//测试样例有问题\r\nint main()\r\n{\r\n    int n,m,q;\r\n    int x1,y1,x2,y2;\r\n    int a[1001][1001],s[1001][1001],ss=0;\r\n    cin>>n>>m>>q;\r\n    for(int i=1;i<=n;i++)\r\n        for(int j=1;j<=m;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            s[i][j] = s[i-1][j] + s[i][j-1] - s[i-1][j-1] + a[i][j];\r\n            //ss+=a[i][j];\r\n            //s[i][j]=ss;\r\n        }\r\n    while(q--)\r\n    {\r\n        cin>>x1>>y1>>x2>>y2;\r\n        cout<<s[x2][y2]-s[x1-1][y2]-s[x2][y1-1]+s[x1-1][y1-1]<<endl;\r\n    }\r\n\r\n\r\n\r\n\r\n}"
          }
        },
        {
          "id": "JD123",
          "title": "差分之术",
          "url": "http://www.xmuoj.com/contest/359/problem/JD123/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿指着一排石块：&quot;我要把第3块到第7块每块都加上5。如果一块块改，太慢了。&quot;梁嘉峰说：&quot;差分——前缀和的逆运算。你在第3块的位置加5，在第8块的位置减5。最后对整排求一次前缀和，第3到第7块就都加了5，其余不变。&quot;&quot;就像往水面扔两块石头，&quot;李少白恍然大悟，&quot;波纹叠加后就是最终结果。&quot;给定一个长度为 n 的整数序列和 m 个操作，每个操作将 [l, r] 的每个数加 c。输出所有操作后的序列。</p>",
          "inputDescription": "<p>第一行两个整数n和m。第二行n个整数。接下来m行每行两个整数l和r。</p>",
          "outputDescription": "<p>一行，n个整数，空格隔开，表示经过m次操作后的最终序列。</p>",
          "hint": "<p>差分：b[l] += c, b[r+1] -= c。所有操作完成后，对 b 求前缀和得到最终序列。<a href=\"https://www.acwing.com/problem/content/799/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/123.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n// 测试样例有误\r\nint n,m,ss=0,num;\r\nint l,r;\r\nint a[100001],s[100001];\r\nint main()\r\n{\r\n    cin>>n>>m;//差分\r\n    for(int i=1;i<=n;i++){\r\n        cin>>a[i];\r\n        s[i]=a[i]-a[i-1];\r\n    }\r\n    while(m--)\r\n    {\r\n        cin>>l>>r>>num;\r\n        s[l]+=num,s[r+1]-=num;\r\n    }\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        a[i]=a[i-1]+s[i];\r\n        cout<<a[i]<<\" \";\r\n    }\r\n    cout<<endl;\r\n    return 0;\r\n\r\n}\r\n"
          }
        },
        {
          "id": "JD124",
          "title": "方阵差分",
          "url": "http://www.xmuoj.com/contest/359/problem/JD124/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上画了一个 n 行 m 列的矩阵：&quot;我要把左上角 (x1,y1) 到右下角 (x2,y2) 这个子矩阵里每个数都加上 c。&quot;梁嘉峰说：&quot;和一维差分一样的思路——在差分矩阵的四个角加减，最后对整个矩阵求一次二维前缀和，就还原出最终结果了。&quot;&quot;蓄势蓄到二维，差分也能覆盖任意子矩阵。&quot;给定一个 n×m 的整数矩阵和 q 个操作，每个操作将子矩阵的每个元素加 c。输出所有操作后的矩阵。</p>",
          "inputDescription": "<p>第一行三个整数n、m和q。接下来n行每行m个整数。接下来q行每行四个整数x1、y1、x2、y2。</p>",
          "outputDescription": "<p>n行，每行m个整数，表示操作后的矩阵。</p>",
          "hint": "<p>二维差分：在四个角加减，最后求二维前缀和。<a href=\"https://www.acwing.com/problem/content/800/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/124.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n//题目出错\r\nint main()\r\n{\r\n    int n,m,q;\r\n    int a[1001][1001]={0},s[1001][1001]={0},sum=0;\r\n    cin>>n>>m>>q;\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        for(int j=1;j<=m;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            \r\n        }\r\n    }\r\n    int x1,y1,x2,y2,c;\r\n    while(q--)\r\n    {\r\n        cin>>x1>>y1>>x2>>y2>>c;\r\n        s[x1][y1] += c;\r\n        if(y2 + 1 <= m) s[x1][y2 + 1] -= c;\r\n        if(x2 + 1 <= n) s[x2 + 1][y1] -= c;\r\n        if(x2 + 1 <= n && y2 + 1 <= m) s[x2 + 1][y2 + 1] += c;\r\n    }\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        for(int j=1;j<=m;j++)\r\n        {\r\n           s[i][j] += s[i-1][j] + s[i][j-1] - s[i-1][j-1];\r\n            a[i][j] += s[i][j];\r\n            cout<<a[i][j]<<\" \";\r\n        }\r\n        cout<<endl;\r\n    }\r\n}"
          }
        },
        {
          "id": "JD125",
          "title": "离散聚力",
          "url": "http://www.xmuoj.com/contest/359/problem/JD125/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿指着一条无限长的数轴：&quot;坐标从负无穷到正无穷，但真正有值的位置只有几个。如果开一个那么大的数组，太浪费了。&quot;&quot;所以要把这些稀疏的大坐标映射到连续的小下标上——这就是离散化。&quot;梁嘉峰接话，&quot;映射之后再用前缀和，就能 O(1) 回答区间求和的查询。&quot;&quot;先聚力于有用之处，再一击命中。&quot;假定有一个无限长的数轴，初始每个坐标上都是0。先进行 n 次操作，每次将位置 x 上的数加 c。然后进行 m 次查询，每次求区间 [l, r] 的和。</p>",
          "inputDescription": "<p>第一行两个整数n和m。第二行n个整数。接下来m行每行三个整数l、r和c。</p>",
          "outputDescription": "<p>m行，每行一个整数，表示每次查询的结果。</p>",
          "hint": "<p>离散化：排序去重后映射到连续下标。用前缀和回答区间查询。<a href=\"https://www.acwing.com/problem/content/804/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/125.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<algorithm>\r\n#include<vector>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n, m;\r\n    cin >> n >> m;\r\n    \r\n    vector<pair<int, int>> add;  // 存储加操作 (位置, 加的值)\r\n    vector<pair<int, int>> query; // 存储查询 (l, r)\r\n    vector<int> alls;            // 所有需要离散化的坐标\r\n    \r\n    // 读入 n 次加操作\r\n    for(int i = 0; i < n; i++)\r\n    {\r\n        int x, c;\r\n        cin >> x >> c;\r\n        add.push_back({x, c});\r\n        alls.push_back(x);\r\n    }\r\n    \r\n    // 读入 m 次查询\r\n    for(int i = 0; i < m; i++)\r\n    {\r\n        int l, r;\r\n        cin >> l >> r;\r\n        query.push_back({l, r});\r\n        alls.push_back(l);\r\n        alls.push_back(r);\r\n    }\r\n    \r\n    // 排序去重\r\n    sort(alls.begin(), alls.end());\r\n    alls.erase(unique(alls.begin(), alls.end()), alls.end());\r\n    \r\n    // 离散化后的数组\r\n    vector<int> a(alls.size() + 1, 0);\r\n    \r\n    // 处理加操作\r\n    for(auto p : add)\r\n    {\r\n        int x = p.first;\r\n        int c = p.second;\r\n        int idx = lower_bound(alls.begin(), alls.end(), x) - alls.begin() + 1;\r\n        a[idx] += c;\r\n    }\r\n    \r\n    // 计算前缀和\r\n    vector<long long> prefix(alls.size() + 1, 0);\r\n    for(int i = 1; i <= alls.size(); i++)\r\n    {\r\n        prefix[i] = prefix[i-1] + a[i];\r\n    }\r\n    \r\n    // 处理查询\r\n    for(auto q : query)\r\n    {\r\n        int l = q.first;\r\n        int r = q.second;\r\n        int left = lower_bound(alls.begin(), alls.end(), l) - alls.begin() + 1;\r\n        int right = lower_bound(alls.begin(), alls.end(), r) - alls.begin() + 1;\r\n        cout << prefix[right] - prefix[left - 1] << endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD126",
          "title": "合围归阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD126/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在地上画了一堆区间，有些重叠，有些相邻。&quot;把这些区间合并——有交集的归为一组，最后数一数有几组。&quot;赵晴儿蹲下来看了一会儿：&quot;先按左端点从小到大排。然后从左往右扫——如果当前区间的左端点在前一个区间内，说明它们重叠，合并；否则新开一组。&quot;&quot;合围之势，聚散有序。&quot;给定 n 个区间，合并所有有交集的区间（端点相交也算），输出合并后的区间个数。</p>",
          "inputDescription": "<p>第一行包含整数n，表示区间个数。接下来n行，每行包含两个整数l和r，表示一个区间的左右端点。</p>",
          "outputDescription": "<p>一个整数，表示合并后的区间个数。</p>",
          "hint": "<p>按左端点排序，遍历合并：当前区间左端点 ≤ 前一个右端点则合并，否则新开。<a href=\"https://www.acwing.com/problem/content/805/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/126.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<algorithm>\r\nusing namespace std;\r\n//贪心算法\r\nstruct Node \r\n{ \r\n    int l, r; \r\n};\r\n\r\nbool cmp(Node a, Node b) \r\n{ \r\n    return a.l < b.l; \r\n}\r\n\r\nint main() {\r\n    int n;\r\n    cin >> n;\r\n    if (n == 0) { cout << 0; return 0; }\r\n    Node a[5000];\r\n    for (int i = 0; i < n; i++) cin >> a[i].l >> a[i].r;\r\n    sort(a, a + n, cmp);\r\n    int cnt = 1, curR = a[0].r;\r\n    for (int i = 1; i < n; i++) {\r\n        if (a[i].l <= curR) curR = max(curR, a[i].r);\r\n        else { cnt++; curR = a[i].r; }\r\n    }\r\n    cout << cnt;\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD127",
          "title": "一箭穿心",
          "url": "http://www.xmuoj.com/contest/359/problem/JD127/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在数轴上标了 N 个区间，每个区间表示一个敌人的巡逻范围。&quot;用最少的暗器，让每个敌人的巡逻范围里至少中一枚。&quot;李少白想每个区间放一枚。赵晴儿摇头：&quot;贪心——按右端点从小到大排。第一枚暗器射在第一个区间的右端点，这样所有包含这个点的区间都中了。然后跳过这些区间，再射下一批。&quot;&quot;选右端点是因为它最&#039;靠左&#039;——能覆盖尽可能多的后续区间。&quot;给定 N 个闭区间，选择尽量少的点，使得每个区间内至少有一个点。</p>",
          "inputDescription": "<p>第一行一个整数N（1≤N≤100000）。接下来N行每行两个整数a和b。</p>",
          "outputDescription": "<p>一行，最少需要的点数。</p>",
          "hint": "<p>按右端点排序，每次选当前区间的右端点，跳过所有包含该点的区间。<a href=\"https://www.acwing.com/problem/content/907/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/127.cpp",
            "language": "cpp",
            "code": "\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\ntypedef pair<int,int> PII;\r\nint main(){\r\n    ios::sync_with_stdio(false);\r\n    cin.tie(nullptr);\r\n    int n; if(!(cin>>n)) return 0;\r\n    vector<PII> segs;\r\n    for(int i=0;i<n;i++){\r\n        int l,r; cin>>l>>r;\r\n        segs.push_back({r,l});\r\n    }\r\n    sort(segs.begin(),segs.end());\r\n    int res=0, ed=-2e9;\r\n    for(auto seg:segs){\r\n        if(seg.second>ed){\r\n            res++;\r\n            ed=seg.first;\r\n        }\r\n    }\r\n    cout<<res<<\"\\n\";\r\n}\r\n\r\n"
          }
        },
        {
          "id": "JD128",
          "title": "合果成堆",
          "url": "http://www.xmuoj.com/contest/359/problem/JD128/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>果园里有 N 堆果子，每堆重量不同。赵晴儿要把它们合并成一堆，每次只能合并两堆，消耗的能量等于两堆重量之和。&quot;如果先合并重的，后面每次合并都要带着这堆重的走，代价越来越大。&quot;赵晴儿说，&quot;所以反过来——每次选最轻的两堆合并，这样每一步的代价都最小。&quot;李少白想到用小根堆：&quot;每次取出堆顶（最轻的两堆），合并后放回去。总代价最小。&quot;这就是哈夫曼树的思想。有 N 堆果子，每次合并两堆（代价为两堆之和），求合并为一堆的最小总代价。</p>",
          "inputDescription": "<p>第一行一个整数N（1≤N≤10000）。第二行N个整数，表示每堆的重量。</p>",
          "outputDescription": "<p>一行，最小总代价。</p>",
          "hint": "<p>小根堆：每次取最小的两个合并，结果放回堆中。O(nlogn)。<a href=\"https://www.acwing.com/problem/content/150/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/128.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int N,x,temp=0;\r\n    vector<int>a;//容器用于存放数据\r\n    cin>>N;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cin>>x;\r\n        a.push_back(x);\r\n    }\r\n    while(N!=1)//每次排序然后最小的两个元素相加代价最小\r\n    {\r\n        sort(a.begin(),a.end());\r\n        a[1]=a[0]+a[1];\r\n        temp+=a[1];\r\n        a.erase(a.begin());//相加完删除第一项\r\n        N--;\r\n\r\n    }\r\n    cout<<temp<<endl;\r\n\r\n}"
          }
        },
        {
          "id": "JD129",
          "title": "中位之选",
          "url": "http://www.xmuoj.com/contest/359/problem/JD129/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>数轴上有 N 个商铺，赵晴儿要建一个货仓，让所有商铺到货仓的货物运输距离之和最小。&quot;选在哪里？&quot;李少白问。&quot;排序后取中位数。&quot;赵晴儿说，&quot;数学可以证明：中位数使绝对偏差之和最小。如果选在中位数左边，右边的商铺距离全部变远；选在中位数右边，左边的商铺距离全部变远。只有中位数是平衡点。&quot;给定 N 个点的坐标，求一个位置使所有点到该位置的绝对距离之和最小，输出最小距离之和。</p>",
          "inputDescription": "<p>第一行一个整数N（1≤N≤100000）。第二行N个整数，表示各点坐标。</p>",
          "outputDescription": "<p>一行，最小距离之和。</p>",
          "hint": "<p>排序后取中位数（下标 n/2），计算所有点到中位数的距离之和。<a href=\"https://www.acwing.com/problem/content/106/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/129.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<algorithm>\r\nusing namespace std;\r\n//排序后取中位数（下标 n/2），计算所有点到中位数的距离之和\r\nint main()\r\n{\r\n    int a[100001],l=0;//l用于计数\r\n    int N,mid;\r\n    cin>>N;\r\n    for(int i=0;i<N;i++)cin>>a[i];\r\n    sort(a,a+N);\r\n    mid=N/2;//mid为中位数\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        l+=abs(a[mid]-a[i]);//距离要取绝对值\r\n    }\r\n    cout<<l<<endl;\r\n\r\n\r\n}"
          }
        },
        {
          "id": "JD130",
          "title": "铁链串珠",
          "url": "http://www.xmuoj.com/contest/359/problem/JD130/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>兵器阁的深处，梁嘉峰指着一条铁链：&quot;这条链上每颗珠子存着一个值，每颗珠子还指着下一颗——这就是链表。&quot;&quot;用数组模拟链表：head指向第一颗珠子，val[]存每颗珠子的值，ne[]存下一颗珠子的下标。插入、删除都只需要改指针，O(1)。&quot;赵晴儿说：&quot;链表的好处是插入删除快，代价是不能随机访问。&quot;实现一个单链表，支持在头部插入、在第k个插入的元素后面插入、删除第k个插入的元素前面的元素。</p>",
          "inputDescription": "<p>若干行操作命令：H x（头部插入x）、I k x（在第k个插入的元素后插入x）、D k（删除第k个插入的元素前面的元素）。</p>",
          "outputDescription": "<p>输出最终链表，从头到尾空格隔开。</p>",
          "hint": "<p>数组模拟链表：head, val[], ne[]。插入：新节点的ne指向原next，前驱的ne指向新节点。<a href=\"https://www.acwing.com/problem/content/828/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/130.cpp",
            "language": "cpp",
            "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\r\nint m;if(!(cin>>m))return 0;vector<int>e(m+5),ne(m+5);int head=-1,idx=0;auto add_head=[&](int x){e[idx]=x;ne[idx]=head;head=idx++;};auto add=[&](int k,int x){e[idx]=x;ne[idx]=ne[k];ne[k]=idx++;};auto del=[&](int k){if(k==-1)head=ne[head];else ne[k]=ne[ne[k]];};\r\nwhile(m--){char op;cin>>op;if(op=='H'){int x;cin>>x;add_head(x);}else if(op=='I'){int k,x;cin>>k>>x;add(k-1,x);}else{int k;cin>>k;if(k==0)del(-1);else del(k-1);}}\r\nfor(int i=head;i!=-1;i=ne[i])cout<<e[i]<<' ';cout<<\"\\n\";}\r\n"
          }
        },
        {
          "id": "JD131",
          "title": "叠石成塔",
          "url": "http://www.xmuoj.com/contest/359/problem/JD131/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在墙角堆了一摞石块：&quot;栈——后进先出。只能从顶部放石块，也只能从顶部取。&quot;赵晴儿指着石块：&quot;push是放石块到顶部，pop是取走顶部的石块，query是看看顶部那块刻着什么数。&quot;&quot;生活中到处是栈——叠盘子、摞书、函数调用。&quot;实现一个栈，支持push、pop、query、empty操作。</p>",
          "inputDescription": "<p>若干行操作命令：push x（入栈）、pop（出栈）、query（查询栈顶）、empty（判断栈是否为空）。</p>",
          "outputDescription": "<p>对每个query和empty操作输出一行结果。其中query输出栈顶元素，empty输出YES或NO。</p>",
          "hint": "<p>数组模拟栈：tt指向栈顶。push: st[++tt]=x。pop: tt--。query: st[tt]。empty: 判断tt是否为0。<a href=\"https://www.acwing.com/problem/content/830/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/131.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nconst int N = 100010; \r\nint st[N], tt = 0;    // tt 指向栈顶元素位置，0 表示空栈\r\n\r\nint main() {\r\n    int n, x;\r\n    string op;\r\n    cin >> n;\r\n    \r\n    while (n--) {\r\n        cin >> op;\r\n        \r\n        if (op == \"push\") {\r\n            cin >> x;\r\n            st[++tt] = x;   // 1. 先移动指针，再赋值\r\n        } \r\n        else if (op == \"pop\") {\r\n            if (tt > 0) tt--; // 2. 必须判空！否则栈顶指针变为 -1 会越界\r\n        } \r\n        else if (op == \"query\") {\r\n            if (tt > 0) cout << st[tt] << endl; // 3. 必须判空！\r\n        } \r\n        else if (op == \"empty\") {\r\n            // 4. 你的判断完全正确：tt为0则为空\r\n            if (tt == 0) cout << \"YES\" << endl;\r\n            else cout << \"NO\" << endl;\r\n        }\r\n    }\r\n    return 0;\r\n}\r\n\r\n\r\n//不使用数组的做法\r\n\r\n\r\n// #include<iostream>\r\n// #include<stack>\r\n// #include<string>\r\n// using namespace std;\r\n\r\n// int main()\r\n// {\r\n//     stack<int>a;\r\n//     int n,m;\r\n//     string c;\r\n//     cin>>n;\r\n//     while(n--)\r\n//     {\r\n//         cin>>c;\r\n//         if(c==\"push\")\r\n//         {\r\n//             cin>>m;\r\n//             a.push(m);\r\n//         }\r\n//         else if(c==\"pop\")\r\n//         {\r\n//             a.pop();\r\n//         }\r\n//         else if(c[0]=='q')\r\n//         {\r\n//             cout<<a.top()<<endl;\r\n//         }\r\n//         else if(c[0]=='e')\r\n//         {\r\n//             if(a.empty())\r\n//             {\r\n//                 cout<<\"YES\"<<endl;\r\n//             }\r\n//             else cout<<\"NO\"<<endl;\r\n//         }\r\n//     }\r\n\r\n\r\n\r\n// }"
          }
        },
        {
          "id": "JD132",
          "title": "列阵待命",
          "url": "http://www.xmuoj.com/contest/359/problem/JD132/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿指着一排队列：&quot;队列——先进先出。新来的站队尾，走的从队头走。&quot;梁嘉峰说：&quot;push是从队尾加入，pop是从队头弹出，query是看队头是谁。&quot;&quot;排队买饭、消息队列、BFS——都是队列。&quot;实现一个队列，支持push、pop、query、empty操作。</p>",
          "inputDescription": "<p>若干行操作命令：push x（入队）、pop（出队）、query（查询队头）、empty（判断队列是否为空）。</p>",
          "outputDescription": "<p>对每个query和empty操作输出一行结果。其中query输出队头元素，empty输出YES或NO。</p>",
          "hint": "<p>数组模拟队列：hh队头，tt队尾。push: q[++tt]=x。pop: hh++。query: q[hh]。empty: 判断hh是否大于tt。<a href=\"https://www.acwing.com/problem/content/831/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/132.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nconst int N = 100010; \r\nint st[N], tt = -1,hh=0;    // tt 指向栈顶元素位置为-1，hh指向头为0\r\n\r\nint main() {\r\n    int n, x;\r\n    string op;\r\n    cin >> n;\r\n    \r\n    while (n--) {\r\n        cin >> op;\r\n        if (op == \"push\") {\r\n            cin >> x;\r\n            st[++tt] = x;  \r\n        } \r\n        else if (op == \"pop\") {\r\n            hh++; \r\n        } \r\n        else if (op == \"query\") {\r\n            cout << st[hh] << endl;\r\n        } \r\n        else if (op == \"empty\") {\r\n            if (tt<hh) cout << \"YES\" << endl;\r\n            else cout << \"NO\" << endl;\r\n        }\r\n    }\r\n    return 0;\r\n}\r\n"
          }
        },
        {
          "id": "JD133",
          "title": "算筹求值",
          "url": "http://www.xmuoj.com/contest/359/problem/JD133/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿递来一个算式：&quot;3 + 4 * 2 - ( 1 + 5 )。算出结果。&quot;梁嘉峰拿出两个盒子：&quot;数字盒和符号盒。遇到数字放数字盒。遇到符号——如果比栈顶符号优先级低，就把栈顶符号和两个数字算掉。遇到左括号直接放，遇到右括号一直算到左括号。&quot;&quot;用两个栈——数字栈和运算符栈，按优先级处理。&quot;给定一个包含 +、-、*、/、(、) 的表达式，求值。</p>",
          "inputDescription": "<p>一行包含+、-、*、/、(、)和整数的表达式。</p>",
          "outputDescription": "<p>一行，表达式的值。</p>",
          "hint": "<p>双栈法：数字栈+运算符栈。比较优先级决定是否先算栈顶。<a href=\"https://www.acwing.com/problem/content/3305/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/133.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <stack>\r\n#include <string>\r\n#include <unordered_map>\r\nusing namespace std;\r\n\r\n// 判断字符是否为数字\r\nbool isDigit(char c) {\r\n    return c >= '0' && c <= '9';\r\n}\r\n\r\n// 计算两个数的结果\r\nint calc(int a, int b, char op) {\r\n    if (op == '+') return a + b;\r\n    if (op == '-') return a - b;\r\n    if (op == '*') return a * b;\r\n    if (op == '/') return a / b;  // 题目保证整除\r\n    return 0;\r\n}\r\n\r\nint main() {\r\n    string s;\r\n    cin >> s;\r\n    \r\n    stack<int> num;      // 数字栈\r\n    stack<char> op;      // 运算符栈\r\n    \r\n    // 优先级映射：数值越大优先级越高\r\n    unordered_map<char, int> priority = {\r\n        {'+', 1},\r\n        {'-', 1},\r\n        {'*', 2},\r\n        {'/', 2}\r\n    };\r\n    \r\n    for (int i = 0; i < s.size(); i++) {\r\n        char c = s[i];\r\n        \r\n        // 1. 遇到数字：读取完整数字（可能有多位）\r\n        if (isDigit(c)) {\r\n            int x = 0;\r\n            while (i < s.size() && isDigit(s[i])) {\r\n                x = x * 10 + (s[i] - '0');\r\n                i++;\r\n            }\r\n            i--;  // 回退一步，因为for循环会自增\r\n            num.push(x);\r\n        }\r\n        // 2. 遇到左括号：直接入栈\r\n        else if (c == '(') {\r\n            op.push(c);\r\n        }\r\n        // 3. 遇到右括号：一直计算到左括号\r\n        else if (c == ')') {\r\n            while (!op.empty() && op.top() != '(') {\r\n                int b = num.top(); num.pop();\r\n                int a = num.top(); num.pop();\r\n                char oper = op.top(); op.pop();\r\n                num.push(calc(a, b, oper));\r\n            }\r\n            if (!op.empty()) op.pop();  // 弹出左括号\r\n        }\r\n        // 4. 遇到运算符：处理优先级\r\n        else if (c == '+' || c == '-' || c == '*' || c == '/') {\r\n            // 当前运算符优先级 <= 栈顶运算符优先级时，先计算栈顶\r\n            while (!op.empty() && op.top() != '(' && priority[op.top()] >= priority[c]) {\r\n                int b = num.top(); num.pop();\r\n                int a = num.top(); num.pop();\r\n                char oper = op.top(); op.pop();\r\n                num.push(calc(a, b, oper));\r\n            }\r\n            op.push(c);  // 当前运算符入栈\r\n        }\r\n    }\r\n    \r\n    // 5. 处理剩余的运算符\r\n    while (!op.empty()) {\r\n        int b = num.top(); num.pop();\r\n        int a = num.top(); num.pop();\r\n        char oper = op.top(); op.pop();\r\n        num.push(calc(a, b, oper));\r\n    }\r\n    \r\n    cout << num.top() << endl;\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD134",
          "title": "一山更比",
          "url": "http://www.xmuoj.com/contest/359/problem/JD134/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰指着一排山峰：&quot;每座山往左看，找到第一座比自己矮的山。&quot;赵晴儿说：&quot;用一个栈维护&#039;还没找到更矮山&#039;的山峰——从左往右扫，遇到更矮的山，栈里比它高的全部弹出，它们的答案就是这座山。&quot;&quot;栈里永远是单调递增的——所以叫单调栈。&quot;给定一个整数序列，对每个元素找到它左边第一个比它小的数。</p>",
          "inputDescription": "<p>第一行一个整数n。第二行n个整数。</p>",
          "outputDescription": "<p>一行，每个元素左边第一个比它小的数，不存在输出-1。</p>",
          "hint": "<p>单调栈：遍历时弹出比当前大的元素，栈顶就是答案。维护单调递增栈。<a href=\"https://www.acwing.com/problem/content/832/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/134.cpp",
            "language": "cpp",
            "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\r\nint n;if(!(cin>>n))return 0;vector<int>st;for(int i=0;i<n;i++){int x;cin>>x;while(!st.empty()&&st.back()>=x)st.pop_back();if(i)cout<<' ';cout<<(st.empty()?-1:st.back());st.push_back(x);}cout<<\"\\n\";}\r\n"
          }
        },
        {
          "id": "JD135",
          "title": "窗移镜照",
          "url": "http://www.xmuoj.com/contest/359/problem/JD135/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上画了一排数字，用一个框框住其中k个：&quot;这个框每往右移一格，告诉我框里的最小值和最大值。&quot;梁嘉峰说：&quot;用单调队列——维护一个单调递增的队列。窗口移动时，队头如果过期就弹出；新元素入队时，把队尾比它大的全部弹出。队头永远是当前窗口的最小值。&quot;赵晴儿又说：&quot;反过来，维护一个单调递减的队列，队头就是每个窗口的最大值。&quot;&quot;一扇窗户移过整排数字，镜中映出最小与最大。&quot;给定一个长度为 n 的整数序列和窗口大小 k，求每个窗口内的最小值和最大值。</p>",
          "inputDescription": "<p>第一行两个整数n和k（窗口大小）。第二行n个整数。</p>",
          "outputDescription": "<p>第一行输出每个窗口的最小值，空格隔开。第二行输出每个窗口的最大值，空格隔开。</p>",
          "hint": "<p>单调队列：维护递增队列求最小值，维护递减队列求最大值。窗口滑动时弹出过期元素。<a href=\"https://www.acwing.com/problem/content/156/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/135.cpp",
            "language": "cpp",
            "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nconst int N=1000010;\r\nint a[N],q[N];\r\nint main(){\r\n    ios::sync_with_stdio(false); cin.tie(nullptr);\r\n    int n,k; if(!(cin>>n>>k)) return 0;\r\n    for(int i=0;i<n;i++) cin>>a[i];\r\n    int hh=0,tt=-1;\r\n    for(int i=0;i<n;i++){\r\n        if(hh<=tt && i-k+1>q[hh]) hh++;\r\n        while(hh<=tt && a[q[tt]]>=a[i]) tt--;\r\n        q[++tt]=i;\r\n        if(i>=k-1) cout<<a[q[hh]]<<' ';\r\n    }\r\n    cout<<\"\\n\";\r\n    hh=0,tt=-1;\r\n    for(int i=0;i<n;i++){\r\n        if(hh<=tt && i-k+1>q[hh]) hh++;\r\n        while(hh<=tt && a[q[tt]]<=a[i]) tt--;\r\n        q[++tt]=i;\r\n        if(i>=k-1) cout<<a[q[hh]]<<' ';\r\n    }\r\n    cout<<\"\\n\";\r\n}"
          }
        },
        {
          "id": "JD136",
          "title": "剑谱寻踪",
          "url": "http://www.xmuoj.com/contest/359/problem/JD136/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿拿着一本剑谱：&quot;在这本厚厚的剑谱里找一段特定的剑招序列——模式串在文本串中出现了几次？分别在哪里？&quot;李少白想一个个比对，但剑谱有十万字。梁嘉峰说：&quot;KMP算法——先预处理模式串，算出每个位置的next数组（最长相等前后缀）。匹配时利用next跳转，不用回退文本指针。O(n+m)。&quot;在文本串中查找模式串的所有出现位置。</p>",
          "inputDescription": "<p>第一行一个整数n（模式串长度）。第二行模式串。第三行一个整数m（文本串长度）。第四行文本串。</p>",
          "outputDescription": "<p>一行，模式串在文本串中所有出现的起始位置（从0开始），空格隔开。</p>",
          "hint": "<p>KMP：预处理next数组（最长相等前后缀），匹配时利用next跳转。<a href=\"https://www.acwing.com/problem/content/833/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/136.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\nusing namespace std;\r\n\r\nint main() {\r\n    int n, m;\r\n    string pattern, text;\r\n    \r\n    cin >> n >> pattern;\r\n    cin >> m >> text;\r\n    \r\n    // 计算next数组\r\n    vector<int> next(n, 0);\r\n    for (int i = 1, j = 0; i < n; i++) {\r\n        while (j > 0 && pattern[i] != pattern[j]) {\r\n            j = next[j - 1];\r\n        }\r\n        if (pattern[i] == pattern[j]) {\r\n            j++;\r\n        }\r\n        next[i] = j;\r\n    }\r\n    \r\n    // KMP匹配\r\n    vector<int> positions;\r\n    for (int i = 0, j = 0; i < m; i++) {\r\n        while (j > 0 && text[i] != pattern[j]) {\r\n            j = next[j - 1];\r\n        }\r\n        if (text[i] == pattern[j]) {\r\n            j++;\r\n        }\r\n        if (j == n) {\r\n            positions.push_back(i - n + 1); // 匹配起始位置\r\n            j = next[j - 1]; // 继续寻找下一个匹配\r\n        }\r\n    }\r\n    \r\n    // 输出结果\r\n    for (int i = 0; i < positions.size(); i++) {\r\n        cout << positions[i] << (i == positions.size() - 1 ? '\\n' : ' ');\r\n    }\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD137",
          "title": "堆石成丘",
          "url": "http://www.xmuoj.com/contest/359/problem/JD137/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在地上堆了一座小丘：&quot;堆——一种特殊的完全二叉树。父节点的值永远比子节点小（小根堆）。&quot;赵晴儿说：&quot;用数组存——父节点i的子节点是2i和2i+1。插入时上浮，删除时下沉。支持插入、取最小值、删除最小值、删除任意元素、修改任意元素。&quot;实现一个小根堆，支持插入、删除第k个插入的元素、修改第k个插入的元素、查询最小值、删除最小值。</p>",
          "inputDescription": "<p>若干行操作命令：I x（插入x）、PM（查询最小值）、DM（删除最小值）、D k（删除第k个插入的元素）、C k x（修改第k个插入的数为x）。</p>",
          "outputDescription": "<p>对每个PM操作输出一行最小值。</p>",
          "hint": "<p>数组模拟堆：上浮和下沉操作。父节点i的子节点是2i和2i+1。维护ph[]和hp[]数组记录插入顺序与堆中位置的映射。<a href=\"https://www.acwing.com/problem/content/841/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/137.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\nusing namespace std;\r\n//测试点有问题\r\nconst int N = 100010;\r\nint h[N], ph[N], hp[N], sz = 0, idx = 0;\r\n\r\nvoid heap_swap(int a, int b) {\r\n    swap(ph[hp[a]], ph[hp[b]]);\r\n    swap(hp[a], hp[b]);\r\n    swap(h[a], h[b]);\r\n}\r\n\r\nvoid up(int u) {\r\n    while (u / 2 && h[u] < h[u / 2]) {\r\n        heap_swap(u, u / 2);\r\n        u /= 2;\r\n    }\r\n}\r\n\r\nvoid down(int u) {\r\n    int t = u;\r\n    if (u * 2 <= sz && h[u * 2] < h[t]) t = u * 2;\r\n    if (u * 2 + 1 <= sz && h[u * 2 + 1] < h[t]) t = u * 2 + 1;\r\n    if (t != u) {\r\n        heap_swap(u, t);\r\n        down(t);\r\n    }\r\n}\r\n\r\nint main() {\r\n    int n;\r\n    cin >> n;\r\n    \r\n    while (n--) {\r\n        string op;\r\n        cin >> op;\r\n        \r\n        if (op == \"I\") {\r\n            int x;\r\n            cin >> x;\r\n            idx++;\r\n            sz++;\r\n            ph[idx] = sz;\r\n            hp[sz] = idx;\r\n            h[sz] = x;\r\n            up(sz);\r\n        } \r\n        else if (op == \"PM\") {\r\n            cout << h[1] << endl;\r\n        } \r\n        else if (op == \"DM\") {\r\n            heap_swap(1, sz);\r\n            sz--;\r\n            down(1);\r\n        } \r\n        else if (op == \"D\") {\r\n            int k;\r\n            cin >> k;\r\n            int pos = ph[k];\r\n            heap_swap(pos, sz);\r\n            sz--;\r\n            down(pos);\r\n            up(pos);\r\n        } \r\n        else if (op == \"C\") {\r\n            int k, x;\r\n            cin >> k >> x;\r\n            int pos = ph[k];\r\n            h[pos] = x;\r\n            down(pos);\r\n            up(pos);\r\n        }\r\n    }\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD138",
          "title": "合帮并派",
          "url": "http://www.xmuoj.com/contest/359/problem/JD138/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>江湖上有N个门派，每个弟子属于一个门派。赵晴儿问：&quot;两个弟子是不是同门？&quot;梁嘉峰说：&quot;用并查集——合并两个门派用union，查询两个人是否同门用find。路径压缩后几乎O(1)。&quot;给定N个元素和M个操作：合并两个集合，或查询两个元素是否在同一集合。</p>",
          "inputDescription": "<p>第一行两个整数N和M。接下来M行，每行M 1 a b（合并a和b所在集合）或Q a b（查询a和b是否同属一个集合）。</p>",
          "outputDescription": "<p>对每个Q操作输出一行Yes或No。</p>",
          "hint": "<p>并查集：find时路径压缩，union时合并两棵树。<a href=\"https://www.acwing.com/problem/content/838/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/138.cpp",
            "language": "cpp",
            "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nconst int N = 100010;\nint p[N];\n\nint find(int x) {\n    if (p[x] != x) p[x] = find(p[x]);\n    return p[x];\n}\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    \n    for (int i = 1; i <= n; i++) p[i] = i;\n    \n    while (m--) {\n        char op;\n        int a, b;\n        cin >> op >> a >> b;\n        \n        if (op == 'M') {\n            int pa = find(a), pb = find(b);\n            if (pa != pb) p[pa] = pb;\n        } else if (op == 'Q') {\n            if (find(a) == find(b)) cout << \"Yes\" << endl;\n            else cout << \"No\" << endl;\n        }\n    }\n    \n    return 0;\n}"
          }
        },
        {
          "id": "JD139",
          "title": "门派计数",
          "url": "http://www.xmuoj.com/contest/359/problem/JD139/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在并查集的基础上问：&quot;每个门派有多少人？&quot;梁嘉峰说：&quot;在合并时，把一个门派的人数加到另一个上。查询时直接读人数。&quot;给定N个元素和M个操作：合并两个集合（C a b），查询两个元素是否在同一集合（Q1 a b），或查询某个元素所在集合的大小（Q2 a）。</p>",
          "inputDescription": "<p>第一行两个整数N和M。接下来M行，每行C a b（合并a和b所在集合）、Q1 a b（查询a和b是否在同一集合）、或Q2 a（查询a所在集合的大小）。</p>",
          "outputDescription": "<p>对每个Q1操作输出Yes或No；对每个Q2操作输出一行集合大小。</p>",
          "hint": "<p>维护size[]数组，合并时更新size。用C a b合并，Q1 a b查是否同集，Q2 a查集合大小。<a href=\"https://www.acwing.com/problem/content/839/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/139.cpp",
            "language": "cpp",
            "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint p[100010], sz[100010];\r\nint findp(int x){ return p[x]==x?x:p[x]=findp(p[x]); }\r\nint main(){\r\n    ios::sync_with_stdio(false);\r\n    cin.tie(nullptr);\r\n    int n,m;\r\n    if(!(cin>>n>>m)) return 0;\r\n    for(int i=1;i<=n;i++) p[i]=i, sz[i]=1;\r\n    while(m--){\r\n        string op; int a,b;\r\n        cin >> op;\r\n        if(op==\"C\"){\r\n            cin >> a >> b;\r\n            int ra=findp(a), rb=findp(b);\r\n            if(ra!=rb){ p[ra]=rb; sz[rb]+=sz[ra]; }\r\n        }else if(op==\"Q1\"){\r\n            cin >> a >> b;\r\n            cout << (findp(a)==findp(b) ? \"Yes\" : \"No\") << \"\\n\";\r\n        }else{\r\n            cin >> a;\r\n            cout << sz[findp(a)] << \"\\n\";\r\n        }\r\n    }\r\n}"
          }
        },
        {
          "id": "JD140",
          "title": "三界相克",
          "url": "http://www.xmuoj.com/contest/359/problem/JD140/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰说：&quot;A吃B，B吃C，C吃A——三种动物形成环形食物链。给你N个动物和K句话，判断哪些话是假的。&quot;赵晴儿解释：&quot;扩展并查集——每个动物拆成三个节点，分别表示&#039;A是A&#039;、&#039;A是B的食物&#039;、&#039;A是C的食物&#039;。用模3的关系判断真假。&quot;给定N个动物和K句话，判断假话数量。</p>",
          "inputDescription": "<p>第一行两个整数N和K。接下来K行，每行两个整数x y z（x=1表示y和z同类，x=2表示y吃z）。</p>",
          "outputDescription": "<p>一行，假话的数量。</p>",
          "hint": "<p>扩展并查集：每个点拆成3个，模3判断关系。<a href=\"https://www.acwing.com/problem/content/242/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/140.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <vector>\r\nusing namespace std;\r\n\r\nconst int N = 150010;\r\nint p[N];\r\n\r\nint find(int x) {\r\n    if (p[x] != x) p[x] = find(p[x]);\r\n    return p[x];\r\n}\r\n\r\nint main() {\r\n    int n, k;\r\n    cin >> n >> k;\r\n    \r\n    for (int i = 1; i <= 3 * n; i++) p[i] = i;\r\n    \r\n    int ans = 0;\r\n    \r\n    while (k--) {\r\n        int op, x, y;\r\n        cin >> op >> x >> y;\r\n        \r\n        if (x > n || y > n) {\r\n            ans++;\r\n            continue;\r\n        }\r\n        \r\n        if (op == 1) {\r\n            // x和y是同类\r\n            if (find(x) == find(y + n) || find(x) == find(y + 2 * n)) {\r\n                ans++;\r\n            } else {\r\n                p[find(x)] = find(y);\r\n                p[find(x + n)] = find(y + n);\r\n                p[find(x + 2 * n)] = find(y + 2 * n);\r\n            }\r\n        } else {\r\n            // x吃y\r\n            if (x == y || find(x) == find(y) || find(x) == find(y + 2 * n)) {\r\n                ans++;\r\n            } else {\r\n                p[find(x)] = find(y + n);\r\n                p[find(x + n)] = find(y + 2 * n);\r\n                p[find(x + 2 * n)] = find(y);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << ans << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD141",
          "title": "雾中排阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD141/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>迷雾弥漫的林间小径上，梁嘉峰递给李少白n枚令牌：&quot;按字典序列出1到n的所有排列。每步选一个没用过的令牌，选完所有就回头换一个——这就是DFS回溯。&quot;给定整数n，按字典序输出1到n的所有全排列。</p>",
          "inputDescription": "<p>一个整数n（1≤n≤9）。</p>",
          "outputDescription": "<p>每行一个排列，数字之间空格隔开，按字典序输出。</p>",
          "hint": "<p>DFS+回溯：选→递归→撤销。用used[]标记。<a href=\"https://www.acwing.com/problem/content/844/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/141.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstdio>\r\n\r\nusing namespace std;\r\n\r\nconst int N = 10;\r\n\r\nint n;\r\nint path[N];       // 从0到n-1共n个位置 存放一个排列\r\nbool state[N];     // 存放每个数字的使用状态 true表示使用了 false表示没使用过\r\n\r\nvoid dfs(int u)\r\n{\r\n    if (u == n)    // 一个排列填充完成\r\n    {\r\n        for (int i = 0; i < n; i ++) printf(\"%d \",path[i]);  // 注意格式 别忘了每两个数字间用空格隔开\r\n        puts(\"\");  // 相当于输出一个回车\r\n        return;\r\n    }\r\n\r\n    for (int i = 1; i <= n; i ++)\r\n    {\r\n        if (!state[i])\r\n        {\r\n            path[u] = i;       // 把 i 填入数字排列的位置上\r\n            state[i] = true;   // 表示该数字用过了 不能再用\r\n            dfs(u + 1);        // 这个位置的数填好 递归到右面一个位置\r\n            state[i] = false;  // 恢复现场 该数字后续可用\r\n        }\r\n    }\r\n    // for 循环全部结束了 dfs(u)才全部完成 回溯\r\n\r\n    return;        // 可写可不写\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d\", &n);\r\n\r\n    dfs(0);    // 在path[0]处开始填数\r\n\r\n    return 0;\r\n}\r\n\r\n//作者：EvanMe\r\n//链接：https://www.acwing.com/file_system/file/content/whole/index/content/3758356/\r\n//来源：AcWing\r\n//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
          }
        },
        {
          "id": "JD142",
          "title": "棋盘布后",
          "url": "http://www.xmuoj.com/contest/359/problem/JD142/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿指着一个n×n的棋盘：&quot;放n个皇后，不能同行、同列、同对角线。有多少种放法？&quot;李少白逐行放置，用三个布尔数组标记列和对角线。&quot;每行选一个安全的位置放皇后，递归下一行。冲突就回退。&quot;给定n，求n皇后的所有解。</p>",
          "inputDescription": "<p>一个整数n。</p>",
          "outputDescription": "<p>所有解，每个解n行（Q表示皇后，.表示空），解之间空行。</p>",
          "hint": "<p>DFS+回溯：逐行放置，标记列和两条对角线。<a href=\"https://www.acwing.com/problem/content/845/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/142.cpp",
            "language": "cpp",
            "code": "#include <iostream>\nusing namespace std;\n\nconst int N = 20;\nint n;\nchar board[N][N];\nbool col[N], dg[N], udg[N]; // 列、主对角线、副对角线\n\n// 逐行放置皇后，r为当前行\nvoid dfs(int r) {\n    if (r == n) {\n        // 输出解\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                cout << board[i][j];\n            }\n            cout << '\\n';\n        }\n        cout << '\\n'; // 解之间空行\n        return;\n    }\n\n    for (int c = 0; c < n; c++) {\n        // r+c相同→同一主对角线，r-c+n相同→同一副对角线\n        if (!col[c] && !dg[r + c] && !udg[r - c + n]) {\n            col[c] = dg[r + c] = udg[r - c + n] = true;\n            board[r][c] = 'Q';\n            dfs(r + 1);\n            board[r][c] = '.';\n            col[c] = dg[r + c] = udg[r - c + n] = false;\n        }\n    }\n}\n\nint main() {\n    cin >> n;\n    // 初始化棋盘\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            board[i][j] = '.';\n        }\n    }\n    dfs(0);\n    return 0;\n}\n"
          }
        },
        {
          "id": "JD143",
          "title": "迷宫寻路",
          "url": "http://www.xmuoj.com/contest/359/problem/JD143/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>石墙围成的迷宫，入口在左上角，出口在右下角。赵晴儿问：&quot;最短路径有多长？&quot;梁嘉峰说：&quot;BFS——从入口开始，一层一层向外扩展。第一次到达出口时，层数就是最短路径。&quot;给定一个n×m的迷宫（0可走，1是墙），求最短路径长度。</p>",
          "inputDescription": "<p>第一行两个整数n和m。接下来n行每行m个整数（0可走，1是墙）。</p>",
          "outputDescription": "<p>一行，最短路径长度。不可达输出-1。</p>",
          "hint": "<p>BFS层序遍历，第一次到达终点就是最短路径。<a href=\"https://www.acwing.com/problem/content/846/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/143.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <queue>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint g[N][N], dist[N][N];\r\nint n, m;\r\nint dx[4] = {-1, 0, 1, 0};\r\nint dy[4] = {0, 1, 0, -1};\r\n\r\nint bfs() {\r\n    queue<pair<int, int>> q;\r\n    q.push({0, 0});\r\n    dist[0][0] = 0;\r\n    \r\n    while (!q.empty()) {\r\n        auto t = q.front();\r\n        q.pop();\r\n        \r\n        int x = t.first, y = t.second;\r\n        \r\n        if (x == n - 1 && y == m - 1) {\r\n            return dist[x][y];\r\n        }\r\n        \r\n        for (int i = 0; i < 4; i++) {\r\n            int nx = x + dx[i];\r\n            int ny = y + dy[i];\r\n            \r\n            if (nx >= 0 && nx < n && ny >= 0 && ny < m && g[nx][ny] == 0 && dist[nx][ny] == -1) {\r\n                dist[nx][ny] = dist[x][y] + 1;\r\n                q.push({nx, ny});\r\n            }\r\n        }\r\n    }\r\n    \r\n    return -1;\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        for (int j = 0; j < m; j++) {\r\n            cin >> g[i][j];\r\n            dist[i][j] = -1;\r\n        }\r\n    }\r\n    \r\n    cout << bfs() << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD144",
          "title": "八码迷局",
          "url": "http://www.xmuoj.com/contest/359/problem/JD144/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>迷雾中出现一个3×3数字拼盘，有一个空格。赵晴儿说：&quot;从初始状态移到目标状态，最少几步？每次只能把空格和相邻数字交换。&quot;梁嘉峰说：&quot;BFS+状态压缩——把整个拼盘编码成一个字符串，每次移动生成新状态，用哈希表判重。&quot;给定初始状态和目标状态，求最少移动步数。</p>",
          "inputDescription": "<p>两行，每行9个字符（3×3拼盘，x表示空格）。第一行初始状态，第二行目标状态。</p>",
          "outputDescription": "<p>一行，最少移动步数。无解输出-1。</p>",
          "hint": "<p>BFS+状态编码为字符串，哈希表判重。<a href=\"https://www.acwing.com/problem/content/847/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/144.cpp",
            "language": "python",
            "code": "#include <iostream>\n#include <queue>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nstring start, target;\nint dx[4] = {-1, 0, 1, 0};\nint dy[4] = {0, 1, 0, -1};\n\nint bfs() {\n    queue<string> q;\n    unordered_map<string, int> dist;\n    \n    q.push(start);\n    dist[start] = 0;\n    \n    while (!q.empty()) {\n        string t = q.front();\n        q.pop();\n        \n        if (t == target) {\n            return dist[t];\n        }\n        \n        int pos = t.find('x');\n        int x = pos / 3, y = pos % 3;\n        \n        for (int i = 0; i < 4; i++) {\n            int nx = x + dx[i];\n            int ny = y + dy[i];\n            \n            if (nx >= 0 && nx < 3 && ny >= 0 && ny < 3) {\n                int npos = nx * 3 + ny;\n                string next = t;\n                swap(next[pos], next[npos]);\n                \n                if (!dist.count(next)) {\n                    dist[next] = dist[t] + 1;\n                    q.push(next);\n                }\n            }\n        }\n    }\n    \n    return -1;\n}\n\nint main() {\n    cin >> start >> target;\n    cout << bfs() << endl;\n    return 0;\n}"
          }
        },
        {
          "id": "JD145",
          "title": "古树重心",
          "url": "http://www.xmuoj.com/contest/359/problem/JD145/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>迷踪林深处有一棵大树。梁嘉峰说：&quot;找到它的重心——删除后最大子树最小的那个节点。&quot;赵晴儿说：&quot;DFS遍历树，对每个节点计算：删掉它后，最大子树有多少个节点。取最小的那个。&quot;给定一棵树，求其重心和最大子树的最小大小。</p>",
          "inputDescription": "<p>第一行一个整数n。接下来n-1行每行两个整数表示一条边。</p>",
          "outputDescription": "<p>一行，最大子树的最小大小。</p>",
          "hint": "<p>DFS遍历树，计算每个节点的最大子树大小。重心=max(n-subSize, 各子树size)最小的节点。<a href=\"https://www.acwing.com/problem/content/848/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/145.cpp",
            "language": "python",
            "code": "#include <iostream>\n#include <algorithm>\n#include <cstring>\n\nusing namespace std;\n\nconst int N = 1e5 + 10; //数据范围是10的5次方\nconst int M = 2 * N; //以有向图的格式存储无向图，所以每个节点至多对应2n-2条边\n\nint h[N]; //邻接表存储树，有n个节点，所以需要n个队列头节点\nint e[M]; //存储元素\nint ne[M]; //存储列表的next值\nint idx; //单链表指针\nint n; //题目所给的输入，n个节点\nint ans = N; //表示重心的所有的子树中，最大的子树的结点数目\n\nbool st[N]; //记录节点是否被访问过，访问过则标记为true\n\n//a所对应的单链表中插入b  a作为根 \nvoid add(int a, int b) {\n    e[idx] = b, ne[idx] = h[a], h[a] = idx++;\n}\n\n// dfs 框架\n/*\nvoid dfs(int u){\n    st[u]=true; // 标记一下，记录为已经被搜索过了，下面进行搜索过程\n    for(int i=h[u];i!=-1;i=ne[i]){\n        int j=e[i];\n        if(!st[j]) {\n            dfs(j);\n        }\n    }\n}\n*/\n\n//返回以u为根的子树中节点的个数，包括u节点\nint dfs(int u) {\n    int res = 0; //存储 删掉某个节点之后，最大的连通子图节点数\n    st[u] = true; //标记访问过u节点\n    int sum = 1; //存储 以u为根的树 的节点数, 包括u，如图中的4号节点\n\n    //访问u的每个子节点\n    for (int i = h[u]; i != -1; i = ne[i]) {\n        int j = e[i];\n        //因为每个节点的编号都是不一样的，所以 用编号为下标 来标记是否被访问过\n        if (!st[j]) {\n            int s = dfs(j);  // u节点的单棵子树节点数 如图中的size值\n            res = max(res, s); // 记录最大联通子图的节点数\n            sum += s; //以j为根的树 的节点数\n        }\n    }\n\n    //n-sum 如图中的n-size值，不包括根节点4；\n    res = max(res, n - sum); // 选择u节点为重心，最大的 连通子图节点数\n    ans = min(res, ans); //遍历过的假设重心中，最小的最大联通子图的 节点数\n    return sum;\n}\n\nint main() {\n    memset(h, -1, sizeof h); //初始化h数组 -1表示尾节点\n    cin >> n; //表示树的结点数\n\n    // 题目接下来会输入，n-1行数据，\n    // 树中是不存在环的，对于有n个节点的树，必定是n-1条边\n    for (int i = 0; i < n - 1; i++) {\n        int a, b;\n        cin >> a >> b;\n        add(a, b), add(b, a); //无向图\n    }\n\n    dfs(1); //可以任意选定一个节点开始 u<=n\n\n    cout << ans << endl;\n\n    return 0;\n}\n\n// 作者：松鼠爱葡萄\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/542619/\n// 来源：AcWing\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
          }
        },
        {
          "id": "JD146",
          "title": "城池层递",
          "url": "http://www.xmuoj.com/contest/359/problem/JD146/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>城际连横。赵晴儿铺开城池图：&quot;城池之间有道路相连。从城1出发，到每个城池的最短距离是多少？&quot;梁嘉峰说：&quot;BFS——从城1开始，每层扩展一步。第一次到达的城池，层数就是最短距离。&quot;给定一个有向图和起点1，求每个点到起点的最短距离。</p>",
          "inputDescription": "<p>第一行两个整数n和m。接下来m行每行两个整数a b表示一条有向边。</p>",
          "outputDescription": "<p>一行，n个整数表示每个点到点1的最短距离，不可达输出-1。</p>",
          "hint": "<p>BFS层序遍历，每层距离+1。<a href=\"https://www.acwing.com/problem/content/849/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/146.cpp",
            "language": "cpp",
            "code": "#include<bits/stdc++.h>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\n\r\nint n, m;\r\nint h[N], e[N], ne[N], idx;\r\nint d[N];\r\n\r\nvoid add(int a, int b){\r\n    e[idx] = b, ne[idx] = h[a], h[a] = idx ++ ;\r\n}\r\n\r\nint bfs(){//宽搜遍历\r\n    memset(d, -1, sizeof d);\r\n\r\n    queue<int> q;\r\n    d[1] = 0;//第一格需要0步\r\n    q.push(1);//放入队列\r\n\r\n    while (q.size()){//循环遍历整个队列\r\n        int t = q.front();\r\n        q.pop();\r\n\r\n        for (int i = h[t]; i != -1; i = ne[i]){\r\n            int j = e[i];//获取当前值\r\n            if (d[j] == -1){//未走过\r\n                d[j] = d[t] + 1;//等于上一个点加1步\r\n                q.push(j);//放入队列\r\n            }\r\n        }\r\n    }\r\n\r\n    return d[n];//返回n号点所需的步数\r\n}\r\n\r\nint main(){\r\n    scanf(\"%d%d\", &n, &m);\r\n    memset(h, -1, sizeof h);\r\n\r\n    for (int i = 0; i < m; i ++ ){\r\n        int a, b;\r\n        scanf(\"%d%d\", &a, &b);\r\n        add(a, b);//单项连接(有向图)\r\n    }\r\n\r\n    cout << bfs() << endl;\r\n\r\n    return 0;\r\n}\r\n\r\n// 作者：Lucky_Three\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/9655978/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
          }
        },
        {
          "id": "JD147",
          "title": "拓扑之序",
          "url": "http://www.xmuoj.com/contest/359/problem/JD147/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>城际连横。赵晴儿铺开城池图：&quot;城池之间有方向道路。排出一个合法的建设顺序——每条道路都是从先建的城池指向后建的。&quot;梁嘉峰说：&quot;拓扑排序——找入度为0的点，输出后删除它的出边，再找下一个入度为0的点。如果有环，就不可能全部输出。&quot;给定一个有向图，输出拓扑序。有环则输出-1。</p>",
          "inputDescription": "<p>第一行两个整数n和m。接下来m行每行两个整数a b表示一条有向边。</p>",
          "outputDescription": "<p>一行，拓扑序，空格隔开。有环输出-1。</p>",
          "hint": "<p>BFS+入度维护。有环则无解。<a href=\"https://www.acwing.com/problem/content/850/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/147.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <vector>\r\n#include <queue>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nvector<int> g[N];\r\nint d[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b;\r\n        cin >> a >> b;\r\n        g[a].push_back(b);\r\n        d[b]++;\r\n    }\r\n    \r\n    queue<int> q;\r\n    for (int i = 1; i <= n; i++) {\r\n        if (d[i] == 0) {\r\n            q.push(i);\r\n        }\r\n    }\r\n    \r\n    vector<int> ans;\r\n    while (!q.empty()) {\r\n        int u = q.front();\r\n        q.pop();\r\n        ans.push_back(u);\r\n        \r\n        for (int i = 0; i < g[u].size(); i++) {\r\n            int v = g[u][i];\r\n            d[v]--;\r\n            if (d[v] == 0) {\r\n                q.push(v);\r\n            }\r\n        }\r\n    }\r\n    \r\n    if (ans.size() != n) {\r\n        cout << -1 << endl;\r\n    } else {\r\n        for (int i = 0; i < ans.size(); i++) {\r\n            cout << ans[i] << (i == ans.size() - 1 ? '\\n' : ' ');\r\n        }\r\n    }\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD148",
          "title": "近者先行",
          "url": "http://www.xmuoj.com/contest/359/problem/JD148/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在城池图上标了距离：&quot;从城1出发，到每个城池的最短距离是多少？边权都是正数。&quot;梁嘉峰说：&quot;朴素Dijkstra——每次选未访问的最近点，用它更新邻居的距离。选过的点不再更新。&quot;给定一个带权有向图和起点，求到每个点的最短距离。</p>",
          "inputDescription": "<p>第一行两个整数n和m。接下来m行每行三个整数a b w表示一条从a到b的权为w的有向边。</p>",
          "outputDescription": "<p>一行，n个整数表示到点1的最短距离。</p>",
          "hint": "<p>Dijkstra：O(n²)。每次选最近未访问点，更新邻居。<a href=\"https://www.acwing.com/problem/content/851/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/148.cpp",
            "language": "cpp",
            "code": "#include <cstring>\r\n#include <iostream>\r\n#include <algorithm>\r\n#include <queue>//堆的头文件\r\n\r\nusing namespace std;\r\n\r\ntypedef pair<int, int> PII;//堆里存储距离和节点编号\r\n\r\nconst int N = 1e6 + 10;\r\n\r\nint n, m;//节点数量和边数\r\nint h[N], w[N], e[N], ne[N], idx;//邻接表存储图\r\nint dist[N];//存储距离\r\nbool st[N];//存储状态\r\n\r\nvoid add(int a, int b, int c)\r\n{\r\n    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;\r\n}\r\n\r\nint dijkstra()\r\n{\r\n    memset(dist, 0x3f, sizeof dist);//距离初始化为无穷大\r\n    dist[1] = 0;\r\n    priority_queue<PII, vector<PII>, greater<PII>> heap;//小根堆\r\n    heap.push({0, 1});//插入距离和节点编号\r\n\r\n    while (heap.size())\r\n    {\r\n        auto t = heap.top();//取距离源点最近的点\r\n        heap.pop();\r\n\r\n        int ver = t.second, distance = t.first;//ver:节点编号，distance:源点距离ver 的距离\r\n\r\n        if (st[ver]) continue;//如果距离已经确定，则跳过该点\r\n        st[ver] = true;\r\n\r\n        for (int i = h[ver]; i != -1; i = ne[i])//更新ver所指向的节点距离\r\n        {\r\n            int j = e[i];\r\n            if (dist[j] > dist[ver] + w[i])\r\n            {\r\n                dist[j] = dist[ver] + w[i];\r\n                heap.push({dist[j], j});//距离变小，则入堆\r\n            }\r\n        }\r\n    }\r\n\r\n    if (dist[n] == 0x3f3f3f3f) return -1;\r\n    return dist[n];\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d%d\", &n, &m);\r\n\r\n    memset(h, -1, sizeof h);\r\n    while (m -- )\r\n    {\r\n        int a, b, c;\r\n        scanf(\"%d%d%d\", &a, &b, &c);\r\n        add(a, b, c);\r\n    }\r\n\r\n    cout << dijkstra() << endl;\r\n\r\n    return 0;\r\n}\r\n\r\n//参考yxc\r\n\r\n// 作者：Hasity\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/1906644/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
          }
        },
        {
          "id": "JD149",
          "title": "堆中取近",
          "url": "http://www.xmuoj.com/contest/359/problem/JD149/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>&quot;点很多，边很少。用堆优化Dijkstra——用小根堆代替遍历找最近点。&quot;赵晴儿说，&quot;每次从堆顶取最近的未访问点。&quot;给定一个带权有向图和起点，求到每个点的最短距离。边数远小于点数的平方。</p>",
          "inputDescription": "<p>第一行两个整数n和m。接下来m行每行三个整数a b w。</p>",
          "outputDescription": "<p>一行，到点1的最短距离。</p>",
          "hint": "<p>堆优化Dijkstra：O(mlogn)。用小根堆取最近点。<a href=\"https://www.acwing.com/problem/content/852/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/149.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<cstring>\r\n#include<cstdio>\r\n#include<algorithm>\r\n\r\nusing namespace std;\r\n\r\nconst int N = 510, M = 100010;\r\n\r\nint g[N][N], dist[N];\r\nbool visited[N];\r\n\r\nint n, m;\r\n\r\nint dijkstra()\r\n{\r\n    memset(dist, 0x3f, sizeof(dist));\r\n    dist[1] = 0;\r\n    for(int i = 1; i <= n; i++)\r\n    {\r\n        int t = -1;\r\n        for(int j = 1; j <= n; j++)\r\n        {\r\n            if(!visited[j] && (t == -1 || dist[j] < dist[t]))\r\n                t = j;\r\n        }\r\n        visited[t] = true;\r\n        for(int j = 1; j <= n; j++)\r\n            dist[j] = min(dist[j], dist[t] + g[t][j]);\r\n    }\r\n    if(dist[n] == 0x3f3f3f3f) return -1;\r\n    return dist[n];\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d%d\", &n, &m);\r\n\r\n    memset(g, 0x3f, sizeof(g));\r\n    while (m--)\r\n    {\r\n        int x, y, c;\r\n        scanf(\"%d%d%d\", &x, &y, &c);\r\n        g[x][y] = min(g[x][y], c);\r\n    }\r\n    cout << dijkstra() << endl;\r\n    return 0;\r\n}\r\n\r\n// 作者：optimjie\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/154643/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
          }
        },
        {
          "id": "JD150",
          "title": "队中松弛",
          "url": "http://www.xmuoj.com/contest/359/problem/JD150/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿指着图上的负权边：&quot;Dijkstra处理不了负权边。用SPFA——BFS+松弛。把待更新的点放入队列，每次取一个点，用它更新邻居。邻居变短了就入队。&quot;给定一个可能有负权边的图，求最短距离。</p>",
          "inputDescription": "<p>第一行两个整数n和m。接下来m行每行三个整数a b w（w可为负）。</p>",
          "outputDescription": "<p>一行，到点1的最短距离。</p>",
          "hint": "<p>SPFA：队列优化Bellman-Ford。<a href=\"https://www.acwing.com/problem/content/853/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/150.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <algorithm>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nint h[N], e[N], w[N], ne[N], idx;//邻接表，存储图\r\nint st[N];//标记顶点是不是在队列中\r\nint dist[N];//保存最短路径的值\r\nint q[N], hh, tt = -1;//队列\r\n\r\nvoid add(int a, int b, int c){//图中添加边和边的端点\r\n    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx++;\r\n}\r\n\r\nvoid spfa(){\r\n    q[++tt] = 1;//从1号顶点开始松弛，1号顶点入队\r\n    dist[1] = 0;//1号到1号的距离为 0\r\n    st[1] = 1;//1号顶点在队列中\r\n    while(tt >= hh){//不断进行松弛\r\n        int a = q[hh++];//取对头记作a，进行松弛\r\n        st[a] = 0;//取完队头后，a不在队列中了\r\n        for(int i = h[a]; i != -1; i = ne[i])//遍历所有和a相连的点\r\n        {\r\n            int b = e[i], c = w[i];//获得和a相连的点和边\r\n            if(dist[b] > dist[a] + c){//如果可以距离变得更短，则更新距离\r\n\r\n                dist[b] = dist[a] + c;//更新距离\r\n\r\n                if(!st[b]){//如果没在队列中\r\n                    q[++tt] = b;//入队\r\n                    st[b] = 1;//打标记\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\nint main(){\r\n    memset(h, -1, sizeof h);//初始化邻接表\r\n    memset(dist, 0x3f, sizeof dist);//初始化距离\r\n    int n, m;//保存点的数量和边的数量\r\n    cin >> n >> m;\r\n    for(int i = 0; i < m; i++){//读入每条边和边的端点\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        add(a, b, w);//加入到邻接表\r\n    }\r\n    spfa();\r\n    if(dist[n] == 0x3f3f3f3f )//如果到n点的距离是无穷，则不能到达 \r\n        cout << \"impossible\";\r\n    else cout << dist[n];//否则能到达，输出距离\r\n    return 0;\r\n}\r\n\r\n// 作者：Hasity\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/4486341/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
          }
        },
        {
          "id": "JD151",
          "title": "万径归一",
          "url": "http://www.xmuoj.com/contest/359/problem/JD151/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰铺开全图：&quot;多源最短路——任意两点之间的最短距离。Floyd算法：三重循环，dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j])。&quot;给定一个带权图，求任意两点之间的最短距离。</p>",
          "inputDescription": "<p>第一行三个整数n、m和q。接下来m行每行三个整数a b w。接下来q行每行两个整数a b。</p>",
          "outputDescription": "<p>q行，每行一个整数。不可达输出impossible。</p>",
          "hint": "<p>Floyd：O(n³)。三重循环枚举中间点。<a href=\"https://www.acwing.com/problem/content/856/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/151.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 210;\r\nconst int INF = 0x3f3f3f3f;\r\nint d[N][N];\r\nint n, m, q;\r\n\r\nint main() {\r\n    cin >> n >> m >> q;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = 1; j <= n; j++) {\r\n            if (i == j) d[i][j] = 0;\r\n            else d[i][j] = INF;\r\n        }\r\n    }\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        d[a][b] = min(d[a][b], w);\r\n    }\r\n    \r\n    for (int k = 1; k <= n; k++) {\r\n        for (int i = 1; i <= n; i++) {\r\n            for (int j = 1; j <= n; j++) {\r\n                if (d[i][k] != INF && d[k][j] != INF) {\r\n                    d[i][j] = min(d[i][j], d[i][k] + d[k][j]);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    while (q--) {\r\n        int a, b;\r\n        cin >> a >> b;\r\n        if (d[a][b] == INF) cout << \"impossible\" << endl;\r\n        else cout << d[a][b] << endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD152",
          "title": "蔓延成网",
          "url": "http://www.xmuoj.com/contest/359/problem/JD152/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿指着散落的城池：&quot;用最少的路把所有城池连起来，总路长最短。&quot;梁嘉峰说：&quot;Prim算法——类似Dijkstra，每次选离已连通部分最近的未加入点，把那条边加入生成树。&quot;给定一个带权无向图，求最小生成树的总权值。</p>",
          "inputDescription": "<p>第一行两个整数n和m。接下来m行每行三个整数a b w。</p>",
          "outputDescription": "<p>一行，最小生成树的总权值。不连通输出impossible。</p>",
          "hint": "<p>Prim：O(n²)。每次选最近未加入点。<a href=\"https://www.acwing.com/problem/content/860/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/152.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 510;\r\nconst int INF = 0x3f3f3f3f;\r\nint g[N][N];\r\nint dist[N];\r\nbool st[N];\r\nint n, m;\r\n\r\nint prim() {\r\n    memset(dist, 0x3f, sizeof(dist));\r\n    int res = 0;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int t = -1;\r\n        for (int j = 1; j <= n; j++) {\r\n            if (!st[j] && (t == -1 || dist[t] > dist[j])) {\r\n                t = j;\r\n            }\r\n        }\r\n        \r\n        if (i && dist[t] == INF) return -1;\r\n        \r\n        if (i) res += dist[t];\r\n        st[t] = true;\r\n        \r\n        for (int j = 1; j <= n; j++) {\r\n            if (dist[j] > g[t][j]) {\r\n                dist[j] = g[t][j];\r\n            }\r\n        }\r\n    }\r\n    \r\n    return res;\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    memset(g, 0x3f, sizeof(g));\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        g[a][b] = g[b][a] = min(g[a][b], w);\r\n    }\r\n    \r\n    int ans = prim();\r\n    \r\n    if (ans == -1) cout << \"impossible\" << endl;\r\n    else cout << ans << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD153",
          "title": "逐边成林",
          "url": "http://www.xmuoj.com/contest/359/problem/JD153/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰说：&quot;Kruskal——按边权从小到大排序，逐条加入。如果这条边的两个端点已经在同一连通块里（用并查集判断），就跳过；否则加入。&quot;给定一个带权无向图，求最小生成树的总权值。</p>",
          "inputDescription": "<p>第一行两个整数n和m。接下来m行每行三个整数a b w。</p>",
          "outputDescription": "<p>一行，最小生成树的总权值。不连通输出impossible。</p>",
          "hint": "<p>Kruskal：O(mlogm)。按边权排序，并查集判环。<a href=\"https://www.acwing.com/problem/content/860/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/153.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nconst int M = 200010;\r\nint p[N];\r\nint n, m;\r\n\r\nstruct Edge {\r\n    int a, b, w;\r\n    bool operator< (const Edge &W) const {\r\n        return w < W.w;\r\n    }\r\n} edges[M];\r\n\r\nint find(int x) {\r\n    if (p[x] != x) p[x] = find(p[x]);\r\n    return p[x];\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 1; i <= n; i++) p[i] = i;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        edges[i] = {a, b, w};\r\n    }\r\n    \r\n    sort(edges, edges + m);\r\n    \r\n    int res = 0, cnt = 0;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a = edges[i].a, b = edges[i].b, w = edges[i].w;\r\n        int pa = find(a), pb = find(b);\r\n        \r\n        if (pa != pb) {\r\n            p[pa] = pb;\r\n            res += w;\r\n            cnt++;\r\n        }\r\n    }\r\n    \r\n    if (cnt < n - 1) cout << \"impossible\" << endl;\r\n    else cout << res << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD154",
          "title": "二色分界",
          "url": "http://www.xmuoj.com/contest/359/problem/JD154/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿指着一个图：&quot;能不能把所有点分成两组，同组之间没有直接相连的边？&quot;梁嘉峰说：&quot;染色法——从任意点开始，染红色；它的邻居染蓝色；邻居的邻居染红色……如果某个点需要同时染两种颜色，就不是二分图。&quot;给定一个无向图，判断是否是二分图。</p>",
          "inputDescription": "<p>第一行两个整数n和m。接下来m行每行两个整数a b。</p>",
          "outputDescription": "<p>一行，Yes或No。</p>",
          "hint": "<p>BFS/DFS染色，冲突则不是二分图。<a href=\"https://www.acwing.com/problem/content/862/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/154.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <vector>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nvector<int> g[N];\r\nint color[N];\r\nint n, m;\r\n\r\nbool dfs(int u, int c) {\r\n    color[u] = c;\r\n    \r\n    for (int i = 0; i < g[u].size(); i++) {\r\n        int v = g[u][i];\r\n        if (!color[v]) {\r\n            if (!dfs(v, 3 - c)) return false;\r\n        } else if (color[v] == c) {\r\n            return false;\r\n        }\r\n    }\r\n    \r\n    return true;\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b;\r\n        cin >> a >> b;\r\n        g[a].push_back(b);\r\n        g[b].push_back(a);\r\n    }\r\n    \r\n    bool flag = true;\r\n    for (int i = 1; i <= n; i++) {\r\n        if (!color[i]) {\r\n            if (!dfs(i, 1)) {\r\n                flag = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    \r\n    if (flag) cout << \"Yes\" << endl;\r\n    else cout << \"No\" << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD155",
          "title": "一剑一鞘",
          "url": "http://www.xmuoj.com/contest/359/problem/JD155/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>华山脚下，试剑台前。西域刀客赫连铁拔出背上唯一的刀鞘，鞘中却藏着N柄短刀，每柄有重量和锋芒。刀鞘容量有限——选哪些刀，才能让锋芒之和最大？李少白拔剑上前。梁嘉峰低声道：&quot;每柄刀只能选一次——01背包。逆序遍历容量，dp[j] = max(dp[j], dp[j-v]+w)。&quot;李少白深吸一口气，提笔写下。赫连铁看了答案，缓缓点头：&quot;第一关，过了。&quot;</p>",
          "inputDescription": "<p>第一行两个整数N和V。接下来N行每行两个整数v和w。</p>",
          "outputDescription": "<p>一行，最大价值。</p>",
          "hint": "<p>01背包：dp[j] = max(dp[j], dp[j-v[i]]+w[i])，逆序遍历j。<a href=\"https://www.acwing.com/problem/content/0/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/155.cpp",
            "language": "cpp",
            "code": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nconst int N = 1010;\nint f[N];\nint n, m;\n\nint main() {\n    cin >> n >> m;\n    \n    for (int i = 0; i < n; i++) {\n        int v, w;\n        cin >> v >> w;\n        for (int j = m; j >= v; j--) {\n            f[j] = max(f[j], f[j - v] + w);\n        }\n    }\n    \n    cout << f[m] << endl;\n    \n    return 0;\n}"
          }
        },
        {
          "id": "JD156",
          "title": "无穷剑阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD156/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>第二阵。铸剑山庄庄主出场，身后跟着仆从，抬着无数柄相同的剑。&quot;每柄剑重v，锋利w。我的剑取之不尽——你能装多少？&quot;赵晴儿上前一步：&quot;完全背包——每种剑可以拿无限柄，内层循环正序遍历。&quot;她提笔如飞，片刻交卷。庄主愕然：&quot;这么快？&quot;</p>",
          "inputDescription": "<p>第一行两个整数N和V。接下来N行每行两个整数v和w。</p>",
          "outputDescription": "<p>一行，最大价值。</p>",
          "hint": "<p>完全背包：内层正序遍历。每种物品可选无限次。<a href=\"https://www.acwing.com/problem/content/0/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/156.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint f[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int v, w;\r\n        cin >> v >> w;\r\n        for (int j = v; j <= m; j++) {\r\n            f[j] = max(f[j], f[j - v] + w);\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD157",
          "title": "三角登峰",
          "url": "http://www.xmuoj.com/contest/359/problem/JD157/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>华山云梯，台阶排成三角形，每级刻着一个数字。从顶到底，每步只能向左下或右下。&quot;找出一条路径，使数字之和最大。&quot;裁判宣布。李少白仰望云梯，忽然笑了：&quot;从底向上——每级取下方两个方向中较大的，加上自己。一层层往上推，山顶就是答案。&quot;</p>",
          "inputDescription": "<p>第一行一个整数n。接下来n行第i行有i个整数。</p>",
          "outputDescription": "<p>一行，最大路径和。</p>",
          "hint": "<p>从底向上DP。dp[i][j] = max(dp[i+1][j], dp[i+1][j+1]) + a[i][j]。<a href=\"https://www.acwing.com/problem/content/0/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/157.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 510;\r\nint f[N][N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = 1; j <= i; j++) {\r\n            cin >> f[i][j];\r\n        }\r\n    }\r\n    \r\n    for (int i = n - 1; i >= 1; i--) {\r\n        for (int j = 1; j <= i; j++) {\r\n            f[i][j] += max(f[i + 1][j], f[i + 1][j + 1]);\r\n        }\r\n    }\r\n    \r\n    cout << f[1][1] << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD158",
          "title": "递增剑意",
          "url": "http://www.xmuoj.com/contest/359/problem/JD158/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>擂台上，青城派弟子摆出一排剑，每把刻着一个数字。&quot;选出最长的递增序列——数字必须递增，不必相邻。&quot;李少白用O(n²)的DP接下第一招。梁嘉峰却摇头：&quot;后面数据更大。贪心+二分——维护最小末尾数组，O(nlogn)。&quot;李少白重写代码，青城弟子面色一变：&quot;好快的剑！&quot;</p>",
          "inputDescription": "<p>第一行一个整数n。第二行n个整数。</p>",
          "outputDescription": "<p>一行，最长递增子序列的长度。</p>",
          "hint": "<p>贪心+二分：维护最小末尾数组q[]，二分查找替换。O(nlogn)。<a href=\"https://www.acwing.com/problem/content/0/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/158.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <vector>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nint a[N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        cin >> a[i];\r\n    }\r\n    \r\n    vector<int> tails;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        auto it = lower_bound(tails.begin(), tails.end(), a[i]);\r\n        if (it == tails.end()) {\r\n            tails.push_back(a[i]);\r\n        } else {\r\n            *it = a[i];\r\n        }\r\n    }\r\n    \r\n    cout << tails.size() << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD159",
          "title": "双谱共鸣",
          "url": "http://www.xmuoj.com/contest/359/problem/JD159/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>峨眉派女侠递来两卷剑谱：&quot;找出两谱中最长的公共剑招序列——顺序一致但不必连续。&quot;赵晴儿接过剑谱：&quot;LCS——dp[i][j]表示前i招和前j招的最长公共子序列。相等时加一，否则取较大值。&quot;女侠看了答案，微微一笑：&quot;峨眉输了。&quot;</p>",
          "inputDescription": "<p>第一行两个整数n和m。第二行长度为n的字符串。第三行长度为m的字符串。</p>",
          "outputDescription": "<p>一行，最长公共子序列的长度。</p>",
          "hint": "<p>LCS：二维DP。相等时dp[i][j]=dp[i-1][j-1]+1，否则取max(dp[i-1][j], dp[i][j-1])。<a href=\"https://www.acwing.com/problem/content/877/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/159.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint f[N][N];\r\nchar a[N], b[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    cin >> a + 1;\r\n    cin >> b + 1;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = 1; j <= m; j++) {\r\n            if (a[i] == b[j]) {\r\n                f[i][j] = f[i - 1][j - 1] + 1;\r\n            } else {\r\n                f[i][j] = max(f[i - 1][j], f[i][j - 1]);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[n][m] << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD160",
          "title": "合石成堆",
          "url": "http://www.xmuoj.com/contest/359/problem/JD160/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>华山脚下的石阵——N堆石子排成一行，每次只能合并相邻两堆，代价是两堆之和。&quot;全部合并的最小代价？&quot;少林高僧双手合十：&quot;贪心不行，必须区间DP。枚举分割点k，dp[i][j] = min(dp[i][k] + dp[k+1][j]) + sum(i..j)。&quot;李少白闭目凝神，三重循环缓缓展开。高僧点头：&quot;施主悟了。&quot;</p>",
          "inputDescription": "<p>第一行一个整数N。第二行N个整数。</p>",
          "outputDescription": "<p>一行，最小总代价。</p>",
          "hint": "<p>区间DP：枚举分割点。dp[i][j] = min(dp[i][k] + dp[k+1][j]) + sum(i..j)。O(n³)。<a href=\"https://www.acwing.com/problem/content/870/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/160.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 310;\r\nint a[N], s[N];\r\nint f[N][N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        cin >> a[i];\r\n        s[i] = s[i - 1] + a[i];\r\n    }\r\n    \r\n    memset(f, 0x3f, sizeof(f));\r\n    for (int i = 1; i <= n; i++) f[i][i] = 0;\r\n    \r\n    for (int len = 2; len <= n; len++) {\r\n        for (int i = 1; i + len - 1 <= n; i++) {\r\n            int j = i + len - 1;\r\n            for (int k = i; k < j; k++) {\r\n                f[i][j] = min(f[i][j], f[i][k] + f[k + 1][j] + s[j] - s[i - 1]);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[1][n] << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD161",
          "title": "改字成经",
          "url": "http://www.xmuoj.com/contest/359/problem/JD161/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>武当道长递来两卷经文：&quot;把A卷改成B卷，最少几步？增、删、改，每次算一步。&quot;李少白沉思：&quot;dp[i][j]表示A的前i个改成B的前j个的最少操作。三种操作取min+1。&quot;道长抚须而笑：&quot;小友的剑法，已经入了化境。&quot;</p>",
          "inputDescription": "<p>第一行两个整数n和m。第二行长度为n的字符串A。第三行长度为m的字符串B。</p>",
          "outputDescription": "<p>一行，编辑距离。</p>",
          "hint": "<p>编辑距离：dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost)。<a href=\"https://www.acwing.com/problem/content/904/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/161.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cmath>\r\n#include <string>\r\nusing namespace std;\r\nconst int N = 1009;\r\nchar a[N], b[N];\r\nint dp[2][N]; \r\nint main(){\r\n    ios::sync_with_stdio(0); cin.tie(0);\r\n    int n, m;\r\n    cin>>n>>a+1>>m>>b+1;\r\n    //初始化\r\n    for(int i = 0; i <= m; i++) dp[0][i] = i;\r\n    for(int i = 1; i <= n; i++){\r\n    //两行dp循环使用\r\n        int now = (i & 1), old = (i - 1 & 1);\r\n        dp[now][0] = i;//初始化\r\n        for(int j = 1; j <= m; j++){\r\n            if(a[i] == b[j]) dp[now][j] = dp[old][j-1];\r\n            else dp[now][j] = min(min(dp[old][j], dp[now][j-1]), dp[old][j-1]) + 1;\r\n        }\r\n    }\r\n    cout<<dp[n & 1][m];\r\n    return 0;\r\n}\r\n\r\n// 作者：stary_sky\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/11245790/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
          }
        },
        {
          "id": "JD162",
          "title": "雪道寻长",
          "url": "http://www.xmuoj.com/contest/359/problem/JD162/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>华山后山，白雪皑皑。一个R×C的滑雪场，从任意高处滑向相邻的低处。&quot;最长能滑多远？&quot;赵晴儿踏雪而行：&quot;记忆化搜索——DFS+缓存。每个格子只算一次，取四个方向中最长的路径加一。&quot;她的身影在雪道上飞驰，划出一道完美的弧线。</p>",
          "inputDescription": "<p>第一行两个整数R和C。接下来R行每行C个整数表示高度。</p>",
          "outputDescription": "<p>一行，最长递减路径的长度。</p>",
          "hint": "<p>记忆化搜索：DFS+缓存。每个格子只算一次，取四个方向中最长路径+1。<a href=\"https://www.acwing.com/problem/content/903/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/162.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 310;\r\nint g[N][N];\r\nint f[N][N];\r\nint r, c;\r\nint dx[4] = {-1, 0, 1, 0};\r\nint dy[4] = {0, 1, 0, -1};\r\n\r\nint dfs(int x, int y) {\r\n    if (f[x][y] != -1) return f[x][y];\r\n    \r\n    f[x][y] = 1;\r\n    for (int i = 0; i < 4; i++) {\r\n        int nx = x + dx[i];\r\n        int ny = y + dy[i];\r\n        if (nx >= 1 && nx <= r && ny >= 1 && ny <= c && g[nx][ny] < g[x][y]) {\r\n            f[x][y] = max(f[x][y], dfs(nx, ny) + 1);\r\n        }\r\n    }\r\n    \r\n    return f[x][y];\r\n}\r\n\r\nint main() {\r\n    cin >> r >> c;\r\n    \r\n    for (int i = 1; i <= r; i++) {\r\n        for (int j = 1; j <= c; j++) {\r\n            cin >> g[i][j];\r\n        }\r\n    }\r\n    \r\n    memset(f, -1, sizeof(f));\r\n    \r\n    int ans = 0;\r\n    for (int i = 1; i <= r; i++) {\r\n        for (int j = 1; j <= c; j++) {\r\n            ans = max(ans, dfs(i, j));\r\n        }\r\n    }\r\n    \r\n    cout << ans << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD163",
          "title": "背包叠甲",
          "url": "http://www.xmuoj.com/contest/359/problem/JD163/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>论剑峰上，铠甲大师出场。他有N种铠甲，每种有重量、防御和库存。&quot;每种最多拿s件——你能装多少防御？&quot;李少白眉头一皱：&quot;逐件拆分太慢……二进制优化！把s拆成1、2、4、8…的和，转化为01背包。&quot;铠甲大师大惊：&quot;你竟然知道这种方法！&quot;</p>",
          "inputDescription": "<p>第一行两个整数N和V。接下来N行每行三个整数v、w和s（体积、价值、数量）。</p>",
          "outputDescription": "<p>一行，最大价值。</p>",
          "hint": "<p>多重背包二进制优化：拆分s为2的幂次，转化为01背包。O(N*V*logS)。<a href=\"https://www.acwing.com/problem/content/4/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/163.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <vector>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 20010;\r\nint f[N];\r\nint n, m;\r\n\r\nstruct Item {\r\n    int v, w;\r\n};\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    vector<Item> items;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int v, w, s;\r\n        cin >> v >> w >> s;\r\n        \r\n        for (int k = 1; k <= s; k *= 2) {\r\n            s -= k;\r\n            items.push_back({v * k, w * k});\r\n        }\r\n        if (s > 0) {\r\n            items.push_back({v * s, w * s});\r\n        }\r\n    }\r\n    \r\n    for (int i = 0; i < items.size(); i++) {\r\n        for (int j = m; j >= items[i].v; j--) {\r\n            f[j] = max(f[j], f[j - items[i].v] + items[i].w);\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD164",
          "title": "背包限重",
          "url": "http://www.xmuoj.com/contest/359/problem/JD164/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>第二轮铠甲战。数据更大——N和V都到了极限。&quot;同样的方法还管用吗？&quot;对手冷笑。梁嘉峰在台下喊道：&quot;方法不变，多重背包的经典解法！&quot;李少白再次出手，代码如剑，一气呵成。</p>",
          "inputDescription": "<p>第一行两个整数N和V。接下来N行每行三个整数v、w和s。</p>",
          "outputDescription": "<p>一行，最大价值。</p>",
          "hint": "<p>多重背包二进制优化。与JD163相同思路，数据范围更大。<a href=\"https://www.acwing.com/problem/content/5/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/164.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 20010;\r\nint f[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int v, w, s;\r\n        cin >> v >> w >> s;\r\n        \r\n        int k = 1;\r\n        while (k <= s) {\r\n            for (int j = m; j >= k * v; j--) {\r\n                f[j] = max(f[j], f[j - k * v] + k * w);\r\n            }\r\n            s -= k;\r\n            k *= 2;\r\n        }\r\n        if (s > 0) {\r\n            for (int j = m; j >= s * v; j--) {\r\n                f[j] = max(f[j], f[j - s * v] + s * w);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD165",
          "title": "分组选宝",
          "url": "http://www.xmuoj.com/contest/359/problem/JD165/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>宝物被分成若干组，每组只能选一件。&quot;分组背包——三重循环：外层遍历组，内层逆序容量，最内层遍历组内物品。&quot;对手是丐帮长老，手中竹棒一点：&quot;小子，你确定每组只选一件？&quot;李少白微微一笑：&quot;确定。每组选最优的那一件。&quot;长老哈哈大笑：&quot;好！&quot;</p>",
          "inputDescription": "<p>第一行两个整数N和V。接下来每组：第一行S（组内物品数），接下来S行每行两个整数v和w。</p>",
          "outputDescription": "<p>一行，最大价值。</p>",
          "hint": "<p>分组背包：外层遍历组，内层逆序容量，最内层遍历组内物品。<a href=\"https://www.acwing.com/problem/content/9/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/165.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 110;\r\nint f[N];\r\nint v[N], w[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int s;\r\n        cin >> s;\r\n        for (int j = 0; j < s; j++) {\r\n            cin >> v[j] >> w[j];\r\n        }\r\n        for (int j = m; j >= 0; j--) {\r\n            for (int k = 0; k < s; k++) {\r\n                if (j >= v[k]) {\r\n                    f[j] = max(f[j], f[j - v[k]] + w[k]);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD166",
          "title": "递增剑意II",
          "url": "http://www.xmuoj.com/contest/359/problem/JD166/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>擂台第二轮——剑的数量到了十万。O(n²)的剑法已经不够用了。梁嘉峰在台下传音：&quot;贪心+二分——维护最小末尾数组，O(nlogn)。这是剑法的极致。&quot;李少白闭上眼睛，剑意如丝，层层递进。对手的剑阵瞬间崩溃。</p>",
          "inputDescription": "<p>第一行一个整数N。第二行N个整数。</p>",
          "outputDescription": "<p>一行，最长递增子序列的长度。</p>",
          "hint": "<p>贪心+二分：维护最小末尾数组q[]，二分查找替换。O(nlogn)。<a href=\"https://www.acwing.com/problem/content/898/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/166.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <vector>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nint a[N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        cin >> a[i];\r\n    }\r\n    \r\n    vector<int> tails;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        auto it = lower_bound(tails.begin(), tails.end(), a[i]);\r\n        if (it == tails.end()) {\r\n            tails.push_back(a[i]);\r\n        } else {\r\n            *it = a[i];\r\n        }\r\n    }\r\n    \r\n    cout << tails.size() << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD167",
          "title": "整分剑法",
          "url": "http://www.xmuoj.com/contest/359/problem/JD167/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>对手是一位数学大师，他写下数字n：&quot;把它拆成若干正整数之和，有多少种拆法？&quot;赵晴儿上前：&quot;完全背包——从1到n，每个数可以用无限次。dp[j] += dp[j-i]，模1e9+7。&quot;大师推了推眼镜：&quot;你用背包来解整数划分？有意思。&quot;</p>",
          "inputDescription": "<p>一个整数n（1≤n≤1000）。</p>",
          "outputDescription": "<p>一行，划分方案数模1e9+7。</p>",
          "hint": "<p>完全背包DP：dp[j] += dp[j-i]，i从1到n。模1e9+7。<a href=\"https://www.acwing.com/problem/content/902/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/167.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nconst int MOD = 1e9 + 7;\r\nint f[N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    f[0] = 1;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = i; j <= n; j++) {\r\n            f[j] = (f[j] + f[j - i]) % MOD;\r\n        }\r\n    }\r\n    \r\n    cout << f[n] << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD168",
          "title": "数码计数",
          "url": "http://www.xmuoj.com/contest/359/problem/JD168/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>华山石壁上刻着从a到b的所有数字。&quot;0到9每个数字各出现了几次？&quot;对手出了一道算术题。李少白没有一个个数。&quot;数位统计——对每个数字和位置，用数学公式算出现次数。f(b)-f(a-1)。&quot;对手目瞪口呆：&quot;你……你怎么算得这么快？&quot;</p>",
          "inputDescription": "<p>一行两个整数a和b。</p>",
          "outputDescription": "<p>一行，10个整数，分别表示数字0~9在[a,b]中出现的次数，空格隔开。</p>",
          "hint": "<p>数位统计：对每个数字和位置用数学公式计算出现次数。f(b)-f(a-1)。<a href=\"https://www.acwing.com/problem/content/340/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/168.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <algorithm>\r\n#include <vector>\r\n#include <cmath>\r\nusing namespace std;\r\n\r\nint a, b;\r\n\r\n// 得到一个数中某几个相邻的数字构成的数值\r\n// 一定要记住从高位往低位遍历\r\nint get_num(vector<int> num, int l, int r){\r\n    int ans = 0;\r\n    for (int i = l; i >= r; i --) ans = ans * 10 + num[i];\r\n    return ans;\r\n}\r\n\r\n// 计算1到n的所有的数中数字x出现的次数\r\nint count(int n, int x){\r\n    vector<int> num;\r\n    while (n){\r\n        num.push_back(n % 10);\r\n        n /= 10;\r\n    }\r\n    int len = num.size(), ans = 0;\r\n    for (int i = len - 1 - !x; i >= 0; i --){ // 此处减去 !x 是精华\r\n        // 000 ~ abc-1\r\n        ans += get_num(num, len - 1, i + 1) * (int)pow(10, i);\r\n        if (!x) ans -= (int)pow(10, i);  // x==0时，001 ~ abc-1\r\n        // abc\r\n        if (x == num[i]) ans += (get_num(num, i - 1, 0) + 1);\r\n        else if (x < num[i]) ans += (int)pow(10, i);\r\n    }\r\n    return ans;\r\n\r\n}\r\n\r\nint main(){\r\n    while (cin >> a >> b, a || b){ // a b 不全为0\r\n        if (a > b) swap(a, b);\r\n        for (int i = 0; i <= 9; i ++) printf(\"%d \", count(b, i) - count(a - 1, i));\r\n        puts(\"\");\r\n    }\r\n\r\n    return 0;\r\n}\r\n\r\n// 作者：Qiner\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/12793336/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
          }
        },
        {
          "id": "JD169",
          "title": "棋盘铺阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD169/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>华山之巅，云雾缭绕。四位绝顶高手已经等候多时。第一位是棋圣。他摆出一个n×m的棋盘和一堆1×2的骨牌：&quot;铺满整个棋盘，有多少种铺法？&quot;赵晴儿凝视棋盘，忽然眼中一亮：&quot;状压DP——逐列处理。用二进制掩码表示哪些格子被前一列的横骨牌占了。&quot;棋圣抚掌而笑：&quot;好一个状压！老夫输了。&quot;</p>",
          "inputDescription": "<p>多组数据，每组两个整数n和m。以0 0结束。</p>",
          "outputDescription": "<p>每组一行，铺法总数。</p>",
          "hint": "<p>状压DP：逐列处理，状态掩码表示被前一列横骨牌占的格子。<a href=\"https://www.acwing.com/problem/content/293/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/169.cpp",
            "language": "cpp",
            "code": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nconst int N = 12;\nlong long f[N][1 << N];\nint n, m;\n\nvoid dfs(int col, int row, int cur_state, int next_state) {\n    if (row == n) {\n        f[col + 1][next_state] += f[col][cur_state];\n        return;\n    }\n    \n    if (cur_state & (1 << row)) {\n        dfs(col, row + 1, cur_state, next_state);\n    } else {\n        // 竖放\n        dfs(col, row + 1, cur_state, next_state | (1 << row));\n        // 横放\n        if (row + 1 < n && !(cur_state & (1 << (row + 1)))) {\n            dfs(col, row + 2, cur_state, next_state);\n        }\n    }\n}\n\nint main() {\n    while (cin >> n >> m && n && m) {\n        if (n > m) swap(n, m);\n        \n        memset(f, 0, sizeof(f));\n        f[0][0] = 1;\n        \n        for (int col = 0; col < m; col++) {\n            for (int state = 0; state < (1 << n); state++) {\n                if (f[col][state]) {\n                    dfs(col, 0, state, 0);\n                }\n            }\n        }\n        \n        cout << f[m][0] << endl;\n    }\n    \n    return 0;\n}"
          }
        },
        {
          "id": "JD170",
          "title": "万城巡游",
          "url": "http://www.xmuoj.com/contest/359/problem/JD170/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>第二位绝顶高手——游侠。他铺开一张城池图：&quot;从城0出发，每座城恰好走一次，到城n-1。最短路径？&quot;李少白眼中精光一闪：&quot;状压DP——dp[mask][i]表示访问集合mask、当前在城i的最小代价。枚举所有状态和转移。O(2^n × n²)。&quot;游侠击节赞叹：&quot;好！这一剑，我甘拜下风！&quot;</p>",
          "inputDescription": "<p>第一行一个整数n。接下来n行每行n个整数，表示邻接矩阵。</p>",
          "outputDescription": "<p>一行，最短Hamilton路径长度。</p>",
          "hint": "<p>状压DP：dp[mask][i]表示访问集合mask、当前在城i的最小代价。O(2^n * n²)。<a href=\"https://www.acwing.com/problem/content/93/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/170.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 20;\r\nconst int M = 1 << N;\r\nint g[N][N];\r\nint f[M][N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        for (int j = 0; j < n; j++) {\r\n            cin >> g[i][j];\r\n        }\r\n    }\r\n    \r\n    memset(f, 0x3f, sizeof(f));\r\n    f[1][0] = 0;\r\n    \r\n    for (int mask = 1; mask < (1 << n); mask++) {\r\n        for (int i = 0; i < n; i++) {\r\n            if (!(mask & (1 << i))) continue;\r\n            for (int j = 0; j < n; j++) {\r\n                if (i == j) continue;\r\n                if (!(mask & (1 << j))) continue;\r\n                f[mask][i] = min(f[mask][i], f[mask ^ (1 << i)][j] + g[j][i]);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[(1 << n) - 1][n - 1] << endl;\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD171",
          "title": "群经改字",
          "url": "http://www.xmuoj.com/contest/359/problem/JD171/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>第三位——藏经阁阁主。他取出一本字典和一段经文：&quot;字典里有多少个词，和这段经文的编辑距离不超过k？&quot;赵晴儿沉吟片刻：&quot;对字典里每个词，算它和经文的编辑距离。标准编辑距离DP——dp[i][j] = min(三种操作)。&quot;阁主长叹：&quot;当年我花了十年才悟出此法，你竟片刻之间……&quot;</p>",
          "inputDescription": "<p>第一行两个整数N和M。接下来N行每行一个字符串（字典）。接下来M行每行一个字符串和一个整数k。</p>",
          "outputDescription": "<p>M行，每行一个整数（字典中编辑距离≤k的字符串个数）。</p>",
          "hint": "<p>编辑距离DP：dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost)。<a href=\"https://www.acwing.com/problem/content/901/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/171.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <cstring>\r\n#include <string>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint dp[N][N];\r\nstring dict[N];\r\nint n, m;\r\n\r\nint edit_distance(string a, string b) {\r\n    int len1 = a.length(), len2 = b.length();\r\n    \r\n    for (int i = 0; i <= len1; i++) dp[i][0] = i;\r\n    for (int j = 0; j <= len2; j++) dp[0][j] = j;\r\n    \r\n    for (int i = 1; i <= len1; i++) {\r\n        for (int j = 1; j <= len2; j++) {\r\n            if (a[i - 1] == b[j - 1]) {\r\n                dp[i][j] = dp[i - 1][j - 1];\r\n            } else {\r\n                dp[i][j] = min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;\r\n            }\r\n        }\r\n    }\r\n    \r\n    return dp[len1][len2];\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        cin >> dict[i];\r\n    }\r\n    \r\n    while (m--) {\r\n        string s;\r\n        int k;\r\n        cin >> s >> k;\r\n        \r\n        int cnt = 0;\r\n        for (int i = 0; i < n; i++) {\r\n            if (edit_distance(dict[i], s) <= k) {\r\n                cnt++;\r\n            }\r\n        }\r\n        \r\n        cout << cnt << endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "JD172",
          "title": "千机棋局",
          "url": "http://www.xmuoj.com/contest/359/problem/JD172/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>华山绝顶，风雷激荡。最后一位对手——棋魔，传说中的千机棋圣。他缓缓展开一张巨大的人员图谱：&quot;这是宗门的命脉——每个人有一个直属上司。现在要派人出征，但一个士兵和他的上司不能同时出征——否则后方崩溃。每个士兵有不同的战斗力。&quot;梁嘉峰在台下喊道：&quot;树形DP！dp[u][0]表示u留守时子树的最大战力，dp[u][1]表示u出征时。出征则下属必须留守，留守则下属可出可留。找到根节点，DFS一遍！&quot;李少白深吸一口气，闭上眼睛。他想起了第一天来到剑道宗的那个下午——梁嘉峰递给他两枚铁令，赵晴儿在沙盘上画圆。从变量到递归，从数组到图论，从排序到动态规划……每一步都是剑道的修行。他睁开眼睛，提笔写下最后一行代码。棋魔看着答案，沉默良久，终于起身，深深一揖：&quot;华山论剑，到此为止。&quot;梁嘉峰走上前来，拍了拍李少白的肩膀：&quot;恭喜。你可以出师了。&quot;赵晴儿在一旁笑了：&quot;别急，回去还得教下一届呢。&quot;</p>",
          "inputDescription": "<p>第一行一个整数N。第二行N个整数（每个员工的快乐值）。接下来N-1行每行两个整数l k（l的上司是k）。</p>",
          "outputDescription": "<p>一行，最大总快乐值。</p>",
          "hint": "<p>树形DP：dp[u][0/1]表示u不出征/出征时的最大值。DFS从根遍历。dp[u][1] = h[u] + Σdp[v][0]，dp[u][0] = Σmax(dp[v][0], dp[v][1])。<a href=\"https://www.acwing.com/problem/content/287/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [],
          "solution": {
            "path": "solutions/359/172.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <vector>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 6010;\r\nvector<int> g[N];\r\nint happy[N];\r\nint dp[N][2];\r\nbool has_parent[N];\r\nint n;\r\n\r\nvoid dfs(int u) {\r\n    dp[u][0] = 0;\r\n    dp[u][1] = happy[u];\r\n    \r\n    for (int i = 0; i < g[u].size(); i++) {\r\n        int v = g[u][i];\r\n        dfs(v);\r\n        dp[u][0] += max(dp[v][0], dp[v][1]);\r\n        dp[u][1] += dp[v][0];\r\n    }\r\n}\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        cin >> happy[i];\r\n    }\r\n    \r\n    for (int i = 0; i < n - 1; i++) {\r\n        int l, k;\r\n        cin >> l >> k;\r\n        g[k].push_back(l);\r\n        has_parent[l] = true;\r\n    }\r\n    \r\n    int root = 1;\r\n    while (has_parent[root]) root++;\r\n    \r\n    dfs(root);\r\n    \r\n    cout << max(dp[root][0], dp[root][1]) << endl;\r\n    \r\n    return 0;\r\n}"
          }
        }
      ]
    }
  ]
};
