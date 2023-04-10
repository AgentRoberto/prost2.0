import Link from "next/link";
import {data} from '../data'

// Profile Page, can access profile info and display it on the page
// ex: {profile.host} => displays the host of this profile/listing
export default function Post({ profile }) {
  return (
    <>
      <header>
        <Link legacyBehavior href="/">
          <a>Profile: {profile.Slug}</a>
        </Link>
      </header>
      <main>
        <article>
          <h1>{profile.host}</h1>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const posts = data;
  const paths = posts.map((profile) => ({
    params: { slug: profile.Slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const profile = data.find((p) => p.Slug === slug);

  return {
    props: { profile }
  };
}
