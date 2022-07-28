import CrewhuTheme from './CrewhuTheme';
import '../src/lib/assets/styles/global.scss';

export const parameters = {
  docs: {
    theme: CrewhuTheme,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}