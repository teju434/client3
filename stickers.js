/**
 * STICKERS.JS
 * High-definition SVG die-cut stickers inspired by the reference scrapbook sheet:
 * - White die-cut outline (stroke/filter)
 * - Authentic handmade & vintage aesthetic
 * - Warm chocolate brown, burgundy, cream, beige, dusty pink palette
 */

const STICKER_SVGS = {
  // 1. Fluffy Brown Teddy Bear with White Die-Cut Border
  teddy: `
    <svg viewBox="0 0 100 110" class="sticker-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="sticker-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="rgba(40,20,10,0.25)"/>
        </filter>
        <radialGradient id="bear-fur" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#a67c52"/>
          <stop offset="70%" stop-color="#805634"/>
          <stop offset="100%" stop-color="#674123"/>
        </radialGradient>
        <radialGradient id="bear-snout" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#d4b494"/>
          <stop offset="100%" stop-color="#b89370"/>
        </radialGradient>
      </defs>
      <!-- White Die-Cut Silhouette Buffer -->
      <g stroke="#ffffff" stroke-width="7" stroke-linejoin="round" stroke-linecap="round" fill="#ffffff" filter="url(#sticker-shadow)">
        <circle cx="28" cy="28" r="14" />
        <circle cx="72" cy="28" r="14" />
        <ellipse cx="50" cy="46" rx="28" ry="24" />
        <ellipse cx="50" cy="78" rx="29" ry="26" />
        <ellipse cx="23" cy="88" rx="14" ry="12" />
        <ellipse cx="77" cy="88" rx="14" ry="12" />
        <ellipse cx="24" cy="62" rx="10" ry="14" />
        <ellipse cx="76" cy="62" rx="10" ry="14" />
      </g>
      <!-- Bear Body Inner Layers -->
      <g id="bear-art">
        <!-- Ears -->
        <circle cx="28" cy="28" r="12" fill="url(#bear-fur)" />
        <circle cx="28" cy="28" r="6" fill="#674123" opacity="0.6"/>
        <circle cx="72" cy="28" r="12" fill="url(#bear-fur)" />
        <circle cx="72" cy="28" r="6" fill="#674123" opacity="0.6"/>
        <!-- Body -->
        <ellipse cx="50" cy="78" rx="27" ry="24" fill="url(#bear-fur)" />
        <ellipse cx="50" cy="79" rx="17" ry="16" fill="url(#bear-snout)" opacity="0.55"/>
        <!-- Arms -->
        <ellipse cx="25" cy="63" rx="9" ry="13" transform="rotate(20 25 63)" fill="url(#bear-fur)" />
        <ellipse cx="75" cy="63" rx="9" ry="13" transform="rotate(-20 75 63)" fill="url(#bear-fur)" />
        <!-- Feet/Paws -->
        <ellipse cx="23" cy="88" rx="13" ry="11" fill="url(#bear-fur)" />
        <ellipse cx="23" cy="88" rx="8" ry="6" fill="url(#bear-snout)" />
        <ellipse cx="77" cy="88" rx="13" ry="11" fill="url(#bear-fur)" />
        <ellipse cx="77" cy="88" rx="8" ry="6" fill="url(#bear-snout)" />
        <!-- Head -->
        <ellipse cx="50" cy="46" rx="26" ry="22" fill="url(#bear-fur)" />
        <!-- Eyes -->
        <circle cx="40" cy="42" r="3.2" fill="#201108" />
        <circle cx="41" cy="41" r="1.1" fill="#ffffff" />
        <circle cx="60" cy="42" r="3.2" fill="#201108" />
        <circle cx="61" cy="41" r="1.1" fill="#ffffff" />
        <!-- Muzzle / Snout -->
        <ellipse cx="50" cy="51" rx="10" ry="7.5" fill="url(#bear-snout)" />
        <!-- Nose -->
        <path d="M47 48 Q50 46 53 48 Q50 52 47 48 Z" fill="#2c170d" />
        <!-- Smile -->
        <path d="M50 51.5 L50 54 M47 54 Q50 56.5 53 54" stroke="#2c170d" stroke-width="1.2" stroke-linecap="round" fill="none"/>
        <!-- Tiny Red Bow on Bear -->
        <path d="M44 65 Q50 67 56 65 Q53 69 50 67 Q47 69 44 65 Z" fill="#9e2a2b" stroke="#ffffff" stroke-width="1"/>
        <circle cx="50" cy="66.5" r="2" fill="#7a1f20"/>
      </g>
    </svg>
  `,

  // 2. Cute Stick-Figure Best Friends Holding Hands with Heart
  stickFriends: `
    <svg viewBox="0 0 120 110" class="sticker-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- White Die-Cut Background Path -->
      <g stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="#ffffff" filter="drop-shadow(0 3px 4px rgba(40,20,10,0.22))">
        <circle cx="34" cy="28" r="15" />
        <circle cx="86" cy="28" r="15" />
        <path d="M34 43 L34 82 M34 82 L20 102 M34 82 L46 102 M34 52 L14 68 M34 52 L60 62" />
        <path d="M86 43 L86 82 M86 82 L72 102 M86 82 L98 102 M86 52 L106 68 M86 52 L60 62" />
        <path d="M60 56 C57 52 50 52 50 58 C50 66 60 72 60 72 C60 72 70 66 70 58 C70 52 63 52 60 56 Z" fill="#ffffff"/>
      </g>
      <!-- Stick Friends Illustration In Vintage Dark Charcoal -->
      <g stroke="#261710" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Friend 1 Head -->
        <circle cx="34" cy="28" r="13" fill="#faf5ee" />
        <!-- Friend 1 Face -->
        <circle cx="29" cy="26" r="1.6" fill="#261710" stroke="none" />
        <circle cx="38" cy="26" r="1.6" fill="#261710" stroke="none" />
        <path d="M30 33 Q34 37 38 33" stroke-width="2.5" fill="none" />
        <!-- Friend 1 Body -->
        <line x1="34" y1="41" x2="34" y2="78" />
        <!-- Legs -->
        <line x1="34" y1="78" x2="22" y2="100" />
        <line x1="34" y1="78" x2="44" y2="100" />
        <!-- Outer Arm -->
        <line x1="34" y1="52" x2="16" y2="68" />
        <!-- Holding Hands Arm to Center -->
        <line x1="34" y1="52" x2="54" y2="62" />

        <!-- Friend 2 Head -->
        <circle cx="86" cy="28" r="13" fill="#faf5ee" />
        <!-- Friend 2 Face -->
        <circle cx="81" cy="26" r="1.6" fill="#261710" stroke="none" />
        <circle cx="90" cy="26" r="1.6" fill="#261710" stroke="none" />
        <path d="M82 33 Q86 37 90 33" stroke-width="2.5" fill="none" />
        <!-- Friend 2 Body -->
        <line x1="86" y1="41" x2="86" y2="78" />
        <!-- Legs -->
        <line x1="86" y1="78" x2="74" y2="100" />
        <line x1="86" y1="78" x2="96" y2="100" />
        <!-- Outer Arm -->
        <line x1="86" y1="52" x2="104" y2="68" />
        <!-- Holding Hands Arm to Center -->
        <line x1="86" y1="52" x2="66" y2="62" />

        <!-- Red Heart Held in Between Hands -->
        <path d="M60 56 C57 51 49 51 49 58 C49 66 60 73 60 73 C60 73 71 66 71 58 C71 51 63 51 60 56 Z" fill="#9e2a2b" stroke="#7a1f20" stroke-width="2"/>
      </g>
    </svg>
  `,

  // 3. Vintage Satin Burgundy Red Ribbon Bow
  bowRed: `
    <svg viewBox="0 0 100 90" class="sticker-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="red-ribbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b83244"/>
          <stop offset="50%" stop-color="#8c1d2e"/>
          <stop offset="100%" stop-color="#681220"/>
        </linearGradient>
      </defs>
      <!-- White Die-Cut Silhouette -->
      <g stroke="#ffffff" stroke-width="7" stroke-linejoin="round" stroke-linecap="round" fill="#ffffff" filter="drop-shadow(0 3px 5px rgba(50,20,15,0.22))">
        <ellipse cx="30" cy="32" rx="20" ry="15" transform="rotate(-25 30 32)" />
        <ellipse cx="70" cy="32" rx="20" ry="15" transform="rotate(25 70 32)" />
        <circle cx="50" cy="38" r="9" />
        <path d="M46 42 Q30 65 24 82 Q32 78 44 80 Q46 60 48 44 Z" />
        <path d="M54 42 Q70 65 76 82 Q68 78 56 80 Q54 60 52 44 Z" />
      </g>
      <!-- Ribbon Art -->
      <g>
        <!-- Left Loop -->
        <path d="M50 36 C35 15 12 20 20 38 C26 48 45 42 50 36 Z" fill="url(#red-ribbon)" stroke="#550c18" stroke-width="1.2"/>
        <path d="M26 31 C22 34 26 38 35 36" stroke="#d96b7d" stroke-width="1.4" fill="none" opacity="0.8"/>
        <!-- Right Loop -->
        <path d="M50 36 C65 15 88 20 80 38 C74 48 55 42 50 36 Z" fill="url(#red-ribbon)" stroke="#550c18" stroke-width="1.2"/>
        <path d="M74 31 C78 34 74 38 65 36" stroke="#d96b7d" stroke-width="1.4" fill="none" opacity="0.8"/>
        <!-- Left Tail -->
        <path d="M47 40 Q32 64 25 82 Q34 77 44 80 Q46 58 49 42 Z" fill="url(#red-ribbon)" stroke="#550c18" stroke-width="1.2"/>
        <!-- Right Tail -->
        <path d="M53 40 Q68 64 75 82 Q66 77 56 80 Q54 58 51 42 Z" fill="url(#red-ribbon)" stroke="#550c18" stroke-width="1.2"/>
        <!-- Center Knot -->
        <circle cx="50" cy="38" r="7" fill="url(#red-ribbon)" stroke="#550c18" stroke-width="1.2"/>
        <path d="M48 35 Q50 37 52 35" stroke="#f096a6" stroke-width="1.2" fill="none"/>
      </g>
    </svg>
  `,

  // 4. Cream Ribbon Bow
  bowCream: `
    <svg viewBox="0 0 100 90" class="sticker-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cream-ribbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff8ed"/>
          <stop offset="60%" stop-color="#eddcc6"/>
          <stop offset="100%" stop-color="#cfb89f"/>
        </linearGradient>
      </defs>
      <!-- White Die-Cut Silhouette -->
      <g stroke="#ffffff" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" fill="#ffffff" filter="drop-shadow(0 3px 5px rgba(50,20,15,0.2))">
        <ellipse cx="30" cy="32" rx="20" ry="15" transform="rotate(-25 30 32)" />
        <ellipse cx="70" cy="32" rx="20" ry="15" transform="rotate(25 70 32)" />
        <circle cx="50" cy="38" r="9" />
        <path d="M46 42 Q30 65 24 82 Q32 78 44 80 Q46 60 48 44 Z" />
        <path d="M54 42 Q70 65 76 82 Q68 78 56 80 Q54 60 52 44 Z" />
      </g>
      <!-- Ribbon Art -->
      <g>
        <path d="M50 36 C35 15 12 20 20 38 C26 48 45 42 50 36 Z" fill="url(#cream-ribbon)" stroke="#ab957d" stroke-width="1.2"/>
        <path d="M50 36 C65 15 88 20 80 38 C74 48 55 42 50 36 Z" fill="url(#cream-ribbon)" stroke="#ab957d" stroke-width="1.2"/>
        <path d="M47 40 Q32 64 25 82 Q34 77 44 80 Q46 58 49 42 Z" fill="url(#cream-ribbon)" stroke="#ab957d" stroke-width="1.2"/>
        <path d="M53 40 Q68 64 75 82 Q66 77 56 80 Q54 58 51 42 Z" fill="url(#cream-ribbon)" stroke="#ab957d" stroke-width="1.2"/>
        <circle cx="50" cy="38" r="7" fill="url(#cream-ribbon)" stroke="#ab957d" stroke-width="1.2"/>
      </g>
    </svg>
  `,

  // 5. Vintage Scalloped Ticket: "TICKET TO HAPPINESS" (Interactive Flip Ticket)
  ticketHappiness: `
    <div class="interactive-ticket-card" id="ticket-happiness-elem" tabindex="0" role="button" aria-label="Ticket To Happiness - Tap to Flip">
      <div class="ticket-card-inner">
        <!-- Front of Ticket -->
        <div class="ticket-face ticket-front dusty-pink-ticket">
          <div class="ticket-diecut-border">
            <div class="ticket-notch left-notch"></div>
            <div class="ticket-notch right-notch"></div>
            <div class="ticket-inner-dashed">
              <div class="ticket-subtext">★ SPECIAL ADMIT ONE ★</div>
              <div class="ticket-main-title">TICKET TO HAPPINESS</div>
              <div class="ticket-footer-row">
                <span>NO. 2026-BF</span>
                <span class="tap-hint">TAP TO FLIP ↻</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Back of Ticket -->
        <div class="ticket-face ticket-back dusty-pink-ticket">
          <div class="ticket-diecut-border">
            <div class="ticket-notch left-notch"></div>
            <div class="ticket-notch right-notch"></div>
            <div class="ticket-inner-dashed secret-revealed">
              <div class="secret-tag">♡ BIRTHDAY WISH ♡</div>
              <p class="secret-msg">"Admit One: Lifetime pass to endless laughs, safe hugs, gossip sessions, and boundless joy. Happy Birthday Bestie!"</p>
              <span class="flip-again">Tap to flip back</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  // 6. Vintage Cream Ticket: "Ticket To Anywhere" (Interactive Tap Quote)
  ticketAnywhere: `
    <div class="interactive-ticket-card ticket-anywhere-style" id="ticket-anywhere-elem" tabindex="0" role="button" aria-label="Ticket To Anywhere - Tap for Message">
      <div class="ticket-diecut-border cream-ticket-border">
        <div class="ticket-notch left-notch"></div>
        <div class="ticket-notch right-notch"></div>
        <div class="ticket-inner-dashed">
          <div class="ticket-row-split">
            <div class="ticket-content-left">
              <div class="ticket-tiny-label">ONE WAY OR RETURN</div>
              <div class="ticket-bold-heading">Ticket To Anywhere</div>
              <div class="ticket-motto">WITH MY FAVORITE PERSON</div>
            </div>
            <div class="ticket-barcode-box">
              <div class="serial-num">146017</div>
              <div class="mini-barcode"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  // 7. Vintage Ticket: "THESE MEMORIES MAKE ME SMILE" (Interactive jump to gallery)
  ticketMemories: `
    <div class="interactive-ticket-card ticket-memories-style" id="ticket-memories-elem" tabindex="0" role="button" aria-label="Memories Ticket - Tap to view Photos">
      <div class="ticket-diecut-border vintage-plate-border">
        <div class="ticket-inner-dashed plate-inner">
          <div class="plate-top-row">
            <span class="plate-star">★ 20</span>
            <span class="plate-tagline">THESE</span>
            <span class="plate-star">26 ★</span>
          </div>
          <div class="plate-main-text">MEMORIES</div>
          <div class="plate-bottom-text">MAKE ME SMILE ♡</div>
        </div>
      </div>
    </div>
  `,

  // 8. Interactive Envelope with Red Heart Wax Seal (Flap opens to reveal letter)
  interactiveEnvelope: `
    <div class="interactive-envelope-sticker" id="interactive-envelope-elem" tabindex="0" role="button" aria-label="Sealed Envelope - Tap to open secret note">
      <div class="envelope-outer-white-border">
        <div class="envelope-body">
          <!-- Letter sliding out -->
          <div class="envelope-letter-sheet">
            <div class="mini-letter-content">
              <div class="letter-stamp">💌</div>
              <div class="letter-title">Dear Bestie,</div>
              <p class="letter-text">You are my chosen family, my easiest laugh, and my favorite memory-maker. So blessed to celebrate you today!</p>
              <div class="letter-sign">— Forever Teju ♡</div>
            </div>
          </div>
          <!-- Envelope Flap & Seal -->
          <div class="envelope-flaps">
            <div class="envelope-flap-top">
              <div class="envelope-wax-heart">♡</div>
            </div>
            <div class="envelope-pocket-front">
              <div class="pocket-crease"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="envelope-tap-badge">Tap to Open 💌</div>
    </div>
  `,

  // 9. Vintage Newsprint Heart Sticker: "my girl" (Interactive tap)
  stickerMyGirl: `
    <div class="interactive-diecut-sticker sticker-mygirl-elem" id="sticker-mygirl-elem" tabindex="0" role="button" aria-label="my girl sticker">
      <svg viewBox="0 0 100 90" class="sticker-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="mygirl-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="rgba(40,15,10,0.25)"/>
          </filter>
          <pattern id="newsprint-pat" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="#f4ebd9"/>
            <line x1="2" y1="8" x2="38" y2="8" stroke="#d5c4aa" stroke-width="1.5" stroke-dasharray="3,2"/>
            <line x1="2" y1="16" x2="38" y2="16" stroke="#d5c4aa" stroke-width="1.5" stroke-dasharray="4,1.5"/>
            <line x1="2" y1="24" x2="38" y2="24" stroke="#d5c4aa" stroke-width="1.5" stroke-dasharray="2,3"/>
            <line x1="2" y1="32" x2="38" y2="32" stroke="#d5c4aa" stroke-width="1.5" stroke-dasharray="3,2"/>
          </pattern>
        </defs>
        <!-- Die-cut white border -->
        <path d="M50 82 C50 82 12 56 12 32 C12 16 26 10 38 18 C45 22 50 29 50 29 C50 29 55 22 62 18 C74 10 88 16 88 32 C88 56 50 82 50 82 Z" 
              fill="#ffffff" stroke="#ffffff" stroke-width="8" stroke-linejoin="round" filter="url(#mygirl-shadow)"/>
        <!-- Newsprint Heart Body -->
        <path d="M50 80 C50 80 14 55 14 32 C14 17 27 12 38 19 C45 23 50 30 50 30 C50 30 55 23 62 19 C73 12 86 17 86 32 C86 55 50 80 50 80 Z" 
              fill="url(#newsprint-pat)" stroke="#a84351" stroke-width="2.5" stroke-dasharray="4,2"/>
        <!-- Handwritten Script -->
        <text x="50" y="48" font-family="'Caveat', cursive, sans-serif" font-size="22" font-weight="bold" fill="#3a1c1d" text-anchor="middle">my girl</text>
        <path d="M30 54 Q50 60 70 54" stroke="#8b2635" stroke-width="2" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
  `,

  // 10. Oval Pill Badge: "You're perfect."
  badgePerfect: `
    <div class="interactive-diecut-sticker badge-perfect-elem" id="badge-perfect-elem" tabindex="0" role="button" aria-label="You're perfect badge">
      <div class="diecut-white-pill">
        <div class="badge-inner-pill">
          <span class="badge-quote">"You’re perfect."</span>
        </div>
      </div>
    </div>
  `,

  // 11. Torn Paper Note: "your friendship means the world to me."
  noteFriendship: `
    <div class="torn-paper-note-sticker" id="note-friendship-elem">
      <div class="washi-tape-strip top-tape"></div>
      <div class="torn-paper-body">
        <p class="torn-text">your friendship means the world to me.</p>
        <span class="tiny-scribble-heart">♡</span>
      </div>
    </div>
  `,

  // 12. Burgundy Lace Butterfly (Interactive gentle flight)
  butterfly: `
    <div class="interactive-butterfly-sticker" id="butterfly-elem" tabindex="0" role="button" aria-label="Butterfly sticker - Tap to make it fly!">
      <svg viewBox="0 0 80 70" class="sticker-svg butterfly-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="butterfly-wine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ab2c3e"/>
            <stop offset="60%" stop-color="#731926"/>
            <stop offset="100%" stop-color="#4a0f18"/>
          </linearGradient>
        </defs>
        <!-- Die-Cut Border -->
        <g stroke="#ffffff" stroke-width="7" stroke-linejoin="round" fill="#ffffff" filter="drop-shadow(0 3px 5px rgba(40,15,10,0.22))">
          <path d="M40 35 C28 12 4 16 10 38 C14 50 32 44 40 38 C48 44 66 50 70 38 C76 16 52 12 40 35 Z"/>
          <path d="M40 38 C28 44 14 50 20 62 C26 70 38 56 40 46 C42 56 54 70 60 62 C66 50 52 44 40 38 Z"/>
        </g>
        <!-- Wings -->
        <g class="butterfly-wing-left">
          <path d="M40 34 C28 12 6 17 12 37 C16 48 33 42 40 36 Z" fill="url(#butterfly-wine)" stroke="#521019" stroke-width="1.2"/>
          <path d="M40 37 C29 43 16 49 21 60 C26 68 37 54 40 44 Z" fill="url(#butterfly-wine)" stroke="#521019" stroke-width="1.2"/>
          <!-- Wing Patterns -->
          <circle cx="24" cy="28" r="3.5" fill="#f7d4dc" opacity="0.8"/>
          <circle cx="32" cy="22" r="2.2" fill="#f7d4dc" opacity="0.8"/>
          <circle cx="28" cy="52" r="2.5" fill="#f7d4dc" opacity="0.8"/>
        </g>
        <g class="butterfly-wing-right">
          <path d="M40 34 C52 12 74 17 68 37 C64 48 47 42 40 36 Z" fill="url(#butterfly-wine)" stroke="#521019" stroke-width="1.2"/>
          <path d="M40 37 C51 43 64 49 59 60 C54 68 43 54 40 44 Z" fill="url(#butterfly-wine)" stroke="#521019" stroke-width="1.2"/>
          <!-- Wing Patterns -->
          <circle cx="56" cy="28" r="3.5" fill="#f7d4dc" opacity="0.8"/>
          <circle cx="48" cy="22" r="2.2" fill="#f7d4dc" opacity="0.8"/>
          <circle cx="52" cy="52" r="2.5" fill="#f7d4dc" opacity="0.8"/>
        </g>
        <!-- Body & Antennae -->
        <line x1="40" y1="20" x2="34" y2="12" stroke="#2c1014" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="40" y1="20" x2="46" y2="12" stroke="#2c1014" stroke-width="1.5" stroke-linecap="round"/>
        <ellipse cx="40" cy="38" rx="2.5" ry="14" fill="#2c1014"/>
      </svg>
    </div>
  `,

  // 13. Puffy 3D Glossy Heart Sticker (Interactive heart burst)
  puffyHeart: `
    <div class="interactive-diecut-sticker heart-burst-elem" tabindex="0" role="button" aria-label="Heart sticker - Tap to burst hearts!">
      <svg viewBox="0 0 70 65" class="sticker-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="puffy-red" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stop-color="#e63946"/>
            <stop offset="65%" stop-color="#b51a2b"/>
            <stop offset="100%" stop-color="#7a101d"/>
          </radialGradient>
        </defs>
        <!-- Die-cut white border -->
        <path d="M35 56 C35 56 10 38 10 22 C10 11 19 6 27 12 C32 15 35 20 35 20 C35 20 38 15 43 12 C51 6 60 11 60 22 C60 38 35 56 35 56 Z" 
              fill="#ffffff" stroke="#ffffff" stroke-width="7" stroke-linejoin="round" filter="drop-shadow(0 3px 5px rgba(50,15,15,0.25))"/>
        <!-- Heart Body -->
        <path d="M35 54 C35 54 12 37 12 22 C12 12 20 8 28 13 C32 16 35 21 35 21 C35 21 38 16 42 13 C50 8 58 12 58 22 C58 37 35 54 35 54 Z" 
              fill="url(#puffy-red)"/>
        <!-- Glossy Highlight Sheen -->
        <ellipse cx="23" cy="18" rx="5" ry="3.5" transform="rotate(-30 23 18)" fill="#ffffff" opacity="0.6"/>
      </svg>
    </div>
  `,

  // 14. Spotify Heart Circular Sticker (Interactive music player trigger)
  spotifyHeart: `
    <div class="interactive-diecut-sticker spotify-sticker-elem" id="spotify-sticker-elem" tabindex="0" role="button" aria-label="Spotify music sticker - Tap to open player">
      <div class="spotify-diecut-circle">
        <div class="spotify-inner-disc">
          <svg viewBox="0 0 60 60" class="sticker-svg" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="#e8a598"/>
            <!-- Wave arcs -->
            <path d="M16 23 Q30 17 44 23" stroke="#ffffff" stroke-width="4.2" stroke-linecap="round" fill="none"/>
            <path d="M19 31 Q30 26 41 31" stroke="#ffffff" stroke-width="3.8" stroke-linecap="round" fill="none"/>
            <!-- Center heart -->
            <path d="M30 38 C30 38 23 32 23 29 C23 26 26 25 28 27 L30 29 L32 27 C34 25 37 26 37 29 C37 32 30 38 30 38 Z" fill="#7a1f2d"/>
          </svg>
        </div>
      </div>
    </div>
  `,

  // 15. Audio Waveform Player Sticker
  audioWaveform: `
    <div class="interactive-diecut-sticker waveform-sticker-elem" id="waveform-sticker-elem" tabindex="0" role="button" aria-label="Audio waveform sticker">
      <div class="waveform-diecut-bar">
        <span class="waveform-play-icon">▶</span>
        <div class="waveform-bars-visualizer">
          <span class="bar bar-1"></span>
          <span class="bar bar-2"></span>
          <span class="bar bar-3"></span>
          <span class="bar bar-heart">♡</span>
          <span class="bar bar-4"></span>
          <span class="bar bar-5"></span>
          <span class="bar bar-6"></span>
        </div>
      </div>
    </div>
  `,

  // 16. Adhesive Band-Aid with Stitched Heart
  bandaid: `
    <div class="interactive-diecut-sticker bandaid-sticker-elem">
      <div class="bandaid-outer-cutout">
        <div class="bandaid-pad">
          <div class="bandaid-dots"></div>
          <span class="bandaid-heart">♡</span>
        </div>
      </div>
    </div>
  `,

  // 17. Flower Branch / Orchids
  flowerBranch: `
    <svg viewBox="0 0 80 110" class="sticker-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- White die cut -->
      <g stroke="#ffffff" stroke-width="7" stroke-linejoin="round" stroke-linecap="round" fill="#ffffff" filter="drop-shadow(0 3px 4px rgba(40,15,10,0.2))">
        <path d="M45 100 Q40 50 25 15"/>
        <circle cx="28" cy="22" r="14"/>
        <circle cx="48" cy="42" r="14"/>
        <circle cx="36" cy="70" r="14"/>
      </g>
      <!-- Stem -->
      <path d="M45 100 Q40 50 25 15" stroke="#483321" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Flower 1 -->
      <g transform="translate(28, 22)">
        <ellipse cx="0" cy="-7" rx="6" ry="8" fill="#9e2a3b"/>
        <ellipse cx="-7" cy="0" rx="8" ry="6" fill="#8c2333"/>
        <ellipse cx="7" cy="0" rx="8" ry="6" fill="#8c2333"/>
        <ellipse cx="-5" cy="7" rx="6" ry="8" fill="#751b29"/>
        <ellipse cx="5" cy="7" rx="6" ry="8" fill="#751b29"/>
        <circle cx="0" cy="0" r="3.5" fill="#fcd34d"/>
      </g>
      <!-- Flower 2 -->
      <g transform="translate(48, 42)">
        <ellipse cx="0" cy="-7" rx="6" ry="8" fill="#9e2a3b"/>
        <ellipse cx="-7" cy="0" rx="8" ry="6" fill="#8c2333"/>
        <ellipse cx="7" cy="0" rx="8" ry="6" fill="#8c2333"/>
        <ellipse cx="-5" cy="7" rx="6" ry="8" fill="#751b29"/>
        <ellipse cx="5" cy="7" rx="6" ry="8" fill="#751b29"/>
        <circle cx="0" cy="0" r="3.5" fill="#fcd34d"/>
      </g>
      <!-- Flower 3 -->
      <g transform="translate(36, 70)">
        <ellipse cx="0" cy="-7" rx="6" ry="8" fill="#9e2a3b"/>
        <ellipse cx="-7" cy="0" rx="8" ry="6" fill="#8c2333"/>
        <ellipse cx="7" cy="0" rx="8" ry="6" fill="#8c2333"/>
        <ellipse cx="-5" cy="7" rx="6" ry="8" fill="#751b29"/>
        <ellipse cx="5" cy="7" rx="6" ry="8" fill="#751b29"/>
        <circle cx="0" cy="0" r="3.5" fill="#fcd34d"/>
      </g>
    </svg>
  `
};
