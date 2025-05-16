/**
 * Utility functions for safely handling DOM elements
 */

/**
 * Safely get an element by ID with null check
 * @param {string} id - The element ID
 * @returns {HTMLElement|null} - The element or null
 */
export function safeGetElementById(id) {
  if (!id) return null;
  return document.getElementById(id);
}

/**
 * Safely get elements by selector with null check
 * @param {string} selector - The CSS selector
 * @returns {NodeList|[]} - The elements or empty array
 */
export function safeQuerySelectorAll(selector) {
  if (!selector) return [];
  const elements = document.querySelectorAll(selector);
  return elements || [];
}

/**
 * Safely add event listener with null check
 * @param {HTMLElement} element - The event name
 * @param {string} event - The event name
 * @param {Function} callback - The callback function
 */
export function safeAddEventListener(element, event, callback) {
  if (!element || !event || !callback) return;
  element.addEventListener(event, callback);
}

/**
 * Safely toggle class on element with null check
 * @param {HTMLElement} element - The element to toggle class on
 * @param {string} className - The class name to toggle
 * @param {boolean} force - Force add or remove
 */
export function safeToggleClass(element, className, force) {
  if (!element || !className) return;
  if (force === undefined) {
    element.classList.toggle(className);
  } else {
    if (force) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }
}

/**
 * Safely execute a function when DOM is loaded
 * @param {Function} callback - The callback function
 */
export function onDOMReady(callback) {
  if (!callback) return;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}
