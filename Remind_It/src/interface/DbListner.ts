import { Todo } from "../data/Task";

 export default class DBConnecter{
   tableName: string="nn"
   listner!:DBListner<any>
   constructor(){
    // Assuming Todo has a static tableName property
   // getTableName();
   }
}

export interface DBListner<T>{
  add(item: T): void;
  read(): T[];
  update(item: T): void;
  delete(item: T): void;
}
function getTableName<T extends { tableName: string }>(Cls: { tableName: string }): string {
  return "";
}



const a=[5,8,11,18]







