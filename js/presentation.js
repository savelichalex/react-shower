import React, {Component} from 'react';
import Deck from "./components/Deck.react";
import Slide from "./components/Slide.react";
import Code from "./components/Code.react";

import {} from "../css/theme.css";
import {} from "../css/prism.css";

import frpIntro1 from '../img/frp-intro-1.png';
import frpIntro2 from '../img/frp-intro-2.png';
import frpIntro3 from '../img/frp-intro-3.png';
import frpIntro4 from '../img/frp-intro-4.png';

import cFrp from 'raw!../code/classical-frp.hs';
import rtFrp from 'raw!../code/rt-frp.hs';
import arFrp from 'raw!../code/ar-frp.hs';

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
					<h3>Observer паттерн</h3>
				</Slide>

				<Slide>
					<h3>Observer паттерн</h3>
					<h3>Существует как минимум 6 ошибок связанных с callbacks:</h3>
				</Slide>

				<Slide>
					<h3>Observer паттерн</h3>
					<h3>Существует как минимум 6 ошибок связанных с callbacks:</h3>
					<ol>
						<li>Непредсказуемый порядок</li>
					</ol>
				</Slide>

				<Slide>
					<h3>Observer паттерн</h3>
					<h3>Существует как минимум 6 ошибок связанных с callbacks:</h3>
					<ol>
						<li>Непредсказуемый порядок</li>
						<li>Теряется первое событие</li>
					</ol>
				</Slide>

				<Slide>
					<h3>Observer паттерн</h3>
					<h3>Существует как минимум 6 ошибок связанных с callbacks:</h3>
					<ol>
						<li>Непредсказуемый порядок</li>
						<li>Теряется первое событие</li>
						<li>Беспорядочное состояние</li>
					</ol>
				</Slide>

				<Slide>
					<h3>Observer паттерн</h3>
					<h3>Существует как минимум 6 ошибок связанных с callbacks:</h3>
					<ol>
						<li>Непредсказуемый порядок</li>
						<li>Теряется первое событие</li>
						<li>Беспорядочное состояние</li>
						<li>Потоко-небезопасно</li>
					</ol>
				</Slide>

				<Slide>
					<h3>Observer паттерн</h3>
					<h3>Существует как минимум 6 ошибок связанных с callbacks:</h3>
					<ol>
						<li>Непредсказуемый порядок</li>
						<li>Теряется первое событие</li>
						<li>Беспорядочное состояние</li>
						<li>Потоко-небезопасно</li>
						<li>Утечки памяти</li>
					</ol>
				</Slide>

				<Slide>
					<h3>Observer паттерн</h3>
					<h3>Существует как минимум 6 ошибок связанных с callbacks:</h3>
					<ol>
						<li>Непредсказуемый порядок</li>
						<li>Теряется первое событие</li>
						<li>Беспорядочное состояние</li>
						<li>Потоко-небезопасно</li>
						<li>Утечки памяти</li>
						<li>Случайная рекурсия</li>
					</ol>
				</Slide>

				<Slide className="center">
					<h2>FRP - один из способов решения проблемы</h2>
				</Slide>

				<Slide className="center">
					<h2>FRP - один из способов решения проблемы</h2>
					<p>Попробуем разобраться что же это такое</p>
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
			</Deck>
		);
	}
}
