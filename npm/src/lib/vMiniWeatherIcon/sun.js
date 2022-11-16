/* eslint-disable */
/* 太阳 */
import { checkColor } from './unit'

/* 大太阳-全 */
export const sunFill = (color) => {
  return sunTemplate('fill', color)
}
/* 大太阳-线 */
export const sunLine = (color) => {
  return sunTemplate('line', color)
}
/* 小太阳-全 */
export const smallSunFill = (color) => {
  return sunSmallTemplate('fill', color)
}
/* 小太阳-线 */
export const smallSunLine = (color) => {
  return sunSmallTemplate('line', color)
}
/* 大太阳-模板 */
const sunTemplate = (type, color) => {
  const raysStrokeWidth = type === 'line' ? 20 : 24
  const raysStrokeColor = color && checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : [0.984313726425, 0.749019622803, 0.141176477075, 1]
  const coreFill = coreFillTemplate(type, 'big', color)
  return [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'rays',
      sr: 1,
      ks: {
        o: {
          a: 0,
          k: 100,
          ix: 11
        },
        r: {
          a: 1,
          k: [
            {
              i: {
                x: [
                  0.833
                ],
                y: [
                  0.833
                ]
              },
              o: {
                x: [
                  0.167
                ],
                y: [
                  0.167
                ]
              },
              t: 0,
              s: [
                0
              ]
            },
            {
              t: 359,
              s: [
                45
              ]
            }
          ],
          ix: 10
        },
        p: {
          a: 0,
          k: [
            256,
            256,
            0
          ],
          ix: 2
        },
        a: {
          a: 0,
          k: [
            0,
            0,
            0
          ],
          ix: 1
        },
        s: {
          a: 0,
          k: [
            80,
            80,
            80
          ],
          ix: 6
        }
      },
      ao: 0,
      shapes: [
        {
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              o: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              v: [
                [
                  180,
                  0
                ],
                [
                  130.345,
                  0
                ]
              ],
              c: false
            },
            ix: 2
          },
          hd: false
        },
        {
          ind: 1,
          ty: 'sh',
          ix: 2,
          ks: {
            a: 0,
            k: {
              i: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              o: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              v: [
                [
                  -130.345,
                  0
                ],
                [
                  -180,
                  0
                ]
              ],
              c: false
            },
            ix: 2
          },
          hd: false
        },
        {
          ind: 2,
          ty: 'sh',
          ix: 3,
          ks: {
            a: 0,
            k: {
              i: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              o: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              v: [
                [
                  127.279,
                  127.279
                ],
                [
                  92.168,
                  92.168
                ]
              ],
              c: false
            },
            ix: 2
          },
          hd: false
        },
        {
          ind: 3,
          ty: 'sh',
          ix: 4,
          ks: {
            a: 0,
            k: {
              i: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              o: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              v: [
                [
                  -92.168,
                  -92.168
                ],
                [
                  -127.279,
                  -127.279
                ]
              ],
              c: false
            },
            ix: 2
          },
          hd: false
        },
        {
          ind: 4,
          ty: 'sh',
          ix: 5,
          ks: {
            a: 0,
            k: {
              i: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              o: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              v: [
                [
                  -127.279,
                  127.279
                ],
                [
                  -92.168,
                  92.168
                ]
              ],
              c: false
            },
            ix: 2
          },
          hd: false
        },
        {
          ind: 5,
          ty: 'sh',
          ix: 6,
          ks: {
            a: 0,
            k: {
              i: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              o: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              v: [
                [
                  92.168,
                  -92.168
                ],
                [
                  127.279,
                  -127.279
                ]
              ],
              c: false
            },
            ix: 2
          },
          hd: false
        },
        {
          ind: 6,
          ty: 'sh',
          ix: 7,
          ks: {
            a: 0,
            k: {
              i: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              o: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              v: [
                [
                  0,
                  180
                ],
                [
                  0,
                  130.345
                ]
              ],
              c: false
            },
            ix: 2
          },
          hd: false
        },
        {
          ind: 7,
          ty: 'sh',
          ix: 8,
          ks: {
            a: 0,
            k: {
              i: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              o: [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ],
              v: [
                [
                  0,
                  -130.345
                ],
                [
                  0,
                  -180
                ]
              ],
              c: false
            },
            ix: 2
          },
          hd: false
        },
        {
          ty: 'st',
          c: {
            a: 0,
            k: raysStrokeColor,
            ix: 3
          },
          o: {
            a: 0,
            k: 100,
            ix: 4
          },
          w: {
            a: 0,
            k: raysStrokeWidth,
            ix: 5
          },
          lc: 2,
          lj: 1,
          ml: 10,
          bm: 0,
          hd: false
        }
      ],
      ip: 0,
      op: 360,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'core',
      sr: 1,
      ks: {
        o: {
          a: 0,
          k: 100,
          ix: 11
        },
        r: {
          a: 0,
          k: 0,
          ix: 10
        },
        p: {
          a: 0,
          k: [
            256,
            256,
            0
          ],
          ix: 2
        },
        a: {
          a: 0,
          k: [
            0,
            0,
            0
          ],
          ix: 1
        },
        s: {
          a: 0,
          k: [
            80,
            80,
            80
          ],
          ix: 6
        }
      },
      ao: 0,
      shapes: [
        {
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [
                [
                  0,
                  -46.392
                ],
                [
                  46.392,
                  0
                ],
                [
                  0,
                  46.392
                ],
                [
                  -46.392,
                  0
                ]
              ],
              o: [
                [
                  0,
                  46.392
                ],
                [
                  -46.392,
                  0
                ],
                [
                  0,
                  -46.392
                ],
                [
                  46.392,
                  0
                ]
              ],
              v: [
                [
                  84,
                  0
                ],
                [
                  0,
                  84
                ],
                [
                  -84,
                  0
                ],
                [
                  0,
                  -84
                ]
              ],
              c: true
            },
            ix: 2
          },
          hd: false
        },
        ...coreFill
      ],
      ip: 0,
      op: 360,
      st: 0,
      bm: 0
    }
  ]
}
/* 单色描边 */
const strokeTemplate = (strokeColor, strokeWidth) => {
  return {
    ty: 'st',
    c: {
      a: 0,
      k: strokeColor,
      ix: 3
    },
    o: {
      a: 0,
      k: 100,
      ix: 4
    },
    w: {
      a: 0,
      k: strokeWidth,
      ix: 5
    },
    lc: 1,
    lj: 1,
    ml: 10,
    bm: 0,
    hd: false
  }
}
/* 太阳圆球描边宽度 */
const getCoreStrokeWidth = (type, size) => {
  return type === 'line' ? (size === 'small' ? 9 : 20) : (size === 'small' ? 4 : 6)
}
/* 太阳圆球-填充方式-单色描边/渐变填充/单色填充 */
const coreFillTemplate = (type, size, color) => {
  const coreStrokeWidth = getCoreStrokeWidth(type, size)
  const coreColor = color && checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : (type === 'line' ? [0.984313726425, 0.749019622803, 0.141176477075, 1] : [0.972549021244, 0.686274528503, 0.0941176489, 1])
  if (type === 'line') {
    return [strokeTemplate(coreColor, coreStrokeWidth)]
  } else {
    if (color && checkColor(color)) {
      return [strokeTemplate(coreColor, coreStrokeWidth), {
        ty: 'fl',
        c: {
          a: 0,
          k: coreColor,
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 12,
          ix: 5
        },
        lc: 2,
        lj: 1,
        ml: 10,
        bm: 0,
        hd: false
      }]
    } else {
      const gradient_s_k = size === 'small' ? [-21, -35] : [-41.517, -71.871]
      const gradient_e_k = size === 'small' ? [19.007, 34.294] : [42.497, 73.645]
      return [strokeTemplate(coreColor, coreStrokeWidth), {
        ty: 'gf',
        o: {
          a: 0,
          k: 100,
          ix: 10
        },
        r: 1,
        bm: 0,
        g: {
          p: 5,
          k: {
            a: 0,
            k: [
              0,
              0.984,
              0.749,
              0.141,
              0.225,
              0.984,
              0.749,
              0.141,
              0.45,
              0.984,
              0.749,
              0.141,
              0.725,
              0.973,
              0.684,
              0.092,
              1,
              0.961,
              0.62,
              0.043
            ],
            ix: 9
          }
        },
        s: {
          a: 0,
          k: gradient_s_k,
          ix: 5
        },
        e: {
          a: 0,
          k: gradient_e_k,
          ix: 6
        },
        t: 1,
        hd: false
      }]
    }
  }
}
/* 小太阳-模板 */
const sunSmallTemplate = (type, color) => {
  const raysStrokeWidth = type === 'line' ? 9 : 12
  const raysStrokeColor = color && checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : [0.984313726425, 0.749019622803, 0.141176477075, 1]
  const coreFill = coreFillTemplate(type, 'small', color)
  const template = {
    ddd: 0,
    ind: 3,
    ty: 4,
    nm: 'sun',
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          154,
          207,
          0
        ],
        ix: 2,
        l: 2
      },
      a: {
        a: 0,
        k: [
          154,
          207,
          0
        ],
        ix: 1,
        l: 2
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6,
        l: 2
      }
    },
    ao: 0,
    shapes: [
      {
        ty: 'gr',
        it: [
          {
            ind: 0,
            ty: 'sh',
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    -22.091
                  ],
                  [
                    22.091,
                    0
                  ],
                  [
                    0,
                    22.091
                  ],
                  [
                    -22.091,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    22.091
                  ],
                  [
                    -22.091,
                    0
                  ],
                  [
                    0,
                    -22.091
                  ],
                  [
                    22.091,
                    0
                  ]
                ],
                v: [
                  [
                    40,
                    0
                  ],
                  [
                    0,
                    40
                  ],
                  [
                    -40,
                    0
                  ],
                  [
                    0,
                    -40
                  ]
                ],
                c: true
              },
              ix: 2
            },
            hd: false
          },
          ...coreFill,
          {
            ty: 'tr',
            p: {
              a: 0,
              k: [
                154,
                207
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            }
          }
        ],
        nm: 'sun-core',
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        hd: false
      },
      {
        ty: 'gr',
        it: [
          {
            ind: 0,
            ty: 'sh',
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    92,
                    0
                  ],
                  [
                    66.621,
                    0
                  ]
                ],
                c: false
              },
              ix: 2
            },
            hd: false
          },
          {
            ind: 1,
            ty: 'sh',
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -92,
                    0
                  ],
                  [
                    -66.621,
                    0
                  ]
                ],
                c: false
              },
              ix: 2
            },
            hd: false
          },
          {
            ind: 2,
            ty: 'sh',
            ix: 3,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    65.054,
                    65.054
                  ],
                  [
                    47.108,
                    47.108
                  ]
                ],
                c: false
              },
              ix: 2
            },
            hd: false
          },
          {
            ind: 3,
            ty: 'sh',
            ix: 4,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -47.108,
                    -47.108
                  ],
                  [
                    -65.054,
                    -65.054
                  ]
                ],
                c: false
              },
              ix: 2
            },
            hd: false
          },
          {
            ind: 4,
            ty: 'sh',
            ix: 5,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -65.054,
                    65.054
                  ],
                  [
                    -47.108,
                    47.108
                  ]
                ],
                c: false
              },
              ix: 2
            },
            hd: false
          },
          {
            ind: 5,
            ty: 'sh',
            ix: 6,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    47.108,
                    -47.108
                  ],
                  [
                    65.054,
                    -65.054
                  ]
                ],
                c: false
              },
              ix: 2
            },
            hd: false
          },
          {
            ind: 6,
            ty: 'sh',
            ix: 7,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    0,
                    92
                  ],
                  [
                    0,
                    66.621
                  ]
                ],
                c: false
              },
              ix: 2
            },
            hd: false
          },
          {
            ind: 7,
            ty: 'sh',
            ix: 8,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    0,
                    -66.621
                  ],
                  [
                    0,
                    -92
                  ]
                ],
                c: false
              },
              ix: 2
            },
            hd: false
          },
          {
            ty: 'st',
            c: {
              a: 0,
              k: raysStrokeColor,
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: raysStrokeWidth,
              ix: 5
            },
            lc: 2,
            lj: 1,
            ml: 10,
            bm: 0,
            hd: false
          },
          {
            ty: 'tr',
            p: {
              a: 0,
              k: [
                154,
                207
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 1,
              k: [
                {
                  i: {
                    x: [
                      0.833
                    ],
                    y: [
                      0.833
                    ]
                  },
                  o: {
                    x: [
                      0.167
                    ],
                    y: [
                      0.167
                    ]
                  },
                  t: 0,
                  s: [
                    0
                  ]
                },
                {
                  t: 359,
                  s: [
                    45
                  ]
                }
              ],
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            }
          }
        ],
        nm: 'sun-rays',
        np: 9,
        cix: 2,
        bm: 0,
        ix: 2,
        hd: false
      }
    ],
    ip: 0,
    op: 360,
    st: 0,
    bm: 0
  }
  if (type === 'line') {
    template.hasMask = true
    template.masksProperties = [
      {
        inv: false,
        mode: 'a',
        pt: {
          a: 1,
          k: [
            {
              i: {
                x: 0.833,
                y: 0.833
              },
              o: {
                x: 0.167,
                y: 0.167
              },
              t: 0,
              s: [
                {
                  i: [
                    [
                      0,
                      0
                    ],
                    [
                      14.803,
                      -23.924
                    ],
                    [
                      10.461,
                      0
                    ],
                    [
                      0,
                      -30.928
                    ],
                    [
                      -0.484,
                      -2.963
                    ],
                    [
                      0,
                      -29.306
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ]
                  ],
                  o: [
                    [
                      -30.201,
                      0
                    ],
                    [
                      -8.378,
                      -4.994
                    ],
                    [
                      -30.928,
                      0
                    ],
                    [
                      0,
                      3.1
                    ],
                    [
                      -27.779,
                      5.25
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ]
                  ],
                  v: [
                    [
                      270.5,
                      147.5
                    ],
                    [
                      199.096,
                      187.415
                    ],
                    [
                      170.5,
                      179.5
                    ],
                    [
                      114.5,
                      235.5
                    ],
                    [
                      115.301,
                      244.583
                    ],
                    [
                      66.5,
                      303.5
                    ],
                    [
                      -5.5,
                      303.5
                    ],
                    [
                      -5.5,
                      -0.5
                    ],
                    [
                      270.5,
                      -0.5
                    ]
                  ],
                  c: true
                }
              ]
            },
            {
              i: {
                x: 0.833,
                y: 0.833
              },
              o: {
                x: 0.167,
                y: 0.167
              },
              t: 180,
              s: [
                {
                  i: [
                    [
                      0,
                      0
                    ],
                    [
                      14.803,
                      -23.924
                    ],
                    [
                      10.461,
                      0
                    ],
                    [
                      0,
                      -30.928
                    ],
                    [
                      -0.484,
                      -2.963
                    ],
                    [
                      0,
                      -29.306
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ]
                  ],
                  o: [
                    [
                      -30.201,
                      0
                    ],
                    [
                      -8.378,
                      -4.994
                    ],
                    [
                      -30.928,
                      0
                    ],
                    [
                      0,
                      3.1
                    ],
                    [
                      -27.779,
                      5.25
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ]
                  ],
                  v: [
                    [
                      306.5,
                      147.5
                    ],
                    [
                      235.096,
                      187.415
                    ],
                    [
                      206.5,
                      179.5
                    ],
                    [
                      150.5,
                      235.5
                    ],
                    [
                      151.301,
                      244.583
                    ],
                    [
                      102.5,
                      303.5
                    ],
                    [
                      30.5,
                      303.5
                    ],
                    [
                      30.5,
                      -0.5
                    ],
                    [
                      306.5,
                      -0.5
                    ]
                  ],
                  c: true
                }
              ]
            },
            {
              t: 359,
              s: [
                {
                  i: [
                    [
                      0,
                      0
                    ],
                    [
                      14.803,
                      -23.924
                    ],
                    [
                      10.461,
                      0
                    ],
                    [
                      0,
                      -30.928
                    ],
                    [
                      -0.484,
                      -2.963
                    ],
                    [
                      0,
                      -29.306
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ]
                  ],
                  o: [
                    [
                      -30.201,
                      0
                    ],
                    [
                      -8.378,
                      -4.994
                    ],
                    [
                      -30.928,
                      0
                    ],
                    [
                      0,
                      3.1
                    ],
                    [
                      -27.779,
                      5.25
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ]
                  ],
                  v: [
                    [
                      270.5,
                      147.5
                    ],
                    [
                      199.096,
                      187.415
                    ],
                    [
                      170.5,
                      179.5
                    ],
                    [
                      114.5,
                      235.5
                    ],
                    [
                      115.301,
                      244.583
                    ],
                    [
                      66.5,
                      303.5
                    ],
                    [
                      -5.5,
                      303.5
                    ],
                    [
                      -5.5,
                      -0.5
                    ],
                    [
                      270.5,
                      -0.5
                    ]
                  ],
                  c: true
                }
              ]
            }
          ],
          ix: 1
        },
        o: {
          a: 0,
          k: 100,
          ix: 3
        },
        x: {
          a: 0,
          k: 0,
          ix: 4
        },
        nm: 'Mask 1'
      }
    ]
  }
  return [template]
}
