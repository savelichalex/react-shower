import React, {Component} from 'react';
import Deck from "./components/Deck.react";
import Slide from "./components/Slide.react";
import Code from "./components/Code.react";

import {} from "../css/theme.css";
import {} from "../css/prism.css";

const TOPIC = 'Введение в FRP которое вы пропустили';
const SPEAKER = 'Савельев Алексей';

export default class Presentation extends Component {

	render() {
		return (
			<Deck>

				<header className="caption">
					<h1>{TOPIC}</h1>
					<p>{SPEAKER}</p>
				</header>

				<Slide className="cover-slide">
					<h2>{TOPIC}</h2>
					<p>{SPEAKER}</p>
				</Slide>

				<Slide>
                    
				</Slide>
			</Deck>
		);
	}
}
