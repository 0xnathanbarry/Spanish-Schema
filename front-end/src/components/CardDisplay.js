import React, { useState, useEffect } from "react";
import { Button, Grow, Grid } from "@material-ui/core";

import ItemCard from "./ItemCard";
import NewModal from "./NewModal";
import axios from "axios";

const CardDisplay = () => {
  const [data, setData] = useState(null);
  const [openNew, setOpenNew] = useState(false);
  const url = "http://localhost:5000/posts";

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);

  return (
    <Grow in>
      <Grid container justify="space-between" alignItems="stretch" spacing={1}>
        <Grid item>
          <Button variant="outlined" onClick={() => setOpenNew(true)}>
            Add New
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <NewModal openNew={openNew} setOpenNew={setOpenNew} />
          {data
            ? data.map((data) => (
                <ItemCard
                  item={data.item}
                  meaning={data.meaning}
                  category={data.category}
                />
              ))
            : null}
        </Grid>
      </Grid>
    </Grow>
  );
};

export default CardDisplay;
