import * as PIXI from 'pixi.js';
import mapimg from "../assets/map.png";
import {app} from './game'

const Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

export function Card(scene, id, suit, number) {
    const loader = app.loader,
        resources = loader.resources;

    let self = this;
    self._CLASS = "Card";

    self.scene = scene;

    // Graphics: Layers to this peep.
    let g = new PIXI.Container();
    self.graphics = g;
    g.x = self.x;
    g.y = self.y;

    g.addChild(getSuitIcon(suit));


    /*
    A unique id for this card.
    A number between 0 and 220.
     */
    self.id = id;

    /*
    The id for the suit of this card.
        0 -> Hearts
        1 -> Spades
        2 -> Clubs
        3 -> Diamonds
     */
    self.suit = suit;

    /*
    The number of this card.
        1 -> Ace
        2-10 -> The number
        11 -> Jack
        12 -> Queen
        13 -> King
        0 -> Joker
     */
    self.number = number;

    function getSuitIcon(num) {
        let texture = resources[mapimg].texture.clone();
        let rectangle = new Rectangle((num * 230), 0, 230, 230);
        texture.frame = rectangle;
        return new Sprite(texture);
    }

}
