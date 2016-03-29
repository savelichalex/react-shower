import React, { Component } from 'react';
import Deck from "./components/Deck.react";
import Slide from "./components/Slide.react";

export default class Presentation extends Component {

  render() {
    return <Deck>
      <header className="caption">
      <h1>Shower Presentation Engine</h1>
      <p>Yours Truly, Famous Inc.</p>
    </header>
    <Slide>
      <h2>Shower Presentation Engine</h2>
      <p>Brought to you by <a href="http://pepelsbey.net">Vadim Makeev</a></p>
      <img src="http://shwr.me/pictures/cover.jpg" alt="" className="cover" />
        To apply styles to the certain slides
        set slide ID to get needed elements
    </Slide>
    <Slide>
      <h2>Shower key features</h2>
      <ol>
        <li>Built on HTML, CSS and vanilla JavaScript</li>
        <li>Works in all modern browsers</li>
        <li>Themes are separated from engine</li>
        <li>Modular and extensible</li>
        <li>Fully keyboard accessible</li>
        <li>Printable to PDF</li>
      </ol>
      <p className="note">Shower [ʃəuə] noun. A person or thing that shows.</p>
    </Slide>
    <Slide>
      <h2>Plain text on your slides</h2>
      <p>Lorem ipsum dolor sit amet, consectetur <a href="#4">adipisicing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <em>quis nostrud</em> exercitation ullamco laboris <strong>nisi ut aliquip</strong> ex ea commodo consequat. Duis aute irure <i>dolor</i> in reprehenderit in voluptate velit esse cillum <b>dolore</b> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <code>&lt;culpa&gt;</code> qui officia deserunt mollit anim id est laborum.</p>
    </Slide>
    <Slide>
      <h2>Two columns if you like</h2>
      <p className="double">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
    </Slide>
    <Slide>
      <h2>All kind of lists</h2>
      <ol>
        <li>Simple lists are marked with bullets</li>
        <li>Ordered lists begin with a number</li>
        <li>You can even nest lists one inside another
          <ul>
            <li>Or mix their types</li>
            <li>But do not go too far</li>
            <li>Otherwise audience will be bored</li>
          </ul>
        </li>
        <li>Look, seven rows exactly!</li>
      </ol>
    </Slide>
    <Slide>
      <h2>Serious citations</h2>
      <figure>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
        </blockquote>
        <figcaption>Marcus Tullius Cicero</figcaption>
      </figure>
    </Slide>
    <Slide>
      <h2>Code samples</h2>
      <pre>			<code>&lt;!DOCTYPE html&gt;</code>
        <code className="mark">&lt;html lang="en"&gt;</code>
        <code><mark>&lt;head&gt;</mark> <span className="comment">&lt;!--Comment--&gt;</span></code>
        <code>    &lt;title&gt;Shower&lt;/title&gt;</code>
        <code>    &lt;meta charset="<mark className="important">UTF-8</mark>"&gt;</code>
        <code>    &lt;link rel="stylesheet" href="screen.css"&gt;</code>
        <code><mark>&lt;/head&gt;</mark></code>
      </pre>
    </Slide>
    <Slide>
      <h2>Even tables</h2>
      <table>
      <tbody><tr>
        <th scope="col">Locavore</th>
        <th>Umami</th>
        <th>Helvetica</th>
        <th>Vegan</th>
      </tr>
      <tr>
        <th scope="row">Fingerstache</th>
        <td>Kale</td>
        <td>Chips</td>
        <td>Keytar</td>
      </tr>
      <tr>
        <th scope="row">Sriracha</th>
        <td>Gluten-free</td>
        <td>Ennui</td>
        <td>Keffiyeh</td>
      </tr>
      <tr>
        <th scope="row">Thundercats</th>
        <td>Jean</td>
        <td>Shorts</td>
        <td>Biodiesel</td>
      </tr>
      <tr>
        <th scope="row">Terry</th>
        <td>Richardson</td>
        <td>Swag</td>
        <td>Blog</td>
      </tr>
      </tbody></table>
      <p>It’s good to have information organized.</p>
    </Slide>
    <Slide>
      <h2>Pictures</h2>
      <img src="http://shwr.me/pictures/picture.jpg" alt="" className="cover" />
    </Slide>
    <Slide>
      <h2 className="shout shrink">You&nbsp;can&nbsp;even shout&nbsp;this&nbsp;way</h2>
    </Slide>
    <Slide>
      <h2>Inner navigation</h2>
      <ol>
        <li>Lets you reveal list items one by one</li>
        <li className="next">To keep some key points</li>
        <li className="next">In secret from audience</li>
        <li className="next">But it will work only once</li>
        <li className="next">Nobody wants to see the same joke twice</li>
      </ol>
    </Slide>
    <Slide>
      <h2>Привет</h2>
    </Slide>
    <Slide>
      <h2 className="shout">
        <img src="http://shwr.me/pictures/logo.svg" alt="Shower logo" />
        <a href="https://github.com/shower/shower">See more on GitHub</a>
      </h2>
    </Slide>
    </Deck>
  }
}