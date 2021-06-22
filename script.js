const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
let contentHTML = document.querySelector(".icons-content"); 

//CREO COPIA DELL'ARRAY ORIGINALE

//CREO UNA FUNZIONE PER FILTRARE ARRAY ORIGINALE DIPENDENDO DALLA SCELTA
//DALL' UTENTE E RITORNA IN UN NUOVO 
/**
 *Filtra originalList dipendendo dalla scelta 
 * @param {*} scelta 
 * @param {*} originalArray 
 */
function filterIcons (scelta, originalArray){
    return originalArray.filter((icon)=>{
        if(scelta === "all"){
            return true;
        }
        if(choice === icon.type){
            return true;
        }
        return false;
    });
}
// CREO UNA FUNZIONE PER MANDARE A SCHERMO LE ICONE
// RICHIESTE DALL'UTENTE
function listIconsHTML (filter){

    const iconsFiltrate = filterIcons(filter, icons);//chiamo la funzione creata a riga 110
    //(x, a) x = nome della funzione a riga 123 a = nome array originale.

    contentHTML.innerHTML = ""; //per resettare ogni volta

    iconsFiltrate.forEach((icon)=>{

        const { name, prefix, family, type} = icon; //destrutturazione
    
        contentHTML.innerHTML += 
        `
        <div class="icon-box col">
            <div class="icona-inner">
                <div class="icona ${type}"> 
                    <i class="${family} ${prefix}${name}"></i>
                </div>             
                <div class="name">${name}</div>
            </div>        
        </div>
        `
    });
}

listIconsHTML("all");

const selectElement = document.querySelector(".selettore");

selectElement.addEventListener('change',(event)=>{
    listIconsHTML(event.value);
});
