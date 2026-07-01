window.XMUOJ_SOLUTIONS_DATA = {
  "generatedAt": "2026-7-1 11:26:48",
  "source": "http://www.xmuoj.com",
  "contests": [
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
          "hint": "<p>读入两个整数，输出它们的和。最基础的输入输出练习。</p><p><a href=\"https://www.acwing.com/problem/content/1/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 1 | JD001 | 第1章 持剑叩门",
          "samples": [],
          "solution": {
            "path": "solutions/359/001.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    cin >> A >> B;\r\n    cout << A + B;\r\n    return 0;\r\n}\r\n"
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
          "hint": "<p>读入两个整数，输出乘积。注意输出格式带前缀。</p><p><a href=\"https://www.acwing.com/problem/content/605/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 605 | JD002 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "3 9",
              "output": "PROD = 27"
            }
          ],
          "solution": {
            "path": "solutions/359/002.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    cin >> A >> B;\r\n    cout << \"PROD = \" << A * B << endl;\r\n    return 0;\r\n}"
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
          "hint": "<p>先乘后减，注意运算顺序和输出格式。</p><p><a href=\"https://www.acwing.com/problem/content/608/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 608 | JD003 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "5 6 7 8",
              "output": "DIFFERENCE = -26"
            }
          ],
          "solution": {
            "path": "solutions/359/003.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B, C, D;\r\n    cin >> A >> B >> C >> D;\r\n    cout <<\"DIFFERENCE = \" << A * B - C * D << endl;\r\n    return 0;\r\n}//输出案例缺少\"DIFFERENCE = \""
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
          "hint": "<p>总价 = 件数₁×单价₁ + 件数₂×单价₂。</p><p><a href=\"https://www.acwing.com/problem/content/611/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 611 | JD004 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "12 1 5.30",
              "output": "TOTAL = 5.30"
            }
          ],
          "solution": {
            "path": "solutions/359/004.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    double C;\r\n    scanf(\"%d%d%lf\",&A,&B,&C);\r\n    printf(\"TOTAL = %.2lf\", B * C);\r\n    return 0;\r\n}"
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
          "hint": "<p>面积 = 3.14159 × r × r，注意浮点数运算和格式化输出。</p><p><a href=\"https://www.acwing.com/problem/content/604/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 604 | JD005 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "2.00",
              "output": "A=12.5664"
            }
          ],
          "solution": {
            "path": "solutions/359/005.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#define pi 3.14159\r\nusing namespace std;\r\nint main()\r\n{\r\n    double A;\r\n    scanf(\"%lf\",&A);\r\n    printf(\"A=%.4lf\", A * A * pi);\r\n    return 0;\r\n}"
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
          "hint": "<p>加权平均 = (A×3.5 + B×7.5) / 11。分母是权重之和，不是2。</p><p><a href=\"https://www.acwing.com/problem/content/606/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 606 | JD006 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "9.7\n5.3",
              "output": "Average = 6.70000"
            }
          ],
          "solution": {
            "path": "solutions/359/006.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a, b;\r\n    scanf(\"%lf%lf\",&a,&b);\r\n    printf(\"Average = %.5lf\", (a*3.5+b*7.5)/11.0 );\r\n    return 0;\r\n}"
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
          "hint": "<p>实发金额 = 出工天数 × 每日工钱。</p><p><a href=\"https://www.acwing.com/problem/content/609/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 609 | JD007 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "25\n100 5.50",
              "output": "NUMBER = 25\nSALARY = U$ 550.00"
            }
          ],
          "solution": {
            "path": "solutions/359/007.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double b;\r\n    int a,c;\r\n    scanf(\"%d\", &c);\r\n    scanf(\"%d%lf\",&a,&b);\r\n    printf(\"NUMBER = %d\\n\", c);\r\n    printf(\"SALARY = U$ %.2lf\",a*b );\r\n    return 0;\r\n}"
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
          "hint": "<p>消耗率 = 草料 / 路程，注意浮点数除法。</p><p><a href=\"https://www.acwing.com/problem/content/615/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 615 | JD008 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "500 35.0",
              "output": "14.286 km/l"
            }
          ],
          "solution": {
            "path": "solutions/359/008.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a, b;\r\n    scanf(\"%lf%lf\",&a,&b);\r\n    printf(\"%.3lf km/l\",a/b );\r\n \r\n    return 0;\r\n}"
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
          "hint": "<p>体积 = (4.0/3.0) × 3.14159 × r³，注意用浮点数除法。</p><p><a href=\"https://www.acwing.com/problem/content/612/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 612 | JD009 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "3",
              "output": "VOLUME = 113.097"
            }
          ],
          "solution": {
            "path": "solutions/359/009.cpp",
            "language": "cpp",
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    double r;\r\n    scanf(\"%lf\",&r);\r\n    printf(\"VOLUME = %.3lf\",(4.0/3)*3.14159*r*r*r );\r\n    return 0;\r\n}"
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
          "hint": "<p>用条件判断两两比较，或直接用max函数。</p><p><a href=\"https://www.acwing.com/problem/content/614/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 614 | JD010 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "7 14 106",
              "output": "Max = 106"
            }
          ],
          "solution": null
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
          "hint": "<p>使用距离公式，需要引入数学库以使用sqrt函数。</p><p><a href=\"https://www.acwing.com/problem/content/616/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 616 | JD011 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "1.0 7.0 5.0 9.0",
              "output": "4.4721"
            }
          ],
          "solution": null
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
          "hint": "<p>注意输出格式：名称与面积之间有一个空格。π取3.14159。使用 printf(&quot;%.3f&quot;) 或 cout &lt;&lt; fixed &lt;&lt; setprecision(3) 保留3位小数。</p><p><a href=\"https://www.acwing.com/problem/content/615/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 613 | JD012 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "3.0 4.0 5.2",
              "output": "TRIANGULO: 7.800\nCIRCULO: 84.949\nTRAPEZIO: 18.200\nQUADRADO: 16.000\nRETANGULO: 12.000"
            }
          ],
          "solution": null
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
          "hint": "<p>时 = 秒 ÷ 3600，分 = 余数 ÷ 60，秒 = 最终余数。</p><p><a href=\"https://www.acwing.com/problem/content/654/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 654 | JD013 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "556",
              "output": "0:9:16"
            }
          ],
          "solution": null
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
          "hint": "<p>贪心策略：从大到小依次整除，记录每种面额的枚数。</p><p><a href=\"https://www.acwing.com/problem/content/653/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 653 | JD014 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "576",
              "output": "576\n5 nota(s) de R$ 100,00\n1 nota(s) de R$ 50,00\n1 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n1 nota(s) de R$ 5,00\n0 nota(s) de R$ 2,00\n1 nota(s) de R$ 1,00"
            }
          ],
          "solution": null
        },
        {
          "id": "JD015",
          "title": "石碑之谜",
          "url": "http://www.xmuoj.com/contest/359/problem/JD015/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>山门前有两条路，路边各立一块石碑。赵晴儿指着石碑上的两个数说：「如果其中一个数能被另一个整除，这两块碑就是一对——走左边这条路。否则走右边。」</p><p>给定两个整数A和B，判断它们是否互为倍数关系（即A能被B整除，或B能被A整除）。</p>",
          "inputDescription": "<p>一行，两个整数A和B。</p>",
          "outputDescription": "<p>互为倍数输出 `Yes`，否则输出 `No`。</p>",
          "hint": "<p>判断 A%B==0 或 B%A==0，只要有一个成立就是倍数关系，输出Yes；否则输出No。</p>",
          "source": "AcWing 665 | JD015 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "6 24",
              "output": "Yes"
            }
          ],
          "solution": null
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
          "hint": "<p>三角形成立条件：任意两边之和大于第三边。如果成立，周长=A+B+C；如果不成立，梯形面积=(A+B)*C/2。注意保留1位小数。</p>",
          "source": "AcWing 664 | JD016 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "6.0 4.0 2.0",
              "output": "Area = 10.0"
            }
          ],
          "solution": null
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
          "hint": "<p>用条件判断：如果B&gt;A，输出B-A；如果B==A，输出24；否则输出24-A+B。</p>",
          "source": "AcWing 667 | JD017 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "0 15",
              "output": "15"
            }
          ],
          "solution": null
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
          "hint": "<p>用条件判断两两比较确定顺序，或存入数组排序。</p><p><a href=\"https://www.acwing.com/problem/content/663/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 663 | JD018 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "7 21 -14",
              "output": "-14 7 21"
            }
          ],
          "solution": null
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
          "hint": "<p>用数组或条件判断存储5种单价，查表后乘以数量。</p><p><a href=\"https://www.acwing.com/problem/content/660/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 660 | JD019 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "3 2",
              "output": "Total: R$ 10.00"
            }
          ],
          "solution": null
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
          "hint": "<p>用 if-elif-else 逐一判断落在哪个区间。</p><p><a href=\"https://www.acwing.com/problem/content/659/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 659 | JD020 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "95.29",
              "output": "Interval (75,100]"
            }
          ],
          "solution": null
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
          "hint": "<p>先判断是否在原点或坐标轴上（x==0 或 y==0），再判断象限。</p><p><a href=\"https://www.acwing.com/problem/content/662/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 662 | JD021 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "4.5 -2.2",
              "output": "Q4"
            }
          ],
          "solution": null
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
          "hint": "<p>全部转为分钟做差。如果结果≤0，加上24×60。</p><p><a href=\"https://www.acwing.com/problem/content/668/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 668 | JD022 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "8 56 7 37",
              "output": "22:41"
            }
          ],
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
          "description": "<p>宗门账房年底调薪，按原月钱所在区间确定涨幅：0~400涨15%，400.01~800涨12%，800.01~1200涨10%，1200.01~2000涨7%，2000以上涨4%。涨幅是按整个工资乘以对应百分比，不是分段累进。</p><p>李少白拿到一名弟子的原月钱，请算出新月钱、涨了多少和涨幅百分比。</p>",
          "inputDescription": "<p>一个浮点数，表示原月钱。</p>",
          "outputDescription": "<p>三行：新月钱、涨了多少、涨幅百分比（整数带%号），金额保留两位小数。</p>",
          "hint": "<p>用 if-elif 判断原月钱落在哪个区间，确定涨幅百分比p。涨额 = 原月钱 × p/100，新月钱 = 原月钱 + 涨额。注意400属于0~400区间（涨15%），400.01才属于400~800区间。</p><p><a href=\"https://www.acwing.com/problem/content/669/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 669 | JD023 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "400.00",
              "output": "New salary: 460.00\nIncrease: 60.00\nPercentage: 15 %"
            }
          ],
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
          "hint": "<p>用逻辑与（&&/and）连接五个条件，全部为真才通过。</p><p><a href=\"https://www.acwing.com/problem/content/657/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 657 | JD024 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "-87 14 68 33",
              "output": "Not accepted"
            }
          ],
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
          "hint": "<p>用 if-elif 链逐一比对，或用字典/映射表查找。</p><p><a href=\"https://www.acwing.com/problem/content/671/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 671 | JD025 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "11",
              "output": "Sao Paulo"
            }
          ],
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
          "outputDescription": "<p>不能构成三角形输出 <code>Not a triangle</code>；能构成则按以下规则输出（<b>每种满足的条件输出一行</b>）：</p><ol><li>先判断角度类型：输出 <code>Right</code>（直角）、<code>Acute</code>（锐角）或 <code>Obtuse</code>（钝角）之一。</li><li>再判断边长类型：若三边相等输出 <code>Equilateral</code>（等边），若恰好两边相等输出 <code>Isosceles</code>（等腰），否则不输出。</li></ol><p>注意：一个三角形可能同时属于多个类型，同一类型的判断用 <code>if</code> 而不是 <code>elif</code> 才能多行输出。</p>",
          "hint": "<p>先验证两边之和大于第三边。若不能构成三角形则直接输出 <code>Not a triangle</code> 并结束。</p><p>能构成三角形时，角度类型和边长类型分别用独立的 <code>if</code> 判断（不要用 <code>elif</code> 串起来），以确保等边/等腰三角形能输出两行。</p><p>边长已从小到大排列，第三个数即最长边。</p><p><a href=\"https://www.acwing.com/problem/content/666/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 666 | JD026 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "6.0 4.0 2.0",
              "output": "Not a triangle"
            },
            {
              "input": "5.0 5.0 5.0",
              "output": "Acute\nEquilateral"
            }
          ],
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
          "description": "<p>迷踪林外遇到一只怪兽。赵晴儿观察了三层特征来判断它的种类：第一层是有脊椎还是无脊椎；第二层是哺乳类、鸟类还是爬行类；第三层是食性（食肉、食草、杂食）。</p><p>根据三层特征，输出对应的动物名称。</p>",
          "inputDescription": "<p>三行，每行一个字符串，分别表示三层分类特征。</p>",
          "outputDescription": "<p>输出对应的动物名称。</p>",
          "hint": "<p>三层嵌套 if-else：先判断第一层，再判断第二层，最后判断第三层。</p><p><a href=\"https://www.acwing.com/problem/content/670/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 670 | JD027 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "vertebrado\nmamifero onivoro",
              "output": "homem"
            }
          ],
          "solution": {
            "path": "solutions/359/027.cpp",
            "language": "cpp",
            "code": ""
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
          "hint": "<p>分段计算：1000×8% + 2×18% = 80.36。每段只对超出部分征税。</p><p><a href=\"https://www.acwing.com/problem/content/672/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 672 | JD028 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "3002.00",
              "output": "R$ 80.36"
            }
          ],
          "solution": null
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
          "hint": "<p>for循环从2开始，步长为2，到100结束。</p>",
          "source": "AcWing ??? | JD029 | 第3章 千回百转",
          "samples": [
            {
              "input": "No input",
              "output": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n22\n24\n26\n28\n30\n32\n34\n36\n38\n40\n42\n44\n46\n48\n50\n52\n54\n56\n58\n60\n62\n64\n66\n68\n70\n72\n74\n76\n78\n80\n82\n84\n86\n88\n90\n92\n94\n96\n98\n100"
            }
          ],
          "solution": null
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
          "hint": "<p>for循环从1开始，步长为2，到X结束。如果X是偶数，最后一个奇数是X-1。</p>",
          "source": "AcWing ??? | JD030 | 第3章 千回百转",
          "samples": [
            {
              "input": "8",
              "output": "1\n3\n5\n7"
            }
          ],
          "solution": null
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
          "hint": "<p>外层while循环读入X，遇到0停止。内层for循环从1到X输出。</p>",
          "source": "AcWing ??? | JD031 | 第3章 千回百转",
          "samples": [
            {
              "input": "5\n10\n3\n0",
              "output": "1 2 3 4 5\n1 2 3 4 5 6 7 8 9 10\n1 2 3"
            }
          ],
          "solution": null
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
          "hint": "<p>如果X是奇数，从X+2开始；如果X是偶数，从X+1开始。循环6次，每次加2。</p>",
          "source": "AcWing ??? | JD032 | 第3章 千回百转",
          "samples": [
            {
              "input": "8",
              "output": "9\n11\n13\n15\n17\n19"
            }
          ],
          "solution": null
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
          "hint": "<p>循环读入6个数，用if判断是否&gt;0，计数器累加。</p>",
          "source": "AcWing ??? | JD033 | 第3章 千回百转",
          "samples": [
            {
              "input": "7\n-5\n6\n-3.4\n4.6\n12",
              "output": "4 positive numbers"
            }
          ],
          "solution": null
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
          "hint": "<p>for循环从1到10000，if i%N==2则输出。</p>",
          "source": "AcWing ??? | JD034 | 第3章 千回百转",
          "samples": [
            {
              "input": "13",
              "output": "2\n15\n28\n41\n54\n..."
            }
          ],
          "solution": null
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
          "hint": "<p>循环读入，判断是否 10≤X≤20，计数器累加。</p>",
          "source": "AcWing ??? | JD035 | 第3章 千回百转",
          "samples": [
            {
              "input": "5\n5 12 18 25 10",
              "output": "3 in\n2 out"
            }
          ],
          "solution": null
        },
        {
          "id": "JD036",
          "title": "奇数求和",
          "url": "http://www.xmuoj.com/contest/359/problem/JD036/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在墙上刻了两个数X和Y，让李少白算出X和Y之间（不含X和Y）所有奇数的和。</p>",
          "inputDescription": "<p>一行，两个整数X和Y（X",
          "outputDescription": "<p>输出X和Y之间所有奇数的和。</p>",
          "hint": "<p>从X+1到Y-1循环，判断每个数是否为奇数，是则累加。</p>",
          "source": "AcWing ??? | JD036 | 第3章 千回百转",
          "samples": [
            {
              "input": "6 -5",
              "output": "5"
            }
          ],
          "solution": null
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
          "hint": "<p>A固定，第二行跳过负数和零找N。从A开始循环N次累加。</p>",
          "source": "AcWing ??? | JD037 | 第3章 千回百转",
          "samples": [
            {
              "input": "3\n-5 0 -3 4 -1",
              "output": "18"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历时同时记录最大值和位置。</p>",
          "source": "AcWing ??? | JD038 | 第3章 千回百转",
          "samples": [
            {
              "input": "5\n3 2 5 1 4",
              "output": "5\n3"
            }
          ],
          "solution": null
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
          "hint": "<p>从1到N循环，如果N%i==0则i是约数。</p>",
          "source": "AcWing ??? | JD039 | 第3章 千回百转",
          "samples": [
            {
              "input": "6",
              "output": "1\n2\n3\n6"
            }
          ],
          "solution": null
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
          "hint": "<p>for循环从1到10，每次输出i x N = i*N。</p>",
          "source": "AcWing ??? | JD040 | 第3章 千回百转",
          "samples": [
            {
              "input": "140",
              "output": "1 x 140 = 140\n2 x 140 = 280\n3 x 140 = 420\n4 x 140 = 560\n5 x 140 = 700\n6 x 140 = 840\n7 x 140 = 980\n8 x 140 = 1120\n9 x 140 = 1260\n10 x 140 = 1400"
            }
          ],
          "solution": null
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
          "hint": "<p>嵌套循环，外层控制行，内层控制列。每行第M个位置输出SWORD。</p>",
          "source": "AcWing ??? | JD041 | 第3章 千回百转",
          "samples": [
            {
              "input": "7 4",
              "output": "1 2 3 SWORD\n5 6 7 SWORD\n9 10 11 SWORD\n13 14 15 SWORD\n17 18 19 SWORD\n21 22 23 SWORD\n25 26 27 SWORD"
            }
          ],
          "solution": null
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
          "hint": "<p>三个计数器分别累加C、R、F的数量。注意每行先读数量再读类型。总数 = 所有数量之和。占比 = 各类数量 / 总数 × 100%，保留两位小数。</p>",
          "source": "AcWing ??? | JD042 | 第3章 千回百转",
          "samples": [
            {
              "input": "11\n1 F\n5 C\n4 C\n12 C\n11 F\n15 F\n2 F\n7 C\n1 C\n4 C\n9 F",
              "output": "Total: 71 weapons\nTotal swords: 33\nTotal blades: 0\nTotal spears: 38\nPercentage of swords: 46.48 %\nPercentage of blades: 0.00 %\nPercentage of spears: 53.52 %"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历数组，将≤0的元素替换为1。</p>",
          "source": "JD | JD043 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "-73\n27\n-35\n50\n-67\n86\n39\n-81\n-7\n31",
              "output": "X[0] = 1\nX[1] = 27\nX[2] = 1\nX[3] = 50\nX[4] = 1\nX[5] = 86\nX[6] = 39\nX[7] = 1\nX[8] = 1\nX[9] = 31"
            }
          ],
          "solution": null
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
          "hint": "<p>N[0]=V，循环N[i]=N[i-1]*2。</p>",
          "source": "JD | JD044 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "6",
              "output": "N[0] = 6\nN[1] = 12\nN[2] = 24\nN[3] = 48\nN[4] = 96\nN[5] = 192\nN[6] = 384\nN[7] = 768\nN[8] = 1536\nN[9] = 3072"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历数组，if元素≤10则输出。</p>",
          "source": "JD | JD045 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "79.5\n-35.1\n65.0\n-89.9\n62.2\n-30.0\n-58.1\n-74.0\n85.7\n66.4\n-60.2\n-32.1\n11.4\n34.6\n0.2\n96.3\n-67.9\n70.1\n27.3\n53.4\n63.8\n43.2\n-68.2\n-87.9\n-13.3\n62.1\n-12.0\n66.9\n1.6\n-70.3\n-14.0\n-84.8\n19.6\n-1.9\n43.4\n36.9\n97.2\n-88.6\n52.2\n-21.0\n-54.1\n-17.3\n-11.7\n-8.5\n40.9\n-21.6\n-12.0\n87.8\n-92.9\n45.3\n-70.1\n73.7\n-23.2\n87.3\n-78.6\n38.2\n51.2\n-21.0\n3.9\n88.4\n28.3\n-67.6\n47.1\n-49.1\n73.6\n39.5\n28.0\n-80.1\n-41.4\n43.2\n-4.6\n61.1\n83.2\n65.5\n74.3\n90.1\n-80.2\n39.6\n-7.0\n-34.4\n43.1\n-62.5\n-25.3\n61.0\n68.5\n9.0\n10.3\n45.9\n-98.0\n-34.8\n88.3\n-26.6\n-48.1\n20.5\n-5.4\n-76.7\n79.7\n-90.0\n59.1\n-18.7",
              "output": "A[1] = -35.1\nA[3] = -89.9\nA[5] = -30.0\nA[6] = -58.1\nA[7] = -74.0\nA[10] = -60.2\nA[11] = -32.1\nA[14] = 0.2\nA[16] = -67.9\nA[22] = -68.2\nA[23] = -87.9\nA[24] = -13.3\nA[26] = -12.0\nA[28] = 1.6\nA[29] = -70.3\nA[30] = -14.0\nA[31] = -84.8\nA[33] = -1.9\nA[37] = -88.6\nA[39] = -21.0\nA[40] = -54.1\nA[41] = -17.3\nA[42] = -11.7\nA[43] = -8.5\nA[45] = -21.6\nA[46] = -12.0\nA[48] = -92.9\nA[50] = -70.1\nA[52] = -23.2\nA[54] = -78.6\nA[57] = -21.0\nA[58] = 3.9\nA[61] = -67.6\nA[63] = -49.1\nA[67] = -80.1\nA[68] = -41.4\nA[70] = -4.6\nA[76] = -80.2\nA[78] = -7.0\nA[79] = -34.4\nA[81] = -62.5\nA[82] = -25.3\nA[85] = 9.0\nA[88] = -98.0\nA[89] = -34.8\nA[91] = -26.6\nA[92] = -48.1\nA[94] = -5.4\nA[95] = -76.7\nA[97] = -90.0\nA[99] = -18.7"
            }
          ],
          "solution": null
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
          "hint": "<p>双指针从两端向中间交换。</p>",
          "source": "JD | JD046 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "-40\n57\n99\n2\n-20\n25\n-67\n-76\n70\n98\n-95\n-92\n-100\n-100\n-55\n48\n-55\n54\n1\n-32",
              "output": "N[0] = -32\nN[1] = 1\nN[2] = 54\nN[3] = -55\nN[4] = 48\nN[5] = -55\nN[6] = -100\nN[7] = -100\nN[8] = -92\nN[9] = -95\nN[10] = 98\nN[11] = 70\nN[12] = -76\nN[13] = -67\nN[14] = 25\nN[15] = -20\nN[16] = 2\nN[17] = 99\nN[18] = 57\nN[19] = -40"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历时记录当前最小值和位置。注意位置从0开始计数。</p>",
          "source": "JD | JD047 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "10\n1 2 3 4 -5 6 7 8 9 10",
              "output": "Menor valor: -5\nPosicao: 4"
            }
          ],
          "solution": null
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
          "hint": "<p>两个变量滚动：a,b = b,a+b。</p>",
          "source": "JD | JD048 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "4",
              "output": "3"
            }
          ],
          "solution": null
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
          "hint": "<p>预处理斐波那契数组到60，查询时直接取值。</p>",
          "source": "JD | JD049 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "5",
              "output": "0 1 1 2 3"
            }
          ],
          "solution": null
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
          "hint": "<p>若M&gt;N则先交换。注意：结束条件为两个数均≤0（测试用例可能用0 0或-1 -1）。</p>",
          "source": "JD | JD050 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "5 10\n2 3\n-1 -1",
              "output": "5 6 7 8 9 10 Sum=45\n2 3 Sum=5"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历指定行，根据操作类型求和或求平均。</p>",
          "source": "JD | JD051 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "1\nM\n94.2 65.35 7.41 -67.85 18.62 -72.49 -5.91 66.06 -20.35 -17.4 12.62 -63.04\n...",
              "output": "17.3"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历所有行取指定列元素。</p>",
          "source": "JD | JD052 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "1\nS\n-29.7 94.5 43.8 3.7 68.1 19.9 23.4 -0.3 -85.3 57.3 89.7 36.0\n...",
              "output": "199.5"
            }
          ],
          "solution": null
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
          "hint": "<p>对每个数找所有真因子求和，等于自身则是完全数。注意优化：枚举因子只需到 sqrt(X)，利用约数成对出现的性质。1 不是完全数。</p>",
          "source": "JD | JD053 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "30",
              "output": "6\n28"
            }
          ],
          "solution": null
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
          "hint": "<p>对每个数从2到√n试除。</p>",
          "source": "JD | JD054 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "10",
              "output": "2\n3\n5\n7"
            }
          ],
          "solution": null
        },
        {
          "id": "JD055",
          "title": "上方剑域",
          "url": "http://www.xmuoj.com/contest/359/problem/JD055/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>演武场上空，赵晴儿凌空画出一道12×12的剑气光幕。剑阵分九宫方位，她指向光幕上方：「上域之剑，取天位之力。首行的剑主攻正面，越往下剑气越弱。算算上域之力和。」</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p>先读操作类型（S求和/M求平均），再判断行号。上方区域即i",
          "source": "JD | JD055 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "S\n5.0 65.0 82.0 54.0 60.0 96.0 64.0 88.0 81.0 2.0 86.0 29.0\n66.0 16.0 27.0 63.0 1.0 52.0 67.0 76.0 94.0 88.0 65.0 39.0\n48.0 61.0 15.0 22.0 48.0 30.0 57.0 15.0 97.0 18.0 19.0 49.0\n...",
              "output": "1594.0"
            }
          ],
          "solution": null
        },
        {
          "id": "JD056",
          "title": "下方剑域",
          "url": "http://www.xmuoj.com/contest/359/problem/JD056/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>「下域之剑，承地脉之气。」赵晴儿的手指向光幕下方划去，「靠近大地的剑势更沉。算算下域之力和。」</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p>下方区域即i&gt;j的元素。</p>",
          "source": "JD | JD056 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "S\n6.0 90.0 70.0 55.0 69.0 69.0 62.0 79.0 7.0 9.0 54.0 43.0\n30.0 75.0 74.0 58.0 99.0 52.0 88.0 51.0 77.0 92.0 77.0 10.0\n89.0 99.0 84.0 60.0 90.0 25.0 95.0 82.0 96.0 5.0 92.0 10.0\n...",
              "output": "1694.0"
            }
          ],
          "solution": null
        },
        {
          "id": "JD057",
          "title": "左方剑域",
          "url": "http://www.xmuoj.com/contest/359/problem/JD057/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>「左域之剑，守青龙之位。」赵晴儿指向光幕左侧，「左方剑阵主守，去势较短。算算左域之力和。」</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p>左方区域即满足j &lt; i && i + j &lt; 11的元素（主对角线下且反对角线上）。</p>",
          "source": "JD | JD057 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "S\n68.0 59.0 10.0 88.0 95.0 50.0 60.0 8.0 6.0 7.0 5.0 79.0\n18.0 94.0 63.0 2.0 15.0 13.0 39.0 37.0 33.0 27.0 11.0 29.0\n12.0 23.0 6.0 42.0 4.0 63.0 7.0 20.0 11.0 74.0 27.0 5.0\n...",
              "output": "1410.0"
            }
          ],
          "solution": null
        },
        {
          "id": "JD058",
          "title": "右方剑域",
          "url": "http://www.xmuoj.com/contest/359/problem/JD058/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>「右域之剑，据白虎之位。」赵晴儿指向光幕右侧，「右方剑阵主攻，去势较长。算算右域之力和。」</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p>右方区域即满足j &gt; i && i + j &gt; 11的元素（主对角线上且反对角线下）。</p>",
          "source": "JD | JD058 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "S\n69.0 84.0 98.0 42.0 4.0 23.0 58.0 99.0 32.0 14.0 26.0 40.0\n29.0 6.0 10.0 50.0 60.0 13.0 7.0 59.0 16.0 31.0 23.0 0.0\n0.0 61.0 75.0 80.0 46.0 58.0 45.0 34.0 10.0 61.0 53.0 66.0\n...",
              "output": "1203.0"
            }
          ],
          "solution": null
        },
        {
          "id": "JD059",
          "title": "右上剑角",
          "url": "http://www.xmuoj.com/contest/359/problem/JD059/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>「右上剑角——天乾之位，日升之处。」赵晴儿在沙盘上比划，「从主对角线往上，剑势腾空而起，覆盖右上半壁。算算这角的剑气总和。」</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出右上半部分的和或平均值，保留一位小数。</p>",
          "hint": "<p>右上部分即j&gt;i的元素。S求和，M求平均。</p>",
          "source": "JD | JD059 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "S\n86.0 26.0 52.0 44.0 73.0 60.0 63.0 26.0 54.0 1.0 35.0 0.0\n60.0 49.0 95.0 82.0 59.0 59.0 69.0 19.0 72.0 79.0 82.0 75.0\n86.0 23.0 26.0 13.0 5.0 99.0 13.0 84.0 28.0 26.0 60.0 23.0\n...",
              "output": "3319.0"
            }
          ],
          "solution": null
        },
        {
          "id": "JD060",
          "title": "左上剑角",
          "url": "http://www.xmuoj.com/contest/359/problem/JD060/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>「左上剑角——天坤之位，月落之处。从主对角线往上左方，剑气如新月之弧，划出一角天地。」</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p>左上部分即i+j&lt;11的元素。</p>",
          "source": "JD | JD060 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "S\n49.0 20.0 80.0 78.0 8.0 14.0 59.0 46.0 32.0 6.0 7.0 97.0\n59.0 80.0 31.0 74.0 20.0 20.0 88.0 27.0 11.0 18.0 28.0 12.0\n97.0 85.0 70.0 33.0 61.0 32.0 10.0 89.0 42.0 82.0 21.0 79.0\n...",
              "output": "2981.0"
            }
          ],
          "solution": null
        },
        {
          "id": "JD061",
          "title": "右下剑角",
          "url": "http://www.xmuoj.com/contest/359/problem/JD061/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>「右下剑角——地乾之位，日落之处。从主对角线往下右方，剑势如残阳下沉，渐行渐远。」</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p>右下部分即满足i + j &gt; 11的元素（反对角线以下）。</p>",
          "source": "JD | JD061 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "S\n80.0 49.0 14.0 87.0 99.0 61.0 17.0 39.0 57.0 46.0 63.0 43.0\n79.0 19.0 8.0 27.0 77.0 77.0 97.0 82.0 52.0 14.0 85.0 36.0\n61.0 75.0 96.0 20.0 78.0 6.0 1.0 72.0 15.0 46.0 23.0 98.0\n...",
              "output": "2790.0"
            }
          ],
          "solution": null
        },
        {
          "id": "JD062",
          "title": "左下剑角",
          "url": "http://www.xmuoj.com/contest/359/problem/JD062/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>「左下剑角——地坤之位，月升之处。从主对角线往下左方，剑气似初月升空，一弧清辉。」</p>",
          "inputDescription": "<p>第一行一个大写字母S或M。接下来12行，每行12个浮点数。</p>",
          "outputDescription": "<p>输出对应区域的和或平均值，保留一位小数。</p>",
          "hint": "<p>左下部分即满足j &lt; i的元素（主对角线以下）。</p>",
          "source": "JD | JD062 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "S\n43.0 96.0 42.0 21.0 34.0 15.0 13.0 59.0 82.0 4.0 35.0 93.0\n78.0 97.0 91.0 19.0 38.0 91.0 16.0 90.0 38.0 53.0 31.0 73.0\n25.0 37.0 40.0 40.0 34.0 39.0 98.0 77.0 29.0 2.0 84.0 54.0\n...",
              "output": "3154.0"
            }
          ],
          "solution": null
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
          "hint": "<p>每个位置的值 = min(i+1, j+1, N-i, N-j)，即到四条边的最小距离。</p>",
          "source": "JD | JD063 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "1\n0",
              "output": "1"
            }
          ],
          "solution": null
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
          "hint": "<p>M[i][j] = |i-j|+1。对角线为1，离对角线越远数越大。</p>",
          "source": "JD | JD064 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "1\n0",
              "output": "1"
            }
          ],
          "solution": null
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
          "hint": "<p>M[i][j] = 2^(i+j)。用位运算 1&lt;&lt;(i+j) 或 pow函数。</p>",
          "source": "JD | JD065 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "3 0",
              "output": "1 2 4 \n2 4 8 \n4 8 16"
            }
          ],
          "solution": null
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
          "hint": "<p>模拟蛇形遍历：右→下→左→上循环。维护四个边界。</p>",
          "source": "JD | JD066 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "3 3",
              "output": "1 2 3 \n8 9 4 \n7 6 5"
            }
          ],
          "solution": null
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
          "hint": "<p>读入一行字符串（含空格），输出其长度。</p>",
          "source": "JD | JD067 | 第6章 古卷密文",
          "samples": [
            {
              "input": "Hello World",
              "output": "11"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历字符串，每个字符后输出一个空格。</p>",
          "source": "JD | JD068 | 第6章 古卷密文",
          "samples": [
            {
              "input": "abc",
              "output": "a b c"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历字符串，遇到目标字符输出&#039;#&#039;，否则输出原字符。</p>",
          "source": "JD | JD069 | 第6章 古卷密文",
          "samples": [
            {
              "input": "hello\no\nworld\nl\nabc\nx\ntest\ne\nhello\na\nh\ne",
              "output": "hell#"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历a，b[i] = chr(ord(a[i]) + ord(a[i+1]))。最后一个用a[-1]和a[0]。</p>",
          "source": "JD | JD070 | 第6章 古卷密文",
          "samples": [
            {
              "input": "=-9+=.3'<<-!!'+5.</=+/3672?96,7'<%5 //>$#:)6*(6.(;7>*)>35#5.72#/44;/)0#864\"!51$1=00*:$&'",
              "output": "jfdhkaZcxiNBHR`cjklhZbimiqxobc^caZUO^mbG]c_`R^dVcruhSgqhXXceiURchojXYS[njVCVfUUnm`Zd^JMd"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历字符串，判断每个字符是否在&#039;0&#039;到&#039;9&#039;之间。</p>",
          "source": "JD | JD071 | 第6章 古卷密文",
          "samples": [
            {
              "input": "hello2024world",
              "output": "4"
            }
          ],
          "solution": null
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
          "hint": "<p>先判断双方是否相等（平局）。否则按相克规则判断：Rock 胜 Scissors，Scissors 胜 Paper，Paper 胜 Rock，构成一个循环克制链。</p><p><a href=\"https://www.acwing.com/problem/content/763/\" target=\"_blank\">原题链接</a></p>",
          "source": "JD | JD072 | 第6章 古卷密文",
          "samples": [
            {
              "input": "Scissors Rock",
              "output": "Player2"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历字符串，对字母、数字分别做+1循环偏移，其他字符原样输出。</p>",
          "source": "JD | JD073 | 第6章 古卷密文",
          "samples": [
            {
              "input": "Hello, World!",
              "output": "Ifmmp, Xpsme!"
            }
          ],
          "solution": null
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
          "hint": "<p>字符串替换函数，或按空格分割单词逐个比较替换。</p>",
          "source": "JD | JD074 | 第6章 古卷密文",
          "samples": [
            {
              "input": "first late system see school still great different year Place far take same\nlife\ngroup",
              "output": "first late system see school still great different year Place far take same"
            }
          ],
          "solution": null
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
          "hint": "<p>按空格分割单词（去掉末尾的&#039;.&#039;），遍历比较长度。</p>",
          "source": "JD | JD075 | 第6章 古卷密文",
          "samples": [
            {
              "input": "I am a student of Peking University.",
              "output": "University"
            }
          ],
          "solution": null
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
          "hint": "<p>找到str中ASCII码最大的字符（若有多个取最后一个），在其后面插入substr。</p>",
          "source": "JD | JD076 | 第6章 古卷密文",
          "samples": [
            {
              "input": "hello\nX",
              "output": "helloX"
            }
          ],
          "solution": null
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
          "hint": "<p>先统计每个字符出现次数，再从头遍历找第一个次数为1的。</p>",
          "source": "JD | JD077 | 第6章 古卷密文",
          "samples": [
            {
              "input": "abaccdeff",
              "output": "b"
            }
          ],
          "solution": null
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
          "hint": "<p>遍历a的每个位置，用strncmp比较是否与b匹配。</p>",
          "source": "JD | JD078 | 第6章 古卷密文",
          "samples": [
            {
              "input": "abc\nd",
              "output": "no"
            }
          ],
          "solution": null
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
          "hint": "<p>枚举周期p（p是len的因子），检查s[0:p]重复len/p次是否等于原串。</p>",
          "source": "JD | JD079 | 第6章 古卷密文",
          "samples": [
            {
              "input": "abcd\naaaa\nababab\n.",
              "output": "1\n4\n3"
            }
          ],
          "solution": null
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
          "hint": "<p>从左往右找S1最后出现的位置end1，从右往左找S2最后出现的位置start2。如果end1",
          "source": "JD | JD080 | 第6章 古卷密文",
          "samples": [
            {
              "input": "abcd123dABdefghjsdef76ki,ab,ef",
              "output": "16"
            }
          ],
          "solution": null
        },
        {
          "id": "JD081",
          "title": "初窥阶乘",
          "url": "http://www.xmuoj.com/contest/359/problem/JD081/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白在丹房帮赵晴儿炼丹。丹方上写着：&quot;取n味药材，第一味放1份，第二味放2份，第三味放3份……第n味放n份。&quot;</p><p>赵晴儿问：&quot;n味药材总共需要多少份？&quot;</p><p>李少白拿出笔从头算：1×2×3×……×n。赵晴儿摇头：&quot;每次都要从头算，太慢了。把它封装成一个函数，以后直接调用。&quot;</p><p>请帮李少白编写一个函数，计算n的阶乘（n!）。</p>",
          "inputDescription": "<p>一个整数n（0 ≤ n ≤ 10）。</p>",
          "outputDescription": "<p>输出n的阶乘。</p>",
          "hint": "<p>函数内用循环累乘，或递归实现。</p>",
          "source": "JD | JD081 | 第7章 以招创招",
          "samples": [
            {
              "input": "3",
              "output": "6"
            }
          ],
          "solution": null
        },
        {
          "id": "JD082",
          "title": "比剑取大",
          "url": "http://www.xmuoj.com/contest/359/problem/JD082/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>兵器库里，赵晴儿和李少白各自挑了一柄剑。赵晴儿的剑重x斤，李少白的剑重y斤。</p><p>赵晴儿说：&quot;我们总要比谁的剑更重，每次都手算太麻烦。写一个函数，传入两个数，返回较大的那个。以后比试直接调用就行。&quot;</p><p>请帮他们实现这个函数。</p>",
          "inputDescription": "<p>一行，两个整数x和y。</p>",
          "outputDescription": "<p>输出最大值。</p>",
          "hint": "<p>函数内用 if 比较或三元表达式。</p>",
          "source": "JD | JD082 | 第7章 以招创招",
          "samples": [
            {
              "input": "3 5",
              "output": "5"
            }
          ],
          "solution": null
        },
        {
          "id": "JD083",
          "title": "剑气归正",
          "url": "http://www.xmuoj.com/contest/359/problem/JD083/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白在练剑气外放时，需要计算剑气落点与自己的距离。距离本该是正数，但有时算出的结果是负数——因为方向搞反了。</p><p>赵晴儿说：&quot;别每次遇到负数就手动取反，写一个函数，不管传入正数还是负数，都返回它的绝对值。&quot;</p>",
          "inputDescription": "<p>一个整数x。</p>",
          "outputDescription": "<p>输出x的绝对值。</p>",
          "hint": "<p>if x &lt; 0: return -x, else: return x。</p>",
          "source": "JD | JD083 | 第7章 以招创招",
          "samples": [
            {
              "input": "-5",
              "output": "5"
            }
          ],
          "solution": null
        },
        {
          "id": "JD084",
          "title": "双剑互易",
          "url": "http://www.xmuoj.com/contest/359/problem/JD084/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在教李少白一套双剑术。左右手各持一剑，攻守之间需要不断交换位置。</p><p>&quot;实战中你不能把剑放到地上再捡起来，&quot;梁嘉峰说，&quot;直接交换。写一个函数，传入两个变量的引用，在函数内部交换它们的值。&quot;</p><p>李少白提笔写下函数签名，却犯了难——C++里普通参数只传值，改不了外面的变量。</p>",
          "inputDescription": "<p>一行，两个整数x和y。</p>",
          "outputDescription": "<p>交换后的x和y。</p>",
          "hint": "<p>C++用引用参数 `void swap(int &x, int &y)`。Python中 a, b = b, a。</p>",
          "source": "JD | JD084 | 第7章 以招创招",
          "samples": [
            {
              "input": "6 26",
              "output": "26 6"
            }
          ],
          "solution": null
        },
        {
          "id": "JD085",
          "title": "辗转相除",
          "url": "http://www.xmuoj.com/contest/359/problem/JD085/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在药圃里采了a株紫芝和b株青蒿，要把它们扎成相同大小的药束，每束株数相同且不能有剩余。</p><p>&quot;这其实就是求a和b的最大公约数，&quot;赵晴儿说，&quot;古人有个妙法叫辗转相除——用大数除以小数取余，再用小数除以余数，反复如此，直到余数为零。最后一个非零余数就是答案。&quot;</p><p>请帮赵晴儿写一个函数，用辗转相除法求两个正整数的最大公约数。</p>",
          "inputDescription": "<p>一行，两个正整数a和b。</p>",
          "outputDescription": "<p>输出a和b的最大公约数。</p>",
          "hint": "<p>辗转相除法：gcd(a,b) = gcd(b, a%b)，当b==0时返回a。</p>",
          "source": "JD | JD085 | 第7章 以招创招",
          "samples": [
            {
              "input": "963 787",
              "output": "1"
            }
          ],
          "solution": null
        },
        {
          "id": "JD086",
          "title": "剑阵复制",
          "url": "http://www.xmuoj.com/contest/359/problem/JD086/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上摆了一个剑阵（数组a），需要原样复制一份到另一个沙盘（数组b）上。</p><p>&quot;手抄太慢，&quot;赵晴儿说，&quot;写一个函数，把a的前size个元素复制到b对应的位置上。&quot;</p><p>李少白接过两个沙盘，发现b上原来也有数字，只需覆盖前size个位置，其余保持不变。</p>",
          "inputDescription": "<p>第一行两个整数n和size（数组长度和复制个数）。第二行n个整数。</p>",
          "outputDescription": "<p>复制后的数组，空格隔开。</p>",
          "hint": "<p>函数内循环，b[i] = a[i]，复制前size个元素。</p>",
          "source": "JD | JD086 | 第7章 以招创招",
          "samples": [
            {
              "input": "3 5 2\n1 2 3\n4 5 6 7 8",
              "output": "1 2 6 7 8"
            }
          ],
          "solution": null
        },
        {
          "id": "JD087",
          "title": "剑阵翻转",
          "url": "http://www.xmuoj.com/contest/359/problem/JD087/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰在沙盘上摆了一排石块，每块上刻着一个数字。他指着前size块说：&quot;剑阵需要反转——把第一个和最后一个交换，第二个和倒数第二个交换，依此类推。后面的石块不动。&quot;</p><p>请帮李少白写一个函数，将数组的前size个元素原地翻转。</p>",
          "inputDescription": "<p>第一行两个整数n和size。第二行n个整数。</p>",
          "outputDescription": "<p>翻转前size个元素后的数组，空格隔开。</p>",
          "hint": "<p>双指针从两端向中间交换，只交换前size个。</p>",
          "source": "JD | JD087 | 第7章 以招创招",
          "samples": [
            {
              "input": "5 3\n1 2 3 4 5",
              "output": "3 2 1 4 5"
            }
          ],
          "solution": null
        },
        {
          "id": "JD088",
          "title": "印数成招",
          "url": "http://www.xmuoj.com/contest/359/problem/JD088/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>宗门兵器库盘点时，赵晴儿需要把清单上的前几件兵器名称逐一打印出来。清单上有n件兵器，但她只需要前size件。</p><p>&quot;每次都手动抄写太蠢了，&quot;赵晴儿说，&quot;写一个函数，传入数组和size，把前size个元素打印出来。&quot;</p>",
          "inputDescription": "<p>第一行两个整数n和size（数组长度和待打印个数，size ≤ n）。第二行n个整数。</p>",
          "outputDescription": "<p>输出数组的前size个元素，空格隔开，末尾换行。</p>",
          "hint": "<p>函数内遍历数组前size个元素，空格隔开输出。</p>",
          "source": "JD | JD088 | 第7章 以招创招",
          "samples": [
            {
              "input": "5 3\n1 2 3 4 5",
              "output": "1 2 3"
            }
          ],
          "solution": null
        },
        {
          "id": "JD089",
          "title": "印阵成招",
          "url": "http://www.xmuoj.com/contest/359/problem/JD089/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上画了一个row行col列的剑阵图，每个格子标着一个数字。她需要把这个阵图工整地抄录到竹简上。</p><p>&quot;写一个函数，&quot;赵晴儿说，&quot;传入二维数组和行列数，按格式逐行打印。每行的数字用空格隔开，行末不要有多余空格。&quot;</p>",
          "inputDescription": "<p>第一行两个整数row和col。接下来row行，每行col个整数。</p>",
          "outputDescription": "<p>矩阵元素，每行末尾无多余空格。</p>",
          "hint": "<p>嵌套循环遍历行列，注意行末空格处理。</p>",
          "source": "JD | JD089 | 第7章 以招创招",
          "samples": [
            {
              "input": "3 4\n1 3 4 5\n2 6 9 4\n1 4 7 5",
              "output": "1 3 4 5\n2 6 9 4\n1 4 7 5"
            }
          ],
          "solution": null
        },
        {
          "id": "JD090",
          "title": "剑阵排序",
          "url": "http://www.xmuoj.com/contest/359/problem/JD090/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿拿着一份兵器清单来找李少白：&quot;这份清单前半段乱得很，从第l件到第r件需要按重量从小到大排好，后面的顺序不变。&quot;</p><p>李少白接过清单，发现上面有n件兵器的重量。他想写一个通用的排序函数，只排a[l]到a[r]这一段，其余位置原封不动。</p>",
          "inputDescription": "<p>第一行三个整数n、l和r（数组长度、排序区间左端点和右端点，0 ≤ l ≤ r &lt; n）。第二行n个整数。</p>",
          "outputDescription": "<p>排序后的数组，空格隔开。</p>",
          "hint": "<p>对a[l]到a[r]排序，其余元素不变。可用冒泡、选择或库函数。</p>",
          "source": "JD | JD090 | 第7章 以招创招",
          "samples": [
            {
              "input": "5 1 3\n5 3 1 4 2",
              "output": "5 1 3 4 2"
            }
          ],
          "solution": null
        },
        {
          "id": "JD091",
          "title": "递归阶乘",
          "url": "http://www.xmuoj.com/contest/359/problem/JD091/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>李少白在丹房翻到一本古籍，上面记载着一种&quot;以丹炼丹&quot;的奇术——要炼n味丹药，先炼好n-1味；要炼n-1味，先炼好n-2味……直到只剩1味，直接炼成。</p><p>赵晴儿看了笑道：&quot;这就是递归。一个函数调用自己，层层深入，直到触底再层层返回。阶乘的定义本身就是递归的——fact(n) = n × fact(n-1)，fact(1) = 1。&quot;</p><p>&quot;用递归重新实现阶乘函数。&quot;</p>",
          "inputDescription": "<p>一个整数n。</p>",
          "outputDescription": "<p>输出n的阶乘。</p>",
          "hint": "<p>递归三要素：终止条件(n==1返回1)、递推关系(n*fact(n-1))、缩小规模。</p>",
          "source": "JD | JD091 | 第7章 以招创招",
          "samples": [
            {
              "input": "5",
              "output": "120"
            }
          ],
          "solution": null
        },
        {
          "id": "JD092",
          "title": "递归斐波",
          "url": "http://www.xmuoj.com/contest/359/problem/JD092/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上画出一串数字：1, 1, 2, 3, 5, 8, 13……</p><p>&quot;看出规律了吗？&quot;她问。</p><p>李少白看了半天：&quot;每个数都是前两个数的和！&quot;</p><p>&quot;对，这就是斐波那契数列。&quot;赵晴儿说，&quot;用递归来写——f(1)=1, f(2)=1, f(n)=f(n-1)+f(n-2)。不过提醒你，朴素递归效率很低，后面会学到优化的方法。&quot;</p>",
          "inputDescription": "<p>一个整数n。</p>",
          "outputDescription": "<p>输出斐波那契数列第n项。</p>",
          "hint": "<p>递归：f(1)=1, f(2)=1, f(n)=f(n-1)+f(n-2)。注意效率问题。</p>",
          "source": "JD | JD092 | 第7章 以招创招",
          "samples": [
            {
              "input": "4",
              "output": "3"
            }
          ],
          "solution": null
        },
        {
          "id": "JD093",
          "title": "登阶问道",
          "url": "http://www.xmuoj.com/contest/359/problem/JD093/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>试炼场尽头，一座石阶直通山顶。石阶共有n级，每次只能跨1级或2级。</p><p>赵晴儿站在山脚问：&quot;从第一级走到第n级，一共有多少种不同的走法？&quot;</p><p>李少白想了想：&quot;如果我最后一步跨1级，那之前有f(n-1)种走法；如果最后一步跨2级，那之前有f(n-2)种走法……&quot;</p><p>&quot;没错，&quot;赵晴儿点头，&quot;这就是递归。&quot;</p>",
          "inputDescription": "<p>一个整数n（1 ≤ n ≤ 20）。</p>",
          "outputDescription": "<p>输出跳法总数。</p>",
          "hint": "<p>f(n) = f(n-1) + f(n-2)。最后一步跳1级或2级，两种情况之和。</p>",
          "source": "JD | JD093 | 第7章 以招创招",
          "samples": [
            {
              "input": "5",
              "output": "8"
            }
          ],
          "solution": null
        },
        {
          "id": "JD094",
          "title": "方阵寻路",
          "url": "http://www.xmuoj.com/contest/359/problem/JD094/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在沙盘上画了一个(n+1)×(m+1)的方格阵，每个格子标着坐标。</p><p>&quot;假设你站在左上角(0,0)，&quot;赵晴儿指着沙盘说，&quot;目标是走到右下角(n,m)。每次只能向右走一步，或者向下走一步。一共有多少种不同的路径？&quot;</p><p>李少白盯着沙盘看了一会儿：&quot;走到(n,m)之前，一定是从(n-1,m)或(n,m-1)过来的……&quot;</p><p>&quot;很好，又是一个递归。&quot;</p>",
          "inputDescription": "<p>一行，两个整数n和m（目标坐标，0 ≤ n,m ≤ 20）。</p>",
          "outputDescription": "<p>输出走法总数。</p>",
          "hint": "<p>从(0,0)到(n,m)的网格路径数。f(n,m) = f(n-1,m) + f(n,m-1)。边界：f(0,m)=1, f(n,0)=1。等价于组合数C(n+m, n)。</p>",
          "source": "JD | JD094 | 第7章 以招创招",
          "samples": [
            {
              "input": "2 3",
              "output": "10"
            }
          ],
          "solution": null
        },
        {
          "id": "JD095",
          "title": "全排列阵",
          "url": "http://www.xmuoj.com/contest/359/problem/JD095/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰递给李少白n枚令牌，上面分别刻着1到n。</p><p>&quot;把它们排成一列，列出所有可能的排列顺序。&quot;梁嘉峰说，&quot;按字典序从小到大输出。&quot;</p><p>李少白开始手动枚举，很快就乱了套。赵晴儿在旁边提醒：&quot;用递归的思路——每次选一个没用过的令牌放到当前位置，然后递归处理剩下的位置。选完之后要&#039;回退&#039;，把令牌放回去，才能尝试下一个选择。这就是回溯。&quot;</p>",
          "inputDescription": "<p>一个整数n（1 ≤ n ≤ 9）。</p>",
          "outputDescription": "<p>每行一个排列，数字之间用空格隔开。</p>",
          "hint": "<p>DFS+回溯：用used[]标记已用数字，path[]记录当前排列。</p>",
          "source": "JD | JD095 | 第7章 以招创招",
          "samples": [
            {
              "input": "3",
              "output": "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1"
            }
          ],
          "solution": null
        },
        {
          "id": "JD096",
          "title": "空格替换",
          "url": "http://www.xmuoj.com/contest/359/problem/JD096/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>兵器阁的大门上刻着一行古文，但年代久远，字迹模糊，空格处尤其难以辨认。赵晴儿凑近看了看：&quot;这行字里夹了太多空格，密密麻麻的，根本看不清。&quot;</p><p>梁嘉峰说：&quot;古卷传输时，空格容易丢失。古人想了个办法——把每个空格替换成%20，这样既保留了间隔，又不会和真正的空白混淆。&quot;</p><p>&quot;你写一段程序，把这行古文里的所有空格替换成%20。&quot;</p>",
          "inputDescription": "<p>一行字符串（长度不超过100）。</p>",
          "outputDescription": "<p>替换空格为%20后的字符串。</p>",
          "hint": "<p>遍历字符串，遇到空格输出%20，否则输出原字符。</p>",
          "source": "JD | JD096 | 第8章 百器图谱",
          "samples": [
            {
              "input": "Hello World",
              "output": "Hello%20World"
            }
          ],
          "solution": null
        },
        {
          "id": "JD097",
          "title": "再算斐波",
          "url": "http://www.xmuoj.com/contest/359/problem/JD097/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在兵器阁的账本上翻到一串奇怪的数字：1, 1, 2, 3, 5, 8, 13, 21……</p><p>&quot;这是前辈铸剑师留下的排列规律，&quot;梁嘉峰说，&quot;每一柄新剑的重量都是前两柄之和。第1柄和第2柄都是1斤，第3柄就是1+1=2斤，第4柄是1+2=3斤……&quot;</p><p>&quot;上一章你用递归算过这个数列，但递归太慢了。这次用容器来存——把每一项都推进一个序列里，只保留最近两项，循环推进。&quot;</p><p>请帮赵晴儿算出第n柄剑的重量。</p>",
          "inputDescription": "<p>一个整数n（0 ≤ n ≤ 90）。</p>",
          "outputDescription": "<p>输出斐波那契数列第n项。</p>",
          "hint": "<p>两个变量a,b滚动：a,b = b,a+b。循环n次。</p>",
          "source": "JD | JD097 | 第8章 百器图谱",
          "samples": [
            {
              "input": "10",
              "output": "55"
            }
          ],
          "solution": null
        },
        {
          "id": "JD098",
          "title": "倒转铁链",
          "url": "http://www.xmuoj.com/contest/359/problem/JD098/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>兵器阁的架子上挂着一串铁环，每个环上刻着一个数字，从头到尾依次是1、2、3……最后一个环上刻着-1，表示链条结束。</p><p>梁嘉峰指着铁链说：&quot;我要从最后一个环开始，把数字一个个报出来。但这串铁环只能从前往后读，不能直接跳到末尾。&quot;</p><p>赵晴儿想了想：&quot;用一个容器——先把所有数字存进去，再从后往前取出来。这就像把铁环一个个摘下来放到盒子里，最后从盒子里倒着取。&quot;</p>",
          "inputDescription": "<p>一行整数，以-1结尾，表示链表的节点值（-1不算节点）。</p>",
          "outputDescription": "<p>从尾到头输出每个节点的值，每行一个。</p>",
          "hint": "<p>用栈存储所有节点值，然后依次弹出。或者用递归。</p>",
          "source": "JD | JD098 | 第8章 百器图谱",
          "samples": [
            {
              "input": "1 2 3 -1",
              "output": "3\n2\n1"
            }
          ],
          "solution": null
        },
        {
          "id": "JD099",
          "title": "双栈为队",
          "url": "http://www.xmuoj.com/contest/359/problem/JD099/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿在兵器阁里找到两个铁盒，每个盒子只能从顶部放入和取出——这就是&quot;栈&quot;，后进先出。</p><p>梁嘉峰说：&quot;现在我需要一个&#039;队列&#039;——先进先出。但手边只有这两个栈，没有队列。你能用这两个栈模拟一个队列吗？&quot;</p><p>赵晴儿思索片刻：&quot;入队的时候都放进盒子1。出队的时候，如果盒子2是空的，就把盒子1的东西全部倒进盒子2——这样顺序就反过来了，最先进来的变成了盒子2的顶部，直接取就行。&quot;</p><p>请帮赵晴儿实现这个&quot;双栈模拟队列&quot;的操作。</p>",
          "inputDescription": "<p>若干操作命令：`push x`（入队）、`pop`（出队并输出）、`empty`（判空）。</p>",
          "outputDescription": "<p>对pop操作输出队首值，empty操作输出`yes`或`no`。</p>",
          "hint": "<p>栈1入队，栈2出队。出队时栈2空就把栈1全部倒入栈2。</p>",
          "source": "JD | JD099 | 第8章 百器图谱",
          "samples": [
            {
              "input": "push 1\npush 2\npop\npush 3\npop\npop\nempty",
              "output": "1\n2\n3\nyes"
            }
          ],
          "solution": null
        },
        {
          "id": "JD100",
          "title": "铁链翻转",
          "url": "http://www.xmuoj.com/contest/359/problem/JD100/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>梁嘉峰从架子上取下一条铁链，每个环上刻着一个数字。他把铁链平铺在桌上，从头到尾是1、2、3、4、5……最后一个环上刻着-1，表示结束。</p><p>&quot;我要把这条铁链反过来，&quot;梁嘉峰说，&quot;第一个变最后一个，最后一个变第一个。但不能断开重接，只能用容器来辅助。&quot;</p><p>赵晴儿拿起一个铁盒：&quot;把铁环一个个摘下来放进盒子里——先进去的沉到底部。等全部摘完，再从盒子里取出来，顺序就反了。&quot;</p>",
          "inputDescription": "<p>一行整数，以-1结尾，表示链表节点值。</p>",
          "outputDescription": "<p>反转后的链表，空格隔开。</p>",
          "hint": "<p>三指针法：prev=None, curr=head。循环：next=curr.next, curr.next=prev, prev=curr, curr=next。</p>",
          "source": "JD | JD100 | 第8章 百器图谱",
          "samples": [
            {
              "input": "1 2 3 4 5 -1",
              "output": "5 4 3 2 1"
            }
          ],
          "solution": null
        },
        {
          "id": "JD101",
          "title": "双链归并",
          "url": "http://www.xmuoj.com/contest/359/problem/JD101/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>赵晴儿从兵器阁的两个抽屉里各取出一条铁链，每条链上的数字都从小到大排好了。她需要把两条链合并成一条，仍然保持从小到大的顺序。</p><p>&quot;不能拆开重排，&quot;梁嘉峰说，&quot;两条链都是有序的，你要利用这个特点——从两条链的头部同时开始比较，每次取较小的那个接到结果链的末尾。&quot;</p><p>赵晴儿拿起两个容器：&quot;用一个容器存结果。两个指针分别指向两条链的头部，谁小就取谁，直到一条链取完，再把另一条的剩余全部接上。&quot;</p>",
          "inputDescription": "<p>两行，每行若干整数（以-1结尾），分别表示两个有序链表。</p>",
          "outputDescription": "<p>合并后的有序链表，空格隔开。</p>",
          "hint": "<p>双指针比较合并。一个链表遍历完后，直接接上另一个的剩余部分。</p>",
          "source": "JD | JD101 | 第8章 百器图谱",
          "samples": [
            {
              "input": "1 3 5 -1\n2 4 6 -1",
              "output": "1 2 3 4 5 6"
            }
          ],
          "solution": null
        },
        {
          "id": "JD102",
          "title": "三元归序",
          "url": "http://www.xmuoj.com/contest/359/problem/JD102/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>兵器阁的账房先生有一本厚厚的兵器账本，每条记录记着三样东西：兵器编号x、重量y（带两位小数）、兵器名称z。</p><p>&quot;这本账太乱了，&quot;赵晴儿翻了几页就头疼，&quot;编号不按顺序，同编号的重量也乱排。&quot;</p><p>梁嘉峰说：&quot;先按编号从小到大排，编号相同的再按重量从小到大排。你可以用结构体存每条记录，放进容器里，再自定义排序规则。&quot;</p>",
          "inputDescription": "<p>第一行一个整数N。接下来N行，每行两个整数和一个字符串。</p>",
          "outputDescription": "<p>排序后的N条记录，每行一条。x输出整数，y输出保留两位小数的浮点数，字符串原样输出，空格隔开。</p>",
          "hint": "<p>定义结构体存储三元组，自定义比较函数：先比x，再比y。</p>",
          "source": "JD | JD102 | 第8章 百器图谱",
          "samples": [
            {
              "input": "3\n1 2 abc\n3 4 def\n2 1 ghi",
              "output": "1 2.00 abc\n2 1.00 ghi\n3 4.00 def"
            }
          ],
          "solution": null
        }
      ]
    }
  ]
};
