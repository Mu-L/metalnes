

/*


1 OE Output enable
2 O0, 
3 D0
4 D1, 
5 O1, 
6 O2, 
7 D2, 
8 D3, 
9 O3, 
10 GND, 


11 LE Latch enable
12 O4, 
13 D4, 
14 D5, 
15 O5, 
16 O6, 
17 D6, 
18 D7, 
19 O7, 

20 Vcc.


 */



var module = {
    
name: "74LS373",
    
description: "Transparent latch",
    
pins : [
    [ 1, 'OE'	],
    [ 2, 'o0'	],
    [ 3, 'd0'	],
    [ 4, 'd1'	],
    [ 5, 'o1'	],
    [ 6, 'o2'	],
    [ 7, 'd2'	],
    [ 8, 'd3'  ],    
    [ 9, 'o3'  ],        
    [10, 'vss'	],

    [11, 'LE'   ],
    [12, 'o4'   ],
    [13, 'd4'   ],
    [14, 'd5'   ],
    [15, 'o5'   ],
    [16, 'o6'   ],
    [17, 'd6'   ],
    [18, 'd7'  ],    
    [19, 'o7'  ],        
    [20, 'vcc'  ],

],

nodenames:
{

    /*
    1 OE Output enable
    2 O0,
    3 D0
    4 D1,
    5 O1,
    6 O2,
    7 D2,
    8 D3,
    9 O3,
    10 GND,


    11 LE Latch enable
    12 O4,
    13 D4,
    14 D5,
    15 O5,
    16 O6,
    17 D6,
    18 D7,
    19 O7,

    20 Vcc.

     */


    vcc: 1,
    vss: 2,

    'LE': 10, // latch enable
    'OE': 11, // output enable

    '/LE': 12, // inverse latch enable
    '/OE': 13, // inverse output enable


    o0:100,
    o1:110,
    o2:120,
    o3:130,
    o4:140,
    o5:150,
    o6:160,
    o7:170,

    d0:101,
    d1:111,
    d2:121,
    d3:131,
    d4:141,
    d5:151,
    d6:161,
    d7:171,



    'q0':  102,
    '/q0': 103,
    's0':  104, // set
    'r0':  105, // reset
    '/d0': 106,

    'q1':  112,
    '/q1': 113,
    's1':  114, // set
    'r1':  115, // reset
    '/d1': 116,

    'q2':  122,
    '/q2': 123,
    's2':  124, // set
    'r2':  125, // reset
    '/d2': 126,

    'q3':  132,
    '/q3': 133,
    's3':  134, // set
    'r3':  135, // reset
    '/d3': 136,

    'q4':  142,
    '/q4': 143,
    's4':  144, // set
    'r4':  145, // reset
    '/d4': 146,

    'q5':  152,
    '/q5': 153,
    's5':  154, // set
    'r5':  155, // reset
    '/d5': 156,

    'q6':  162,
    '/q6': 163,
    's6':  164, // set
    'r6':  165, // reset
    '/d6': 166,

    'q7':  172,
    '/q7': 173,
    's7':  174, // set
    'r7':  175, // reset
    '/d7': 176,

},
    
transdefs:
[
    ['t','LE',           '/LE',          2               ],
    ['t','OE',           '/OE',          2               ],

    ['t','d0',           '/d0',          2               ],
    ['t','/d0',          's0',           2               ],
    ['t','/LE',          's0',           2               ],
    ['t','d0',           'r0',           2               ],
    ['t','/LE',          'r0',           2               ],
    ['t','q0',           '/q0',          2               ],
    ['t','/q0',          'q0',           2               ],
    ['t','s0',           '/q0',          2               ],
    ['t','r0',           'q0',           2               ],
    ['t','/OE',          'q0',           'o0'            ],

    ['t','d1',           '/d1',          2               ],
    ['t','/d1',          's1',           2               ],
    ['t','/LE',          's1',           2               ],
    ['t','d1',           'r1',           2               ],
    ['t','/LE',          'r1',           2               ],
    ['t','q1',           '/q1',          2               ],
    ['t','/q1',          'q1',           2               ],
    ['t','s1',           '/q1',          2               ],
    ['t','r1',           'q1',           2               ],
    ['t','/OE',          'q1',           'o1'            ],

    ['t','d2',           '/d2',          2               ],
    ['t','/d2',          's2',           2               ],
    ['t','/LE',          's2',           2               ],
    ['t','d2',           'r2',           2               ],
    ['t','/LE',          'r2',           2               ],
    ['t','q2',           '/q2',          2               ],
    ['t','/q2',          'q2',           2               ],
    ['t','s2',           '/q2',          2               ],
    ['t','r2',           'q2',           2               ],
    ['t','/OE',          'q2',           'o2'            ],

    ['t','d3',           '/d3',          2               ],
    ['t','/d3',          's3',           2               ],
    ['t','/LE',          's3',           2               ],
    ['t','d3',           'r3',           2               ],
    ['t','/LE',          'r3',           2               ],
    ['t','q3',           '/q3',          2               ],
    ['t','/q3',          'q3',           2               ],
    ['t','s3',           '/q3',          2               ],
    ['t','r3',           'q3',           2               ],
    ['t','/OE',          'q3',           'o3'            ],

    ['t','d4',           '/d4',          2               ],
    ['t','/d4',          's4',           2               ],
    ['t','/LE',          's4',           2               ],
    ['t','d4',           'r4',           2               ],
    ['t','/LE',          'r4',           2               ],
    ['t','q4',           '/q4',          2               ],
    ['t','/q4',          'q4',           2               ],
    ['t','s4',           '/q4',          2               ],
    ['t','r4',           'q4',           2               ],
    ['t','/OE',          'q4',           'o4'            ],

    ['t','d5',           '/d5',          2               ],
    ['t','/d5',          's5',           2               ],
    ['t','/LE',          's5',           2               ],
    ['t','d5',           'r5',           2               ],
    ['t','/LE',          'r5',           2               ],
    ['t','q5',           '/q5',          2               ],
    ['t','/q5',          'q5',           2               ],
    ['t','s5',           '/q5',          2               ],
    ['t','r5',           'q5',           2               ],
    ['t','/OE',          'q5',           'o5'            ],

    ['t','d6',           '/d6',          2               ],
    ['t','/d6',          's6',           2               ],
    ['t','/LE',          's6',           2               ],
    ['t','d6',           'r6',           2               ],
    ['t','/LE',          'r6',           2               ],
    ['t','q6',           '/q6',          2               ],
    ['t','/q6',          'q6',           2               ],
    ['t','s6',           '/q6',          2               ],
    ['t','r6',           'q6',           2               ],
    ['t','/OE',          'q6',           'o6'            ],

    ['t','d7',           '/d7',          2               ],
    ['t','/d7',          's7',           2               ],
    ['t','/LE',          's7',           2               ],
    ['t','d7',           'r7',           2               ],
    ['t','/LE',          'r7',           2               ],
    ['t','q7',           '/q7',          2               ],
    ['t','/q7',          'q7',           2               ],
    ['t','s7',           '/q7',          2               ],
    ['t','r7',           'q7',           2               ],
    ['t','/OE',          'q7',           'o7'            ],
],
    
segdefs:
[
 ['/LE'           , '+', 0],
 ['/OE'           , '+', 0],

 ['q0'            , '+', 0],
 ['/q0'           , '+', 0],
 ['s0'            , '+', 0],
 ['r0'            , '+', 0],
 ['/d0'           , '+', 0],
 
 ['q1'            , '+', 0],
 ['/q1'           , '+', 0],
 ['s1'            , '+', 0],
 ['r1'            , '+', 0],
 ['/d1'           , '+', 0],

 ['q2'            , '+', 0],
 ['/q2'           , '+', 0],
 ['s2'            , '+', 0],
 ['r2'            , '+', 0],
 ['/d2'           , '+', 0],

 ['q3'            , '+', 0],
 ['/q3'           , '+', 0],
 ['s3'            , '+', 0],
 ['r3'            , '+', 0],
 ['/d3'           , '+', 0],

 ['q4'            , '+', 0],
 ['/q4'           , '+', 0],
 ['s4'            , '+', 0],
 ['r4'            , '+', 0],
 ['/d4'           , '+', 0],

 ['q5'            , '+', 0],
 ['/q5'           , '+', 0],
 ['s5'            , '+', 0],
 ['r5'            , '+', 0],
 ['/d5'           , '+', 0],

 ['q6'            , '+', 0],
 ['/q6'           , '+', 0],
 ['s6'            , '+', 0],
 ['r6'            , '+', 0],
 ['/d6'           , '+', 0],

 ['q7'            , '+', 0],
 ['/q7'           , '+', 0],
 ['s7'            , '+', 0],
 ['r7'            , '+', 0],
 ['/d7'           , '+', 0],
],



};