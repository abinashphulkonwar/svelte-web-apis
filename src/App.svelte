<script>
  import { Router, Link, Route } from "svelte-navigator";
  // @ts-ignore
  import Home from "./routes/Home.svelte";
  // @ts-ignore
  import About from "./routes/About.svelte";
  // import Blog from "./routes/Blog.svelte";
  // import Search from "./routes/Search.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blog</Link>
  </nav>

  <Route path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
</Router>

<style>
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
</style>
