interface Props {
  playerName: string;
  level: number;
  favoriteChampion: string;
  playerRank: string;
}

const PlayerInfo = ({
  playerName,
  level,
  favoriteChampion,
  playerRank,
}: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        border: "10px dotted red",
        fontSize: 100,
        padding: "201px",
      }}
    >
      <div>/////////////////////////////////////////////////</div>
      <div>................................................</div>
      <div>Nazwa gracza: {playerName}</div>
      <div>Poziom: {level}</div>
      <div>Ulubiona postać: {favoriteChampion}</div>
      <div>Ranga gracza: {playerRank}</div>
      <div>................................................</div>
      <div>//////////////</div>
    </div>
  );
};

export default PlayerInfo;
