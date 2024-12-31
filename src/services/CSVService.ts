import fs from "fs";

interface Data {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

export class CSVService {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  // Método para leer los datos del archivo CSV
  public readData(): Data[] {
    const dataArray: Data[] = [];

    try {
      const data = fs.readFileSync(this.filePath, "utf8");
      const rows = data.split("\n").slice(1); // Saltar la cabecera
      rows.forEach((row) => {
        const [nombre, correo, telefono, mensaje] = row.split(",");
        dataArray.push({ nombre, correo, telefono, mensaje });
      });
      console.log("Datos guardados en el arreglo:");
      console.log(dataArray);
    } catch (err) {
      console.error("Error leyendo el archivo CSV:", err);
    }

    return dataArray;
  }

  public cleanData(data: Data[]): Data[] {
    return data.map((item) => {
      const { nombre, correo, telefono, mensaje } = item;
      return {
        nombre: nombre.trim(),
        correo: correo.trim(),
        telefono: telefono.replace(/\s+/g, "").trim(),
        mensaje: mensaje.trim(),
      };
    });
  }
}
