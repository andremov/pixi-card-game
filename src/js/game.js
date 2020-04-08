import * as PIXI from 'pixi.js';
import map from '../assets/map.png';

const app = new PIXI.Application({
    width: 256,         // default: 800
    height: 256,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
});
document.body.appendChild(app.view);
app.stage = new PIXI.Container();
app.stage.interactive = true;

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

const assetFolder = '../assets/';
const assetExt = '.png';
const loader = app.loader,
    resources = loader.resources,
    Sprite = PIXI.Sprite;

loader
    .add([
        // assetFolder + 'map' + assetExt,
        map
        // assetFolder + 'club' + assetExt,
        // assetFolder + 'diamond' + assetExt,
        // assetFolder + 'heart' + assetExt,
        // assetFolder + 'spade' + assetExt,
    ])
    .on("progress", loadProgressHandler)
    .load(setup);

function loadProgressHandler(loader, resource) {
    //Display the file `url` currently being loaded
    console.log("loading: " + resource.url);

    //Display the percentage of files currently loaded
    console.log("progress: " + loader.progress + "%");

    //If you gave your files names as the first argument
    //of the `add` method, you can access them like this
    //console.log("loading: " + resource.name);
}

function setup() {
    //Create the `cat` sprite
    let texture = resources[map].texture;
    let cat = new Sprite(texture);
    // console.log(cat)
    // console.log(texture)
    //Change the sprite's position
    cat.x = 96;
    cat.y = 96;
    //Change the sprite's size
    // cat.width = 80;
    // cat.height = 120;

    //Add the cat to the stage so you can see it
    app.stage.addChild(cat);
}

