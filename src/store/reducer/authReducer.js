const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "이메일 또는 비밀번호가 올바르지 않습니다.",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("logout");
      return state;
    default:
      return state;
  }
};

export default authReducer;
