/* Example 1*/
function Color () {/*from  ww  w  .j a v  a 2  s. co  m*/
    this.Shade;
    this.RGB;

    this.set = function (name, rgb) {
        this.Shade = name;
        this.RGB = rgb;
    }
    this.rgbToHex = function () {
        //convert and return HEX value
        return "some hex value";
    }
}

var c = new Color();
c.set("red", "209,0,0");
console.log(c.rgbToHex());

/*Example 2*/

function ColorTwo () {//  www .  j ava 2 s. c  o  m
}

ColorTwo.prototype.Shade ;
ColorTwo.prototype.RGB;

ColorTwo.prototype.set = function (shade, rgb) {
     this.Shade = shade;
     this.RGB = rgb;
}

ColorTwo.prototype.rgbToHex = function () {
     return "some Hex color from colortwo";
}
c = s = new ColorTwo();
c.set("red", "209,0,0");
console.log(c.rgbToHex());

function PrimaryColor() {
}

PrimaryColor.prototype = new ColorTwo();
PrimaryColor.prototype.__proto__ = ColorTwo.prototype;
PrimaryColor.prototype.HSL;

Square.prototype.getHsl = function () {
   return "some hsl";
}
var pc = new PrimaryColor();
pc.set("red", "290,0,0");
pc.HSL = "100,20,20";
console.log(pc.getHsl());
console.log(pc.rgbToHex());

console.log(pc instanceof ColorTwo);
console.log(pc instanceof Color);
