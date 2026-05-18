import Navbar from "./navbar";
export default function AboutPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>About Us</h1>
        <h2>Welcome to Cocktails & Code</h2>
        <p>
          We believe that making a great cocktail should be as enjoyable as
          drinking one. Whether you are a seasoned bartender or trying your very
          first recipe at home, our platform is designed to take the guesswork
          out of mixology.
        </p>
        <h2>Our Story</h2>
        <p>
          We started this website with a simple goal: to build a clean, fast,
          and intuitive space for discovering drink recipes. No endless blog
          stories, no cluttered pages—just beautiful visuals, clear ingredients,
          and straightforward instructions. From timeless classics like the
          perfect Margarita to creative modern twists, we source high-quality
          recipes to help you shake, stir, and pour with confidence.
        </p>
        <h2>What we offer:</h2>
        <ul>
          <li>
            Curated Recipe Library: Fast, searchable access to dozens of
            cocktail recipes and variations.
          </li>
          <li>
            Step-by-Step Clarity: Easy-to-follow instructions with precise
            measurements for flawless results.
          </li>
          <li>
            Designed for Everyone: A streamlined, responsive interface that
            looks great on your phone right at your kitchen counter.
          </li>
        </ul>
        <h2>Cheers to making better drinks!</h2>
        <p>
          We are constantly expanding our collection and adding new features to
          enhance your home bartending experience. Grab a shaker, explore our
          recipes, and let’s mix something incredible together.
        </p>
      </main>
    </>
  );
}
