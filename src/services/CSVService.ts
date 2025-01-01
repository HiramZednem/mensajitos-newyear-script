import fs from "fs";
import csv from "csv-parser";
import { Data } from "../interfaces/data";

export class CSVService {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  // Método para leer los datos del archivo CSV
  public async readData(): Promise<Data[]> {
    const dataArray: Data[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(this.filePath)
        .pipe(csv())
        .on("data", (row) => {
          // Asegúrate de que las propiedades del objeto `row` coincidan con las columnas del CSV
          const { nombre, correo, telefono, mensaje } = row;
          dataArray.push({ nombre, correo, telefono, mensaje });
        })
        .on("end", () => {
          resolve(this.cleanData(dataArray));
        })
        .on("error", (error) => {
          console.error("Error leyendo el archivo CSV:", error);
          reject(error);
        });
    });
  }

  private cleanData(data: Data[]): Data[] {
    return data.map((item) => {
      const { nombre, correo, telefono, mensaje } = item;
      return {
        nombre: nombre?.trim() || "",
        correo: correo?.trim() || "",
        telefono: telefono?.replace(/\s+/g, "").trim() || "",
        mensaje: mensaje?.trim() || "",
      };
    });
  }
}
