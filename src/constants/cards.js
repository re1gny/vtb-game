import { ReactComponent as AnswerSign1 } from '../assets/icons/answerSign1.svg';
import { ReactComponent as AnswerSign2 } from '../assets/icons/answerSign2.svg';
import { ReactComponent as AnswerSign3 } from '../assets/icons/answerSign3.svg';
import { ReactComponent as AnswerSign4 } from '../assets/icons/answerSign4.svg';
import TaskImage3 from '../assets/images/taskCardRandomizerBackground.png';
import TaskAudio7 from '../assets/audio/taskAudio7.mp3';

export const CHANCE_CARDS = [
  {
    id: 1,
    title: 'Передача хода',
    description:
      'Эту карточку можно использовать, когда попадается сложное задание. В этом случае вы передаете задание команде слева от вас. Если эта команда выполняет задание, вы вместе двигаетесь вперед по игровому полю на то количество клеток, которое указано в задании. Если задание не выполнено, остаетесь на месте.',
  },
  {
    id: 2,
    title: 'Передача хода',
    description: 'ВТБ поощряет стремление и усердие! Идите вперед на 4 клетки, если у вас есть 3+ любых навыка.',
  },
];

export const SKILL_CARDS = [
  {
    id: 1,
    title: 'Навык: Командная работа',
    description:
      'А ты знал, что у сотрудников ВТБ есть своя валюта?Если нет, то теперь ты стал немного ближе к команде ВТБ\n' +
      'ВТБшки - внутренняя валюта, которой награждаются сотрудники за выполнение показателей (можно приобретать брендированную продукцию).',
  },
];

export const TASK_CARDS = [
  {
    id: 1,
    number: 1,
    type: 'answers',
    answers: [
      { text: 'Паспорт, СНИЛС и ИНН', sign: AnswerSign1, correct: true },
      { text: 'Усы, лапы и хвост', sign: AnswerSign2, correct: false },
      { text: 'Паспорт, СНИЛС, свидетельство о рождении', sign: AnswerSign3, correct: false },
      { text: 'Паспорт, ИНН', sign: AnswerSign4, correct: false },
    ],
    columns: 2,
    title: 'Навык: Тайм-менеджмент',
    description: 'Назовите 3 предмета, без которых нельзя обойтись в офисе',
    subDescription: 'Если выполнили задание:\n' + 'идите вперед на 4 шага',
    timer: 30,
    answer: 'Ответ: ПАО Публичное акционерное общество',
  },
  {
    id: 2,
    number: 2,
    type: 'list',
    items: ['Паспорт, СНИЛС и ИНН', 'Усы, лапы и хвост', 'Паспорт, СНИЛС, свидетельство о рождении', 'Паспорт, ИНН'],
    title: 'Навык: Тайм-менеджмент',
    description: 'Назовите 3 предмета, без которых нельзя обойтись в офисе',
    subDescription: 'Если выполнили задание:\n' + 'идите вперед на 4 шага',
    timer: 30,
    answer: 'Ответ: ПАО Публичное акционерное общество',
  },
  {
    id: 3,
    number: 3,
    type: 'image',
    image: TaskImage3,
    title: 'Навык: Тайм-менеджмент',
    description: 'Назовите 3 предмета, без которых нельзя обойтись в офисе',
    subDescription: 'Если выполнили задание:\n' + 'идите вперед на 4 шага',
    timer: 30,
    answer: 'Ответ: ПАО Публичное акционерное общество',
  },
  {
    id: 4,
    number: 4,
    type: 'list',
    items: ['Принтер'],
    columns: 2,
    description: 'Назовите 3 предмета, без которых нельзя обойтись в офисе',
    subDescription: 'Если выполнили задание:\n' + 'идите вперед на 4 шага',
    timer: 30,
    answer: 'Ответ: ПАО Публичное акционерное общество',
  },
  {
    id: 5,
    number: 5,
    type: 'list',
    items: ['А мы рубль девальвировали, девальвировали, да недодевальвировали…'],
    description: 'Назовите 3 предмета, без которых нельзя обойтись в офисе',
    subDescription: 'Если выполнили задание:\n' + 'идите вперед на 4 шага',
    timer: 30,
    answer: 'Ответ: ПАО Публичное акционерное общество',
  },
  {
    id: 6,
    number: 6,
    type: 'list',
    items: ['Банк', 'ВТБ', 'Терминал', 'Карта', 'Валюта'],
    columns: 2,
    description: 'Назовите 3 предмета, без которых нельзя обойтись в офисе',
    subDescription: 'Если выполнили задание:\n' + 'идите вперед на 4 шага',
    timer: 30,
    answer: 'Ответ: ПАО Публичное акционерное общество',
  },
  {
    id: 7,
    number: 7,
    type: 'audio',
    audio: TaskAudio7,
    description: 'Угадайте звук устройства, которое используется в банке. У вас есть две попытки.',
    fallbackDescription:
      'Угадайте устройство, которое используется в банке, по описанию. Внешнее, периферийное устройство компьютера, предназначенное для вывода текстовой или графической информации, хранящейся в компьютере, на твёрдый физический носитель.',
    subDescription: 'Если выполнили задание:\n' + 'идите вперед на 4 шага',
    answer: 'Ответ: Принтер',
  },
];
