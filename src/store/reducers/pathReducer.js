const initState = {
  paths: [
    {
      id: 1,
      title: "Adolescence",
      stones: [
        {
          id: 1,
          title: "Birthday party",
          content: "I was not so happy to hear about you",
        },
        { id: 2, title: "School graduation", content: "Great day" },
        {
          id: 3,
          title: "Mom and dad",
          content: "Not easy relashionship. Love is danger",
        },
      ],
    },
    {
      id: 2,
      title: "Infance",
      stones: [
        {
          id: 1,
          title: "cat walking",
          content: "Learn to walk was a success",
        },
        { id: 2, title: "Dream of gun", content: "Sexual contents" },
        {
          id: 3,
          title: "Poo",
          content: "how i hide myself doing shit",
        },
      ],
    },
  ],
};

export const pathReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PATH":
      console.log("good");
      return state;
    default:
      return state;
  }
};
