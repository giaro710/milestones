const initState = {
  paths: [
    {
      id: 1,
      title: "Therapy",
      stones: [
        {
          id: 1,
          pathId: 1,
          title: "Preamble",
          content:
            "The fourth year of university I was in pieces. The choices of the past tormented me. I had great expectations from the change of university: I always suffered from loneliness and that change had generated in me prospects for improvement. This was not the case. There were many reasons for this: in part the new university had quite closed circles of friends, made up of people who had known each other for years and with little interest in new entries. But the main cause was me. Changing your mind hurts like hell. It's hard to explain what it means to live for twenty years with ideas, beliefs and see them gradually crumble. They fall apart and have to be rebuilt. Now that several years have passed, I recognise the importance of having made those changes. The ideas I have are mine, they are the fruit of my work, of my commitment. But in that moment I saw only rubble around me. The thing that hurt me the most was loneliness. I was struggling to make new friends with ideas similar to my new discoveries. I was afraid of their judgment: who would ever understand me, who would accept me? The people who had until then formed my circle of friendships no longer understood me. Perhaps one could say that the basis of a common society is the obvious: unfortunately our obviousness no longer coincided. I was sick and didn't know how to get out of it. I met someone who gave me the cue to start psychotherapy. So I did.",
        },
        {
          id: 2,
          pathId: 1,
          title: "First sessions",
          content:
            "I go to Viale Po', in a beautiful district of the city. I enter. I am seated in a room that is not overly lit: a discreetly sized desk, in the background a bookcase with glass on the doors. The glass doors have always given me the idea that they were invented for medical tomes. I make the acquaintance of the psychotherapist. A woman in her fifties, with a noble bearing. Her every word had grace and depth, she seemed to carefully choose every phoneme. I don't know what she must have thought of me that time. I didn't know much about psychology: I thought of her as a kind of magician. When I say magician I don't mean a person who sells lies and lives on deceit, quite the opposite. I thought of her as a person endowed with the power to see forces that others could not access, an initiate in those empirical sciences shrouded in the mystery of the unconscious.  With a simple magic would have made my problems disappear. 'I will tell her how I feel - I was saying to myself - she will frame the case and in three appointments we will have solved it'. It took me a while to realise that it didn't work like that. Maybe even now I still have some doubts and I expect to hear the magic formula of happiness. In those days she tried to explain to me that no one has the answer ready because no one is the same as another. Everyone has his own story and to his story he has to relate it. She explained to me that if I wanted we would have started a journey together to look for me. We started from a problem, we discussed millions of them. I am grateful for that day. While I write some tears comes down. Thanks to her I said for the first time really, life can be beautiful.",
        },
        {
          id: 3,
          pathId: 1,
          title: "Mom and dad",
          content: "Not easy relashionship. Love is danger",
        },
      ],
    },
    {
      id: 2,
      title: "Dreams",
      stones: [
        {
          id: 1,
          pathId: 2,
          title: "Renewed regret",
          content:
            "I'm in Rome, in my old house. Incredible but true, I went back there, I made the same choice again. I sit and talk to someone there. They greet me and they are happy that I am there. I talk to them, I get up, I go out. I go to my room. I go out of the room and stop and talk to someone else. At a certain point I feel like i wanna go to eat a pizza: I ask permission and I am denied. I ask for explanations and I am told to obey. I go back to my room, I cannot believe it. I want to leave. How can I go away? What am I doing here again? And how can I tell everyone, one more time, that this is not the place for me? I wake up up and I realize I'm crying.",
        },
        {
          id: 2,
          pathId: 2,
          title: "Ruined house",
          content:
            "I am in a very strange house. It is made of grey bricks, the colour of castles. The floor is made of wood. Most of the floor is covered by a Persian carpet, burgundy coloured. The strange thing is that the house, or rather, the room I see is like a narrow corridor. What's more, the house is ruined: I feel that there is no roof. On the one hand, the wall has collapsed and I see what's outside: grey, sad little buildings. It's raining outside. I don't know how, but in my head the one outside is Berlin (I don't know why in reality I've never been there). The house belongs to my therapist and to the one I identify in the dream as his wife. They look at me and are embraced. My therapist has a light green winter jumper, like asparagus; the wife is purple (honestly I don't remember which one of them is wearing which colour, I only remember the colours). I leave the house and I find myself in front of me, at a distance of about fifty metres a big white building. Big in the sense of length, not so much in height. I see glass doors and, beyond them, illuminated shelves. It is a supermarket. It actually reminds me of a church with a rather modern style that I saw in Austria. I stand still. I see an old lady with full shopping bags. She raises her arms and shouts something in my direction. I look at her, I don't turn around, because I have the feeling that she is not talking to me, but to someone behind me. I wake up.",
        },
        {
          id: 3,
          pathId: 2,
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
      return {
        ...state,
        paths: [...state.paths, action.payload],
      };
    default:
      return state;
  }
};
