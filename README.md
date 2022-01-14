# TabBar
Material Design style tab-bar.

## Usage
```html
<link rel="stylesheet" href="./tab-bar.min.css">
<script src="./tab-bar.min.js"></script>
```

#### TabBar basic
Example:
```html
<div class="es-tab-bar">
  <button class="es-tab es-active">lab1</button>
  <button class="es-tab">lab2</button>
  <button class="es-tab">lab3</button>
  <div class="es-tab__active"></div>
</div>
```

#### TabBar scroller
Example:
```html
<div class="es-tab-bar es-scroll">
  <button class="es-tab es-active">this is the label this is the label</button>
  <button class="es-tab">this is the label</button>
  <button class="es-tab">this is the label</button>
  <button class="es-tab">this is the label</button>
  <button class="es-tab">this is the label</button>
  <div class="es-tab__active"></div>
</div>
```

#### TabBar Color
Default is color `#610bf0`. You can directly override the `background-color` style under the `.es-tab-bar .es-tab__active` class or define `--tab-color` directly under the `.es-tab-bar` class variable.
