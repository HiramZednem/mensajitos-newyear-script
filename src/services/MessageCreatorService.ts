import axios from "axios";
import { Data } from "../interfaces/data";
import { MessageResponse } from "../interfaces/messageResponse";

export class MessageCreatorService {
  private urlFront: string;
  private sender: string;

  constructor(urlFront: string, sender: string) {
    this.urlFront = urlFront;
    this.sender = sender;
  }

  public async createMessages(data: Data[]) {

    for (const item of data) {
      const payload = {
        reciver: item.nombre,
        sender: this.sender,
        msg: item.mensaje,
      };

      try {
        const response = await axios.post(
          "https://mensajitos-api-495924555478.us-central1.run.app/create",
          payload
        );
        const responseData: MessageResponse = response.data;
        item.url = `${this.urlFront}/${responseData._id}`;
      } catch (error) {
        console.error("Error creating message:", error);
      }
    }

  }
}
