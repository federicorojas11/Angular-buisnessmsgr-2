export class Memorandum {
  id: number;
  title: string;
  message: string;
  sender_id: string;
  sender_del_status: number;
  receiver_id: number;
  receiver_del_status: number;
  time: Date;
  readed: boolean;

    constructor() {
      {
        this.id = 0,
        this.title = '',
        this.message = '',
        this.sender_id = '',
        this.sender_del_status= 0,
        this.receiver_id= 0,
        this.receiver_del_status= 0,
        this.time = new Date(),
        this.readed= true
      }
  }
}


