import { t as push, z as ensure_array_like, F as stringify, v as pop } from './index-CcDc-1jN.js';
import { a as attr } from './attributes-YVTFWYF4.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let dinosaurs = data.dinosaurs;
  const each_array = ensure_array_like(dinosaurs);
  $$payload.out.push(`<main><h1>🦕 Dinosaur app</h1> <p>Click on a dinosaur below to learn more.</p> <!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let dinosaur = each_array[$$index];
    $$payload.out.push(`<a${attr("href", `/${stringify(dinosaur.name.toLowerCase())}`)} class="dinosaur">${escape_html(dinosaur.name)} <br/></a>`);
  }
  $$payload.out.push(`<!--]--></main>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BwdonEaZ.js.map
