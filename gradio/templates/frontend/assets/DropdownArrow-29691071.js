import './Index-c40cd34e.js';

/* Users/janpetsche/Documents/Git/gradio/js/icons/src/DropdownArrow.svelte generated by Svelte v4.2.2 */
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
	let path;

	return {
		c() {
			svg = svg_element("svg");
			path = svg_element("path");
			attr(path, "d", "M5 8l4 4 4-4z");
			attr(svg, "class", "dropdown-arrow svelte-xjn76a");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "width", "100%");
			attr(svg, "height", "100%");
			attr(svg, "viewBox", "0 0 18 18");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path);
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

class DropdownArrow extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export { DropdownArrow as D };
//# sourceMappingURL=DropdownArrow-29691071.js.map