const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  gray: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  blink: "\x1b[5m",
  inverse: "\x1b[7m",
  hidden: "\x1b[8m",
  crossedOut: "\x1b[9m",
  doubleUnderline: "\x1b[21m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  pink: "\x1b[35m",
  lightBlue: "\x1b[36m",
  white: "\x1b[37m",
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgPink: "\x1b[45m",
  bgLightBlue: "\x1b[46m",
  bgWhite: "\x1b[47m",
};

class SamColors {
  reset(str) {
    return colors.reset + str + colors.reset;
  }
  bold(str) {
    return colors.bold + str + colors.reset;
  }
  gray(str) {
    return colors.gray + str + colors.reset;
  }
  italic(str) {
    return colors.italic + str + colors.reset;
  }
  underline(str) {
    return colors.underline + str + colors.reset;
  }
  blink(str) {
    return colors.blink + str + colors.reset;
  }
  inverse(str) {
    return colors.inverse + str + colors.reset;
  }
  hidden(str) {
    return colors.hidden + str + colors.reset;
  }
  crossedOut(str) {
    return colors.crossedOut + str + colors.reset;
  }
  doubleUnderline(str) {
    return colors.doubleUnderline + str + colors.reset;
  }
  black(str) {
    return colors.black + str + colors.reset;
  }
  red(str) {
    return colors.red + str + colors.reset;
  }
  green(str) {
    return colors.green + str + colors.reset;
  }
  yellow(str) {
    return colors.yellow + str + colors.reset;
  }
  blue(str) {
    return colors.blue + str + colors.reset;
  }
  pink(str) {
    return colors.pink + str + colors.reset;
  }
  lightBlue(str) {
    return colors.lightBlue + str + colors.reset;
  }
  white(str) {
    return colors.white + str + colors.reset;
  }
  bgBlack(str) {
    return colors.bgBlack + str + colors.reset;
  }
  bgRed(str) {
    return colors.bgRed + str + colors.reset;
  }
  bgGreen(str) {
    return colors.bgGreen + str + colors.reset;
  }
  bgYellow(str) {
    return colors.bgYellow + str + colors.reset;
  }
  bgBlue(str) {
    return colors.bgBlue + str + colors.reset;
  }
  bgPink(str) {
    return colors.bgPink + str + colors.reset;
  }
  bgLightBlue(str) {
    return colors.bgLightBlue + str + colors.reset;
  }
  bgWhite(str) {
    return colors.bgWhite + str + colors.reset;
  }
}

const samcolors = new SamColors();

module.exports = samcolors;
module.exports = {
  samcolors,
  colors,
  reset: samcolors.reset,
  bold: samcolors.bold,
  gray: samcolors.gray,
  italic: samcolors.italic,
  underline: samcolors.underline,
  blink: samcolors.blink,
  inverse: samcolors.inverse,
  hidden: samcolors.hidden,
  crossedOut: samcolors.crossedOut,
  doubleUnderline: samcolors.doubleUnderline,
  black: samcolors.black,
  red: samcolors.red,
  green: samcolors.green,
  yellow: samcolors.yellow,
  blue: samcolors.blue,
  pink: samcolors.pink,
  lightBlue: samcolors.lightBlue,
  white: samcolors.white,
  bgBlack: samcolors.bgBlack,
  bgRed: samcolors.bgRed,
  bgGreen: samcolors.bgGreen,
  bgYellow: samcolors.bgYellow,
  bgBlue: samcolors.bgBlue,
  bgPink: samcolors.bgPink,
  bgLightBlue: samcolors.bgLightBlue,
  bgWhite: samcolors.bgWhite,
};
