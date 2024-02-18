#target photoshop
#include AP_logo40pix.jsxinc
#include AP_logo80pix.jsxinc

var w = new Window ("dialog", "AP_logoShort");

var image =  apLogo40pix;


var imgLogo = w.add ("image", undefined, image );
var stText = w.add ("staticText", undefined, "Length of string of this image : "+image.length+" symbols");

image =  apLogo80pix;

var iconLogo = w.add("iconButton");
var imgLogo = w.add ("image");

var stText = w.add ("staticText", undefined, "Length of string of this image : "+image.length+" symbols");

imgLogo.image = image;
iconLogo.image = image;

var mainButton = w.add ("button", undefined, "unNamed");

w.defaultElement = mainButton;

w.show ();