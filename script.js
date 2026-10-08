/**
 * SCRIPT.JS
 * Complete interactive logic for Friendship Scrapbook:
 * - Particle engine for heart bursts & birthday confetti
 * - Web Audio API chime & upbeat Telugu melody synthesizer
 * - Interactive sticker handlers (Ticket to Happiness 3D flip, Teddy bounce, etc.)
 * - Gift gate modal with playful runaway "NO THANKS" button
 * - Spotify soundtrack player ("Chitti Nee Navvante" - Jathi Ratnalu)
 * - Polaroid photo lightbox
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. POPULATE STICKER HOLDERS FROM STICKERS.JS CATALOG
  // ==========================================================================
  function injectStickers() {
    // Hero Cover stickers
    const heroBow = document.getElementById('sticker-top-bow');
    if (heroBow) heroBow.innerHTML = STICKER_SVGS.bowRed;

    const cornerButterfly = document.getElementById('sticker-corner-butterfly');
    if (cornerButterfly) cornerButterfly.innerHTML = STICKER_SVGS.butterfly;

    const stickFriendsHero = document.getElementById('sticker-stick-friends-hero');
    if (stickFriendsHero) stickFriendsHero.innerHTML = STICKER_SVGS.stickFriends;

    const teddyHero = document.getElementById('sticker-teddy-hero');
    if (teddyHero) teddyHero.innerHTML = STICKER_SVGS.teddy;

    const noteHero = document.getElementById('sticker-note-hero');
    if (noteHero) noteHero.innerHTML = STICKER_SVGS.noteFriendship;

    // Soundtrack / Song page stickers
    const spotifyDisc = document.getElementById('sticker-spotify-disc');
    if (spotifyDisc) spotifyDisc.innerHTML = STICKER_SVGS.spotifyHeart;

    const holderWaveform = document.getElementById('holder-waveform-sticker');
    if (holderWaveform) holderWaveform.innerHTML = STICKER_SVGS.audioWaveform;

    const ticketHappinessSong = document.getElementById('holder-ticket-happiness-song');
    if (ticketHappinessSong) ticketHappinessSong.innerHTML = STICKER_SVGS.ticketHappiness;

    const mygirlSong = document.getElementById('sticker-mygirl-song');
    if (mygirlSong) mygirlSong.innerHTML = STICKER_SVGS.stickerMyGirl;

    // Letter page stickers
    const ticketAnywhereLetter = document.getElementById('holder-ticket-anywhere-letter');
    if (ticketAnywhereLetter) ticketAnywhereLetter.innerHTML = STICKER_SVGS.ticketAnywhere;
  }

  injectStickers();

  // ==========================================================================
  // 2. WEB AUDIO API SYNTHESIZER (UPBEAT CHITTI MELODY & CHIMES)
  // ==========================================================================
  let audioCtx = null;
  let sfxEnabled = true;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Soft musical chime for interactions
  function playChime(freq = 523.25, type = 'sine', duration = 0.4) {
    if (!sfxEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + duration * 0.5);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  }

  // Bouncy, upbeat melody pattern inspired by "Chitti Nee Navvante"
  let synthInterval = null;
  let isSynthPlaying = false;
  const chittiMelodyNotes = [
    523.25, 587.33, 659.25, 659.25, 587.33, 523.25, 440.00, 392.00,
    440.00, 523.25, 523.25, 587.33, 659.25, 783.99, 659.25, 523.25
  ];
  let noteIndex = 0;

  function toggleSynthLoop(start) {
    if (start) {
      if (isSynthPlaying) return;
      isSynthPlaying = true;
      synthInterval = setInterval(() => {
        const note = chittiMelodyNotes[noteIndex % chittiMelodyNotes.length];
        noteIndex++;
        playMusicBoxNote(note);
      }, 320);
    } else {
      isSynthPlaying = false;
      if (synthInterval) clearInterval(synthInterval);
    }
  }

  function playMusicBoxNote(freq) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.09, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch (e) {}
  }

  // ==========================================================================
  // 3. PARTICLE & CONFETTI CANVAS ENGINE
  // ==========================================================================
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor(x, y, type = 'heart') {
      this.x = x;
      this.y = y;
      this.type = type;
      this.size = type === 'heart' ? (Math.random() * 12 + 10) : (Math.random() * 8 + 6);
      this.speedX = (Math.random() - 0.5) * 8;
      this.speedY = (Math.random() - 1.2) * 9;
      this.gravity = 0.18;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 6;
      this.alpha = 1;
      this.decay = Math.random() * 0.015 + 0.012;
      
      const colors = ['#c92a3f', '#7a182b', '#dfa8a0', '#fff8ee', '#d4af37', '#e2847a'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.speedY += this.gravity;
      this.rotation += this.rotSpeed;
      this.alpha -= this.decay;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, this.alpha);

      if (this.type === 'heart') {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        const topCurveHeight = this.size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(0, 0, -this.size / 2, 0, -this.size / 2, topCurveHeight);
        ctx.bezierCurveTo(-this.size / 2, (this.size + topCurveHeight) / 2, 0, (this.size + topCurveHeight) / 1.5, 0, this.size);
        ctx.bezierCurveTo(0, (this.size + topCurveHeight) / 1.5, this.size / 2, (this.size + topCurveHeight) / 2, this.size / 2, topCurveHeight);
        ctx.bezierCurveTo(this.size / 2, 0, 0, 0, 0, topCurveHeight);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 1.5);
      }
      ctx.restore();
    }
  }

  function spawnParticles(x, y, count = 25, type = 'heart') {
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(x, y, type));
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw();
      if (particles[i].alpha <= 0) {
        particles.splice(i, 1);
      }
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // ==========================================================================
  // 4. SPEECH TOAST NOTIFIER FOR INTERACTIVE STICKERS
  // ==========================================================================
  const toast = document.getElementById('speech-toast');
  let toastTimer = null;

  function showToast(message, duration = 3200) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, duration);
  }

  // ==========================================================================
  // 5. INTERACTIVE GIFT GATE MODAL (PLAYFUL RUNAWAY NO BUTTON)
  // ==========================================================================
  const gateOverlay = document.getElementById('gift-gate');
  const btnGateYes = document.getElementById('btn-gate-yes');
  const btnGateNo = document.getElementById('btn-gate-no');

  let noClickCount = 0;
  const noExcuses = [
    "Are you sure? 🥺",
    "Wrong button bestie! 😂",
    "You can't escape my love! 😜",
    "Click Yes already! 💕",
    "Besties don't click No! 😤"
  ];

  function dodgeNoButton() {
    noClickCount++;
    playChime(350, 'square', 0.2);
    btnGateNo.querySelector('span').textContent = noExcuses[noClickCount % noExcuses.length];

    const randomX = (Math.random() - 0.5) * 120;
    const randomY = (Math.random() - 0.5) * 50;
    btnGateNo.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.92)`;
  }

  if (btnGateNo) {
    btnGateNo.addEventListener('mouseenter', dodgeNoButton);
    btnGateNo.addEventListener('click', (e) => {
      e.preventDefault();
      dodgeNoButton();
    });
  }

  if (btnGateYes) {
    btnGateYes.addEventListener('click', () => {
      playChime(659.25, 'triangle', 0.5);
      const rect = btnGateYes.getBoundingClientRect();
      spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 40, 'heart');
      
      gateOverlay.classList.add('hidden');
      showToast("Welcome to your birthday scrapbook! ♡", 3500);
      // Strictly NO audio playback on entrance! Audio starts ONLY on user click of the song button.
    });
  }

  // ==========================================================================
  // 6. SOUNDTRACK PLAYER ("Chitti Nee Navvante" - Jathi Ratnalu)
  // ==========================================================================
  const bgAudio = document.getElementById('bg-audio');
  const btnTrackPlay = document.getElementById('btn-track-play');
  const albumPlayBtn = document.getElementById('album-play-btn');
  const soundtrackCard = document.getElementById('soundtrack-card');
  const volumeSlider = document.getElementById('audio-volume');
  const btnMusicToggle = document.getElementById('btn-music-toggle');
  let isPlaying = false;
  let pendingPlayRequest = false;

  // YouTube IFrame Player for official "Chitti Nee Navvante" audio from Lahari Music
  let ytPlayer = null;
  let ytReady = false;

  window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('yt-player', {
      height: '200',
      width: '200',
      videoId: 'uvCbZxYdLuU', // Official "Chitti" Video Song - Lahari Music (Jathi Ratnalu)
      playerVars: {
        'autoplay': 0,
        'controls': 0,
        'loop': 1,
        'playlist': 'uvCbZxYdLuU',
        'modestbranding': 1,
        'playsinline': 1
      },
      events: {
        'onReady': () => {
          ytReady = true;
          if (volumeSlider && ytPlayer && typeof ytPlayer.setVolume === 'function') {
            ytPlayer.setVolume(parseFloat(volumeSlider.value) * 100);
          }
          if (pendingPlayRequest) {
            pendingPlayRequest = false;
            playYouTubeAudio();
          }
        },
        'onStateChange': (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            isPlaying = true;
            soundtrackCard.classList.add('is-playing');
            btnTrackPlay.textContent = '❚❚';
            albumPlayBtn.textContent = '❚❚';
          } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
            isPlaying = false;
            soundtrackCard.classList.remove('is-playing');
            btnTrackPlay.textContent = '▶';
            albumPlayBtn.textContent = '▶';
          }
        }
      }
    });
  };

  const ytScript = document.createElement('script');
  ytScript.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(ytScript);

  function startSoundtrackPlayback() {
    isPlaying = true;
    soundtrackCard.classList.add('is-playing');
    btnTrackPlay.textContent = '❚❚';
    albumPlayBtn.textContent = '❚❚';

    // 1. Try local audio file (assets/chitti.mp3) first if present
    if (bgAudio) {
      bgAudio.volume = volumeSlider ? parseFloat(volumeSlider.value) : 0.8;
      const playPromise = bgAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Playing local audio
        }).catch(() => {
          // Play official YouTube audio of Chitti Nee Navvante
          playYouTubeAudio();
        });
      } else {
        playYouTubeAudio();
      }
    } else {
      playYouTubeAudio();
    }
  }

  function playYouTubeAudio() {
    if (ytPlayer && ytReady && typeof ytPlayer.playVideo === 'function') {
      const vol = volumeSlider ? parseFloat(volumeSlider.value) * 100 : 80;
      ytPlayer.setVolume(vol);
      ytPlayer.playVideo();
    } else {
      pendingPlayRequest = true;
    }
  }

  function pauseSoundtrackPlayback() {
    isPlaying = false;
    pendingPlayRequest = false;
    soundtrackCard.classList.remove('is-playing');
    btnTrackPlay.textContent = '▶';
    albumPlayBtn.textContent = '▶';

    if (bgAudio) bgAudio.pause();
    if (ytPlayer && ytReady && typeof ytPlayer.pauseVideo === 'function') {
      ytPlayer.pauseVideo();
    }
    toggleSynthLoop(false);
  }

  function toggleSoundtrack() {
    if (isPlaying) {
      pauseSoundtrackPlayback();
      showToast("Music paused ⏸");
    } else {
      startSoundtrackPlayback();
      showToast("Playing 'Chitti Nee Navvante' 🎵 (Jathi Ratnalu)");
    }
  }

  if (btnTrackPlay) btnTrackPlay.addEventListener('click', toggleSoundtrack);
  if (albumPlayBtn) albumPlayBtn.addEventListener('click', toggleSoundtrack);
  if (btnMusicToggle) btnMusicToggle.addEventListener('click', toggleSoundtrack);

  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      const vol = parseFloat(e.target.value);
      if (bgAudio) bgAudio.volume = vol;
      if (ytPlayer && ytReady && typeof ytPlayer.setVolume === 'function') {
        ytPlayer.setVolume(vol * 100);
      }
    });
  }

  // SFX mute toggle
  const btnSfxToggle = document.getElementById('btn-sfx-toggle');
  if (btnSfxToggle) {
    btnSfxToggle.addEventListener('click', () => {
      sfxEnabled = !sfxEnabled;
      btnSfxToggle.textContent = sfxEnabled ? '🔔' : '🔕';
      showToast(sfxEnabled ? "Sound effects enabled 🔔" : "Sound effects muted 🔕");
    });
  }

  // ==========================================================================
  // 7. INTERACTIVE STICKERS BEHAVIOR
  // ==========================================================================

  // 🧸 Teddy Bear Sticker: Bounce & "Sending you a tiny birthday hug."
  const teddyHero = document.getElementById('sticker-teddy-hero');
  if (teddyHero) {
    teddyHero.addEventListener('click', (e) => {
      playChime(587.33, 'triangle', 0.35);
      const rect = teddyHero.getBoundingClientRect();
      spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 14, 'heart');

      teddyHero.animate([
        { transform: 'scale(1) rotate(0deg)' },
        { transform: 'scale(1.22) rotate(-12deg)' },
        { transform: 'scale(1.15) rotate(10deg)' },
        { transform: 'scale(1) rotate(0deg)' }
      ], { duration: 550, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' });

      showToast("Sending you a tiny birthday hug. 🧸🫂");
    });
  }

  // 🎟 "Ticket To Happiness": 3D Flip revealing hidden message
  const ticketHappiness = document.getElementById('ticket-happiness-elem');
  if (ticketHappiness) {
    ticketHappiness.addEventListener('click', (e) => {
      playChime(440, 'sine', 0.25);
      ticketHappiness.classList.toggle('is-flipped');
      const rect = ticketHappiness.getBoundingClientRect();
      spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 15, 'heart');
    });
  }

  // 🎟 "Ticket To Anywhere": Tap reveals quote
  const ticketAnywhere = document.getElementById('ticket-anywhere-elem');
  if (ticketAnywhere) {
    ticketAnywhere.addEventListener('click', (e) => {
      playChime(523.25, 'triangle', 0.3);
      const rect = ticketAnywhere.getBoundingClientRect();
      spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 14, 'heart');
      showToast("Wherever life takes us, I hope we keep finding our way back to each other. ✈️🌍", 4500);
    });
  }

  // 🦋 Butterfly Sticker: Gentle floating motion across page
  const cornerButterfly = document.getElementById('sticker-corner-butterfly');
  if (cornerButterfly) {
    cornerButterfly.addEventListener('click', (e) => {
      playChime(784.0, 'sine', 0.4);
      const rect = cornerButterfly.getBoundingClientRect();
      spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 16, 'heart');

      const randX = (Math.random() - 0.5) * 160;
      const randY = (Math.random() - 0.5) * 100;
      cornerButterfly.animate([
        { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
        { transform: `translate(${randX * 0.5}px, ${randY - 35}px) scale(1.2) rotate(-15deg)` },
        { transform: `translate(${randX}px, ${randY}px) scale(1) rotate(5deg)` }
      ], { duration: 1200, easing: 'cubic-bezier(0.25, 1, 0.5, 1)' });

      showToast("Fluttering by to bring you birthday magic! 🦋✨");
    });
  }

  // "my girl" Heart Sticker: "Obviously. You're stuck with me forever. ♡"
  const mygirlElem = document.getElementById('sticker-mygirl-song');
  if (mygirlElem) {
    mygirlElem.addEventListener('click', (e) => {
      playChime(587.33, 'triangle', 0.35);
      const rect = mygirlElem.getBoundingClientRect();
      spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 18, 'heart');
      showToast("Obviously. You're stuck with me forever. ♡", 4000);
    });
  }

  // 🎵 Spotify Sticker: Toggles player
  const spotifyDiscElem = document.getElementById('sticker-spotify-disc');
  if (spotifyDiscElem) {
    spotifyDiscElem.addEventListener('click', () => {
      toggleSoundtrack();
    });
  }

  // Wax Seal on Big Letter
  const btnWaxSeal = document.getElementById('btn-wax-seal');
  const letterSheet = document.getElementById('scalloped-letter-sheet');
  if (btnWaxSeal && letterSheet) {
    btnWaxSeal.addEventListener('click', (e) => {
      playChime(523.25, 'triangle', 0.4);
      const rect = btnWaxSeal.getBoundingClientRect();
      spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 25, 'heart');

      letterSheet.animate([
        { transform: 'scale(0.97) translateY(10px)' },
        { transform: 'scale(1.02) translateY(-8px)' },
        { transform: 'scale(1) translateY(0)' }
      ], { duration: 600, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' });

      showToast("Sealed with unconditional love & friendship! ♡");
    });
  }

  // ==========================================================================
  // 8. BIRTHDAY CANDLE BLOW-OUT CEREMONY
  // ==========================================================================
  const candleTrigger = document.getElementById('candle-trigger');
  const candleFlame = document.getElementById('candle-flame');
  const celebrationBanner = document.getElementById('celebration-banner');
  const wishHint = document.getElementById('wish-hint');
  let candleBlown = false;

  if (candleTrigger) {
    candleTrigger.addEventListener('click', () => {
      if (candleBlown) return;
      candleBlown = true;

      candleFlame.classList.add('extinguished');
      playChime(880, 'sine', 0.6);

      const rect = candleTrigger.getBoundingClientRect();
      spawnParticles(rect.left + rect.width / 2, rect.top, 50, 'confetti');
      spawnParticles(rect.left + rect.width / 2, rect.top, 35, 'heart');

      wishHint.textContent = "Your wish has been sent to the universe! ✨";
      celebrationBanner.classList.add('revealed');

      showToast("🎉 Happy Birthday Bestie! May all your dreams come true! 🎂", 5000);
    });
  }

  // ==========================================================================
  // 9. POLAROID PHOTO LIGHTBOX MODAL
  // ==========================================================================
  const lightbox = document.getElementById('photo-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, caption) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    playChime(523.25, 'sine', 0.2);
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('.polaroid-card').forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-src');
      const caption = card.getAttribute('data-caption');
      if (src) openLightbox(src, caption);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });

  // ==========================================================================
  // 10. SCRAPBOOK RIBBON NAVIGATION
  // ==========================================================================
  const navTabs = document.querySelectorAll('.nav-tab-btn');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      const targetSec = document.getElementById(targetId);
      if (targetSec) {
        navTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        targetSec.scrollIntoView({ behavior: 'smooth' });
        playChime(440, 'sine', 0.15);
      }
    });
  });

  const sections = document.querySelectorAll('.scrapbook-page');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) {
        current = sec.getAttribute('id');
      }
    });
    if (current) {
      navTabs.forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-target') === current);
      });
    }
  }, { passive: true });

});
