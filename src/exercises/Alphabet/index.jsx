import React from 'react';
import AudioElement from '../../elements/AudioElement';
import Tip from '../../blocks/Tip';
import { BUCKET_URL } from '../../constants';
import borderLight from "./../../assets/svg/borderLight.svg"
import SvgElement from '../../elements/SvgElement';

const chars = [
  {
    id: 0,
    char: 'a',
    sound: BUCKET_URL + '/alfabet/A.mp3',
  },
  {
    id: 1,
    char: 'ą',
    sound: BUCKET_URL + '/alfabet/a_nose.mp3',
  },
  {
    id: 2,
    char: 'b',
    sound: BUCKET_URL + '/alfabet/B.mp3',
  },
  {
    id: 3,
    char: 'с',
    sound: BUCKET_URL + '/alfabet/C.mp3',
  },
  {
    id: 4,
    char: 'ć',
    sound: BUCKET_URL + '/alfabet/c_soft.mp3',
  },
  {
    id: 5,
    char: 'd',
    sound: BUCKET_URL + '/alfabet/D.mp3',
  },
  {
    id: 6,
    char: 'е',
    sound: BUCKET_URL + '/alfabet/E.mp3',
  },
  {
    id: 7,
    char: 'ę',
    sound: BUCKET_URL + '/alfabet/e_nose.mp3',
  },
  {
    id: 8,
    char: 'f',
    sound: BUCKET_URL + '/alfabet/F.mp3',
  },
  {
    id: 9,
    char: 'g',
    sound: BUCKET_URL + '/alfabet/G.mp3',
  },
  {
    id: 10,
    char: 'h',
    sound: BUCKET_URL + '/alfabet/H.mp3',
  },
  {
    id: 11,
    char: 'i',
    sound: BUCKET_URL + '/alfabet/I.mp3',
  },
  {
    id: 12,
    char: 'j',
    sound: BUCKET_URL + '/alfabet/J.mp3',
  },
  {
    id: 13,
    char: 'k',
    sound: BUCKET_URL + '/alfabet/K.mp3',
  },
  {
    id: 14,
    char: 'l',
    sound: BUCKET_URL + '/alfabet/L.mp3',
  },
  {
    id: 15,
    char: 'ł',
    sound: BUCKET_URL + '/alfabet/l_w.mp3',
  },
  {
    id: 16,
    char: 'm',
    sound: BUCKET_URL + '/alfabet/M.mp3',
  },
  {
    id: 17,
    char: 'n',
    sound: BUCKET_URL + '/alfabet/N.mp3',
  },
  {
    id: 18,
    char: 'ń',
    sound: BUCKET_URL + '/alfabet/n_soft­.mp3',
  },
  {
    id: 19,
    char: 'o',
    sound: BUCKET_URL + '/alfabet/O.mp3',
  },
  {
    id: 20,
    char: 'ó',
    sound: BUCKET_URL + '/alfabet/U.mp3',
  },
  {
    id: 21,
    char: 'p',
    sound: BUCKET_URL + '/alfabet/P.mp3',
  },
  {
    id: 22,
    char: 'r',
    sound: BUCKET_URL + '/alfabet/R.mp3',
  },
  {
    id: 23,
    char: 's',
    sound: BUCKET_URL + '/alfabet/S.mp3',
  },
  {
    id: 24,
    char: 'ś',
    sound: BUCKET_URL + '/alfabet/s_soft.mp3',
  },
  {
    id: 25,
    char: 't',
    sound: BUCKET_URL + '/alfabet/T.mp3',
  },
  {
    id: 26,
    char: 'u',
    sound: BUCKET_URL + '/alfabet/U.mp3',
  },
  {
    id: 27,
    char: 'w',
    sound: BUCKET_URL + '/alfabet/W.mp3',
  },
  {
    id: 28,
    char: 'y',
    sound: BUCKET_URL + '/alfabet/Y.mp3',
  },
  {
    id: 29,
    char: 'z',
    sound: BUCKET_URL + '/alfabet/Z.mp3',
  },
  {
    id: 30,
    char: 'ź',
    sound: BUCKET_URL + '/alfabet/z_soft.mp3',
  },
  {
    id: 31,
    char: 'ż',
    sound: BUCKET_URL + '/alfabet/Z_hard.mp3',
  },
];

export default function Alphabet() {
  const renderAlphabet = () =>
    chars.map(v => {
      const upperChar = v.char.toUpperCase();

      return (
        <li className='Alphabet__item' key={v.id}>
          <p>{upperChar}</p>
          <AudioElement soundsrc={v.sound} />
        </li>

      );
    });

  return (
    <div className='Alphabet'>
      <Tip
        text="Нажимайте на букву, чтобы прослушать произношение. Повторяйте за записью"
      />
      <div className='Alphabet__items'>
        <ul>
          {renderAlphabet()}
        </ul>
      </div>

      <SvgElement currentClass="bottom-line__svg" svg={borderLight} />
    </div>
  );
}
