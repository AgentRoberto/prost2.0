import React from "react";
import { Grid } from "@mui/material";
import Image from 'next/image'
import styles from 'api/styles/Home.module.css'
import Link from "next/link";
import { useRouter } from "next/router";
/*import slug from "slug";*/

export const HostGrid = (data: any) => {
  console.log('data ', data)
  const router = useRouter()

  return (
    <div>
      {data.data.map((e, i) => {
        return (
          <>
          {console.log('e.slug ', e.slug)}
            <Grid className={styles.hostgrid} key={i}>
            <Link
              href="/pages/profile/[organization]/Profile"
              as={`/pages/profile/${router.query.organization}/Profile`}
            >
      
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
              </Link>
          </Grid>
        </>
        )
      })}
    </div>
  )
}

