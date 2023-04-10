import React from "react";
import { Grid } from "@mui/material";
import Image from 'next/image'
import styles from 'api/styles/Home.module.css'
import Link from "next/link";

export const HostGrid = (data: any) => {  

  return (
    <div>
      {data.data.map((e) => {
        return (
          <>
            <Grid className={styles.hostgrid} key={e.Slug}>
              <Link legacyBehavior={true} href={`/profile/${e.Slug}`}>
                <a>
                  <Grid xs={4}>
                    <Image
                      className={styles.hostimage}
                      src="/airbnb1.png"
                      alt="Host Image"
                      width={300}
                      height={300}
                      priority
                    />
                  </Grid>
                </a>
              </Link>
              <Grid xs={4}>
                {e.location}
                <Grid className={styles.ratingspan}>
                  {e.rating} Stars
                </Grid>
              </Grid>
              <Grid xs={4}>
                {e.host}
              </Grid>
              <Grid xs={4}>
                ${e.price}
              </Grid>
            </Grid>
          </>
        )
      })}
    </div>
  );
}

