// model
let head = 1;
let body = 1;
let legs = 1;
let toolsHtml = false;
let htmlHtml = false;
let cssHtml = false;
let javascriptHtml = false;
let bodyGameHtml = false;
let displayStyle = "";

// view
display();

function display() {
  document.getElementById("app").innerHTML = /*html*/ `
  <div id='buttons'>
  ${createButtons("noLayout()", "Ingen layout")}
  ${createButtons("verticalLayout()", "Vertikal layout")}
  ${createButtons("horizontalLayout()", "Horisontal layout")}
  ${createButtons("gridLayout()", "Grid layout")}
  </div>
  <h1>Eksempel 1</h1>
  <div id='cards' class="${displayStyle}">
  ${createCards(
    "green",
    "showToolsContent()",
    "Verktøy",
    "cardTools",
    toolsHtml ? createToolsContent() : ""
  )}
  ${createCards(
    "blue",
    "showHtmlContent()",
    "HTML",
    "cardHtml",
    htmlHtml ? createHtmlContent() : ""
  )}
  ${createCards(
    "red",
    "showCSSContent()",
    "CSS",
    "cardCss",
    cssHtml ? createCSSContent() : ""
  )}
  ${createCards(
    "yellow",
    "showJavaScriptContent()",
    "JavaScript",
    "cardJavaScript",
    javascriptHtml ? createJavaScriptContent() : ""
  )}
  ${createCards(
    "dark",
    "showBodyGameContent()",
    "Hode, kropp og ben",
    "cardGame",
    bodyGameHtml ? createBodyGameContent() : "",
    "bodies"
  )}
  </div>
  `;
}

//controller
function showToolsContent() {
  hideContent();
  toolsHtml = !toolsHtml;
  display();
}

function showHtmlContent() {
  hideContent();
  htmlHtml = !htmlHtml;
  display();
}

function showCSSContent() {
  hideContent();
  cssHtml = !cssHtml;
  display();
}

function showJavaScriptContent() {
  hideContent();
  javascriptHtml = !javascriptHtml;
  display();
}

function showBodyGameContent() {
  hideContent();
  bodyGameHtml = !bodyGameHtml;
  display();
}

function hideContent() {
  toolsHtml = false;
  htmlHtml = false;
  cssHtml = false;
  javascriptHtml = false;
  bodyGameHtml = false;
}

function noLayout() {
  displayStyle = "";
  display();
}

function verticalLayout() {
  displayStyle = "vertical";
  display();
}

function horizontalLayout() {
  displayStyle = "horizontal";
  display();
}

function gridLayout() {
  displayStyle = "grid";
  display();
}

//body game logic
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
  display();
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
  display();
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
  display();
}

//components

function createButtons(onclickFunction, buttonName) {
  return `<button onclick=${onclickFunction}>${buttonName}</button>`;
}

function createCards(
  headerColor,
  headerOnclickFunction,
  label,
  innerDivId,
  insertContent,
  className
) {
  return `<div class="card">
         <div class="header ${headerColor}" onclick=${headerOnclickFunction}>${label}</div>
         <div id=${innerDivId} class="${className}">${insertContent}</div>
     </div>`;
}

function createToolsContent() {
  return `<div class="innerCard">
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
     </div>`;
}

function createHtmlContent() {
  return `<div class="innerCard">
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
     </div>`;
}

function createCSSContent() {
  return `<div class="innerCard">
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
     </div>`;
}

function createJavaScriptContent() {
  return `<div class="innerCard">
     Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
     ved
     å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
     <ul>
         <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
             Moodle.</li>
         <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                 Reference</a></li> 
     </ul>
     </div>`;
}

function createBodyGameContent() {
  return `<div id="head" class="bodyPart">
          <button onclick="selectHead('◀')">◀</button>
          <img src="pics/head${head}.png" />
          <button onclick="selectHead('▶')">▶</button>
        </div>
        <div id="body" class="bodyPart">
          <button onclick="selectBody('◀')">◀</button>
          <img src="pics/body${body}.png" />
          <button onclick="selectBody('▶')">▶</button>
        </div>
        <div id="legs" class="bodyPart">
          <button onclick="selectLegs('◀')">◀</button>
          <img src="pics/legs${legs}.png" />
          <button onclick="selectLegs('▶')">▶</button>
        </div>`;
}
