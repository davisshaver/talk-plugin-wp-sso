module.exports = {
  tokenUserNotFound: async ({ jwt, token }) => {
    console.log(jwt, token);
    console.log('NOT FOUND');
  },
};
