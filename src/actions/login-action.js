import axios from "axios";

export function LogInAction(email, password) {
  const userData = {
    email: email,
    password: password
  };

  if (10 == 10) {
    return {
      type: "CAN_LOG_IN",
      token: 123
    };
  } else {
    return {
      type: "CANNOT_LOG_IN",
      token: ""
    };
  }
}
