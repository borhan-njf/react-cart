const shorten = (title) => {
  const splitedTitle = title.split(" ");
  const ShortTitle = `${splitedTitle[0]}${splitedTitle[1]}`;
  return ShortTitle;
};

export { shorten };
