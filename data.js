window.XMUOJ_SOLUTIONS_DATA = {
  "generatedAt": "2026-7-5 10:58:25",
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
          "solution": {
            "path": "solutions/359/010.c",
            "language": "c",
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int a,b,c,d;\r\n    scanf(\"%d%d%d\",&a,&b,&c);\r\n    d = (a > b ? a : b) > c ? (a > b ? a : b) : c;\r\n    printf(\"Max = %d\", d);\r\n    return 0;\r\n}"
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
          "hint": "<p>使用距离公式，需要引入数学库以使用sqrt函数。</p><p><a href=\"https://www.acwing.com/problem/content/616/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 616 | JD011 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "1.0 7.0 5.0 9.0",
              "output": "4.4721"
            }
          ],
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
          "hint": "<p>注意输出格式：名称与面积之间有一个空格。π取3.14159。使用 printf(&quot;%.3f&quot;) 或 cout &lt;&lt; fixed &lt;&lt; setprecision(3) 保留3位小数。</p><p><a href=\"https://www.acwing.com/problem/content/615/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 613 | JD012 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "3.0 4.0 5.2",
              "output": "TRIANGULO: 7.800\nCIRCULO: 84.949\nTRAPEZIO: 18.200\nQUADRADO: 16.000\nRETANGULO: 12.000"
            }
          ],
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
          "hint": "<p>时 = 秒 ÷ 3600，分 = 余数 ÷ 60，秒 = 最终余数。</p><p><a href=\"https://www.acwing.com/problem/content/654/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 654 | JD013 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "556",
              "output": "0:9:16"
            }
          ],
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
          "hint": "<p>贪心策略：从大到小依次整除，记录每种面额的枚数。</p><p><a href=\"https://www.acwing.com/problem/content/653/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 653 | JD014 | 第1章 持剑叩门",
          "samples": [
            {
              "input": "576",
              "output": "576\n5 nota(s) de R$ 100,00\n1 nota(s) de R$ 50,00\n1 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n1 nota(s) de R$ 5,00\n0 nota(s) de R$ 2,00\n1 nota(s) de R$ 1,00"
            }
          ],
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
          "hint": "<p>三角形成立条件：任意两边之和大于第三边。如果成立，周长=A+B+C；如果不成立，梯形面积=(A+B)*C/2。注意保留1位小数。</p>",
          "source": "AcWing 664 | JD016 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "6.0 4.0 2.0",
              "output": "Area = 10.0"
            }
          ],
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
          "hint": "<p>用条件判断：如果B&gt;A，输出B-A；如果B==A，输出24；否则输出24-A+B。</p>",
          "source": "AcWing 667 | JD017 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "0 15",
              "output": "15"
            }
          ],
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
          "hint": "<p>用条件判断两两比较确定顺序，或存入数组排序。</p><p><a href=\"https://www.acwing.com/problem/content/663/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 663 | JD018 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "7 21 -14",
              "output": "-14 7 21"
            }
          ],
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
          "hint": "<p>用数组或条件判断存储5种单价，查表后乘以数量。</p><p><a href=\"https://www.acwing.com/problem/content/660/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 660 | JD019 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "3 2",
              "output": "Total: R$ 10.00"
            }
          ],
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
          "hint": "<p>用 if-elif-else 逐一判断落在哪个区间。</p><p><a href=\"https://www.acwing.com/problem/content/659/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 659 | JD020 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "95.29",
              "output": "Interval (75,100]"
            }
          ],
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
          "hint": "<p>先判断是否在原点或坐标轴上（x==0 或 y==0），再判断象限。</p><p><a href=\"https://www.acwing.com/problem/content/662/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 662 | JD021 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "4.5 -2.2",
              "output": "Q4"
            }
          ],
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
          "hint": "<p>分段计算：1000×8% + 2×18% = 80.36。每段只对超出部分征税。</p><p><a href=\"https://www.acwing.com/problem/content/672/\" target=\"_blank\">原题链接</a></p>",
          "source": "AcWing 672 | JD028 | 第2章 歧路逢生",
          "samples": [
            {
              "input": "3002.00",
              "output": "R$ 80.36"
            }
          ],
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
          "hint": "<p>for循环从2开始，步长为2，到100结束。</p>",
          "source": "AcWing ??? | JD029 | 第3章 千回百转",
          "samples": [
            {
              "input": "No input",
              "output": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n22\n24\n26\n28\n30\n32\n34\n36\n38\n40\n42\n44\n46\n48\n50\n52\n54\n56\n58\n60\n62\n64\n66\n68\n70\n72\n74\n76\n78\n80\n82\n84\n86\n88\n90\n92\n94\n96\n98\n100"
            }
          ],
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
          "hint": "<p>for循环从1开始，步长为2，到X结束。如果X是偶数，最后一个奇数是X-1。</p>",
          "source": "AcWing ??? | JD030 | 第3章 千回百转",
          "samples": [
            {
              "input": "8",
              "output": "1\n3\n5\n7"
            }
          ],
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
          "hint": "<p>外层while循环读入X，遇到0停止。内层for循环从1到X输出。</p>",
          "source": "AcWing ??? | JD031 | 第3章 千回百转",
          "samples": [
            {
              "input": "5\n10\n3\n0",
              "output": "1 2 3 4 5\n1 2 3 4 5 6 7 8 9 10\n1 2 3"
            }
          ],
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
          "hint": "<p>如果X是奇数，从X+2开始；如果X是偶数，从X+1开始。循环6次，每次加2。</p>",
          "source": "AcWing ??? | JD032 | 第3章 千回百转",
          "samples": [
            {
              "input": "8",
              "output": "9\n11\n13\n15\n17\n19"
            }
          ],
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
          "hint": "<p>循环读入6个数，用if判断是否&gt;0，计数器累加。</p>",
          "source": "AcWing ??? | JD033 | 第3章 千回百转",
          "samples": [
            {
              "input": "7\n-5\n6\n-3.4\n4.6\n12",
              "output": "4 positive numbers"
            }
          ],
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
          "hint": "<p>for循环从1到10000，if i%N==2则输出。</p>",
          "source": "AcWing ??? | JD034 | 第3章 千回百转",
          "samples": [
            {
              "input": "13",
              "output": "2\n15\n28\n41\n54\n..."
            }
          ],
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
          "hint": "<p>循环读入，判断是否 10≤X≤20，计数器累加。</p>",
          "source": "AcWing ??? | JD035 | 第3章 千回百转",
          "samples": [
            {
              "input": "5\n5 12 18 25 10",
              "output": "3 in\n2 out"
            }
          ],
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
          "hint": "<p>A固定，第二行跳过负数和零找N。从A开始循环N次累加。</p>",
          "source": "AcWing ??? | JD037 | 第3章 千回百转",
          "samples": [
            {
              "input": "3\n-5 0 -3 4 -1",
              "output": "18"
            }
          ],
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
          "hint": "<p>遍历时同时记录最大值和位置。</p>",
          "source": "AcWing ??? | JD038 | 第3章 千回百转",
          "samples": [
            {
              "input": "5\n3 2 5 1 4",
              "output": "5\n3"
            }
          ],
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
          "hint": "<p>从1到N循环，如果N%i==0则i是约数。</p>",
          "source": "AcWing ??? | JD039 | 第3章 千回百转",
          "samples": [
            {
              "input": "6",
              "output": "1\n2\n3\n6"
            }
          ],
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
          "hint": "<p>for循环从1到10，每次输出i x N = i*N。</p>",
          "source": "AcWing ??? | JD040 | 第3章 千回百转",
          "samples": [
            {
              "input": "140",
              "output": "1 x 140 = 140\n2 x 140 = 280\n3 x 140 = 420\n4 x 140 = 560\n5 x 140 = 700\n6 x 140 = 840\n7 x 140 = 980\n8 x 140 = 1120\n9 x 140 = 1260\n10 x 140 = 1400"
            }
          ],
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
          "hint": "<p>嵌套循环，外层控制行，内层控制列。每行第M个位置输出SWORD。</p>",
          "source": "AcWing ??? | JD041 | 第3章 千回百转",
          "samples": [
            {
              "input": "7 4",
              "output": "1 2 3 SWORD\n5 6 7 SWORD\n9 10 11 SWORD\n13 14 15 SWORD\n17 18 19 SWORD\n21 22 23 SWORD\n25 26 27 SWORD"
            }
          ],
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
          "hint": "<p>三个计数器分别累加C、R、F的数量。注意每行先读数量再读类型。总数 = 所有数量之和。占比 = 各类数量 / 总数 × 100%，保留两位小数。</p>",
          "source": "AcWing ??? | JD042 | 第3章 千回百转",
          "samples": [
            {
              "input": "11\n1 F\n5 C\n4 C\n12 C\n11 F\n15 F\n2 F\n7 C\n1 C\n4 C\n9 F",
              "output": "Total: 71 weapons\nTotal swords: 33\nTotal blades: 0\nTotal spears: 38\nPercentage of swords: 46.48 %\nPercentage of blades: 0.00 %\nPercentage of spears: 53.52 %"
            }
          ],
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
          "hint": "<p>遍历数组，将≤0的元素替换为1。</p>",
          "source": "JD | JD043 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "-73\n27\n-35\n50\n-67\n86\n39\n-81\n-7\n31",
              "output": "X[0] = 1\nX[1] = 27\nX[2] = 1\nX[3] = 50\nX[4] = 1\nX[5] = 86\nX[6] = 39\nX[7] = 1\nX[8] = 1\nX[9] = 31"
            }
          ],
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
          "hint": "<p>N[0]=V，循环N[i]=N[i-1]*2。</p>",
          "source": "JD | JD044 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "6",
              "output": "N[0] = 6\nN[1] = 12\nN[2] = 24\nN[3] = 48\nN[4] = 96\nN[5] = 192\nN[6] = 384\nN[7] = 768\nN[8] = 1536\nN[9] = 3072"
            }
          ],
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
          "hint": "<p>遍历数组，if元素≤10则输出。</p>",
          "source": "JD | JD045 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "79.5\n-35.1\n65.0\n-89.9\n62.2\n-30.0\n-58.1\n-74.0\n85.7\n66.4\n-60.2\n-32.1\n11.4\n34.6\n0.2\n96.3\n-67.9\n70.1\n27.3\n53.4\n63.8\n43.2\n-68.2\n-87.9\n-13.3\n62.1\n-12.0\n66.9\n1.6\n-70.3\n-14.0\n-84.8\n19.6\n-1.9\n43.4\n36.9\n97.2\n-88.6\n52.2\n-21.0\n-54.1\n-17.3\n-11.7\n-8.5\n40.9\n-21.6\n-12.0\n87.8\n-92.9\n45.3\n-70.1\n73.7\n-23.2\n87.3\n-78.6\n38.2\n51.2\n-21.0\n3.9\n88.4\n28.3\n-67.6\n47.1\n-49.1\n73.6\n39.5\n28.0\n-80.1\n-41.4\n43.2\n-4.6\n61.1\n83.2\n65.5\n74.3\n90.1\n-80.2\n39.6\n-7.0\n-34.4\n43.1\n-62.5\n-25.3\n61.0\n68.5\n9.0\n10.3\n45.9\n-98.0\n-34.8\n88.3\n-26.6\n-48.1\n20.5\n-5.4\n-76.7\n79.7\n-90.0\n59.1\n-18.7",
              "output": "A[1] = -35.1\nA[3] = -89.9\nA[5] = -30.0\nA[6] = -58.1\nA[7] = -74.0\nA[10] = -60.2\nA[11] = -32.1\nA[14] = 0.2\nA[16] = -67.9\nA[22] = -68.2\nA[23] = -87.9\nA[24] = -13.3\nA[26] = -12.0\nA[28] = 1.6\nA[29] = -70.3\nA[30] = -14.0\nA[31] = -84.8\nA[33] = -1.9\nA[37] = -88.6\nA[39] = -21.0\nA[40] = -54.1\nA[41] = -17.3\nA[42] = -11.7\nA[43] = -8.5\nA[45] = -21.6\nA[46] = -12.0\nA[48] = -92.9\nA[50] = -70.1\nA[52] = -23.2\nA[54] = -78.6\nA[57] = -21.0\nA[58] = 3.9\nA[61] = -67.6\nA[63] = -49.1\nA[67] = -80.1\nA[68] = -41.4\nA[70] = -4.6\nA[76] = -80.2\nA[78] = -7.0\nA[79] = -34.4\nA[81] = -62.5\nA[82] = -25.3\nA[85] = 9.0\nA[88] = -98.0\nA[89] = -34.8\nA[91] = -26.6\nA[92] = -48.1\nA[94] = -5.4\nA[95] = -76.7\nA[97] = -90.0\nA[99] = -18.7"
            }
          ],
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
          "hint": "<p>双指针从两端向中间交换。</p>",
          "source": "JD | JD046 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "-40\n57\n99\n2\n-20\n25\n-67\n-76\n70\n98\n-95\n-92\n-100\n-100\n-55\n48\n-55\n54\n1\n-32",
              "output": "N[0] = -32\nN[1] = 1\nN[2] = 54\nN[3] = -55\nN[4] = 48\nN[5] = -55\nN[6] = -100\nN[7] = -100\nN[8] = -92\nN[9] = -95\nN[10] = 98\nN[11] = 70\nN[12] = -76\nN[13] = -67\nN[14] = 25\nN[15] = -20\nN[16] = 2\nN[17] = 99\nN[18] = 57\nN[19] = -40"
            }
          ],
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
          "hint": "<p>遍历时记录当前最小值和位置。注意位置从0开始计数。</p>",
          "source": "JD | JD047 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "10\n1 2 3 4 -5 6 7 8 9 10",
              "output": "Menor valor: -5\nPosicao: 4"
            }
          ],
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
          "hint": "<p>两个变量滚动：a,b = b,a+b。</p>",
          "source": "JD | JD048 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "4",
              "output": "3"
            }
          ],
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
          "hint": "<p>预处理斐波那契数组到60，查询时直接取值。</p>",
          "source": "JD | JD049 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "5",
              "output": "0 1 1 2 3"
            }
          ],
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
          "hint": "<p>若M&gt;N则先交换。注意：结束条件为两个数均≤0（测试用例可能用0 0或-1 -1）。</p>",
          "source": "JD | JD050 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "5 10\n2 3\n-1 -1",
              "output": "5 6 7 8 9 10 Sum=45\n2 3 Sum=5"
            }
          ],
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
          "hint": "<p>遍历指定行，根据操作类型求和或求平均。</p>",
          "source": "JD | JD051 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "1\nM\n94.2 65.35 7.41 -67.85 18.62 -72.49 -5.91 66.06 -20.35 -17.4 12.62 -63.04\n...",
              "output": "17.3"
            }
          ],
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
          "hint": "<p>遍历所有行取指定列元素。</p>",
          "source": "JD | JD052 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "1\nS\n-29.7 94.5 43.8 3.7 68.1 19.9 23.4 -0.3 -85.3 57.3 89.7 36.0\n...",
              "output": "199.5"
            }
          ],
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
          "hint": "<p>对每个数找所有真因子求和，等于自身则是完全数。注意优化：枚举因子只需到 sqrt(X)，利用约数成对出现的性质。1 不是完全数。</p>",
          "source": "JD | JD053 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "30",
              "output": "6\n28"
            }
          ],
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
          "hint": "<p>对每个数从2到√n试除。</p>",
          "source": "JD | JD054 | 第4章 排兵布阵",
          "samples": [
            {
              "input": "10",
              "output": "2\n3\n5\n7"
            }
          ],
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
          "hint": "<p>每个位置的值 = min(i+1, j+1, N-i, N-j)，即到四条边的最小距离。</p>",
          "source": "JD | JD063 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "1\n0",
              "output": "1"
            }
          ],
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
          "hint": "<p>M[i][j] = |i-j|+1。对角线为1，离对角线越远数越大。</p>",
          "source": "JD | JD064 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "1\n0",
              "output": "1"
            }
          ],
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
          "hint": "<p>M[i][j] = 2^(i+j)。用位运算 1&lt;&lt;(i+j) 或 pow函数。</p>",
          "source": "JD | JD065 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "3 0",
              "output": "1 2 4 \n2 4 8 \n4 8 16"
            }
          ],
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
          "hint": "<p>模拟蛇形遍历：右→下→左→上循环。维护四个边界。</p>",
          "source": "JD | JD066 | 第5章 十二宫剑阵",
          "samples": [
            {
              "input": "3 3",
              "output": "1 2 3 \n8 9 4 \n7 6 5"
            }
          ],
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
          "hint": "<p>读入一行字符串（含空格），输出其长度。</p>",
          "source": "JD | JD067 | 第6章 古卷密文",
          "samples": [
            {
              "input": "Hello World",
              "output": "11"
            }
          ],
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
          "hint": "<p>遍历字符串，每个字符后输出一个空格。</p>",
          "source": "JD | JD068 | 第6章 古卷密文",
          "samples": [
            {
              "input": "abc",
              "output": "a b c"
            }
          ],
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
          "hint": "<p>遍历字符串，遇到目标字符输出&#039;#&#039;，否则输出原字符。</p>",
          "source": "JD | JD069 | 第6章 古卷密文",
          "samples": [
            {
              "input": "hello\no\nworld\nl\nabc\nx\ntest\ne\nhello\na\nh\ne",
              "output": "hell#"
            }
          ],
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
          "hint": "<p>遍历a，b[i] = chr(ord(a[i]) + ord(a[i+1]))。最后一个用a[-1]和a[0]。</p>",
          "source": "JD | JD070 | 第6章 古卷密文",
          "samples": [
            {
              "input": "=-9+=.3'<<-!!'+5.</=+/3672?96,7'<%5 //>$#:)6*(6.(;7>*)>35#5.72#/44;/)0#864\"!51$1=00*:$&'",
              "output": "jfdhkaZcxiNBHR`cjklhZbimiqxobc^caZUO^mbG]c_`R^dVcruhSgqhXXceiURchojXYS[njVCVfUUnm`Zd^JMd"
            }
          ],
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
          "hint": "<p>遍历字符串，判断每个字符是否在&#039;0&#039;到&#039;9&#039;之间。</p>",
          "source": "JD | JD071 | 第6章 古卷密文",
          "samples": [
            {
              "input": "hello2024world",
              "output": "4"
            }
          ],
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
          "hint": "<p>先判断双方是否相等（平局）。否则按相克规则判断：Rock 胜 Scissors，Scissors 胜 Paper，Paper 胜 Rock，构成一个循环克制链。</p><p><a href=\"https://www.acwing.com/problem/content/763/\" target=\"_blank\">原题链接</a></p>",
          "source": "JD | JD072 | 第6章 古卷密文",
          "samples": [
            {
              "input": "Scissors Rock",
              "output": "Player2"
            }
          ],
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
          "hint": "<p>遍历字符串，对字母、数字分别做+1循环偏移，其他字符原样输出。</p>",
          "source": "JD | JD073 | 第6章 古卷密文",
          "samples": [
            {
              "input": "Hello, World!",
              "output": "Ifmmp, Xpsme!"
            }
          ],
          "solution": {
            "path": "solutions/359/073.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;//数字不加密！\r\n#include<string>\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]>='a'&&a[i]<='y'||a[i]>='A'&&a[i]<='Y')\r\n            a[i]+=1;\r\n        else if(a[i]=='Z')a[i]='A';\r\n        else if(a[i]=='z')a[i]='a';\r\n        //else if(a[i]=='9')a[i]='0';\r\n    }\r\n    cout<<a<<endl;\r\n    return 0;\r\n}"
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
          "hint": "<p>字符串替换函数，或按空格分割单词逐个比较替换。</p>",
          "source": "JD | JD074 | 第6章 古卷密文",
          "samples": [
            {
              "input": "first late system see school still great different year Place far take same\nlife\ngroup",
              "output": "first late system see school still great different year Place far take same"
            }
          ],
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
          "hint": "<p>按空格分割单词（去掉末尾的&#039;.&#039;），遍历比较长度。</p>",
          "source": "JD | JD075 | 第6章 古卷密文",
          "samples": [
            {
              "input": "I am a student of Peking University.",
              "output": "University"
            }
          ],
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
          "hint": "<p>找到str中ASCII码最大的字符（若有多个取最后一个），在其后面插入substr。</p>",
          "source": "JD | JD076 | 第6章 古卷密文",
          "samples": [
            {
              "input": "hello\nX",
              "output": "helloX"
            }
          ],
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
          "hint": "<p>先统计每个字符出现次数，再从头遍历找第一个次数为1的。</p>",
          "source": "JD | JD077 | 第6章 古卷密文",
          "samples": [
            {
              "input": "abaccdeff",
              "output": "b"
            }
          ],
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
          "hint": "<p>遍历a的每个位置，用strncmp比较是否与b匹配。</p>",
          "source": "JD | JD078 | 第6章 古卷密文",
          "samples": [
            {
              "input": "abc\nd",
              "output": "no"
            }
          ],
          "solution": {
            "path": "solutions/359/078.cpp",
            "language": "cpp",
            "code": "#include <iostream>\r\n#include <string>\r\n#include <vector>\r\nusing namespace std;\r\n\r\nint main() {\r\n    vector<string> a;\r\n    string s;\r\n    while (getline(cin, s)) {\r\n        a.push_back(s);\r\n    }\r\n    if (a.size() >= 3) {\r\n        cout << (a[1].find(a[2]) != string::npos ? \"yes\" : \"no\") << endl;\r\n    }\r\n    return 0;\r\n}\r\n\r\n// #include<iostream>\r\n// using namespace std;\r\n// #include<string>\r\n// #include<cstring>\r\n// int main()\r\n// {\r\n//     int a;\r\n//     //cin>>a;\r\n//     cin.ignore();\r\n//     bool found=false;\r\n//     string str1,str2;\r\n//     getline(cin,str1);\r\n//     getline(cin,str2);\r\n//     int len1=str1.length(),len2=str2.length();\r\n//     for(int i=0;i<len1-len2+1;i++)\r\n//     {\r\n//         bool res=true;\r\n//         for(int j=0,k=i;str2[j]!='\\0';j++,k++)\r\n//         {\r\n//             if(str1[k]!=str2[j])\r\n//             {\r\n//                 res=false;\r\n//                 break;\r\n//             }\r\n\r\n//         }\r\n//         if(res==true)\r\n//         {\r\n//             found=true;\r\n//             break;\r\n//         }\r\n//     }\r\n//     if(found==true)\r\n//     {\r\n//         cout<<\"yes\";\r\n//     }\r\n//     else if(found==false)\r\n//     {\r\n//         cout<<\"no\";\r\n//     }\r\n\r\n// }"
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
          "hint": "<p>枚举周期p（p是len的因子），检查s[0:p]重复len/p次是否等于原串。</p>",
          "source": "JD | JD079 | 第6章 古卷密文",
          "samples": [
            {
              "input": "abcd\naaaa\nababab\n.",
              "output": "1\n4\n3"
            }
          ],
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
          "hint": "<p>从左往右找S1最后出现的位置end1，从右往左找S2最后出现的位置start2。如果end1",
          "source": "JD | JD080 | 第6章 古卷密文",
          "samples": [
            {
              "input": "abcd123dABdefghjsdef76ki,ab,ef",
              "output": "16"
            }
          ],
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
          "solution": {
            "path": "solutions/359/089.cpp",
            "language": "cpp",
            "code": "#include<iostream>//每行末尾有空格\r\nusing namespace std;\r\nint main()\r\n{\r\n    int a[200][200],row,col;\r\n    cin>>row>>col;\r\n    for(int i=0;i<row;i++)\r\n    {\r\n        for(int j=0;j<col;j++)\r\n        {\r\n            cin>>a[i][j];\r\n        }\r\n    }\r\n    for(int i=0;i<row;i++)\r\n    {\r\n        for(int j=0;j<col;j++)\r\n        {\r\n            //cout<<\" \";\r\n            cout<<a[i][j]<<\" \";\r\n        }\r\n        cout<<endl;\r\n    }\r\n    \r\n\r\n\r\n}"
          }
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
          "solution": {
            "path": "solutions/359/101.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nstruct node\r\n{\r\n    int num;\r\n    node *next;\r\n};\r\nint main()\r\n{\r\n\r\n}"
          }
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
          "solution": {
            "path": "solutions/359/102.cpp",
            "language": "cpp",
            "code": "#include<iostream>\r\n#include<string>\r\n#include<algorithm>\r\n#include<iomanip>\r\nusing namespace std;\r\nstruct sanyuan\r\n{\r\n    int num;\r\n    double m;\r\n    string str;\r\n};\r\n\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    sanyuan s[200]; \r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cin>>s[i].num>>s[i].m>>s[i].str;\r\n    }\r\n    for(int i=0;i<N-1;i++)\r\n    {\r\n        for(int j=0;j<N-i-1;j++)\r\n        {\r\n            if(s[j].num>s[j+1].num||(s[j].num==s[j+1].num&&s[j].m>s[j+1].m))\r\n            {\r\n                sanyuan temp=s[j];\r\n                s[j]=s[j+1];\r\n                s[j+1]=temp;\r\n            }\r\n        }\r\n    }\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cout<<s[i].num<<\" \"<<fixed<<setprecision(2)<<s[i].m<<\" \"<<s[i].str<<endl;\r\n    }\r\n}"
          }
        }
      ]
    },
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
          "outputDescription": "<p><span style=\"color: rgb(51, 51, 51);\">输出一个整数，表示这两个数的和</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1D44y1B7DC\" target=\"_blank\">Andy的讲解(2021)</a><br /></p>",
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
            "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n  long long A,B;\r\n  cin>>A>>B;\r\n  cout<<A+B;\r\n  return 0;\r\n}"
          }
        },
        {
          "id": "LinK02",
          "title": "完美立方",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK02/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\">形如a^</span>3<span style=\"color: rgb(35, 31, 23);\">= b^</span>3<span style=\"color: rgb(35, 31, 23);\">+ c^</span>3<span style=\"color: rgb(35, 31, 23);\">+ d^</span>3<span style=\"color: rgb(35, 31, 23);\">的等式被称为完美立方等式。例如12^</span>3<span style=\"color: rgb(35, 31, 23);\">= 6^</span>3<span style=\"color: rgb(35, 31, 23);\">+ 8^</span>3<span style=\"color: rgb(35, 31, 23);\">+ 10^</span>3<span style=\"color: rgb(35, 31, 23);\">。编写一个程序，对任给的正整数N (N≤100)，寻找所有的四元组(a, b, c, d)，使得</span><span style=\"color: rgb(35, 31, 23);\">a^</span>3<span style=\"color: rgb(35, 31, 23);\">= b^</span>3<span style=\"color: rgb(35, 31, 23);\">+ c^</span>3<span style=\"color: rgb(35, 31, 23);\">+ d^</span>3<span style=\"color: rgb(35, 31, 23);\">，其中a,b,c,d 大于 1, 小于等于N，且b&lt;=c&lt;=d。</span><br /></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">一个正整数N (N≤100)。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">每行输出一个完美立方。输出格式为：</span></p><p><span style=\"color: rgb(35, 31, 23);\">Cube = a, Triple = (b,c,d)</span></p><p><span style=\"color: rgb(35, 31, 23);\">其中a,b,c,d所在位置分别用实际求出四元组值代入。</span></p><p><span style=\"color: rgb(35, 31, 23);\">请按照a的值，从小到大依次输出。当两个完美立方等式中a的值相同，则b值小的优先输出、仍相同则c值小的优先输出、再相同则d值小的先输出。</span></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/bv1Nb4y1C7NJ\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
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
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n\tint a, b, c, d, N;\r\n\tcin >> N;\r\n\tfor (int i = 2; i <= N; i++)\r\n\t{\r\n\t\tfor (int j = 2; j < N; j++)\r\n\t\t{\r\n\t\t\tfor (int k = j; k < N; k++)\r\n\t\t\t{\r\n\t\t\t\tfor (int l = k; l < N; l++)\r\n\t\t\t\t{\r\n\t\t\t\t\tif (i * i * i == j * j * j + k * k * k + l * l * l)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tcout << \"Cube = \" << i << \", Triple = (\" << j <<\",\"<< k <<\",\" << l << \")\" << endl;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn 0;\r\n}"
          }
        },
        {
          "id": "LinK03",
          "title": "人的周期",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK03/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\">据说人生来就有三个生理周期，分别为体力周期、感情周期和智力周期，它们的周期长度分别为23天、28天和33天。</span></p><p><span style=\"color: rgb(35, 31, 23);\">每一个周期中有一天是高峰。在高峰这天，人会在相应的方面表现出色。</span><span style=\"color: rgb(35, 31, 23);\">例如，在智力周期的高峰，人会思维敏捷，注意力容易高度集中。</span></p><p><span style=\"color: rgb(35, 31, 23);\">因为三个周期的长度不同，所以通常三个周期的高峰不会落在同一天。</span></p><p><span style=\"color: rgb(35, 31, 23);\">对于每个人，想知道何时三个高峰落在同一天。</span></p><p><span style=\"color: rgb(35, 31, 23);\">对于每个周期，会给出从当前年份的第一天开始，到出现高峰的天数（不一定是第一次高峰出现的时间）。</span></p><p><span style=\"color: rgb(35, 31, 23);\">给定一个从当年第一天开始的天数，你的任务是输出从给定时间开始（不包括给定时间），下一次三个高峰落在同一天的时间（距给定时间的天数）。例如：给定时间为10，下次出现三个高峰同一天的时间是12，则输出2（注意这里不是3）。</span></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输入包含多组数据，每一组数据由四个整数组成，数据以-1 -1 -1 -1 结束。</span></p><p><span style=\"color: rgb(35, 31, 23);\">对于每一行的四个整数p, e, i和d, 其中p, e, i分别表示体力、情感和智力高峰出现的时间（时间从当年的第一天开始计算）。</span></p><p><span style=\"color: rgb(35, 31, 23);\">d是给定的时间，可能小于p, e或i。所有给定时间是非负的并且小于或等于365，所求的时间小于或等于21252。</span></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">从给定时间起，下一次三个高峰同一天的时间（距离给定时间的天数）。</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1yo4y1k7kD\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
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
            "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int p, e, i, d;\r\n    int m = 1;\r\n    scanf(\"%d%d%d%d\", &p, &e, &i, &d);\r\n    while (p != -1 && e != -1 && i != -1 && d != -1)\r\n    {\r\n        \r\n        for (int j = d+1; j <= d+21252; j++)\r\n        {\r\n            if ((j - p) % 23 == 0 && (j - e) % 28 == 0 && (j - i) % 33 == 0)\r\n            {\r\n                if (d!=365||j!=21252)\r\n                    printf(\"Case %d: the next triple peak occurs in %d days.\\n\", m, j - d);\r\n                else printf(\"Case %d: the next triple peak occurs in %d days.\\n\", m, 21252);\r\n                break;\r\n            }\r\n        }\r\n        m++;\r\n        scanf(\"%d%d%d%d\", &p, &e, &i, &d);\r\n    }\r\n    return 0;\r\n}"
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
            "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int T;\r\n    cin >> T;\r\n    while (T--)\r\n    {\r\n        int N, value;\r\n        cin >> N;\r\n        vector<int>numbers;\r\n        for (int i = 0; i < N; i++)\r\n        {\r\n            cin >> value;\r\n            numbers.push_back(value);\r\n        }\r\n        sort(numbers.begin(), numbers.end());\r\n        for (int i = 0; i < N; i++)\r\n        {\r\n            if (i > 0)cout << \" \";\r\n            cout << numbers[i];\r\n        }\r\n        cout << endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "LinK05",
          "title": "假币问题",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK05/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>林克有12枚银币。其中有11枚真币和1枚假币。假币看起来和真币没有区别，但是重量不同。但林克不知道假币比真币轻还是重。</p><p>于是他向他朋友约珥借了一架天平，用这架天平称了这些币三次。</p><p><span style=\"color: rgb(35, 31, 23);\">如果用天平称两枚硬币，发现天平平衡，说明两枚都是真的。</span><span style=\"color: rgb(35, 31, 23);\">如果用一枚真币与另一枚银币比较，发现它比真币轻或重，说明它是假币。</span></p><p>经过精心的设计，聪明的林克根据这三次称量结果找出假币，并且能够确定假币是轻是重。<br /></p><p>如果给你林克的称量数据，你也可以找出假币并且确定假币是轻是重吗？（林克提供的称量数据保证一定能找出假币）。</p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">第一行有一个数字n，表示有n组测试用例。</span></p><p><span style=\"color: rgb(35, 31, 23);\">对于每组测试用例：</span></p><p><span style=\"color: rgb(35, 31, 23);\">输入有三行，每行表示一次称量的结果。林克事先将银币标号为A-L。</span></p><p><span style=\"color: rgb(35, 31, 23);\">每次称量的结果用三个以空格隔开的字符串表示：</span></p><p><span style=\"color: rgb(35, 31, 23);\">天平左边放置的硬币  天平右边放置的硬币  平衡状态。</span></p><p><span style=\"color: rgb(35, 31, 23);\">其中平衡状态用``up&#039;&#039;, ``down&#039;&#039;, 或 ``even&#039;&#039;表示, 分别为右端高、右端低和平衡。天平左右的硬币数总是相等的。</span></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输出哪一个标号的银币是假币，并说明它比真币轻还是重(heavy or light)。</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1kM4y1u71y\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
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
            "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\n#include<vector>\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    int target, n;\r\n    cin >> target >> n;\r\n    vector<int>a;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        int x;\r\n        cin >> x;\r\n        a.push_back(x);\r\n    }\r\n    for (int i = 0; i < n - 1; i++)\r\n    {\r\n        for (int j = i + 1; j < n; j++)\r\n        {\r\n            if (a[i] + a[j] == target)\r\n            {\r\n                cout << i << \" \" << j << endl;\r\n            }\r\n        }\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "LinK06",
          "title": "两数之和",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK06/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>双指针是极其常用的算法，这是必须学会，也是不可不会的。</p><p>但是双指针看似简单，背后的思想并不容易掌握，小华深谙此理，为了帮助小鲁一步一步的掌握这编程利器，他为小鲁精心设计了三道题：</p><p>第一题：</p><p>给定一<span style=\"color: rgb(51, 51, 51);\">个目标值 target，请你在</span>不包含重复元素的按升序排列的整数数组 a中，找出和为目标值的那两个整数，并返回他们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。<br /></p><p><span style=\"color: rgb(227, 55, 55);\">例如:给定 a= [2, 7, 10, 15], target = 17，因为 a[1] + a[2] = 7 + 10 = 17，所以返回 [1 2]</span></p>",
          "inputDescription": "<p>输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数</p><p>第二行表示数组a的n个数，每个元素用空格隔开。</p>",
          "outputDescription": "<p>输出和为target的两个元素的下标 i j ，其中(i&lt;j)。</p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1s54y1a7Qz\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
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
            "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\n#include<vector>\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    int target, n;\r\n    cin >> target >> n;\r\n    vector<int>a;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        int x;\r\n        cin >> x;\r\n        a.push_back(x);\r\n    }\r\n    for (int i = 0; i < n - 1; i++)\r\n    {\r\n        for (int j = i + 1; j < n; j++)\r\n        {\r\n            if (a[i] + a[j] == target)\r\n            {\r\n                cout << i << \" \" << j << endl;\r\n            }\r\n        }\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "LinK07",
          "title": "三数之和",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK07/",
          "timeLimit": 10000,
          "memoryLimit": 256,
          "description": "<p>看着小鲁AC了第一题，小华接着提出第二问：<br /></p><p>给定一个目标值 target，请在整数数组 a中，找出三个元素(x,y,z) 使x+y+z==target。<br /></p><p>请找到所有满足条件的三元组，并且请按从小到大的顺序输出所有合法的三元组。</p><p>注意：三元组中不允许包含重复数字，且输出的三元组中要求 x&lt;y&lt;z.</p><p><span style=\"color: rgb(227, 55, 55);\">例如:给定target = 17，n=7, 数组<span style=\"color: rgb(227, 55, 55);\">a= [0, 2, 7, 10, 15,18,25]</span></span></p><p><span style=\"color: rgb(227, 55, 55);\">结果返回两个三元组：(0,2, 15), (</span><span style=\"color: rgb(227, 55, 55);\">2,7,10)</span></p>",
          "inputDescription": "<p>输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数</p><p>第二行表示数组a的n个数，每个元素用空格隔开。</p>",
          "outputDescription": "<p><span style=\"color: rgb(73, 80, 96);\">输出所有满足和为target的三元组(x,y,z)，要求(x&lt; y &lt;z) 并且不允许有重复数字。</span><br /></p><p><span style=\"color: rgb(73, 80, 96);\">把三元组按照x的大小升序输出，x相同的按照y的大小升序输出。</span></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1mV411v7NW\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
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
            "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\nusing namespace std;\r\n\r\nvector<vector<int>> threeSum(vector<int>& nums, int target)\r\n{\r\n\tvector<vector<int>> res;//储存结果\r\n\tsort(nums.begin(), nums.end());\r\n\tfor(int i=0;i<nums.size();i++)\r\n\t{\r\n\t\tif (i && nums[i] == nums[i - 1])continue;//除去重复项\r\n\t\tfor (int j = i + 1,k=nums.size()-1; j < nums.size() - 2; j++)\r\n\t\t{\r\n\t\t\tif (j > i + 1 && nums[j] == nums[j - 1])continue;//除去重复项\r\n\t\t\twhile(j<k-1&&nums[i]+nums[j]+nums[k-1]>=target)\r\n\t\t\t{\r\n\t\t\t\tk--;\r\n\t\t\t}\r\n\t\t\tif (nums[i] + nums[j] + nums[k] == target)\r\n\t\t\t\tres.push_back({ nums[i],nums[j],nums[k] });\r\n\t\t}\r\n\t}\r\n\treturn res;\r\n}\r\nbool comp(const vector<int>& a, const vector<int>& b)\r\n{\r\n\tif (a[0] != b[0])return a[0] < b[0];\r\n\tif (a[1] != b[1])return a[1] < b[1];\r\n\treturn a[2] < b[2];\r\n}\r\nint main()\r\n{\r\n\tint target, n;\r\n\tcin >> target >> n;\r\n\tvector<int>nums(n);\r\n\tfor(int i=0;i<n;i++)\r\n\t{\r\n\t\tcin >> nums[i];\r\n\t}\r\n\tvector<vector<int>>res;\r\n\tres = threeSum(nums, target);//求出所有三元组\r\n\tsort(res.begin(), res.end(),comp);//排序\r\n\tfor(auto line:res)\r\n\t{\r\n\t\tcout << line[0] << \" \" << line[1] << \" \" << line[2] << endl;\r\n\t\t\r\n\t}\r\n\treturn 0;\r\n}"
          }
        },
        {
          "id": "LinK08",
          "title": "四数之和",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK08/",
          "timeLimit": 50000,
          "memoryLimit": 256,
          "description": "<p>当小鲁AC了第二问，小华接着提出第三问：<br /></p><p>给定一个目标值 target，请在整数数组 A中，找出四个元素(a,b,c,d) 使a+b+c+d==target。<br /></p><p>请找到所有满足条件的四元组，并且请按从小到大的顺序输出所有合法的四元组。</p><p>注意：四元组中不允许包含重复数字，且输出的四元组中要求 a&lt;b&lt;c&lt;d</p><p><span style=\"color: rgb(227, 55, 55);\">例如:给定target = 17，n=7, 数组a= [0, 2, 5, 10, 15,18,25]</span></p><p><span style=\"color: rgb(227, 55, 55);\">结果返回两个四元组：(0,2,5,10)</span></p>",
          "inputDescription": "<p>输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组A的元素个数</p><p>第二行表示数组A的n个数，每个元素用空格隔开。</p>",
          "outputDescription": "<p>输出所有满足和为target的四元组<span style=\"color: rgb(51, 51, 51);\">(a,b,c,d) 使(a&lt;b&lt;c&lt;d)</span>并且不允许有重复数字。<br /></p><p>把四元组按照a的大小升序输出，a相同的按照b的大小升序输出,<span style=\"color: rgb(51, 51, 51);\">a,b相同的按照c的大小升序输出</span>。</p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1nV411Y7wF/\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "17 7\n0 2 5 10 15 18 25 ",
              "output": "0 2 5 10"
            }
          ]
        },
        {
          "id": "LinK09",
          "title": "汉诺塔I",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK09/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK09-04066884e2.png\" width=\"376\" height=\"216\" /><br /></p><p>有三根杆子A，B，C。A杆上有N个(N&gt;1)穿孔圆盘，盘的尺寸由下到上依次变小。要求按下列规则将所有圆盘移至C杆： 每次只能移动一个圆盘； 大盘不能叠在小盘上面。 提示：可将圆盘临时置于B杆，也可将从A杆移出的圆盘重新移回A杆，但都必须遵循上述两条规则。<br /></p><p>问：如何移？最少要移动多少次？</p><p><br /></p><p>解法</p><p>解法的基本思想是递归。假设有A、B、C三个塔，A塔有N块盘，目标是把这些盘全部移到C塔。那么先把A塔顶部的N-1块盘移动到B塔，再把A塔剩下的大盘移到C，最后把B塔的N-1块盘移到C。 每次移动多于一块盘时，则再次使用上述算法来移动。</p>",
          "inputDescription": "<p>盘子个数n(1&lt;=n&lt;=20)</p>",
          "outputDescription": "<p>输出移动的步骤，每行一步，如从A座移动到C座，输出&quot;A-&gt;C&quot;。</p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1qy4y187N1\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "3",
              "output": "A->C\nA->B\nC->B\nA->C\nB->A\nB->C\nA->C"
            }
          ]
        },
        {
          "id": "LinK10",
          "title": "汉诺塔II",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK10/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK10-e4eb3b6f3e.png\" width=\"376\" height=\"216\" /><br /></p><p>有三根杆子A，B，C。A杆上有N个(N&gt;1)穿孔圆盘，盘的尺寸由下到上依次变小。要求按下列规则将所有圆盘移至C杆： 每次只能移动一个圆盘； 大盘不能叠在小盘上面。 提示：可将圆盘临时置于B杆，也可将从A杆移出的圆盘重新移回A杆，但都必须遵循上述两条规则。<br /></p><p>问：如何移？最少要移动多少次？</p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输入为一个整数后面跟三个单字符字符串。</span></p><p><span style=\"color: rgb(35, 31, 23);\">整数为盘子的数目，后三个字符表示三个杆子的编号。</span></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输出每一步移动盘子的记录。一次移动一行。</span></p><p><span style=\"color: rgb(35, 31, 23);\">每次移动的记录为例如3:a-&gt;b 的形式，即把编号为3的盘子从a杆移至b杆。</span></p><p><span style=\"color: rgb(35, 31, 23);\">我们约定圆盘从小到大编号为1, 2, ...n。即最上面那个最小的圆盘编号为1，最下面最大的圆盘编号为n。</span></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1qy4y187N1\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "3 a b c",
              "output": "1:a->c\n2:a->b\n1:c->b\n3:a->c\n1:b->a\n2:b->c\n1:a->c"
            }
          ]
        },
        {
          "id": "LinK11",
          "title": "DFS试炼之排列数字",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK11/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img alt=\"image.png\" src=\"assets/problem-images/LinK11-1bbb1eff08.png\" width=\"503\" height=\"315\" /><br /></p><p style=\"margin-left: 0px;\">给定一个整数n，将数字1~n排成一排，将会有很多种排列方法。</p><p>现在，请你按照字典序将所有的排列方法输出。</p><p><span style=\"color: rgb(227, 55, 55);\">数据范围：1&lt;=n&lt;=8</span><br /></p>",
          "inputDescription": "<p><span style=\"color: rgb(51, 51, 51);\">共一行，包含一个整数n。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(51, 51, 51);\">按字典序输出所有排列方案，每个方案占一行。</span><br /></p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1jU4y1a7m3\" target=\"_blank\">Andy讲解(2021)</a><br /></p><p><a href=\"https://www.acwing.com/problem/content/844/\" target=\"_blank\">原题链接</a></p>",
          "source": "",
          "samples": [
            {
              "input": "3",
              "output": "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1"
            }
          ]
        },
        {
          "id": "LinK12",
          "title": "字符全排列",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK12/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\">给定一个由不同的小写字母组成的字符串，输出这个字符串的所有全排列。</span><br /></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输入只有一行，是一个由不同的小写字母组成的字符串，已知字符串的长度在2到8之间。</span><br /></p>",
          "outputDescription": "<p>输出这个字符串的所有排列方式，每行一个排列。要求字母序比较小的排列在前面。字母序如下定义：</p><p>已知S = s1s2...sk, T = t1t2...tk，则S &lt; T 等价于，存在p (1 &lt;= p &lt;= k)，使得<br />s1= t1, s2= t2, ..., sp - 1= tp - 1, sp&lt; tp成立。</p>",
          "hint": "<p><span style=\"color: rgb(35, 31, 23);\">需要对输入的字符串排序！</span><br /></p><p><span style=\"color: rgb(35, 31, 23);\"><a href=\"https://www.bilibili.com/video/BV1Rf4y1s71T\" target=\"_blank\">Andy讲解2021年</a><br /></span></p>",
          "source": "",
          "samples": [
            {
              "input": "abc",
              "output": "abc\nacb\nbac\nbca\ncab\ncba "
            }
          ]
        },
        {
          "id": "LinK13",
          "title": "输出N皇后的全部摆法",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK13/",
          "timeLimit": 3000,
          "memoryLimit": 256,
          "description": "<p><font>随着编程水平的进阶，小华知道是全面扩充小鲁知识面，帮助他快速升级的时候到了，他再给小鲁布置了道经典题：</font></p><p><span style=\"color: rgb(37, 37, 37);\">输入一个正整数N，请写一个程</span><span style=\"color: rgb(37, 37, 37);\">序，</span><span style=\"color: rgb(37, 37, 37);\">输出</span><span style=\"color: rgb(37, 37, 37);\">N</span><span style=\"color: rgb(37, 37, 37);\">皇</span><span style=\"color: rgb(37, 37, 37);\">后问</span><span style=\"color: rgb(37, 37, 37);\">题</span><span style=\"color: rgb(37, 37, 37);\">的全</span><span style=\"color: rgb(37, 37, 37);\">部</span><span style=\"color: rgb(37, 37, 37);\">摆法。</span></p>",
          "inputDescription": "<p><span style=\"color: rgb(37, 37, 37);\">输入皇后的个数n（n&lt;=13）</span><br /></p>",
          "outputDescription": "<p>输出长度为n的正整数。</p><p><span style=\"color: rgb(37, 37, 37);\">输出结果里的每一行都</span><span style=\"color: rgb(37, 37, 37);\">代</span><span style=\"color: rgb(37, 37, 37);\">表一</span><span style=\"color: rgb(37, 37, 37);\">种</span><span style=\"color: rgb(37, 37, 37);\">摆法</span><span style=\"color: rgb(37, 37, 37);\">。</span></p><p><span style=\"color: rgb(37, 37, 37);\">行里</span><span style=\"color: rgb(37, 37, 37);\">的</span><span style=\"color: rgb(37, 37, 37);\">第</span><span style=\"color: rgb(37, 37, 37);\">i</span><span style=\"color: rgb(37, 37, 37);\">个数</span><span style=\"color: rgb(37, 37, 37);\">字</span><span style=\"color: rgb(37, 37, 37);\">如</span><span style=\"color: rgb(37, 37, 37);\">果是n，就代表第</span><span style=\"color: rgb(37, 37, 37);\">i</span><span style=\"color: rgb(37, 37, 37);\">行的</span><span style=\"color: rgb(37, 37, 37);\">皇</span><span style=\"color: rgb(37, 37, 37);\">后应</span><span style=\"color: rgb(37, 37, 37);\">该</span><span style=\"color: rgb(37, 37, 37);\">放在</span><span style=\"color: rgb(37, 37, 37);\">第</span><span style=\"color: rgb(37, 37, 37);\">n</span><span style=\"color: rgb(37, 37, 37);\">列。</span></p><p><span style=\"color: rgb(37, 37, 37);\"><span style=\"color: rgb(37, 37, 37);\">皇后的行、列编号都是</span><span style=\"color: rgb(37, 37, 37);\">从</span><span style=\"color: rgb(37, 37, 37);\">1</span><span style=\"color: rgb(37, 37, 37);\">开始</span><span style=\"color: rgb(37, 37, 37);\">算</span><span style=\"color: rgb(37, 37, 37);\">。</span><br /></span></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1X64y1D7fg\" target=\"_blank\">Andy的讲解(2021</a><span style=\"color: rgb(51, 51, 51);\">)</span><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "4",
              "output": "2413\n3142\n\n"
            }
          ]
        },
        {
          "id": "LinK14",
          "title": "求八皇后的第n种解",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK14/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\">掌握基本的递归函数也明白如何生成N皇后问题后，在小华的指导下，小鲁决定加大难度，下一步挑战的就是n皇后问题的升级版：</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">国际象棋中的皇后可以在横、竖、斜线上不限步数地吃掉其他棋子。</span><br /></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">八</span><span style=\"color: rgb(35, 31, 23);\">个皇后问题是如何将八个皇后放在棋盘上（有</span><span style=\"color: rgb(35, 31, 23);\">8 * 8</span><span style=\"color: rgb(35, 31, 23);\">个方格），使它们谁也不能被其他皇后吃掉！</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">已经知道八皇后问题一共有92组解，每组解可以用一个字符串表示：</span></span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">对于某个满足要求的</span><span style=\"color: rgb(35, 31, 23);\">八</span><span style=\"color: rgb(35, 31, 23);\">皇后的摆放方法，定义一个皇后串</span><span style=\"color: rgb(35, 31, 23);\">a</span><span style=\"color: rgb(35, 31, 23);\">与之对应，即</span><span style=\"color: rgb(35, 31, 23);\">a=b</span><span style=\"color: rgb(35, 31, 23);\">1</span><span style=\"color: rgb(35, 31, 23);\">b</span><span style=\"color: rgb(35, 31, 23);\">2</span><span style=\"color: rgb(35, 31, 23);\">...b</span><span style=\"color: rgb(35, 31, 23);\">8</span><span style=\"color: rgb(35, 31, 23);\">，其中b</span><span style=\"color: rgb(35, 31, 23);\">i</span><span style=\"color: rgb(35, 31, 23);\">为相应摆法中第i行皇后所处的列数。</span></p><p><span style=\"color: rgb(35, 31, 23);\"><b>题目是：</b></span></p><p><span style=\"color: rgb(35, 31, 23);\">输入一个数n，要求输出八皇后问题的第n个解，也就是第n个皇后字符串。</span></p><p><span style=\"color: rgb(35, 31, 23);\">串的比较是这样的：皇后串x置于皇后串y之前，当且仅当将x视为整数时比y小。</span></p><p></p><p><span style=\"color: rgb(35, 31, 23);\">请你写一个程序，能够根据输入的数n( 1&lt;=n&lt;=92),输出第n个合法的八皇后串。</span></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">第1行是测试数据的组数T，后面跟着T行输入。</span></p><p><span style=\"color: rgb(35, 31, 23);\">每组测试数据<span style=\"color: rgb(35, 31, 23);\">占1行，包含</span>一个正整数n (1 &lt;= n &lt;= 92)</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输出有T行，每行输出对应一个输入。输出应是一个正整数，是第n个八皇后串。</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1X64y1D7fg\" target=\"_blank\">Andy的讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "2\n1\n92",
              "output": "15863724\n84136275"
            }
          ]
        },
        {
          "id": "LinK15",
          "title": "爬天梯",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK15/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" /><br /></p><p>经过激烈的战斗，林克过关斩将终于抵达<span style=\"color: rgb(51, 51, 51);\">初阶</span>递归之试炼的最后一关。<br />在他面前有一座天梯，天梯的顶端就是传说中的递归试炼通过证了。</p><p>林克每步可以跨一级台阶或者跨二级台阶。他必须尝试所有的走法才能得到递归试炼通过证。</p><p>如果天梯的台阶数是N，请问他总共需要尝试多少种走法？</p>",
          "inputDescription": "<p>输入天梯的台阶数N。</p><p style=\"margin-left: 0.01in;\">(0&lt;=N&lt;=46)</p>",
          "outputDescription": "<p>输出林克有几种走法。</p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1ov411b7Lu\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "3",
              "output": "3"
            }
          ]
        },
        {
          "id": "LinK14.5",
          "title": "DFS试炼之n皇后问题",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK14.5/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(51, 51, 51);\">n-皇后问题是指将 n 个皇后放在 n∗n 的国际象棋棋盘上，使得皇后不能相互攻击到，即任意两个皇后都不能处于同一行、同一列或同一斜线上。</span><br /></p><p><span style=\"color: rgb(51, 51, 51);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK14.5-ebc5974fc8.png\" width=\"256\" height=\"272\" /><br /></span></p><p><span style=\"color: rgb(227, 55, 55);\">数据范围:1&lt;=n&lt;=12</span></p>",
          "inputDescription": "<p><span style=\"color: rgb(51, 51, 51);\">共一行，包含整数n。</span><br /></p>",
          "outputDescription": "<p style=\"margin-left: 0px;\">每个解决方案占n行，每行输出一个长度为n的字符串，用来表示完整的棋盘状态。</p><p>其中”.”表示某一个位置的方格状态为空，”Q”表示某一个位置的方格上摆着皇后。</p><p>每个方案输出完成后，输出一个空行。</p><p>输出方案的顺序请根据样例，按照次序从小到大，从左到右输出。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/845/\" target=\"_blank\">原题链接</a></p><p><a href=\"https://www.acwing.com/video/275/\" target=\"_blank\">Y总讲解</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "4",
              "output": ".Q..\n...Q\nQ...\n..Q.\n\n..Q.\nQ...\n...Q\n.Q.."
            }
          ]
        },
        {
          "id": "LinK16",
          "title": "放苹果",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK16/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK16-62573c03d7.png\" width=\"470\" height=\"233\" /><br /></span></p><p><span style=\"color: rgb(35, 31, 23);\">要寻找克罗克果实，林克需要把苹果放在盘子里，其中只有一种情况可以让克罗克果实出现。</span><span style=\"color: rgb(35, 31, 23);\">所以，林克需要尝试所有的放法。</span></p><p><span style=\"color: rgb(35, 31, 23);\">有M个同样的苹果放在N个同样的盘子里，允许有的盘子空着不放，问共有多少种不同的放法？<br /><br />注意：5，1，1和1，5，1 是同一种<span style=\"color: rgb(35, 31, 23);\">放法</span>。</span><br /></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">第一行是测试数据的数目t（0 &lt;= t &lt;= 20）。以下每行均包含二个整数M和N，以空格分开。0&lt;=M，N&lt;=10。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">对输入的每组数据M和N，用一行输出相应的K。K为正整数，代表共有几种放法。</span><br /></p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1y64y1D7AM\" target=\"_blank\">Andy讲解(2021)</a><br /></p><p>改编自《分苹果》</p>",
          "source": "xmu",
          "samples": [
            {
              "input": "1\n7 3",
              "output": "8"
            }
          ]
        },
        {
          "id": "LinK17",
          "title": "递归求波兰表达式",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK17/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>站在巨人的肩膀上，编程之路才能越走越宽。小华继续向小鲁讲授新的知识点：波兰表达式。</p><p style=\"margin-left: 40px;\">逆波兰表达式，英文为 Reverse Polish notation，跟波兰表达式（Polish notation）相对应。</p><p style=\"margin-left: 40px;\">之所以叫波兰表达式和逆波兰表达式，是为了纪念波兰的数理科学家 Jan Łukasiewicz的创意。</p><ul><li>平时我们习惯将表达式写成 (1 + 2) * (3 + 4)，加减乘除等运算符写在中间，因此称呼为中缀表达式。</li><li>而波兰表达式的写法为 (* (+ 1 2) (+ 3 4))，将运算符写在前面，因而也称为前缀表达式。</li><li>逆波兰表达式的写法为 ((1 2 +) (3 4 +) *)，将运算符写在后面，因而也称为后缀表达式。</li></ul><p style=\"margin-left: 40px;\">波兰表达式和逆波兰表达式有个好处，就算将圆括号去掉也没有歧义。上述的波兰表达式去掉圆括号，变为<code>* + 1 2 + 3 4</code>。逆波兰表达式去掉圆括号，变成<code>1 2 + 3 4 + *</code>也是无歧义并可以计算的。事实上我们通常说的波兰表达式和逆波兰表达式就是去掉圆括号的。而中缀表达式，假如去掉圆括号，将 (1 + 2)(3 + 4) 写成 1 + 23 + 4，就改变原来意思了。</p><p style=\"margin-left: 40px;\"><code>(2 + 3) * 4</code>的波兰表示法为<code>* + 2 3 4</code></p><p style=\"\">请写程序求解波兰表达式的值。</p><p style=\"\">注意：本题输入的运算符只包括如下4个运算符：<code>+ - * /</code></p><p style=\"margin-left: 0px;\"><span style=\"color: rgb(35, 31, 23);\">提示：可使用atof(str)把字符串转换为一个double类型的浮点数，方便求解。</span></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输入为一行波兰表达式，其中运算符和运算数之间都用空格分隔，运算数是浮点数。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输出为一行，表达式的值。</span></p><p><span style=\"color: rgb(35, 31, 23);\">可直接用printf(&quot;%f\\n&quot;, v)输出表达式的值v。</span></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV12f4y1s7yV\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "* + 11.0 12.0 + 24.0 35.0",
              "output": "1357.000000"
            }
          ]
        },
        {
          "id": "LinK18",
          "title": "2的幂次方表示",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK18/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK18-3a41a5c79b.png\" width=\"490\" height=\"465\" /><br /></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">一个正整数n（n≤20000）。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">一行，符合约定的n的0，2表示（在表示中不能有空格）。</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1PA411N7Lg\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "137",
              "output": "2(2(2)+2+2(0))+2(2+2(0))+2(0)"
            }
          ]
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
          ]
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
          ]
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
          ]
        },
        {
          "id": "LinK22",
          "title": "算术表达式",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK22/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>给定一个仅由正整数(<font>数字</font><font>1</font>-数字9)、乘法运算符(<font>“*”</font>)和加法运算符(<font>“+”</font>)组成的算术表达式，计算该算术表达式的值。<br /></p>",
          "inputDescription": "<p>输入共两行，第一行包含一个整数 N( 2 ≤N<span style=\"color: rgb(51, 51, 51);\">≤ 200 000 )</span>，表示待输入表达式中数字的个数。</p><p>第二行包含一个字符串，共 2N-1 个字符，即所给的算术表达式。</p><p>输入保证表达式中每个数字$x_{i} \\in\\left \\{  1,2,3,4,5,6,7,8,9\\right \\}$，运算符仅为“*”或“+”</p><p><font>对于</font><font>60%</font><font>的数据，保证<span style=\"color: rgb(51, 51, 51);\">2 ≤</span>N<span style=\"color: rgb(51, 51, 51);\">≤ 1000</span></font>。</p><p><font>对于</font><font>40%</font><font>的数据，保证 1000<span style=\"color: rgb(51, 51, 51);\">≤</span>N<span style=\"color: rgb(51, 51, 51);\">≤ 200 000</span></font>。</p>",
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
          ]
        },
        {
          "id": "LinK23",
          "title": "二进制密码锁",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK23/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK23-70f050ada6.png\" width=\"197\" height=\"134\" /><br /></p><p>在海拉鲁大陆有一种特殊的二进制密码锁，由n个相连的按钮组成（n&lt;30），按钮有凹/凸两种状态，用手按按钮会改变其状态。</p><p>然而让人头疼的是，当按一个按钮时，跟它相邻的两个按钮状态也会反转。当然，如果按的是最左或者最右边的按钮，该按钮只会影响到跟它相邻的一个按钮。</p><p>当前密码锁状态已知，需要解决的问题是，林克至少需要按多少次按钮，才能将密码锁转变为所期望的目标状态。</p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">两行，给出两个由0、1组成的等长字符串，表示当前/目标密码锁状态，其中0代表凹，1代表凸。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">至少需要进行的按按钮操作次数，如果无法实现转变，则输出impossible。</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1Zi4y1N7dU\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "011\n000",
              "output": "1"
            }
          ]
        },
        {
          "id": "LinK24",
          "title": "熄灯问题",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK24/",
          "timeLimit": 10000,
          "memoryLimit": 512,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\">有一个由按钮组成的矩阵，其中每行有6个按钮，共5行。每个按钮的位置上有一盏灯。当按下一个按钮后，该按钮以及周围位置(上边、下边、左边、右边)的灯都会改变一次。即，如果灯原来是点亮的，就会被熄灭；如果灯原来是熄灭的，则会被点亮。在矩阵角上的按钮改变3盏灯的状态；在矩阵边上的按钮改变4盏灯的状态；其他的按钮改变5盏灯的状态。</span></p><p><img src=\"assets/problem-images/LinK24-5bbfb55c19.jpg\" /></p><p><span style=\"color: rgb(35, 31, 23);\">在上图中，左边矩阵中用X标记的按钮表示被按下，右边的矩阵表示灯状态的改变。对矩阵中的每盏灯设置一个初始状态。请你按按钮，直至每一盏等都熄灭。与一盏灯毗邻的多个按钮被按下时，一个操作会抵消另一次操作的结果。在下图中，第2行第3、5列的按钮都被按下，因此第2行、第4列的灯的状态就不改变。</span></p><p><img src=\"assets/problem-images/LinK24-e31d5d67f2.jpg\" /></p><p><span style=\"color: rgb(35, 31, 23);\">请你写一个程序，确定需要按下哪些按钮，恰好使得所有的灯都熄灭。根据上面的规则，我们知道1）第2次按下同一个按钮时，将抵消第1次按下时所产生的结果。因此，每个按钮最多只需要按下一次；2）各个按钮被按下的顺序对最终的结果没有影响；3）对第1行中每盏点亮的灯，按下第2行对应的按钮，就可以熄灭第1行的全部灯。如此重复下去，可以熄灭第1、2、3、4行的全部灯。同样，按下第1、2、3、4、5列的按钮，可以熄灭前5列的灯。</span></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">5行组成，每一行包括6个数字（0或1）。</span></p><p><span style=\"color: rgb(35, 31, 23);\">相邻两个数字之间用单个空格隔开。</span></p><p><span style=\"color: rgb(35, 31, 23);\">0表示灯的初始状态是熄灭的，1表示灯的初始状态是点亮的。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">5行组成，每一行包括6个数字（0或1）。</span></p><p><span style=\"color: rgb(35, 31, 23);\">相邻两个数字之间用单个空格隔开。</span></p><p><span style=\"color: rgb(35, 31, 23);\">其中的1表示需要把对应的按钮按下，0则表示不需要按对应的按钮。</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1QK4y1J7en\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "2\n0 1 1 0 1 0\n1 0 0 1 1 1\n0 0 1 0 0 1\n1 0 0 1 0 1\n0 1 1 1 0 0\n0 0 1 0 1 0\n1 0 1 0 1 1\n0 0 1 0 1 1\n1 0 1 1 0 0\n0 1 0 1 0 0",
              "output": "PUZZLE #1\n1 0 1 0 0 1 \n1 1 0 1 0 1 \n0 0 1 0 1 1 \n1 0 0 1 0 0 \n0 1 0 0 0 0 \nPUZZLE #2\n1 0 0 1 1 1 \n1 1 0 0 0 0 \n0 0 0 1 0 0 \n1 1 0 1 0 1 \n1 0 1 1 0 1 \n\n注意：PUZZLE行结尾没有空格，数字行最后有一个空格。"
            }
          ]
        },
        {
          "id": "LinK25",
          "title": "拨钟问题",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK25/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>有9个时钟，排成一个3*3的矩阵。<br /></p><pre><code>|-------|    |-------|    |-------|<br />|       |    |       |    |   |   |<br />|---O   |    |---O   |    |   O   |<br />|       |    |       |    |       |<br />|-------|    |-------|    |-------|<br />    A            B            C    <br /><br />|-------|    |-------|    |-------|<br />|       |    |       |    |       |<br />|   O   |    |   O   |    |   O   |<br />|   |   |    |   |   |    |   |   |<br />|-------|    |-------|    |-------|<br />    D            E            F    <br /><br />|-------|    |-------|    |-------|<br />|       |    |       |    |       |<br />|   O   |    |   O---|    |   O   |<br />|   |   |    |       |    |   |   |<br />|-------|    |-------|    |-------|<br />    G            H            I    <br />(图 1)</code></pre><p>现在需要用最少的移动，将9个时钟的指针都拨到12点的位置。共允许有9种不同的移动。如下表所示，每个移动会将若干个时钟的指针沿顺时针方向拨动90度。<br /><br /><br /></p><pre><code>移动    影响的时钟<br /> <br /> 1         ABDE<br /> 2         ABC<br /> 3         BCEF<br /> 4         ADG<br /> 5         BDEFH<br /> 6         CFI<br /> 7         DEGH<br /> 8         GHI<br /> 9         EFHI    </code></pre>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">9个整数，表示各时钟指针的起始位置，相邻两个整数之间用单个空格隔开。其中，0=12点、1=3点、2=6点、3=9点。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输出一个最短的时钟指针移动序列，使得9个时钟的指针都指向12点。按照移动的序号从小到大输出结果。相邻两个整数之间用单个空格隔开。</span><br /></p>",
          "hint": "",
          "source": "xmu",
          "samples": [
            {
              "input": "3 3 0 \n2 2 2 \n2 1 2 ",
              "output": "4 5 8 9 "
            }
          ]
        },
        {
          "id": "LinK26",
          "title": "算24",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK26/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK26-5948c45c47.png\" width=\"600\" height=\"321.0459183673469\" /><br /></span></p><p><span style=\"color: rgb(35, 31, 23);\">林克来到怪物商店，决定开始挑战一道难题：算24！</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">题目是：给出4个小于10的非负整数，你可以使用加减乘除4种运算以及括号把这4个数连接起来得到一个表达式。</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">现在的问题是，是否存在一种方式使得得到的表达式的结果等于24。</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">这里加减乘除以及括号的运算结果和运算的优先级跟我们平常的定义一致（这里的除法定义是实数除法）。</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">比如，对于5，5，5，1，我们知道5 * (5 – 1 / 5) = 24，因此可以得到24。又比如，对于1，1，4，2，我们怎么都不能得到24。</span></p><p style=\"margin-left: 40px;\"><span style=\"color: rgb(35, 31, 23);\">注意：输入数字的次序可以改变。</span></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输入数据包括多行，每行给出一组测试数据，包括4个小于10的非负整数。最后一组测试数据中包括4个0，表示输入的结束，这组数据不用处理。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">对于每一组测试数据，输出一行，如果可以得到24，输出“YES”；否则，输出“NO”。</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV12E411E7u9\" target=\"_blank\">Andy的讲解(2020)</a><br /></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "5 5 5 1\n1 1 4 2\n0 0 0 0",
              "output": "YES\nNO"
            }
          ]
        },
        {
          "id": "LinK27",
          "title": "大数排序",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK27/",
          "timeLimit": 50,
          "memoryLimit": 251,
          "description": "<p>小鲁虽然编程能力很一般，但是嘴皮子上不服输。他很喜欢拿自己不懂的问题考小华。</p><p>刚学会冒泡排序的他，决定挑战一下小华的智商：</p><p style=\"margin-left: 0px;\">给定你一个长度为n的整数数列。</p><p>请你对这个数列按照从小到大进行排序。</p><p>并将排好序的数列按顺序输出。</p><p>小鲁刻意隐瞒了数据的规模，你觉得小华能够搞定吗?</p><p>偷偷告诉你：<span style=\"color: rgb(227, 55, 55);\">1≤n≤100000</span><span style=\"color: rgb(227, 55, 55);\">，所有整数均在1--10^9范围内</span></p><p><span style=\"color: rgb(227, 55, 55);\"><span style=\"color: rgb(51, 51, 51);\">后记：小华使用快速排序秒过，小鲁惨败，因为他看不懂小华的代码......</span><br /></span></p>",
          "inputDescription": "<p><span style=\"color: rgb(51, 51, 51);\">输入共两行，第一行包含整数 n。</span><br /></p><p><span style=\"color: rgb(51, 51, 51);\"><span style=\"color: rgb(51, 51, 51);\">第二行包含 n 个整数，<span style=\"color: rgb(51, 51, 51);\">表示整个数列。</span></span><br /></span></p>",
          "outputDescription": "<p><span style=\"color: rgb(51, 51, 51);\">输出共一行，包含 n 个整数，表示排好序的数列。</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1SZ4y1w7dZ\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
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
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint a[100001];\r\n\r\nvoid quick_sort(int arr[],int l,int r)\r\n{\r\n    if(l>=r)return;\r\n    int i=l-1,j=r+1,x=arr[l];\r\n    while(i<j)\r\n    {\r\n       do i++; while(a[i]<x);\r\n       do j--; while(a[j]>x);\r\n       if(i<j)swap(a[i],a[j]);\r\n    }\r\n    quick_sort(a,l,j);//ij对调\r\n    quick_sort(a,j+1,r);\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    scanf(\"%d\",&n);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }\r\n    quick_sort(a,0,n-1);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        printf(\"%d \",a[i]);\r\n    }\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "LinK28",
          "title": "快速选择第k个数",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK28/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>给定一个长度为n的整数数列，以及一个整数k，请用快速选择算法求出数列的第k小的数是多少。<br /></p>",
          "inputDescription": "<p>第一行包含两个整数 n 和 k。</p><p>第二行包含 n 个整数（所有整数均在1--10^9范围内），表示整数数列。</p><p><span style=\"color: rgb(227, 55, 55);\">数据范围:1≤n≤100000,1≤k≤n</span></p>",
          "outputDescription": "<p><span style=\"color: rgb(51, 51, 51);\">输出一个整数，表示数列的第k小数。</span><br /></p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1AK4y1S7wE\" target=\"_blank\">Andy讲解(2021)</a></p><p><a href=\"https://www.acwing.com/problem/content/788/\" target=\"_blank\">原题链接</a></p>",
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
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint quick_sort(int arr[],int l,int r,int k)\r\n{\r\n    if(l>=r)return arr[l];\r\n    int i=l-1,j=r+1,x=arr[l+r>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(arr[i]<x);\r\n        do j--;while(arr[j]>x);\r\n        if(i<j)swap(arr[i],arr[j]);\r\n    }\r\n    int s1=j-l+1;\r\n    if(s1>=k)return quick_sort(arr,l,j,k);\r\n    else return quick_sort(arr,j+1,r,k-s1);\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    int n,k,a[100001];\r\n    cin>>n>>k;\r\n    for(int i=0;i<n;i++) cin>>a[i];\r\n\r\n    cout<<quick_sort(a,0,n-1,k)<<endl;\r\n\r\n}"
          }
        },
        {
          "id": "LinK29",
          "title": "输出前k大的数",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK29/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\">给定一个数组，统计前k大的数并且把这k个数从大到小输出。</span><br /></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">第一行包含一个整数n，表示数组的大小。n &lt; 100000。</span></p><p><span style=\"color: rgb(35, 31, 23);\">第二行包含n个整数，表示数组的元素，整数之间以一个空格分开。每个整数的绝对值不超过100000000。</span></p><p><span style=\"color: rgb(35, 31, 23);\">第三行包含一个整数k。k &lt; n。</span></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">从大到小输出前k大的数，每个数一行。</span><br /></p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/av95375978\" target=\"_blank\">归并排序讲解</a></p><p><a href=\"https://www.bilibili.com/video/av95376260\" target=\"_blank\">快速排序讲解</a></p><p><a href=\"https://www.bilibili.com/video/av95376767\" target=\"_blank\">Andy的讲解</a></p><p>参考：<a href=\"http://cxsjsxmooc.openjudge.cn/2020t2spring5/001/\" target=\"_blank\">http://cxsjsxmooc.openjudge.cn/2020t2spring5/001/</a></p>",
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
            "code": "#include<iostream>\r\nusing namespace std;\r\ntypedef long long LL;\r\nLL a[100001];\r\nvoid quick_sort(LL arr[],LL l,LL r)\r\n{\r\n    if(l>=r)return;\r\n    LL i=l-1,j=r+1,x=arr[l+r>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(a[i]<x);\r\n        do j--;while(a[j]>x);\r\n        if(i<j)swap(a[i],a[j]);\r\n    }\r\n    quick_sort(a,l,j);\r\n    quick_sort(a,j+1,r);\r\n}\r\n\r\n\r\n\r\nint main()\r\n{\r\n    LL n,k;\r\n    scanf(\"%lld\",&n);\r\n    for(LL i=0;i<n;i++)//数据较多用scanf比较快\r\n        scanf(\"%lld\",&a[i]);\r\n    scanf(\"%lld\",&k);\r\n    quick_sort(a,0,n-1);\r\n    for(LL i=n-1,j=0;j<k;i--,j++)\r\n    {\r\n        printf(\"%lld\\n\",a[i]);\r\n    }\r\n    return 0;\r\n\r\n}"
          }
        },
        {
          "id": "LinK30",
          "title": "归并排序",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK30/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\">给定你一个长度为n的整数数列。</p><p>请你使用归并排序对这个数列按照从小到大进行排序。</p><p>并将排好序的数列按顺序输出。</p>",
          "inputDescription": "<p>输入共两行，第一行包含整数 n。</p><p>第二行包含 n 个整数（所有整数均在1~109109范围内），表示整个数列。</p><p><span style=\"color: rgb(227, 55, 55);\">数据范围:</span><span style=\"color: rgb(227, 55, 55);\">1</span><span style=\"color: rgb(227, 55, 55);\">≤</span><span style=\"color: rgb(227, 55, 55);\">n</span><span style=\"color: rgb(227, 55, 55);\">≤</span><span style=\"color: rgb(227, 55, 55);\">100000</span></p>",
          "outputDescription": "<p><span style=\"color: rgb(51, 51, 51);\">输出共一行，包含 n 个整数，表示排好序的数列。</span><br /></p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1PK411w7m8\" target=\"_blank\">Andy讲解(2021)</a><br /></p><p><a href=\"https://www.acwing.com/video/229/\" target=\"_blank\">原题链接</a></p>",
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
            "code": "#include<iostream>\r\nusing namespace std;\r\nint temp[100001],a[100001],n;\r\nvoid merge_sort(int arr[],int l,int r)\r\n{\r\n    if(l>=r)return;\r\n    int mid=l+r>>1;\r\n    merge_sort(arr,l,mid),merge_sort(arr,mid+1,r);\r\n    int p0=0,p1=l,p2=mid+1;\r\n    while(p1<=mid&&p2<=r)\r\n    {\r\n        if(arr[p1]<=arr[p2])temp[p0++]=arr[p1++];\r\n        else temp[p0++]=arr[p2++];\r\n    }\r\n    while(p1<=mid)temp[p0++]=arr[p1++];\r\n    while(p2<=r)temp[p0++]=arr[p2++];\r\n    for(int i=l,k=0;i<=r;i++,k++)arr[i]=temp[k];\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)scanf(\"%d\",&a[i]);\r\n    merge_sort(a,0,n-1);\r\n    for(int i=0;i<n;i++)cout<<a[i]<<\" \";\r\n}"
          }
        },
        {
          "id": "LinK31",
          "title": "求排列的逆序数",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK31/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>在Internet上的搜索引擎经常需要对信息进行比较，比如可以通过某个人对一些事物的排名来估计他（或她）对各种不同信息的兴趣，从而实现个性化的服务。</p><p>对于不同的排名结果可以用逆序来评价它们之间的差异。考虑1,2,…,n的排列i1，i2，…，in，如果其中存在j,k，满足 j &lt; k 且ij&gt; ik， 那么就称(ij,ik)是这个排列的一个逆序。</p><p>一个排列含有逆序的个数称为这个排列的逆序数。</p><p>例如排列 263451 含有8个逆序(2,1),(6,3),(6,4),(6,5),(6,1),(3,1),(4,1),(5,1)，因此该排列的逆序数就是8。</p><p>显然，由1,2,…,n 构成的所有n!个排列中，最小的逆序数是0，对应的排列就是1,2,…,n；最大的逆序数是n(n-1)/2，对应的排列就是n,(n-1),…,2,1。</p><p>逆序数越大的排列与原始排列的差异度就越大。</p><p>现给定1,2,…,n的一个排列，求它的逆序数。</p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">第一行是一个整数n，表示该排列有n个数（n &lt;= 100000)。</span></p><p><span style=\"color: rgb(35, 31, 23);\">第二行是n个不同的正整数，之间以空格隔开，表示该排列。</span></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输出该排列的逆序数。</span><br /></p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV14X4y1G77n\" target=\"_blank\">Andy讲解(2021)</a><br /></p><p><a href=\"https://www.bilibili.com/video/av95376969\" target=\"_blank\">Andy的讲解(2020)</a></p><p>逆序数可能很多，使用long long存储</p><p><a href=\"https://www.acwing.com/problem/content/790/\" target=\"_blank\">原题链接</a></p>",
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
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\ntypedef long long LL;\r\nconst int N=100001;\r\nLL a[N],temp[N];\r\nint n;\r\n\r\nLL merge_sort(LL arr[],int l,int r)\r\n{\r\n    LL res=0;\r\n    if(l>=r)return 0;\r\n    int mid=l+r>>1;//计算l+r的一半\r\n    res+=merge_sort(arr,l,mid);\r\n    res+=merge_sort(arr,mid+1,r);\r\n    int p0=0,p1=l,p2=mid+1;\r\n    \r\n    while(p1<=mid&&p2<=r)\r\n    {\r\n        if(arr[p1]<=arr[p2]) temp[p0++]=arr[p1++];\r\n        else {\r\n            temp[p0++]=arr[p2++];\r\n            res+=mid-p1+1;\r\n        }\r\n    }\r\n    while(p1<=mid)temp[p0++]=arr[p1++];\r\n    while(p2<=r)temp[p0++]=arr[p2++];\r\n    for(int i=l,j=0;i<=r;i++,j++)arr[i]=temp[j];\r\n    return res;\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    cout<<merge_sort(a,0,n-1)<<endl;\r\n}"
          }
        },
        {
          "id": "LinK32",
          "title": "查找指定数",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK32/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(73, 80, 96);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK32-c262dfc36e.png\" width=\"662\" height=\"337\" /><br /></span></p><p><span style=\"color: rgb(73, 80, 96);\">面对铺面而来的波克布林大军，林克需要快速制胜，所谓擒贼先擒王，林克需要锁定目标一击必杀。</span></p><p><span style=\"color: rgb(73, 80, 96);\">假设怪物大军共有N只波克布林（1&lt;=N&lt;=100000）和数组nums存储每个怪的编号。根据情报，需要击杀的目标编号是</span><span style=\"color: rgb(73, 80, 96);\">target。</span></p><p><span style=\"color: rgb(73, 80, 96);\">请从nums中迅速找出target的数组下标，如果找不到请输出-1.</span></p>",
          "inputDescription": "<p><span style=\"color: rgb(73, 80, 96);\">第一行N表示数组大小。</span></p><p><span style=\"color: rgb(73, 80, 96);\">第二行为nums的N个元素(不包含重复元素)</span></p><p><span style=\"color: rgb(73, 80, 96);\">第三行T表示接下来又T个元素需要查找。</span></p><p><span style=\"color: rgb(73, 80, 96);\">接下来T行，每行为查找的目标元素target值。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(73, 80, 96);\">输出为T个目标元素的下标，找不到输出-1</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1tA41157aa\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
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
            "code": "#include<iostream>\r\nusing namespace std;\r\nint N,T; \r\nint a[100001];\r\n\r\n\r\n\r\nint main()\r\n{\r\n    scanf(\"%d\",&N);\r\n    for(int i=0;;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }\r\n    scanf(\"%d\",&T);\r\n    for(int i=0;i<T;i++)\r\n    {\r\n        \r\n    }\r\n\r\n}"
          }
        },
        {
          "id": "LinK33",
          "title": "攻击范围",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK33/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"image.png\" src=\"assets/problem-images/LinK33-5fab93f86e.png\" width=\"513\" height=\"284\" /><br /></p><p>面对铺面而来的怪物大军，林克需要根据怪物类型进行区域攻击。</p><p>假设怪物大军共有N个怪物（1&lt;=N&lt;=100000），升序数组nums存储每个怪物的编号，同一类型的怪物编号相同。</p><p>根据情报，需要击杀的目标编号是target。</p><p>请从nums中迅速找出编号为target的怪物的数组下标范围。</p><p>如果找不到请输出-1 -1.</p>",
          "inputDescription": "<p>第一行包含整数n和q，表示数组长度和询问个数。</p><p>第二行包含n个整数（均在1~10000范围内），表示完整数组。</p><p>接下来q行，每行包含一个整数k，表示一个询问元素。</p><h4><span style=\"color: rgb(227, 55, 55);\">数据范围<br />1≤n≤100000<br />1≤q≤10000<br />1≤k≤10000</span></h4>",
          "outputDescription": "<p>共q行，每行包含两个整数，表示所求元素的起始位置和终止位置<span style=\"color: rgb(51, 51, 51);\">（位置从0开始计数）</span>。</p><p>如果数组中不存在该元素，则返回“-1 -1”。</p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1gi4y1N7XR\" target=\"_blank\">Andy讲解(2021)</a></p><p><a href=\"https://www.acwing.com/problem/content/791/\" target=\"_blank\">原题ACW789</a></p>",
          "source": "",
          "samples": [
            {
              "input": "6 3\n1 2 2 3 3 4\n3\n4\n5",
              "output": "3 4\n5 5\n-1 -1"
            }
          ]
        },
        {
          "id": "LinK34",
          "title": "求方程的根",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK34/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>看着小鲁的编程水平再次进阶，小华很欣慰，是时候教导他基本算法的时候了。</p><p>小华喊小鲁过来，对他说：今天要教你一招新招，二分法。这种分而治之的思想是算法中常见的思考方式，也是优化算法必须要掌握的利器。二分法的用途很广。我出道题，你想想要怎么用二分法做。</p><p>说着，小华在纸上写下了一个方程：</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK34-2d09457353.png\" width=\"200\" height=\"25.85034013605442\" /></p><p>请用二分法求方程的根，<span style=\"color: rgb(51, 51, 51);\">精确到小数点后9位。</span></p>",
          "inputDescription": "<p>没有输入。</p>",
          "outputDescription": "<p>5.705085930<br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1Cf4y1x7kk\" target=\"_blank\">Andy讲解(2021)</a><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "无",
              "output": "5.705085930"
            }
          ]
        },
        {
          "id": "LinK35",
          "title": "数的三次方根",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK35/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(51, 51, 51);\">给定一个浮点数n，求它的三次方根。</span><br /></p><p><span style=\"color: rgb(227, 55, 55);\">数据范围:−10000≤n≤10000</span><br /></p>",
          "inputDescription": "<p><span style=\"color: rgb(51, 51, 51);\">共一行，包含一个浮点数n。</span><br /></p>",
          "outputDescription": "<p>共一行，包含一个浮点数，表示问题的解。</p><p>注意，结果保留6位小数。</p>",
          "hint": "<p><a href=\"https://www.acwing.com/problem/content/792/\" target=\"_blank\">原题链接</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "1000.00",
              "output": "10.000000"
            }
          ]
        },
        {
          "id": "LinK36",
          "title": "最小预算值",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK36/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img src=\"assets/problem-images/LinK36-83a552bb0b.png\" alt=\"image.png\" /><br /></p><p style=\"margin-left: 0px;\">为了升级希卡之石林克来到了阿卡莱研究所。这个海拉鲁大陆最顶级的研究所，每天都要消耗大量的研究经费，</p><p style=\"margin-left: 0px;\">然而令人惊奇的是这个研究所的经费从不短缺，这完全得益于研究所制定预算的能力。</p><p style=\"margin-left: 0px;\">如果谁能搞清楚阿卡来研究所制定预算的算法，并且给出最佳预算的值，那么他就可以免费升级希卡之石。</p><p style=\"margin-left: 0px;\">林克显然不擅长做预算，作为他好朋友的你，可以出手相助吗？</p><p>已知研究所接下来N天（<span style=\"color: rgb(73, 80, 96);\">1≤N≤ 100,000</span><span style=\"color: rgb(73, 80, 96);\">）</span>每日的固定支出预计为X(N)卢比。</p><p>研究所需要将未来的N天分为M组<span style=\"color: rgb(73, 80, 96);\">(1 ≤M≤N)</span><span style=\"color: rgb(73, 80, 96);\">，</span>每组是1天或者连续的几天。</p><p>（假如第1，2，3天为一组，那么该组的总固定支出Total(1)是这三天的固定支出之和X(0)+X(1)+X(2)）</p><p>请问，如果一定要将未来的N天分为M组，<span style=\"color: rgb(51, 51, 51);\">假设分配给每组的预算是一个固定值Budget，并且</span>不同组所得到的卢比即便有结余也不可以挪用。</p><p>求能够完全满足每组支出需要的最小的<span style=\"color: rgb(51, 51, 51);\">Budget</span>值是多少。</p>",
          "inputDescription": "<p style=\"margin-left: 0px;\"><span style=\"color: rgb(35, 31, 23);\">第一行包含两个整数N,M，用单个空格隔开。</span></p><p><span style=\"color: rgb(35, 31, 23);\">第二行有N个从<span style=\"color: rgb(35, 31, 23);\">1到10000之间的整数，</span>表示接下来N天里每天的固定支出预算。</span></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">一个整数，即</span><span style=\"color: rgb(35, 31, 23);\"></span><span style=\"color: rgb(51, 51, 51);\">满足每组支出需要的最小的预算值</span><span style=\"color: rgb(51, 51, 51);\">。</span><br /></p>",
          "hint": "<p><span style=\"color: rgb(51, 51, 51);\"><a href=\"https://www.bilibili.com/video/av94908717?pop_share=1\" target=\"_blank\"></a><a href=\"https://www.bilibili.com/video/av94908717?pop_share=1\" target=\"_blank\">Andy讲解(2020)</a><br />本题改编自Guo Wei的《月度开销》</span><br /></p>",
          "source": "",
          "samples": [
            {
              "input": "7 5\n100 400 300 100 500 101 400",
              "output": "500"
            }
          ]
        },
        {
          "id": "LinK37",
          "title": "林克的蛋糕",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK37/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img src=\"assets/problem-images/LinK37-a93b3a51c9.png\" alt=\"image.png\" /><br /></p><p style=\"margin-left: 0px;\">林克被造的纪念日快要到了。根据任天堂公司的惯例，每年到这个时间都会一些蛋糕分给林克的朋友。</p><p style=\"margin-left: 0px;\">这些蛋糕有不同的口味，比如南瓜蛋糕、坚果蛋糕、西瓜蛋糕、胡萝卜蛋糕、水果蛋糕等等（有N种不同口味，大小不同的蛋糕）。<br />为了公平，每个朋友都会分到一块大小相同的蛋糕（不需要同样形状，但是要同一种口味，不允许混合口味，否则就会变成奇怪的菜肴）。<br />假设每个蛋糕都是一个高为1，半径不等的圆柱体，一共有F+1个人（F是林克的朋友个数，还要加上林克的设计者)。</p><p>所有人拿到的蛋糕是同样大小的，请问每个人拿到的蛋糕最大尺寸可以是多少？</p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">第一行包含两个正整数N和F，1 ≤ N, F ≤ 10 000，表示蛋糕的数量和朋友的数量。</span></p><p><span style=\"color: rgb(35, 31, 23);\">第二行包含N个1到10000之间的整数，表示每个蛋糕的半径。</span></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输出每个人能得到的最大的蛋糕的体积，精确到小数点后三位。</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/av94056456/\" target=\"_blank\">Andy讲解(2020)</a><br /></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "3 3\n4 3 3",
              "output": "25.133"
            }
          ]
        },
        {
          "id": "LinK38",
          "title": "林克的命运之阵",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK38/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK38-2e703396c4.png\" width=\"677\" height=\"426\" /><br /></span></p><p><span style=\"color: rgb(35, 31, 23);\">每一个人心中都有一个林克。每一个林克都不一样。在命运矩阵里面，随着选择的不同，没有哪一个林克的命运会一模一样。</span></p><p><span style=\"color: rgb(35, 31, 23);\">有一个方格型的命运矩阵，矩阵边界在无穷远处。我们做如下假设：</span></p><p><span style=\"color: rgb(35, 31, 23);\">1. 每一个格子象征林克命运中的一次抉择，每次只能从相邻的方格中做选择。</span></p><p><span style=\"color: rgb(35, 31, 23);\">2. 从某个格子出发，只能从当前方格移动一格，走到某个相邻的方格上；</span></p><p><span style=\"color: rgb(35, 31, 23);\">3.选择一旦做出就不可更改，因此走过的格子无法走第二次。</span></p><p><span style=\"color: rgb(35, 31, 23);\">4. 从命运矩阵的第1行出发，只能向下、左、右三个方向走；</span></p><p><span style=\"color: rgb(35, 31, 23);\">请问：如果最高允许在方格矩阵上走n步（也就是林克一生最多能做n个选择）。<br />那么随着n的不同，请问一共会有多少种不同选择的方案导致多少个不同的林克？<br />注意，2种走法只要有一步不一样，即被认为是不同的方案。</span></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">允许在方格上行走的步数n(n &lt;= 20)</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">经过n个选择之后，诞生的不同的林克的个数。</span><br /></p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1qZ4y1c7nj?pop_share=1\" target=\"_blank\">Andy(2021)</a></p><p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1Mz411b7DL\" target=\"_blank\">Andy(2020</a>)</p><p>改编自《踩方格》</p>",
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
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nconst int N=70;\r\nint fates[70][70];\r\n\r\nint dx[3]={0,0,1},dy[3]={1,-1,0};\r\n\r\nlong long dfs(int i,int j,int n)\r\n{\r\n    if(n==0)return 1;//步数用完，当前路径有效，计数+1\r\n    long long res=0;\r\n    fates[i][j]=1;\r\n    for(int k=0;k<3;k++)\r\n    {\r\n        int x=i+dx[k],y=j+dy[k];//移动一格\r\n        if(fates[x][y]==0)//踏入新的区域\r\n        {\r\n            res+=dfs(x,y,n-1);\r\n        }\r\n    }\r\n    fates[i][j]=0;\r\n    return res;\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<dfs(0,N/2,n);\r\n    return 0;\r\n}"
          }
        },
        {
          "id": "LinK39",
          "title": "净化迷雾森林",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK39/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK39-a1a7183cf9.png\" width=\"539\" height=\"303\" /><br /></span></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">迷雾森林被加农的玷污了，原本圣洁无比的迷雾森林，如今被彻底玷污，空气中充满着紫色的恶臭。</span></span></p><p><font>林克临危不惧，带上呼吸面罩，挥舞大师之剑的光芒，净化迷雾。林克所到之处，加农褪去，圣洁回归。</font></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">如下图，红色代表墙壁，紫色的迷雾代表需要净化的空间，金色代表林克开始净化的起点。</span></span></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">从某处开始，林克只能向</span>相邻的紫色区域移动。请问，林克总共能够净化多少区域？</span><br /></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">图1 初始状态                                                                图2   净化中.....</span><br /></span></span></p><p><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK39-d2f526aafb.png\" width=\"311\" height=\"464\" />-----<img alt=\"image.png\" src=\"assets/problem-images/LinK39-3d4235148f.png\" width=\"313\" height=\"461\" /><br /></span></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">包括多个数据集合。每个数据集合的第一行是两个整数W和H，分别表示x方向和y方向瓷砖的数量。W和H都不超过20。</span></p><p><span style=\"color: rgb(35, 31, 23);\">在接下来的H行中，每行包括W个字符。</span></p><p><span style=\"color: rgb(35, 31, 23);\">每个字符表示一个区域的状态，规则如下</span></p><p><span style=\"color: rgb(35, 31, 23);\">1）</span><span style=\"color: rgb(227, 55, 55);\">‘.’</span><span style=\"color: rgb(35, 31, 23);\">：代表紫色迷雾<img alt=\"image.png\" src=\"assets/problem-images/LinK39-7cd04e0a62.png\" width=\"42\" height=\"41\" />；</span></p><p><span style=\"color: rgb(35, 31, 23);\">2）</span><span style=\"color: rgb(227, 55, 55);\">‘#’</span><span style=\"color: rgb(35, 31, 23);\">：代表红墙<img alt=\"image.png\" src=\"assets/problem-images/LinK39-c38a7e7274.png\" width=\"41\" height=\"40\" />；</span></p><p><span style=\"color: rgb(35, 31, 23);\">3）‘@’：代表<span style=\"color: rgb(35, 31, 23);\">林克的起始位置</span><img alt=\"image.png\" src=\"assets/problem-images/LinK39-1b8220bd09.png\" width=\"43\" height=\"40\" />(该字符在每个数据集合中唯一出现一次。）</span></p><p><span style=\"color: rgb(35, 31, 23);\">当在一行中读入的是两个零时，表示输入结束。</span></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">对每个数据集合，分别输出一行，显示林克从初始位置出发能净化的迷雾数(记数时包括初始位置的迷雾)。</span><br /></p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1r64y1v7ot?pop_share=1\" target=\"_blank\">Andy(2021)</a></p><p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV13T4y1G7HP\" target=\"_blank\">Andy(2020)</a></p><p>（改编自《<a href=\"http://cxsjsxmooc.openjudge.cn/2020t2springall/018/\" target=\"_blank\">红与黑</a>》）</p>",
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
            "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nchar fates[21][21];\r\nint w,h;\r\nint dx[4]{0,0,1,-1},dy[4]={1,-1,0,0};\r\nlong long dfs(int i,int j)\r\n{\r\n    long long res=1;\r\n    fates[i][j]='#';\r\n    for(int k=0;k<4;k++)\r\n    {\r\n        int x=i+dx[k],y=j+dy[k];\r\n        if(x>=0&&y>=0&&x<h&&y<w&&fates[x][y]=='.')\r\n        {\r\n            res+=dfs(x,y);\r\n        }\r\n    }\r\n    return res;\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    while(cin>>w>>h,w||h)\r\n    {\r\n        int x,y;\r\n        for(int i=0;i<h;i++)\r\n        {\r\n            for(int j=0;j<w;j++)\r\n            {\r\n                cin>>fates[i][j];\r\n                if(fates[i][j]=='@')\r\n                {\r\n                    x=i;y=j;\r\n                }\r\n            }\r\n        }\r\n        cout<<dfs(x,y)<<endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
          }
        },
        {
          "id": "LinK40",
          "title": "骑士林克的怜悯(1)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK40/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><b></b></p><p><b><img alt=\"image.png\" src=\"assets/problem-images/LinK40-b6c5853cee.png\" width=\"476\" height=\"297\" /></b></p><p>林克驰骋在海拉鲁大陆的平原上无比自由，他想起二维空间中的国际象棋同伴，回想起自己也活在2D世代的局限，心生怜悯。</p><p>那些骑士，永远被局限在8×8的棋盘之内厮杀，他们的世界永不改变。因此，林克去到阿卡来研究所寻求帮助，他得到新的道具——变形棋盘。</p><p>这个变形棋盘可以根据输入的两个参数的（p,q）创造全新的棋盘空间。</p><p>如下图分别是<span style=\"color: rgb(51, 51, 51);\">（p,q）为</span>(3,9) , (6,3) ,以及(5,5)的棋盘空间。</p><p><b><img alt=\"image.png\" src=\"assets/problem-images/LinK40-b8a4867026.png\" width=\"362\" height=\"121\" />--<img alt=\"image.png\" src=\"assets/problem-images/LinK40-d342aa69ef.png\" width=\"121\" height=\"244\" />--<img alt=\"image.png\" src=\"assets/problem-images/LinK40-b878d932db.png\" width=\"202\" height=\"202\" /><br /></b></p><p>假设2D世界的骑士，移动的方式按字母次序有如下8种：</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK40-c7732abd82.png\" width=\"286\" height=\"273\" /><br /></p><p><font>请问对于每一种棋盘<span style=\"color: rgb(51, 51, 51);\">（p,q）</span>，2D骑士是否有一种一次遍历所有棋盘方格的路线？</font></p><p><font>如果有，请输出这条路线（若有多条路线，请输出字典序最小的路线）。</font></p><p><font>如果没有，请输出无。</font></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">输入数据第一行为正整数n，代表有多少组输入样例</span></p><p><span style=\"color: rgb(35, 31, 23);\">接下来n行是两个整数代表行p和列q, 代表变形棋盘的行列参数，其中（1 &lt;= p * q &lt;= 26）。</span><br /></p>",
          "outputDescription": "<p>每个样例的输出2行，格式如下：</p><p style=\"margin-left: 40px;\">&quot;#i:&quot; 其中i代表第i种棋盘</p><p style=\"margin-left: 40px;\">骑士跳过的每个格子（<span style=\"color: rgb(51, 51, 51);\">每个访问的格子用大写字母加数字表示），一条可行的路径输出如</span>(A1B3C1A2B4C2A3B1C3A4B2C4)，</p><p>如果没有可行方案，则第二行输出：none</p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1BK411F7ns\" target=\"_blank\">Andy(2021)</a></p><p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1uK411j7S5\" target=\"_blank\">Andy(2020)</a></p>",
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
            "code": "\r\n\r\n\r\n//A1"
          }
        },
        {
          "id": "LinK41",
          "title": "英杰们的蛋糕塔",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK41/",
          "timeLimit": 3000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(35, 31, 23);\"><img src=\"assets/problem-images/LinK41-3d477a8d08.jpg\" alt=\"查看源图像\" /><br /></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">塞尔达公主</span>的生日将近，英杰们预备绞尽脑汁要为公主作一个生日蛋糕塔。</span></p><p><span style=\"color: rgb(35, 31, 23);\">这个蛋糕塔一共有N层，每层都是圆柱体，象征英杰们合一平等的关系。</span></p><p><span style=\"color: rgb(35, 31, 23);\">蛋糕塔的总体积是 V * π 。</span></p><p><span style=\"color: rgb(35, 31, 23);\">最底层的蛋糕半径最大，最上层的蛋糕半径最小，这种结构象征英杰们稳固的生命根基。</span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">因此从底层往上层数，第i (1 &lt;= i &lt;= N) 层是半径为 r(i), 高度为h(i) 的圆柱体。当 i &lt; N 时，有r(i) &gt; r(i+ 1) 且 h(i) &gt; h(i+1)。</span></span></p><p><span style=\"color: rgb(35, 31, 23);\"><span style=\"color: rgb(35, 31, 23);\">蛋糕塔每一层圆柱体的半径r(i)和高度h(i)都是整数，象征公主英杰们不打折的忠诚。</span></span></p><p><span style=\"color: rgb(35, 31, 23);\">蛋糕塔的表面积，象征英杰们与公主的亲密关系面临的外部挑战。</span></p><p><span style=\"color: rgb(35, 31, 23);\">因此，对于给定的V和N，我们希望找到一个使表面积最小的蛋糕塔制作方案。</span></p><p><span style=\"color: rgb(35, 31, 23);\">令表面积Q = S<span style=\"color: rgb(35, 31, 23);\">* π，</span></span><span style=\"color: rgb(35, 31, 23);\">对<span style=\"color: rgb(35, 31, 23);\">给定的V和N</span>，请输出使Q最小的S是多少。</span></p><p><span style=\"color: rgb(35, 31, 23);\">（除Q外，以上所有数据皆为正整数，下图是蛋糕塔的俯视图和示意图）</span></p><p><span style=\"color: rgb(35, 31, 23);\"><img alt=\"image.png\" src=\"assets/problem-images/LinK41-062c8f50ec.png\" width=\"405\" height=\"405\" /></span><img alt=\"image.png\" src=\"assets/problem-images/LinK41-c9310fc942.png\" width=\"322\" height=\"273\" /><span style=\"color: rgb(35, 31, 23);\"><br /></span></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">有两行，第一行为V（V &lt;= 100000），表示待制作的蛋糕的体积为<span style=\"color: rgb(35, 31, 23);\">V * π</span>；第二行为N(N &lt;= 20)，表示蛋糕的层数为N。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">仅一行，是一个正整数S（若无解则S = 0）。</span><br /></p><p><font>提示：根据题意，我们无需计算<span style=\"color: rgb(35, 31, 23);\">π，因此有</span></font></p><p style=\"margin-left: 0px;\">圆柱<span style=\"color: rgb(35, 31, 23);\">体积v&#039; = r</span>*r*h<br />圆柱<span style=\"color: rgb(35, 31, 23);\">侧面积 s&#039; = 2*r*h<br /></span><span style=\"color: rgb(35, 31, 23);\">圆柱底面积c&#039;= r*r</span></p><p><font><span style=\"color: rgb(35, 31, 23);\"><br /></span></font></p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1Bp4y1C7Qs\" target=\"_blank\">Andy讲解(B站)</a>（更正：R和H都要逐层递减，题面无误)</p><p>（改编自《生日蛋糕》，<a href=\"https://www.acwing.com/video/481/\" target=\"_blank\">Y总讲解(付费)</a>）</p><p><a href=\"https://www.acwing.com/solution/content/31876/\" target=\"_blank\">参考题解</a></p><p><a href=\"https://www.acwing.com/activity/content/code/content/136866/\" target=\"_blank\">Y总代码</a></p>",
          "source": "xmu",
          "samples": [
            {
              "input": "100\n2",
              "output": "68"
            }
          ]
        },
        {
          "id": "LinK42",
          "title": "击杀黄金蛋糕人马",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK42/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p>在海拉鲁大陆冒险，没有绝佳的剑法+想象力是不可能存活下来的。</p><p>这不，林克遇到了一个特别巨大的敌人——黄金蛋糕人马（莱尼尔的变种）</p><p><span style=\"color: rgb(51, 51, 51);\">这黄金蛋糕人马</span>长相非常特别，没有脚没有手没有嘴巴没有头，整个身材就是一个大矩形（喂喂，这不就是黄金莱尼尔吗？）</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK42-5b64bf1c6e.png\" width=\"863\" height=\"462\" /><br />它的长和宽分别是整数w、h。</p><p>林克举起大师之剑，挥向<span style=\"color: rgb(51, 51, 51);\">黄金蛋糕人马</span>，要将其切成m块矩形小块打包走，分给自己的朋友（每块都必须是矩形、且长和宽均为整数）。</p><p>大师之剑无比锐利，每一斩带出的剑气能将<span style=\"color: rgb(51, 51, 51);\">黄金蛋糕人马</span>劈成两半（形成两个小矩形蛋糕）。</p><p>经过m-1斩，<span style=\"color: rgb(51, 51, 51);\">黄金蛋糕人马</span>居然被劈成m块小蛋糕（喂喂，你的想象力也太丰富了，明明切不开好吗？）</p><p>请计算：最后得到的m块小蛋糕中，最大的那块蛋糕的面积下限。<br /><br /></p><p>假设w= 4,h= 4,m= 4，则下面的斩击可使得其中最大蛋糕块的面积最小。(十字斩)</p><p><img src=\"assets/problem-images/LinK42-43115c4ac6.gif\" /><br /></p><p><span style=\"color: rgb(35, 31, 23);\">假设</span>w<span style=\"color: rgb(35, 31, 23);\">= 4,h= 4,m= 3</span><span style=\"color: rgb(35, 31, 23);\">，则下<span style=\"color: rgb(51, 51, 51);\">面的斩击可</span>使得其中最大蛋糕块的面积最小</span><span style=\"color: rgb(35, 31, 23);\">:.(二连斩)</span><br /></p><p><span style=\"color: rgb(35, 31, 23);\"><img src=\"assets/problem-images/LinK42-994e2d19e6.gif\" /><br /></span></p>",
          "inputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">共有多行，每行表示一个测试案例。</span></p><p><span style=\"color: rgb(35, 31, 23);\">每行是三个用空格分开的整数w, h, m ，其中1 ≤ w, h, m ≤ 20 ， m ≤ wh.</span></p><p><span style=\"color: rgb(35, 31, 23);\">当 w = h = m = 0 时不需要处理，表示输入结束。</span><br /></p>",
          "outputDescription": "<p><span style=\"color: rgb(35, 31, 23);\">每个测试案例的结果占一行，输出一个整数，表示最大蛋糕块的面积下限。</span><br /></p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1ti4y1b7s1\" target=\"_blank\">Andy讲解</a><br /></p><p>改编自《<a href=\"https://www.bilibili.com/video/BV1Zb411q7iY?p=33\" target=\"_blank\">分蛋糕</a>》</p>",
          "source": "xmu",
          "samples": [
            {
              "input": "4 4 4\n4 4 3\n0 0 0",
              "output": "4\n6"
            }
          ]
        },
        {
          "id": "LinK43",
          "title": "求二进制中1的个数",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK43/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><span style=\"color: rgb(51, 51, 51);\"><img alt=\"料理.gif\" src=\"assets/problem-images/LinK43-5af5df6aee.gif\" width=\"489\" height=\"366\" /><br /></span></p><p>为了寻找失去的回忆碎片，林克必须预备足够的料理。能够快速突破数独试炼，熟练运用lowbit，才能把难题转换为美味佳肴。</p><p><span style=\"color: rgb(51, 51, 51);\">请用lowbit解决如下问题：</span></p><p><span style=\"color: rgb(51, 51, 51);\">输入一个32位整数，输出该数二进制表示中1的个数。</span><br /></p><p>注意：</p><ul><li>负数在计算机中用其绝对值的补码来表示。</li></ul>",
          "inputDescription": "<pre><code style=\"font-family: Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; font-size: inherit; padding: 0px; color: inherit; background: transparent; border-radius: 3px; margin: 0px; border: none;\">输入：9\n输出：2\n解释：9的二进制表示是1001，一共有2个1。</code></pre>",
          "outputDescription": "<pre><code style=\"font-family: Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; font-size: inherit; padding: 0px; color: inherit; background: transparent; border-radius: 3px; margin: 0px; border: none;\">输入：-2\n输出：31\n解释：-2在计算机里会被表示成11111111111111111111111111111110，\n      一共有31个1。</code></pre>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1Kf4y1S7mB\" target=\"_blank\">Andy讲解</a><br /></p>",
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
          ]
        },
        {
          "id": "LinK44",
          "title": "二进制中1的最低位位置(打表+Lowbit)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK44/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p><img alt=\"lowbit.jpg\" src=\"assets/problem-images/LinK44-12df9c1ce3.jpg\" width=\"474\" height=\"296\" /><br /></p><p>打表法是寻找回忆不可或缺的重要方法，如果配合上lowbit，那么更难的问题也能迎刃而解。</p><p>请运用打表法和lowbit算法解决如下问题：</p><p>给定一个16位的十进制数，请把该数转换为二进制数来看待。</p><p>请找到该数看为二进制后，其最低位的1出现的位置。</p><p>也就是这个数最低位的1是二进制中的第几位呢？</p>",
          "inputDescription": "<p>以1开头的二进制数的十进制表示B.</p><p>例如输入9.</p><p><img alt=\"image.png\" src=\"assets/problem-images/LinK44-a53b385fe3.png\" width=\"391\" height=\"119\" /><br /></p>",
          "outputDescription": "<p>输出K，表示B中的1在第K位（K=0,1,2....15)</p><p>9的最低位的1出现在位置0.</p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1dC4y1s7LW\" target=\"_blank\">Andy讲解</a></p><p>8 = 2^3 故需要计算以2为底的log(2^3)=3，得到第3位。也就是8的二进制表示中，1出现在第3位。<br /></p><p>用打表法计算Log2。</p>",
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
          ]
        },
        {
          "id": "LinK45",
          "title": "真假记忆碎片",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK45/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img src=\"assets/problem-images/LinK45-cbcc1d3e1b.jpg\" width=\"400\" height=\"210.5017502917153\" /><br /></p><p style=\"margin-left: 0px;\">在千辛万苦得到一个记忆碎片之后，林克需要辨别真假，若是所得到的并不是发生历史中的碎片，乃是后人捏着的，那么林克如何寻回完整的自己呢？</p><p style=\"margin-left: 0px;\">已知林克找到的记忆碎片9×9矩阵是初始矩阵A的解法，也就是记忆碎片A。空白的部分在初始矩阵中用0表示。</p><p><img src=\"https://cdn.acwing.com/media/article/image/2019/04/18/19_165f3c0a61-1.png\" alt=\"1.png\" width=\"200\" height=\"200\" /><img src=\"https://cdn.acwing.com/media/article/image/2019/04/18/19_18efab2661-2.png\" alt=\"2.png\" width=\"200\" height=\"200\" /><br /></p><p>（初始矩阵A）<span style=\"color: rgb(51, 51, 51);\">（记忆碎片A）</span></p><p>请写一个算法，判定找到的记忆碎片是否是真的？</p>",
          "inputDescription": "<p>输入的<span style=\"color: rgb(51, 51, 51);\">记忆碎片A</span>是一个9行9列的数独矩阵。</p><p>每行包含9个数字（均不超过数字为1-9）。</p><p>初始矩阵A：</p><p>530070000</p><p>600195000</p><p>098000060</p><p>800060003</p><p>400803001</p><p>700020006</p><p>060000280</p><p>000419005</p><p>000080079</p>",
          "outputDescription": "<p>如果输入数据真的是<span style=\"color: rgb(51, 51, 51);\">初始矩阵A</span>的解，输出Yes，否则输出No</p>",
          "hint": "<p><a href=\"https://www.bilibili.com/video/BV1oU4y1h7hV/\" target=\"_blank\">Andy(2021)</a><br /></p>",
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
          ]
        },
        {
          "id": "LinK46",
          "title": "寻找林克的回忆(1)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK46/",
          "timeLimit": 1000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img alt=\"image.png\" src=\"assets/problem-images/LinK46-05af94369d.png\" width=\"676\" height=\"349\" /><br /></p><p style=\"margin-left: 0px;\">为了找到百年沉睡的原因，寻回百年前与公主一起的记忆碎片，明白自己是谁，林克必须破解数独谜题。</p><p style=\"margin-left: 0px;\">林克需要在限定时间内，把9×9的数独补充完整，使得图中每行、每列、每个3 × 3的九宫格内数字1~9均恰好出现一次。</p><p style=\"margin-left: 0px;\">林克需要寻回失去的记忆碎片，你，作为林克的朋友，需要帮忙林克寻回9×9棋盘中失去的数字。</p><p style=\"margin-left: 0px;\">或许有一天，林克也能帮助你，寻回关于你是谁，你从哪里来的记忆碎片。</p><p style=\"margin-left: 0px;\">这是数独试炼I（<span style=\"color: rgb(51, 51, 51);\">解密成功可以解锁林克前25%的记忆碎片）</span></p><p><img src=\"assets/problem-images/LinK46-d814e91006.jpg\" /><br /></p>",
          "inputDescription": "<p><font>输入为9×9的数据。一共9行，每行有9个数字。</font></p><p>数字为0表示对应的数字盘为空。<br /></p>",
          "outputDescription": "<p><font>对于每个测试用例，程序应以与输入数据相同的格式打印解决方案(9×9)。</font></p><p><font>空单元格必须根据规则进行填充。</font></p><p><font>如果解决方案不是唯一的，则程序可以打印其中任何一种。</font><br /></p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1mU4y1b7WE/\" target=\"_blank\">Andy(2021)</a></p><p><a href=\"https://www.bilibili.com/video/BV1oC4y1s7sF\" target=\"_blank\">Andy(2020)</a></p><p>改编自：POJ2676<br /></p><p>《算法竞赛进阶指南》</p>",
          "source": "",
          "samples": [
            {
              "input": "103000509\n002109400\n000704000\n300502006\n060000050\n700803004\n000401000\n009205800\n804000107",
              "output": "143628579\n572139468\n986754231\n391542786\n468917352\n725863914\n237481695\n619275843\n854396127"
            }
          ]
        },
        {
          "id": "LinK47",
          "title": "寻找林克的回忆(2)",
          "url": "http://www.xmuoj.com/contest/362/problem/LinK47/",
          "timeLimit": 2000,
          "memoryLimit": 256,
          "description": "<p style=\"margin-left: 0px;\"><img alt=\"image.png\" src=\"assets/problem-images/LinK47-91cef4de90.png\" width=\"537\" height=\"307\" /><br /></p><p>为了找到百年沉睡的原因，寻回百年前与公主一起的记忆碎片，明白自己是谁，林克必须破解数独谜题：</p><p>林克需要在限定时间内，把9×9的数独补充完整，使得图中每行、每列、每个3 × 3的九宫格内数字1~9均恰好出现一次。</p><p>林克需要寻回失去的记忆碎片，你，作为林克的朋友，需要帮忙林克寻回9×9棋盘中失去的数字。</p><p>或许有一天，林克也能帮助你，寻回关于你是谁，你从哪里来的记忆碎片。</p><p><span style=\"color: rgb(51, 51, 51);\">这是数独试炼II（</span><span style=\"color: rgb(51, 51, 51);\">解密成功可以解锁林克25%的记忆碎片）</span><br /></p><p><span style=\"color: rgb(51, 51, 51);\">请编写一个程序填写数独。</span><br /></p><p><span style=\"color: rgb(51, 51, 51);\"><img src=\"assets/problem-images/LinK47-93b57e26e8.png\" alt=\"数独.png\" /><br /></span></p>",
          "inputDescription": "<p>输入包含多组测试用例。</p><p>每个测试用例占一行，包含81个字符，代表数独的81个格内数据（顺序总体由上到下，同行由左到右）。</p><p>每个字符都是一个数字（1-9）或一个”.”（表示尚未填充）。</p><p>您可以假设输入中的每个谜题都只有一个解决方案。</p><p>文件结尾处为包含单词“end”的单行，表示输入结束。</p>",
          "outputDescription": "<p>每个测试用例，输出一行数据，代表填充完全后的数独。</p>",
          "hint": "<p style=\"margin-left: 0px;\"><a href=\"https://www.bilibili.com/video/BV1uA411V7Nr/\" target=\"_blank\">Andy(2021)</a></p><p><a href=\"https://www.bilibili.com/video/BV1Ki4y1t7mf\" target=\"_blank\">Andy(2020)</a><br /></p><p><a href=\"https://www.acwing.com/problem/content/video/168/\" target=\"_blank\">ACWing讲解</a></p><p>来源：<a href=\"http://bailian.openjudge.cn/practice/2984\" target=\"_blank\">2984</a></p>",
          "source": "",
          "samples": [
            {
              "input": ".2738..1..1...6735.......293.5692.8...........6.1745.364.......9518...7..8..6534.\n......52..8.4......3...9...5.1...6..2..7........3.....6...1..........7.4.......3.\nend",
              "output": "527389416819426735436751829375692184194538267268174593643217958951843672782965341\n416837529982465371735129468571298643293746185864351297647913852359682714128574936"
            }
          ]
        }
      ]
    }
  ]
};
