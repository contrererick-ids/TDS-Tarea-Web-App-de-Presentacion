function selectProject(index) {
  // Quitar "active" de todos los items de la lista
  document.querySelectorAll('.projects-list-item').forEach(function(item, i) {
    item.classList.toggle('active', i === index);
  });
  // Mostrar proyecto seleccionado
  document.querySelectorAll('.project-card').forEach(function(card, i) {
    card.style.display = i === index ? 'block' : 'none';
  });
}