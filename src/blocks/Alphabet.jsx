import React from 'react';
import AudioEl from './AudioEl';
import ExDescription from './ExDescription';

const chars = [
  {
    id: 0,
    char: 'a',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/A.mp3',
  },
  {
    id: 1,
    char: 'ą',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/a_nose.mp3',
  },
  {
    id: 2,
    char: 'b',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/B.mp3',
  },
  {
    id: 3,
    char: 'с',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/C.mp3',
  },
  {
    id: 4,
    char: 'ć',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/c_soft.mp3',
  },
  {
    id: 5,
    char: 'd',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/D.mp3',
  },
  {
    id: 6,
    char: 'е',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/E.mp3',
  },
  {
    id: 7,
    char: 'ę',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/e_nose.mp3',
  },
  {
    id: 8,
    char: 'f',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/F.mp3',
  },
  {
    id: 9,
    char: 'g',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/G.mp3',
  },
  {
    id: 10,
    char: 'h',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/H.mp3',
  },
  {
    id: 11,
    char: 'i',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/I.mp3',
  },
  {
    id: 12,
    char: 'j',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/J.mp3',
  },
  {
    id: 13,
    char: 'k',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/K.mp3',
  },
  {
    id: 14,
    char: 'l',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/L.mp3',
  },
  {
    id: 15,
    char: 'ł',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/l_w.mp3',
  },
  {
    id: 16,
    char: 'm',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/M.mp3',
  },
  {
    id: 17,
    char: 'n',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/N.mp3',
  },
  {
    id: 18,
    char: 'ń',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/n_soft­.mp3',
  },
  {
    id: 19,
    char: 'o',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/O.mp3',
  },
  {
    id: 20,
    char: 'ó',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/U.mp3',
  },
  {
    id: 21,
    char: 'p',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/P.mp3',
  },
  {
    id: 22,
    char: 'r',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/R.mp3',
  },
  {
    id: 23,
    char: 's',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/S.mp3',
  },
  {
    id: 24,
    char: 'ś',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/s_soft.mp3',
  },
  {
    id: 25,
    char: 't',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/T.mp3',
  },
  {
    id: 26,
    char: 'u',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/U.mp3',
  },
  {
    id: 27,
    char: 'w',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/W.mp3',
  },
  {
    id: 28,
    char: 'y',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/Y.mp3',
  },
  {
    id: 29,
    char: 'z',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/Z.mp3',
  },
  {
    id: 30,
    char: 'ź',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/z_soft.mp3',
  },
  {
    id: 31,
    char: 'ż',
    sound: 'https://nanawebdevbucket.s3.amazonaws.com/alfabet/Z_hard.mp3',
  },
];

function Alphabet() {
  const renderAlphabet = () =>
    chars.map(v => {
      const upperChar = v.char.toUpperCase();

      return (
        <li className='Alphabet__item' key={v.id}>
          <p>{upperChar}</p>
          <AudioEl soundsrc={v.sound} />
        </li>

      );
    });

  return (
    <div className='Alphabet'>
      <h2>Польский алфавит</h2>
      <ExDescription
        text="Нажимайте на букву, чтобы прослушать произношение. Повторяйте за записью"
      />
      <ul>
        {renderAlphabet()}
      </ul>
    </div>
  );
}

export default Alphabet;