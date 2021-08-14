export interface Memorandum {
  id: number;
  title: string;
  message: string;
  sender_id: string;
  sender_del_status: number;
  receiver_id: number;
  receiver_del_status: number;
  time: Date;
  readed: boolean;
}
