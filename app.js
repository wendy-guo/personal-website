var elem3 = $(".greeting-3");
var characters3 = elem3.text().split("");
elem3.empty();

$.each(characters3, function (i, el) {
  elem3.append(
    `<span style=\"animation-delay:${(i * 0.1).toString() + "s"};\">` +
      el +
      "</span"
  );
});
