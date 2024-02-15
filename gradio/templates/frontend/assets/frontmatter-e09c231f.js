import { s as styleTags, t as tags, f as foldNodeProp, c as foldInside, p as parseMixed, S as StreamLanguage } from './Index-eb8473ee.js';
import { yaml } from './yaml-c63fc23d.js';
import './index-7238dac5.js';
import './svelte/svelte.js';
import './Button-f85ed4ba.js';
import './Index-c40cd34e.js';
import './Check-246ad109.js';
import './Copy-bb8844bd.js';
import './DownloadLink-d65d0967.js';
import './file-url-b25c4822.js';
import './BlockLabel-a4a036ae.js';
import './Empty-92c0ade2.js';
import './Example-b40a01a2.js';

const frontMatterFence = /^---\s*$/m;
const frontmatter = {
  defineNodes: [{ name: "Frontmatter", block: true }, "FrontmatterMark"],
  props: [
    styleTags({
      Frontmatter: [tags.documentMeta, tags.monospace],
      FrontmatterMark: tags.processingInstruction
    }),
    foldNodeProp.add({
      Frontmatter: foldInside,
      FrontmatterMark: () => null
    })
  ],
  wrap: parseMixed((node) => {
    const { parser } = StreamLanguage.define(yaml);
    if (node.type.name === "Frontmatter") {
      return {
        parser,
        overlay: [{ from: node.from + 4, to: node.to - 4 }]
      };
    }
    return null;
  }),
  parseBlock: [
    {
      name: "Frontmatter",
      before: "HorizontalRule",
      parse: (cx, line) => {
        let end = void 0;
        const children = new Array();
        if (cx.lineStart === 0 && frontMatterFence.test(line.text)) {
          children.push(cx.elt("FrontmatterMark", 0, 4));
          while (cx.nextLine()) {
            if (frontMatterFence.test(line.text)) {
              end = cx.lineStart + 4;
              break;
            }
          }
          if (end !== void 0) {
            children.push(cx.elt("FrontmatterMark", end - 4, end));
            cx.addElement(cx.elt("Frontmatter", 0, end, children));
          }
          return true;
        }
        return false;
      }
    }
  ]
};

export { frontmatter };
//# sourceMappingURL=frontmatter-e09c231f.js.map
