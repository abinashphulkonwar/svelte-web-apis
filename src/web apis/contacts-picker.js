const contactPicker = async () => {
  try {
    if ("contacts" in navigator) {
      const properties = ["name"];
      const options = { multiple: true };

      // @ts-ignore
      const contacts = await navigator.contacts.select(properties, options);

      console.log(contacts);
      return contacts;
    }
  } catch (err) {
    console.log(err);
  }
};

export default contactPicker;
