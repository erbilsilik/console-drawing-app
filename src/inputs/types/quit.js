module.exports = class QuitInput {
  handle() {
    return { terminate: true };
  }
};
