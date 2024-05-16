window.fetch = new Proxy(window.fetch, {
  apply: function (target, that, args) {
    // args holds argument of fetch function
    // Do whatever you want with fetch request
    let temp = target.apply(that, args);
    temp.then((res) => {
      // After completion of request
      if (res.status === 401) {
        alert("Session expired, please reload the page!");
      }
    });
    return temp;
  },
});
