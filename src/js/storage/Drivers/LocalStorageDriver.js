import StorageDriver from './StorageDriverInterface';

class LocalStorageDriver extends StorageDriver {

  static storage() {
    return localStorage;
  }

  static get(name) {
    return JSON.parse(
      this.storage().getItem(name)
    );
  }

  static save(name, data) {
    this.storage().setItem(
      name,
      JSON.stringify(data)
    );
  }

  static remove(name) {
    this.storage().removeItem(name);
  }

  static clear() {
    this.storage().clear();
  }
  
}

export default LocalStorageDriver;
