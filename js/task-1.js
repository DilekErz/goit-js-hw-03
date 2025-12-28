function slugify(title) {
  const lowertitle = title.toLowerCase();
  const url = lowertitle.split(" ");
  return url.join("-");
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
