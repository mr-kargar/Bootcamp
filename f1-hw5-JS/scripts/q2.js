const sayBye = () => {
  let idTimeout = setTimeout(() => {
    console.log("Bye bye World");
    clearTimeout(idTimeout);
  }, 3000);
};

sayBye();
