/* Users/janpetsche/Documents/Git/gradio/js/icons/src/Pause.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent: SvelteComponent$2,
	append: append$2,
	attr: attr$2,
	detach: detach$2,
	init: init$2,
	insert: insert$2,
	noop: noop$2,
	safe_not_equal: safe_not_equal$2,
	svg_element: svg_element$2
} = window.__gradio__svelte__internal;
function create_fragment$2(ctx) {
	let svg;
	let rect0;
	let rect1;

	return {
		c() {
			svg = svg_element$2("svg");
			rect0 = svg_element$2("rect");
			rect1 = svg_element$2("rect");
			attr$2(rect0, "x", "6");
			attr$2(rect0, "y", "4");
			attr$2(rect0, "width", "4");
			attr$2(rect0, "height", "16");
			attr$2(rect1, "x", "14");
			attr$2(rect1, "y", "4");
			attr$2(rect1, "width", "4");
			attr$2(rect1, "height", "16");
			attr$2(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr$2(svg, "width", "100%");
			attr$2(svg, "height", "100%");
			attr$2(svg, "viewBox", "0 0 24 24");
			attr$2(svg, "fill", "currentColor");
			attr$2(svg, "stroke", "currentColor");
			attr$2(svg, "stroke-width", "1.5");
			attr$2(svg, "stroke-linecap", "round");
			attr$2(svg, "stroke-linejoin", "round");
		},
		m(target, anchor) {
			insert$2(target, svg, anchor);
			append$2(svg, rect0);
			append$2(svg, rect1);
		},
		p: noop$2,
		i: noop$2,
		o: noop$2,
		d(detaching) {
			if (detaching) {
				detach$2(svg);
			}
		}
	};
}

class Pause extends SvelteComponent$2 {
	constructor(options) {
		super();
		init$2(this, options, null, create_fragment$2, safe_not_equal$2, {});
	}
}

/* Users/janpetsche/Documents/Git/gradio/js/icons/src/Play.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent: SvelteComponent$1,
	append: append$1,
	attr: attr$1,
	detach: detach$1,
	init: init$1,
	insert: insert$1,
	noop: noop$1,
	safe_not_equal: safe_not_equal$1,
	svg_element: svg_element$1
} = window.__gradio__svelte__internal;
function create_fragment$1(ctx) {
	let svg;
	let polygon;

	return {
		c() {
			svg = svg_element$1("svg");
			polygon = svg_element$1("polygon");
			attr$1(polygon, "points", "5 3 19 12 5 21 5 3");
			attr$1(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr$1(svg, "width", "100%");
			attr$1(svg, "height", "100%");
			attr$1(svg, "viewBox", "0 0 24 24");
			attr$1(svg, "fill", "currentColor");
			attr$1(svg, "stroke", "currentColor");
			attr$1(svg, "stroke-width", "1.5");
			attr$1(svg, "stroke-linecap", "round");
			attr$1(svg, "stroke-linejoin", "round");
		},
		m(target, anchor) {
			insert$1(target, svg, anchor);
			append$1(svg, polygon);
		},
		p: noop$1,
		i: noop$1,
		o: noop$1,
		d(detaching) {
			if (detaching) {
				detach$1(svg);
			}
		}
	};
}

class Play extends SvelteComponent$1 {
	constructor(options) {
		super();
		init$1(this, options, null, create_fragment$1, safe_not_equal$1, {});
	}
}

/* Users/janpetsche/Documents/Git/gradio/js/icons/src/Trim.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	append,
	attr,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	svg_element
} = window.__gradio__svelte__internal;
function create_fragment(ctx) {
	let svg;
	let circle0;
	let circle1;
	let line0;
	let line1;
	let line2;

	return {
		c() {
			svg = svg_element("svg");
			circle0 = svg_element("circle");
			circle1 = svg_element("circle");
			line0 = svg_element("line");
			line1 = svg_element("line");
			line2 = svg_element("line");
			attr(circle0, "cx", "6");
			attr(circle0, "cy", "6");
			attr(circle0, "r", "3");
			attr(circle1, "cx", "6");
			attr(circle1, "cy", "18");
			attr(circle1, "r", "3");
			attr(line0, "x1", "20");
			attr(line0, "y1", "4");
			attr(line0, "x2", "8.12");
			attr(line0, "y2", "15.88");
			attr(line1, "x1", "14.47");
			attr(line1, "y1", "14.48");
			attr(line1, "x2", "20");
			attr(line1, "y2", "20");
			attr(line2, "x1", "8.12");
			attr(line2, "y1", "8.12");
			attr(line2, "x2", "12");
			attr(line2, "y2", "12");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "width", "20");
			attr(svg, "height", "20");
			attr(svg, "viewBox", "0 0 24 24");
			attr(svg, "fill", "none");
			attr(svg, "stroke", "currentColor");
			attr(svg, "stroke-width", "2");
			attr(svg, "stroke-linecap", "round");
			attr(svg, "stroke-linejoin", "round");
			attr(svg, "class", "feather feather-scissors");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, circle0);
			append(svg, circle1);
			append(svg, line0);
			append(svg, line1);
			append(svg, line2);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(svg);
			}
		}
	};
}

class Trim extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export { Pause as P, Trim as T, Play as a };
//# sourceMappingURL=Trim-4844152b.js.map
