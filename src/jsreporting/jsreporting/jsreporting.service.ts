import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class JsreportingService {
    private readonly cats: any = [];

  create(cat: any) {
    this.cats.push(cat);
  }
}
