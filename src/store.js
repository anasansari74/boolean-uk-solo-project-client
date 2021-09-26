import create from "zustand";
// import env from "react-dotenv";

// const API_URL = "http://localhost:4000";

const useStore = create((set, get) => ({
  loggedInUser: null,
  //   setLoggedInUser: async user => {
  //     const data = await fetch(`${API_URL}/login`, {
  //       method: "POST",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     })
  //       .then(res => res.json())
  //       .then(data => console.log(data));

  //     if (data.username) {
  //       if (data.password === user.password) set({ loggedInUser: data });
  //     }
  //   },

  homePage: "book",
  setHomePage: pageToDisplay => {
    set({ homePage: pageToDisplay });
  },

  bookHomePage: homePage => {
    if (homePage) {
      homePage = "book" ? get().setHomePage("book") : get().setHomePage("view");
    }
  },
  viewHomePage: homePage => {
    if (homePage) {
      homePage = "view" ? get().setHomePage("view") : get().setHomePage("book");
    }
  },

  radioValue: "1",
  setRadioValue: value => {
    set({ radioValue: value });
  },
}));

export default useStore;
