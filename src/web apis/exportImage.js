import toBlob from "./toBlob";

// const exportImage = (/** @type {Blob | MediaSource} */ blob, filename = "") => {
//   const a = document.createElement("a");
//   a.download = filename;
//   a.href = URL.createObjectURL(blob);
//   a.addEventListener("click", () => {
//     a.remove();
//     setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
//   });
//   setTimeout(() => a.click(), 0);
// };

const exportImage = async (data = { des: "", suggestedName: "" }) => {
  const { des, suggestedName } = data;

  const opts = {
    types: [
      {
        description: des,
        accept: { "text/plain": [".txt"] },
      },
    ],
    suggestedName: suggestedName,
  };
  // @ts-ignore
  const handle = window.showSaveFilePicker(opts);

  const blob = await toBlob();
  const writable = await handle.createWritable();
  await writable.write(blob);
  await writable.close();
};

export default exportImage;
