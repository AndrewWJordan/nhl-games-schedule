import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export default function GameCard({ game }) {
  return (
    <Card variant="outlined" sx={{ boxShadow: 1 }}>
      <Typography variant="h2">{game.teams.away.team.name}</Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >{`${game.teams.away.leagueRecord.wins}-${game.teams.away.leagueRecord.losses}-${game.teams.away.leagueRecord.ot}`}</Typography>
      <Typography>at</Typography>
      <Typography variant="h2">{game.teams.home.team.name}</Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >{`${game.teams.home.leagueRecord.wins}-${game.teams.home.leagueRecord.losses}-${game.teams.home.leagueRecord.ot}`}</Typography>
    </Card>
  );
}
