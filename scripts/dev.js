import { context } from "esbuild";

const ctx = await context({
    entryPoints: ["src/index.ts"],
    sourcemap: true,
    format: "esm",
    bundle: true,
    minify: false,
    platform: "browser",
    tsconfig: "./tsconfig.json",
    outdir: "dist",
});

await ctx.watch();
