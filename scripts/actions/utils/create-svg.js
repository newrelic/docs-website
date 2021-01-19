const WIDTH = 400;
const HEIGHT = 300;
const LEFT = 20;
const BOTTOM = HEIGHT - 30;

const COLORS = {
  bg: '#2E3440',
  fg: '#D8DEE9',
  lines: '#4C566A',
  segments: ['#BF616A', '#D08770', '#EBCB8B', '#A3BE8C', '#B48EAD'],
};

const transpose = (arr) => arr[0].map((_, i) => arr.map((row) => row[i]));

const add = (a, b) => a + b;

const draw = {
  rect: (x, y, w, h, color = 'black') =>
    `<rect x=${x} y=${y} width=${w} height=${h} fill=${color} />`,

  line: (x1, y1, x2, y2, dash, color = COLORS.lines) =>
    [
      '<line',
      `x1=${x1} y1=${y1} x2=${x2} y2=${y2}`,
      dash ? `stroke-dasharray="${dash}"` : '',
      `stroke="${color}"`,
      '/>',
    ].join(' '),

  text: (x, y, content, color = COLORS.fg) =>
    [
      `<text x=${x} y=${y} `,
      `style="font-family: sans-serif; fill: ${color};">`,
      content,
      '</text>',
    ].join(''),
};

const createChartDetails = (_data, labels) => {
  const dash = 2;
  const colWidth = (WIDTH - LEFT) / labels.length;

  // TODO: y axis label
  return [
    draw.line(LEFT, BOTTOM, WIDTH, BOTTOM, dash),
    ...labels.flatMap((label, i) => {
      const x = colWidth * i + LEFT;
      return [
        draw.text(x + colWidth / 3, BOTTOM + 18, label),
        draw.line(x, 10, x, BOTTOM, dash),
      ];
    }),
  ];
};

const createColumn = (max) => (data, index) => {
  const colWidth = (WIDTH - LEFT) / labels.length;
  const barWidth = colWidth * 0.6;

  const x = colWidth * index + LEFT + (colWidth - barWidth) / 2;

  return data.map((val, j) => {
    const barHeight = ((HEIGHT * val) / max) * 0.8;
    const prev = ((HEIGHT * data.slice(0, j).reduce(add, 0)) / max) * 0.8;
    const y = BOTTOM - prev - barHeight;
    return draw.rect(x, y, barWidth, barHeight, COLORS.segments[j]);
  });
};

/**
 * Creates an SVG for a burndown chart.
 *
 * @example
 * const data = [
 *   [800000, 1200000, 1400000, 1300000],
 *   [200000, 400000, 500000, 300000],
 *   [100000, 200000, 400000, 600000],
 * ];
 * const labels = ['Q1', 'Q2', 'Q3', 'Q4'];
 * createSvg(data, labels); // "<svg...."
 *
 * @param {number[][]} data A 2D array of number to be used in the chart.
 * @param {string[]} labels A list of labels for each column in the chart.
 * @returns {string} The `outerHTML` for an SVG element (for DOM or files).
 */
const createSvg = (data, labels) => {
  const attributes = [
    `viewbox="0 0 ${WIDTH} ${HEIGHT}"`,
    `xmlns="https://www.w3.org/2000/svg"`,
    `style="background-color: ${COLORS.bg}"`,
    `width=${WIDTH}`,
    `height=${HEIGHT}`,
  ];

  const columns = transpose(data);
  const max = Math.max(...columns.map((col) => col.reduce((a, b) => a + b, 0)));

  return [
    `<svg ${attributes.join(' ')}>`,
    ...columns.flatMap(createColumn(max)),
    ...createChartDetails(data, labels),
    '</svg>',
  ].join('\n');
};

module.exports = createSvg;
