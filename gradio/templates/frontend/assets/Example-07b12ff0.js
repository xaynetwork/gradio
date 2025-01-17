/* empty css                                                */
/* Users/janpetsche/Documents/Git/gradio/js/file/Example.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	text,
	toggle_class
} = window.__gradio__svelte__internal;
function create_fragment(ctx) {
	let div;

	let t_value = (/*value*/ ctx[0]
	? Array.isArray(/*value*/ ctx[0])
		? /*value*/ ctx[0].join(", ")
		: /*value*/ ctx[0]
	: "") + "";

	let t;

	return {
		c() {
			div = element("div");
			t = text(t_value);
			attr(div, "class", "svelte-rgtszb");
			toggle_class(div, "table", /*type*/ ctx[1] === "table");
			toggle_class(div, "gallery", /*type*/ ctx[1] === "gallery");
			toggle_class(div, "selected", /*selected*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},
		p(ctx, [dirty]) {
			if (dirty & /*value*/ 1 && t_value !== (t_value = (/*value*/ ctx[0]
			? Array.isArray(/*value*/ ctx[0])
				? /*value*/ ctx[0].join(", ")
				: /*value*/ ctx[0]
			: "") + "")) set_data(t, t_value);

			if (dirty & /*type*/ 2) {
				toggle_class(div, "table", /*type*/ ctx[1] === "table");
			}

			if (dirty & /*type*/ 2) {
				toggle_class(div, "gallery", /*type*/ ctx[1] === "gallery");
			}

			if (dirty & /*selected*/ 4) {
				toggle_class(div, "selected", /*selected*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { value } = $$props;
	let { type } = $$props;
	let { selected = false } = $$props;

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('type' in $$props) $$invalidate(1, type = $$props.type);
		if ('selected' in $$props) $$invalidate(2, selected = $$props.selected);
	};

	return [value, type, selected];
}

class Example extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { value: 0, type: 1, selected: 2 });
	}
}

export { Example as default };
//# sourceMappingURL=Example-07b12ff0.js.map
