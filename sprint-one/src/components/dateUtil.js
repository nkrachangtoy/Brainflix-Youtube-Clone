// This function will format timestamp and covert into second, minute, hour, day, month, and year + "ago"
const dateUtil = {
  timeSince(time) {
    const d = new Date(time);
    // math.floor is used here to return largest integer
    let seconds = Math.floor((new Date() - time) / 1000);
    let interval = Math.floor(seconds / 31536000);
    // if statement to calculate the years, months, days, hours, minutes, and seconds.
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  },
};

const timeFomat = () => dateUtil.timeSince();

export { timeFomat };
export default dateUtil;
