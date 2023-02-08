export const fakeAuthProvider = {
    signIn: (callback: VoidFunction) => {
        callback();
    },
    signOut: (callback: VoidFunction) => {
        callback();
    }
  };
  