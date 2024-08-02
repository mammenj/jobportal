import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import {getUser} from "@workos-inc/authkit-nextjs";

export default async function Home() {
  const {user} = await getUser();
  return (
    <>
    <Hero />
    <Jobs header={'Recent Jobs'} />
  </>
  )
}
