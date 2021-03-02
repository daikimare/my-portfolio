import React from 'react';
import Link from 'next/link';

export default function SNS() {
  return(
    <div>
        <ul className="">
          <li><Link href="https://github.com/daikimare">GitHub</Link></li>
          <li><Link href = "https://twitter.com/fukutaso46" title = "twitter">Twitter</Link></li>
          <li><Link href="https://qiita.com/daikimare">Qiita</Link></li>
          <li><Link href="https://marehiro.hateblo.jp/">HatenaBlog</Link></li>
          <li><Link href="https://note.com/daikimare">note</Link></li>
        </ul>
    </div>
  )
}
