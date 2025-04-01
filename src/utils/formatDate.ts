/**
 * Formats a date string into a more readable format
 * @param dateString - Date string in ISO format (YYYY-MM-DD)
 * @returns Formatted date string (e.g., "January 1, 2023")
 */
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return new Date(dateString).toLocaleDateString('en-US', options);
}

/**
 * Calculates the time difference between a past date and today
 * @param dateString - Date string in ISO format (YYYY-MM-DD)
 * @returns A string representing the elapsed time (e.g., "2 years ago")
 */
export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Less than a minute
  if (secondsAgo < 60) {
    return 'just now';
  }

  // Less than an hour
  if (secondsAgo < 3600) {
    const minutes = Math.floor(secondsAgo / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }

  // Less than a day
  if (secondsAgo < 86400) {
    const hours = Math.floor(secondsAgo / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  // Less than a month
  if (secondsAgo < 2592000) {
    const days = Math.floor(secondsAgo / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  // Less than a year
  if (secondsAgo < 31536000) {
    const months = Math.floor(secondsAgo / 2592000);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }

  // More than a year
  const years = Math.floor(secondsAgo / 31536000);
  return `${years} year${years > 1 ? 's' : ''} ago`;
}