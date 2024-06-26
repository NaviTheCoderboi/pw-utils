import { build } from "esbuild";

await build({
    entryPoints: ["src/index.ts"],
    sourcemap: false,
    format: "esm",
    bundle: true,
    minify: true,
    platform: "browser",
    tsconfig: "./tsconfig.json",
    outdir: "dist",
});
