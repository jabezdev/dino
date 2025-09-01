import { e as error } from './index-CccDCyu_.js';

const load = async ({ fetch, params }) => {
  const res = await fetch(`/api/dinosaurs/${params.dinosaur}`);
  const dinosaur = await res.json();
  if (res.status === 404) {
    return error(404, "No dinosaur found");
  }
  return { dinosaur };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DtcWQpPu.js')).default;
const universal_id = "src/routes/[dinosaur]/+page.ts";
const imports = ["_app/immutable/nodes/3.CUSH87-i.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CfDx5djB.js","_app/immutable/chunks/CKkVq65d.js"];
const stylesheets = ["_app/immutable/assets/3.X-Zu4UpZ.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-VhYOWKW5.js.map
