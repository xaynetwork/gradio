const Index_svelte_svelte_type_style_lang = '';

/* Users/janpetsche/Documents/Git/gradio/js/column/Index.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	attr,
	create_slot,
	detach,
	element,
	get_all_dirty_from_scope,
	get_slot_changes,
	init,
	insert,
	null_to_empty,
	safe_not_equal,
	set_style,
	toggle_class,
	transition_in,
	transition_out,
	update_slot_base
} = window.__gradio__svelte__internal;
function create_fragment(ctx) {
	let div;
	let div_class_value;
	let style_min_width = `calc(min(${/*min_width*/ ctx[2]}px, 100%))`;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			attr(div, "id", /*elem_id*/ ctx[3]);
			attr(div, "class", div_class_value = "" + (null_to_empty(/*elem_classes*/ ctx[4].join(" ")) + " svelte-vt1mxs"));
			toggle_class(div, "gap", /*gap*/ ctx[1]);
			toggle_class(div, "compact", /*variant*/ ctx[6] === "compact");
			toggle_class(div, "panel", /*variant*/ ctx[6] === "panel");
			toggle_class(div, "hide", !/*visible*/ ctx[5]);
			set_style(div, "flex-grow", /*scale*/ ctx[0]);
			set_style(div, "min-width", style_min_width);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[7],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[7])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[7], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*elem_id*/ 8) {
				attr(div, "id", /*elem_id*/ ctx[3]);
			}

			if (!current || dirty & /*elem_classes*/ 16 && div_class_value !== (div_class_value = "" + (null_to_empty(/*elem_classes*/ ctx[4].join(" ")) + " svelte-vt1mxs"))) {
				attr(div, "class", div_class_value);
			}

			if (!current || dirty & /*elem_classes, gap*/ 18) {
				toggle_class(div, "gap", /*gap*/ ctx[1]);
			}

			if (!current || dirty & /*elem_classes, variant*/ 80) {
				toggle_class(div, "compact", /*variant*/ ctx[6] === "compact");
			}

			if (!current || dirty & /*elem_classes, variant*/ 80) {
				toggle_class(div, "panel", /*variant*/ ctx[6] === "panel");
			}

			if (!current || dirty & /*elem_classes, visible*/ 48) {
				toggle_class(div, "hide", !/*visible*/ ctx[5]);
			}

			if (dirty & /*scale*/ 1) {
				set_style(div, "flex-grow", /*scale*/ ctx[0]);
			}

			if (dirty & /*min_width*/ 4 && style_min_width !== (style_min_width = `calc(min(${/*min_width*/ ctx[2]}px, 100%))`)) {
				set_style(div, "min-width", style_min_width);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(div);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { scale = null } = $$props;
	let { gap = true } = $$props;
	let { min_width = 0 } = $$props;
	let { elem_id = "" } = $$props;
	let { elem_classes = [] } = $$props;
	let { visible = true } = $$props;
	let { variant = "default" } = $$props;

	$$self.$$set = $$props => {
		if ('scale' in $$props) $$invalidate(0, scale = $$props.scale);
		if ('gap' in $$props) $$invalidate(1, gap = $$props.gap);
		if ('min_width' in $$props) $$invalidate(2, min_width = $$props.min_width);
		if ('elem_id' in $$props) $$invalidate(3, elem_id = $$props.elem_id);
		if ('elem_classes' in $$props) $$invalidate(4, elem_classes = $$props.elem_classes);
		if ('visible' in $$props) $$invalidate(5, visible = $$props.visible);
		if ('variant' in $$props) $$invalidate(6, variant = $$props.variant);
		if ('$$scope' in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [scale, gap, min_width, elem_id, elem_classes, visible, variant, $$scope, slots];
}

class Index extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			scale: 0,
			gap: 1,
			min_width: 2,
			elem_id: 3,
			elem_classes: 4,
			visible: 5,
			variant: 6
		});
	}
}

export { Index as default };
//# sourceMappingURL=Index-0d01b2e6.js.map