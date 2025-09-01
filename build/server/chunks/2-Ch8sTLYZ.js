const load = async ({ fetch }) => {
  const res = await fetch(`/api/dinosaurs`);
  const dinosaurs = await res.json();
  return { dinosaurs };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BwdonEaZ.js')).default;
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/nodes/2.BDumlyGQ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CfDx5djB.js","_app/immutable/chunks/CKkVq65d.js","_app/immutable/chunks/D4EQukjq.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=2-Ch8sTLYZ.js.map
