import * as PIXI from 'pixi.js';
import mapimg from '../assets/map.png';
import {Card} from "./card";

export const app = new PIXI.Application({
    width: 256,         // default: 800
    height: 256,        // default: 600
    antialias: true,    // default: false
    transparent: true, // default: false
    resolution: 1       // default: 1
});

document.body.appendChild(app.view);
app.stage = new PIXI.Container();
app.stage.interactive = true;

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

const loader = app.loader;

loader
    .add(
        mapimg
    )
    .on("progress", loadProgressHandler)
    .load(setup);

function loadProgressHandler(loader, resource) { }

function setup() {
    new Card(app.stage,1,1,1);
}

