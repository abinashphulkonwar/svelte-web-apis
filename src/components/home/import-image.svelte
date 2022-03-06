<script>
  import importImage from "../../web apis/importImage";
  import exportImage from "../../web apis/exportImage";
  import contactPicker from "../../web apis/contacts-picker";
  import { copy, paste } from "../../web apis/copy-past";
  import { pointerdown, clearBtn } from "../../web apis/set-app-badge";
</script>

<div>
  <h1>import image</h1>
  <button on:click={importImage}>import</button>
  <h1>save image</h1>
  <button
    on:click={() => {
      exportImage({ des: "hiiiiiiiii", suggestedName: "hiiiiiiiii" });
    }}>save</button
  >
  <h1>contact picker</h1>
  <button on:click={contactPicker}>contact picker</button>
  <h1>copy</h1>
  <button on:click={copy}>save</button>
  <h1>past</h1>
  <button on:click={paste}>save</button>
  <h1>pointerdown</h1>
  <button on:click={pointerdown}>pointerdown</button>
  <h1>clearBtn</h1>
  <button on:click={clearBtn}>clearBtn</button>
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
