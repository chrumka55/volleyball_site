
document.addEventListener('DOMContentLoaded', ()=>{
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  document.querySelectorAll('.thumb').forEach(t => {
    t.addEventListener('click', ()=>{
      modalImg.src = t.dataset.large;
      modal.style.display = 'flex';
    });
  });
  modal.addEventListener('click', (e)=>{
    if(e.target === modal || e.target.id === 'close-modal') modal.style.display = 'none';
  });
});
