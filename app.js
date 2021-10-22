console.log("Ilk Js Kodu...")    
/*JS typesafe bir dil degil, her degisken her an degisebilir.DolarDun 9.20 olarak atanmis olabilir ancak bir alt satira 
DolarDun=Ankara yazarsak artik DolarDun var'i Ankra olacaktir...*/

/*'undefined hatasi' undefined hatasi eger bir degisken tanimlanmadan once print edilip response olarak gonderilirse frontende
gider ancak undefined olarak gozukur, deger gozukmez... */

/*var legacy kod demek cok eski vekati bir degisken tarzi, yeni porjelerde 'let' keywordu kullanilir... let ile var arasindaki 
fark ise blok(dongu sart method...)icinde kullanilar let sadece o blok icinde calisir ve gecerli olur blok disinda tanimlanan
let ise blok disinda gecerli olur ancak biz let yerine var kullansaydik blok ici ve ya disi fark etmeycekti o var degiskeni
her yerde ayni hukme sahip olacakti...*/


let dolarDun = 9.20

{
    let dolarDun = 9.10     // burda iste bu blok icinde dolarDun degeri 9.10 artik disinda ise 9.20
}

/*const*/ //sabit veri demek degeri degistirilemez

let dolarBugun = 9.50

const bankName = ("isbankasi")

console.log(bankName)

let mortgageLoans = ['X Loan','Y Loan','Z Loan']

console.log('<ul>')
for (let i = 0; i < mortgageLoans.length; i++) {
    
    
    const element = mortgageLoans[i]; 
    console.log('<li>' + element + '</li>')  

}
console.log('</ul>')
