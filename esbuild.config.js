import * as esbuild from "esbuild";

/* - Setup */
const env = process.env.NODE_ENV;
const production = env === "production";

const CONFIG = {
  PORT: 8000,
  ENTRY: ["index.js"],
  SERVE_DIR: "dist",
  OUT_DIR: "dist",
  BUILD_DIR: "build",
};

// const loader = {
//   ".png": "dataurl",
//   ".webp": "dataurl",
//   ".glb": "dataurl",
// };

const ctx = await esbuild.context({
  bundle: true,
  entryPoints: CONFIG.ENTRY,
  outdir: production ? CONFIG.BUILD_DIR : CONFIG.OUT_DIR,
  minify: production,
  sourcemap: !production,
  target: production ? "es2019" : "esnext",
  // loader,
});

if (production) {
  await ctx.rebuild();
  ctx.dispose();
} else {
  await ctx.watch();
  await ctx
    .serve({
      servedir: CONFIG.SERVE_DIR,
      port: CONFIG.PORT,
    })
    .then(() => console.log("http://localhost:8000/app.jss"));
}