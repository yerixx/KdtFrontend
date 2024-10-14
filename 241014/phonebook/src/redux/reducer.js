// 함수로도 사용가능
// 초기값 필수!!!!
let initialState = { contactList: [], keyword: "" };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    // return {
    //   ...state,
    //   contactList: [
    //     ...state.contactList,
    //     {
    //       name: payload.name,
    //       phoneNumber: payload.phoneNumber,
    //     },
    //   ],
    // };
    case "SEARCH":
      state.keyword = payload.keyword;
      break;
    // return {
    //   ...state,
    //   keyword: payload.keyword,
    // };

    // default:
    //   return { ...state };
  }
  // console.log(type, payload);
  // console.log(action.payload);
  return { ...state };
};

export default reducer;

// const userList = [
//   {
//     name: "David",
//     number: "01012345678",
//   },
//   {
//     name: "Micheal",
//     number: "01012345678",
//   },
//   {
//     name: "John",
//     number: "01012345678",
//   },
// ];
