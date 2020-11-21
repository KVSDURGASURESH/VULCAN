import update from 'immutability-helper';
let PORT = 5000
let BASE_URL = "http://localhost:" + PORT 
let headers = {
    "content-type": "application/json",
    "accept":"*/*"
}


const service = {
    get: (url, options = {}) => {
      options.method = "GET";
      return fetch(url, options);
    },
  
    post: (url, options = {}) => {
      options.method = options.method || "POST";
      options.headers = headers;
      options.mode = "cors"
      return fetch(url, options);
    },
  
    put: function(url, options = {}) {
      options.method = "PUT";
      options.headers = headers;
      options.mode = "cors"
      return fetch(url, options);
    },
  
    delete: (url, options = {}) => {
      options.method = "DELETE";
      options.headers = headers;
      options.mode = "cors"
      return fetch(url, options);
    }
  };

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    let data = []
    return service.get(BASE_URL + `/whatnxt`, { data: {} })
}

export function getItemById(itemId) {
    service.get(BASE_URL + `/whatnxt/` + itemId, { data: {} }).then(results => {
        return results.json();
    })
}

export function updateStatus(itemId, completed) {
    return service.put(BASE_URL + `/whatnxt/` + itemId, { body: JSON.stringify({"_is_done":completed})})
}

export function deleteItemService(itemId) {
    return service.delete(BASE_URL + `/whatnxt/` + itemId, {})
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    return service.post(BASE_URL + `/whatnxt`, { body: JSON.stringify(data)})
    
}


