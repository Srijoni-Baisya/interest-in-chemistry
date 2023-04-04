var names = ['sodium', 'potassium', 'lithium', 'beryllium', 'copper[I]', 'ammonium',
             'calcium', 'magnesium', 'zinc', 'copper[II]', 'lead[II]', 'iron[II]', 'nickel', 'tin[II]', 'manganese[II]', 'barium',
             'iron[III]', 'aluminium', 'chromium',
             'lead[IV]', 'tin[IV]', 'manganese[IV]',
             'fluoride', 'chloride', 'bromide', 'iodide', 'hydroxide', 'bisulphite', 'bisulphate', 'bicarbonate', 'nitrate', 'nitrite', 'aluminate', 'permanganate',
             'oxide', 'sulphide', 'sulphate', 'sulphite', 'carbonate', 'zincate', 'plumbite', 
             'phosphide', 'phosphate', 'nitride'];

var symbols = ['Na', 'K', 'Li', 'Be', 'Cu', 'NH₄',
               'Ca', 'Mg', 'Zn', 'Cu', 'Pb', 'Fe', 'Ni', 'Sn', 'Mn', 'Ba',
               'Fe', 'Al', 'Cr',
               'Pb', 'Sn', 'Mn',
               'F', 'Cl', 'Br', 'I', 'OH', 'HSO₃','HSO₄', 'HCO₃', 'NO₃', 'NO₂', 'AlO₂', 'MnO₄',
               'O', 'S', 'SO₄', 'SO₃', 'CO₃', 'ZnO₂', 'PbO₂',
               'P', 'PO₄', 'N'];

var valency = ['1', '1', '1', '1', '1', '1',
               '2', '2', '2', '2', '2', '2', '2', '2', '2', '2',
               '3', '3', '3',
               '4', '4', '4',
               '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
               '2', '2', '2', '2', '2', '2', '2',
               '3', '3', '3'];




function find_formula(){
    var compound = document.getElementById("compound_name").value.toLowerCase();

    var split_text = compound.split(" ");

    var cation = split_text[0];
    var anion = split_text[1];

    var index_cation = names.indexOf(cation);
    var index_anion = names.indexOf(anion);
    
    console.log("cation : " + index_cation);
    console.log("anion : " + index_anion);

    var sym1 = symbols[index_cation];
    var sym2 = symbols[index_anion];
    var val1 = valency[index_cation];
    var val2 = valency[index_anion];

    var formula = "";
    var new_sym1 = "";
    var new_sym2 = "";

    if(val1 == val2){
        console.log("Same valency");
        formula = sym1 + sym2;
    }
    else{
        if(index_cation==5){
            new_sym1 = "(" + sym1 + ")";
            new_sym2 = sym2;
        }
        else if(index_anion == 25|| index_anion == 26|| index_anion == 27|| index_anion == 28|| index_anion == 29|| index_anion == 30|| index_anion == 31|| index_anion == 32|| index_anion == 35|| index_anion == 36|| index_anion == 37|| index_anion == 38|| index_anion == 39||index_anion == 41){
            new_sym2 = "(" + sym2 + ")";
            new_sym1 = sym1;
        }
        else{
            new_sym1=sym1;
            new_sym2=sym2;
        }

        if(val1 == 1 && val2 != 1){
            formula = new_sym1 + val2.sub() + new_sym2;
        }
        else if(val2 == 1 && val1 != 1){
            formula = new_sym1 + new_sym2 + val1.sub();
        }
        else{
            formula = new_sym1 + val2.sub() + new_sym2 + val1.sub();
        }
    }

    document.getElementById("output").innerHTML = formula;
}


function home(){
    window.location = "index.html";
}