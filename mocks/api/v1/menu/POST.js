module.exports = function(request, response) {
  const { token } = request.body;

  let targetFileName = '';

  const validEntries = {
    'eyJhbGciOiJIUzI1NiIsImlhdCI6MTUzNzI2NDI0MywiZXhwIjoxNTM3MzUwNjQzfQ.eyJ1c2VyX2lkIjoiNDMiLCJsb2dpbiI6IkFBQSJ9.Pqo5E5c5iOwnX0oUqnOWkhKiNJgBUvdYbTHLp4v698M': {
      group: 'admins',
    },
    'eyJhbGciOiJIUzI1NiIsImlhdCI6MTUzNzI2NDI0MywiZXhwIjoxNTM3MzUwNjQzfQ.eyJ1c2VyX2lkIjoiNDMiLCJsb2dpbiI6IkFBQSJ9.Pqo5E5c5iOwnX0oUqnOWkhKiNJgBUvdYbTHLp4v698M55': {
      group: 'users',
    },
  };

  if (token in validEntries) {
    targetFileName = `GET_${validEntries[token].group}.json`;
  } else {
    targetFileName = `GET_unauth.json`;
  }

  // If file does not exist then respond with 404 header
  // if (!fs.accessSync(targetFileName))
  //   return response.status(404);

  response.sendFile(targetFileName, { root: __dirname });
};
