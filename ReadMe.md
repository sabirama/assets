# ASSET ICONS FOR WEB DEVELOPMENT

## This is made for adding icons to a element using classes

    Create an element with icon tag.
    There are three types of classes in this project: size, color and icon-name which you can use to edit your element by adding those to the classes.

    sample: <icon class="{icon-name} {size} {color}"></icon>

Available sizes:
<ul>
    <li>default = 24px x 24px</li> 
    <li>m-icon = 48px x 48px</li> 
</ul>

Available colors:
<style>
    .icon {height:24px;padding:0 8px}
    .color-container {display:flex;flex-wrap:wrap;gap:12px;margin:16px;}
    .color-container span {padding:8px;color:black;width:80px;text-align:center;} 
    .icon-container {display:flex;background:gray;padding-left:16px;padding:top:8px;}
    .icon-container span {padding:8px;display:flex;flex-wrap:wrap;width:100px;align-items:center;border:2px solid black;}
</style>
<div class="color-container">
    <span style="background:#FFFFFF;">white</span>
    <span style="background:#FF0000;">red</span>
    <span style="background:#008000;">green</span>
    <span style="background:#0000FF;">blue</span>
    <span style="background:#FFFF00;">yellow</span>
    <span style="background:#FFA500;">orange</span>
    <span style="background:#800080;">purple</span>
    <span style="background:#A52A2A;">brown</span>
    <span style="background:#808080;">gray</span>
    <span style="background:#FFD700;">gold</span>
</div>

    NOTE: it is better to use the color type only to black icons.

<h4>ICONS</h4>
<div class="icon-container">
    <span>
        <img class="icon" src="./assets/icons/angular.svg"></img>
        angular
    </span>
    <span>
        <img class="icon" src="./assets/icons/reactjs.svg"></img>
        react
    </span>
    <span>
        <img class="icon" src="./assets/icons/html.svg"></img>
        html
    </span>
    <span>
        <img class="icon" src="./assets/icons/css.svg"></img>
        css
    </span>
    <span>
        <img class="icon" src="./assets/icons/javascript.svg"></img>
        javascript
    </span>
    <span>
        <img class="icon" src="./assets/icons/php.svg"></img>
        php
    </span>
    <span>
        <img class="icon" src="./assets/icons/chrome.svg"></img>
        chrome
    </span>
    <span>
        <img class="icon" src="./assets/icons/gdrive.svg"></img>
        gdrive
    </span>
    <span>
        <img class="icon" src="./assets/icons/firefox.svg"></img>
        firefox
    </span>
    <span>
        <img class="icon" src="./assets/icons/unity.svg"></img>
        unity
    </span>
    <span>
        <img class="icon" src="./assets/icons/playstore.svg"></img>
        playstore
    </span>
    <span>
        <img class="icon" src="./assets/icons/steam.svg"></img>
        steam
    </span>
</div>

## Icons are taken from https://freeicons.io