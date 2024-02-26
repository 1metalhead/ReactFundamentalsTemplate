export const getCourseDuration = (duration) => {
  // write your solution here
  return (
    new Date(duration * 60 * 1000).toISOString().substr(11, 5) +
    (Math.floor(duration / 60) !== 1 ? " hours" : " hour")
  );
  // return Math.floor(duration / 60) + ":" + (duration % 60) + " hours";
};
