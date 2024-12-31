import { CSVService } from "./services/CSVService";



const filePath: string = 'data/data.csv';
const csvService = new CSVService(filePath);

const data = csvService.readData();
const dataCleaned = csvService.cleanData(data);
console.log(dataCleaned);





// meter ia

// enviar por whatsapp