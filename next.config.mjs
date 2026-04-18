const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production";
const repoName = "codex-playbook-zh";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined
};

export default nextConfig;
