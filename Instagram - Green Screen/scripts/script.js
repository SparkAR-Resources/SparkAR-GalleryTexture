// Gallery Texture - Reverse Engineered "Green Screen" effect from Instagram
// by Luke Hurd :: @lukehurd

// This project is a reverse-engineered version of the "Green Screen effect
// built by the internal Instagram Team. It is meant to provide an example
// of how to detect the dimensions of the media coming from the user's gallery
// so that we can handle the aspect ratio adjustments in our effects.

// Without this, the user's media will be distorted and stretched to fit the
// geometry of the object it is being appled to. For instance, if you use a plane
// and the user tries to use a widescreen (16:9) image, it will be distorted because
// the image is being re-sized to a square (1:1)

// Some things to note about galleryTexture (and this project):
// If you use a color in the "pending texture", the galleryTexture returns a width/height of "1"
// If you use an image in the "pending texture", the galleryTexture returns a width/height of "64"
// If the width equals something other than 1 or 64, a galleryTexture has likely been selected (so you 
// can trigger things like "pinch to zoom" instructions) after the user selects their image.

// Load the modules
const Textures = require("Textures");
const Patches = require('Patches');

// Begin our Promise and go find the texture
Promise.all([
    
    Textures.findFirst('galleryTexture0'),

]).then(function (r) {

    // Set the galleryTexture
    const galleryTexture = r[0]

    // Create a monitor that watches the width of the galleryTexture
    // Use "fireOnInitialValue: true" so it fires when the filter loads
    galleryTexture.width.monitor({fireOnInitialValue: true}).subscribe(function(val) {

        // Once we know the width, pass it to the patch editor
        Patches.inputs.setScalar('galleryTextureWidth', val.newValue); 

    });

    // Create a monitor that watches the height of the galleryTexture
    // Use "fireOnInitialValue: true" so it fires when the filter loads
    galleryTexture.height.monitor({fireOnInitialValue: true}).subscribe(function(val) {

        // Once we know the height, pass it to the patch editor
        Patches.inputs.setScalar('galleryTextureHeight', val.newValue); 

    });

})