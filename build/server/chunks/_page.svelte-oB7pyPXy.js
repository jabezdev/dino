import { e as escape_html } from './escaping-CqgfEcN3.js';
import { t as push, v as pop } from './index-CcDc-1jN.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let dinosaur = data.dinosaur;
  $$payload.out.push(`<div><h1>${escape_html(dinosaur.name)}</h1> <p>${escape_html(dinosaur.description)}</p> <a href="/">🠠 Back to all dinosaurs</a></div>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-oB7pyPXy.js.map
