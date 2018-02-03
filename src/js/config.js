/**
 * Base config
 */
export const config = {
  name: 'Agenda'
}

/**
 * Storage
 */
import { LocalStorage as StorageDriver } from './storage/index';
export const Storage = StorageDriver;