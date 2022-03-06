// const importImage = async () => {
//   return new Promise((resolve, reject) => {
//     const input = document.createElement("input");
//     input.type = "file";
//     input.accept = "image/png, image/jpeg, image/*";
//     input.addEventListener("click", () => {
//       let file = input.files[0];

//       if (file) {
//         return resolve(file);
//       } else {
//         return reject("file not selected");
//       }
//     });
//     input.click();
//   });
// };

const pickerOpts = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: false,
  multiple: false,
};

const importImage = async () => {
  try {
    if ("showOpenFilePicker" in window) {
      // @ts-ignore
      const [FileSystemFileHandle] = await window.showOpenFilePicker(
        pickerOpts
      );
      return await FileSystemFileHandle.getFile();
    }
  } catch (err) {
    console.log(err);
  }
};

export default importImage;
