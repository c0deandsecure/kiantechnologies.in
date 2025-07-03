import React from 'react';
import './KeepInTouch.css';

const socialLinks = [
  { name: 'Email', imageSrc: 'https://th.bing.com/th/id/OIP.eyQwTaTGG2IExAf31oxSyQHaHa?w=163&h=180&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3', link: 'mailto:info@kiantechnologies.com' },
  { name: 'WhatsApp', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png', link: 'https://wa.me/917587496155' },
  { name: 'Call Us', imageSrc: 'https://cdn3.iconfinder.com/data/icons/feather-2/24/phone-call-256.png', link: 'tel:+917587496155', className: 'call-us' },
  { name: 'Facebook', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png', link: 'https://www.facebook.com/share/1UdJLhCNkt/' },
  { name: 'Twitter', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png', link: 'https://x.com/kiantechnologie?t=KHZoVXwcXNKLiq9THnINsQ&s=09' },
  { name: 'LinkedIn', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png', link: 'https://www.linkedin.com/company/kiantechnologies/' },
  { name: 'Instagram', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png', link: 'https://www.instagram.com/kiantechnologies' },
  { name: 'Threads', imageSrc: 'https://th.bing.com/th/id/OIP.GSydEPD3YptUdU7tfQdBHwHaEK?w=295&h=180&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3', link: 'https://www.threads.net/@kiantechnologies?invite=0' },
  { name: 'Pinterest', imageSrc: 'https://th.bing.com/th/id/OIP.DepK0wMEZ-L2XN4Ak1umKwHaHa?w=181&h=181&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3', link: 'https://pin.it/7fuyisz50' },
  { name: 'Quora', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png', link: 'https://www.quora.com/profile/Kian-Technologies?ch=18&oid=2902496738&share=0780f9c6&srid=3YnrBG&target_type=user' },
  { name: 'Youtube', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png', link: 'https://www.youtube.com/@kiantechnologies6085' },
  { name: 'Github', imageSrc: 'https://th.bing.com/th/id/OIP.sV7tva-728oySeOUL0-vOwHaHa?w=177&h=180&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3', link: '#' }, // You might want to find the actual Github link
];

function KeepInTouch() {
  return (
    <div className="keep-in-touch-container">
      <div className="section-title">
        <span>... SEND US A MESSAGE ...</span>
        <h2>Keep In Touch.</h2>
      </div>
      <div className="social-icons-grid">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-icon-item ${social.className || ''}`}
          >
            <img src={social.imageSrc} alt={social.name} />
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default KeepInTouch;