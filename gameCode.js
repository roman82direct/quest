var event, ok;
var answers = [];


do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (event == -1) {
        getResult();
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
// answers.push((event == 1) ? works.a1 : works.a2);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answers.push(works.a1);
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                getResult();
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        // answers.push((event == 1) ? works.b1 : works.b2);

        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            answers.push(works.b1);
            getResult();
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
            answers.push(works.b2);
            getResult();
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
    answers.push(works.a2);
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                getResult()
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        // answers.push((event == 1) ? works.c1 : works.c2);

        switch (event) {
            case 1: // Второе действие
            answers.push(works.c1);
            getResult();
                break;
            case 2: // Второе действие
            answers.push(works.c2);
            getResult();
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

//-------------------------------------------

function getResult(e){
    answers.forEach(element => console.log(element));//подсказка в консоль
    if (answers.length == 0) {
        alert('Вы не ответили ни на один вопрос');
    } else
        {
        var e = false;
        while (!e) {
            var req = +prompt('Всего сделано ходов: ' + answers.length + '\nДля просмотра Ваших ответов введите номер хода или -1 для выхода:');
            if (req >= 1 && req <= answers.length) {
                alert(answers[req - 1] + '\nУдачи!!!');
                e = true; 
            }
            else if (req == -1){
                alert('Удачи!!!');
                e = true;
                }
            else { 
                alert('Введен некорректный номер окна');
                e = false;   
            }
        } 
    }   
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

