import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

interface DataStore {
  users: User[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dataStore: DataStore = {
    users: [],
  };
  constructor(private httpClient: HttpClient) {}
}
