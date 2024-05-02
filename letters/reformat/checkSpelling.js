// function checkSpelling() {
//   let situationshipMisp = [
//     "situatinoship",
//     "situtaionship",
//     "situaitonship",
//     "situatoinship",
//     "eituationship",
//     "aituationship",
//     "dituationship",
//     "wituationship",
//     "sotuationship",
//     "sutuationship",
//     "sktuationship",
//     "siruationship",
//     "siguationship",
//     "siyuationship",
//     "sitiationship",
//     "sityationship",
//     "sitjationship",
//     "situstionship",
//     "situztionship",
//     "situqtionship",
//     "situarionship",
//     "situagionship",
//     "situayionship",
//     "situatoonship",
//     "situatuonship",
//     "situatkonship",
//     "situatiinship",
//     "situatilnship",
//     "situatipnship",
//     "situatiomship",
//     "situatiohship",
//     "situatiobship",
//     "situationehip",
//     "situationahip",
//     "situationdhip",
//     "situationwhip",
//     "situationsnip",
//     "situationstip",
//     "situationsgip",
//     "situationsbip",
//     "situationshop",
//     "situationshup",
//     "situationshkp",
//     "situationshio",
//     "situationshil"
//   ];

//   let relationshipMisp = [
//     "relatinoship",
//     "erlationship",
//     "reltaionship",
//     "relaitonship",
//     "relatoinship",
//     "eelationship",
//     "telationship",
//     "gelationship",
//     "felationship",
//     "repationship",
//     "remationship",
//     "rekationship",
//     "relstionship",
//     "relztionship",
//     "relqtionship",
//     "relarionship",
//     "relagionship",
//     "relayionship",
//     "relatoonship",
//     "relatuonship",
//     "relatkonship",
//     "relatiinship",
//     "relatilnship",
//     "relatipnship",
//     "relatiomship",
//     "relatiohship",
//     "relatiobship",
//     "relationehip",
//     "relationahip",
//     "relationdhip",
//     "relationwhip",
//     "relationsnip",
//     "relationstip",
//     "relationsgip",
//     "relationsbip",
//     "relationshop",
//     "relationshup",
//     "relationshkp",
//     "relationshio",
//     "relationshil"
//   ];

//   let crushMisp = [
//     "drush",
//     "vrush",
//     "xrush",
//     "ceush",
//     "ctush",
//     "cgush",
//     "cfush",
//     "crish",
//     "crysh",
//     "crjsh",
//     "crueh",
//     "cruah",
//     "crudh",
//     "cruwh",
//     "crusn",
//     "crust",
//     "crusg",
//     "crusb"
//   ];

//   // let typeRange = SpreadsheetApp.getActive().getRange('full_letters!C2:C18930');
//   let descRange = SpreadsheetApp.getActive().getRange('full_letters!D2:C18930').getValues();
//   let total = 0;

//   // Loop through each row in the src sheet
//   for (let i = 0; i < descRange.length; i++) {

//     if (descRange[i][0]){
//       situationshipMisp.forEach(misp => {
//         if (descRange[i][0].includes(misp)) {
//           total++;
//           Logger.log("Index: " + i + "Word: " + misp)
//         }
//       })
//       relationshipMisp.forEach(misp => {
//         if (descRange[i][0].includes(misp)) {
//           total++;
//           Logger.log("Index: " + i + "Word: " + misp)
//         }
//       })
//       crushMisp.forEach(misp => {
//         if (descRange[i][0].includes(misp)) {
//           total++;
//           Logger.log("Index: " + i + "Word: " + misp)
//         }
//       })
//     }
//   }

//   Logger.log("Total: " + total);
// }