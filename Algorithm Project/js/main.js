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


            // average
            for (let i = 0; i < degree.length; i++) {
                if (!isNaN(degree[i])) {
                    sum+=+degree[i]; 
                }
            }            
            avg=sum/degree.length;

            // Combine name and degree into an array of objects
            let students = names.map((name, index) => ({
                name: name.trim(),
                degree: parseFloat(degree[index]) || 0
            }));

            switch (i) {
                case 0:
                    mergeSortTime=0;
                    students = mergeSort(students, 'degree');
                    console.log(`mergeSort time : ${mergeSortTime.toFixed(2)} ms`);

                    break;
                case 1:
                    quickSortTime=0;
                    students = quickSort(students, 'degree');
                    console.log(`quickSort time :${quickSortTime.toFixed(2)} ms`);

                    break;
                case 2:
                    radixSortTime=0;
                    students = radixSort(students, 'degree');
                    console.log(`radixSort time :${radixSortTime.toFixed(2)} ms`);

                    break;
            }

            sortedTable(students);
            // data[0].value='';
            // data[1].value='';
            sum=0;
            avg=0;
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
    theAvg.style.cssText='color:#ff00ff; font-size:19px;'
    average.innerHTML=`${avg.toFixed(2)}`

    tr.appendChild(theAvg);
    tr.appendChild(average);  
    table.appendChild(tr); 
    document.body.appendChild(table);
    let br=document.createElement('br');
    document.body.appendChild(br);
}
