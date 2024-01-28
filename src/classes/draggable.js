const activateDraggables = () => {
  const extractPx = el => {
    const { top, left } = getComputedStyle(el);
    const r = /(-?\d+)(?:px)?/;
    return [top, left].map(s => s.match(r)[1]);
  }

  const relocate = el => e => {
    const [top, left] = extractPx(el);
    const { movementX: x, movementY: y } = e;
    el.style.top = `${Number(top) + y}px`;
    el.style.left = `${Number(left) + x}px`;
  }

  const assignDraggable = (el) => {
    const rl = relocate(el);
    el.addEventListener('mousedown', e => {
      document.addEventListener('mousemove', rl);
    });
    document.addEventListener('mouseup', e => {
      document.removeEventListener('mousemove', rl);
    });
  }

  document.querySelectorAll('.draggable').forEach(assignDraggable);
}

export default activateDraggables;
