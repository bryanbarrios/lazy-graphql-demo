module.exports = {
  '*.+(js|jsx|ts|tsx)': ['prettier --write', 'eslint --fix'],
  '*.+(json|yml|yaml|css|less|scss|md|graphql|mdx)': ['prettier --write'],
};
