import React, {Component} from 'react';
import Deck from "./components/Deck.react";
import Slide from "./components/Slide.react";
import Code from "./components/Code.react";

import {} from "../css/theme.css";
import {} from "../css/prism.css";

import frpIntro1 from '../img/frp-intro-1.png';
import bug1 from '../img/bug-1.png';
import bug2 from '../img/bug-2.png';
import bug3 from '../img/bug-3.png';
import bug4 from '../img/bug-4.png';
import bug5 from '../img/bug-5.png';
import bug6 from '../img/bug-6.png';
import frpIntro2 from '../img/frp-intro-2.png';
import frpIntro3 from '../img/frp-intro-3.png';
import frpIntro4 from '../img/frp-intro-4.png';
import mapMb from '../img/map-mb.png';
import filterMb from '../img/filter-mb.png';
import mergeMb from '../img/merge-mb.png';
import zipMb from '../img/zip-mb.png';
import flatMapMb from '../img/flatMap-mb.png';
import dataFlow from '../img/data-flow.png';
import everythingStream from '../img/streams.jpeg';

import cFrp from 'raw!../code/classical-frp.hs';
import rtFrp from 'raw!../code/rt-frp.hs';
import arFrp from 'raw!../code/ar-frp.hs';
import justCol from 'raw!../code/just-col.cljs';
import justEs from 'raw!../code/just-es.cljs';
import gameMove from 'raw!../code/game-move.cljs';

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
					<h3>Большинство приложений:</h3>
				</Slide>

				<Slide>
					<h3>Большинство приложений:</h3>
					<ol>
						<li>Последовательные</li>
					</ol>
				</Slide>

				<Slide>
					<h3>Большинство приложений:</h3>
					<ol>
						<li>Последовательные</li>
						<li>Асинхронные</li>
					</ol>
				</Slide>

				<Slide className="center">
					<h3>Разрабатывая UI мы работаем с асинхронной моделью</h3>
				</Slide>

				<Slide>
					<h2>Observer паттерн</h2>
				</Slide>

				<Slide>
					<h2>Observer паттерн</h2>
					<h3>Существует как минимум 6 ошибок связанных с callbacks</h3>
				</Slide>

				<Slide className="center">
					<h2>Непредсказуемый порядок</h2>
					<img src={bug1} alt="" className="intro-img" />
				</Slide>

				<Slide className="center">
					<h2>Теряется первое событие</h2>
					<img src={bug2} alt="" className="intro-img" />
				</Slide>

				<Slide className="center">
					<h2>Беспорядочное состояние</h2>
					<img src={bug3} alt="" className="intro-img" />
				</Slide>

				<Slide className="center">
					<h2>Потоко-небезопасно</h2>
					<img src={bug4} alt="" className="intro-img" />
				</Slide>

				<Slide className="center">
					<h2>Утечки памяти</h2>
					<img src={bug5} alt="" className="intro-img" />
				</Slide>

				<Slide className="center">
					<h2>Случайная рекурсия</h2>
					<img src={bug6} alt="" className="intro-img" />
				</Slide>

				<Slide className="center">
					<h2>FRP - один из способов решения проблемы</h2>
				</Slide>

				<Slide className="center">
                    <h3>Введение в FRP за одну минуту</h3>
					<img src={frpIntro1} alt="" className="intro-img" />
				</Slide>

				<Slide className="center">
					<h3>Введение в FRP за одну минуту</h3>
					<img src={frpIntro2} alt="" className="intro-img" />
				</Slide>

				<Slide className="center">
					<h3>Введение в FRP за одну минуту</h3>
					<img src={frpIntro3} alt="" className="intro-img" />
				</Slide>

				<Slide className="center">
					<h3>Введение в FRP за одну минуту</h3>
					<img src={frpIntro4} alt="" className="intro-img" />
				</Slide>

				<Slide>
					<h2 style={{marginTop: '-50px'}}>High-order FRP</h2>
				</Slide>

				<Slide>
					<h2 style={{marginTop: '-50px'}}>High-order FRP</h2>
					<ul>
						<li>Classical FRP</li>
					</ul>
				</Slide>

				<Slide>
					<h2 style={{marginTop: '-50px'}}>High-order FRP</h2>
					<ul>
						<li>Classical FRP</li>
						<li>Real-time FRP</li>
					</ul>
				</Slide>

				<Slide>
					<h2 style={{marginTop: '-50px'}}>High-order FRP</h2>
					<ul>
						<li>Classical FRP</li>
						<li>Real-time FRP</li>
						<li>Event-driven FRP</li>
					</ul>
				</Slide>

				<Slide>
					<h2 style={{marginTop: '-50px'}}>High-order FRP</h2>
					<ul>
						<li>Classical FRP</li>
						<li>Real-time FRP</li>
						<li>Event-driven FRP</li>
					</ul>
					<Code lang="haskell" code={cFrp} />
					<Code lang="haskell" code={rtFrp} />
				</Slide>

				<Slide>
					<h2 style={{marginTop: '-50px'}}>Arrowised FRP</h2>
				</Slide>

				<Slide>
					<h2 style={{marginTop: '-50px'}}>Arrowised FRP</h2>
					<Code lang="haskell" code={arFrp} />
				</Slide>

				<Slide>
					<h2 style={{marginTop: '-50px'}}>First-order FRP</h2>
					<h3>Усовершенствовання версия RT-FRP и ED-FRP</h3>
					<h3>Реализовано в языке Elm</h3>
				</Slide>

				<Slide>
					<h2 style={{marginTop: '-50px'}}>Asynchronous data flow</h2>
					<h2>a.k.a Compositional Event Systems</h2>
				</Slide>

				<Slide>
					<h2 style={{marginTop: '-50px'}}>Asynchronous data flow</h2>
					<h2>a.k.a Compositional Event Systems</h2>
					<h3>Полностью исключаются синхронные обновления</h3>
				</Slide>

				<Slide>
					<h2 style={{marginTop: '-50px'}}>Asynchronous data flow</h2>
					<h2>a.k.a Compositional Event Systems</h2>
					<h3>Полностью исключаются синхронные обновления</h3>
					<h3>Реализации:</h3>
					<ul>
						<li>ReactiveExtensions (Rx)</li>
						<li>Bacon.js</li>
						<li>reagi</li>
					</ul>
				</Slide>

				<Slide className="center">
					<h3 style={{fontStyle: 'italic', marginTop: '100px'}}>
						There are only two hard things in Computer Science: cache invalidation and <b>naming things</b>
					</h3>
					<div>
						<span style={{float: 'right'}}>Phil Karlton</span>
					</div>
				</Slide>

				<Slide className="center">
					<h2>Так что же все таки такое FRP?</h2>
				</Slide>

				<Slide className="center">
					<h2>Так что же все таки такое FRP?</h2>
					<h3 style={{fontStyle: 'italic', marginTop: '100px'}}>
						FRP is about handling time-varying values like they were regular values
					</h3>
					<div>
						<span style={{float: 'right'}}>Haskell Wiki</span>
					</div>
				</Slide>

				<Slide className="center">
					<h2>Рассмотрим пример</h2>
					<Code lang="clojure" code={justCol} />
				</Slide>

				<Slide className="center">
					<h2>Похожий пример с использованием reagi</h2>
					<Code lang="clojure" code={justEs} />
				</Slide>

				<Slide className="center">
					<h2>Map</h2>
					<img src={mapMb} alt="" />
				</Slide>

				<Slide className="center">
					<h2>Filter</h2>
					<img src={filterMb} alt="" />
				</Slide>

				<Slide className="center">
					<h2 style={{marginTop: '-30px'}}>Обработка движений в играх</h2>
					<Code lang="clojure" code={gameMove} />
				</Slide>

				<Slide>
					<h2>Комбинаторы</h2>
					<ul>
						<li>merge</li>
						<li>zip</li>
						<li>flatMap</li>
					</ul>
				</Slide>

				<Slide className="center">
					<h2>Merge</h2>
					<img src={mergeMb} alt="" />
				</Slide>

				<Slide className="center">
					<h2>Zip</h2>
					<img src={zipMb} alt="" />
				</Slide>

				<Slide className="center">
					<h2>FlatMap</h2>
					<img src={flatMapMb} alt="" />
				</Slide>

				<Slide className="center">
					<h2>Data-flow programming</h2>
					<img src={dataFlow} alt="" />
				</Slide>

				<Slide className="center">
					<img src={everythingStream} alt="" />
				</Slide>

				<Slide>
					<h2>Список литературы</h2>
					<ol>
						<li>Functional Reactive Programming - Stephen Blackheath, Anthony Jones</li>
						<li>Clojure Reactive Programming - Leonardo Borges</li>
						<li>Elm: Concurrent FRP for Functional GUIs - Evan Czaplicki</li>
						<li>The introduction to Reactive Programming you've been missing - Andre Staltz</li>
						<li>Functional Reactive Animation - Paul Hudak, Conal Elliott</li>
						<li>"Controlling Time and Space: understanding the many formulations of FRP"
							by Evan Czaplicki <a href="https://www.youtube.com/watch?v=Agu6jipKfYw">
								https://www.youtube.com/watch?v=Agu6jipKfYw</a></li>
					</ol>
				</Slide>
			</Deck>
		);
	}
}
