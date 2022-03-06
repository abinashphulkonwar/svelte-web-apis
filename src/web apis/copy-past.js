export const copy = async () => {
  try {
    const type = "text/plain";
    const blob = new Blob(["hiiiiiiiiiiiiii"], { type });
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
  } catch (err) {
    console.error(err.name, err.message);
  }
};

export const paste = async () => {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      try {
        for (const type of clipboardItem.types) {
          const blob = await clipboardItem.getType(type);
          const text = await blob.text();
          console.log(text);
          return blob;
        }
      } catch (err) {
        console.error(err.name, err.message);
      }
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
};
