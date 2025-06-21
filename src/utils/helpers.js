export function splitCommonPrefix(images) {
  if (!images || images.length === 0) {
    return { prefix: "", variables: [] };
  }

  // Escape special regex characters in the first image
  const escapedFirst = images[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Replace variable numeric parts (e.g., 1, 2) with a capturing group
  const dynamicPattern = escapedFirst.replace(/\d+/g, "(\\d+)");

  // Extract static prefix before variable part
  const staticPrefix = dynamicPattern.split("(\\d+)")[0];

  // Build a regex pattern dynamically using that static prefix
  const regex = new RegExp(`^(${staticPrefix})(.+)$`);

  // Match the prefix from the first image
  const prefixMatch = images[0].match(regex);
  const prefix = prefixMatch ? prefixMatch[1] : "";

  // Extract the variable part by removing the prefix
  const variables = images.map((path) => path.replace(prefix, ""));

  return { prefix, variables };
}

export function formatDate(isoDateStr) {
  const date = new Date(isoDateStr);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
