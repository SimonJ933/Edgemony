export const getGamesList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          image: "https://r.mprd.se/fup/up/52709-Resident_Evil_2_(G)_(Disc_1)_(Leon_Disc)-1.jpg",
          title: "Resident Evil 2",
          genre: "Survival/Horror",
          platform: "PC, PS1, GAMECUBE",
          price: "50.99€",
          description:
            "Resident Evil 2 is a 1998 survival horror video game developed and published by Capcom for the PlayStation. The player controls rookie cop Leon S. Kennedy and college student Claire Redfield, who must escape Raccoon City after its citizens are transformed into zombies by a biological weapon two months after the events of the original Resident Evil. The gameplay focuses on exploration, puzzles, and combat; the main difference from its predecessor are the branching paths, with each player character having unique storylines, partners and obstacles.",
        },
        {
          id: "2",
          image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg",
          title: "Final Fantasy VII",
          genre: "RPG",
          platform: "PC, PS1",
          price: "59.99€",
          description:
            "The game's story follows Cloud Strife, a mercenary who joins an eco-terrorist organization to stop a world-controlling megacorporation from using the planet's life essence as an energy source.",
        },
        {
          id: "3",
          image:
            "https://1.bp.blogspot.com/-u-qKW8qBEns/XvPbnCOmYgI/AAAAAAAAHpY/EnPptSzcFy8YV4EXNDiqeRsAH7P05KT4ACLcBGAsYHQ/s1600/261840-crash-bandicoot-warped-playstation-front-cover.jpg",
          title: "Crash Bandicoot 3 : Warped",
          genre: "Adventure, Platform",
          platform: "PS1",
          price: "59,99€",
          description:
            "After thwarting Dr. Neo Cortex's plans for a second time, Crash Bandicoot and his sister Coco returned home for one last mission: to relax. As they were fulfilling their much-needed mission, their friend Aku Aku had a feeling something was wrong in paradise. Unfortunately, he was right...",
        },
      ]);
    }, 2000);
  });
};
