const theme = 'dark';
//const theme = 'light';
export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : '#ae99bf';
export const color2 = lightTheme ? 'white' : '#28334e';
export const color3 = lightTheme ? '#09f010' : '#de9f7a';

if (lightTheme) {
  document.body.style.background = '#e1eaee';
  document.body.style.color = '#061a44';
}

export const purpleBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 1px 2px 7px 0px ${lightTheme ? '#a9b6ff' : '#000000'}`;
export const neonBoxShadow = `box-shadow: 0px 0px 4px 2px #de9f7a`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeBig = 'font-size: 2em';
export const fontSize1 = 'font-size: 1.5em;';
export const fontSize2 = 'font-size: 1.0em';
export const fontSize3 = 'font-size: .75em';

export const textAlignCenter = 'text-align: center;';