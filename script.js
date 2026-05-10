(function () {
  const track = document.getElementById('newsTrack');
  const prevBtn = document.getElementById('newsPrev');
  const nextBtn = document.getElementById('newsNext');
  if (!track || !prevBtn || !nextBtn) return;

  function rotateNext() {
    if (track.firstElementChild) {
      track.appendChild(track.firstElementChild);
    }
  }

  function rotatePrev() {
    if (track.lastElementChild) {
      track.insertBefore(track.lastElementChild, track.firstElementChild);
    }
  }

  function flash(btn) {
    btn.classList.add('is-pressed');
    setTimeout(() => btn.classList.remove('is-pressed'), 200);
  }

  nextBtn.addEventListener('click', () => {
    rotateNext();
    flash(nextBtn);
  });

  prevBtn.addEventListener('click', () => {
    rotatePrev();
    flash(prevBtn);
  });
})();
