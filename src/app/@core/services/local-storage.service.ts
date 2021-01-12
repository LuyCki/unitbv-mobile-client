import { Injectable } from '@angular/core';
import {
  getString,
  setString,
  remove,
  clear
} from "@nativescript/core/application-settings";

interface StorageItem {
  key: string;
  value: any;
}

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  public addString(item: StorageItem): void {
    setString(item.key, item.value);
  }

  public getString(key: string): string {
    return getString(key);
  }

  public remove(key: string): void {
    remove(key);
  }

  public removeAll(): void {
    clear();
  }
}
