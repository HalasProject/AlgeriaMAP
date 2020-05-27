var Toast = Swal.mixin({
  background: "#0d1449",
  toast: true,
  position: "top-start",
  showConfirmButton: false,
});

document.querySelectorAll("area").forEach((wilaya) => {
    
  // Wilaya on mouse over
  wilaya.addEventListener("mouseover", function (event) {
    Toast.fire({
      title: `<p style='color:white'> ${event.toElement.title} </p>`,
      target: "body",
      footer: `<b style='color:white'> ${parseInt(
        Math.random() * 10000
      )} Products</b>`,
    });
  });

  // Wilaya on mouse out
  wilaya.addEventListener("mouseout", function (e) {
    Toast.close();
  });
});
