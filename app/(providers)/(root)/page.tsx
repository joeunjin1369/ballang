import Page from "./_components/Page/Page";
import ProductAllList from "./_components/ProductAllList/ProductAllList";

function HomePage() {
  return (
    <Page>
      <h2 className="py-10 text-center font-bold text-3xl">Trending</h2>
      <ProductAllList />
    </Page>
  );
}
export default HomePage;
