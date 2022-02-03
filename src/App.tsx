import PlayerInfo from "./PlayerInfo";

const profiles = [
  {
    profileName: "PotatoCanon",
    level: 50,
    favoriteChampion: "Ashe",
    playerRank: "Silver III",
  },
  {
    profileName: "Ouji",
    level: 69,
    favoriteChampion: "Teemo",
    playerRank: "Challenger",
  },
  {
    profileName: "GameKornel",
    level: 10,
    favoriteChampion: "Master Yi",
    playerRank: "Wood 3",
  },
];

const App = () => {
  return (
    <>
      <div>Informacje o graczu:</div>
      <PlayerInfo
        playerName={"PotatoCanon"}
        level={50}
        favoriteChampion="Ashe"
        playerRank="Silver III"
      />
      <PlayerInfo
        playerName={"Ouji"}
        level={30}
        favoriteChampion="Teemo"
        playerRank="Gold IV"
      />
    </>
  );
};

export default App;
