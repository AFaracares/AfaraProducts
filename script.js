const createLeaves = () => {
  for (let i = 0; i < 15; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.style.left = `${Math.random() * 100}%`;
    leaf.style.animationDuration = `${15 + Math.random() * 10}s`;
    leaf.style.opacity = `${0.2 + Math.random() * 0.3}`;
    document.body.appendChild(leaf);
  }
};
window.onload = createLeaves;
