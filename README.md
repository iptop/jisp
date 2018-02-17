json 格式 lisp语言解释器

条件操作
```
["do",
  ["def" , "test1" , 3],
  ["cond",
    [["=" ,"test1" ,1],["println" ,["string" , "test is eq 1"]] ],
    [["=" ,"test1" ,2],["println" ,["string" , "test is eq 2"]] ],
    [["=" ,"test1" ,3],["println" ,["string" , "test is eq 3"]] ]
  ],

  ["println",
    ["cond",
      [["=" ,"test1" ,1], ["string" , "test is eq 1"]],
      [["=" ,"test1" ,2], ["string" , "test is eq 2"]],
      ["else",["string" , "test is else"] ]]
  ]
]
```
输出
```
test is eq 3
test is else
null

```

函数定义与闭包
```
["do",
  ["def" , "generator-fun1",
    ["fn",
      [],
      ["do",
        ["def" , "count" , 0],
        ["fn" ,
          [],
          ["do",
            ["def" , "count", ["+", 1 , "count"]  ],
            "count"
          ]
        ]
      ]
    ]
  ],



  ["def" , "generator-fun2",
    ["fn",
      [],
      ["do",
        ["def" , "count" , 0],
        ["fn" ,
          [],
          ["do",
            ["def" , "count", ["+", 1 , "count"]  ],
            "count"
          ]
        ]
      ]
    ]
  ],



  ["def" ,"test-fun1", ["generator-fun1"]],
  ["def" ,"test-fun2", ["generator-fun2"]],

  ["println" , ["test-fun1"]],
  ["println" , ["test-fun1"]],
  ["println" , ["test-fun1"]],

  ["println" , ["string" , ""]],

  ["println" , ["test-fun2"]],
  ["println" , ["test-fun2"]],
  ["println" , ["test-fun2"]],

  "count"

]
```
输出
```
1
2
3

1
2
3
{ type: 'atom', value: 'count' }

```
