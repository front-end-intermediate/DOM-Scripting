$_$wp(1);
const intro = ($_$w(1, 0), [
    'spensercanderson@gmail.com',
    'cynthiacaban@yahoo.com',
    'eltonceze@gmail.com',
    'chrismagnemi@gmail.com',
    'brianmcnulty17@gmail.com',
    'nikita.shaiva@yahoo.com',
    'dwhitney@stern.nyu.edu',
    'lyy203@nyu.edu'
]);
const intermediate = ($_$w(1, 1), [
    'spensercanderson@gmail.com',
    'eltonceze@gmail.com',
    'charlosgary@gmail.com',
    'ki575@nyu.edu',
    'brianmcnulty17@gmail.com',
    'nychansu@gmail.com',
    'dwhitney@stern.nyu.edu',
    'lyy203@nyu.edu'
]);
function differentStudents(a1, a2) {
    $_$wf(1);
    var a = ($_$w(1, 2), []);
    var diff = ($_$w(1, 3), []);
    for (let i = 0; $_$w(1, 4), i < intermediate.length; i++) {
        $_$w(1, 5), a[a1[i]] = true;
    }
    for (let i = 0; $_$w(1, 6), i < a2.length; i++) {
        if ($_$w(1, 7), a[a2[i]]) {
            $_$w(1, 8), delete a[a2[i]];
        } else {
            $_$w(1, 9), a[a2[i]] = true;
        }
    }
    for (let i in $_$w(1, 10), a) {
        $_$w(1, 11), diff.push(i);
    }
    return $_$w(1, 12), diff;
}
$_$w(1, 13), $_$tracer.log(differentStudents(intro, intermediate), 'differentStudents(intro, intermediate)', 1, 13);
let uniqueStudents = ($_$w(1, 14), intro.filter(function (student) {
    $_$wf(1);
    return $_$w(1, 15), intermediate.includes(student);
}));
$_$w(1, 16), $_$tracer.log(uniqueStudents, 'uniqueStudents', 1, 16);
$_$wpe(1);