(function() {

    function round(x) {
        return Math.round(x * 100) / 100
    }

    function budget(n) {
        n = Number(n);
        var TTC_Entier = n * 1.2;
        var HT_Acompte = n * 0.4;
        var TTC_Acompte = HT_Acompte * 1.2;
        var HT_Solde_Final = n * 0.6;
        var TTC_Solde_Final = HT_Solde_Final * 1.2;
        var result = 'Le budget en HT est ' + n + ' €<br>';
        result += 'Le budget en TTC est ' + round(TTC_Entier) + ' €<br>';
        result += 'L\'acompte en HT est ' + round(HT_Acompte) + ' €<br>';
        result += 'L\'acompte en TTC est ' + round(TTC_Acompte) + ' €<br>';
        result += 'Le solde final en HT est ' + round(HT_Solde_Final) + ' €<br>';
        result += 'Le solde final en TTC est ' + round(TTC_Solde_Final) + ' €';
        return result;
    }

    function jeh(n_phase) {
        var result = '';
        //Je pars du principe que je n 'aurai jamais plus de 500 JEH
        var i = 1
        var a = 0
        while (i < 500) {
            jeh_potentiel = n_phase / i
            test_jeh_potentiel = n_phase % i
            if (test_jeh_potentiel == 0 && jeh_potentiel >= 80 && jeh_potentiel <= 400) {
                result += 'Nombre de JEH : <br>';
                result += i + '<br>';
                result += 'Prix unitaire de la JEH<br>';
                result += jeh_potentiel + '<br>';
                i = 501;
                a = 1;
            } else {
                i = i + 1;
            }
        }
        if (a == 0) {
            result = 'Impossible';
        }
        return result;
    }

    var number = document.getElementById('number');
    var budgetText = document.getElementById('budget-text');
    number.addEventListener('keyup', function() {
        budgetText.innerHTML = budget(number.value);
    });

    var phase = document.getElementById('phase');
    var jehText = document.getElementById('jeh-text');
    phase.addEventListener('keyup', function() {
        jehText.innerHTML = jeh(phase.value);
    });
})()