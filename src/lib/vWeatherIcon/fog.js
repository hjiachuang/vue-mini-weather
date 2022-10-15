import {checkColor} from './unit';

const fillTemplate = (type,color) => {
    return color ? {
        "ty": "st",
        "c": {
            "a": 0,
            "k": color,
            "ix": 3
        },
        "o": {
            "a": 0,
            "k": 100,
            "ix": 4
        },
        "w": {
            "a": 0,
            "k": 20,
            "ix": 5
        },
        "lc": 2,
        "lj": 1,
        "ml": 10,
        "bm": 0,
        "hd": false
    } :
        (type === 'line' ? {
            "ty": "st",
            "c": {
                "a": 0,
                "k": [
                    0.886274516582,
                    0.909803926945,
                    0.941176474094,
                    1
                ],
                "ix": 3
            },
            "o": {
                "a": 0,
                "k": 100,
                "ix": 4
            },
            "w": {
                "a": 0,
                "k": 18,
                "ix": 5
            },
            "lc": 2,
            "lj": 1,
            "ml": 10,
            "bm": 0,
            "nm": "Stroke 1",
            "mn": "ADBE Vector Graphic - Stroke",
            "hd": false
        } : {
            "ty": "gs",
            "o": {
                "a": 0,
                "k": 100,
                "ix": 9
            },
            "w": {
                "a": 0,
                "k": 24,
                "ix": 10
            },
            "g": {
                "p": 5,
                "k": {
                    "a": 0,
                    "k": [
                        0,
                        0.831,
                        0.843,
                        0.867,
                        0.225,
                        0.831,
                        0.843,
                        0.867,
                        0.45,
                        0.831,
                        0.843,
                        0.867,
                        0.725,
                        0.788,
                        0.8,
                        0.822,
                        1,
                        0.745,
                        0.757,
                        0.776
                    ],
                    "ix": 8
                }
            },
            "s": {
                "a": 0,
                "k": [
                    -37,
                    -63
                ],
                "ix": 4
            },
            "e": {
                "a": 0,
                "k": [
                    35,
                    61.708
                ],
                "ix": 5
            },
            "t": 1,
            "lc": 2,
            "lj": 1,
            "ml": 10,
            "ml2": {
                "a": 0,
                "k": 10,
                "ix": 13
            },
            "bm": 0,
            "hd": false
        });
}

const smallFog = fill => {
    const smallFog_ks_p = [
        {
            "a": 1,
            "k": [
                {
                    "i": {
                        "x": 0.833,
                        "y": 0.833
                    },
                    "o": {
                        "x": 0.167,
                        "y": 0.167
                    },
                    "t": 0,
                    "s": [
                        232,
                        414,
                        0
                    ],
                    "to": [
                        8,
                        0,
                        0
                    ],
                    "ti": [
                        0,
                        0,
                        0
                    ]
                },
                {
                    "i": {
                        "x": 0.833,
                        "y": 0.833
                    },
                    "o": {
                        "x": 0.167,
                        "y": 0.167
                    },
                    "t": 180,
                    "s": [
                        280,
                        414,
                        0
                    ],
                    "to": [
                        0,
                        0,
                        0
                    ],
                    "ti": [
                        8,
                        0,
                        0
                    ]
                },
                {
                    "t": 359,
                    "s": [
                        232,
                        414,
                        0
                    ]
                }
            ],
            "ix": 2
        },{
            "a": 1,
            "k": [
                {
                    "i": {
                        "x": 0.833,
                        "y": 0.833
                    },
                    "o": {
                        "x": 0.167,
                        "y": 0.167
                    },
                    "t": 0,
                    "s": [
                        280,
                        462,
                        0
                    ],
                    "to": [
                        -8,
                        0,
                        0
                    ],
                    "ti": [
                        0,
                        0,
                        0
                    ]
                },
                {
                    "i": {
                        "x": 0.833,
                        "y": 0.833
                    },
                    "o": {
                        "x": 0.167,
                        "y": 0.167
                    },
                    "t": 180,
                    "s": [
                        232,
                        462,
                        0
                    ],
                    "to": [
                        0,
                        0,
                        0
                    ],
                    "ti": [
                        -8,
                        0,
                        0
                    ]
                },
                {
                    "t": 359,
                    "s": [
                        280,
                        462,
                        0
                    ]
                }
            ],
            "ix": 2
        }
    ];
    return smallFog_ks_p.map((item,index) => {
        return {
            "ddd": 0,
            "ind": index + 1,
            "ty": 4,
            "nm": "fog",
            "sr": 1,
            "ks": {
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                },
                "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                },
                "p": item,
                "a": {
                    "a": 0,
                    "k": [
                        0,
                        0,
                        0
                    ],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [
                        100,
                        100,
                        100
                    ],
                    "ix": 6
                }
            },
            "ao": 0,
            "shapes": [
                {
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0
                                ]
                            ],
                            "o": [
                                [
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0
                                ]
                            ],
                            "v": [
                                [
                                    -120,
                                    0
                                ],
                                [
                                    120,
                                    0
                                ]
                            ],
                            "c": false
                        },
                        "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                },
                fill
            ],
            "ip": 0,
            "op": 360,
            "st": 0,
            "bm": 0
        };
    });
}

const fog = fill => {
    const fog_ks_p = [
        {
            "a": 1,
            "k": [
                {
                    "i": {
                        "x": 0.833,
                        "y": 0.833
                    },
                    "o": {
                        "x": 0.167,
                        "y": 0.167
                    },
                    "t": 0,
                    "s": [
                        304,
                        312,
                        0
                    ],
                    "to": [
                        0,
                        0,
                        0
                    ],
                    "ti": [
                        0,
                        0,
                        0
                    ]
                },
                {
                    "i": {
                        "x": 0.833,
                        "y": 0.833
                    },
                    "o": {
                        "x": 0.167,
                        "y": 0.167
                    },
                    "t": 180,
                    "s": [
                        208,
                        312,
                        0
                    ],
                    "to": [
                        0,
                        0,
                        0
                    ],
                    "ti": [
                        0,
                        0,
                        0
                    ]
                },
                {
                    "t": 359,
                    "s": [
                        304,
                        312,
                        0
                    ]
                }
            ],
            "ix": 2
        },{
            "a": 1,
            "k": [
                {
                    "i": {
                        "x": 0.833,
                        "y": 0.833
                    },
                    "o": {
                        "x": 0.167,
                        "y": 0.167
                    },
                    "t": 0,
                    "s": [
                        256,
                        256,
                        0
                    ],
                    "to": [
                        0,
                        0,
                        0
                    ],
                    "ti": [
                        0,
                        0,
                        0
                    ]
                },
                {
                    "i": {
                        "x": 0.833,
                        "y": 0.833
                    },
                    "o": {
                        "x": 0.167,
                        "y": 0.167
                    },
                    "t": 90,
                    "s": [
                        208,
                        256,
                        0
                    ],
                    "to": [
                        0,
                        0,
                        0
                    ],
                    "ti": [
                        0,
                        0,
                        0
                    ]
                },
                {
                    "i": {
                        "x": 0.833,
                        "y": 0.833
                    },
                    "o": {
                        "x": 0.167,
                        "y": 0.167
                    },
                    "t": 270,
                    "s": [
                        304,
                        256,
                        0
                    ],
                    "to": [
                        0,
                        0,
                        0
                    ],
                    "ti": [
                        0,
                        0,
                        0
                    ]
                },
                {
                    "t": 359,
                    "s": [
                        256,
                        256,
                        0
                    ]
                }
            ],
            "ix": 2
        },{
            "a": 1,
            "k": [
                {
                    "i": {
                        "x": 0.833,
                        "y": 0.833
                    },
                    "o": {
                        "x": 0.167,
                        "y": 0.167
                    },
                    "t": 0,
                    "s": [
                        208,
                        200,
                        0
                    ],
                    "to": [
                        0,
                        0,
                        0
                    ],
                    "ti": [
                        0,
                        0,
                        0
                    ]
                },
                {
                    "i": {
                        "x": 0.833,
                        "y": 0.833
                    },
                    "o": {
                        "x": 0.167,
                        "y": 0.167
                    },
                    "t": 180,
                    "s": [
                        304,
                        200,
                        0
                    ],
                    "to": [
                        0,
                        0,
                        0
                    ],
                    "ti": [
                        0,
                        0,
                        0
                    ]
                },
                {
                    "t": 359,
                    "s": [
                        208,
                        200,
                        0
                    ]
                }
            ],
            "ix": 2
        }
    ];
    return fog_ks_p.map((item, index) => {
        return {
            "ddd": 0,
            "ind": index + 1,
            "ty": 4,
            "nm": "layer",
            "sr": 1,
            "ks": {
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                },
                "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                },
                "p": item,
                "a": {
                    "a": 0,
                    "k": [
                        0,
                        0,
                        0
                    ],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [
                        100,
                        100,
                        100
                    ],
                    "ix": 6
                }
            },
            "ao": 0,
            "shapes": [
                {
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0
                                ]
                            ],
                            "o": [
                                [
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    0
                                ]
                            ],
                            "v": [
                                [
                                    -120,
                                    0
                                ],
                                [
                                    120,
                                    0
                                ]
                            ],
                            "c": false
                        },
                        "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                },
                fill
            ],
            "ip": 0,
            "op": 360,
            "st": 0,
            "bm": 0
        };
    });
}

export const fogFill = color => {
    const fogColor = checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : null;
    return fog(fillTemplate('fill', fogColor));
}

export const fogLine = color => {
    const fogColor = checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : null;
    return fog(fillTemplate('line', fogColor));
}

export const smallFogFill = color => {
    const smallFogColor = checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : null;
    return smallFog(fillTemplate('fill', smallFogColor));

}

export const smallFogLine = color => {
    const smallFogColor = checkColor(color) ? [color[0] / 255, color[1] / 255, color[2] / 255, 1] : null;
    return smallFog(fillTemplate('line', smallFogColor));
}