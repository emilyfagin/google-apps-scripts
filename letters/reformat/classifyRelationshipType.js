/**
 * Classifies / determines relationship type, based on description provided.
 */
function classifyRelationships() {
  let typeRange = SpreadsheetApp.getActive().getRange('full_letters!C2:C18930');
  let descRange = SpreadsheetApp.getActive().getRange('full_letters!D2:D18930'); // 18930
  
  let updatedValues = typeRange.getValues();
  let total = 0;
  // Loop through each row in the src sheet
  for (let i = 0; i < updatedValues.length; i++) {
    if (updatedValues[i][0] === ""){
      let result = getType(descRange.getCell(i+1, 1).getValue());
      total++;
      switch (result) {
        case 1: // situationship
          updatedValues[i][0] = 'Situationship';
          break;
      
        case 2: // crush
          updatedValues[i][0] = 'Crush';
          break;
      
        case 3: // long term
          updatedValues[i][0] = 'LongTerm';
          break;
      
        case 4: // short term
          updatedValues[i][0] = 'ShortTerm';
          break;
      
        case 5: // friendship
          updatedValues[i][0] = 'Friendship';
          break;
  
        default:
          total--;
          break;
      }
    }
  }

  // Logger.log(JSON.stringify(updatedValues));

  // set updated values in the Type column
  typeRange.setValues(updatedValues);
  Logger.log("Total updated: " + total);
}


function getType(desc) {
  text = desc.toString().toLowerCase();

  var classIdx = 0;
  if (text){
    if (isSituationship(text)){
      classIdx = 1;
      // return 1;
    } else if (isCrush(text)){
      classIdx = 2;
      // return 2;
    } else if (isLongTerm(text)) {
      classIdx = 3;
      // return 3;
    } else if (isShortTerm(text)) {
      classIdx = 4;
      // return 4;
    } else if (isFriendship(text)) {
      classIdx = 5;
      // return 5;
    }
  }

  return classIdx;
}

function isSituationship(text){
  return (text.includes('situationship') || (text.includes('friend') && text.includes('benefit')) || text.includes('situation ship'));
}

function isCrush(text) {
  return (['one side', 'unrequited', 'one side love', 'crush'].some(keyword => text.includes(keyword)));
}

function isLongTerm(text) {
  return (['engaged', 'divorced', 'engage', 'fiancé', 'fiance', 'married', 'marriage', 'proposed', 'longterm', 'long term', 'husband', 'wife', 'long-term'].some(keyword => text.includes(keyword)) || 
          (text.includes('year') && text.includes('relationship')));
}

function isShortTerm(text) {
  return (['shortterm', 'short', 'short-term', 'short term', 'dated', 'dating', 'boyfriend', 'girlfriend', 'relationship', 'relation ship', 'ex'].some(keyword => text.includes(keyword)));
}

function isFriendship(text) {
  return (['friendship', 'friend'].some(keyword => text.includes(keyword)));
}
