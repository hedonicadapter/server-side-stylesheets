export const styleByInstanceId = (instanceId: string) => {
  switch (instanceId) {
    case "dark":
      return `
        :root {
          --bg: #111;
          --fg: #eee;
        }

        * {
          outline: 1px solid red;
        }
      `;
    case "light":
      return `
        :root {
          --bg: #fff;
          --fg: #000;
        }
      `;
    default:
      return `
        :root {
          --bg: #f0f0f0;
          --fg: #333;
        }
      `;
  }
};
