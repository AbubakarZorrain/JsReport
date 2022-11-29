import { Controller, Get } from '@nestjs/common';
import { writeFile } from 'fs/promises';
@Controller('jsreporting')
export class JsreportingController {
    @Get()
    findAll(): any {
        var axios = require('axios');
var data = JSON.stringify({
  "template": {
    "name": "invoice-main"
  },
  "data": {
    "number": "123",
    "seller": {
      "name": "Next Step Webs, Inc.",
      "road": "12345 Sunny Road",
      "country": "Sunnyville, TX 12345"
    },
    "buyer": {
      "name": "Acme Corp.",
      "road": "16 Johnson Road",
      "country": "Paris, France 8060"
    },
    "items": [
      {
        "name": "Website design",
        "price": 300
      }
    ]
  }
});

var config = {
  method: 'post',
  url: 'http://localhost:5488/api/report',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'render-complete=true'
  },
  data : data,
  responseType: 'stream',
};

axios(config)
.then(async function (response:any) {
    const pdfContents = response.data;
    await writeFile('file.pdf', pdfContents);
//   console.log(JSON.stringify(response.data));
})
.catch(function (error:any) {
  console.log(error);
});


      return 'This action returns all cats';
    }
}
