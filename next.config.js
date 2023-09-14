/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
