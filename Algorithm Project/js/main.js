let choiceTitle = document.getElementsByClassName('title')[0];
let data = document.querySelectorAll('textarea');
let sum=0;
let avg=0;
window.addEventListener('load', () => {
    let title = `Choice Type Of Sort`;
    let i = 0;
    let intervalId = setInterval(() => {
        if (i < title.length) {
            choiceTitle.innerHTML += `${title[i]}`;
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, 50);

    let sort = document.querySelectorAll('p');
    for (let i = 0; i < sort.length; i++) {
        sort[i].addEventListener('click', function () {

            

          if (data[0].value !=='' && data[1].value !=='') {
              
                
            let names = data[0].value.trim().split('\n').map(e => e.trim());
            let degree = data[1].value.trim().split('\n').map(e => e.trim());
            
            console.log(degree);
            
            // average
            for (let i = 0; i < degree.length; i++) {
                if (!isNaN(degree[i])) {
                    sum+=+degree[i]; 
                }
            }
            console.log(sum);
            
            avg=sum/degree.length;
            
            console.log(avg.toFixed(2));
            
            

           

            // Combine name and degree into an array of objects
            let students = names.map((name, index) => ({
                name: name.trim(),
                degree: parseFloat(degree[index]) || 0
            }));

            switch (i) {
                case 0:
                    students = mergeSort(students, 'degree');
                    break;
                case 1:
                    students = quickSort(students, 'degree');
                    break;
                case 2:
                    students = radixSort(students, 'degree');
                    break;
            }

            sortedTable(students);
            data[0].value='';
            data[1].value='';
            avg=0;
            console.log(students);
         }
        });
       
    }
   
});


const sortedTable=function (data){
    
    let table=document.createElement('table');
    let thead=document.createElement('thead');
    let td1=document.createElement('td');
    td1.innerHTML='Name';
    let td2=document.createElement('td');
    td2.innerHTML='degree';
    thead.appendChild(td1);
    thead.appendChild(td2);
    table.appendChild(thead); 

    for (let i = 0; i < data.length; i++) {
        let tr=document.createElement('tr');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        td1.innerHTML=`${data[i].name}`
        td2.innerHTML=`${data[i].degree}`
        tr.appendChild(td1);
        tr.appendChild(td2);  
        table.appendChild(tr); 
    }
    

    let tr=document.createElement('tr');
    let theAvg=document.createElement('td');
    let average=document.createElement('td');
    theAvg.innerHTML=`Average`
    average.innerHTML=`${avg}`

    tr.appendChild(theAvg);
    tr.appendChild(average);  
    table.appendChild(tr); 
    document.body.appendChild(table);
    let br=document.createElement('br');
    document.body.appendChild(br);


}
