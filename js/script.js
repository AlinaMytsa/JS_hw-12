'use strict';
let town = null;
let sport = null;
const message = 'Жаль, что Вы не захотели ввести свой ';

const userAge = prompt('В каком году Вы родились?');
if (userAge === '') {
  alert(`${message}` + 'год рождения.')
}

const userTown = prompt('В каком городе Вы живёте?');
if (userTown === null || userTown === '') {
  alert(`${message}` + 'город, в котором живёте.')
}

const userSport = prompt('Какой Ваш любимый вид спорта?');
if (userSport === null || userSport === '') {
  alert(`${message}` + 'любимый вид спорта.')
}

if (userTown === 'Киев') {
  town = 'Вы живёте в столице Украины - Киеве!';
} else if (userTown === 'Варшава') {
  town = 'Вы живёте в столице Польши - Варшаве!';
} else if (userTown === 'Кишинёв') {
  town = 'Вы живёте в столице Молдовы - Кишинёве!';
} else {
    town = `Вы живёте в городе-  ${userTown}.`
}

if (userSport === 'волейбол') {
  sport = 'Круто! Хочешь стать , как Бруно Резенде?';
} else if (userSport === 'баскетбол') {
  sport = 'Круто! Хочешь стать , как Майкл Джордан?';
} else if (userSport === 'плавание') {
  sport = 'Круто! Хочешь стать , как Ян Торп?';
} else {
    sport = 'Круто!'
}

alert('Ваш год рождения - ' + `${userAge}` + '\n' + `${town}` + '\n' + `${sport}`  );



