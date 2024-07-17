class HashMap {
   constructor() {
      this.map = {};
   }

   put(key, value) {
      this.map[key] = value;
   }

   get(key) {
      return this.map[key];
   }

   remove(key) {
      delete this.map[key];
   }
}

const map = new HashMap();
map.put("key1", "value1");
console.log(map.get("key1"));
map.remove("key1");
console.log(map.get("key1"));
