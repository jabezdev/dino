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
		client: {start:"_app/immutable/entry/start.Cx6yqQPs.js",app:"_app/immutable/entry/app.CJzh8j52.js",imports:["_app/immutable/entry/start.Cx6yqQPs.js","_app/immutable/chunks/6aqilxNk.js","_app/immutable/chunks/BoI5ygxQ.js","_app/immutable/chunks/CfDx5djB.js","_app/immutable/chunks/CKkVq65d.js","_app/immutable/chunks/D5vWVzUQ.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/entry/app.CJzh8j52.js","_app/immutable/chunks/CfDx5djB.js","_app/immutable/chunks/CKkVq65d.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BoI5ygxQ.js","_app/immutable/chunks/D5vWVzUQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BDaEIzAU.js')),
			__memo(() => import('./chunks/1-DYW1UR7q.js')),
			__memo(() => import('./chunks/2-Ch8sTLYZ.js')),
			__memo(() => import('./chunks/3-BOmWMQaa.js'))
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
