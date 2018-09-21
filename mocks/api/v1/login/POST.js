module.exports = function(request, response) {
  const { password, username } = request.body;

  let targetFileName = `POST_admins.json`;

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
    targetFileName = `POST_${validUsers[username].group}.json`;
  } else {
    targetFileName = `POST_invalid_credentials.json`;
  }

  // If file does not exist then respond with 404 header
  // if (!fs.accessSync(targetFileName))
  //   return response.status(404);

  response.sendFile(targetFileName, { root: __dirname });
};
