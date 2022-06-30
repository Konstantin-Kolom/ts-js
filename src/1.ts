import { type } from "os"

export { }
// Приметивные типы
let age: number = 5
age = 10

let name: string = "Mango"
name = ""

let id: number | boolean | string = 5
id = true


console.log(age, name, id);

// -----------------------------------------------------------------------------------------

// Массивы
const temps: number[] = [3, 4, 7, 10]

const temps2: Array<number> = [3, 4, 7, 10]
temps.push(5)

const temps3: (number | string)[] = [3, 4, 7, 10, "ddd", "dfdf"]

const temps4: readonly number [] = [3, 4, 7, 10]
// temps4.push(5)

const coords: [number, number, number, string] = [3.456, 40.746, 7.293, "sdsd"]

console.log(temps, coords, temps2, temps3, temps4);

// -----------------------------------------------------------------------------------------

// Типы Type
type ID = number | string
const userId: ID = 5
const textID: ID = "dsdds"

type Coords = [number, number]
const coords1: Coords = [50.000, 36.8888]

type ReqStatus = "request" | "error" | "success"
const reqStatus: ReqStatus = "error"

console.log(userId, textID, coords1, reqStatus);

// -----------------------------------------------------------------------------------------

// Интерфейс (описание объекта)
interface PlaginConfig {
   selector: string;
   readonly id: number;
   perPage: number;
   startIndex?: number;
   draggable: boolean;
}
 
const config: PlaginConfig = { 
   selector: "pag1",
   id: 2,
   perPage: 2,
   // startIndex: 2,
   draggable: true,
}
console.log(config);
// -----------------------
interface Employees {
[key: string]: number
}
const employees: Employees = { 
   mango: 5,
   poly: 7,
   ajax: 15,
   // wiki: "sds"
}
console.log(employees);
// --------------------------------
interface Employees1 {
[key: string]: number []
}
const employees1: Employees1 = { 
   mango: [5, 3, 4],
   poly: [2,3],
   ajax: [5,7,8,9],
}

console.log(employees1);
// ---------------------------------

interface Shape {
   color: string;
}

interface Shape2 extends Shape{
   side: number;
}

let square = {color:  "red", side: 10 } 

let square2 = {} as Shape2
square2.color = "red";
square2.side = 10;

console.log(square);

// ------------------------------------------------------------------------------------
// Инумы - Enum

