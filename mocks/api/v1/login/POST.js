module.exports = function(request, response) {
  const { password, username } = request.body;

  let targetFileName = '';

  const validUsers = {
    admin: {
      password: 'admin',
      group: 'admins',
    },
    user: {
      password: 'user',
      group: 'users',
    },
  };

  if (username in validUsers && password === validUsers[username].password) {
    targetFileName = `results/${validUsers[username].group}.json`;
  } else {
    targetFileName = `results/invalid_credentials.json`;
  }

  // If file does not exist then respond with 404 header
  // if (!fs.accessSync(targetFileName))
  //   return response.status(404);

  response.sendFile(targetFileName, { root: __dirname });
};
