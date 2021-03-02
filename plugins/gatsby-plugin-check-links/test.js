const checkNavLinks = require('./utils/check-nav-links');
const { linkVisitorMdx, linkVisitorHtml } = require('./utils/links-visitors');
const unified = require('unified');

const main = async () => {
  const { data } = {
    data: {
      allMdx: {
        nodes: [
          {
            mdxAST: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value:
                        'Our Java agent auto-instruments your code so you can start monitoring applications. You can use our launcher, or follow the instructions in this document to complete a basic Java agent installation.',
                      position: {
                        start: {
                          line: 2,
                          column: 1,
                          offset: 1,
                        },
                        end: {
                          line: 2,
                          column: 199,
                          offset: 199,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 2,
                      column: 1,
                      offset: 1,
                    },
                    end: {
                      line: 2,
                      column: 199,
                      offset: 199,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'mdxBlockElement',
                  name: 'ButtonLink',
                  attributes: [
                    {
                      type: 'mdxAttribute',
                      name: 'data-tessen',
                      value: 'stitchedPathLinkClick',
                      position: {
                        start: {
                          line: 5,
                          column: 3,
                          offset: 215,
                        },
                        end: {
                          line: 5,
                          column: 38,
                          offset: 250,
                        },
                      },
                    },
                    {
                      type: 'mdxAttribute',
                      name: 'role',
                      value: 'button',
                      position: {
                        start: {
                          line: 6,
                          column: 3,
                          offset: 253,
                        },
                        end: {
                          line: 6,
                          column: 16,
                          offset: 266,
                        },
                      },
                    },
                    {
                      type: 'mdxAttribute',
                      name: 'to',
                      value:
                        'https://one.newrelic.com/launcher/nr1-core.settings?pane=eyJuZXJkbGV0SWQiOiJ0dWNzb24ucGxnLWluc3RydW1lbnQtZXZlcnl0aGluZyJ9&cards[0]=eyJuZXJkbGV0SWQiOiJzZXR1cC1uZXJkbGV0cy5zZXR1cC1qYXZhLWludGVncmF0aW9uIiwiYWNjb3VudElkIjoyNjQwNDA5fQ==&platform[accountId]=1',
                      position: {
                        start: {
                          line: 7,
                          column: 3,
                          offset: 269,
                        },
                        end: {
                          line: 7,
                          column: 261,
                          offset: 527,
                        },
                      },
                    },
                    {
                      type: 'mdxAttribute',
                      name: 'variant',
                      value: 'primary',
                      position: {
                        start: {
                          line: 8,
                          column: 3,
                          offset: 530,
                        },
                        end: {
                          line: 8,
                          column: 20,
                          offset: 547,
                        },
                      },
                    },
                  ],
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          value: 'Add Java data',
                          position: {
                            start: {
                              line: 10,
                              column: 1,
                              offset: 550,
                            },
                            end: {
                              line: 10,
                              column: 16,
                              offset: 565,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 10,
                          column: 1,
                          offset: 550,
                        },
                        end: {
                          line: 10,
                          column: 16,
                          offset: 565,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 4,
                      column: 1,
                      offset: 201,
                    },
                    end: {
                      line: 11,
                      column: 14,
                      offset: 579,
                    },
                    indent: [1, 1, 1, 1, 1, 1, 1],
                  },
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'link',
                      title: null,
                      url:
                        'https://github.com/newrelic/c-sdk/tree/master/examples',
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                          position: {
                            start: {
                              line: 13,
                              column: 2,
                              offset: 582,
                            },
                            end: {
                              line: 13,
                              column: 8,
                              offset: 588,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'strong',
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                              position: {
                                start: {
                                  line: 13,
                                  column: 10,
                                  offset: 590,
                                },
                                end: {
                                  line: 13,
                                  column: 18,
                                  offset: 598,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 13,
                              column: 8,
                              offset: 588,
                            },
                            end: {
                              line: 13,
                              column: 20,
                              offset: 600,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                          position: {
                            start: {
                              line: 13,
                              column: 20,
                              offset: 600,
                            },
                            end: {
                              line: 13,
                              column: 44,
                              offset: 624,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 13,
                          column: 1,
                          offset: 581,
                        },
                        end: {
                          line: 13,
                          column: 101,
                          offset: 681,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value:
                        '. For more information about source code and features, see the ',
                      position: {
                        start: {
                          line: 13,
                          column: 101,
                          offset: 681,
                        },
                        end: {
                          line: 13,
                          column: 164,
                          offset: 744,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'link',
                      title: null,
                      url:
                        'https://newrelic.github.io/c-sdk/libnewrelic_8h_source.html',
                      children: [
                        {
                          type: 'text',
                          value: "C SDK's source documentation for ",
                          position: {
                            start: {
                              line: 13,
                              column: 165,
                              offset: 745,
                            },
                            end: {
                              line: 13,
                              column: 198,
                              offset: 778,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'inlineCode',
                          value: 'libnewrelic.h',
                          position: {
                            start: {
                              line: 13,
                              column: 198,
                              offset: 778,
                            },
                            end: {
                              line: 13,
                              column: 213,
                              offset: 793,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'text',
                          value: ' on GitHub',
                          position: {
                            start: {
                              line: 13,
                              column: 213,
                              offset: 793,
                            },
                            end: {
                              line: 13,
                              column: 223,
                              offset: 803,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 13,
                          column: 164,
                          offset: 744,
                        },
                        end: {
                          line: 13,
                          column: 285,
                          offset: 865,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: '\n',
                      position: {
                        start: {
                          line: 13,
                          column: 285,
                          offset: 865,
                        },
                        end: {
                          line: 14,
                          column: 1,
                          offset: 866,
                        },
                        indent: [1],
                      },
                    },
                    {
                      type: 'link',
                      title: null,
                      url: '//jquery.org/license/',
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                          position: {
                            start: {
                              line: 14,
                              column: 2,
                              offset: 867,
                            },
                            end: {
                              line: 14,
                              column: 8,
                              offset: 873,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'strong',
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                              position: {
                                start: {
                                  line: 14,
                                  column: 10,
                                  offset: 875,
                                },
                                end: {
                                  line: 14,
                                  column: 18,
                                  offset: 883,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 14,
                              column: 8,
                              offset: 873,
                            },
                            end: {
                              line: 14,
                              column: 20,
                              offset: 885,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                          position: {
                            start: {
                              line: 14,
                              column: 20,
                              offset: 885,
                            },
                            end: {
                              line: 14,
                              column: 44,
                              offset: 909,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 14,
                          column: 1,
                          offset: 866,
                        },
                        end: {
                          line: 14,
                          column: 68,
                          offset: 933,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value:
                        '. For more information about source code and features, see the ',
                      position: {
                        start: {
                          line: 14,
                          column: 68,
                          offset: 933,
                        },
                        end: {
                          line: 14,
                          column: 131,
                          offset: 996,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'link',
                      title: null,
                      url:
                        'https://newrelic.github.io/c-sdk/libnewrelic_8h_source.html',
                      children: [
                        {
                          type: 'text',
                          value: "C SDK's source documentation for ",
                          position: {
                            start: {
                              line: 14,
                              column: 132,
                              offset: 997,
                            },
                            end: {
                              line: 14,
                              column: 165,
                              offset: 1030,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'inlineCode',
                          value: 'libnewrelic.h',
                          position: {
                            start: {
                              line: 14,
                              column: 165,
                              offset: 1030,
                            },
                            end: {
                              line: 14,
                              column: 180,
                              offset: 1045,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'text',
                          value: ' on GitHub',
                          position: {
                            start: {
                              line: 14,
                              column: 180,
                              offset: 1045,
                            },
                            end: {
                              line: 14,
                              column: 190,
                              offset: 1055,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 14,
                          column: 131,
                          offset: 996,
                        },
                        end: {
                          line: 14,
                          column: 252,
                          offset: 1117,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: '\n',
                      position: {
                        start: {
                          line: 14,
                          column: 252,
                          offset: 1117,
                        },
                        end: {
                          line: 15,
                          column: 1,
                          offset: 1118,
                        },
                        indent: [1],
                      },
                    },
                    {
                      type: 'linkReference',
                      identifier: 'c sdk **examples** documentation on github',
                      label: 'C SDK **Examples** documentation on GitHub',
                      referenceType: 'shortcut',
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                          position: {
                            start: {
                              line: 15,
                              column: 2,
                              offset: 1119,
                            },
                            end: {
                              line: 15,
                              column: 8,
                              offset: 1125,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'strong',
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                              position: {
                                start: {
                                  line: 15,
                                  column: 10,
                                  offset: 1127,
                                },
                                end: {
                                  line: 15,
                                  column: 18,
                                  offset: 1135,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 15,
                              column: 8,
                              offset: 1125,
                            },
                            end: {
                              line: 15,
                              column: 20,
                              offset: 1137,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                          position: {
                            start: {
                              line: 15,
                              column: 20,
                              offset: 1137,
                            },
                            end: {
                              line: 15,
                              column: 44,
                              offset: 1161,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 15,
                          column: 1,
                          offset: 1118,
                        },
                        end: {
                          line: 15,
                          column: 45,
                          offset: 1162,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value:
                        '//svn.apache.org/viewvc/commons/proper/codec/trunk/LICENSE.txt?view=markup)\n',
                      position: {
                        start: {
                          line: 15,
                          column: 45,
                          offset: 1162,
                        },
                        end: {
                          line: 16,
                          column: 1,
                          offset: 1238,
                        },
                        indent: [1],
                      },
                    },
                    {
                      type: 'link',
                      title: null,
                      url: 'mailto:tsakashita@newrelic.com',
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                          position: {
                            start: {
                              line: 16,
                              column: 2,
                              offset: 1239,
                            },
                            end: {
                              line: 16,
                              column: 8,
                              offset: 1245,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'strong',
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                              position: {
                                start: {
                                  line: 16,
                                  column: 10,
                                  offset: 1247,
                                },
                                end: {
                                  line: 16,
                                  column: 18,
                                  offset: 1255,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 16,
                              column: 8,
                              offset: 1245,
                            },
                            end: {
                              line: 16,
                              column: 20,
                              offset: 1257,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                          position: {
                            start: {
                              line: 16,
                              column: 20,
                              offset: 1257,
                            },
                            end: {
                              line: 16,
                              column: 44,
                              offset: 1281,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 16,
                          column: 1,
                          offset: 1238,
                        },
                        end: {
                          line: 16,
                          column: 77,
                          offset: 1314,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: '\n',
                      position: {
                        start: {
                          line: 16,
                          column: 77,
                          offset: 1314,
                        },
                        end: {
                          line: 17,
                          column: 1,
                          offset: 1315,
                        },
                        indent: [1],
                      },
                    },
                    {
                      type: 'link',
                      title: null,
                      url: '//code.google.com/p/guava-libraries/',
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                          position: {
                            start: {
                              line: 17,
                              column: 2,
                              offset: 1316,
                            },
                            end: {
                              line: 17,
                              column: 8,
                              offset: 1322,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'strong',
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                              position: {
                                start: {
                                  line: 17,
                                  column: 10,
                                  offset: 1324,
                                },
                                end: {
                                  line: 17,
                                  column: 18,
                                  offset: 1332,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 17,
                              column: 8,
                              offset: 1322,
                            },
                            end: {
                              line: 17,
                              column: 20,
                              offset: 1334,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                          position: {
                            start: {
                              line: 17,
                              column: 20,
                              offset: 1334,
                            },
                            end: {
                              line: 17,
                              column: 44,
                              offset: 1358,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 17,
                          column: 1,
                          offset: 1315,
                        },
                        end: {
                          line: 17,
                          column: 83,
                          offset: 1397,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: '\n',
                      position: {
                        start: {
                          line: 17,
                          column: 83,
                          offset: 1397,
                        },
                        end: {
                          line: 18,
                          column: 1,
                          offset: 1398,
                        },
                        indent: [1],
                      },
                    },
                    {
                      type: 'link',
                      title: null,
                      url: '//attribute_dictionary?fsjdhsk',
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                          position: {
                            start: {
                              line: 18,
                              column: 2,
                              offset: 1399,
                            },
                            end: {
                              line: 18,
                              column: 8,
                              offset: 1405,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'strong',
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                              position: {
                                start: {
                                  line: 18,
                                  column: 10,
                                  offset: 1407,
                                },
                                end: {
                                  line: 18,
                                  column: 18,
                                  offset: 1415,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 18,
                              column: 8,
                              offset: 1405,
                            },
                            end: {
                              line: 18,
                              column: 20,
                              offset: 1417,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                          position: {
                            start: {
                              line: 18,
                              column: 20,
                              offset: 1417,
                            },
                            end: {
                              line: 18,
                              column: 44,
                              offset: 1441,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 18,
                          column: 1,
                          offset: 1398,
                        },
                        end: {
                          line: 18,
                          column: 77,
                          offset: 1474,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: '\n',
                      position: {
                        start: {
                          line: 18,
                          column: 77,
                          offset: 1474,
                        },
                        end: {
                          line: 19,
                          column: 1,
                          offset: 1475,
                        },
                        indent: [1],
                      },
                    },
                    {
                      type: 'link',
                      title: null,
                      url: 'aregoldstring',
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                          position: {
                            start: {
                              line: 19,
                              column: 2,
                              offset: 1476,
                            },
                            end: {
                              line: 19,
                              column: 8,
                              offset: 1482,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'strong',
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                              position: {
                                start: {
                                  line: 19,
                                  column: 10,
                                  offset: 1484,
                                },
                                end: {
                                  line: 19,
                                  column: 18,
                                  offset: 1492,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 19,
                              column: 8,
                              offset: 1482,
                            },
                            end: {
                              line: 19,
                              column: 20,
                              offset: 1494,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                          position: {
                            start: {
                              line: 19,
                              column: 20,
                              offset: 1494,
                            },
                            end: {
                              line: 19,
                              column: 44,
                              offset: 1518,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 19,
                          column: 1,
                          offset: 1475,
                        },
                        end: {
                          line: 19,
                          column: 60,
                          offset: 1534,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 13,
                      column: 1,
                      offset: 581,
                    },
                    end: {
                      line: 19,
                      column: 60,
                      offset: 1534,
                    },
                    indent: [1, 1, 1, 1, 1, 1],
                  },
                },
                {
                  type: 'mdxBlockElement',
                  name: 'Callout',
                  attributes: [
                    {
                      type: 'mdxAttribute',
                      name: 'variant',
                      value: 'tip',
                      position: {
                        start: {
                          line: 21,
                          column: 10,
                          offset: 1545,
                        },
                        end: {
                          line: 21,
                          column: 23,
                          offset: 1558,
                        },
                      },
                    },
                  ],
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          value:
                            'To use Java or any other agent, as well as the rest of our ',
                          position: {
                            start: {
                              line: 22,
                              column: 1,
                              offset: 1560,
                            },
                            end: {
                              line: 22,
                              column: 62,
                              offset: 1621,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'link',
                          title: null,
                          url: 'https://one.newrelic.com',
                          children: [
                            {
                              type: 'text',
                              value: 'observability\nplatform',
                              position: {
                                start: {
                                  line: 22,
                                  column: 63,
                                  offset: 1622,
                                },
                                end: {
                                  line: 23,
                                  column: 11,
                                  offset: 1646,
                                },
                                indent: [1],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 22,
                              column: 62,
                              offset: 1621,
                            },
                            end: {
                              line: 23,
                              column: 38,
                              offset: 1673,
                            },
                            indent: [1],
                          },
                        },
                        {
                          type: 'text',
                          value: ', join the New Relic family! ',
                          position: {
                            start: {
                              line: 23,
                              column: 38,
                              offset: 1673,
                            },
                            end: {
                              line: 23,
                              column: 67,
                              offset: 1702,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'link',
                          title: null,
                          url: 'https://newrelic.com/signup',
                          children: [
                            {
                              type: 'text',
                              value: 'Sign\nup',
                              position: {
                                start: {
                                  line: 23,
                                  column: 68,
                                  offset: 1703,
                                },
                                end: {
                                  line: 24,
                                  column: 5,
                                  offset: 1712,
                                },
                                indent: [1],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 23,
                              column: 67,
                              offset: 1702,
                            },
                            end: {
                              line: 24,
                              column: 35,
                              offset: 1742,
                            },
                            indent: [1],
                          },
                        },
                        {
                          type: 'text',
                          value:
                            ' to create your free account in only a few\nseconds. Then ingest up to 100GB of data for free each month. Forever.',
                          position: {
                            start: {
                              line: 24,
                              column: 35,
                              offset: 1742,
                            },
                            end: {
                              line: 25,
                              column: 73,
                              offset: 1857,
                            },
                            indent: [1],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 22,
                          column: 1,
                          offset: 1560,
                        },
                        end: {
                          line: 25,
                          column: 73,
                          offset: 1857,
                        },
                        indent: [1, 1, 1],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 21,
                      column: 1,
                      offset: 1536,
                    },
                    end: {
                      line: 26,
                      column: 11,
                      offset: 1868,
                    },
                    indent: [1, 1, 1, 1, 1],
                  },
                },
                {
                  type: 'heading',
                  depth: 2,
                  children: [
                    {
                      type: 'text',
                      value: '1. Before you install ',
                      position: {
                        start: {
                          line: 28,
                          column: 4,
                          offset: 1873,
                        },
                        end: {
                          line: 28,
                          column: 26,
                          offset: 1895,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'linkReference',
                      identifier: '#overview',
                      label: '#overview',
                      referenceType: 'shortcut',
                      children: [
                        {
                          type: 'text',
                          value: '#overview',
                          position: {
                            start: {
                              line: 28,
                              column: 27,
                              offset: 1896,
                            },
                            end: {
                              line: 28,
                              column: 36,
                              offset: 1905,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 28,
                          column: 26,
                          offset: 1895,
                        },
                        end: {
                          line: 28,
                          column: 37,
                          offset: 1906,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 28,
                      column: 1,
                      offset: 1870,
                    },
                    end: {
                      line: 28,
                      column: 37,
                      offset: 1906,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Check the following:',
                      position: {
                        start: {
                          line: 30,
                          column: 1,
                          offset: 1908,
                        },
                        end: {
                          line: 30,
                          column: 21,
                          offset: 1928,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 30,
                      column: 1,
                      offset: 1908,
                    },
                    end: {
                      line: 30,
                      column: 21,
                      offset: 1928,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'list',
                  ordered: false,
                  start: null,
                  spread: false,
                  children: [
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Make sure you have signed up for a ',
                              position: {
                                start: {
                                  line: 32,
                                  column: 3,
                                  offset: 1932,
                                },
                                end: {
                                  line: 32,
                                  column: 38,
                                  offset: 1967,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/accounts-partnerships/accounts/account-setup/creating-your-new-relic-account',
                              children: [
                                {
                                  type: 'text',
                                  value: 'New Relic account',
                                  position: {
                                    start: {
                                      line: 32,
                                      column: 39,
                                      offset: 1968,
                                    },
                                    end: {
                                      line: 32,
                                      column: 56,
                                      offset: 1985,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 32,
                                  column: 38,
                                  offset: 1967,
                                },
                                end: {
                                  line: 32,
                                  column: 141,
                                  offset: 2070,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: '.',
                              position: {
                                start: {
                                  line: 32,
                                  column: 141,
                                  offset: 2070,
                                },
                                end: {
                                  line: 32,
                                  column: 142,
                                  offset: 2071,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 32,
                              column: 3,
                              offset: 1932,
                            },
                            end: {
                              line: 32,
                              column: 142,
                              offset: 2071,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 32,
                          column: 1,
                          offset: 1930,
                        },
                        end: {
                          line: 32,
                          column: 142,
                          offset: 2071,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Review the ',
                              position: {
                                start: {
                                  line: 33,
                                  column: 3,
                                  offset: 2074,
                                },
                                end: {
                                  line: 33,
                                  column: 14,
                                  offset: 2085,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent',
                              children: [
                                {
                                  type: 'text',
                                  value: 'compatibility and requirements',
                                  position: {
                                    start: {
                                      line: 33,
                                      column: 15,
                                      offset: 2086,
                                    },
                                    end: {
                                      line: 33,
                                      column: 45,
                                      offset: 2116,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 33,
                                  column: 14,
                                  offset: 2085,
                                },
                                end: {
                                  line: 33,
                                  column: 125,
                                  offset: 2196,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: '.',
                              position: {
                                start: {
                                  line: 33,
                                  column: 125,
                                  offset: 2196,
                                },
                                end: {
                                  line: 33,
                                  column: 126,
                                  offset: 2197,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 33,
                              column: 3,
                              offset: 2074,
                            },
                            end: {
                              line: 33,
                              column: 126,
                              offset: 2197,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 33,
                          column: 1,
                          offset: 2072,
                        },
                        end: {
                          line: 33,
                          column: 126,
                          offset: 2197,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Check if your environment requires ',
                              position: {
                                start: {
                                  line: 34,
                                  column: 3,
                                  offset: 2200,
                                },
                                end: {
                                  line: 34,
                                  column: 38,
                                  offset: 2235,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/agents/java-agent/additional-installation',
                              children: [
                                {
                                  type: 'text',
                                  value:
                                    'additional or alternative install steps',
                                  position: {
                                    start: {
                                      line: 34,
                                      column: 39,
                                      offset: 2236,
                                    },
                                    end: {
                                      line: 34,
                                      column: 78,
                                      offset: 2275,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 34,
                                  column: 38,
                                  offset: 2235,
                                },
                                end: {
                                  line: 34,
                                  column: 128,
                                  offset: 2325,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: '.',
                              position: {
                                start: {
                                  line: 34,
                                  column: 128,
                                  offset: 2325,
                                },
                                end: {
                                  line: 34,
                                  column: 129,
                                  offset: 2326,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 34,
                              column: 3,
                              offset: 2200,
                            },
                            end: {
                              line: 34,
                              column: 129,
                              offset: 2326,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 34,
                          column: 1,
                          offset: 2198,
                        },
                        end: {
                          line: 34,
                          column: 129,
                          offset: 2326,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 32,
                      column: 1,
                      offset: 1930,
                    },
                    end: {
                      line: 34,
                      column: 129,
                      offset: 2326,
                    },
                    indent: [1, 1],
                  },
                },
                {
                  type: 'heading',
                  depth: 2,
                  children: [
                    {
                      type: 'text',
                      value: '2. Get the agent ',
                      position: {
                        start: {
                          line: 36,
                          column: 4,
                          offset: 2331,
                        },
                        end: {
                          line: 36,
                          column: 21,
                          offset: 2348,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'linkReference',
                      identifier: '#download-agent',
                      label: '#download-agent',
                      referenceType: 'shortcut',
                      children: [
                        {
                          type: 'text',
                          value: '#download-agent',
                          position: {
                            start: {
                              line: 36,
                              column: 22,
                              offset: 2349,
                            },
                            end: {
                              line: 36,
                              column: 37,
                              offset: 2364,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 36,
                          column: 21,
                          offset: 2348,
                        },
                        end: {
                          line: 36,
                          column: 38,
                          offset: 2365,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 36,
                      column: 1,
                      offset: 2328,
                    },
                    end: {
                      line: 36,
                      column: 38,
                      offset: 2365,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Download ',
                      position: {
                        start: {
                          line: 38,
                          column: 1,
                          offset: 2367,
                        },
                        end: {
                          line: 38,
                          column: 10,
                          offset: 2376,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'inlineCode',
                      value: 'newrelic-java.zip',
                      position: {
                        start: {
                          line: 38,
                          column: 10,
                          offset: 2376,
                        },
                        end: {
                          line: 38,
                          column: 29,
                          offset: 2395,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: ' using ',
                      position: {
                        start: {
                          line: 38,
                          column: 29,
                          offset: 2395,
                        },
                        end: {
                          line: 38,
                          column: 36,
                          offset: 2402,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'inlineCode',
                      value: 'curl',
                      position: {
                        start: {
                          line: 38,
                          column: 36,
                          offset: 2402,
                        },
                        end: {
                          line: 38,
                          column: 42,
                          offset: 2408,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: ', ',
                      position: {
                        start: {
                          line: 38,
                          column: 42,
                          offset: 2408,
                        },
                        end: {
                          line: 38,
                          column: 44,
                          offset: 2410,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'inlineCode',
                      value: 'Invoke-WebRequest',
                      position: {
                        start: {
                          line: 38,
                          column: 44,
                          offset: 2410,
                        },
                        end: {
                          line: 38,
                          column: 63,
                          offset: 2429,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: ' (PowerShell), or the New Relic UI:',
                      position: {
                        start: {
                          line: 38,
                          column: 63,
                          offset: 2429,
                        },
                        end: {
                          line: 38,
                          column: 98,
                          offset: 2464,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 38,
                      column: 1,
                      offset: 2367,
                    },
                    end: {
                      line: 38,
                      column: 98,
                      offset: 2464,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'mdxBlockElement',
                  name: 'CollapserGroup',
                  attributes: [],
                  children: [
                    {
                      type: 'mdxBlockElement',
                      name: 'Collapser',
                      attributes: [
                        {
                          type: 'mdxAttribute',
                          name: 'id',
                          value: 'download-from-curl',
                          position: {
                            start: {
                              line: 42,
                              column: 5,
                              offset: 2500,
                            },
                            end: {
                              line: 42,
                              column: 28,
                              offset: 2523,
                            },
                          },
                        },
                        {
                          type: 'mdxAttribute',
                          name: 'title',
                          value: {
                            type: 'mdxValueExpression',
                            value:
                              '<>Download using <InlineCode>curl</InlineCode></>',
                            position: {
                              start: {
                                line: 43,
                                column: 11,
                                offset: 2534,
                              },
                              end: {
                                line: 43,
                                column: 62,
                                offset: 2585,
                              },
                            },
                          },
                          position: {
                            start: {
                              line: 43,
                              column: 5,
                              offset: 2528,
                            },
                            end: {
                              line: 43,
                              column: 62,
                              offset: 2585,
                            },
                          },
                        },
                      ],
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Complete the following:',
                              position: {
                                start: {
                                  line: 45,
                                  column: 1,
                                  offset: 2590,
                                },
                                end: {
                                  line: 45,
                                  column: 28,
                                  offset: 2617,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 45,
                              column: 1,
                              offset: 2590,
                            },
                            end: {
                              line: 45,
                              column: 28,
                              offset: 2617,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'list',
                          ordered: true,
                          start: 1,
                          spread: false,
                          children: [
                            {
                              type: 'listItem',
                              spread: false,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'Start a command-line session.',
                                      position: {
                                        start: {
                                          line: 47,
                                          column: 8,
                                          offset: 2626,
                                        },
                                        end: {
                                          line: 47,
                                          column: 37,
                                          offset: 2655,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 47,
                                      column: 8,
                                      offset: 2626,
                                    },
                                    end: {
                                      line: 47,
                                      column: 37,
                                      offset: 2655,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 47,
                                  column: 1,
                                  offset: 2619,
                                },
                                end: {
                                  line: 47,
                                  column: 37,
                                  offset: 2655,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'listItem',
                              spread: false,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'text',
                                      value:
                                        'Change to a temporary directory where you can download the zip file.',
                                      position: {
                                        start: {
                                          line: 48,
                                          column: 8,
                                          offset: 2663,
                                        },
                                        end: {
                                          line: 48,
                                          column: 76,
                                          offset: 2731,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 48,
                                      column: 8,
                                      offset: 2663,
                                    },
                                    end: {
                                      line: 48,
                                      column: 76,
                                      offset: 2731,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 48,
                                  column: 1,
                                  offset: 2656,
                                },
                                end: {
                                  line: 48,
                                  column: 76,
                                  offset: 2731,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'listItem',
                              spread: true,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'Execute this ',
                                      position: {
                                        start: {
                                          line: 49,
                                          column: 8,
                                          offset: 2739,
                                        },
                                        end: {
                                          line: 49,
                                          column: 21,
                                          offset: 2752,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'inlineCode',
                                      value: 'curl',
                                      position: {
                                        start: {
                                          line: 49,
                                          column: 21,
                                          offset: 2752,
                                        },
                                        end: {
                                          line: 49,
                                          column: 27,
                                          offset: 2758,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'text',
                                      value: ' command:',
                                      position: {
                                        start: {
                                          line: 49,
                                          column: 27,
                                          offset: 2758,
                                        },
                                        end: {
                                          line: 49,
                                          column: 36,
                                          offset: 2767,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 49,
                                      column: 8,
                                      offset: 2739,
                                    },
                                    end: {
                                      line: 49,
                                      column: 36,
                                      offset: 2767,
                                    },
                                    indent: [],
                                  },
                                },
                                {
                                  type: 'code',
                                  lang: null,
                                  meta: null,
                                  value:
                                    'curl -O https://download.newrelic.com/newrelic/java-agent/newrelic-agent/current/newrelic-java.zip',
                                  position: {
                                    start: {
                                      line: 51,
                                      column: 8,
                                      offset: 2776,
                                    },
                                    end: {
                                      line: 53,
                                      column: 11,
                                      offset: 2896,
                                    },
                                    indent: [8, 8],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 49,
                                  column: 1,
                                  offset: 2732,
                                },
                                end: {
                                  line: 53,
                                  column: 11,
                                  offset: 2896,
                                },
                                indent: [1, 1, 1, 1],
                              },
                            },
                            {
                              type: 'listItem',
                              spread: false,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'Unzip ',
                                      position: {
                                        start: {
                                          line: 54,
                                          column: 8,
                                          offset: 2904,
                                        },
                                        end: {
                                          line: 54,
                                          column: 14,
                                          offset: 2910,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'inlineCode',
                                      value: 'newrelic-java.zip',
                                      position: {
                                        start: {
                                          line: 54,
                                          column: 14,
                                          offset: 2910,
                                        },
                                        end: {
                                          line: 54,
                                          column: 33,
                                          offset: 2929,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 54,
                                      column: 8,
                                      offset: 2904,
                                    },
                                    end: {
                                      line: 54,
                                      column: 33,
                                      offset: 2929,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 54,
                                  column: 1,
                                  offset: 2897,
                                },
                                end: {
                                  line: 56,
                                  column: 3,
                                  offset: 2933,
                                },
                                indent: [1, 1],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 47,
                              column: 1,
                              offset: 2619,
                            },
                            end: {
                              line: 56,
                              column: 3,
                              offset: 2933,
                            },
                            indent: [1, 1, 1, 1, 1, 1, 1, 1, 1],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 41,
                          column: 1,
                          offset: 2483,
                        },
                        end: {
                          line: 56,
                          column: 17,
                          offset: 2947,
                        },
                        indent: [1, 1, 1, 1, 1, 8, 8, 8, 1, 8, 8, 8, 8, 1, 3],
                      },
                    },
                    {
                      type: 'mdxBlockElement',
                      name: 'Collapser',
                      attributes: [
                        {
                          type: 'mdxAttribute',
                          name: 'id',
                          value: 'download-from-powershell',
                          position: {
                            start: {
                              line: 59,
                              column: 5,
                              offset: 2964,
                            },
                            end: {
                              line: 59,
                              column: 34,
                              offset: 2993,
                            },
                          },
                        },
                        {
                          type: 'mdxAttribute',
                          name: 'title',
                          value: {
                            type: 'mdxValueExpression',
                            value:
                              '<>Download using <InlineCode>Invoke-WebRequest</InlineCode> (PowerShell)</>',
                            position: {
                              start: {
                                line: 60,
                                column: 11,
                                offset: 3004,
                              },
                              end: {
                                line: 60,
                                column: 88,
                                offset: 3081,
                              },
                            },
                          },
                          position: {
                            start: {
                              line: 60,
                              column: 5,
                              offset: 2998,
                            },
                            end: {
                              line: 60,
                              column: 88,
                              offset: 3081,
                            },
                          },
                        },
                      ],
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Complete the following:',
                              position: {
                                start: {
                                  line: 62,
                                  column: 1,
                                  offset: 3086,
                                },
                                end: {
                                  line: 62,
                                  column: 28,
                                  offset: 3113,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 62,
                              column: 1,
                              offset: 3086,
                            },
                            end: {
                              line: 62,
                              column: 28,
                              offset: 3113,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'list',
                          ordered: true,
                          start: 1,
                          spread: false,
                          children: [
                            {
                              type: 'listItem',
                              spread: false,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'Start a PowerShell session.',
                                      position: {
                                        start: {
                                          line: 64,
                                          column: 8,
                                          offset: 3122,
                                        },
                                        end: {
                                          line: 64,
                                          column: 35,
                                          offset: 3149,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 64,
                                      column: 8,
                                      offset: 3122,
                                    },
                                    end: {
                                      line: 64,
                                      column: 35,
                                      offset: 3149,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 64,
                                  column: 1,
                                  offset: 3115,
                                },
                                end: {
                                  line: 64,
                                  column: 35,
                                  offset: 3149,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'listItem',
                              spread: false,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'text',
                                      value:
                                        'Change to a temporary directory where you can download the zip file.',
                                      position: {
                                        start: {
                                          line: 65,
                                          column: 8,
                                          offset: 3157,
                                        },
                                        end: {
                                          line: 65,
                                          column: 76,
                                          offset: 3225,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 65,
                                      column: 8,
                                      offset: 3157,
                                    },
                                    end: {
                                      line: 65,
                                      column: 76,
                                      offset: 3225,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 65,
                                  column: 1,
                                  offset: 3150,
                                },
                                end: {
                                  line: 65,
                                  column: 76,
                                  offset: 3225,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'listItem',
                              spread: true,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'Execute this PowerShell command:',
                                      position: {
                                        start: {
                                          line: 66,
                                          column: 8,
                                          offset: 3233,
                                        },
                                        end: {
                                          line: 66,
                                          column: 40,
                                          offset: 3265,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 66,
                                      column: 8,
                                      offset: 3233,
                                    },
                                    end: {
                                      line: 66,
                                      column: 40,
                                      offset: 3265,
                                    },
                                    indent: [],
                                  },
                                },
                                {
                                  type: 'code',
                                  lang: null,
                                  meta: null,
                                  value:
                                    'Invoke-WebRequest -Uri https://download.newrelic.com/newrelic/java-agent/newrelic-agent/current/newrelic-java.zip -OutFile newrelic-java.zip',
                                  position: {
                                    start: {
                                      line: 68,
                                      column: 8,
                                      offset: 3274,
                                    },
                                    end: {
                                      line: 70,
                                      column: 11,
                                      offset: 3436,
                                    },
                                    indent: [8, 8],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 66,
                                  column: 1,
                                  offset: 3226,
                                },
                                end: {
                                  line: 70,
                                  column: 11,
                                  offset: 3436,
                                },
                                indent: [1, 1, 1, 1],
                              },
                            },
                            {
                              type: 'listItem',
                              spread: true,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'Unzip ',
                                      position: {
                                        start: {
                                          line: 71,
                                          column: 8,
                                          offset: 3444,
                                        },
                                        end: {
                                          line: 71,
                                          column: 14,
                                          offset: 3450,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'inlineCode',
                                      value: 'newrelic-java.zip',
                                      position: {
                                        start: {
                                          line: 71,
                                          column: 14,
                                          offset: 3450,
                                        },
                                        end: {
                                          line: 71,
                                          column: 33,
                                          offset: 3469,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'text',
                                      value: ':',
                                      position: {
                                        start: {
                                          line: 71,
                                          column: 33,
                                          offset: 3469,
                                        },
                                        end: {
                                          line: 71,
                                          column: 34,
                                          offset: 3470,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 71,
                                      column: 8,
                                      offset: 3444,
                                    },
                                    end: {
                                      line: 71,
                                      column: 34,
                                      offset: 3470,
                                    },
                                    indent: [],
                                  },
                                },
                                {
                                  type: 'code',
                                  lang: null,
                                  meta: null,
                                  value:
                                    'Expand-Archive -Path newrelic-java.zip -DestinationPath <var>DESTINATION_PATH</var>',
                                  position: {
                                    start: {
                                      line: 73,
                                      column: 8,
                                      offset: 3479,
                                    },
                                    end: {
                                      line: 75,
                                      column: 11,
                                      offset: 3584,
                                    },
                                    indent: [8, 8],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 71,
                                  column: 1,
                                  offset: 3437,
                                },
                                end: {
                                  line: 77,
                                  column: 3,
                                  offset: 3588,
                                },
                                indent: [1, 1, 1, 1, 1, 1],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 64,
                              column: 1,
                              offset: 3115,
                            },
                            end: {
                              line: 77,
                              column: 3,
                              offset: 3588,
                            },
                            indent: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 58,
                          column: 1,
                          offset: 2947,
                        },
                        end: {
                          line: 77,
                          column: 17,
                          offset: 3602,
                        },
                        indent: [
                          1,
                          1,
                          1,
                          1,
                          1,
                          8,
                          8,
                          8,
                          1,
                          8,
                          8,
                          8,
                          8,
                          1,
                          8,
                          8,
                          8,
                          1,
                          3,
                        ],
                      },
                    },
                    {
                      type: 'mdxBlockElement',
                      name: 'Collapser',
                      attributes: [
                        {
                          type: 'mdxAttribute',
                          name: 'id',
                          value: 'download-from-UI',
                          position: {
                            start: {
                              line: 80,
                              column: 5,
                              offset: 3619,
                            },
                            end: {
                              line: 80,
                              column: 26,
                              offset: 3640,
                            },
                          },
                        },
                        {
                          type: 'mdxAttribute',
                          name: 'title',
                          value: 'Download from the New Relic UI',
                          position: {
                            start: {
                              line: 81,
                              column: 5,
                              offset: 3645,
                            },
                            end: {
                              line: 81,
                              column: 43,
                              offset: 3683,
                            },
                          },
                        },
                      ],
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Complete the following:',
                              position: {
                                start: {
                                  line: 83,
                                  column: 1,
                                  offset: 3688,
                                },
                                end: {
                                  line: 83,
                                  column: 28,
                                  offset: 3715,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 83,
                              column: 1,
                              offset: 3688,
                            },
                            end: {
                              line: 83,
                              column: 28,
                              offset: 3715,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'list',
                          ordered: true,
                          start: 1,
                          spread: false,
                          children: [
                            {
                              type: 'listItem',
                              spread: false,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'link',
                                      title: 'Link opens in new window.',
                                      url: 'http://www.newrelic.com/',
                                      children: [
                                        {
                                          type: 'text',
                                          value: 'Sign in to New Relic.',
                                          position: {
                                            start: {
                                              line: 85,
                                              column: 9,
                                              offset: 3725,
                                            },
                                            end: {
                                              line: 85,
                                              column: 30,
                                              offset: 3746,
                                            },
                                            indent: [],
                                          },
                                        },
                                      ],
                                      position: {
                                        start: {
                                          line: 85,
                                          column: 8,
                                          offset: 3724,
                                        },
                                        end: {
                                          line: 85,
                                          column: 85,
                                          offset: 3801,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 85,
                                      column: 8,
                                      offset: 3724,
                                    },
                                    end: {
                                      line: 85,
                                      column: 85,
                                      offset: 3801,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 85,
                                  column: 1,
                                  offset: 3717,
                                },
                                end: {
                                  line: 85,
                                  column: 85,
                                  offset: 3801,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'listItem',
                              spread: false,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'From the ',
                                      position: {
                                        start: {
                                          line: 86,
                                          column: 8,
                                          offset: 3809,
                                        },
                                        end: {
                                          line: 86,
                                          column: 17,
                                          offset: 3818,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'link',
                                      title: null,
                                      url:
                                        '/docs/accounts-partnerships/education/getting-started-new-relic/glossary#account-dropdown',
                                      children: [
                                        {
                                          type: 'text',
                                          value: 'account dropdown',
                                          position: {
                                            start: {
                                              line: 86,
                                              column: 18,
                                              offset: 3819,
                                            },
                                            end: {
                                              line: 86,
                                              column: 34,
                                              offset: 3835,
                                            },
                                            indent: [],
                                          },
                                        },
                                      ],
                                      position: {
                                        start: {
                                          line: 86,
                                          column: 17,
                                          offset: 3818,
                                        },
                                        end: {
                                          line: 86,
                                          column: 126,
                                          offset: 3927,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'text',
                                      value: ' in the New Relic UI, select ',
                                      position: {
                                        start: {
                                          line: 86,
                                          column: 126,
                                          offset: 3927,
                                        },
                                        end: {
                                          line: 86,
                                          column: 155,
                                          offset: 3956,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'strong',
                                      children: [
                                        {
                                          type: 'text',
                                          value: 'Account settings',
                                          position: {
                                            start: {
                                              line: 86,
                                              column: 157,
                                              offset: 3958,
                                            },
                                            end: {
                                              line: 86,
                                              column: 173,
                                              offset: 3974,
                                            },
                                            indent: [],
                                          },
                                        },
                                      ],
                                      position: {
                                        start: {
                                          line: 86,
                                          column: 155,
                                          offset: 3956,
                                        },
                                        end: {
                                          line: 86,
                                          column: 175,
                                          offset: 3976,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'text',
                                      value: '.',
                                      position: {
                                        start: {
                                          line: 86,
                                          column: 175,
                                          offset: 3976,
                                        },
                                        end: {
                                          line: 86,
                                          column: 176,
                                          offset: 3977,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 86,
                                      column: 8,
                                      offset: 3809,
                                    },
                                    end: {
                                      line: 86,
                                      column: 176,
                                      offset: 3977,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 86,
                                  column: 1,
                                  offset: 3802,
                                },
                                end: {
                                  line: 86,
                                  column: 176,
                                  offset: 3977,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'listItem',
                              spread: false,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'In the right sidebar under ',
                                      position: {
                                        start: {
                                          line: 87,
                                          column: 8,
                                          offset: 3985,
                                        },
                                        end: {
                                          line: 87,
                                          column: 35,
                                          offset: 4012,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'strong',
                                      children: [
                                        {
                                          type: 'text',
                                          value: 'Most recent',
                                          position: {
                                            start: {
                                              line: 87,
                                              column: 37,
                                              offset: 4014,
                                            },
                                            end: {
                                              line: 87,
                                              column: 48,
                                              offset: 4025,
                                            },
                                            indent: [],
                                          },
                                        },
                                      ],
                                      position: {
                                        start: {
                                          line: 87,
                                          column: 35,
                                          offset: 4012,
                                        },
                                        end: {
                                          line: 87,
                                          column: 50,
                                          offset: 4027,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'text',
                                      value:
                                        ', select the Java agent, and save the ',
                                      position: {
                                        start: {
                                          line: 87,
                                          column: 50,
                                          offset: 4027,
                                        },
                                        end: {
                                          line: 87,
                                          column: 88,
                                          offset: 4065,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'inlineCode',
                                      value: 'newrelic-java.zip',
                                      position: {
                                        start: {
                                          line: 87,
                                          column: 88,
                                          offset: 4065,
                                        },
                                        end: {
                                          line: 87,
                                          column: 107,
                                          offset: 4084,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'text',
                                      value: ' to a temporary directory.',
                                      position: {
                                        start: {
                                          line: 87,
                                          column: 107,
                                          offset: 4084,
                                        },
                                        end: {
                                          line: 87,
                                          column: 133,
                                          offset: 4110,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 87,
                                      column: 8,
                                      offset: 3985,
                                    },
                                    end: {
                                      line: 87,
                                      column: 133,
                                      offset: 4110,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 87,
                                  column: 1,
                                  offset: 3978,
                                },
                                end: {
                                  line: 87,
                                  column: 133,
                                  offset: 4110,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'listItem',
                              spread: false,
                              checked: null,
                              children: [
                                {
                                  type: 'paragraph',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'Unzip ',
                                      position: {
                                        start: {
                                          line: 88,
                                          column: 8,
                                          offset: 4118,
                                        },
                                        end: {
                                          line: 88,
                                          column: 14,
                                          offset: 4124,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'inlineCode',
                                      value: 'newrelic-java.zip',
                                      position: {
                                        start: {
                                          line: 88,
                                          column: 14,
                                          offset: 4124,
                                        },
                                        end: {
                                          line: 88,
                                          column: 33,
                                          offset: 4143,
                                        },
                                        indent: [],
                                      },
                                    },
                                    {
                                      type: 'text',
                                      value: '.',
                                      position: {
                                        start: {
                                          line: 88,
                                          column: 33,
                                          offset: 4143,
                                        },
                                        end: {
                                          line: 88,
                                          column: 34,
                                          offset: 4144,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 88,
                                      column: 8,
                                      offset: 4118,
                                    },
                                    end: {
                                      line: 88,
                                      column: 34,
                                      offset: 4144,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 88,
                                  column: 1,
                                  offset: 4111,
                                },
                                end: {
                                  line: 90,
                                  column: 3,
                                  offset: 4148,
                                },
                                indent: [1, 1],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 85,
                              column: 1,
                              offset: 3717,
                            },
                            end: {
                              line: 90,
                              column: 3,
                              offset: 4148,
                            },
                            indent: [1, 1, 1, 1, 1],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 79,
                          column: 1,
                          offset: 3602,
                        },
                        end: {
                          line: 90,
                          column: 17,
                          offset: 4162,
                        },
                        indent: [1, 1, 1, 1, 1, 8, 8, 8, 8, 1, 3],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 40,
                      column: 1,
                      offset: 2466,
                    },
                    end: {
                      line: 91,
                      column: 18,
                      offset: 4178,
                    },
                    indent: [
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      8,
                      8,
                      8,
                      1,
                      8,
                      8,
                      8,
                      8,
                      1,
                      3,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      8,
                      8,
                      8,
                      1,
                      8,
                      8,
                      8,
                      8,
                      1,
                      8,
                      8,
                      8,
                      1,
                      3,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      8,
                      8,
                      8,
                      8,
                      1,
                      3,
                      1,
                    ],
                  },
                },
                {
                  type: 'heading',
                  depth: 2,
                  children: [
                    {
                      type: 'text',
                      value: '3. Configure the agent ',
                      position: {
                        start: {
                          line: 93,
                          column: 4,
                          offset: 4183,
                        },
                        end: {
                          line: 93,
                          column: 27,
                          offset: 4206,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'linkReference',
                      identifier: '#config-file',
                      label: '#config-file',
                      referenceType: 'shortcut',
                      children: [
                        {
                          type: 'text',
                          value: '#config-file',
                          position: {
                            start: {
                              line: 93,
                              column: 28,
                              offset: 4207,
                            },
                            end: {
                              line: 93,
                              column: 40,
                              offset: 4219,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 93,
                          column: 27,
                          offset: 4206,
                        },
                        end: {
                          line: 93,
                          column: 41,
                          offset: 4220,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 93,
                      column: 1,
                      offset: 4180,
                    },
                    end: {
                      line: 93,
                      column: 41,
                      offset: 4220,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value:
                        "Here's how to do a basic setup with agent configuration settings in ",
                      position: {
                        start: {
                          line: 95,
                          column: 1,
                          offset: 4222,
                        },
                        end: {
                          line: 95,
                          column: 69,
                          offset: 4290,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'inlineCode',
                      value: 'newrelic.yml',
                      position: {
                        start: {
                          line: 95,
                          column: 69,
                          offset: 4290,
                        },
                        end: {
                          line: 95,
                          column: 83,
                          offset: 4304,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: '.',
                      position: {
                        start: {
                          line: 95,
                          column: 83,
                          offset: 4304,
                        },
                        end: {
                          line: 95,
                          column: 84,
                          offset: 4305,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 95,
                      column: 1,
                      offset: 4222,
                    },
                    end: {
                      line: 95,
                      column: 84,
                      offset: 4305,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'mdxBlockElement',
                  name: 'Callout',
                  attributes: [
                    {
                      type: 'mdxAttribute',
                      name: 'variant',
                      value: 'tip',
                      position: {
                        start: {
                          line: 97,
                          column: 10,
                          offset: 4316,
                        },
                        end: {
                          line: 97,
                          column: 23,
                          offset: 4329,
                        },
                      },
                    },
                  ],
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          value:
                            'For an advanced installation, you can pass settings with ',
                          position: {
                            start: {
                              line: 98,
                              column: 1,
                              offset: 4331,
                            },
                            end: {
                              line: 98,
                              column: 60,
                              offset: 4390,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'link',
                          title: null,
                          url:
                            '/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Environment_Variables',
                          children: [
                            {
                              type: 'text',
                              value: 'environment\nvariables',
                              position: {
                                start: {
                                  line: 98,
                                  column: 61,
                                  offset: 4391,
                                },
                                end: {
                                  line: 99,
                                  column: 12,
                                  offset: 4414,
                                },
                                indent: [1],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 98,
                              column: 60,
                              offset: 4390,
                            },
                            end: {
                              line: 99,
                              column: 111,
                              offset: 4513,
                            },
                            indent: [1],
                          },
                        },
                        {
                          type: 'text',
                          value: ',\n',
                          position: {
                            start: {
                              line: 99,
                              column: 111,
                              offset: 4513,
                            },
                            end: {
                              line: 100,
                              column: 3,
                              offset: 4517,
                            },
                            indent: [1],
                          },
                        },
                        {
                          type: 'link',
                          title: null,
                          url:
                            '/docs/agents/java-agent/configuration/java-agent-configuration-config-file#System_Properties',
                          children: [
                            {
                              type: 'text',
                              value: 'Java system\nproperties',
                              position: {
                                start: {
                                  line: 100,
                                  column: 4,
                                  offset: 4518,
                                },
                                end: {
                                  line: 101,
                                  column: 13,
                                  offset: 4542,
                                },
                                indent: [1],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 100,
                              column: 3,
                              offset: 4517,
                            },
                            end: {
                              line: 101,
                              column: 108,
                              offset: 4637,
                            },
                            indent: [1],
                          },
                        },
                        {
                          type: 'text',
                          value: ',\nor ',
                          position: {
                            start: {
                              line: 101,
                              column: 108,
                              offset: 4637,
                            },
                            end: {
                              line: 102,
                              column: 6,
                              offset: 4644,
                            },
                            indent: [1],
                          },
                        },
                        {
                          type: 'link',
                          title: null,
                          url:
                            '/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration',
                          children: [
                            {
                              type: 'text',
                              value: 'server-side\nconfiguration',
                              position: {
                                start: {
                                  line: 102,
                                  column: 7,
                                  offset: 4645,
                                },
                                end: {
                                  line: 103,
                                  column: 16,
                                  offset: 4672,
                                },
                                indent: [1],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 102,
                              column: 6,
                              offset: 4644,
                            },
                            end: {
                              line: 103,
                              column: 95,
                              offset: 4751,
                            },
                            indent: [1],
                          },
                        },
                        {
                          type: 'text',
                          value:
                            '.\nTo understand the precedence of these configuration settings, see ',
                          position: {
                            start: {
                              line: 103,
                              column: 95,
                              offset: 4751,
                            },
                            end: {
                              line: 104,
                              column: 69,
                              offset: 4821,
                            },
                            indent: [1],
                          },
                        },
                        {
                          type: 'link',
                          title: null,
                          url:
                            '/docs/agents/java-agent/configuration/java-agent-configuration-config-file',
                          children: [
                            {
                              type: 'text',
                              value: 'Java agent\nconfiguration: Config\nfile',
                              position: {
                                start: {
                                  line: 104,
                                  column: 70,
                                  offset: 4822,
                                },
                                end: {
                                  line: 106,
                                  column: 7,
                                  offset: 4863,
                                },
                                indent: [1, 1],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 104,
                              column: 69,
                              offset: 4821,
                            },
                            end: {
                              line: 106,
                              column: 84,
                              offset: 4940,
                            },
                            indent: [1, 1],
                          },
                        },
                        {
                          type: 'text',
                          value: '.',
                          position: {
                            start: {
                              line: 106,
                              column: 84,
                              offset: 4940,
                            },
                            end: {
                              line: 106,
                              column: 85,
                              offset: 4941,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 98,
                          column: 1,
                          offset: 4331,
                        },
                        end: {
                          line: 106,
                          column: 85,
                          offset: 4941,
                        },
                        indent: [1, 1, 1, 1, 1, 1, 1, 1],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 97,
                      column: 1,
                      offset: 4307,
                    },
                    end: {
                      line: 107,
                      column: 11,
                      offset: 4952,
                    },
                    indent: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                  },
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'The Java agent requires the ',
                      position: {
                        start: {
                          line: 109,
                          column: 1,
                          offset: 4954,
                        },
                        end: {
                          line: 109,
                          column: 29,
                          offset: 4982,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'inlineCode',
                      value: 'license_key',
                      position: {
                        start: {
                          line: 109,
                          column: 29,
                          offset: 4982,
                        },
                        end: {
                          line: 109,
                          column: 42,
                          offset: 4995,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: ' and ',
                      position: {
                        start: {
                          line: 109,
                          column: 42,
                          offset: 4995,
                        },
                        end: {
                          line: 109,
                          column: 47,
                          offset: 5000,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'inlineCode',
                      value: 'app_name',
                      position: {
                        start: {
                          line: 109,
                          column: 47,
                          offset: 5000,
                        },
                        end: {
                          line: 109,
                          column: 57,
                          offset: 5010,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value:
                        ' settings at startup. All the other settings are optional, and you can review them in ',
                      position: {
                        start: {
                          line: 109,
                          column: 57,
                          offset: 5010,
                        },
                        end: {
                          line: 109,
                          column: 143,
                          offset: 5096,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'link',
                      title: null,
                      url:
                        '/docs/agents/java-agent/configuration/java-agent-configuration-config-file',
                      children: [
                        {
                          type: 'text',
                          value: 'Java agent configuration: Config file',
                          position: {
                            start: {
                              line: 109,
                              column: 144,
                              offset: 5097,
                            },
                            end: {
                              line: 109,
                              column: 181,
                              offset: 5134,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 109,
                          column: 143,
                          offset: 5096,
                        },
                        end: {
                          line: 109,
                          column: 258,
                          offset: 5211,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: '.',
                      position: {
                        start: {
                          line: 109,
                          column: 258,
                          offset: 5211,
                        },
                        end: {
                          line: 109,
                          column: 259,
                          offset: 5212,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 109,
                      column: 1,
                      offset: 4954,
                    },
                    end: {
                      line: 109,
                      column: 259,
                      offset: 5212,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value:
                        'Go to the unzipped installation file, and inside the ',
                      position: {
                        start: {
                          line: 111,
                          column: 1,
                          offset: 5214,
                        },
                        end: {
                          line: 111,
                          column: 54,
                          offset: 5267,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'inlineCode',
                      value: 'newrelic',
                      position: {
                        start: {
                          line: 111,
                          column: 54,
                          offset: 5267,
                        },
                        end: {
                          line: 111,
                          column: 64,
                          offset: 5277,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: ' subdirectory, edit ',
                      position: {
                        start: {
                          line: 111,
                          column: 64,
                          offset: 5277,
                        },
                        end: {
                          line: 111,
                          column: 84,
                          offset: 5297,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'inlineCode',
                      value: 'newrelic.yml',
                      position: {
                        start: {
                          line: 111,
                          column: 84,
                          offset: 5297,
                        },
                        end: {
                          line: 111,
                          column: 98,
                          offset: 5311,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: ':',
                      position: {
                        start: {
                          line: 111,
                          column: 98,
                          offset: 5311,
                        },
                        end: {
                          line: 111,
                          column: 99,
                          offset: 5312,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 111,
                      column: 1,
                      offset: 5214,
                    },
                    end: {
                      line: 111,
                      column: 99,
                      offset: 5312,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'list',
                  ordered: true,
                  start: 1,
                  spread: true,
                  children: [
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Find the line with ',
                              position: {
                                start: {
                                  line: 113,
                                  column: 4,
                                  offset: 5317,
                                },
                                end: {
                                  line: 113,
                                  column: 23,
                                  offset: 5336,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'inlineCode',
                              value: 'license_key',
                              position: {
                                start: {
                                  line: 113,
                                  column: 23,
                                  offset: 5336,
                                },
                                end: {
                                  line: 113,
                                  column: 36,
                                  offset: 5349,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: '.',
                              position: {
                                start: {
                                  line: 113,
                                  column: 36,
                                  offset: 5349,
                                },
                                end: {
                                  line: 113,
                                  column: 37,
                                  offset: 5350,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 113,
                              column: 4,
                              offset: 5317,
                            },
                            end: {
                              line: 113,
                              column: 37,
                              offset: 5350,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 113,
                          column: 1,
                          offset: 5314,
                        },
                        end: {
                          line: 113,
                          column: 37,
                          offset: 5350,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: true,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Replace ',
                              position: {
                                start: {
                                  line: 114,
                                  column: 4,
                                  offset: 5354,
                                },
                                end: {
                                  line: 114,
                                  column: 12,
                                  offset: 5362,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'mdxSpanElement',
                              name: 'var',
                              attributes: [],
                              children: [
                                {
                                  type: 'text',
                                  value: "'",
                                  position: {
                                    start: {
                                      line: 114,
                                      column: 17,
                                      offset: 5367,
                                    },
                                    end: {
                                      line: 114,
                                      column: 18,
                                      offset: 5368,
                                    },
                                    indent: [],
                                  },
                                },
                                {
                                  type: 'text',
                                  value: '<',
                                  position: {
                                    start: {
                                      line: 114,
                                      column: 18,
                                      offset: 5368,
                                    },
                                    end: {
                                      line: 114,
                                      column: 22,
                                      offset: 5372,
                                    },
                                    indent: [],
                                  },
                                },
                                {
                                  type: 'text',
                                  value: "%= license_key %>'",
                                  position: {
                                    start: {
                                      line: 114,
                                      column: 22,
                                      offset: 5372,
                                    },
                                    end: {
                                      line: 114,
                                      column: 40,
                                      offset: 5390,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 114,
                                  column: 12,
                                  offset: 5362,
                                },
                                end: {
                                  line: 114,
                                  column: 46,
                                  offset: 5396,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ' with your ',
                              position: {
                                start: {
                                  line: 114,
                                  column: 46,
                                  offset: 5396,
                                },
                                end: {
                                  line: 114,
                                  column: 57,
                                  offset: 5407,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/accounts/install-new-relic/account-setup/license-key',
                              children: [
                                {
                                  type: 'text',
                                  value: 'license',
                                  position: {
                                    start: {
                                      line: 114,
                                      column: 58,
                                      offset: 5408,
                                    },
                                    end: {
                                      line: 114,
                                      column: 65,
                                      offset: 5415,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 114,
                                  column: 57,
                                  offset: 5407,
                                },
                                end: {
                                  line: 114,
                                  column: 126,
                                  offset: 5476,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: '. For example:',
                              position: {
                                start: {
                                  line: 114,
                                  column: 126,
                                  offset: 5476,
                                },
                                end: {
                                  line: 114,
                                  column: 140,
                                  offset: 5490,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 114,
                              column: 4,
                              offset: 5354,
                            },
                            end: {
                              line: 114,
                              column: 140,
                              offset: 5490,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'code',
                          lang: null,
                          meta: null,
                          value:
                            'license_key: 456n20n1367ov2s174v51nvn789d21s67v26NRAL',
                          position: {
                            start: {
                              line: 116,
                              column: 4,
                              offset: 5495,
                            },
                            end: {
                              line: 118,
                              column: 7,
                              offset: 5562,
                            },
                            indent: [4, 4],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 114,
                          column: 1,
                          offset: 5351,
                        },
                        end: {
                          line: 119,
                          column: 1,
                          offset: 5563,
                        },
                        indent: [1, 1, 1, 1, 1],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Find the line with ',
                              position: {
                                start: {
                                  line: 120,
                                  column: 4,
                                  offset: 5567,
                                },
                                end: {
                                  line: 120,
                                  column: 23,
                                  offset: 5586,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'inlineCode',
                              value: 'app_name',
                              position: {
                                start: {
                                  line: 120,
                                  column: 23,
                                  offset: 5586,
                                },
                                end: {
                                  line: 120,
                                  column: 33,
                                  offset: 5596,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: '.',
                              position: {
                                start: {
                                  line: 120,
                                  column: 33,
                                  offset: 5596,
                                },
                                end: {
                                  line: 120,
                                  column: 34,
                                  offset: 5597,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 120,
                              column: 4,
                              offset: 5567,
                            },
                            end: {
                              line: 120,
                              column: 34,
                              offset: 5597,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 120,
                          column: 1,
                          offset: 5564,
                        },
                        end: {
                          line: 120,
                          column: 34,
                          offset: 5597,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: true,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Replace ',
                              position: {
                                start: {
                                  line: 121,
                                  column: 4,
                                  offset: 5601,
                                },
                                end: {
                                  line: 121,
                                  column: 12,
                                  offset: 5609,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'mdxSpanElement',
                              name: 'var',
                              attributes: [],
                              children: [
                                {
                                  type: 'text',
                                  value: 'My Application',
                                  position: {
                                    start: {
                                      line: 121,
                                      column: 17,
                                      offset: 5614,
                                    },
                                    end: {
                                      line: 121,
                                      column: 31,
                                      offset: 5628,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 121,
                                  column: 12,
                                  offset: 5609,
                                },
                                end: {
                                  line: 121,
                                  column: 37,
                                  offset: 5634,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value:
                                ' with a name that helps you identify the application. For example:',
                              position: {
                                start: {
                                  line: 121,
                                  column: 37,
                                  offset: 5634,
                                },
                                end: {
                                  line: 121,
                                  column: 103,
                                  offset: 5700,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 121,
                              column: 4,
                              offset: 5601,
                            },
                            end: {
                              line: 121,
                              column: 103,
                              offset: 5700,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'code',
                          lang: null,
                          meta: null,
                          value: 'app_name: Tax Calculator',
                          position: {
                            start: {
                              line: 123,
                              column: 4,
                              offset: 5705,
                            },
                            end: {
                              line: 125,
                              column: 7,
                              offset: 5743,
                            },
                            indent: [4, 4],
                          },
                        },
                        {
                          type: 'mdxBlockElement',
                          name: 'Callout',
                          attributes: [
                            {
                              type: 'mdxAttribute',
                              name: 'variant',
                              value: 'tip',
                              position: {
                                start: {
                                  line: 127,
                                  column: 13,
                                  offset: 5757,
                                },
                                end: {
                                  line: 127,
                                  column: 26,
                                  offset: 5770,
                                },
                              },
                            },
                          ],
                          children: [
                            {
                              type: 'paragraph',
                              children: [
                                {
                                  type: 'text',
                                  value:
                                    'If you need tips about how to name your application, see ',
                                  position: {
                                    start: {
                                      line: 128,
                                      column: 4,
                                      offset: 5775,
                                    },
                                    end: {
                                      line: 128,
                                      column: 63,
                                      offset: 5834,
                                    },
                                    indent: [],
                                  },
                                },
                                {
                                  type: 'link',
                                  title: null,
                                  url:
                                    '/docs/agents/manage-apm-agents/app-naming/name-your-application',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'Name your\napplication',
                                      position: {
                                        start: {
                                          line: 128,
                                          column: 64,
                                          offset: 5835,
                                        },
                                        end: {
                                          line: 129,
                                          column: 17,
                                          offset: 5861,
                                        },
                                        indent: [4],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 128,
                                      column: 63,
                                      offset: 5834,
                                    },
                                    end: {
                                      line: 129,
                                      column: 83,
                                      offset: 5927,
                                    },
                                    indent: [4],
                                  },
                                },
                                {
                                  type: 'text',
                                  value: '.',
                                  position: {
                                    start: {
                                      line: 129,
                                      column: 83,
                                      offset: 5927,
                                    },
                                    end: {
                                      line: 129,
                                      column: 84,
                                      offset: 5928,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 128,
                                  column: 4,
                                  offset: 5775,
                                },
                                end: {
                                  line: 129,
                                  column: 84,
                                  offset: 5928,
                                },
                                indent: [4],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 127,
                              column: 4,
                              offset: 5748,
                            },
                            end: {
                              line: 130,
                              column: 14,
                              offset: 5942,
                            },
                            indent: [4, 4, 4],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 121,
                          column: 1,
                          offset: 5598,
                        },
                        end: {
                          line: 131,
                          column: 1,
                          offset: 5943,
                        },
                        indent: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value:
                                'Add optional settings that you want, such as ',
                              position: {
                                start: {
                                  line: 132,
                                  column: 4,
                                  offset: 5947,
                                },
                                end: {
                                  line: 132,
                                  column: 49,
                                  offset: 5992,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Logging-Configuration',
                              children: [
                                {
                                  type: 'text',
                                  value: 'agent logging',
                                  position: {
                                    start: {
                                      line: 132,
                                      column: 50,
                                      offset: 5993,
                                    },
                                    end: {
                                      line: 132,
                                      column: 63,
                                      offset: 6006,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 132,
                                  column: 49,
                                  offset: 5992,
                                },
                                end: {
                                  line: 132,
                                  column: 162,
                                  offset: 6105,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ' and ',
                              position: {
                                start: {
                                  line: 132,
                                  column: 162,
                                  offset: 6105,
                                },
                                end: {
                                  line: 132,
                                  column: 167,
                                  offset: 6110,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ev-NEW_RELIC_DISTRIBUTED_TRACING_ENABLED',
                              children: [
                                {
                                  type: 'text',
                                  value: 'distributed tracing',
                                  position: {
                                    start: {
                                      line: 132,
                                      column: 168,
                                      offset: 6111,
                                    },
                                    end: {
                                      line: 132,
                                      column: 187,
                                      offset: 6130,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 132,
                                  column: 167,
                                  offset: 6110,
                                },
                                end: {
                                  line: 132,
                                  column: 305,
                                  offset: 6248,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ' (or add them later).',
                              position: {
                                start: {
                                  line: 132,
                                  column: 305,
                                  offset: 6248,
                                },
                                end: {
                                  line: 132,
                                  column: 326,
                                  offset: 6269,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 132,
                              column: 4,
                              offset: 5947,
                            },
                            end: {
                              line: 132,
                              column: 326,
                              offset: 6269,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 132,
                          column: 1,
                          offset: 5944,
                        },
                        end: {
                          line: 132,
                          column: 326,
                          offset: 6269,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Save and close ',
                              position: {
                                start: {
                                  line: 133,
                                  column: 4,
                                  offset: 6273,
                                },
                                end: {
                                  line: 133,
                                  column: 19,
                                  offset: 6288,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'inlineCode',
                              value: 'newrelic.yml',
                              position: {
                                start: {
                                  line: 133,
                                  column: 19,
                                  offset: 6288,
                                },
                                end: {
                                  line: 133,
                                  column: 33,
                                  offset: 6302,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: '.',
                              position: {
                                start: {
                                  line: 133,
                                  column: 33,
                                  offset: 6302,
                                },
                                end: {
                                  line: 133,
                                  column: 34,
                                  offset: 6303,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 133,
                              column: 4,
                              offset: 6273,
                            },
                            end: {
                              line: 133,
                              column: 34,
                              offset: 6303,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 133,
                          column: 1,
                          offset: 6270,
                        },
                        end: {
                          line: 133,
                          column: 34,
                          offset: 6303,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 113,
                      column: 1,
                      offset: 5314,
                    },
                    end: {
                      line: 133,
                      column: 34,
                      offset: 6303,
                    },
                    indent: [
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                    ],
                  },
                },
                {
                  type: 'heading',
                  depth: 2,
                  children: [
                    {
                      type: 'text',
                      value: '4. Install the agent ',
                      position: {
                        start: {
                          line: 135,
                          column: 4,
                          offset: 6308,
                        },
                        end: {
                          line: 135,
                          column: 25,
                          offset: 6329,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'linkReference',
                      identifier: '#install-agent',
                      label: '#install-agent',
                      referenceType: 'shortcut',
                      children: [
                        {
                          type: 'text',
                          value: '#install-agent',
                          position: {
                            start: {
                              line: 135,
                              column: 26,
                              offset: 6330,
                            },
                            end: {
                              line: 135,
                              column: 40,
                              offset: 6344,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 135,
                          column: 25,
                          offset: 6329,
                        },
                        end: {
                          line: 135,
                          column: 41,
                          offset: 6345,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 135,
                      column: 1,
                      offset: 6305,
                    },
                    end: {
                      line: 135,
                      column: 41,
                      offset: 6345,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value:
                        'The Java agent installation involves copying all the unzipped New Relic files into the directory structure of your application server/container. For example, you can create a ',
                      position: {
                        start: {
                          line: 137,
                          column: 1,
                          offset: 6347,
                        },
                        end: {
                          line: 137,
                          column: 176,
                          offset: 6522,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'inlineCode',
                      value: '/opt/newrelic',
                      position: {
                        start: {
                          line: 137,
                          column: 176,
                          offset: 6522,
                        },
                        end: {
                          line: 137,
                          column: 191,
                          offset: 6537,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value:
                        ' directory, but if you want to put the files elsewhere, make sure of the following:',
                      position: {
                        start: {
                          line: 137,
                          column: 191,
                          offset: 6537,
                        },
                        end: {
                          line: 137,
                          column: 274,
                          offset: 6620,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 137,
                      column: 1,
                      offset: 6347,
                    },
                    end: {
                      line: 137,
                      column: 274,
                      offset: 6620,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'list',
                  ordered: false,
                  start: null,
                  spread: false,
                  children: [
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value:
                                'The .jar files in the directory cannot be on the classpath.',
                              position: {
                                start: {
                                  line: 139,
                                  column: 3,
                                  offset: 6624,
                                },
                                end: {
                                  line: 139,
                                  column: 62,
                                  offset: 6683,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 139,
                              column: 3,
                              offset: 6624,
                            },
                            end: {
                              line: 139,
                              column: 62,
                              offset: 6683,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 139,
                          column: 1,
                          offset: 6622,
                        },
                        end: {
                          line: 139,
                          column: 62,
                          offset: 6683,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value:
                                'The .jar files cannot be in directories specified in ',
                              position: {
                                start: {
                                  line: 140,
                                  column: 3,
                                  offset: 6686,
                                },
                                end: {
                                  line: 140,
                                  column: 56,
                                  offset: 6739,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'inlineCode',
                              value: 'java.endorsed.dirs',
                              position: {
                                start: {
                                  line: 140,
                                  column: 56,
                                  offset: 6739,
                                },
                                end: {
                                  line: 140,
                                  column: 76,
                                  offset: 6759,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: '.',
                              position: {
                                start: {
                                  line: 140,
                                  column: 76,
                                  offset: 6759,
                                },
                                end: {
                                  line: 140,
                                  column: 77,
                                  offset: 6760,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 140,
                              column: 3,
                              offset: 6686,
                            },
                            end: {
                              line: 140,
                              column: 77,
                              offset: 6760,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 140,
                          column: 1,
                          offset: 6684,
                        },
                        end: {
                          line: 140,
                          column: 77,
                          offset: 6760,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 139,
                      column: 1,
                      offset: 6622,
                    },
                    end: {
                      line: 140,
                      column: 77,
                      offset: 6760,
                    },
                    indent: [1],
                  },
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'To install the Java agent:',
                      position: {
                        start: {
                          line: 142,
                          column: 1,
                          offset: 6762,
                        },
                        end: {
                          line: 142,
                          column: 27,
                          offset: 6788,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 142,
                      column: 1,
                      offset: 6762,
                    },
                    end: {
                      line: 142,
                      column: 27,
                      offset: 6788,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'list',
                  ordered: true,
                  start: 1,
                  spread: true,
                  children: [
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value:
                                'In your application server/container directory structure, create a directory for New Relic files (for example, ',
                              position: {
                                start: {
                                  line: 144,
                                  column: 4,
                                  offset: 6793,
                                },
                                end: {
                                  line: 144,
                                  column: 115,
                                  offset: 6904,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'inlineCode',
                              value: '/opt/newrelic',
                              position: {
                                start: {
                                  line: 144,
                                  column: 115,
                                  offset: 6904,
                                },
                                end: {
                                  line: 144,
                                  column: 130,
                                  offset: 6919,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ').',
                              position: {
                                start: {
                                  line: 144,
                                  column: 130,
                                  offset: 6919,
                                },
                                end: {
                                  line: 144,
                                  column: 132,
                                  offset: 6921,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 144,
                              column: 4,
                              offset: 6793,
                            },
                            end: {
                              line: 144,
                              column: 132,
                              offset: 6921,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 144,
                          column: 1,
                          offset: 6790,
                        },
                        end: {
                          line: 144,
                          column: 132,
                          offset: 6921,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value:
                                'Copy all the New Relic files from your unzipped ',
                              position: {
                                start: {
                                  line: 145,
                                  column: 4,
                                  offset: 6925,
                                },
                                end: {
                                  line: 145,
                                  column: 52,
                                  offset: 6973,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'inlineCode',
                              value: 'newrelic',
                              position: {
                                start: {
                                  line: 145,
                                  column: 52,
                                  offset: 6973,
                                },
                                end: {
                                  line: 145,
                                  column: 62,
                                  offset: 6983,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ' directory into your new directory.',
                              position: {
                                start: {
                                  line: 145,
                                  column: 62,
                                  offset: 6983,
                                },
                                end: {
                                  line: 145,
                                  column: 97,
                                  offset: 7018,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 145,
                              column: 4,
                              offset: 6925,
                            },
                            end: {
                              line: 145,
                              column: 97,
                              offset: 7018,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 145,
                          column: 1,
                          offset: 6922,
                        },
                        end: {
                          line: 145,
                          column: 97,
                          offset: 7018,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: true,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value:
                                'Make sure that your application server/container includes this option when it starts Java (for tips on how to do this with your tool or framework, see ',
                              position: {
                                start: {
                                  line: 146,
                                  column: 4,
                                  offset: 7022,
                                },
                                end: {
                                  line: 146,
                                  column: 155,
                                  offset: 7173,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/agents/java-agent/installation/start-java-agent-jvm-switch',
                              children: [
                                {
                                  type: 'text',
                                  value: 'JVM arguments',
                                  position: {
                                    start: {
                                      line: 146,
                                      column: 156,
                                      offset: 7174,
                                    },
                                    end: {
                                      line: 146,
                                      column: 169,
                                      offset: 7187,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 146,
                                  column: 155,
                                  offset: 7173,
                                },
                                end: {
                                  line: 146,
                                  column: 236,
                                  offset: 7254,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: '):',
                              position: {
                                start: {
                                  line: 146,
                                  column: 236,
                                  offset: 7254,
                                },
                                end: {
                                  line: 146,
                                  column: 238,
                                  offset: 7256,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 146,
                              column: 4,
                              offset: 7022,
                            },
                            end: {
                              line: 146,
                              column: 238,
                              offset: 7256,
                            },
                            indent: [],
                          },
                        },
                        {
                          type: 'code',
                          lang: null,
                          meta: null,
                          value:
                            '-javaagent:<var>/full/path/to/</var>newrelic.jar',
                          position: {
                            start: {
                              line: 148,
                              column: 4,
                              offset: 7261,
                            },
                            end: {
                              line: 150,
                              column: 7,
                              offset: 7323,
                            },
                            indent: [4, 4],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 146,
                          column: 1,
                          offset: 7019,
                        },
                        end: {
                          line: 151,
                          column: 1,
                          offset: 7324,
                        },
                        indent: [1, 1, 1, 1, 1],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value:
                                'Start or restart your application server/container.',
                              position: {
                                start: {
                                  line: 152,
                                  column: 4,
                                  offset: 7328,
                                },
                                end: {
                                  line: 152,
                                  column: 55,
                                  offset: 7379,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 152,
                              column: 4,
                              offset: 7328,
                            },
                            end: {
                              line: 152,
                              column: 55,
                              offset: 7379,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 152,
                          column: 1,
                          offset: 7325,
                        },
                        end: {
                          line: 152,
                          column: 55,
                          offset: 7379,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 144,
                      column: 1,
                      offset: 6790,
                    },
                    end: {
                      line: 152,
                      column: 55,
                      offset: 7379,
                    },
                    indent: [1, 1, 1, 1, 1, 1, 1, 1],
                  },
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value:
                        'Generate some traffic for your app, and then wait a few minutes for data to appear in the ',
                      position: {
                        start: {
                          line: 154,
                          column: 1,
                          offset: 7381,
                        },
                        end: {
                          line: 154,
                          column: 91,
                          offset: 7471,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'link',
                      title: null,
                      url: '/docs/applications-menu/applications-overview',
                      children: [
                        {
                          type: 'text',
                          value: 'APM Summary page',
                          position: {
                            start: {
                              line: 154,
                              column: 92,
                              offset: 7472,
                            },
                            end: {
                              line: 154,
                              column: 108,
                              offset: 7488,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 154,
                          column: 91,
                          offset: 7471,
                        },
                        end: {
                          line: 154,
                          column: 156,
                          offset: 7536,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: '. If nothing appears, follow the ',
                      position: {
                        start: {
                          line: 154,
                          column: 156,
                          offset: 7536,
                        },
                        end: {
                          line: 154,
                          column: 189,
                          offset: 7569,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'link',
                      title: null,
                      url:
                        '/docs/agents/java-agent/troubleshooting/no-data-appears-java',
                      children: [
                        {
                          type: 'text',
                          value: 'troubleshooting procedures',
                          position: {
                            start: {
                              line: 154,
                              column: 190,
                              offset: 7570,
                            },
                            end: {
                              line: 154,
                              column: 216,
                              offset: 7596,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 154,
                          column: 189,
                          offset: 7569,
                        },
                        end: {
                          line: 154,
                          column: 279,
                          offset: 7659,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value: '.',
                      position: {
                        start: {
                          line: 154,
                          column: 279,
                          offset: 7659,
                        },
                        end: {
                          line: 154,
                          column: 280,
                          offset: 7660,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 154,
                      column: 1,
                      offset: 7381,
                    },
                    end: {
                      line: 154,
                      column: 280,
                      offset: 7660,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'heading',
                  depth: 2,
                  children: [
                    {
                      type: 'text',
                      value: '5. Post-installation tasks ',
                      position: {
                        start: {
                          line: 156,
                          column: 4,
                          offset: 7665,
                        },
                        end: {
                          line: 156,
                          column: 31,
                          offset: 7692,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'linkReference',
                      identifier: '#follow-up-tips',
                      label: '#follow-up-tips',
                      referenceType: 'shortcut',
                      children: [
                        {
                          type: 'text',
                          value: '#follow-up-tips',
                          position: {
                            start: {
                              line: 156,
                              column: 32,
                              offset: 7693,
                            },
                            end: {
                              line: 156,
                              column: 47,
                              offset: 7708,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 156,
                          column: 31,
                          offset: 7692,
                        },
                        end: {
                          line: 156,
                          column: 48,
                          offset: 7709,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 156,
                      column: 1,
                      offset: 7662,
                    },
                    end: {
                      line: 156,
                      column: 48,
                      offset: 7709,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'If you are using ',
                      position: {
                        start: {
                          line: 158,
                          column: 1,
                          offset: 7711,
                        },
                        end: {
                          line: 158,
                          column: 18,
                          offset: 7728,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'inlineCode',
                      value: 'newrelic.yml',
                      position: {
                        start: {
                          line: 158,
                          column: 18,
                          offset: 7728,
                        },
                        end: {
                          line: 158,
                          column: 32,
                          offset: 7742,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'text',
                      value:
                        ' to make configuration settings, consider the following:',
                      position: {
                        start: {
                          line: 158,
                          column: 32,
                          offset: 7742,
                        },
                        end: {
                          line: 158,
                          column: 88,
                          offset: 7798,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 158,
                      column: 1,
                      offset: 7711,
                    },
                    end: {
                      line: 158,
                      column: 88,
                      offset: 7798,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'list',
                  ordered: false,
                  start: null,
                  spread: false,
                  children: [
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'We recommend you change the default ',
                              position: {
                                start: {
                                  line: 160,
                                  column: 3,
                                  offset: 7802,
                                },
                                end: {
                                  line: 160,
                                  column: 39,
                                  offset: 7838,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'inlineCode',
                              value: 'newrelic.yml',
                              position: {
                                start: {
                                  line: 160,
                                  column: 39,
                                  offset: 7838,
                                },
                                end: {
                                  line: 160,
                                  column: 53,
                                  offset: 7852,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value:
                                ' file permissions to read/write only for the owner of the application server process.',
                              position: {
                                start: {
                                  line: 160,
                                  column: 53,
                                  offset: 7852,
                                },
                                end: {
                                  line: 160,
                                  column: 138,
                                  offset: 7937,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 160,
                              column: 3,
                              offset: 7802,
                            },
                            end: {
                              line: 160,
                              column: 138,
                              offset: 7937,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 160,
                          column: 1,
                          offset: 7800,
                        },
                        end: {
                          line: 160,
                          column: 138,
                          offset: 7937,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value:
                                'As you would with other important files, be sure ',
                              position: {
                                start: {
                                  line: 161,
                                  column: 3,
                                  offset: 7940,
                                },
                                end: {
                                  line: 161,
                                  column: 52,
                                  offset: 7989,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'inlineCode',
                              value: 'newrelic.yml',
                              position: {
                                start: {
                                  line: 161,
                                  column: 52,
                                  offset: 7989,
                                },
                                end: {
                                  line: 161,
                                  column: 66,
                                  offset: 8003,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ' is part of your backup routine.',
                              position: {
                                start: {
                                  line: 161,
                                  column: 66,
                                  offset: 8003,
                                },
                                end: {
                                  line: 161,
                                  column: 98,
                                  offset: 8035,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 161,
                              column: 3,
                              offset: 7940,
                            },
                            end: {
                              line: 161,
                              column: 98,
                              offset: 8035,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 161,
                          column: 1,
                          offset: 7938,
                        },
                        end: {
                          line: 161,
                          column: 98,
                          offset: 8035,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value:
                                'We recommend using New Relic Diagnostics to ',
                              position: {
                                start: {
                                  line: 162,
                                  column: 3,
                                  offset: 8038,
                                },
                                end: {
                                  line: 162,
                                  column: 47,
                                  offset: 8082,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                'https://docs.newrelic.com/docs/using-new-relic/cross-product-functions/troubleshooting/new-relic-diagnostics#h2-validate-your-config-file-settings',
                              children: [
                                {
                                  type: 'text',
                                  value: 'validate your settings',
                                  position: {
                                    start: {
                                      line: 162,
                                      column: 48,
                                      offset: 8083,
                                    },
                                    end: {
                                      line: 162,
                                      column: 70,
                                      offset: 8105,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 162,
                                  column: 47,
                                  offset: 8082,
                                },
                                end: {
                                  line: 162,
                                  column: 219,
                                  offset: 8254,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ', either before or after you deploy.',
                              position: {
                                start: {
                                  line: 162,
                                  column: 219,
                                  offset: 8254,
                                },
                                end: {
                                  line: 162,
                                  column: 255,
                                  offset: 8290,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 162,
                              column: 3,
                              offset: 8038,
                            },
                            end: {
                              line: 162,
                              column: 255,
                              offset: 8290,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 162,
                          column: 1,
                          offset: 8036,
                        },
                        end: {
                          line: 162,
                          column: 255,
                          offset: 8290,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 160,
                      column: 1,
                      offset: 7800,
                    },
                    end: {
                      line: 162,
                      column: 255,
                      offset: 8290,
                    },
                    indent: [1, 1],
                  },
                },
                {
                  type: 'heading',
                  depth: 2,
                  children: [
                    {
                      type: 'text',
                      value: "What's next? ",
                      position: {
                        start: {
                          line: 164,
                          column: 4,
                          offset: 8295,
                        },
                        end: {
                          line: 164,
                          column: 17,
                          offset: 8308,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'linkReference',
                      identifier: '#next-steps',
                      label: '#next-steps',
                      referenceType: 'shortcut',
                      children: [
                        {
                          type: 'text',
                          value: '#next-steps',
                          position: {
                            start: {
                              line: 164,
                              column: 18,
                              offset: 8309,
                            },
                            end: {
                              line: 164,
                              column: 29,
                              offset: 8320,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 164,
                          column: 17,
                          offset: 8308,
                        },
                        end: {
                          line: 164,
                          column: 30,
                          offset: 8321,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 164,
                      column: 1,
                      offset: 8292,
                    },
                    end: {
                      line: 164,
                      column: 30,
                      offset: 8321,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Here are some additional topics to consider:',
                      position: {
                        start: {
                          line: 166,
                          column: 1,
                          offset: 8323,
                        },
                        end: {
                          line: 166,
                          column: 45,
                          offset: 8367,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 166,
                      column: 1,
                      offset: 8323,
                    },
                    end: {
                      line: 166,
                      column: 45,
                      offset: 8367,
                    },
                    indent: [],
                  },
                },
                {
                  type: 'list',
                  ordered: false,
                  start: null,
                  spread: false,
                  children: [
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'For Docker questions, see ',
                              position: {
                                start: {
                                  line: 168,
                                  column: 3,
                                  offset: 8371,
                                },
                                end: {
                                  line: 168,
                                  column: 29,
                                  offset: 8397,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/agents/java-agent/additional-installation/install-new-relic-java-agent-docker',
                              children: [
                                {
                                  type: 'text',
                                  value:
                                    'Install New Relic Java agent for Docker',
                                  position: {
                                    start: {
                                      line: 168,
                                      column: 30,
                                      offset: 8398,
                                    },
                                    end: {
                                      line: 168,
                                      column: 69,
                                      offset: 8437,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 168,
                                  column: 29,
                                  offset: 8397,
                                },
                                end: {
                                  line: 168,
                                  column: 155,
                                  offset: 8523,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: '.',
                              position: {
                                start: {
                                  line: 168,
                                  column: 155,
                                  offset: 8523,
                                },
                                end: {
                                  line: 168,
                                  column: 156,
                                  offset: 8524,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 168,
                              column: 3,
                              offset: 8371,
                            },
                            end: {
                              line: 168,
                              column: 156,
                              offset: 8524,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 168,
                          column: 1,
                          offset: 8369,
                        },
                        end: {
                          line: 168,
                          column: 156,
                          offset: 8524,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value:
                                'View your app in New Relic and get comfortable with the user interface.',
                              position: {
                                start: {
                                  line: 169,
                                  column: 3,
                                  offset: 8527,
                                },
                                end: {
                                  line: 169,
                                  column: 74,
                                  offset: 8598,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 169,
                              column: 3,
                              offset: 8527,
                            },
                            end: {
                              line: 169,
                              column: 74,
                              offset: 8598,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 169,
                          column: 1,
                          offset: 8525,
                        },
                        end: {
                          line: 169,
                          column: 74,
                          offset: 8598,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value:
                                'Read the documentation about APM. For example, read about the ',
                              position: {
                                start: {
                                  line: 170,
                                  column: 3,
                                  offset: 8601,
                                },
                                end: {
                                  line: 170,
                                  column: 65,
                                  offset: 8663,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/apm/applications-menu/monitoring/apm-overview-page',
                              children: [
                                {
                                  type: 'text',
                                  value: 'Summary page',
                                  position: {
                                    start: {
                                      line: 170,
                                      column: 66,
                                      offset: 8664,
                                    },
                                    end: {
                                      line: 170,
                                      column: 78,
                                      offset: 8676,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 170,
                                  column: 65,
                                  offset: 8663,
                                },
                                end: {
                                  line: 170,
                                  column: 137,
                                  offset: 8735,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ', the ',
                              position: {
                                start: {
                                  line: 170,
                                  column: 137,
                                  offset: 8735,
                                },
                                end: {
                                  line: 170,
                                  column: 143,
                                  offset: 8741,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/agents/java-agent/features/jvm-metrics-page',
                              children: [
                                {
                                  type: 'strong',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'JVM metrics',
                                      position: {
                                        start: {
                                          line: 170,
                                          column: 146,
                                          offset: 8744,
                                        },
                                        end: {
                                          line: 170,
                                          column: 157,
                                          offset: 8755,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 170,
                                      column: 144,
                                      offset: 8742,
                                    },
                                    end: {
                                      line: 170,
                                      column: 159,
                                      offset: 8757,
                                    },
                                    indent: [],
                                  },
                                },
                                {
                                  type: 'text',
                                  value: ' page',
                                  position: {
                                    start: {
                                      line: 170,
                                      column: 159,
                                      offset: 8757,
                                    },
                                    end: {
                                      line: 170,
                                      column: 164,
                                      offset: 8762,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 170,
                                  column: 143,
                                  offset: 8741,
                                },
                                end: {
                                  line: 170,
                                  column: 216,
                                  offset: 8814,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ', the ',
                              position: {
                                start: {
                                  line: 170,
                                  column: 216,
                                  offset: 8814,
                                },
                                end: {
                                  line: 170,
                                  column: 222,
                                  offset: 8820,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/apm/applications-menu/monitoring/transactions-page',
                              children: [
                                {
                                  type: 'strong',
                                  children: [
                                    {
                                      type: 'text',
                                      value: 'Transactions',
                                      position: {
                                        start: {
                                          line: 170,
                                          column: 225,
                                          offset: 8823,
                                        },
                                        end: {
                                          line: 170,
                                          column: 237,
                                          offset: 8835,
                                        },
                                        indent: [],
                                      },
                                    },
                                  ],
                                  position: {
                                    start: {
                                      line: 170,
                                      column: 223,
                                      offset: 8821,
                                    },
                                    end: {
                                      line: 170,
                                      column: 239,
                                      offset: 8837,
                                    },
                                    indent: [],
                                  },
                                },
                                {
                                  type: 'text',
                                  value: ' page',
                                  position: {
                                    start: {
                                      line: 170,
                                      column: 239,
                                      offset: 8837,
                                    },
                                    end: {
                                      line: 170,
                                      column: 244,
                                      offset: 8842,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 170,
                                  column: 222,
                                  offset: 8820,
                                },
                                end: {
                                  line: 170,
                                  column: 303,
                                  offset: 8901,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ', and other ',
                              position: {
                                start: {
                                  line: 170,
                                  column: 303,
                                  offset: 8901,
                                },
                                end: {
                                  line: 170,
                                  column: 315,
                                  offset: 8913,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url: '/docs/apm',
                              children: [
                                {
                                  type: 'text',
                                  value: 'performance monitoring features',
                                  position: {
                                    start: {
                                      line: 170,
                                      column: 316,
                                      offset: 8914,
                                    },
                                    end: {
                                      line: 170,
                                      column: 347,
                                      offset: 8945,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 170,
                                  column: 315,
                                  offset: 8913,
                                },
                                end: {
                                  line: 170,
                                  column: 359,
                                  offset: 8957,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: '.',
                              position: {
                                start: {
                                  line: 170,
                                  column: 359,
                                  offset: 8957,
                                },
                                end: {
                                  line: 170,
                                  column: 360,
                                  offset: 8958,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 170,
                              column: 3,
                              offset: 8601,
                            },
                            end: {
                              line: 170,
                              column: 360,
                              offset: 8958,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 170,
                          column: 1,
                          offset: 8599,
                        },
                        end: {
                          line: 170,
                          column: 360,
                          offset: 8958,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Query your data using ',
                              position: {
                                start: {
                                  line: 171,
                                  column: 3,
                                  offset: 8961,
                                },
                                end: {
                                  line: 171,
                                  column: 25,
                                  offset: 8983,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql',
                              children: [
                                {
                                  type: 'text',
                                  value: 'NRQL',
                                  position: {
                                    start: {
                                      line: 171,
                                      column: 26,
                                      offset: 8984,
                                    },
                                    end: {
                                      line: 171,
                                      column: 30,
                                      offset: 8988,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 171,
                                  column: 25,
                                  offset: 8983,
                                },
                                end: {
                                  line: 171,
                                  column: 113,
                                  offset: 9071,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ' (New Relic Query Language).',
                              position: {
                                start: {
                                  line: 171,
                                  column: 113,
                                  offset: 9071,
                                },
                                end: {
                                  line: 171,
                                  column: 141,
                                  offset: 9099,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 171,
                              column: 3,
                              offset: 8961,
                            },
                            end: {
                              line: 171,
                              column: 141,
                              offset: 9099,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 171,
                          column: 1,
                          offset: 8959,
                        },
                        end: {
                          line: 171,
                          column: 141,
                          offset: 9099,
                        },
                        indent: [],
                      },
                    },
                    {
                      type: 'listItem',
                      spread: false,
                      checked: null,
                      children: [
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Learn about setting up ',
                              position: {
                                start: {
                                  line: 172,
                                  column: 3,
                                  offset: 9102,
                                },
                                end: {
                                  line: 172,
                                  column: 26,
                                  offset: 9125,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/agents/java-agent/custom-instrumentation',
                              children: [
                                {
                                  type: 'text',
                                  value: 'custom instrumentation',
                                  position: {
                                    start: {
                                      line: 172,
                                      column: 27,
                                      offset: 9126,
                                    },
                                    end: {
                                      line: 172,
                                      column: 49,
                                      offset: 9148,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 172,
                                  column: 26,
                                  offset: 9125,
                                },
                                end: {
                                  line: 172,
                                  column: 98,
                                  offset: 9197,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value: ' and ',
                              position: {
                                start: {
                                  line: 172,
                                  column: 98,
                                  offset: 9197,
                                },
                                end: {
                                  line: 172,
                                  column: 103,
                                  offset: 9202,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'link',
                              title: null,
                              url:
                                '/docs/agents/java-agent/async-instrumentation',
                              children: [
                                {
                                  type: 'text',
                                  value: 'async instrumentation',
                                  position: {
                                    start: {
                                      line: 172,
                                      column: 104,
                                      offset: 9203,
                                    },
                                    end: {
                                      line: 172,
                                      column: 125,
                                      offset: 9224,
                                    },
                                    indent: [],
                                  },
                                },
                              ],
                              position: {
                                start: {
                                  line: 172,
                                  column: 103,
                                  offset: 9202,
                                },
                                end: {
                                  line: 172,
                                  column: 173,
                                  offset: 9272,
                                },
                                indent: [],
                              },
                            },
                            {
                              type: 'text',
                              value:
                                ' for application activity not monitored by default.',
                              position: {
                                start: {
                                  line: 172,
                                  column: 173,
                                  offset: 9272,
                                },
                                end: {
                                  line: 172,
                                  column: 224,
                                  offset: 9323,
                                },
                                indent: [],
                              },
                            },
                          ],
                          position: {
                            start: {
                              line: 172,
                              column: 3,
                              offset: 9102,
                            },
                            end: {
                              line: 172,
                              column: 224,
                              offset: 9323,
                            },
                            indent: [],
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 172,
                          column: 1,
                          offset: 9100,
                        },
                        end: {
                          line: 172,
                          column: 224,
                          offset: 9323,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 168,
                      column: 1,
                      offset: 8369,
                    },
                    end: {
                      line: 172,
                      column: 224,
                      offset: 9323,
                    },
                    indent: [1, 1, 1, 1],
                  },
                },
                {
                  type: 'export',
                  value:
                    'export const _frontmatter = {"title":"Install the Java agent","tags":["Agents","Java agent","Installation"],"translate":["jp"],"metaDescription":"How to download and install New Relic\'s APM agent for Java.","redirects":["/docs/java/wildfly-installation-for-java","/docs/docs/installing_the_java_agent_on_websphere","/docs/java/installing-the-java-agent-on-websphere","/docs/java/websphere-installation-for-java","/docs/java/installing-the-java-agent-on-weblogic","/docs/java/weblogic-installation-for-java","/docs/docs/tomcat_windows_agent","/docs/java/installing-the-java-agent-on-tomcat-and-windows","/docs/java/the-apache-commons-daemon-jsvc","/docs/java/tomcat-installation-for-java","/docs/java/play-installation-for-java","/docs/java/installing-the-java-agent-on-jboss","/docs/java/jboss-installation-for-java","/docs/java/self-installing-java-agent","/docs/general/self-installing-java-agent","/docs/java/java-agent-self-installer","/docs/java/java-agent-manual-installation","/docs/java/grails-installation-for-java","/docs/docs/installing_java_agent_on_glassfish","/docs/java/installing-the-java-agent-on-glassfish","/docs/java/glassfish-installation-for-java","/docs/java/installing-the-java-agent-on-coldfusion","/docs/java/coldfusion-installation-for-java","/docs/agents/java-agent/frameworks/glassfish-installation-java","/docs/agents/java-agent/frameworks/jboss-installation-java","/docs/agents/java-agent/frameworks/coldfusion-installation-java","/docs/agents/java-agent/frameworks/play-installation-java","/docs/agents/java-agent/frameworks/tomcat-installation-java","/docs/agents/java-agent/frameworks/weblogic-installation-java","/docs/agents/java-agent/frameworks/websphere-installation-java","/docs/agents/java-agent/frameworks/websphere-liberty-profile-installation-java","/docs/agents/java-agent/frameworks/wildfly-installation-java","/node/2596","/docs/agents/java-agent/frameworks/grails-installation-java","/node/2306","/docs/agents/java-agent/frameworks","/docs/agents/java-agent/installation/java-agent-manual-installation","/docs/agents/java-agent/installation/java-agent-self-installer"]}',
                  position: {
                    start: {
                      line: 175,
                      column: 1,
                      offset: 9326,
                    },
                    end: {
                      line: 175,
                      column: 2118,
                      offset: 11443,
                    },
                    indent: [],
                  },
                },
              ],
              position: {
                start: {
                  line: 1,
                  column: 1,
                  offset: 0,
                },
                end: {
                  line: 175,
                  column: 2118,
                  offset: 11443,
                },
              },
            },
            fields: {
              fileRelativePath:
                'src/content/docs/agents/java-agent/installation/install-java-agent.mdx',
            },
          },
        ],
      },
      allMarkdownRemark: {
        nodes: [
          {
            htmlAst: {
              type: 'root',
              children: [
                {
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'New Relic Explorer lets you discover emerging issues in real time, without relying on static, pre-configured thresholds or dashboards, because crucial changes in your estate are highlighted across all your accounts. View everything in one place, including open source and third-party data, with zero configuration. At a glance, gain instant understanding of health and changes across your entire environment so you can zoom in to analyze, understand, and resolve issues faster.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'New Relic Explorer includes several new approaches to visualizing, exploring, and understanding your entire estate:',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: [
                    {
                      type: 'element',
                      tagName: 'strong',
                      properties: {},
                      children: [
                        {
                          type: 'text',
                          value: 'New Relic Lookout',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value:
                        ' provides a real-time view across all your accounts, highlighting changes in all your telemetry, regardless of instrumentation source—even third-party and open source data—in an easy-to-understand, accessible user experience that requires no configuration. An intuitive circle visualization, with color indicating severity of recent changes and size conveying the scale, draws your attention where it’s needed most.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: [
                    {
                      type: 'element',
                      tagName: 'img',
                      properties: {
                        src:
                          '/75d4a01f7e09b361438d3f9a3276cb3d/animated-lookout-example.gif',
                        alt:
                          'An animation of the Lookout overview and detail pane.',
                        title: 'The Lookout overview and detail pane.',
                        className: ['gatsby-resp-image-image'],
                        style:
                          'width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto; max-width: 850px;',
                      },
                      children: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'Beyond showing key metrics of throughput, response time, and errors, you can view changes in any signal in your telemetry data that you find important, across all your accounts. You can analyze changes with performance, abnormal history, correlations, traces, and ',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href:
                          '/docs/apm/apm-ui-pages/error-analytics/apm-error-profiles-troubleshoot-trends',
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'error profiles',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value:
                        ' to quickly uncover blind spots and unknown relationships so you understand what’s changed and why. That way, you can resolve issues before they impact your customers. ',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href:
                          'https://one.newrelic.com/launcher/lookout.launcher',
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'Get started with Lookout',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: ' and ',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href:
                          '/docs/new-relic-one/use-new-relic-one/core-concepts/new-relic-lookout-monitor-your-estate-glance',
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'learn more about Lookout.',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: [
                    {
                      type: 'element',
                      tagName: 'strong',
                      properties: {},
                      children: [
                        {
                          type: 'text',
                          value: 'New Relic Navigator',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value:
                        ' also offers an estate-wide view of your system. It filters the view by entities rather than changes, and it displays the health of your estate in a highly dense honeycomb view with traffic-light colors based on alerts so you can quickly explore your entire environment, understand health status, and resolve issues quickly.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: [
                    {
                      type: 'element',
                      tagName: 'img',
                      properties: {
                        src:
                          '/36a22b7eaaa1afdb15eeac08d664bd15/animated-navigator-overview.gif',
                        alt:
                          'An animation of the Navigator switching between different entities.',
                        title:
                          'The Navigator switching between different entities.',
                        className: ['gatsby-resp-image-image'],
                        style:
                          'width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto; max-width: 850px;',
                      },
                      children: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'New Relic Navigator lets you explore all your entities belonging to all your accounts, focusing on specific entity types or specific groups of entities organized by tags to quickly zero in on issues. When you have thousands, or tens of thousands of hosts, containers, and services, this capability makes it easy for you to explore everything in one place.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: [
                    {
                      type: 'element',
                      tagName: 'strong',
                      properties: {},
                      children: [
                        {
                          type: 'text',
                          value: 'Related Entities',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value:
                        ' shows you all the entities related to a specific application, host, container, or integration. It lets you quickly understand which upstream or downstream services are related to an issue, gives you a broader view of the overall health of your system, and helps you troubleshoot issues faster. New Relic automatically detects most relationships, but you can also create your own relationships to make sure that you have the most complete map of your environment.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: [
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href:
                          'https://github.com/newrelic/c-sdk/tree/master/examples',
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                        },
                        {
                          type: 'element',
                          tagName: 'strong',
                          properties: {},
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                            },
                          ],
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value:
                        '. For more information about source code and features, see the ',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href:
                          'https://newrelic.github.io/c-sdk/libnewrelic_8h_source.html',
                      },
                      children: [
                        {
                          type: 'text',
                          value: "C SDK's source documentation for ",
                        },
                        {
                          type: 'element',
                          tagName: 'code',
                          properties: {},
                          children: [
                            {
                              type: 'text',
                              value: 'libnewrelic.h',
                            },
                          ],
                        },
                        {
                          type: 'text',
                          value: ' on GitHub',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: '\n',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href: '//jquery.org/license/',
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                        },
                        {
                          type: 'element',
                          tagName: 'strong',
                          properties: {},
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                            },
                          ],
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value:
                        '. For more information about source code and features, see the ',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href:
                          'https://newrelic.github.io/c-sdk/libnewrelic_8h_source.html',
                      },
                      children: [
                        {
                          type: 'text',
                          value: "C SDK's source documentation for ",
                        },
                        {
                          type: 'element',
                          tagName: 'code',
                          properties: {},
                          children: [
                            {
                              type: 'text',
                              value: 'libnewrelic.h',
                            },
                          ],
                        },
                        {
                          type: 'text',
                          value: ' on GitHub',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: '\n',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href:
                          '//svn.apache.org/viewvc/commons/proper/codec/trunk/LICENSE.txt?view=markup',
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                        },
                        {
                          type: 'element',
                          tagName: 'strong',
                          properties: {},
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                            },
                          ],
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: '\n',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href: 'mailto:tsakashita@newrelic.com',
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                        },
                        {
                          type: 'element',
                          tagName: 'strong',
                          properties: {},
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                            },
                          ],
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: '\n',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href: '//code.google.com/p/guava-libraries/',
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                        },
                        {
                          type: 'element',
                          tagName: 'strong',
                          properties: {},
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                            },
                          ],
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: '\n',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href: '//attribute_dictionary?fsjdhsk',
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                        },
                        {
                          type: 'element',
                          tagName: 'strong',
                          properties: {},
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                            },
                          ],
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: '\n',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href: 'aregoldstring',
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                        },
                        {
                          type: 'element',
                          tagName: 'strong',
                          properties: {},
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                            },
                          ],
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: '\n',
                    },
                    {
                      type: 'element',
                      tagName: 'a',
                      properties: {
                        href: '/fakkefjdka-beep',
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'C SDK ',
                        },
                        {
                          type: 'element',
                          tagName: 'strong',
                          properties: {},
                          children: [
                            {
                              type: 'text',
                              value: 'Examples',
                            },
                          ],
                        },
                        {
                          type: 'text',
                          value: ' documentation on GitHub',
                        },
                      ],
                    },
                  ],
                },
              ],
              data: {
                quirksMode: false,
              },
            },
            fields: {
              fileRelativePath:
                'src/content/whats-new/2021/02/new-relic-explorer-say-goodbye-blindspots.md',
            },
          },
        ],
      },
      allFile: {
        nodes: [
          {
            relativePath: 'attribute-dictionary.yml',
          },
        ],
      },
    },
  };

  const { allMdx, allMarkdownRemark, allFile } = data;
  console.log(allMdx);

  await checkNavLinks(allFile);

  allMdx.nodes.forEach(async (node) => {
    const {
      mdxAST,
      fields: { fileRelativePath },
    } = node;
    const mdxProcessor = unified().use(linkVisitorMdx, { fileRelativePath });
    await mdxProcessor.run(mdxAST);
  });

  allMarkdownRemark.nodes.forEach(async (node) => {
    const {
      htmlAst,
      fields: { fileRelativePath },
    } = node;
    const htmlProcessor = unified().use(linkVisitorHtml, {
      fileRelativePath,
    });
    await htmlProcessor.run(htmlAst);
  });
};

main();
