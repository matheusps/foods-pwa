interface Theme {
  primary: string
  info: string
  success: string
  error: string
  warning: string
  text: string
  textMutted: string
  base: string
}

const dark: Theme = {
  primary: '#B23AFC',
  info: '#1232FF',
  success: '#45DF31',
  error: '#FE2472',
  warning: '#FF9C09',
  text: '#FFFFFF',
  textMutted: '#9FA5AA',
  base: '#212121',
}

const light: Theme = {
  primary: '#B23AFC',
  info: '#1232FF',
  success: '#45DF31',
  error: '#FE2472',
  warning: '#FF9C09',
  text: '#000',
  textMutted: '#9FA5AA',
  base: '#FFF',
}

const themes = {
  dark: dark,
  light: light,
}

export default themes
