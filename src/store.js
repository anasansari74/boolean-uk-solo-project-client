import create from "zustand";

import env from "react-dotenv";

const API_URL = env.API_URL;

const useStore = create((set, get) => ({
  loggedInUserId: null,
  logOutUser: () => {
    fetch(`${API_URL}/logout`, {
      credentials: "include",
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Failed to Logout");
        }
      })
      .then(() => {
        set({ loggedInUserId: null });
      });
  },
  setLoggedInUser: userCreds => {
    fetch(`${API_URL}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Failed to login");
        }
      })
      .then(user => {
        set({ loggedInUserId: user.data.id });
      })
      .catch(error => console.error(error));
  },

  signUpUser: userCreds => {
    fetch(`${API_URL}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Failed to login");
        }
      })
      .then(data => {
        set({ loggedInUserId: data.user.id });
      })
      .catch(error => console.error(error));
  },

  loggedUserRole: "",
  getUserRole: async userId => {
    await fetch(`${API_URL}/user/${userId}`, {
      credentials: "include",
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Failed to Logout");
        }
      })
      .then(data => {
        set({ loggedUserRole: data.role });
      });
  },

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

  allRides: [],
  getAllRides: () => {
    fetch(`${API_URL}/trainRides`, {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => set({ allRides: data }));
  },

  searchDptLct: "",
  setSearchDptLct: lct => {
    set({ searchDptLct: lct });
  },
  searchArvLct: "",
  setSearchArvLct: lct => {
    set({ searchArvLct: lct });
  },
  searchDate: "",
  setSearchDate: date => {
    set({ searchDate: date });
  },

  ridesByToAndFromLct: [],
  getRidesByToAndFromLct: (dptLct, arvLct) => {
    fetch(`${API_URL}/trainRides/${dptLct}/${arvLct}`, {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => set({ ridesByToAndFromLct: data }));
  },

  bookTicket: bookTicket => {
    fetch(`${API_URL}/tickets/bookTicket`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookTicket),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Failed to login");
        }
      })
      .then(data => {
        set({ loggedInUserId: data.user.id });
      })
      .catch(error => console.error(error));
  },
}));

export default useStore;
