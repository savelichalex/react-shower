import React, { Component } from 'react';
import Deck from "./components/Deck.react";
import Slide from "./components/Slide.react";
import Code from "./components/Code.react";

import mainBakckground from "../img/main.png";
import vkLogo from "../img/vk.svg";
import paperLogo from "../img/paper.svg";
import superman from "../img/superman.jpg";
import reactivePlane from "../img/shutterstock_300080930.jpg";
import react from "../img/react.png";
import boxes from "../img/boxes.jpg";
import kittens from "../img/kittens.jpg";
import hulk from "../img/halk.jpg";
import promiseImg from "../img/promise.png";
import promise2Img from "../img/promise2.png";
import promise3Img from "../img/promise3.png";
import observable from "../img/observable.png";
import observableFlat from "../img/observable-flat.png";

import reactCode from "raw!../code/react_example.js";
import pureComponent from "raw!../code/pure_component.js";
import promiseExample from "raw!../code/promise.js";
import promise2Example from "raw!../code/promise_composition.js";
import materializedEffects from "raw!../code/materializedEffects.js"
import bacon from "raw!../code/bacon.js";


import {} from "../css/theme.css";
import {} from "../css/prism.css";

const TOPIC = 'Функциональное реактивное программирование глазами frontend-разработчика';
const SPEAKER = 'Вячеслав Шебанов';

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
          <img src={mainBakckground} alt="" className="cover" />
        </Slide>

        <Slide>
          <h2>Привет, меня зовут Слава</h2>
          <ul>
            <li className="sparse-item">
              <img className="work-logo" src={vkLogo} /> Разработчик «ВКонтакте»
              (<a href="https://vk.com" target="_blank">vk.com</a>)
            </li>
            <li className="sparse-item">
              <img className="work-logo work-logo_paper" src={paperLogo} /> Сооснователь интернет-газеты «Бумага»
              (<a href="http://paperpaper.ru" target="_blank">paperpaper.ru</a>)
            </li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="shout smaller">Функциональное Реактивное <br/> Программирование</h2>
        </Slide>

        <Slide>
          <h2 className="shout smaller">Зачем мне это?</h2>
        </Slide>

        <Slide>
          <h2>Какие парадигмы мы используем?</h2>
          <ol>
            <li>Императивное программирование</li>
            <li>Конкуррентное программирование</li>
            <li>Программирование с зависимымы вычислениями</li>
          </ol>
        </Slide>

        <Slide>
          <h2>Разработка интерфейса это сложно</h2>
          <figure>
            <blockquote><p>I dont think our species intelligent enough to do dependable concurrent imperative programming.</p></blockquote>
            <figcaption>Conal Elliot, “The Essence of FRP”, 2015</figcaption>
          </figure>
        </Slide>

        <Slide className="black">
          <img src={superman} alt="" className="cover" />
        </Slide>

        <Slide>
          <h2 className="shout smaller">MVC</h2>
        </Slide>
        <Slide>
          <h2 className="shout smaller">
            STOP <span style={{textDecoration: 'line-through'}}>MVC</span>
          </h2>
        </Slide>
        <Slide>
          <h2 className="shout">React</h2>
        </Slide>
        <Slide>
          <div className="place left side-image">
            <img src={reactivePlane} alt="" />
            <p>Реактивный</p>
          </div>
          <div className="place right side-image">
            <img src={react} alt="" />
            <p>Не реактивный</p>
          </div>
        </Slide>
        <Slide className="black full">
          <Code code={reactCode}/>
        </Slide>
        <Slide className="">
          <h2>Чистая функция</h2>
          <Code code={pureComponent}/>
        </Slide>
        <Slide>
          <h2>Композиция чистых функций</h2>
          <div className="top-bottom">
            <img src={boxes} alt="" />
          </div>
        </Slide>
        <Slide>
          <h2>Композиция обычных функций</h2>
          <div className="top-bottom">
            <img src={kittens} alt="" />
          </div>
        </Slide>
        <Slide>
          <h2>Ограничения чистых функций</h2>
          <ol>
            <li>Локальность</li>
            <li>Неизменямость данных</li>
            <li>Отсутствие операций ввода/вывода</li>
          </ol>
        </Slide>
        <Slide>
          <h2 className="shout smaller">Острова <mark>«чистого»</mark> кода в океане императивного</h2>
        </Slide>
        <Slide>
          <h2>Еще функционального подхода?</h2>
          <ol>
            <li>Система типов (Flow, TypeScript)</li>
            <li>Эффективные неизменямые типы данных (Immutable.js, mori)</li>
          </ol>
        </Slide>
        <Slide>
          <h2>Не только React</h2>
          <ul>
            <li>Angular 2</li>
            <li>Ember.js 2</li>
            <li>И не только веб</li>
          </ul>
        </Slide>
        <Slide>
          <h2 className="shout smaller">Реактивное программирование</h2>
        </Slide>
        <Slide>
          <h2>Promise</h2>
          <Code code={promiseExample}/>
        </Slide>
        <Slide>
          <h2>За что мы его любим?</h2>
          <ol>
            <li>Хорошо комбинируется с другими promise-значениями</li>
            <li>Коллбэк вызывается всегда один раз</li>
            <li>Помогает избежать адской пирамиды коллбэков</li>
          </ol>
        </Slide>
        <Slide>
          <h2>Композиция Promise</h2>
          <Code code={promise2Example} />
        </Slide>
        <Slide>
          <h2>Материализация побочных эффектов</h2>
          <Code code={materializedEffects} lang="haskell"/>
        </Slide>
        <Slide>
          <h2 className="shout"><a href="https://gist.github.com/briancavalier/3296186">Монада</a></h2>
        </Slide>
        <Slide className="black">
          <img src={hulk} className="cover" alt="" />
        </Slide>
        <Slide className="center">
          <img src={promiseImg} alt="" />
        </Slide>
        <Slide className="center">
          <img src={promise2Img} alt="" />
        </Slide>
        <Slide className="center">
          <img src={promise3Img} alt="" />
        </Slide>
        <Slide>
          <h2>Observable</h2>
          <ol>
            <li>Promise — одно значение, Observable — много</li>
            <li>Можно отменять подписку</li>
            <li>Observable — конечный</li>
          </ol>
        </Slide>
        <Slide>
          <h2>Bacon.js</h2>
          <Code code={bacon}/>
        </Slide>
        <Slide className="center full white">
          <img src={observable} alt="" />
        </Slide>
        <Slide className="center full white">
          <img src={observableFlat} alt="" />
        </Slide>
        <Slide>
          <h2 className="shout smaller"><a href="https://github.com/Reactive-Extensions" target="_blank">ReactiveExtension</a></h2>
        </Slide>
      </Deck>
    );
  }
}
