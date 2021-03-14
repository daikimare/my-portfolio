import React from 'react';

export default function Nav() {

  // const [open, setOpen] = useState(false);

  return(
    <div>
      <nav aria-expanded={open}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Post</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}