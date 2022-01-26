module.exports = {
  collectCoverageFrom(memo) {
    return memo.concat(['/src/**/*.{js,jsx,ts,tsx}']);
  },
};
