// https://stackoverflow.com/a/5915122
/**
 * Grab a random element from a list
 * @param items Any kind of list
 * @returns One randomly chosen element
 */

export function getRandomElement<T>(items:T[]): T {
    return items[Math.floor(Math.random()*items.length)];
}