import HomeContainer from './_container/home';

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <HomeContainer />;
}
