(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,o,t){t(175),e.exports=t(176)},222:function(e,o,t){var content=t(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(99).default)("d706d280",content,!0,{sourceMap:!1})},223:function(e,o,t){var n=t(98)((function(i){return i[1]}));n.push([e.i,'/*! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.prose{color:var(--tw-prose-body);max-width:65ch;}.prose :where([class~="lead"]):not(:where([class~="not-prose"] *)){color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em;}.prose :where(a):not(:where([class~="not-prose"] *)){color:var(--tw-prose-links);text-decoration:underline;font-weight:500;}.prose :where(strong):not(:where([class~="not-prose"] *)){color:var(--tw-prose-bold);font-weight:600;}.prose :where(ol):not(:where([class~="not-prose"] *)){list-style-type:decimal;padding-left:1.625em;}.prose :where(ol[type="A"]):not(:where([class~="not-prose"] *)){list-style-type:upper-alpha;}.prose :where(ol[type="a"]):not(:where([class~="not-prose"] *)){list-style-type:lower-alpha;}.prose :where(ol[type="A" s]):not(:where([class~="not-prose"] *)){list-style-type:upper-alpha;}.prose :where(ol[type="a" s]):not(:where([class~="not-prose"] *)){list-style-type:lower-alpha;}.prose :where(ol[type="I"]):not(:where([class~="not-prose"] *)){list-style-type:upper-roman;}.prose :where(ol[type="i"]):not(:where([class~="not-prose"] *)){list-style-type:lower-roman;}.prose :where(ol[type="I" s]):not(:where([class~="not-prose"] *)){list-style-type:upper-roman;}.prose :where(ol[type="i" s]):not(:where([class~="not-prose"] *)){list-style-type:lower-roman;}.prose :where(ol[type="1"]):not(:where([class~="not-prose"] *)){list-style-type:decimal;}.prose :where(ul):not(:where([class~="not-prose"] *)){list-style-type:disc;padding-left:1.625em;}.prose :where(ol > li):not(:where([class~="not-prose"] *))::marker{font-weight:400;color:var(--tw-prose-counters);}.prose :where(ul > li):not(:where([class~="not-prose"] *))::marker{color:var(--tw-prose-bullets);}.prose :where(hr):not(:where([class~="not-prose"] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em;}.prose :where(blockquote):not(:where([class~="not-prose"] *)){font-weight:500;font-style:italic;color:var(--tw-prose-quotes);border-left-width:0.25rem;border-left-color:var(--tw-prose-quote-borders);quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em;}.prose :where(blockquote p:first-of-type):not(:where([class~="not-prose"] *))::before{content:open-quote;}.prose :where(blockquote p:last-of-type):not(:where([class~="not-prose"] *))::after{content:close-quote;}.prose :where(h1):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111;}.prose :where(h1 strong):not(:where([class~="not-prose"] *)){font-weight:900;}.prose :where(h2):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333;}.prose :where(h2 strong):not(:where([class~="not-prose"] *)){font-weight:800;}.prose :where(h3):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6;}.prose :where(h3 strong):not(:where([class~="not-prose"] *)){font-weight:700;}.prose :where(h4):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5;}.prose :where(h4 strong):not(:where([class~="not-prose"] *)){font-weight:700;}.prose :where(figure > *):not(:where([class~="not-prose"] *)){margin-top:0;margin-bottom:0;}.prose :where(figcaption):not(:where([class~="not-prose"] *)){color:var(--tw-prose-captions);font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em;}.prose :where(code):not(:where([class~="not-prose"] *)){color:var(--tw-prose-code);font-weight:600;font-size:0.875em;}.prose :where(code):not(:where([class~="not-prose"] *))::before{content:"`";}.prose :where(code):not(:where([class~="not-prose"] *))::after{content:"`";}.prose :where(a code):not(:where([class~="not-prose"] *)){color:var(--tw-prose-links);}.prose :where(pre):not(:where([class~="not-prose"] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);overflow-x:auto;font-weight:400;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em;}.prose :where(pre code):not(:where([class~="not-prose"] *)){background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;}.prose :where(pre code):not(:where([class~="not-prose"] *))::before{content:none;}.prose :where(pre code):not(:where([class~="not-prose"] *))::after{content:none;}.prose :where(table):not(:where([class~="not-prose"] *)){width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857;}.prose :where(thead):not(:where([class~="not-prose"] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders);}.prose :where(thead th):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.prose :where(tbody tr):not(:where([class~="not-prose"] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders);}.prose :where(tbody tr:last-child):not(:where([class~="not-prose"] *)){border-bottom-width:0;}.prose :where(tbody td):not(:where([class~="not-prose"] *)){vertical-align:baseline;padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.prose{--tw-prose-body:#374151;--tw-prose-headings:#111827;--tw-prose-lead:#4b5563;--tw-prose-links:#111827;--tw-prose-bold:#111827;--tw-prose-counters:#6b7280;--tw-prose-bullets:#d1d5db;--tw-prose-hr:#e5e7eb;--tw-prose-quotes:#111827;--tw-prose-quote-borders:#e5e7eb;--tw-prose-captions:#6b7280;--tw-prose-code:#111827;--tw-prose-pre-code:#e5e7eb;--tw-prose-pre-bg:#1f2937;--tw-prose-th-borders:#d1d5db;--tw-prose-td-borders:#e5e7eb;--tw-prose-invert-body:#d1d5db;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#9ca3af;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#9ca3af;--tw-prose-invert-bullets:#4b5563;--tw-prose-invert-hr:#374151;--tw-prose-invert-quotes:#f3f4f6;--tw-prose-invert-quote-borders:#374151;--tw-prose-invert-captions:#9ca3af;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#d1d5db;--tw-prose-invert-pre-bg:rgb(0 0 0 / 50%);--tw-prose-invert-th-borders:#4b5563;--tw-prose-invert-td-borders:#374151;font-size:1rem;line-height:1.75;}.prose :where(p):not(:where([class~="not-prose"] *)){margin-top:1.25em;margin-bottom:1.25em;}.prose :where(img):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.prose :where(video):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.prose :where(figure):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.prose :where(h2 code):not(:where([class~="not-prose"] *)){font-size:0.875em;}.prose :where(h3 code):not(:where([class~="not-prose"] *)){font-size:0.9em;}.prose :where(li):not(:where([class~="not-prose"] *)){margin-top:0.5em;margin-bottom:0.5em;}.prose :where(ol > li):not(:where([class~="not-prose"] *)){padding-left:0.375em;}.prose :where(ul > li):not(:where([class~="not-prose"] *)){padding-left:0.375em;}.prose > :where(ul > li p):not(:where([class~="not-prose"] *)){margin-top:0.75em;margin-bottom:0.75em;}.prose > :where(ul > li > *:first-child):not(:where([class~="not-prose"] *)){margin-top:1.25em;}.prose > :where(ul > li > *:last-child):not(:where([class~="not-prose"] *)){margin-bottom:1.25em;}.prose > :where(ol > li > *:first-child):not(:where([class~="not-prose"] *)){margin-top:1.25em;}.prose > :where(ol > li > *:last-child):not(:where([class~="not-prose"] *)){margin-bottom:1.25em;}.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"] *)){margin-top:0.75em;margin-bottom:0.75em;}.prose :where(hr + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(h2 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(h3 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(h4 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(thead th:first-child):not(:where([class~="not-prose"] *)){padding-left:0;}.prose :where(thead th:last-child):not(:where([class~="not-prose"] *)){padding-right:0;}.prose :where(tbody td:first-child):not(:where([class~="not-prose"] *)){padding-left:0;}.prose :where(tbody td:last-child):not(:where([class~="not-prose"] *)){padding-right:0;}.prose > :where(:first-child):not(:where([class~="not-prose"] *)){margin-top:0;}.prose > :where(:last-child):not(:where([class~="not-prose"] *)){margin-bottom:0;}.static{position:static;}.font-serif{font-family:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;}.trystyle{font-size:3.75rem;line-height:1;}.cm-editor .cm-content{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";}.cm-textarea{height:100%;min-width:100%;width:100%;min-height:100%;}.cm-header1{font-size:3.75rem;line-height:1;}.cm-header2{font-size:3rem;line-height:1;}.cm-header3{font-size:2.25rem;line-height:2.5rem;}.cm-header4{font-size:1.875rem;line-height:2.25rem;}.cm-header5{font-size:1.5rem;line-height:2rem;}.cm-header6{font-size:1.25rem;line-height:1.75rem;}.cm-italics{font-style:italic;}.cm-bold{font-weight:700;}.cm-blockquote{font-weight:500;font-style:italic;border-left-width:.25rem;border-left-color:#e5e7eb;padding-left:1em}.cm-bulletlist{list-style-type:disc;}.cm-underline{--tw-text-opacity:1;color:rgb(56 189 248 / var(--tw-text-opacity));-webkit-text-decoration-line:underline;text-decoration-line:underline;}.cm-inlinecodeblock{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}.cm-remove-italics-bold{font-weight:400 !important;font-style:normal !important;}.testing{font-weight:500;font-style:italic;border-left-width:.25rem;border-left-color:#e5e7eb;padding-left:1em}@media (min-width: 1024px){.lg\\:prose-xl{font-size:1.25rem;line-height:1.8;}.lg\\:prose-xl :where(p):not(:where([class~="not-prose"] *)){margin-top:1.2em;margin-bottom:1.2em;}.lg\\:prose-xl :where([class~="lead"]):not(:where([class~="not-prose"] *)){font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em;}.lg\\:prose-xl :where(blockquote):not(:where([class~="not-prose"] *)){margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em;}.lg\\:prose-xl :where(h1):not(:where([class~="not-prose"] *)){font-size:2.8em;margin-top:0;margin-bottom:0.8571429em;line-height:1;}.lg\\:prose-xl :where(h2):not(:where([class~="not-prose"] *)){font-size:1.8em;margin-top:1.5555556em;margin-bottom:0.8888889em;line-height:1.1111111;}.lg\\:prose-xl :where(h3):not(:where([class~="not-prose"] *)){font-size:1.5em;margin-top:1.6em;margin-bottom:0.6666667em;line-height:1.3333333;}.lg\\:prose-xl :where(h4):not(:where([class~="not-prose"] *)){margin-top:1.8em;margin-bottom:0.6em;line-height:1.6;}.lg\\:prose-xl :where(img):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.lg\\:prose-xl :where(video):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.lg\\:prose-xl :where(figure):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.lg\\:prose-xl :where(figure > *):not(:where([class~="not-prose"] *)){margin-top:0;margin-bottom:0;}.lg\\:prose-xl :where(figcaption):not(:where([class~="not-prose"] *)){font-size:0.9em;line-height:1.5555556;margin-top:1em;}.lg\\:prose-xl :where(code):not(:where([class~="not-prose"] *)){font-size:0.9em;}.lg\\:prose-xl :where(h2 code):not(:where([class~="not-prose"] *)){font-size:0.8611111em;}.lg\\:prose-xl :where(h3 code):not(:where([class~="not-prose"] *)){font-size:0.9em;}.lg\\:prose-xl :where(pre):not(:where([class~="not-prose"] *)){font-size:0.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:0.5rem;padding-top:1.1111111em;padding-right:1.3333333em;padding-bottom:1.1111111em;padding-left:1.3333333em;}.lg\\:prose-xl :where(ol):not(:where([class~="not-prose"] *)){padding-left:1.6em;}.lg\\:prose-xl :where(ul):not(:where([class~="not-prose"] *)){padding-left:1.6em;}.lg\\:prose-xl :where(li):not(:where([class~="not-prose"] *)){margin-top:0.6em;margin-bottom:0.6em;}.lg\\:prose-xl :where(ol > li):not(:where([class~="not-prose"] *)){padding-left:0.4em;}.lg\\:prose-xl :where(ul > li):not(:where([class~="not-prose"] *)){padding-left:0.4em;}.lg\\:prose-xl > :where(ul > li p):not(:where([class~="not-prose"] *)){margin-top:0.8em;margin-bottom:0.8em;}.lg\\:prose-xl > :where(ul > li > *:first-child):not(:where([class~="not-prose"] *)){margin-top:1.2em;}.lg\\:prose-xl > :where(ul > li > *:last-child):not(:where([class~="not-prose"] *)){margin-bottom:1.2em;}.lg\\:prose-xl > :where(ol > li > *:first-child):not(:where([class~="not-prose"] *)){margin-top:1.2em;}.lg\\:prose-xl > :where(ol > li > *:last-child):not(:where([class~="not-prose"] *)){margin-bottom:1.2em;}.lg\\:prose-xl :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"] *)){margin-top:0.8em;margin-bottom:0.8em;}.lg\\:prose-xl :where(hr):not(:where([class~="not-prose"] *)){margin-top:2.8em;margin-bottom:2.8em;}.lg\\:prose-xl :where(hr + *):not(:where([class~="not-prose"] *)){margin-top:0;}.lg\\:prose-xl :where(h2 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.lg\\:prose-xl :where(h3 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.lg\\:prose-xl :where(h4 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.lg\\:prose-xl :where(table):not(:where([class~="not-prose"] *)){font-size:0.9em;line-height:1.5555556;}.lg\\:prose-xl :where(thead th):not(:where([class~="not-prose"] *)){padding-right:0.6666667em;padding-bottom:0.8888889em;padding-left:0.6666667em;}.lg\\:prose-xl :where(thead th:first-child):not(:where([class~="not-prose"] *)){padding-left:0;}.lg\\:prose-xl :where(thead th:last-child):not(:where([class~="not-prose"] *)){padding-right:0;}.lg\\:prose-xl :where(tbody td):not(:where([class~="not-prose"] *)){padding-top:0.8888889em;padding-right:0.6666667em;padding-bottom:0.8888889em;padding-left:0.6666667em;}.lg\\:prose-xl :where(tbody td:first-child):not(:where([class~="not-prose"] *)){padding-left:0;}.lg\\:prose-xl :where(tbody td:last-child):not(:where([class~="not-prose"] *)){padding-right:0;}.lg\\:prose-xl > :where(:first-child):not(:where([class~="not-prose"] *)){margin-top:0;}.lg\\:prose-xl > :where(:last-child):not(:where([class~="not-prose"] *)){margin-bottom:0;}}',""]),n.locals={},e.exports=n}},[[174,4,1,5]]]);