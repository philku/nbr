/**
 * nbr
 *
 * @param number
 * @return {{local: string, local_dashed: string, domestic: string, domestic_dashed: string, domestic_dotted: string, domestic_areaParentheses: string, domestic_areaSpaced: string, domestic_areaSpacedParentheses: string, international: string, international_dashed: string}}
 */
const nbr = (number) => {
    number = number.toString();         // Make it a string
    number = number.replace(/\D/g,"");  // Get rid of everything, except numbers

    let local = null;
    let local_dashed = null;

    let domestic = null;
    let domestic_dashed = null;
    let domestic_dotted = null;
    let domestic_areaParentheses = null;
    let domestic_areaSpaced = null;
    let domestic_areaSpacedParentheses = null;

    let international = null;
    let international_dashed = null;


    let nLen = number.length;

    if(nLen >= 7){
        local = number.substr(nLen - 7, 7);
        local_dashed = number.substr(nLen - 7,3) + "-" + number.substr(nLen - 4, 4);
    }

    if(nLen >= 10){
        domestic = number.substr(nLen - 10, 10);
        domestic_dashed = number.substr(nLen - 10, 3) + "-" + number.substr(nLen - 7, 3) + "-" + number.substr(nLen - 4, 4);
        domestic_dotted = number.substr(nLen - 10, 3) + "." + number.substr(nLen - 7, 3) + "." + number.substr(nLen - 4, 4);
        domestic_areaParentheses = "(" + number.substr(nLen - 10, 3) + ") " + number.substr(nLen - 7, 3) + "-" + number.substr(nLen - 4, 4);
        domestic_areaSpaced = number.substr(nLen - 10, 3) + " " + number.substr(nLen - 7, 3) + "-" + number.substr(nLen - 4, 4);
        domestic_areaSpacedParentheses = "(" + number.substr(nLen - 10, 3) + ") " + number.substr(nLen - 7, 3) + " " + number.substr(nLen - 4, 4);
    }

    if(nLen >= 11){
        international = number;
        international_dashed = number.substr(0, nLen - 10) + "-" + number.substr(nLen - 10, 3) + "-" + number.substr(nLen - 7, 3) + "-" + number.substr(nLen - 4, 4);
    }


    return {
        local,
        local_dashed,
        domestic,
        domestic_dashed,
        domestic_dotted,
        domestic_areaParentheses,
        domestic_areaSpaced,
        domestic_areaSpacedParentheses,
        international,
        international_dashed,
    }
};

module.exports = nbr;