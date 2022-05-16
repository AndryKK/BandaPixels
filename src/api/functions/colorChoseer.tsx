
export const colorChoseer = (id: number) => {
  const colors = ["#00D1FF", "#1400FF", "#FF00B8", "#FF0000"];

  const number = (id < colors.length) ? id : id % colors.length;

  return colors[number];
};
