import abbreviate from 'number-abbreviate'

export default class Button {
  private readonly width = 280
  private readonly height = 40

  constructor(private readonly count: number) {}

  render() {
    const abbreviatedCount: string = abbreviate(this.count, 1)

    return `
      <svg
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 ${this.width} ${this.height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          .button-text {
            font-size: 14px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial,
            sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            font-weight: 500;
          }
        </style>
        <rect
          x="0.5"
          y="0.5"
          rx="6"
          height="99%"
          stroke="#E4E2E2"
          width="${this.width - 1}"
          fill="#f6f8fa"
        ></rect>
        <text
          x="50%"
          y="50%"
          fill="rgb(40, 40, 40)"
          dominant-baseline="middle"
          text-anchor="middle"
          class="button-text"
        >
          ${abbreviatedCount} people have clicked this button
        </text>
      </svg>
    `
  }
}
