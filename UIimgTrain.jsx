#target photoshop
#include AP_logo40pix.jsxinc
#include AP_logo80pix.jsxinc

var w = new Window ("dialog", "AP_logoShort");

var image =  apLogo40pix;


var imgLogo = w.add ("image", undefined, image );
var stText = w.add ("staticText", undefined, "Длина строки этого изображения : "+image.length+" символов");

image =  apLogo80pix;

var iconLogo = w.add("iconButton", undefined, image);
var imgLogo = w.add ("image");

var stText = w.add ("staticText", undefined, "Длина строки этого изображения : "+image.length+" символов");

imgLogo.image = image;


var mainButton = w.add ("button", undefined, "unNamed");

w.defaultElement = mainButton;

w.show ();