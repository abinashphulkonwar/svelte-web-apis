<script>
  const importImage = async () => {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/png, image/jpeg, image/*";
      input.addEventListener("click", () => {
        let file = input.files[0];

        if (file) {
          return resolve(file);
        } else {
          return reject("file not selected");
        }
      });
      input.click();
    });
  };
</script>

<div>
  <h1>import image</h1>
  <button on:click={importImage}>import</button>
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
