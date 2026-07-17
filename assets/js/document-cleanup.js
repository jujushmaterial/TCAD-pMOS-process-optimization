(() => {
  const content = document.querySelector('.document-content');
  if (!content) return;

  const repositoryBase = '/TCAD-pMOS-process-optimization/';

  content.querySelectorAll('img').forEach((image) => {
    const source = image.getAttribute('src') || '';
    if (!source || /^(?:data:|https?:\/\/)/i.test(source)) return;

    const figureMarker = 'figures/';
    const markerIndex = source.indexOf(figureMarker);
    if (markerIndex < 0) return;

    const figurePath = source.slice(markerIndex);
    image.setAttribute('src', `${repositoryBase}${figurePath}`);
  });

  [...content.querySelectorAll('p')].forEach((paragraph) => {
    const text = paragraph.textContent.replace(/[·|]/g, '').trim();
    const hasMeaningfulElement = paragraph.querySelector(
      'img, picture, figure, video, iframe, svg, canvas, pre, code, table, a, button'
    );
    if (!text && !hasMeaningfulElement) paragraph.remove();
  });
})();
