<script>
  import ImportImage from "../components/home/import-image.svelte";

  const share = async () => {
    try {
      const data = {
        title: "hiiii",
        text: "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        url: "http://localhost:3000/share-target/",
      };

      if (!navigator.canShare(data)) {
        throw new Error("Can't share data.");
      }
      await navigator.share(data);
    } catch (err) {
      console.log(err);
    }
  };
</script>

<div>
  <button on:click={share}>share</button>
  <ImportImage />
</div>

<style>
  button {
    padding: 5px 10px;
    border-radius: 5px;
    border-width: 1px;
    border-color: blue;
    background-color: blue;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 200ms linear;
    transition: border-color 200ms linear;
    transition: color 100ms linear 100ms;
  }
  button:hover {
    background-color: white;
    border-color: white;
    color: black;
    box-shadow: 0px 0px 1px black;
  }
</style>
