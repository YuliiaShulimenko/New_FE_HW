//1) Создать пронумерованные списки с товарами (на основе массива с объектами);
let links =
[
    {
    title: "BMW",
    price: "40000",
    count: "15"
},
    {
    
    title: "Toyota",
    price: "20000",
    count: "13"
    },
    
    {
    title: "Ford",
    price: "30000",
    count: "20"
    },
    
    {
    title: "Chevrolet",
    price: "60000",
    count: "9"
    },
    
    {
    title: "Volkswagen",
    price: "30000",
    count: "13"
    },
    
    ]

    const root = document.createElement("div"); //ПОДКЛ К НАШЕМУ ДИВУ,СОЗДАННОМУ В ИНДЕКС
   

    for (let i = 0; i <= links.length; i++) 
    {
        const post = document.createElement("ol"); //создание списка
        const list_title = document.createElement("li"); //создание элементов списка
        const list_price = document.createElement("li");
        const list_count = document.createElement("li");

        
        list_title.innerText = links[i].title; //присвоение текстовой части элементов списка
        list_price.innerText = links[i].price;
        list_count.innerText = links[i].count;

       root.append(ol); //в див засунули список
       ol.append(list_title, list_price, list_count); //в список засунули элементы списка
    }


//2) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами с прошлой задачи), а внизу выводится итоговая сумма товаров и их количество.

let sum_price = 0;
let sum_count = 0;

for (let i = 0; i <links.length; i++) {
    const post = document.createElement("ol"); //создание списка
    const list_title = document.createElement("li"); //создание элементов списка
    const list_price = document.createElement("li");
    const list_count = document.createElement("li");

    
    list_title.innerText = links[i].title; //присвоение текстовой части элементов списка
    list_price.innerText = links[i].price;
    list_count.innerText = links[i].count;

   root.append(ol); //в див апендим список
   ol.append(list_title, list_price, list_count); //в список апендим элементы списка

}


for (let i = 0; i <links.length; i++) {
sum_price = sum_price + links[i].price;
sum_count = sum_count + links[i].count;
}

const div = document.createElement("div");
const itog_price = document.createElement("p");
const itog_count = document.createElement("p");

itog_price.innerText = sum_price;
itog_count.innerText = sum_count;

div.append(itog_price, itog_count);



//3)Напишите скрипт, который выводит в интерфейс следующую таблицу:

let table= document.createElement("table");

let table_arr =
[
    {
        NO: "NO",
        Full_name: "Full_name",
        Position: "Position",
        Salary: "Salary",
    },

    {
    NO: "1",
    Full_name: "Bill Gates",
    Position: "Founder Microsoft",
    Salary: "$1000",
},
    {
        NO: "2",
        Full_name: "Steve Jobs",
        Position: "Founder Apple",
        Salary: "$1200",
    },
    
    {
        NO: "3",
        Full_name: "Larry Page",
        Position: "Founder Google",
        Salary: "$1100",
    },
    
    {
        NO: "4",
        Full_name: "Mark Zukerberg",
        Position: "Founder Facebook",
        Salary: "$1300",
    },
    
    ]


for (let i = 1; i < table_arr.length; i++) 
{
    
    let tr = document.createElement("tr"); // создаем строку таблицы
    let tdN = document.createElement("td"); // создаемстолбец таблицы
    let tdFN = document.createElement("td");
    let tdP = document.createElement("td");
    let tdS = document.createElement("td");

    tdN.innerText = table_arr[i].NO;
    tdFN.innerText = table_arr[i].Full_name;
    tdP.innerText = table_arr[i].Position;
    tdS.innerText = table_arr[i].Salary;


    tr.append(tdN, tdFN, tdP, tdS);
    table.append(tr);
}

let thead = document.createElement("thead");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");

th1.innerText = table_arr[0].NO;
th2.innerText = table_arr[0].Full_name;
th3.innerText = table_arr[0].Position;
th4.innerText = table_arr[0].Salary;


table.append(thead);
thead.append(th1, th2, th3, th4);
document.body.append(table);
