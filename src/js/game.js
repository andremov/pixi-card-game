import * as PIXI from 'pixi.js';
import mapimg from '../assets/map.png';

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

const loader = app.loader,
    resources = loader.resources,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

loader
    .add(
        // assetFolder + 'map' + assetExt,
        mapimg
        // assetFolder + 'club' + assetExt,
        // assetFolder + 'diamond' + assetExt,
        // assetFolder + 'heart' + assetExt,
        // assetFolder + 'spade' + assetExt,
    )
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

    // let suit1 = getSpriteNum(0);
    // suit1.scale.set(0.3,0.3);
    let suit2 = getSpriteNum(1);
    suit2.scale.set(0.3,0.3);
    suit2.position.set(900,20)

    // let suit3 = getSpriteNum(2);
    // let suit4 = getSpriteNum(3);


    // app.stage.addChild(suit1);
    app.stage.addChild(suit2);
}

function getSpriteNum(num) {
    let texture = resources[mapimg].texture;
    let rectangle = new Rectangle((num * 230), 0, 230, 230);
    texture.frame = rectangle;
    return new Sprite(texture);
}
