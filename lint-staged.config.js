module.exports = {
  '*.+(js|jsx|ts|tsx)': ['prettier --write', 'eslint --fix', 'git add'],
  '*.+(json|yml|yaml|css|less|scss|md|graphql|mdx)': ['prettier --write', 'git add'],
};
