let head = 1;
let body = 1;
let legs = 1;

display();

function display() {
  createMainDivs("buttons");
  createH1();
  createMainDivs("cards");
  createButtons("noLayout()", "Ingen layout");
  createButtons("verticalLayout()", "Vertikal layout");
  createButtons("horizontalLayout()", "Horisontal layout");
  createButtons("gridLayout()", "Grid layout");
  createCards("green", "showTools()", "Verktøy", "cardTools");
  createCards("blue", "showHtml()", "HTML", "cardHtml");
  createCards("red", "showCss()", "CSS", "cardCss");
  createCards("yellow", "showJavaScript()", "JavaScript", "cardJavaScript");
  createCards("dark", "showBodyGame()", "Hode, kropp og ben", "cardGame");
}

function createMainDivs(divId) {
  document.getElementById("app").innerHTML += /*html*/ `
    <div id='${divId}'></div>
    `;
}

function createButtons(onclickFunction, buttonName) {
  document.getElementById("buttons").innerHTML += /*html*/ `
    <button onclick=${onclickFunction}>${buttonName}</button>
    `;
}

function createH1() {
  document.getElementById("app").innerHTML += /*html*/ `
    <h1>Eksempel 1</h1>
    `;
}

function createCards(headerColor, headerOnclickFunction, label, innerDivId) {
  document.getElementById("cards").innerHTML += /*html*/ `
    <div class="card">
        <div class="header ${headerColor}" onclick=${headerOnclickFunction}>${label}</div>
        <div id=${innerDivId}></div>
    </div>
    `;
}

function showTools() {
  blackAll();
  document.getElementById("cardTools").innerHTML = /*html*/ `
    <div class="innerCard">
        De to viktigste verktøyene vi skal bruke er disse:
            <ul>
                <li>
                    Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                    <br />Vi skal bruke noen <i>extensions</i>:
                    <ul>
                        <li>JavaScript-booster</li>
                        <li>es6-string-html</li>
                        <li>live-server</li>
                        <li>live-share</li>
                    </ul>
                </li>
                <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
            </ul>
    </div> 
    `;
}

function showHtml() {
  blackAll();
  document.getElementById("cardHtml").innerHTML = /*html*/ `
    <div class="innerCard">
    Vi bruker HTML til å definere et dokument.
    <ul>
        <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
        <li>Tagger for grunnleggende formatering av tekst</li>
        <li><tt>&lt;div&gt;</tt></li>
        <li><tt>&lt;input type="text"&gt;</tt></li>
        <li><tt>&lt;button&gt;</tt></li>
        <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
        </li>
        <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
        </li>
    </ul>
    </div> 
    `;
}

function showCss() {
  blackAll();
  document.getElementById("cardCss").innerHTML = /*html*/ `
    <div class="innerCard">
    Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
    <ul>
        <li><tt>background-color</tt></li>
        <li><tt>color</tt></li>
        <li><tt>padding</tt></li>
        <li><tt>margin</tt></li>
        <li><tt>border</tt></li>
        <li><tt>text-align</tt></li>
        <li><tt>font-size</tt></li>
        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
        <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
        </li>
        <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
        </li>
    </ul>
    </div> 
    `;
}

function showJavaScript() {
  blackAll();
  document.getElementById("cardJavaScript").innerHTML = /*html*/ `
    <div class="innerCard">
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
    ved
    å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
    <ul>
        <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
            Moodle.</li>
        <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                Reference</a></li>
    
    </ul>
    </div> 
    `;
}

function showBodyGame() {
  document.getElementById("cardGame").classList.add("bodies");
  document.getElementById("cardGame").innerHTML = /*html*/ `
        <div id="head" class="bodyPart"></div>
        <div id="body" class="bodyPart"></div>
        <div id="legs" class="bodyPart"></div>
    `;
  selectHead();
  selectBody();
  selectLegs();
}

function selectHead(direction) {
  if (direction === "▶") {
    head++;
    if (head > 4) {
      head = 1;
    }
  }

  if (direction === "◀") {
    head--;
    if (head < 1) {
      head = 4;
    }
  }
  document.getElementById("head").innerHTML = /*html*/ `
    <button onclick="selectHead('◀')">◀</button>
    <img src="pics/head${head}.png" />
    <button onclick="selectHead('▶')">▶</button>
    `;
}

function selectBody(direction) {
  if (direction === "▶") {
    body++;
    if (body > 4) {
      body = 1;
    }
  }

  if (direction === "◀") {
    body--;
    if (body < 1) {
      body = 4;
    }
  }
  document.getElementById("body").innerHTML = /*html*/ `
    <button onclick="selectBody('◀')">◀</button>
    <img src="pics/body${body}.png" />
    <button onclick="selectBody('▶')">▶</button>
    `;
}

function selectLegs(direction) {
  if (direction === "▶") {
    legs++;
    if (legs > 4) {
      legs = 1;
    }
  }

  if (direction === "◀") {
    legs--;
    if (legs < 1) {
      legs = 4;
    }
  }
  document.getElementById("legs").innerHTML = /*html*/ `
    <button onclick="selectLegs('◀')">◀</button>
    <img src="pics/legs${legs}.png" />
    <button onclick="selectLegs('▶')">▶</button>
    `;
}

function blackAll() {
  document.getElementById("cardTools").innerHTML = "";
  document.getElementById("cardCss").innerHTML = "";
  document.getElementById("cardHtml").innerHTML = "";
  document.getElementById("cardJavaScript").innerHTML = "";
  document.getElementById("cardGame").innerHTML = "";
}
