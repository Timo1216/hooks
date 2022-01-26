module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 'scope-enum': [2, 'always', ['hooks', 'request']],
    "type-enum": [
      2,
      "always",
      [
        "release",
        "build",
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "dep",
        "wip",
        "types",
        "workflow",
      ],
    ],
  },
};
