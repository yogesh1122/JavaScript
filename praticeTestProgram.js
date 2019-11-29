
//sorted array element

function elementSort(arr){
    let sorted=arr.sort(function(a,b)
    {
        return a-b;
    });
    
    return sorted;
    }
    let arr=[20,5,45,400,2];
    let element=elementSort(arr);
    console.log(element);
    

    
    
    //output
    
    [ 2, 5, 20, 45, 400 ]
    
    
    
    /** sort elemet desending order */
    
    
    function desSorted(arr1)
    {
       let des= arr1.sort(function(a,b){ return b-a});
       return des;
    }
    
    let arr1=[20,80,51,30,45];
    let desendingOrder=desSorted(arr1);
    console.log(desendingOrder);
    
    //output
    //[ 80, 51, 45, 30, 20 ]
    
    
    
    /** Finding list of greatest number */
    
    function greatestNumber(num)
    {
        num.sort(function(a,b){ return b-a});
        return num[0];
        
    }
    let arr3=[40,20,60,89,52]; 
    let greatestNum=greatestNumber(arr3);
    console.log(greatestNum+"\n");
    
    //output will be shows 
    //89
    
    
    /** CReating list of employee name cont age  display age between 18 to 25 */
    
    
    
    
    let emp=
        [
            {
                name:"Yogesh",
                age:22,
                contactNumber:"895634170"
            },
            {
                name:"sam",
                age:23,
                contactNumber:"123456789"
            },
            {
                name:"xyz",
                age:32,
                contactNumber:"4561230789"
            },
            {
                name:"abc",
                age:17,
                contactNumber:"7894561230"
            }
    
        ];
        
     //   console.log(emp.age);
       
     for(let em of emp)
     {
         if(em.age<25 &&em.age>18){
    
             console.log(em.age);
         }
            
         
     }
        
    /** Output is 
    22
    23
     */
    
    
     /**create list company having data like name turnover display sum of all compines turnover */
    
    
    
     let Companies=
        [
            {
                name:"infodeal pvt ltd",
                turnover:2531689
                
            },
            {
                name:"Datta sir pvt ltd ",
                turnover:985623014
               
            },
            {
                name:"student pvt ltd",
                turnover:45678912
                
            },
            {
                name:"StudyPoint pvt ltd",
                turnover:458231
            }
    
        ];
         
        let sumTurnOver=0;
        for(let co of Companies){
    
    
           sumTurnOver= sumTurnOver+co.turnover;
        
        }
    
           console.log(` Sum of All compamiese turn over is :-${sumTurnOver}`);
        
        
        /**create a list of boys having data like *name,birthDayTime */
    
        function rinkuBirthdy()
        {
    
            console.log("Happy Birthday Rinku")
        }
      
        function minkuBirthday()
        {   
            console.log("After 10 sec Birthday");
            console.log("Happy Birthday Minku");
            
        }
    
        setTimeout(rinkuBirthdy, 5000);
        setTimeout(()=>{return `Time out after`},5000)
        setTimeout(minkuBirthday,10000);
        setTimeout(()=>{return `Time out after`},2000)
        
    
    /**
     * Write program valid example of closer Function return inside function :)
     */
    
     function Closer(x,y){
    return()=>
    
            {
                return (x+y);
            }
     }
     let rtn=Closer(10,20);
     let add=rtn();
     console.log(add);
     
     
     
    =======
    
    
    //sorted array element
    
    function elementSort(arr){
    let sorted=arr.sort(function(a,b)
    {
        return a-b;
    });
    
    return sorted;
    }
    let arr=[20,5,45,400,2];
    let element=elementSort(arr);
    console.log(element);
    
    
    //output
    
    [ 2, 5, 20, 45, 400 ]
    
    
    
    /** sort elemet desending order */
    
    
    function desSorted(arr1)
    {
       let des= arr1.sort(function(a,b){ return b-a});
       return des;
    }
    
    let arr1=[20,80,51,30,45];
    let desendingOrder=desSorted(arr1);
    console.log(desendingOrder);
    
    //output
    //[ 80, 51, 45, 30, 20 ]
    
    
    
    /** Finding list of greatest number */
    
    function greatestNumber(num)
    {
        num.sort(function(a,b){ return b-a});
        return num[0];
        
    }
    let arr3=[40,20,60,89,52]; 
    let greatestNum=greatestNumber(arr3);
    console.log(greatestNum+"\n");
    
    //output will be shows 
    //89
    
    
    /** CReating list of employee name cont age  display age between 18 to 25 */
    
    
    
    
    let emp=
        [
            {
                name:"Yogesh",
                age:22,
                contactNumber:"895634170"
            },
            {
                name:"sam",
                age:23,
                contactNumber:"123456789"
            },
            {
                name:"xyz",
                age:32,
                contactNumber:"4561230789"
            },
            {
                name:"abc",
                age:17,
                contactNumber:"7894561230"
            }
    
        ];
        
     //   console.log(emp.age);
       
     for(let em of emp)
     {
         if(em.age<25 &&em.age>18){
    
             console.log(em.age);
         }
            
         
     }
        
    /** Output is 
    22
    23
     */
    
    
     /**create list company having data like name turnover display sum of all compines turnover */
    
    
    
     let Companies=
        [
            {
                name:"infodeal pvt ltd",
                turnover:2531689
                
            },
            {
                name:"Datta sir pvt ltd ",
                turnover:985623014
               
            },
            {
                name:"student pvt ltd",
                turnover:45678912
                
            },
            {
                name:"StudyPoint pvt ltd",
                turnover:458231
            }
    
        ];
         
        let sumTurnOver=0;
        for(let co of Companies){
    
    
           sumTurnOver= sumTurnOver+co.turnover;
        
        }
    
           console.log(` Sum of All compamiese turn over is :-${sumTurnOver}`);
        
        
        /**create a list of boys having data like *name,birthDayTime */
    
        function rinkuBirthdy()
        {
    
            console.log("Happy Birthday Rinku")
        }
      
        function minkuBirthday()
        {   
            console.log("After 10 sec Birthday");
            console.log("Happy Birthday Minku");
            
        }
    
        setTimeout(rinkuBirthdy, 5000);
        setTimeout(()=>{return `Time out after`},5000)
        setTimeout(minkuBirthday,10000);
        setTimeout(()=>{return `Time out after`},2000)
        
    
    /**
     * Write program valid example of closer     
     */
    
     function Closer(x,y){
    return()=>
            {
                return (x+y);
            }
     }
     let rtn=Closer(10,20);
     let add=rtn();
     console.log(add);