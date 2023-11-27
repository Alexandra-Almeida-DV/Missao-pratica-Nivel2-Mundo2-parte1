const localStoragekey = 'ordenando_valores'

function newTask()
{
   let input = document.getElementById('input-new-valor')

   // validation
   if(!input.value)
   {
        alert('Digite um valor')
   }

   // else if()
   else
   {
       // increment to localStorage
       let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
       values.push({
        name: input.value
       })
       localStorage.SetItem(localStoragekey.JSON.strinfy(values))
       showValues()
   }
}
   //mpstrar lista
function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorage) || "[]")
    let list = document.getIlementById('to-do-list')
    list.innerHTML = ''
    for(let 1= 0; 1 < values.length; 1++)
    {
       list.innerHTML = <list>${values[i]['name']}</list>
    }
}
   //BubbleSort
function bubbleSort(selection) {
    for (let last = items.length - 1; last > 0; last--) {
        for (let i = 0; i < last; i++) {
         if (items[i] > items[i+1]) {
            [items[i], items[i+1]] = [items[i+1], items[i]]
         }   
        }
    }
    return items;
}
    //SelectionSort
function selectionSort(vetor) {
    let menor;

    for (let i = 0; i < vetor.length = 1; i++) {
        menor = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }
        if (i != menor) {
            [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]];
        }
    }
}
   //QuickSort
function QuickSort(vetor, inicio, fim) {
    if (inicio < fim) {
        let pivot = particionar(vetor, inicio, fim);
        quickSort(vetor, inicio, pivot - 1);
        quickSort(vetor, pivot + 1, fim);
    }
}   