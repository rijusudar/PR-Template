const PRE_PUSH_COMMANDS = [
  'npm run lint',
  'npm run test',
  // 'lerna run build --stream', // temporarily disabling to avoid bypassing husky
  // 'lerna run export:local --stream', // Need to revert once pipeline is completed
].join(' && ');

const POST_CHECKOUT_COMMANDS = ['npx ds-merge-driver-setup'].join(' && ');

module.exports = {
  hooks: {
    'pre-push': PRE_PUSH_COMMANDS,
    'post-checkout': POST_CHECKOUT_COMMANDS,
    'post-rewrite': POST_CHECKOUT_COMMANDS,
  },
};
