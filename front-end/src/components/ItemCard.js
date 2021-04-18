import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function ItemCard({item, meaning, category}) {
  return (
    <Card variant="outlined">
      <Grid container>
        <Grid item xs={4}>
          <CardContent>
            <Typography>{item}</Typography>
            <Typography color="textSecondary">{category}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography>{meaning}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
