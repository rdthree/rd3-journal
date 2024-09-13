---
layout: layout.njk
title: "240809-hand-sketches"
---

## {{ title }}

test script loading:
<!-- container for sketch -->
<div id="sketch-container"></div>
{% scriptSrc "sketch_p5.js" %}

end test script loading


test script 2 loading:
<!-- container for sketch -->
<div id="sketch-container-2"></div>
{% scriptSrc "sketch_2_p5.js" %}

end test script 2 loading

test script 3 loading:
<!-- container for sketch -->
<div id="sketch-container-3"></div>
{% scriptSrc "sketch_3_p5.js" %}

end test script 3 loading
