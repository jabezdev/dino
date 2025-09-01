const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.C_G8KRXQ.js",app:"_app/immutable/entry/app.DmgY7T-x.js",imports:["_app/immutable/entry/start.C_G8KRXQ.js","_app/immutable/chunks/BIApDZU7.js","_app/immutable/chunks/BoI5ygxQ.js","_app/immutable/chunks/CfDx5djB.js","_app/immutable/chunks/CKkVq65d.js","_app/immutable/chunks/D5vWVzUQ.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/entry/app.DmgY7T-x.js","_app/immutable/chunks/CfDx5djB.js","_app/immutable/chunks/CKkVq65d.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BoI5ygxQ.js","_app/immutable/chunks/D5vWVzUQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-9n6TD1V0.js')),
			__memo(() => import('./chunks/1-CSp7Nf18.js')),
			__memo(() => import('./chunks/2-Ch8sTLYZ.js')),
			__memo(() => import('./chunks/3-VhYOWKW5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/dinosaurs",
				pattern: /^\/api\/dinosaurs\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DyFnmPG4.js'))
			},
			{
				id: "/api/dinosaurs/[id]",
				pattern: /^\/api\/dinosaurs\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-im-C-Wn6.js'))
			},
			{
				id: "/[dinosaur]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"dinosaur","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
