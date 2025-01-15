$(document).ready(function() {
    const apiUrl =
        'https://geo.api.gouv.fr/communes?codePostal=';
    const format = '&format=json';

    let zipcode = $('#cp_construction');
    let city = $('#ville_construction');
    let errorMessage = $('#error-message');

    zipCodeChecked();

    function zipCodeChecked() {
        let zipCodeChecked = document.getElementById(
            'cp_construction').value;
        let url = apiUrl + zipCodeChecked + format;
        checkZipcode(url);
    }

    function checkZipcode(url) {
        fetch(url, {
            method: 'get'
        }).then(response => response.json()).then(
            results => {
                //console.log(results);
                // $(city).find('option').remove();
                document.getElementById(
                        'ville_construction')
                    .value = '';
                if (results.length) {
                    $(errorMessage).text('').hide();
                    $.each(results, function(key,
                        value) {
                        console.log(value);
                        console.log(value
                            .nom);
                        // $(city).append('<option value="' + value.nom + '">' + value.nom + '</option>');
                        document
                            .getElementById(
                                'ville_construction'
                            ).value =
                            value.nom;
                    });
                } else {
                    if ($(zipcode).val()) {
                        console.log(
                            'Erreur de code postal.'
                        );
                        $(errorMessage).text(
                            'Aucune commmune avec ce code postal.'
                        ).show();
                    } else {
                        $(errorMessage).text('')
                            .hide();
                    }
                }
            }).catch(err => {
            console.log(err);
            // $(city).find('option').remove();
            document.getElementById(
                    'ville_construction')
                .value = '';
        });
    }
    $(zipcode).on('blur', function() {
        let code = $(this).val();
        let url = apiUrl + code + format;

        checkZipcode(url);
    });
});

$(document).ready(function() {
    const apiUrl =
        'https://geo.api.gouv.fr/communes?codePostal=';
    const format = '&format=json';

    let zipcode = $('#postal_code');
    let city = $('#text');
    let errorMessage = $('#error-message');

    zipCodeChecked();

    function zipCodeChecked() {
        let zipCodeChecked = document.getElementById(
            'postal_code').value;
        let url = apiUrl + zipCodeChecked + format;
        checkZipcode(url);
    }

    function checkZipcode(url) {
        fetch(url, {
            method: 'get'
        }).then(response => response.json()).then(
            results => {
                //console.log(results);
                //$(city).find('option').remove();
                document.getElementById('text')
                    .value = '';
                if (results.length) {
                    $(errorMessage).text('').hide();
                    $.each(results, function(key,
                        value) {
                        console.log(value);
                        console.log(value
                            .nom);
                        // $(city).append('<option value="' + value.nom + '">' + value.nom + '</option>');
                        document
                            .getElementById(
                                'text')
                            .value = value
                            .nom;
                    });
                } else {
                    if ($(zipcode).val()) {
                        console.log(
                            'Erreur de code postal.'
                        );
                        $(errorMessage).text(
                            'Aucune commmune avec ce code postal.'
                        ).show();
                    } else {
                        $(errorMessage).text('')
                            .hide();
                    }
                }
            }).catch(err => {
            console.log(err);
            //  $(city).find('option').remove();
            document.getElementById('text')
                .value = '';
        });
    }
    $(zipcode).on('blur', function() {
        let code = $(this).val();
        let url = apiUrl + code + format;
        checkZipcode(url);
    });
});

function verif() {
    if (document.getElementById('casecheckbox').checked) {
        return true;
    } else {
        alert('Veuillez cocher la case pour vous inscrire');
        return false;
    }
}
//-->

function clikselect() {
    if (document.getElementById('type').value ==
        "neuve" || document.getElementById('type')
        .value == "piscine") {
        document.getElementById(
                'superficieavanttravaux').disabled =
            true;
    } else {
        document.getElementById(
                'superficieavanttravaux').disabled =
            false;
    }
}

document.getElementById('type').addEventListener(
    "click", clikselect);
clikselect();

let Neuve = document.getElementsByClassName(
    'neuve');
let select = document.getElementsByClassName(
    'select');
let montant_existant = document.getElementById(
    'montant_existant');

function clikselect() {
    if (document.getElementById('type').value ==
        "neuve" || document.getElementById('type')
        .value == "piscine") {
        document.getElementById('montant_existant')
            .disabled = true;
    } else {
        document.getElementById('montant_existant')
            .disabled = false;
    }
}

document.getElementById('type').addEventListener(
    "click", clikselect);
clikselect();

$("#type").on("change", function() {
    $checkbox1 = $('#checkbox1');
    $checkbox2 = $('#checkbox2');
    if ($("#type").val() != 'neuve') {
        $checkbox1.prop('disabled', true);
        $checkbox2.prop('disabled', true);
    } else {
        $checkbox1.prop('disabled', false);
        $checkbox2.prop('disabled', false);
    }
});

$("#pente").on("change", function() {
    $modal = $('#myModal');
    if ($(this).val() === '99') {
        $modal.modal('show');
    }
});
$("#mer").on("change", function() {
    $modal = $('#myModa');
    if ($(this).val() === 'oui') {
        $modal.modal('show');
    }
});

$("#mer").on("change", function() {
    $modal = $('#myModa');
    if ($(this).val() === 'oui') {
        $modal.modal('show');
    }
});

function openForm() {
    document.getElementById("popupExtension").style.display =
        "block";
    let texte = document.getElementById("superficie-label");
    texte.innerHTML = "Superficie de l'extension créée en m²";
}

function closeForm() {
    document.getElementById("popupExtension").style.display =
        "none";
}

window.onclick = function(event) {
    if (event.target.className === "popup-extension") {
        event.target.style.display = "none";
    }
};

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$("form").each(function() {
    $(this).find(':input[type="submit"]').prop('disabled', true);
});

function correctCaptcha() {
    $("form").each(function() {
        $(this).find(':input[type="submit"]').prop('disabled', false);
    });
}