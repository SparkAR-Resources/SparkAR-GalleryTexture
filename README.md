# SparkAR-GalleryTexture

This is meant to be a boilerplate for new users or non-scripters to start using Spark AR's Gallery Texture feature for their Instagram effects. It takes into account the changes to Spark AR v85+ API and uses Promises to load assets. It is not meant to be a comprehensive exploration into ES6, Spark AR, or writing performant code. This is meant to educate and - hopefully - inspire others to continue learning about how to leverage scripting in their effects.

## What's Included

**Instagram - Green Screen**

This project has a reverse-engineered version of Instagram's "Green Screen" effect that allows a user to select media (photo or video) from their device and use it inside of an effect. By default, Spark AR does not handle the resizing and ratio-adjusting, so this project is also mean to demonstrate how to detect the width/height of an image and adjust it within the effect. This project also uses the Patch Editor bridge to send the width/height values to the patch editor for manipulation.

## Credits

Thanks to the Instagram team for helping work through these nuances so that I can share these samples!

## Resources

Follow me on IG [@lukehurd](https://instagram.com/lukehurd)

[My Tutorials on YouTube](http://www.youtube.com/c/LukeHurd)

Join the [Spark AR Community](https://www.facebook.com/groups/SparkARcommunity/)
