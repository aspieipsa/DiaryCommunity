module.exports = (server, passport) => {
  server.post(
    "/login",
    passport.authenticate("local"),
    (request, response) => {}
  );
};
