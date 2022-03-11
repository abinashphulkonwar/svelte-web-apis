<script>
  import { Router, link, Route } from "svelte-navigator";
  // @ts-ignore
  import Home from "./routes/Home.svelte";
  // @ts-ignore
  import About from "./routes/About.svelte";
  // import Blog from "./routes/Blog.svelte";
  // import Search from "./routes/Search.svelte";
</script>

<Router>
  <nav>
    <!-- <Link class=".link" to="/">Home</Link> -->
    <a class="nav__link" href="/" use:link>Home</a>
    <a class="nav__link" href="/about" use:link>About</a>

    <!-- <Link class=".link" to="about">About</Link>
    <Link class=".link" to="blog">Blog</Link> -->
  </nav>

  <Route path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
</Router>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  nav {
    margin-bottom: 20px;
  }
  .nav__link {
    text-decoration: none;
    font-size: 1.2rem;
    margin: 0px 10px;
    color: blue;
    font-weight: 500;
    &:hover {
      color: red;
    }
  }
</style>
