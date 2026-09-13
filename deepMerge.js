/**
 * Recursively merges properties from a source object into a target object.
 * 
 * Performs a deep merge on nested plain objects. Arrays are not recursively
 * merged and will be completely overwritten by the source array value.
 * All other non-object values are assigned directly from the source to the target.
 *
 * @param {Object} target - The destination object to receive merged properties.
 * @param {Object} source - The source object containing properties to merge into target.
 * @returns {Object} The modified target object containing the merged properties.
 */
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

module.exports = deepMerge;
