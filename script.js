// یک پروژه تودولیست پیاده سازی کنید

// به این صورت که یک آرایه ای برای ذخیره تودوها داشته باشید و به طور دیفالت 3 تودو داخل آن ذخیره کنید
// هر تودو مشخصاتی مثل آیدی، اسم تودو و وضعیت را دارد

// :منویی به 3 گزینه به صورت زیر به کاربر نمایش دهید
// 1. اضافه کردن تودو
// 2. حذف تودو
// 3. انجام تودو (تغییر وضعیت)

// در قسمت اول اسم تودویی را از کاربر دریافت کرده و به لیست تودوها اضافه کنید
// در قسمت دوم اسم تودویی را از کاربر دریافت کرده و آن را از لیست تودوها حذف کنید
// در قسمت سوم اسم تودو را دریافت کرده و همان تودو را در وضعیت انجام شده قرار دهید

// در پایان هر کدام از عملیات‌ها، لیست تودوها را در کنسول نمایش دهید

function show(item=[]){
    var message=''
    item.forEach(function(item2={}){
        message+=(JSON.stringify(item2)+'\n')
    })
    alert(message)
}
//////////////////////////////////////////////////////////
var toDoList=[
    {id:101, name:'انتخاب واحد', situation:'انجام شده'},
    {id:102, name:'نمایش کارنامه ترمی', situation:'انجام نشده'},
    {id:103, name:'نمایش کارنامه کل', situation:'انجام شده'},
]

var userSelection=+prompt('یکی از گزینه های زیر را انتخاب کنید:\n\n1- اضافه کردن یک فعالیت\n2-حذف یک فعالیت\n3- تغییر وضعیت یک فعالیت',1)
switch (userSelection){
    case 1:
        var toDoName=prompt('نام فعالیت جدید را وارد کنید:','')
        var toDoListLen=toDoList.length
        var newId=toDoList[toDoListLen-1].id+1
        var newToDoRecord={id:newId, name:toDoName,situation:'انجام نشده'}
        toDoList.push(newToDoRecord)
        show(toDoList)
        break

    case 2:
        show(toDoList)
        var toDoName=prompt('نام فعالیت مورد نظر برای حذف از لیست را وارد کنید:','')
        toDoList.some(function(item={}){
            if(item.name===toDoName){
                itemIndex=toDoList.indexOf(item)
                toDoList.splice(itemIndex,1)
            }
        })
        show(toDoList)       
        break

    case 3:
        show(toDoList)
        var toDoName=prompt('نام فعالیت مورد نظر (برای تغییر وضعیت) را وارد کنید:','')
        toDoList.some(function(item={}){
            if(item.name===toDoName){
                itemIndex=toDoList.indexOf(item)
                toDoList[itemIndex].situation='انجام شده'
            }
        })
        show(toDoList)         
        break

    default:
        alert('گزینه صحیح را انتخاب نکردید.')
}