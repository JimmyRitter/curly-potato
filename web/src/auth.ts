export const fakeAuthProvider = {
    signin: (callback: VoidFunction) => {
      setTimeout(() => {
        callback();
      }, 1000);
    },
    signout: (callback: VoidFunction) => {
      setTimeout(() => {
        callback();
      }, 1000);
    }
  };
  